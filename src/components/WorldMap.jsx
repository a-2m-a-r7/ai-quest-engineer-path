import { motion } from "framer-motion";
import { MapPinned, ZoomIn } from "lucide-react";
import { roadmap } from "../data/roadmap.js";
import { getSectionProgress } from "../lib/gameLogic.js";
import { useLang } from "../lib/LangContext.jsx";
import { ProgressBar, cx } from "./Shared.jsx";

export default function WorldMap({ progress, onOpenSection }) {
  const { t } = useLang();
  const worlds = roadmap.map((section) => {
    const sectionProgress = getSectionProgress(progress, section);
    return { section, sectionProgress };
  });

  return (
    <motion.main
      className="screen map-screen"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.22 }}
    >
      <header className="screen-header map-header">
        <div>
          <h1>{t("worldMapHeadline")}</h1>
          <p className="map-sub">{t("worldMapSub")}</p>
        </div>
        <MapPinned size={34} />
      </header>

      <section className="world-map-canvas" aria-label={t("worldMapTitle")}>
        <div className="world-path">
          {worlds.map(({ section, sectionProgress }, index) => {
            const pathState = sectionProgress.topicsComplete
              ? "complete"
              : sectionProgress.completedTopics > 0
                ? "in-progress"
                : "not-started";

            return (
              <motion.div
                key={section.id}
                className={cx(
                  "map-row",
                  index % 2 === 0 ? "is-start" : "is-end",
                  index === 0 && "first",
                  index === worlds.length - 1 && "last",
                  pathState,
                )}
                style={{ "--accent": section.color }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, delay: index * 0.035 }}
              >
                <div className="map-rail" aria-hidden="true">
                  <span>{index + 1}</span>
                </div>
                <motion.button
                  type="button"
                  className="world-node unlocked"
                  onClick={() => onOpenSection(section.id)}
                  whileHover={{ scale: 1.025 }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  title={t("openWorldTitle", section.title)}
                >
                  <div className="world-node-orb">
                    <ZoomIn size={24} />
                  </div>
                  <div className="world-node-copy">
                    <span>{section.week}</span>
                    <h2>{section.title}</h2>
                    <p>{section.motif}</p>
                    <ProgressBar
                      value={sectionProgress.ratio}
                      color={section.color}
                      label={`${section.title} progress`}
                    />
                    <small>
                      {t(
                        "topics",
                        sectionProgress.completedTopics,
                        sectionProgress.totalTopics,
                      )}
                    </small>
                    {pathState !== "not-started" && (
                      <span className={cx("world-state-badge", pathState)}>
                        {pathState === "complete"
                          ? t("completed")
                          : t("inProgress")}
                      </span>
                    )}
                  </div>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </section>
    </motion.main>
  );
}
