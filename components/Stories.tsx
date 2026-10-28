"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Quote } from "lucide-react";
import { getVimeoEmbedUrl } from "@/lib/utils";

export function Stories() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const testimonials = [
    {
      id: "mary",
      name: "Mary",
      role: "Keyframe Ninja • Cohort 01",
      poster: "/images/testimonial-mary.webp",
      videoUrl: "https://vimeo.com/1238665663",
      summary: "How the structured phases took her from struggling with graph curves to producing confident commercial work.",
    },
    {
      id: "roseline",
      name: "Roseline",
      role: "Keyframe Ninja • Cohort 02",
      poster: "/images/testimonial-roseline.webp",
      videoUrl: "https://vimeo.com/1238666245",
      summary: "Reflecting on direct mentor critiques, self-paced momentum, and mastering professional motion workflow.",
    },
    {
      id: "fatihi",
      name: "Muhammad Fatihi",
      role: "Keyframe Ninja • Cohort 02",
      poster: "/images/testimonial-fatihi.webp",
      videoUrl: "https://vimeo.com/1238668293",
      summary: "From design theory to high-speed client delivery, leveling up his portfolio and earning the Black Belt.",
    },
  ];

  return (
    <section id="stories" className="py-16 sm:py-24 border-b border-[var(--color-border)] bg-[var(--color-surface)]/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-surface-2)] text-[var(--color-link)] text-xs font-bold uppercase tracking-wider mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Student experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">
            Stories from the Dojo
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-muted)] mt-3 leading-relaxed">
            Hear directly from students who joined the course, conquered the keyframes, and graduated to Black Belt.
          </p>
        </div>

        {/* 3 Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item) => {
            const isPlaying = playingVideoId === item.id;

            return (
              <div
                key={item.id}
                className="group rounded-card border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5 flex flex-col justify-between shadow-soft hover:shadow-soft-lg transition-all duration-200"
              >
                {/* Video container */}
                <div className="relative aspect-[4/3] w-full rounded-card-sm overflow-hidden bg-black border border-[var(--color-border)] mb-4 shadow-sm">
                  {isPlaying ? (
                    <iframe
                      src={getVimeoEmbedUrl(item.videoUrl, true)}
                      title={`Video review from ${item.name}`}
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="w-full h-full border-0"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      onClick={() => setPlayingVideoId(item.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setPlayingVideoId(item.id);
                        }
                      }}
                      tabIndex={0}
                      role="button"
                      aria-label={`Play testimonial from ${item.name}`}
                      className="relative w-full h-full cursor-pointer flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF3D]"
                    >
                      <Image
                        src={item.poster}
                        alt={`Photo of ${item.name}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />

                      {/* Play Button */}
                      <div className="relative z-10 w-14 h-14 rounded-full bg-[#C8FF3D] hover:bg-[#bcf728] text-[#14102A] flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110 active:scale-95">
                        <Play className="w-5 h-5 fill-[#14102A] ml-0.5" />
                      </div>

                      <span className="absolute bottom-2.5 left-2.5 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-black/70 text-white backdrop-blur-md">
                        Tap to watch
                      </span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-heading font-extrabold text-lg text-[var(--color-text)] tracking-tight">
                      {item.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-[var(--color-link)] bg-[var(--color-surface-2)] px-2 py-0.5 rounded-full">
                      Graduate
                    </span>
                  </div>

                  <p className="text-xs text-[var(--color-muted)] font-medium mb-3">
                    {item.role}
                  </p>

                  <p className="text-xs sm:text-sm text-[var(--color-text)] leading-relaxed italic border-t border-[var(--color-border)] pt-3">
                    "{item.summary}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
