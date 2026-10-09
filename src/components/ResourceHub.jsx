import { motion } from "framer-motion";
import { Library, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { roadmap } from "../data/roadmap.js";
import { useLang } from "../lib/LangContext.jsx";
import { EmptyState, ResourceRow, SectionPill, cx } from "./Shared.jsx";

function openResource(resource, markResource) {
  markResource(resource, "opened");
  if (window.aiQuest?.openExternal) {
    window.aiQuest.openExternal(resource.url);
  } else {
    window.open(resource.url, "_blank", "noopener,noreferrer");
  }
}

function FilterChipGroup({ label, options, value, onChange }) {
  return (
    <div className="hub-filter-group" aria-label={label}>
      <span>{label}</span>
      <div className="filter-chips">
        {options.map((option) => (
          <button
            type="button"
            key={option.value}
            className={cx("chip-button", value === option.value && "active")}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ResourceHub({ progress, markResource }) {
  const { t } = useLang();
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("all");
  const [cost, setCost] = useState("all");
  const [worldId, setWorldId] = useState("all");

  const resources = useMemo(() => {
    return roadmap.flatMap((section) =>
      section.topics.flatMap((topic) =>
        topic.resources.map((resource) => ({
          ...resource,
          sectionId: section.id,
          sectionTitle: section.title,
          sectionShortTitle: section.shortTitle,
          sectionColor: section.color,
          topicId: topic.id,
          topicTitle: topic.title,
        })),
      ),
    );
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return resources.filter((resource) => {
      if (language !== "all" && resource.language !== language) return false;
      if (cost !== "all" && resource.cost !== cost) return false;
      if (worldId !== "all" && resource.sectionId !== worldId) return false;
      if (!q) return true;
      return `${resource.title} ${resource.platform} ${resource.topicTitle} ${resource.sectionTitle}`
        .toLowerCase()
        .includes(q);
    });
  }, [cost, language, query, resources, worldId]);

  const grouped = useMemo(() => {
    return roadmap
      .map((section) => ({
        section,
        resources: filtered.filter(
          (resource) => resource.sectionId === section.id,
        ),
      }))
      .filter((group) => group.resources.length > 0);
  }, [filtered]);

  const languageOptions = [
    { value: "all", label: t("allLanguages") },
    { value: "AR", label: t("arabic") },
    { value: "EN", label: t("english") },
  ];
  const costOptions = [
    { value: "all", label: t("allCosts") },
    { value: "free", label: t("free") },
    { value: "paid", label: t("paid") },
  ];
  const worldOptions = [
    { value: "all", label: t("allWorlds") },
    ...roadmap.map((section) => ({
      value: section.id,
      label: section.shortTitle,
    })),
  ];

  return (
    <motion.main
      className="screen resource-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.22 }}
    >
      <header className="screen-header">
        <div>
          <span className="eyebrow">{t("resourceHub")}</span>
          <h1>{t("searchLibrary")}</h1>
        </div>
        <Library size={34} />
      </header>

      <section className="resource-toolbar hub-toolbar glass-panel">
        <label className="search-box">
          <Search size={18} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("searchPlaceholder")}
          />
        </label>
        <div className="hub-filter-groups">
          <FilterChipGroup
            label={t("languageFilter")}
            options={languageOptions}
            value={language}
            onChange={setLanguage}
          />
          <FilterChipGroup
            label={t("costFilter")}
            options={costOptions}
            value={cost}
            onChange={setCost}
          />
          <FilterChipGroup
            label={t("worldFilter")}
            options={worldOptions}
            value={worldId}
            onChange={setWorldId}
          />
        </div>
      </section>

      <section
        className="hub-results"
        aria-label={t("resourceResults", filtered.length)}
      >
        {grouped.length ? (
          grouped.map(({ section, resources: sectionResources }) => (
            <article
              key={section.id}
              className="resource-world-group glass-panel"
              style={{ "--accent": section.color }}
            >
              <header className="resource-world-header">
                <div>
                  <SectionPill section={section} />
                  <h2>{section.title}</h2>
                </div>
                <span>{t("resourceResults", sectionResources.length)}</span>
              </header>
              <div className="hub-resource-list">
                {sectionResources.map((resource) => (
                  <ResourceRow
                    key={`${resource.topicId}-${resource.title}-${resource.url}`}
                    resource={resource}
                    context={resource.topicTitle}
                    openLabel={t("open")}
                    labels={{ free: t("free"), paid: t("paid") }}
                    onOpen={(item) => openResource(item, markResource)}
                  />
                ))}
              </div>
            </article>
          ))
        ) : (
          <EmptyState
            title={t("noResourceMatches")}
            detail={t("tryDifferentFilters")}
          />
        )}
      </section>
    </motion.main>
  );
}
