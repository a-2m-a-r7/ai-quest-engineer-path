import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  BadgeDollarSign,
  Check,
  ChevronRight,
  ExternalLink,
  Flame,
  Library,
  Lock,
  PlayCircle,
  Sparkles,
  Star,
  Tag,
  Trophy,
} from "lucide-react";
import { useMemo, useState } from "react";

export function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

export function ProgressBar({ value, color = "#57d7ff", label }) {
  const reduce = useReducedMotion();
  return (
    <div className="progress-wrap" aria-label={label}>
      <motion.div
        className="progress-fill"
        style={{ background: `linear-gradient(90deg, ${color}, #ffffff)` }}
        initial={reduce ? false : { width: 0 }}
        animate={{ width: `${Math.round(value * 100)}%` }}
        transition={{ type: "spring", stiffness: 90, damping: 20 }}
      />
    </div>
  );
}

export function RadialGauge({ value, color = "#57d7ff", label }) {
  const reduce = useReducedMotion();
  const angle = Math.max(0, Math.min(100, value)) * 3.6;
  return (
    <div
      className="radial-gauge"
      style={{ "--gauge-angle": `${angle}deg`, "--gauge-color": color }}
      role="img"
      aria-label={`${label}: ${value} out of 100`}
    >
      <motion.div
        className="radial-inner"
        initial={reduce ? false : { scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 130, damping: 14 }}
      >
        <strong>{value}</strong>
        <span>{label}</span>
      </motion.div>
    </div>
  );
}

export function StatCard({
  icon: Icon = Sparkles,
  label,
  value,
  detail,
  color,
}) {
  return (
    <motion.article
      className="stat-card"
      whileHover={{ y: -3 }}
      style={{ "--accent": color }}
    >
      <Icon size={22} />
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </motion.article>
  );
}

export function SectionPill({ section, compact = false }) {
  return (
    <span
      className={cx("section-pill", compact && "compact")}
      style={{ "--accent": section.color }}
    >
      {section.shortTitle}
    </span>
  );
}

export const RESOURCE_GROUPS = [
  {
    id: "free-ar",
    cost: "free",
    language: "AR",
    labelKey: "freeArabic",
    shortLabelKey: "shortFreeAr",
  },
  {
    id: "free-en",
    cost: "free",
    language: "EN",
    labelKey: "freeEnglish",
    shortLabelKey: "shortFreeEn",
  },
  {
    id: "paid-ar",
    cost: "paid",
    language: "AR",
    labelKey: "paidArabic",
    shortLabelKey: "shortPaidAr",
  },
  {
    id: "paid-en",
    cost: "paid",
    language: "EN",
    labelKey: "paidEnglish",
    shortLabelKey: "shortPaidEn",
  },
];

export function getResourceGroupId(resource) {
  return `${resource.cost}-${resource.language.toLowerCase()}`;
}

/** Pick resources for a stage; falls back to topic-level free/paid when stage has no dedicated links. */
export function getStageResources(resources, stageIndex, isProjectStage) {
  const dedicated = resources.filter((r) => r.stageIndex === stageIndex);
  if (dedicated.length > 0) return dedicated;
  if (isProjectStage) {
    return resources.filter((r) => r.cost === "paid");
  }
  return resources.filter((r) => r.cost === "free").slice(0, 2);
}

export function LockBadge({ reason, label = "Locked", showReason = false }) {
  return (
    <span className="lock-badge" title={reason}>
      <Lock size={14} />
      {showReason && reason ? `${label} - ${reason}` : label}
    </span>
  );
}

export function CompletionCheck({ complete }) {
  return (
    <span className={cx("completion-check", complete && "done")}>
      {complete ? <Check size={15} /> : <ChevronRight size={15} />}
    </span>
  );
}

export function CelebrationToast({ celebration, onDone }) {
  const icon =
    celebration?.type === "badge"
      ? Trophy
      : celebration?.type === "level"
        ? Star
        : Sparkles;
  const Icon = icon;
  return (
    <AnimatePresence>
      {celebration && (
        <motion.div
          className="celebration-toast"
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          onAnimationComplete={() => {
            window.clearTimeout(window.__aiQuestToast);
            window.__aiQuestToast = window.setTimeout(onDone, 2400);
          }}
        >
          <Icon size={24} />
          <div>
            <strong>{celebration.title}</strong>
            <span>{celebration.detail}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ParticleBurst({ seed = 1 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: `${seed}-${index}`,
        x: Math.cos(index) * (50 + (index % 4) * 16),
        y: Math.sin(index * 1.7) * (35 + (index % 5) * 13),
        delay: index * 0.012,
      })),
    [seed],
  );
  return (
    <div className="particle-burst" aria-hidden="true">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          animate={{ opacity: 0, x: particle.x, y: particle.y, scale: 0.2 }}
          transition={{ duration: 0.8, delay: particle.delay, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export function ResourceRow({
  resource,
  onOpen,
  openLabel = "Open",
  context,
  labels = {},
  compact = false,
}) {
  const CostIcon = resource.cost === "paid" ? BadgeDollarSign : Tag;
  const costLabel = labels[resource.cost] ?? resource.cost;

  return (
    <motion.article
      className={cx("resource-row", compact && "compact")}
      whileHover={{ y: -1 }}
    >
      <span className={cx("resource-cost-icon", resource.cost)}>
        <CostIcon size={15} />
      </span>
      <div className="resource-row-main">
        <strong title={resource.title}>{resource.title}</strong>
        <span>
          {context ? `${resource.platform} - ${context}` : resource.platform}
        </span>
      </div>
      <div className="resource-tags">
        <span className="resource-lang-tag">{resource.language}</span>
        <span className={cx("resource-cost-tag", resource.cost)}>
          {costLabel}
        </span>
      </div>
      <button
        type="button"
        className="icon-button resource-open-button"
        onClick={() => onOpen(resource)}
        title={openLabel}
      >
        {resource.format === "video" ? (
          <PlayCircle size={17} />
        ) : (
          <ExternalLink size={17} />
        )}
      </button>
    </motion.article>
  );
}

export function ResourcePicker({
  resources,
  labels,
  onOpen,
  accentColor = "#57d7ff",
  highlightedIds = [],
  defaultCollapsed = true,
}) {
  const [isOpen, setIsOpen] = useState(!defaultCollapsed);
  const [langFilter, setLangFilter] = useState("all");
  const [costFilter, setCostFilter] = useState("all");

  const filtered = useMemo(() => {
    return resources.filter((resource) => {
      if (langFilter !== "all" && resource.language !== langFilter)
        return false;
      if (costFilter !== "all" && resource.cost !== costFilter) return false;
      return true;
    });
  }, [resources, langFilter, costFilter]);

  const sorted = useMemo(() => {
    const highlightSet = new Set(highlightedIds);
    const picks = filtered.filter((r) => highlightSet.has(r.id));
    const rest = filtered.filter((r) => !highlightSet.has(r.id));
    return [...picks, ...rest];
  }, [filtered, highlightedIds]);

  if (!resources.length) return null;

  return (
    <div
      className={cx("resource-picker", isOpen && "open")}
      style={{ "--picker-accent": accentColor }}
    >
      <button
        type="button"
        className="resource-picker-trigger"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
      >
        <Library size={16} />
        <span className="resource-picker-trigger-text">
          <strong>{labels.pickResources}</strong>
          <small>{labels.pickResourcesSub}</small>
        </span>
        <span className="resource-picker-badge">{resources.length}</span>
        <ChevronRight
          size={15}
          className={cx("resource-picker-chevron", isOpen && "open")}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            className="resource-picker-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="resource-picker-filters">
              <div
                className="resource-picker-filter-group"
                role="group"
                aria-label={labels.languageFilter}
              >
                <span className="resource-picker-filter-label">
                  {labels.languageFilter}
                </span>
                <div className="resource-picker-filter-chips">
                  {[
                    { id: "all", label: labels.filterAll },
                    { id: "AR", label: labels.arabic },
                    { id: "EN", label: labels.english },
                  ].map((chip) => (
                    <button
                      key={chip.id}
                      type="button"
                      className={cx(
                        "resource-picker-chip",
                        langFilter === chip.id && "active",
                      )}
                      onClick={() => setLangFilter(chip.id)}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>
              <div
                className="resource-picker-filter-group"
                role="group"
                aria-label={labels.costFilter}
              >
                <span className="resource-picker-filter-label">
                  {labels.costFilter}
                </span>
                <div className="resource-picker-filter-chips">
                  {[
                    { id: "all", label: labels.filterAll },
                    { id: "free", label: labels.free },
                    { id: "paid", label: labels.paid },
                  ].map((chip) => (
                    <button
                      key={chip.id}
                      type="button"
                      className={cx(
                        "resource-picker-chip",
                        costFilter === chip.id && "active",
                      )}
                      onClick={() => setCostFilter(chip.id)}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="resource-picker-list">
              {sorted.length ? (
                sorted.map((resource) => {
                  const isPick = highlightedIds.includes(resource.id);
                  return (
                    <button
                      key={resource.id ?? resource.url}
                      type="button"
                      className={cx(
                        "resource-picker-item",
                        isPick && "recommended",
                      )}
                      onClick={() => onOpen(resource)}
                    >
                      <span className="resource-picker-item-icon">
                        {resource.format === "video" ? (
                          <PlayCircle size={16} />
                        ) : (
                          <ExternalLink size={16} />
                        )}
                      </span>
                      <span className="resource-picker-item-body">
                        <strong>{resource.title}</strong>
                        <span>
                          {resource.platform}
                          {isPick ? ` · ${labels.recommendedPick}` : ""}
                        </span>
                      </span>
                      <span className="resource-picker-item-tags">
                        <span>{resource.language}</span>
                        <span className={resource.cost}>
                          {labels[resource.cost] ?? resource.cost}
                        </span>
                      </span>
                    </button>
                  );
                })
              ) : (
                <span className="resource-empty">{labels.noResources}</span>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/** @deprecated use ResourcePicker */
export function ResourceShelf({
  resources,
  labels,
  onOpen,
  defaultLanguage = "EN",
  accentColor = "#57d7ff",
  collapsed = true,
}) {
  return (
    <ResourcePicker
      resources={resources}
      labels={labels}
      onOpen={onOpen}
      accentColor={accentColor}
      defaultCollapsed={collapsed}
    />
  );
}

export function ResourceTabs({ resources, labels, onOpen }) {
  const [activeGroup, setActiveGroup] = useState(null);
  const [expandedGroups, setExpandedGroups] = useState({});
  const grouped = useMemo(
    () =>
      RESOURCE_GROUPS.map((group) => ({
        ...group,
        label: labels[group.labelKey],
        resources: resources.filter(
          (resource) =>
            resource.cost === group.cost &&
            resource.language === group.language,
        ),
      })),
    [labels, resources],
  );
  const active = grouped.find((group) => group.id === activeGroup);
  const showAll = active ? Boolean(expandedGroups[active.id]) : false;
  const visibleResources = active
    ? showAll
      ? active.resources
      : active.resources.slice(0, 4)
    : [];

  return (
    <div className="resource-tabs">
      <div
        className="resource-tab-list"
        role="tablist"
        aria-label={labels.resourcesLabel}
      >
        {grouped.map((group) => (
          <button
            type="button"
            key={group.id}
            className={cx("resource-tab", activeGroup === group.id && "active")}
            onClick={() =>
              setActiveGroup((current) =>
                current === group.id ? null : group.id,
              )
            }
            role="tab"
            aria-selected={activeGroup === group.id}
          >
            <span>{group.label}</span>
            <strong>{group.resources.length}</strong>
          </button>
        ))}
      </div>

      {active ? (
        <div className="resource-tab-panel" role="tabpanel">
          {visibleResources.length ? (
            visibleResources.map((resource) => (
              <ResourceRow
                key={resource.url}
                resource={resource}
                onOpen={onOpen}
                openLabel={labels.open}
                labels={labels}
              />
            ))
          ) : (
            <span className="resource-empty">{labels.noResources}</span>
          )}
          {active.resources.length > 4 ? (
            <button
              type="button"
              className="text-button"
              onClick={() =>
                setExpandedGroups((current) => ({
                  ...current,
                  [active.id]: !current[active.id],
                }))
              }
            >
              {showAll ? labels.showLess : labels.showMore}
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export function StreakFlame({ streak }) {
  const size = Math.min(1.45, 0.85 + streak / 30);
  return (
    <span className="flame-wrap" style={{ "--flame-scale": size }}>
      <Flame size={28} />
      <strong>{streak}</strong>
    </span>
  );
}

export function EmptyState({ title, detail }) {
  return (
    <div className="empty-state">
      <BadgeCheck size={26} />
      <strong>{title}</strong>
      <span>{detail}</span>
    </div>
  );
}
