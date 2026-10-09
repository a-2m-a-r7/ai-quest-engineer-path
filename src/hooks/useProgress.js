import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  buildInitialProgress,
  computeXp,
  getBadgeState,
  getCareerScore,
  getLevelInfo,
  todayKey,
} from "../lib/gameLogic.js";

const STORAGE_KEY = "ai-quest-engineer-path-progress";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return buildInitialProgress();
    return { ...buildInitialProgress(), ...JSON.parse(raw) };
  } catch {
    return buildInitialProgress();
  }
}

function playTone(type, enabled) {
  if (!enabled) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  const gain = ctx.createGain();
  const osc = ctx.createOscillator();
  const notes =
    type === "level"
      ? [523.25, 659.25, 783.99]
      : type === "badge"
        ? [392, 587.33]
        : [440, 554.37];
  gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.34);
  osc.type = "triangle";
  osc.connect(gain);
  osc.frequency.setValueAtTime(notes[0], ctx.currentTime);
  notes.slice(1).forEach((note, index) => {
    osc.frequency.setValueAtTime(note, ctx.currentTime + (index + 1) * 0.1);
  });
  osc.start();
  osc.stop(ctx.currentTime + 0.36);
}

export function useProgress() {
  const [progress, setProgress] = useState(loadProgress);
  const [celebration, setCelebration] = useState(null);
  const [cinematic, setCinematic] = useState(null);
  const previousBadgeIds = useRef(
    new Set(
      getBadgeState(progress)
        .filter((badge) => badge.unlocked)
        .map((badge) => badge.id),
    ),
  );
  const previousLevel = useRef(getLevelInfo(computeXp(progress)).level);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const stats = useMemo(() => {
    const xp = computeXp(progress);
    return {
      xp,
      level: getLevelInfo(xp),
      careerScore: getCareerScore(progress),
      badges: getBadgeState(progress, xp),
    };
  }, [progress]);

  useEffect(() => {
    const unlocked = stats.badges.filter((badge) => badge.unlocked);
    const nextIds = new Set(unlocked.map((badge) => badge.id));
    const newBadge = unlocked.find(
      (badge) => !previousBadgeIds.current.has(badge.id),
    );
    if (newBadge) {
      setCelebration({
        type: "badge",
        title: newBadge.title,
        detail: "Badge unlocked",
      });
      playTone("badge", progress.settings.sound);
    }
    previousBadgeIds.current = nextIds;
  }, [stats.badges, progress.settings.sound]);

  useEffect(() => {
    if (stats.level.level > previousLevel.current) {
      setCelebration({
        type: "level",
        title: `Level ${stats.level.level}`,
        detail: stats.level.title,
      });
      playTone("level", progress.settings.sound);
    }
    previousLevel.current = stats.level.level;
  }, [stats.level.level, stats.level.title, progress.settings.sound]);

  const logAction = useCallback((label, xp) => {
    const date = todayKey();
    return { date, label, xp, at: new Date().toISOString() };
  }, []);

  const complete = useCallback(
    ({ key, label, xp, section, cinematicPayload }) => {
      setProgress((current) => {
        if (current.completed[key]) return current;
        return {
          ...current,
          completed: { ...current.completed, [key]: true },
          activityLog: [...(current.activityLog ?? []), logAction(label, xp)],
        };
      });
      setCelebration({ type: "xp", title: `+${xp} XP`, detail: label });
      playTone("complete", progress.settings.sound);
      if (cinematicPayload) {
        window.setTimeout(
          () => setCinematic({ section, ...cinematicPayload }),
          450,
        );
      }
    },
    [logAction, progress.settings.sound],
  );

  const setOnboarded = useCallback((avatarPath) => {
    setProgress((current) => ({ ...current, onboarded: true, avatarPath }));
  }, []);

  const updateSettings = useCallback((settings) => {
    setProgress((current) => ({
      ...current,
      settings: { ...current.settings, ...settings },
    }));
  }, []);

  const markResource = useCallback(
    (resource, status) => {
      setProgress((current) => ({
        ...current,
        resourceStatus: {
          ...(current.resourceStatus ?? {}),
          [resource.url]: {
            title: resource.title,
            status,
            language: resource.language,
            cost: resource.cost,
            format: resource.format,
            updatedAt: new Date().toISOString(),
          },
        },
        activityLog:
          status === "opened"
            ? [
                ...(current.activityLog ?? []),
                logAction(`Opened resource: ${resource.title}`, 0),
              ]
            : (current.activityLog ?? []),
      }));
    },
    [logAction],
  );

  const reset = useCallback(() => {
    setProgress(buildInitialProgress());
  }, []);

  return {
    progress,
    stats,
    celebration,
    cinematic,
    setCelebration,
    setCinematic,
    complete,
    setOnboarded,
    updateSettings,
    markResource,
    reset,
  };
}
