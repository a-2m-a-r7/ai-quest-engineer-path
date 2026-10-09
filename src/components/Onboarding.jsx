import { AnimatePresence, motion } from "framer-motion";
import {
  BrainCircuit,
  ChevronRight,
  Compass,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { useLang } from "../lib/LangContext.jsx";

export default function Onboarding({ onDone }) {
  const { t, isRTL } = useLang();
  const [index, setIndex] = useState(0);
  const [avatar, setAvatar] = useState("Signal Runner");

  const slides = [
    {
      eyebrow: t("welcome"),
      title: t("slide1Title"),
      detail: t("slide1Detail"),
    },
    {
      eyebrow: t("mapBeforeChecklist"),
      title: t("slide2Title"),
      detail: t("slide2Detail"),
    },
    {
      eyebrow: t("proofOfProgress"),
      title: t("slide3Title"),
      detail: t("slide3Detail"),
    },
  ];

  const avatars = [
    {
      title: "Signal Runner",
      displayTitle: t("avatarSignalRunner"),
      icon: Compass,
      detail: t("avatarSignalRunnerDetail"),
    },
    {
      title: "Model Smith",
      displayTitle: t("avatarModelSmith"),
      icon: BrainCircuit,
      detail: t("avatarModelSmithDetail"),
    },
    {
      title: "Quest Architect",
      displayTitle: t("avatarQuestArchitect"),
      icon: ShieldCheck,
      detail: t("avatarQuestArchitectDetail"),
    },
  ];

  const isLastIntro = index >= slides.length;

  return (
    <main className="onboarding-shell" dir={isRTL ? "rtl" : "ltr"}>
      <div className="ambient-grid" />
      <motion.section className="onboarding-panel" layout>
        <div className="brand-lockup">
          <Sparkles size={22} />
          <span>AI Quest: {t("appSub")}</span>
        </div>
        <AnimatePresence mode="wait">
          {!isLastIntro ? (
            <motion.div
              key={index}
              className="intro-slide"
              initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isRTL ? 60 : -60 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
            >
              <span className="eyebrow">{slides[index].eyebrow}</span>
              <h1>{slides[index].title}</h1>
              <p>{slides[index].detail}</p>
              <div className="slide-dots">
                {slides.map((slide, dotIndex) => (
                  <span
                    key={slide.title}
                    className={dotIndex === index ? "active" : ""}
                  />
                ))}
              </div>
              <button
                type="button"
                className="primary-button"
                onClick={() => setIndex(index + 1)}
              >
                {t("continue")}
                <ChevronRight size={18} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="avatar"
              className="avatar-slide"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
            >
              <span className="eyebrow">{t("chooseStarting")}</span>
              <h1>{t("pickTitle")}</h1>
              <div className="avatar-grid">
                {avatars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      type="button"
                      key={item.title}
                      className={
                        avatar === item.title
                          ? "avatar-card active"
                          : "avatar-card"
                      }
                      onClick={() => setAvatar(item.title)}
                    >
                      <Icon size={26} />
                      <strong>{item.displayTitle}</strong>
                      <span>{item.detail}</span>
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                className="primary-button"
                onClick={() => onDone(avatar)}
              >
                {t("startQuest")}
                <ChevronRight size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </main>
  );
}
