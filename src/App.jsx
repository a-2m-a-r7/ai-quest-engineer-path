import { AnimatePresence, motion } from "framer-motion";
import {
  Gauge,
  Globe,
  Library,
  Map,
  Settings,
  Sparkles,
  Swords,
  Trophy,
} from "lucide-react";
import { lazy, Suspense, useState } from "react";
import { CelebrationToast } from "./components/Shared.jsx";
import { roadmap } from "./data/roadmap.js";
import { useProgress } from "./hooks/useProgress.js";
import { useLang } from "./lib/LangContext.jsx";

const Dashboard = lazy(() => import("./components/Dashboard.jsx"));
const Onboarding = lazy(() => import("./components/Onboarding.jsx"));
const ResourceHub = lazy(() => import("./components/ResourceHub.jsx"));
const SectionView = lazy(() => import("./components/SectionView.jsx"));
const SettingsScreen = lazy(() => import("./components/Settings.jsx"));
const TrophyRoom = lazy(() => import("./components/TrophyRoom.jsx"));
const WorldMap = lazy(() => import("./components/WorldMap.jsx"));

export default function App() {
  const {
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
  } = useProgress();

  const { lang, toggleLang, t, isRTL } = useLang();
  const [screen, setScreen] = useState("dashboard");
  const [sectionId, setSectionId] = useState(roadmap[0].id);

  const navItems = [
    { id: "dashboard", labelKey: "navDashboard", icon: Gauge },
    { id: "map", labelKey: "navMap", icon: Map },
    { id: "resources", labelKey: "navResources", icon: Library },
    { id: "trophies", labelKey: "navTrophies", icon: Trophy },
    { id: "settings", labelKey: "navSettings", icon: Settings },
  ];

  if (!progress.onboarded) {
    return (
      <Suspense fallback={<div className="screen loading-screen" />}>
        <Onboarding onDone={setOnboarded} />
      </Suspense>
    );
  }

  function openSection(id) {
    setSectionId(id);
    setScreen("section");
  }

  return (
    <div
      className="app-shell"
      data-theme={progress.settings.theme}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <aside className="sidebar">
        <div className="app-mark">
          <Sparkles size={24} />
          <div>
            <strong>{t("appName")}</strong>
            <span>{t("appSub")}</span>
          </div>
        </div>

        <nav aria-label="Primary">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                type="button"
                key={item.id}
                className={
                  screen === item.id ? "nav-button active" : "nav-button"
                }
                onClick={() => setScreen(item.id)}
              >
                <Icon size={19} />
                {t(item.labelKey)}
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          className={screen === "section" ? "nav-button active" : "nav-button"}
          onClick={() => setScreen("section")}
        >
          <Swords size={19} />
          {t("navCurrentWorld")}
        </button>

        {/* Language Switch Button */}
        <button
          type="button"
          className="lang-switch-btn"
          onClick={toggleLang}
          title={
            lang === "en"
              ? "Switch to Arabic"
              : "Ø§Ù„ØªØ¨Ø¯ÙŠÙ„ Ù„Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ©"
          }
        >
          <Globe size={16} />
          {t("switchLang")}
        </button>

        <div className="sidebar-footer">
          <span>
            {t("level")} {stats.level.level}
          </span>
          <strong>{stats.level.title}</strong>
        </div>
      </aside>

      <Suspense fallback={<div className="screen loading-screen" />}>
        <AnimatePresence mode="wait">
          {screen === "dashboard" ? (
            <Dashboard
              key="dashboard"
              progress={progress}
              stats={stats}
              onNavigate={setScreen}
              onOpenSection={openSection}
            />
          ) : null}
          {screen === "map" ? (
            <WorldMap
              key="map"
              progress={progress}
              onOpenSection={openSection}
            />
          ) : null}
          {screen === "section" ? (
            <SectionView
              key={`section-${sectionId}`}
              sectionId={sectionId}
              progress={progress}
              complete={complete}
              markResource={markResource}
              onBackToMap={() => setScreen("map")}
            />
          ) : null}
          {screen === "resources" ? (
            <ResourceHub
              key="resources"
              progress={progress}
              markResource={markResource}
            />
          ) : null}
          {screen === "trophies" ? (
            <TrophyRoom key="trophies" badges={stats.badges} />
          ) : null}
          {screen === "settings" ? (
            <SettingsScreen
              key="settings"
              progress={progress}
              updateSettings={updateSettings}
              reset={reset}
            />
          ) : null}
        </AnimatePresence>
      </Suspense>

      <CelebrationToast
        celebration={celebration}
        onDone={() => setCelebration(null)}
      />

      <AnimatePresence>
        {cinematic ? (
          <motion.div
            className="cinematic-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.section
              className="cinematic-card"
              style={{ "--accent": cinematic.section.color }}
              initial={{ scale: 0.86, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              transition={{ type: "spring", stiffness: 130, damping: 16 }}
            >
              <span className="eyebrow">{cinematic.title}</span>
              <h1>
                {cinematic.section.title} {t("worldCleared")}
              </h1>
              <p>{t("bossChallengeUnlocked", cinematic.section.boss.title)}</p>
              <div className="cinematic-grid">
                {cinematic.learned.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <strong>{t("nextReveal", cinematic.nextWorld)}</strong>
              <button
                type="button"
                className="primary-button"
                onClick={() => setCinematic(null)}
              >
                {t("continue")}
              </button>
            </motion.section>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
