import { motion } from "framer-motion";
import {
  Bell,
  Moon,
  RotateCcw,
  Settings as SettingsIcon,
  Volume2,
  WandSparkles,
} from "lucide-react";
import { useLang } from "../lib/LangContext.jsx";

export default function Settings({ progress, updateSettings, reset }) {
  const { t } = useLang();
  const settings = progress.settings;

  return (
    <motion.main
      className="screen settings-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }}
    >
      <header className="screen-header">
        <div>
          <span className="eyebrow">{t("settingsTitle")}</span>
          <h1>{t("settingsHeadline")}</h1>
        </div>
        <SettingsIcon size={34} />
      </header>

      <section className="settings-grid">
        <ToggleRow
          icon={Volume2}
          title={t("soundCues")}
          detail={t("soundDetail")}
          checked={settings.sound}
          onChange={(sound) => updateSettings({ sound })}
        />
        <ToggleRow
          icon={WandSparkles}
          title={t("motionEffects")}
          detail={t("motionDetail")}
          checked={settings.animations}
          onChange={(animations) => updateSettings({ animations })}
        />
        <ToggleRow
          icon={Bell}
          title={t("streakReminders")}
          detail={t("remindersDetail")}
          checked={settings.reminders}
          onChange={(reminders) => updateSettings({ reminders })}
        />
        <ToggleRow
          icon={Moon}
          title={t("darkTheme")}
          detail={t("darkThemeDetail")}
          checked={settings.theme === "dark"}
          onChange={(enabled) =>
            updateSettings({ theme: enabled ? "dark" : "light" })
          }
        />
      </section>

      <section className="danger-panel glass-panel">
        <div>
          <span className="eyebrow">{t("localData")}</span>
          <h2>{t("resetProgress")}</h2>
          <p>{t("resetDetail")}</p>
        </div>
        <button
          type="button"
          className="secondary-button danger"
          onClick={reset}
        >
          <RotateCcw size={17} />
          {t("reset")}
        </button>
      </section>
    </motion.main>
  );
}

function ToggleRow({ icon: Icon, title, detail, checked, onChange }) {
  return (
    <article className="toggle-row glass-panel">
      <Icon size={24} />
      <div>
        <strong>{title}</strong>
        <span>{detail}</span>
      </div>
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span />
      </label>
    </article>
  );
}
