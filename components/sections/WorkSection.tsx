"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

/* ──────────────────────────────────────────────────────────
   TYPES
────────────────────────────────────────────────────────── */
interface InstagramReel {
  id: string;
  shortcode: string;
  title: string;
  category: string;
  description: string;
}

/* ──────────────────────────────────────────────────────────
   REELS DATA
────────────────────────────────────────────────────────── */
const instagramReels: InstagramReel[] = [
  {
    id: "reel-1",
    shortcode: "C9xampleCode1",
    title: "Wedding Cinematic Film",
    category: "Wedding",
    description: "A beautiful wedding story captured through the lens.",
  },
  {
    id: "reel-2",
    shortcode: "C9xampleCode2",
    title: "Pre-Wedding Edit",
    category: "Pre-Wedding",
    description: "Golden hour magic in every frame.",
  },
  {
    id: "reel-3",
    shortcode: "C9xampleCode3",
    title: "Commercial Production",
    category: "Commercial",
    description: "Brand storytelling elevated to an art form.",
  },
];

/* ──────────────────────────────────────────────────────────
   CATEGORY NORMALIZER
────────────────────────────────────────────────────────── */
const normalizeCategory = (value: string | undefined): string =>
  (value ?? "").toLowerCase().trim();

/* ──────────────────────────────────────────────────────────
   INSTAGRAM ICON
────────────────────────────────────────────────────────── */
const IgIcon = ({ size = 10 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
  </svg>
);

/* ──────────────────────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────────────────────── */
export default function WorkSection({ limit = 6 }: { limit?: number }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeTab, setActiveTab] = useState<"projects" | "reels">("projects");

  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  /* ── FIX 1: Build categories INSIDE the component with useMemo,
       and filter out undefined/empty values before adding to the list. ── */
  const projectCategories = useMemo(
    () =>
      Array.from(
        new Set(
          projects
            .map((p) => p.category?.trim())
            .filter((c): c is string => Boolean(c)), // removes undefined / ""
        ),
      ),
    [], // projects is a static import; add `projects` here if it's dynamic
  );

  const reelCategories = useMemo(
    () =>
      Array.from(
        new Set(
          instagramReels
            .map((r) => r.category?.trim())
            .filter((c): c is string => Boolean(c)),
        ),
      ),
    [],
  );

  /* ── FIX 2: Show only the categories relevant to the active tab. ── */
  const categories = useMemo(
    () => [
      "All",
      ...(activeTab === "projects" ? projectCategories : reelCategories),
    ],
    [activeTab, projectCategories, reelCategories],
  );

  /* ──────────────────────────────────────────────────────
     FILTERED PROJECTS
  ────────────────────────────────────────────────────── */
  const filtered = useMemo(
    () =>
      (activeFilter === "All"
        ? projects
        : projects.filter(
            (p) =>
              normalizeCategory(p.category) === normalizeCategory(activeFilter),
          )
      ).slice(0, limit),
    [activeFilter, limit],
  );

  /* ──────────────────────────────────────────────────────
     FILTERED REELS
  ────────────────────────────────────────────────────── */
  const filteredReels = useMemo(
    () =>
      activeFilter === "All"
        ? instagramReels
        : instagramReels.filter(
            (r) =>
              normalizeCategory(r.category) === normalizeCategory(activeFilter),
          ),
    [activeFilter],
  );

  /* ──────────────────────────────────────────────────────
     TAB CHANGE — also resets the filter to "All"
  ────────────────────────────────────────────────────── */
  const handleTabChange = (tab: "projects" | "reels") => {
    setActiveTab(tab);
    setActiveFilter("All"); // always reset so a stale filter doesn't hide everything
  };

  return (
    <section
      className="relative overflow-hidden bg-cinema-black py-32"
      ref={ref}
    >
      <div className="grid-bg  inset-0 opacity-20" />

      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-cinema-gold opacity-60" />
            <span className="font-mono text-[10px] uppercase tracking-[5px] text-cinema-gold">
              Portfolio
            </span>
            <div className="h-px w-12 bg-cinema-gold opacity-60" />
          </div>

          <h2 className="font-display text-4xl tracking-wider text-cinema-white md:text-6xl">
            Featured <span className="text-gold-shimmer">Work</span>
          </h2>

          <p className="mt-4 font-body text-lg italic text-cinema-gray">
            Every frame is a story. Every edit is an emotion.
          </p>
        </motion.div>

        {/* TAB BUTTONS */}
        <div className="mb-8 flex justify-center">
          <div className="flex border border-cinema-border">
            <button
              onClick={() => handleTabChange("projects")}
              className={`px-8 py-3 font-mono text-[10px] uppercase tracking-[3px] transition-all duration-300 ${
                activeTab === "projects"
                  ? "bg-cinema-gold text-cinema-black"
                  : "text-cinema-gray hover:text-cinema-gold"
              }`}
            >
              Projects
            </button>

            <div className="w-px bg-cinema-border" />

            <button
              onClick={() => handleTabChange("reels")}
              className={`flex items-center gap-2 px-8 py-3 font-mono text-[10px] uppercase tracking-[3px] transition-all duration-300 ${
                activeTab === "reels"
                  ? "bg-cinema-gold text-cinema-black"
                  : "text-cinema-gray hover:text-cinema-gold"
              }`}
            >
              <IgIcon size={10} />
              Reels
            </button>
          </div>
        </div>

        {/* ── FIX 3: CATEGORY BUTTONS
              - Keyed on `${activeTab}-${cat}` so React re-mounts buttons
                when the tab changes and prevents stale active-state styling.
              - Guard against undefined `cat` values with the Boolean filter above.
        ── */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={`${activeTab}-${cat}`}
              onClick={() => setActiveFilter(cat)}
              className={`border px-5 py-2.5 font-mono text-[10px] uppercase tracking-[3px] transition-all duration-300 ${
                activeFilter === cat
                  ? "border-cinema-gold bg-cinema-gold text-cinema-black"
                  : "border-cinema-border text-cinema-gray hover:border-cinema-gold hover:text-cinema-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECTS / REELS GRID */}
        <AnimatePresence mode="wait">
          {activeTab === "projects" ? (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.length > 0 ? (
                filtered.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))
              ) : (
                <p className="col-span-3 py-16 text-center font-mono text-[10px] uppercase tracking-[3px] text-cinema-gray">
                  No projects found in this category.
                </p>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="reels"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredReels.length > 0 ? (
                filteredReels.map((reel, index) => (
                  <motion.div
                    key={reel.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ReelCard reel={reel} />
                  </motion.div>
                ))
              ) : (
                <p className="col-span-3 py-16 text-center font-mono text-[10px] uppercase tracking-[3px] text-cinema-gray">
                  No reels found in this category.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* VIEW ALL */}
        {activeTab === "projects" && limit < projects.length && (
          <div className="mt-14 text-center">
            <Link href="/work" className="btn-cinema inline-block px-12 py-4">
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────
   REEL CARD
────────────────────────────────────────────────────────── */
function ReelCard({ reel }: { reel: InstagramReel }) {
  return (
    <div className="border border-cinema-border bg-cinema-card p-6">
      <h3 className="mb-2 font-display text-xl text-cinema-white">
        {reel.title}
      </h3>

      <p className="mb-4 text-cinema-gray">{reel.description}</p>

      <a
        href={`https://www.instagram.com/reel/${reel.shortcode}/`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-cinema-gold px-4 py-2 text-cinema-gold transition-all duration-300 hover:bg-cinema-gold hover:text-cinema-black"
      >
        <IgIcon size={10} />
        View Reel
      </a>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   PROJECT CARD
────────────────────────────────────────────────────────── */
function ProjectCard({ project }: { project: any }) {
  return (
    <div className="group overflow-hidden border border-cinema-border bg-cinema-card">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="border border-cinema-gold bg-black/70 px-2 py-1 font-mono text-[8px] uppercase tracking-[3px] text-cinema-gold">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 font-display text-xl text-cinema-white transition-colors duration-300 group-hover:text-cinema-gold">
          {project.title}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-cinema-gray">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tag: string) => (
            <span
              key={tag}
              className="border border-cinema-border px-2 py-1 font-mono text-[8px] uppercase tracking-[2px] text-cinema-gray"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
