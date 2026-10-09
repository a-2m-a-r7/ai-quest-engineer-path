import { allTopics, badges, roadmap } from "../data/roadmap.js";

export const XP_VALUES = {
  handsOn: 30,
  mini: 75,
  capstone: 140,
  boss: 230,
  mastery: 35,
  stage: 10,
};

export function getTopicStageKeys(topic) {
  const keys = topic.subtopics.map((_, i) => `subtopic-${i}`);
  keys.push("project");
  return keys;
}

export const classTitles = [
  { level: 1, title: "Code Novice" },
  { level: 5, title: "Data Apprentice" },
  { level: 10, title: "ML Practitioner" },
  { level: 18, title: "Deep Learning Adept" },
  { level: 28, title: "Vision & Language Specialist" },
  { level: 40, title: "AI Engineer" },
];

export function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

export function startOfWeek(date = new Date()) {
  const copy = new Date(date);
  const day = copy.getDay();
  const diff = copy.getDate() - day + (day === 0 ? -6 : 1);
  copy.setDate(diff);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export function xpRequiredForLevel(level) {
  if (level <= 1) return 0;
  let total = 0;
  for (let step = 1; step < level; step += 1) {
    total += Math.floor(80 + Math.pow(step, 1.52) * 42);
  }
  return total;
}

export function getLevelInfo(xp) {
  let level = 1;
  while (level < 50 && xp >= xpRequiredForLevel(level + 1)) {
    level += 1;
  }
  const currentFloor = xpRequiredForLevel(level);
  const nextLevelXp = xpRequiredForLevel(level + 1);
  const progress =
    nextLevelXp === currentFloor
      ? 1
      : (xp - currentFloor) / (nextLevelXp - currentFloor);
  const title =
    [...classTitles].reverse().find((item) => level >= item.level)?.title ??
    classTitles[0].title;
  return {
    level,
    title,
    currentFloor,
    nextLevelXp,
    progress: Math.max(0, Math.min(1, progress)),
    xpToNext: Math.max(0, nextLevelXp - xp),
  };
}

export function actionKey(topicId, action) {
  return `${topicId}:${action}`;
}

export function bossKey(sectionId) {
  return `${sectionId}:boss`;
}

export function masteryKey(sectionId) {
  return `${sectionId}:mastery`;
}

export function stageKey(topicId, stageName) {
  return `${topicId}:${stageName}`;
}

export function getTopicStageCompletion(progress, topic) {
  const result = {};
  const stageKeys = getTopicStageKeys(topic);
  for (const stage of stageKeys) {
    result[stage] = Boolean(progress.completed[stageKey(topic.id, stage)]);
  }
  // backward compat: if old project keys exist, honour them
  if (
    !result.project &&
    Boolean(progress.completed[actionKey(topic.id, "project")])
  ) {
    result.project = true;
  }
  return result;
}

export function getTopicCompletion(progress, topic) {
  const stages = getTopicStageCompletion(progress, topic);
  const project = stages.project;
  const stageKeys = getTopicStageKeys(topic);
  const allDone = stageKeys.every((s) => stages[s]);
  return {
    project,
    stages,
    complete: allDone,
  };
}

export function getSectionProgress(progress, section) {
  const completedTopics = section.topics.filter(
    (topic) => getTopicCompletion(progress, topic).complete,
  ).length;
  const totalTopics = section.topics.length;
  const bossComplete = Boolean(progress.completed[bossKey(section.id)]);
  const masteryComplete = Boolean(progress.completed[masteryKey(section.id)]);
  return {
    completedTopics,
    totalTopics,
    ratio: totalTopics ? completedTopics / totalTopics : 0,
    topicsComplete: completedTopics === totalTopics,
    bossUnlocked: completedTopics === totalTopics,
    bossComplete,
    masteryComplete,
  };
}

// All sections and topics are always unlocked — open world design
export function isSectionUnlocked(_progress, _sectionIndex) {
  return { unlocked: true, reason: "Open world." };
}

export function isTopicUnlocked(_progress, _section, _topicIndex) {
  return true;
}

export function computeXp(progress) {
  let total = 0;
  for (const topic of allTopics) {
    const stages = getTopicStageCompletion(progress, topic);
    const stageKeys = getTopicStageKeys(topic);
    for (const stageName of stageKeys) {
      if (stages[stageName]) {
        if (stageName === "project") {
          total +=
            topic.project.type === "capstone"
              ? XP_VALUES.capstone
              : XP_VALUES.mini;
        } else {
          total += XP_VALUES.stage;
        }
      }
    }
  }
  for (const section of roadmap) {
    if (progress.completed[bossKey(section.id)]) total += XP_VALUES.boss;
    if (progress.completed[masteryKey(section.id)]) total += XP_VALUES.mastery;
  }
  return total;
}

export function getStreak(progress) {
  const days = [
    ...new Set((progress.activityLog ?? []).map((entry) => entry.date)),
  ]
    .sort()
    .reverse();
  if (!days.length) return 0;
  let cursor = new Date();
  let count = 0;
  const today = todayKey(cursor);
  const hasToday = days.includes(today);
  if (!hasToday) {
    cursor.setDate(cursor.getDate() - 1);
  }
  while (days.includes(todayKey(cursor))) {
    count += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return count;
}

export function getWeeklyPace(progress) {
  const currentStart = startOfWeek();
  const previousStart = new Date(currentStart);
  previousStart.setDate(previousStart.getDate() - 7);
  const current = (progress.activityLog ?? []).filter(
    (entry) => new Date(entry.date) >= currentStart,
  ).length;
  const previous = (progress.activityLog ?? []).filter((entry) => {
    const date = new Date(entry.date);
    return date >= previousStart && date < currentStart;
  }).length;
  const delta =
    previous === 0
      ? current > 0
        ? 100
        : 0
      : Math.round(((current - previous) / previous) * 100);
  return { current, previous, delta };
}

export function getProjectCount(progress) {
  return allTopics.filter((topic) => {
    const stages = getTopicStageCompletion(progress, topic);
    return stages.project;
  }).length;
}

export function getCareerScore(progress) {
  const completedTopicCount = allTopics.filter(
    (topic) => getTopicCompletion(progress, topic).complete,
  ).length;
  const topicScore = (completedTopicCount / allTopics.length) * 46;
  const projectScore = (getProjectCount(progress) / allTopics.length) * 20;
  const bossScore =
    (roadmap.filter((section) => progress.completed[bossKey(section.id)])
      .length /
      roadmap.length) *
    16;
  const streakScore = (Math.min(getStreak(progress), 30) / 30) * 10;
  const resourceScore =
    (Math.min(Object.keys(progress.resourceStatus ?? {}).length, 24) / 24) * 8;
  return Math.round(
    Math.min(
      100,
      topicScore + projectScore + bossScore + streakScore + resourceScore,
    ),
  );
}

export function getNextAction(progress) {
  for (const section of roadmap) {
    for (const topic of section.topics) {
      const completion = getTopicCompletion(progress, topic);
      if (!completion.complete) {
        const stages = completion.stages;
        const stageKeys = getTopicStageKeys(topic);
        for (const stageName of stageKeys) {
          if (!stages[stageName]) {
            return {
              type: stageName,
              section,
              topic,
              label: `${topic.title}`,
              xp:
                stageName === "project"
                  ? topic.project.type === "capstone"
                    ? XP_VALUES.capstone
                    : XP_VALUES.mini
                  : XP_VALUES.stage,
            };
          }
        }
      }
    }
    const sectionState = getSectionProgress(progress, section);
    if (sectionState.bossUnlocked && !sectionState.bossComplete) {
      return {
        type: "boss",
        section,
        topic: null,
        label: section.boss.title,
        xp: XP_VALUES.boss,
      };
    }
  }
  return null;
}

export function getForecast(progress) {
  const completedActions = progress.activityLog?.length ?? 0;
  const firstDate = progress.activityLog?.[0]?.date
    ? new Date(progress.activityLog[0].date)
    : null;
  const remainingTopics = allTopics.filter(
    (topic) => !getTopicCompletion(progress, topic).complete,
  ).length;
  if (!firstDate || completedActions < 3)
    return "Start logging a few actions to unlock a reliable forecast.";
  const elapsedDays = Math.max(
    1,
    Math.ceil((Date.now() - firstDate.getTime()) / 86400000),
  );
  const actionsPerDay = completedActions / elapsedDays;
  const estimatedActions = remainingTopics * 7 + roadmap.length;
  const daysLeft = Math.ceil(estimatedActions / Math.max(actionsPerDay, 0.15));
  const date = new Date();
  date.setDate(date.getDate() + daysLeft);
  return `At this pace, AI Engineer level lands around ${date.toLocaleDateString(
    undefined,
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  )}.`;
}

export function getBadgeState(progress, xp = computeXp(progress)) {
  const level = getLevelInfo(xp).level;
  const streak = getStreak(progress);
  const completedTopics = allTopics.filter(
    (topic) => getTopicCompletion(progress, topic).complete,
  );
  const unlocked = new Set();
  if (
    allTopics.some((topic) => {
      const s = getTopicStageCompletion(progress, topic);
      return s.handsOn;
    })
  )
    unlocked.add("first-task");
  if (
    allTopics.some((topic) => {
      const s = getTopicStageCompletion(progress, topic);
      return s.project;
    })
  )
    unlocked.add("first-project");
  if (level >= 5) unlocked.add("level-5");
  if (streak >= 7) unlocked.add("seven-day-streak");
  if (streak >= 30) unlocked.add("thirty-day-streak");
  if (Object.keys(progress.resourceStatus ?? {}).length >= 10)
    unlocked.add("resource-scout");
  for (const section of roadmap) {
    if (getSectionProgress(progress, section).topicsComplete)
      unlocked.add(`${section.shortTitle.toLowerCase()}-master`);
  }
  if (roadmap.every((section) => progress.completed[bossKey(section.id)]))
    unlocked.add("all-bosses");
  if (completedTopics.length === allTopics.length) unlocked.add("ai-engineer");
  return badges.map((badge) => ({
    ...badge,
    unlocked: unlocked.has(badge.id),
  }));
}

export function getTodayDone(progress) {
  return (progress.activityLog ?? []).some(
    (entry) => entry.date === todayKey(),
  );
}

export function buildInitialProgress() {
  return {
    onboarded: false,
    avatarPath: "Signal Runner",
    completed: {},
    activityLog: [],
    resourceStatus: {},
    settings: {
      sound: true,
      animations: true,
      theme: "dark",
      reminders: true,
    },
  };
}
