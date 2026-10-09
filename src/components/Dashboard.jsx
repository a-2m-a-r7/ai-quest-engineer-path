import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  Download,
  Map,
  Rocket,
  Sparkles,
  TrendingUp,
  Trophy,
  X,
} from "lucide-react";
import { useState } from "react";
import { roadmap } from "../data/roadmap.js";
import {
  getForecast,
  getNextAction,
  getStreak,
  getTodayDone,
  getWeeklyPace,
} from "../lib/gameLogic.js";
import { exportProgressCard } from "../lib/exportCard.js";
import { useLang } from "../lib/LangContext.jsx";
import {
  ProgressBar,
  RadialGauge,
  SectionPill,
  StatCard,
  StreakFlame,
} from "./Shared.jsx";

export default function Dashboard({
  progress,
  stats,
  onNavigate,
  onOpenSection,
}) {
  const { t } = useLang();
  const nextAction = getNextAction(progress);
  const nextActionKey = nextAction
    ? `${nextAction.type}-${nextAction.section.id}-${nextAction.topic?.id ?? "boss"}`
    : "done";
  const [dismissedQuestKey, setDismissedQuestKey] = useState(null);
  const suggestionDismissed = Boolean(
    nextAction && dismissedQuestKey === nextActionKey,
  );
  const streak = getStreak(progress);
  const pace = getWeeklyPace(progress);
  const todayDone = getTodayDone(progress);
  const unlockedBadges = stats.badges.filter((badge) => badge.unlocked);
  const forecast = getForecast(progress);

  return (
    <motion.main
      className="screen dashboard-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <section className="hero-dashboard">
        <div>
          <span className="eyebrow">{t("commandDashboard")}</span>
          <h1>{t("dashboardHeadline")}</h1>
          <p>{t("dashboardSub", progress.avatarPath, stats.level.level)}</p>
        </div>
        <RadialGauge
          value={stats.careerScore}
          label={t("careerScore")}
          color="#57d7ff"
        />
      </section>

      <section className="top-grid">
        <article className="level-panel glass-panel">
          <div className="panel-title-row">
            <div>
              <span className="eyebrow">{t("currentClass")}</span>
              <h2>{stats.level.title}</h2>
            </div>
            <strong className="level-number">LV {stats.level.level}</strong>
          </div>
          <ProgressBar
            value={stats.level.progress}
            color="#57d7ff"
            label={t("levelProgress")}
          />
          <div className="muted-row">
            <span>{t("totalXP", stats.xp)}</span>
            <span>{t("xpToNext", stats.level.xpToNext)}</span>
          </div>
        </article>

        <StatCard
          icon={Sparkles}
          label={t("statToday")}
          value={todayDone ? t("statLogged") : t("statOpen")}
          detail={todayDone ? t("statTodayDone") : t("statTodayPending")}
          color="#ffd166"
        />
        <StatCard
          icon={Trophy}
          label={t("statBadges")}
          value={unlockedBadges.length}
          detail={t(
            "badgesHidden",
            stats.badges.length - unlockedBadges.length,
          )}
          color="#ff7ab6"
        />
        <StatCard
          icon={TrendingUp}
          label={t("statPast")}
          value={`${pace.delta >= 0 ? "+" : ""}${pace.delta}%`}
          detail={t("weekVsLast", pace.current, pace.previous)}
          color="#5df2a8"
        />
      </section>

      <section className="dashboard-grid">
        <article className="quest-card glass-panel">
          <div className="panel-title-row">
            <div>
              <span className="eyebrow">{t("todayQuest")}</span>
              <h2>
                {nextAction
                  ? suggestionDismissed
                    ? t("questSuggestionDismissed")
                    : nextAction.label
                  : t("roadmapCleared")}
              </h2>
            </div>
            <Rocket size={28} />
          </div>
          <p>
            {nextAction
              ? suggestionDismissed
                ? t("questDismissedDetail")
                : t("questDetail", nextAction.label, nextAction.xp)
              : t("questComplete")}
          </p>
          <div className="quest-actions">
            {nextAction ? <SectionPill section={nextAction.section} /> : null}
            <div className="quest-button-group">
              <button
                type="button"
                className="primary-button"
                onClick={() => {
                  if (nextAction && !suggestionDismissed)
                    onOpenSection(nextAction.section.id);
                  if (suggestionDismissed) onNavigate("map");
                }}
                disabled={!nextAction}
              >
                {suggestionDismissed ? t("browseWorldMap") : t("goToQuest")}
                <ArrowRight size={18} />
              </button>
              {nextAction && !suggestionDismissed ? (
                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => setDismissedQuestKey(nextActionKey)}
                >
                  <X size={17} />
                  {t("dismissSuggestion")}
                </button>
              ) : null}
            </div>
          </div>
        </article>

        <article className="glass-panel streak-panel">
          <div className="panel-title-row">
            <div>
              <span className="eyebrow">{t("dailyStreak")}</span>
              <h2>{t("keepFlame")}</h2>
            </div>
            <StreakFlame streak={streak} />
          </div>
          <p>{todayDone ? t("streakSafe") : t("streakPending")}</p>
          <div className="weekly-bars" aria-label="Weekly pace comparison">
            <span style={{ height: `${Math.max(12, pace.previous * 18)}px` }} />
            <span style={{ height: `${Math.max(12, pace.current * 18)}px` }} />
          </div>
        </article>

        <article className="glass-panel forecast-panel">
          <div className="panel-title-row">
            <div>
              <span className="eyebrow">{t("paceForecast")}</span>
              <h2>{forecast}</h2>
            </div>
            <CalendarClock size={26} />
          </div>
          <button
            type="button"
            className="secondary-button"
            onClick={() =>
              exportProgressCard({
                level: stats.level,
                careerScore: stats.careerScore,
                xp: stats.xp,
                badgeCount: unlockedBadges.length,
                streak,
              })
            }
          >
            <Download size={17} />
            {t("exportCard")}
          </button>
        </article>

        <article className="glass-panel map-preview">
          <div className="panel-title-row">
            <div>
              <span className="eyebrow">{t("worldMapLabel")}</span>
              <h2>{t("eightRealms")}</h2>
            </div>
            <Map size={26} />
          </div>
          <div className="preview-worlds">
            {roadmap.map((section) => (
              <button
                type="button"
                key={section.id}
                className="preview-world unlocked"
                style={{ "--accent": section.color }}
                onClick={() => onOpenSection(section.id)}
              >
                <span />
                {section.shortTitle}
              </button>
            ))}
          </div>
        </article>
      </section>
    </motion.main>
  );
}
