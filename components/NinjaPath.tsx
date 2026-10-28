import React from "react";
import {
  ShapePlus,
  ShapeDiamond,
  ShapeHourglass,
  ShapeCircle,
  ShapePlayTriangle,
  ShapeRoundedSquare,
} from "@/components/BrandShapes";
import { Compass, CheckCircle2, Award } from "lucide-react";

export function NinjaPath() {
  const steps = [
    {
      num: "Phase 01",
      title: "Foundations",
      desc: "Deconstruct the core animation principles. Master speed graphs, easing physics, spatial timing, and weight so your motion feels organic rather than robotic.",
      icon: ShapeCircle,
      highlight: "Unlockable for ₦20,000",
    },
    {
      num: "Phase 02",
      title: "Tools and techniques",
      desc: "Deep dive into industry-standard workflows across After Effects and 3D. Master advanced expressions, camera projection, rigging, and kinetic typography systems.",
      icon: ShapeDiamond,
      highlight: "Core technique",
    },
    {
      num: "Phase 03",
      title: "Creative execution",
      desc: "Translate concepts into compelling visual narratives. Direct styleframes, craft tactile sound design cues, and execute full-length speculative client projects.",
      icon: ShapeHourglass,
      highlight: "Project 01 submission",
    },
    {
      num: "Phase 04",
      title: "Portfolio and professional growth",
      desc: "Package your work for high-paying agencies and global studios. Learn client pitching, pricing strategies, case study presentation, and contract negotiation.",
      icon: ShapeRoundedSquare,
      highlight: "Project 02 submission",
    },
  ];

  return (
    <section id="path" className="py-16 sm:py-24 border-b border-[var(--color-border)] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-surface-2)] text-[var(--color-link)] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">
            The Ninja Path
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-muted)] mt-3 leading-relaxed">
            Every Keyframe Ninja progresses through 4 rigorous phases before earning their Black Belt in Motion Design.
          </p>
        </div>

        {/* Path Grid: 4 Phases + Black Belt Capstone */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative rounded-card border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-soft"
              >
                <div>
                  {/* Step header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[var(--color-link)] bg-[var(--color-surface-2)] px-2.5 py-1 rounded-full">
                      {step.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[var(--color-surface-2)] flex items-center justify-center text-[var(--color-link)]">
                      <Icon size={16} />
                    </div>
                  </div>

                  <h3 className="font-heading font-extrabold text-xl text-[var(--color-text)] tracking-tight mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-semibold text-[var(--color-muted)]">
                  <span className="inline-flex items-center gap-1 text-[var(--color-text)]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    {step.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Black Belt Finale Card */}
        <div className="mt-8 rounded-card-lg border border-[var(--color-border)] bg-gradient-to-r from-[var(--color-surface)] via-[var(--color-surface-2)] to-[var(--color-surface)] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-soft">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-full bg-[#14102A] border border-[#C8FF3D]/40 flex items-center justify-center text-[#C8FF3D] shrink-0 shadow-md">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#6D32E8] dark:text-[#A77BFF] mb-1">
                <span>Final milestone</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[var(--color-text)] tracking-tight">
                Black Belt Certification
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1 max-w-xl">
                Submit 2 completed capstone projects for mentor grading. Successful ninjas receive the official Black Belt credential and permanent inclusion on this public showcase.
              </p>
            </div>
          </div>

          <a
            href="https://blackbelt.motiondojo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-[#C8FF3D] hover:bg-[#bcf728] text-[#14102A] font-heading font-extrabold text-xs sm:text-sm tracking-tight shadow-sm active:scale-95"
          >
            Start your journey
          </a>
        </div>
      </div>
    </section>
  );
}
