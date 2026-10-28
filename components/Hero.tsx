"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, Lock, Sparkles, MessageSquare, Play, Heart, Flame } from "lucide-react";
import { ShapeDiamond, ShapeHourglass, ShapePlus, ShapeRoundedSquare } from "@/components/BrandShapes";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-[var(--color-border)]">
      {/* Subtle ambient decorative shapes in background */}
      <div className="absolute top-12 left-[10%] opacity-20 pointer-events-none text-[var(--color-link)] animate-float">
        <ShapeDiamond size={28} />
      </div>
      <div className="absolute top-36 right-[8%] opacity-25 pointer-events-none text-[#C8FF3D] animate-float" style={{ animationDelay: "2s" }}>
        <ShapeHourglass size={32} />
      </div>
      <div className="absolute bottom-12 left-[4%] opacity-15 pointer-events-none text-[var(--color-link)]">
        <ShapePlus size={24} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface-2)] border border-[var(--color-border)] text-xs font-semibold text-[var(--color-link)] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#C8FF3D] animate-ping" />
              <span>Black Belt showcase & directory</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-text)] leading-[1.08] mb-6">
              See what Keyframe Ninjas are making.
            </h1>

            <p className="text-lg sm:text-xl text-[var(--color-muted)] font-normal leading-relaxed mb-8 max-w-xl">
              Explore real final projects, breakthrough keyframes, and creative journeys from paid students inside Motion Dojo’s Black Belt in Motion Design course.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="https://blackbelt.motiondojo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#C8FF3D] hover:bg-[#bcf728] text-[#14102A] font-heading font-extrabold text-sm sm:text-base tracking-tight shadow-soft hover:shadow-soft-lg transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF3D] focus-visible:ring-offset-2"
              >
                <span>Start training</span>
              </a>

              <a
                href="#ninjas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[var(--color-surface)] hover:bg-[var(--color-surface-2)] text-[var(--color-text)] border border-[var(--color-border)] font-heading font-bold text-sm sm:text-base tracking-tight shadow-soft transition-all hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)]"
              >
                <span>Meet the ninjas</span>
                <ArrowDown className="w-4 h-4 text-[var(--color-muted)]" />
              </a>
            </div>

            {/* Micro reassurance under CTA */}
            <div className="mt-8 flex items-center gap-4 text-xs text-[var(--color-muted)]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF3D]" />
                Public student capstones
              </span>
              <span>•</span>
              <span>Self-paced with mentor feedback</span>
              <span>•</span>
              <span>₦40,000 full course</span>
            </div>
          </div>

          {/* Right Column: Feed Preview with "Members only" Lock Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-card-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:p-5 shadow-soft overflow-hidden">
              {/* Header of Feed Preview */}
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-[var(--color-border)]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C8FF3D]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">
                    Dojo Live Feed
                  </span>
                </div>
                <span className="text-[11px] font-medium text-[var(--color-muted)] bg-[var(--color-surface-2)] px-2.5 py-0.5 rounded-full">
                  Recent student activity
                </span>
              </div>

              {/* Stacked feed items */}
              <div className="space-y-3 relative">
                {/* Item 1 */}
                <div className="rounded-card-sm border border-[var(--color-border)] bg-[var(--color-bg)] p-3.5 shadow-sm transition-all hover:border-[var(--color-link)]/40">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#6D32E8]/20 text-[#6D32E8] dark:text-[#A77BFF] font-bold text-xs flex items-center justify-center border border-[var(--color-border)]">
                        CO
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[var(--color-text)]">
                          Chidi Okafor
                        </div>
                        <div className="text-[10px] text-[var(--color-muted)]">
                          Phase 04 • 24m ago
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#6D32E8]/10 text-[var(--color-link)] font-semibold">
                      Black Belt
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-text)] line-clamp-2 leading-relaxed">
                    Just finalized the camera easing on my kinetic title render. Switched from default bezier curves to custom cubic-in-out!
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-[var(--color-border)]/60 flex items-center justify-between text-[11px] text-[var(--color-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-amber-500" /> 14 reactions
                    </span>
                    <span className="inline-flex items-center gap-1 text-[var(--color-link)] font-medium">
                      <MessageSquare className="w-3.5 h-3.5" /> 6 mentor notes
                    </span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="rounded-card-sm border border-[var(--color-border)] bg-[var(--color-bg)] p-3.5 shadow-sm transition-all hover:border-[var(--color-link)]/40">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#C8FF3D]/25 text-[#14102A] dark:text-[#C8FF3D] font-bold text-xs flex items-center justify-center border border-[var(--color-border)]">
                        AD
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[var(--color-text)]">
                          Amara Diallo
                        </div>
                        <div className="text-[10px] text-[var(--color-muted)]">
                          Cohort 02 • 1h ago
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-surface-2)] text-[var(--color-muted)] font-medium">
                      Project review
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-text)] line-clamp-2 leading-relaxed">
                    Exported the final 60s character explainer. The squash and stretch feedback from mentor review made a night-and-day difference!
                  </p>
                </div>

                {/* Item 3 (Partially clipped by gradient) */}
                <div className="rounded-card-sm border border-[var(--color-border)] bg-[var(--color-bg)] p-3.5 shadow-sm opacity-60">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-surface-2)] text-[var(--color-text)] font-bold text-xs flex items-center justify-center">
                        TA
                      </div>
                      <div className="text-xs font-bold text-[var(--color-text)]">
                        Tobi Alabi
                      </div>
                    </div>
                    <span className="text-[10px] text-[var(--color-muted)]">Phase 02</span>
                  </div>
                  <p className="text-xs text-[var(--color-muted)] line-clamp-1">
                    Uploaded interactive micro-interaction files (.aep & JSON lottie)...
                  </p>
                </div>
              </div>

              {/* Gradient Fade-Out Mask with Members Only Lock */}
              <div className="absolute inset-x-0 bottom-0 pt-16 pb-5 px-5 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/95 to-transparent flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] shadow-md flex items-center justify-center mb-2.5 text-[var(--color-link)]">
                  <Lock className="w-4 h-4" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-text)] mb-1">
                  Members only
                </span>
                <p className="text-[11px] text-[var(--color-muted)] max-w-xs leading-relaxed mb-3">
                  Live project reviews, raw After Effects files, and daily peer critiques are reserved for enrolled students.
                </p>
                <a
                  href="https://blackbelt.motiondojo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[var(--color-link)] hover:underline inline-flex items-center gap-1"
                >
                  Join the Dojo to unlock feed
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
