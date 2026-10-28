"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Ninja } from "@/types/ninja";
import { NinjaShapeAvatar } from "@/components/BrandShapes";
import { ArrowUpRight, Play, Briefcase } from "lucide-react";

interface NinjaCardProps {
  ninja: Ninja;
  onSelect: (ninja: Ninja) => void;
}

export function NinjaCard({ ninja, onSelect }: NinjaCardProps) {
  const [imgError, setImgError] = useState(false);

  const isBlackBelt = ninja.status === "graduate" || ninja.phase === "Black Belt";

  return (
    <article
      onClick={() => onSelect(ninja)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(ninja);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View ${ninja.name}'s profile and final project`}
      className="group relative flex flex-col justify-between rounded-card border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-soft-lg hover:border-[var(--color-link)]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)] cursor-pointer"
    >
      <div>
        {/* Top Media: Photo or Shape Avatar */}
        <div className="relative aspect-[4/3] w-full rounded-card-sm overflow-hidden mb-4 bg-[var(--color-surface-2)] border border-[var(--color-border)]">
          {!imgError && ninja.photo ? (
            <Image
              src={ninja.photo}
              alt={ninja.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <NinjaShapeAvatar name={ninja.name} specialty={ninja.specialty} />
          )}

          {/* Status Badge overlay */}
          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
            <span
              className={`text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm backdrop-blur-md ${
                isBlackBelt
                  ? "bg-[#14102A]/90 text-[#C8FF3D] border border-[#C8FF3D]/30"
                  : "bg-[var(--color-surface)]/90 text-[var(--color-link)] border border-[var(--color-border)]"
              }`}
            >
              {ninja.phase || (isBlackBelt ? "Black Belt" : "In training")}
            </span>

            {ninja.openToWork && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-full bg-emerald-500/90 text-white shadow-sm backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Open to work
              </span>
            )}
          </div>

          {/* Project play teaser */}
          <div className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-[#14102A]/80 text-[#C8FF3D] backdrop-blur-md flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-110">
            <Play className="w-3.5 h-3.5 fill-[#C8FF3D]" />
          </div>
        </div>

        {/* Identity & Specialty */}
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-heading font-extrabold text-lg text-[var(--color-text)] tracking-tight group-hover:text-[var(--color-link)] transition-colors">
            {ninja.name}
          </h3>
          <span className="text-xs text-[var(--color-muted)] font-medium shrink-0 pt-0.5">
            {ninja.cohort}
          </span>
        </div>

        <p className="text-xs font-medium text-[var(--color-link)] mb-3 line-clamp-1">
          {ninja.specialty}
        </p>

        {/* Bio excerpt */}
        <p className="text-xs text-[var(--color-muted)] line-clamp-2 leading-relaxed mb-4">
          {ninja.bio}
        </p>
      </div>

      {/* Card Footer: Project Title preview & Profile Action */}
      <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between">
        <div className="flex flex-col max-w-[78%]">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-muted)]">
            Final project
          </span>
          <span className="text-xs font-semibold text-[var(--color-text)] truncate">
            {ninja.project.title}
          </span>
        </div>

        <div className="w-7 h-7 rounded-full bg-[var(--color-surface-2)] flex items-center justify-center text-[var(--color-link)] transition-colors group-hover:bg-[#C8FF3D] group-hover:text-[#14102A]">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </article>
  );
}
