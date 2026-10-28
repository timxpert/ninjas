"use client";

import React, { useState, useEffect } from "react";
import { Ninja, NinjaFilter } from "@/types/ninja";
import { NinjaCard } from "@/components/NinjaCard";
import { NinjaModal } from "@/components/NinjaModal";
import ninjasData from "@/data/ninjas.json";
import { Users, Award, Clock } from "lucide-react";

interface MeetTheNinjasProps {
  initialNinjaSlug?: string;
}

export function MeetTheNinjas({ initialNinjaSlug }: MeetTheNinjasProps) {
  const [filter, setFilter] = useState<NinjaFilter>("everyone");
  const [selectedNinja, setSelectedNinja] = useState<Ninja | null>(null);

  const ninjas: Ninja[] = ninjasData as Ninja[];

  // Auto-open modal if initialNinjaSlug provided (e.g. from /n/slug or query)
  useEffect(() => {
    if (initialNinjaSlug) {
      const match = ninjas.find((n) => n.slug === initialNinjaSlug);
      if (match) {
        setSelectedNinja(match);
      }
    }
  }, [initialNinjaSlug, ninjas]);

  // Handle URL changes via popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const matchSlug = path.startsWith("/n/") ? path.replace("/n/", "") : null;
      if (matchSlug) {
        const found = ninjas.find((n) => n.slug === matchSlug);
        setSelectedNinja(found || null);
      } else {
        setSelectedNinja(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [ninjas]);

  const handleOpenNinja = (ninja: Ninja) => {
    setSelectedNinja(ninja);
    window.history.pushState({ slug: ninja.slug }, "", `/n/${ninja.slug}`);
  };

  const handleCloseModal = () => {
    setSelectedNinja(null);
    if (window.location.pathname.startsWith("/n/")) {
      window.history.pushState({}, "", "/#ninjas");
    }
  };

  const filteredNinjas = ninjas.filter((ninja) => {
    if (filter === "blackbelts") {
      return ninja.status === "graduate" || ninja.phase === "Black Belt";
    }
    if (filter === "training") {
      return ninja.status === "training" || ninja.phase !== "Black Belt";
    }
    return true;
  });

  const countEveryone = ninjas.length;
  const countBlackBelts = ninjas.filter(
    (n) => n.status === "graduate" || n.phase === "Black Belt"
  ).length;
  const countTraining = ninjas.filter(
    (n) => n.status === "training" || n.phase !== "Black Belt"
  ).length;

  return (
    <section id="ninjas" className="py-16 sm:py-24 border-b border-[var(--color-border)] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-surface-2)] text-[var(--color-link)] text-xs font-bold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>Student showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">
              Meet the Ninjas
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-muted)] mt-3 leading-relaxed">
              Explore real portfolios, commercial title sequences, and 2D character stories produced by paid students mastering motion design.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] self-start md:self-auto overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setFilter("everyone")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)] ${
                filter === "everyone"
                  ? "bg-[#C8FF3D] text-[#14102A] shadow-sm"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)]"
              }`}
            >
              <span>Everyone</span>
              <span className="opacity-70 text-[11px] font-semibold">({countEveryone})</span>
            </button>

            <button
              type="button"
              onClick={() => setFilter("blackbelts")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)] ${
                filter === "blackbelts"
                  ? "bg-[#C8FF3D] text-[#14102A] shadow-sm"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)]"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Black Belts</span>
              <span className="opacity-70 text-[11px] font-semibold">({countBlackBelts})</span>
            </button>

            <button
              type="button"
              onClick={() => setFilter("training")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)] ${
                filter === "training"
                  ? "bg-[#C8FF3D] text-[#14102A] shadow-sm"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-2)]"
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>In training</span>
              <span className="opacity-70 text-[11px] font-semibold">({countTraining})</span>
            </button>
          </div>
        </div>

        {/* Ninjas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredNinjas.map((ninja) => (
            <NinjaCard
              key={ninja.slug}
              ninja={ninja}
              onSelect={handleOpenNinja}
            />
          ))}
        </div>

        {/* Ninja Profile Modal / Bottom Sheet */}
        <NinjaModal
          ninja={selectedNinja}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}
