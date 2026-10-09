import { motion } from "framer-motion";
import {
  Badge,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarCheck,
  Code2,
  Compass,
  Crown,
  Database,
  Flame,
  MessagesSquare,
  Network,
  Rocket,
  ScanEye,
  Sigma,
  Sparkles,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { useLang } from "../lib/LangContext.jsx";

const badgeIcons = {
  Sparkles,
  Rocket,
  TrendingUp,
  Flame,
  CalendarCheck,
  Compass,
  Sigma,
  Code2,
  Database,
  BrainCircuit,
  Network,
  ScanEye,
  MessagesSquare,
  BriefcaseBusiness,
  Crown,
  Trophy,
};

export default function TrophyRoom({ badges }) {
  const { t } = useLang();

  return (
    <motion.main
      className="screen trophy-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
    >
      <header className="screen-header">
        <div>
          <span className="eyebrow">{t("trophyRoom")}</span>
          <h1>{t("trophyHeadline")}</h1>
        </div>
        <Trophy size={34} />
      </header>

      <section className="badge-grid">
        {badges.map((badge, index) => {
          const Icon = badgeIcons[badge.icon] ?? Badge;
          return (
            <motion.article
              key={badge.id}
              className={
                badge.unlocked ? "badge-card unlocked" : "badge-card locked"
              }
              initial={{ opacity: 0, rotateY: -60 }}
              animate={{ opacity: 1, rotateY: 0 }}
              transition={{
                delay: index * 0.035,
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
            >
              <span className="badge-shine" />
              <Icon size={30} />
              <strong>{badge.unlocked ? badge.title : t("lockedBadge")}</strong>
              <p>{badge.hint}</p>
            </motion.article>
          );
        })}
      </section>
    </motion.main>
  );
}
