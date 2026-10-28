import React from "react";
import { Eye, ShieldCheck, Check, ArrowRight } from "lucide-react";

export function LookingInOrInside() {
  const visitorItems = [
    "Explore final student capstones and commercial reels",
    "View ninja specialties, bios, and verified Black Belt badges",
    "Connect directly with students via public social profiles",
    "Browse the 4-phase Black Belt curriculum outline",
    "Access public student testimonial reviews",
  ];

  const ninjaItems = [
    "Full access to all 4 training phases and video modules",
    "Direct video feedback & speed curve critiques from mentors",
    "Private Discord community channels with fellow ninjas",
    "Downloadable project files, expression snippets, and styleframes",
    "Grading and certification for 2 commercial capstone projects",
    "Official Black Belt credential and permanent directory profile",
    "Client pitch templates, pricing models, and contract guides",
  ];

  return (
    <section className="py-16 sm:py-24 border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-surface-2)] text-[var(--color-link)] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">
            Looking in, or inside
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-muted)] mt-3 leading-relaxed">
            See the difference between browsing from the outside and stepping into the dojo as an active student.
          </p>
        </div>

        {/* 2 Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Looking in (Visitor) */}
          <div className="rounded-card-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-9 flex flex-col justify-between shadow-soft">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface-2)] flex items-center justify-center text-[var(--color-link)]">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--color-surface-2)] text-[var(--color-muted)]">
                  Public visitor
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-[var(--color-text)] tracking-tight mb-2">
                Looking in from the outside
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                You can explore student talent and witness the caliber of motion work produced inside Motion Dojo.
              </p>

              <ul className="space-y-3.5 pt-4 border-t border-[var(--color-border)]">
                {visitorItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[var(--color-text)]">
                    <span className="w-5 h-5 rounded-full bg-[var(--color-surface-2)] text-[var(--color-muted)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
              <span className="text-xs text-[var(--color-muted)] block">
                Free to browse anytime on ninjas.motiondojo.com
              </span>
            </div>
          </div>

          {/* Card 2: Inside the Dojo (Keyframe Ninja) */}
          <div className="relative rounded-card-lg border-2 border-[var(--color-link)]/50 bg-[var(--color-surface)] p-7 sm:p-9 flex flex-col justify-between shadow-soft-lg">
            {/* "Most popular" / "Full access" Pill */}
            <div className="absolute -top-3.5 right-8 bg-[#6D32E8] text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
              Full experience
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-[#C8FF3D] flex items-center justify-center text-[#14102A]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#C8FF3D]/20 text-[#14102A] dark:text-[#C8FF3D]">
                  Keyframe ninja
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl text-[var(--color-text)] tracking-tight mb-2">
                Training inside the dojo
              </h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                You step onto the mat, learn the exact frameworks, submit your work for critique, and build an agency-ready reel.
              </p>

              <ul className="space-y-3.5 pt-4 border-t border-[var(--color-border)]">
                {ninjaItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[var(--color-text)]">
                    <span className="w-5 h-5 rounded-full bg-[#C8FF3D] text-[#14102A] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[var(--color-muted)] block">Tuition fee</span>
                <span className="text-lg font-extrabold text-[var(--color-text)]">
                  ₦40,000 <span className="text-xs font-normal text-[var(--color-muted)]">(or 2 × ₦20,000)</span>
                </span>
              </div>

              <a
                href="https://blackbelt.motiondojo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#C8FF3D] hover:bg-[#bcf728] text-[#14102A] font-heading font-extrabold text-xs sm:text-sm tracking-tight shadow-sm active:scale-95"
              >
                <span>Step inside</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
