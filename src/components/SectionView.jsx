import { AnimatePresence, motion } from "framer-motion";
import {
  BookMarked,
  CheckCircle2,
  Clock3,
  Crown,
  Flame,
  Map,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";
import { roadmap } from "../data/roadmap.js";
import {
  XP_VALUES,
  bossKey,
  getSectionProgress,
  masteryKey,
  stageKey,
  getTopicStageKeys,
} from "../lib/gameLogic.js";
import { useLang } from "../lib/LangContext.jsx";
import { CompletionCheck, ParticleBurst, ProgressBar, cx } from "./Shared.jsx";
import TopicScreen from "./TopicScreen.jsx";

function openResource(resource, markResource) {
  markResource(resource, "opened");
  if (window.aiQuest?.openExternal) {
    window.aiQuest.openExternal(resource.url);
  } else {
    window.open(resource.url, "_blank", "noopener,noreferrer");
  }
}

export default function SectionView({
  sectionId,
  progress,
  complete,
  markResource,
  onBackToMap,
}) {
  const { t, td } = useLang();
  const section = roadmap.find((item) => item.id === sectionId) ?? roadmap[0];
  const [activeTopicId, setActiveTopicId] = useState(section.topics[0].id);
  const [burst, setBurst] = useState(0);
  const sectionState = getSectionProgress(progress, section);
  const activeTopic =
    section.topics.find((topic) => topic.id === activeTopicId) ??
    section.topics[0];

  function handleComplete({ key, label, xp, section: sec, cinematicPayload }) {
    complete({ key, label, xp, section: sec, cinematicPayload });
    setBurst((v) => v + 1);
  }

  function completeBoss() {
    complete({
      key: bossKey(section.id),
      label: section.boss.title,
      xp: XP_VALUES.boss,
      section,
    });
    setBurst((v) => v + 1);
  }

  function completeMastery() {
    complete({
      key: masteryKey(section.id),
      label: `${section.shortTitle} replay mastery`,
      xp: XP_VALUES.mastery,
      section,
    });
    setBurst((v) => v + 1);
  }

  // Per-topic completion: count stages done
  function topicStageDoneCount(topic) {
    const keys = getTopicStageKeys(topic);
    return keys.filter(
      (s) =>
        progress.completed[stageKey(topic.id, s)] ||
        progress.completed[`${topic.id}:${s}`],
    ).length;
  }

  return (
    <motion.main
      className="screen section-screen"
      style={{
        "--section-color": section.color,
        "--section-accent": section.accent,
      }}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
    >
      <header className="section-hero">
        <div>
          <button
            type="button"
            className="section-back-button secondary-button"
            onClick={onBackToMap}
          >
            <Map size={17} />
            {t("backToWorldMap")}
          </button>
          <span className="eyebrow">{section.week}</span>
          <h1>{section.title}</h1>
          <p>
            {section.motif}. {section.unlockHint}
          </p>
          <ProgressBar
            value={sectionState.ratio}
            color={section.color}
            label={`${section.title} completion`}
          />
        </div>
        <div className="world-progress-token">
          <strong>{Math.round(sectionState.ratio * 100)}%</strong>
          <span>
            {t(
              "topicsLabel",
              sectionState.completedTopics,
              sectionState.totalTopics,
            )}
          </span>
        </div>
      </header>

      <section className="section-layout">
        <aside className="topic-path">
          {section.topics.map((topic) => {
            const keys = getTopicStageKeys(topic);
            const totalStages = keys.length;
            const done = topicStageDoneCount(topic);
            const isComplete = done === totalStages;
            const topicLocale = td(topic.id);
            return (
              <button
                type="button"
                key={topic.id}
                className={cx(
                  "topic-node",
                  activeTopic.id === topic.id && "active",
                  isComplete && "complete",
                )}
                onClick={() => setActiveTopicId(topic.id)}
                title={topicLocale.title ?? topic.title}
              >
                <CompletionCheck complete={isComplete} />
                <span>
                  <strong>{topicLocale.title ?? topic.title}</strong>
                  <small>
                    {done > 0
                      ? `${done}/${totalStages} stages`
                      : topic.project.type === "capstone"
                        ? t("capstoneTopicLabel")
                        : t("miniProjectTopicLabel")}
                  </small>
                </span>
              </button>
            );
          })}

          <article
            className={cx(
              "boss-card",
              sectionState.bossUnlocked && "unlocked",
              sectionState.bossComplete && "complete",
            )}
          >
            <Crown size={24} />
            <strong>{section.boss.title}</strong>
            <span>{section.boss.timer}</span>
            {sectionState.bossUnlocked && !sectionState.bossComplete ? (
              <button
                type="button"
                className="primary-button compact"
                onClick={completeBoss}
              >
                {t("clearBoss")}
              </button>
            ) : null}
          </article>
        </aside>

        <section className="topic-detail">
          {burst ? <ParticleBurst seed={burst} /> : null}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTopic.id}
              className="topic-card glass-panel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <TopicScreen
                topic={activeTopic}
                section={section}
                progress={progress}
                complete={handleComplete}
                markResource={(resource, action) =>
                  markResource(resource, action)
                }
              />
            </motion.div>
          </AnimatePresence>

          <aside className="mastery-panel glass-panel">
            <div className="panel-title-row">
              <div>
                <span className="eyebrow">{t("replayMode")}</span>
                <h2>{t("masteryReview")}</h2>
              </div>
              <RotateCcw size={24} />
            </div>
            <p>{t("masteryDetail")}</p>
            <div className="flashcard-row">
              {section.topics.slice(0, 3).map((topic) => (
                <span key={topic.id}>{topic.subtopics[0]}</span>
              ))}
            </div>
            <button
              type="button"
              className="secondary-button"
              disabled={
                !sectionState.topicsComplete || sectionState.masteryComplete
              }
              onClick={completeMastery}
            >
              <Flame size={17} />
              {sectionState.masteryComplete
                ? t("replayCleared")
                : t("runReview", XP_VALUES.mastery)}
            </button>
          </aside>

          <aside className="boss-detail glass-panel">
            <div className="panel-title-row">
              <div>
                <span className="eyebrow">{t("bossChallenge")}</span>
                <h2>{section.boss.title}</h2>
              </div>
              <Clock3 size={24} />
            </div>
            <p>{section.boss.description}</p>
            <ul>
              {section.boss.rewards.map((reward) => (
                <li key={reward}>{reward}</li>
              ))}
            </ul>
          </aside>
        </section>
      </section>
    </motion.main>
  );
}
