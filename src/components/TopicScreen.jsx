import { AnimatePresence, motion } from "framer-motion";
import {
  Brain,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Lightbulb,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { useCallback, useState } from "react";
import {
  XP_VALUES,
  getTopicStageCompletion,
  getTopicStageKeys,
  stageKey,
} from "../lib/gameLogic.js";
import { useLang } from "../lib/LangContext.jsx";
import {
  getStageResources,
  ParticleBurst,
  ProgressBar,
  ResourcePicker,
  cx,
} from "./Shared.jsx";

function openResource(resource, markResource) {
  markResource(resource, "opened");
  if (window.aiQuest?.openExternal) {
    window.aiQuest.openExternal(resource.url);
  } else {
    window.open(resource.url, "_blank", "noopener,noreferrer");
  }
}

function StageRail({ stages, STAGE_META, activeIndex, onJump, accentColor }) {
  return (
    <div className="stage-rail-wrap">
      <div className="stage-rail" role="tablist" aria-label="Topic stages">
        {STAGE_META.map((meta, i) => {
          const done = stages[meta.key];
          const active = i === activeIndex;
          return (
            <button
              key={meta.key}
              type="button"
              role="tab"
              aria-selected={active}
              className={cx("stage-pip", done && "done", active && "active")}
              style={{ "--pip-color": meta.color }}
              onClick={() => onJump(i)}
              title={meta.label}
            >
              <span className="pip-dot">
                {done ? <CheckCircle2 size={11} /> : <span>{i + 1}</span>}
              </span>
              <span className="pip-label">{meta.label}</span>
            </button>
          );
        })}
      </div>
      <div className="stage-rail-progress">
        <ProgressBar
          value={
            STAGE_META.filter((m) => stages[m.key]).length / STAGE_META.length
          }
          color={accentColor}
        />
      </div>
    </div>
  );
}

function QuickCheck({ questions, onComplete, t }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [passed, setPassed] = useState(false);

  function pick(qIndex, optIndex) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }));
  }

  function submit() {
    if (Object.keys(answers).length < questions.length) return;
    setSubmitted(true);
    const isAllCorrect = questions.every((q, i) => answers[i] === q.answer);
    if (isAllCorrect) {
      setPassed(true);
      setTimeout(() => onComplete(), 1500);
    }
  }

  function retry() {
    setAnswers({});
    setSubmitted(false);
  }

  return (
    <div className="quick-check-panel">
      <div className="fun-fact-callout accent">
        <ShieldCheck size={16} />
        <span>{t("guardCheckHint")}</span>
      </div>
      {questions.map((q, qIndex) => {
        const chosen = answers[qIndex];
        const correct = q.answer;
        return (
          <div key={qIndex} className="qc-question">
            <p className="qc-q">{q.question}</p>
            <div className="qc-options">
              {q.options.map((opt, oIndex) => {
                let cls = "qc-option";
                if (submitted || chosen !== undefined) {
                  if (oIndex === correct && submitted) cls += " correct";
                  else if (oIndex === chosen && oIndex !== correct)
                    cls += " wrong";
                }
                if (chosen === oIndex && !submitted) cls += " selected";
                return (
                  <button
                    key={oIndex}
                    type="button"
                    className={cls}
                    onClick={() => pick(qIndex, oIndex)}
                    disabled={submitted}
                  >
                    <span className="qc-option-letter">
                      {String.fromCharCode(65 + oIndex)}
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>
            {submitted && chosen !== correct && (
              <div className="qc-feedback hint">
                <Lightbulb size={14} />
                {t("answerWrong")} {q.explanation}
              </div>
            )}
          </div>
        );
      })}
      {!submitted && (
        <button
          type="button"
          className="primary-button"
          onClick={submit}
          disabled={Object.keys(answers).length < questions.length}
        >
          <Zap size={16} />
          {t("submitQuickCheck")}
        </button>
      )}
      {submitted && !passed && (
        <button
          type="button"
          className="secondary-button danger"
          onClick={retry}
        >
          {t("retryGuardCheck")}
        </button>
      )}
      {submitted && passed && (
        <div className="qc-score-banner">
          <PartyPopper size={20} />
          <strong>{t("guardCheckPassed")}</strong>
        </div>
      )}
    </div>
  );
}

export default function TopicScreen({
  topic,
  section,
  progress,
  complete,
  markResource,
}) {
  const { t, td, isRTL } = useLang();
  const [activeIndex, setActiveIndex] = useState(0);
  const [burst, setBurst] = useState(0);
  const [quizPassed, setQuizPassed] = useState(false);

  const stages = getTopicStageCompletion(progress, topic);
  const topicData = td(topic.id);
  const stageKeys = getTopicStageKeys(topic);
  const completedCount = stageKeys.filter((s) => stages[s]).length;

  const concepts =
    topicData.concepts ??
    topic.subtopics.map((s) => ({ term: s, explain: "" }));

  const STAGE_META = concepts.map((c, i) => ({
    key: `subtopic-${i}`,
    label: c.term,
    type: "subtopic",
    Icon: Brain,
    color: "#b48cff",
    data: c,
  }));

  STAGE_META.push({
    key: "project",
    label:
      topic.project.type === "capstone"
        ? t("capstoneProject")
        : t("miniProject"),
    type: "project",
    Icon: Cpu,
    color: "#ff7ab6",
  });

  const activeKey = STAGE_META[activeIndex]?.key ?? "";
  const activeMeta = STAGE_META[activeIndex] ?? STAGE_META[0];
  const ActiveIcon = activeMeta.Icon;
  const isProjectStage = activeMeta.type === "project";
  const stageResourcePicks = getStageResources(
    topic.resources,
    activeIndex,
    isProjectStage,
  );
  const highlightedIds = stageResourcePicks.map((r) => r.id).filter(Boolean);

  const resourceLabels = {
    pickResources: t("pickResources"),
    pickResourcesSub: t("pickResourcesSub"),
    resourcesLabel: t("curatedResources"),
    languageFilter: t("languageFilter"),
    costFilter: t("costFilter"),
    filterAll: t("filterAll"),
    arabic: t("arabic"),
    english: t("english"),
    free: t("free"),
    paid: t("paid"),
    recommendedPick: t("recommendedPick"),
    open: t("open"),
    noResources: t("noResources"),
  };

  const markStage = useCallback(
    (stageName) => {
      const key = stageKey(topic.id, stageName);
      const xp =
        stageName === "project"
          ? topic.project.type === "capstone"
            ? XP_VALUES.capstone
            : XP_VALUES.mini
          : XP_VALUES.stage;

      const allWillBeDone = stageKeys.every((s) =>
        s === stageName ? true : stages[s],
      );
      const isLastTopic = topic.index === section.topics.length - 1;
      const cinematicPayload =
        stageName === "project" && isLastTopic && allWillBeDone
          ? {
              title: t("worldCleared"),
              learned: topic.subtopics,
              xpEarned: XP_VALUES.boss,
              nextWorld: null,
            }
          : null;

      complete({ key, label: stageName, xp, section, cinematicPayload });
      setBurst((v) => v + 1);

      if (activeIndex < STAGE_META.length - 1) {
        setTimeout(() => setActiveIndex(activeIndex + 1), 600);
      }
    },
    [
      topic,
      section,
      stages,
      complete,
      t,
      stageKeys,
      activeIndex,
      STAGE_META.length,
    ],
  );

  function goNext() {
    setActiveIndex((i) => Math.min(i + 1, STAGE_META.length - 1));
  }

  function goPrev() {
    setActiveIndex((i) => Math.max(i - 1, 0));
  }

  const isNextUnlocked =
    activeIndex < STAGE_META.length - 1 && stages[STAGE_META[activeIndex].key];
  const tryStep =
    topicData.trySteps?.[activeIndex % (topicData.trySteps?.length || 1)];

  return (
    <div className="topic-screen">
      {burst ? <ParticleBurst seed={burst} /> : null}

      <header className="topic-screen-header">
        <div className="topic-title-row">
          <span className="eyebrow">{t("topicNode", topic.index + 1)}</span>
          <h2>{topicData.title ?? topic.title}</h2>
        </div>
        <div className="topic-stage-count">
          <span>{completedCount}</span>
          <span>/</span>
          <span>{stageKeys.length}</span>
          <CheckCircle2
            size={14}
            className={completedCount === stageKeys.length ? "all-done" : ""}
          />
        </div>
      </header>

      <StageRail
        stages={stages}
        STAGE_META={STAGE_META}
        activeIndex={activeIndex}
        onJump={setActiveIndex}
        accentColor={section.color}
      />

      <div className="topic-content-card">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeKey}
            className="topic-content-inner"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div
              className="topic-content-head"
              style={{ "--stage-color": activeMeta.color }}
            >
              <span className="stage-icon-wrap">
                <ActiveIcon size={18} />
              </span>
              <div>
                <span className="eyebrow">
                  {t("stageOf", activeIndex + 1, STAGE_META.length)}
                </span>
                <h3>{activeMeta.label}</h3>
              </div>
              {stages[activeKey] && (
                <span className="stage-done-badge">
                  <CheckCircle2 size={14} /> {t("stageDone")}
                </span>
              )}
            </div>

            {activeMeta.type === "subtopic" && (
              <div className="topic-content-body">
                {activeIndex === 0 && topicData.overview && (
                  <p className="stage-intro overview-text">
                    {topicData.overview}
                  </p>
                )}

                <article className="concept-card">
                  {activeMeta.data.explain ? (
                    <p className="concept-explain">{activeMeta.data.explain}</p>
                  ) : (
                    <p className="concept-explain concept-explain-muted">
                      {activeMeta.data.term}
                    </p>
                  )}

                  {tryStep && (
                    <div className="terminal-block">
                      <div className="terminal-block-bar">
                        <span className="terminal-dot red" />
                        <span className="terminal-dot yellow" />
                        <span className="terminal-dot green" />
                        <span className="terminal-block-label">
                          {t("practicalAction")}
                        </span>
                      </div>
                      <pre className="terminal-block-body">
                        <span className="terminal-prompt">$</span> {tryStep}
                      </pre>
                    </div>
                  )}
                </article>

                {activeIndex === concepts.length - 1 && topicData.funFact && (
                  <div className="fun-fact-callout">
                    <Sparkles size={15} />
                    <span>
                      {t("funFactLabel")} {topicData.funFact}
                    </span>
                  </div>
                )}

                {!stages[activeKey] && (
                  <button
                    type="button"
                    className="primary-button topic-action-btn"
                    onClick={() => markStage(activeKey)}
                  >
                    <Sparkles size={16} />
                    {t("markStageDone", XP_VALUES.stage)}
                  </button>
                )}
              </div>
            )}

            {activeMeta.type === "project" && (
              <div className="topic-content-body">
                {topicData.quickCheck && !stages.project && !quizPassed ? (
                  <QuickCheck
                    questions={topicData.quickCheck}
                    onComplete={() => setQuizPassed(true)}
                    t={t}
                  />
                ) : (
                  <>
                    <p className="stage-intro">{t("projectIntro")}</p>
                    <article className="task-card-inline project">
                      <div className="task-card-header">
                        {topic.project.type === "capstone" ? (
                          <ShieldCheck size={18} />
                        ) : (
                          <Cpu size={18} />
                        )}
                        <strong>
                          {topic.project.type === "capstone"
                            ? t("capstoneProject")
                            : t("miniProject")}
                        </strong>
                        <span className="xp-badge">
                          {topic.project.type === "capstone"
                            ? XP_VALUES.capstone
                            : XP_VALUES.mini}{" "}
                          XP
                        </span>
                      </div>
                      <h4>{topicData.projectTitle ?? topic.project.title}</h4>
                      <p>
                        {topicData.projectDescription ??
                          topic.project.description}
                      </p>
                    </article>
                    {!stages.project ? (
                      <button
                        type="button"
                        className="primary-button topic-action-btn"
                        onClick={() => markStage("project")}
                      >
                        <Sparkles size={16} /> {t("shipProject")}
                      </button>
                    ) : (
                      <div className="done-pill">
                        <CheckCircle2 size={15} /> {t("shipped")}
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            <ResourcePicker
              resources={topic.resources}
              labels={resourceLabels}
              onOpen={(item) => openResource(item, markResource)}
              accentColor={section.color}
              highlightedIds={highlightedIds}
              defaultCollapsed
            />
          </motion.div>
        </AnimatePresence>

        <footer className="topic-content-footer">
          <button
            type="button"
            className="secondary-button"
            onClick={goPrev}
            disabled={activeIndex === 0}
          >
            {isRTL ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            {t("prevStage")}
          </button>
          <span className="stage-nav-label">{activeMeta.label}</span>
          <button
            type="button"
            className="secondary-button"
            onClick={goNext}
            disabled={!isNextUnlocked}
          >
            {t("nextStage")}
            {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </button>
        </footer>
      </div>
    </div>
  );
}
