import React from "react";
import { Check, ShieldCheck, Zap, ArrowRight, Lock } from "lucide-react";
import { ShapeDiamond, ShapeHourglass } from "@/components/BrandShapes";

export function EnrolBlock() {
  return (
    <section id="enrol" className="py-16 sm:py-24 border-b border-[var(--color-border)] bg-[var(--color-surface)]/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-card-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-12 lg:p-16 shadow-soft-lg overflow-hidden">
          {/* Subtle background decorative shapes */}
          <div className="absolute top-8 right-8 opacity-20 text-[var(--color-link)] pointer-events-none">
            <ShapeDiamond size={48} />
          </div>
          <div className="absolute bottom-8 left-8 opacity-15 text-[#C8FF3D] pointer-events-none">
            <ShapeHourglass size={44} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[var(--color-surface-2)] text-[var(--color-link)] text-xs font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5 text-[#C8FF3D]" />
              <span>Join the next cohort</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--color-text)] tracking-tight leading-tight">
              Become a Keyframe Ninja
            </h2>

            <p className="text-base sm:text-lg text-[var(--color-muted)] mt-4 leading-relaxed max-w-2xl mx-auto">
              Master speed curves, sound design, and portfolio-defining motion direction. Build client-ready work and join an ambitious network of motion designers.
            </p>
          </div>

          {/* Pricing Options Grid: Pay in Full vs Split Payment */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {/* Option 1: Pay in Full (Recommended) */}
            <div className="relative rounded-card border-2 border-[var(--color-link)] bg-[var(--color-bg)] p-6 sm:p-8 flex flex-col justify-between shadow-soft">
              <div className="absolute -top-3 right-6 bg-[#6D32E8] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm">
                Recommended
              </div>

              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-[var(--color-link)] block mb-1">
                  Pay in full
                </span>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-heading font-extrabold text-4xl sm:text-5xl text-[var(--color-text)]">
                    ₦40,000
                  </span>
                  <span className="text-xs text-[var(--color-muted)] font-medium">one-time payment</span>
                </div>

                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed mb-6">
                  Complete upfront enrolment unlocking all 4 phases, 2 project submissions, and immediate access to the private community.
                </p>

                <ul className="space-y-3 pt-4 border-t border-[var(--color-border)] mb-8">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text)]">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Instant access to all 4 training phases</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text)]">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Mentor review on both capstone projects</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text)]">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Full project files, expressions vault, & sound library</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text)]">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Black Belt evaluation and permanent showcase profile</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://blackbelt.motiondojo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#C8FF3D] hover:bg-[#bcf728] text-[#14102A] font-heading font-extrabold text-sm tracking-tight shadow-soft transition-all active:scale-98"
              >
                <span>Start training in full</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Option 2: Split in Two */}
            <div className="rounded-card border border-[var(--color-border)] bg-[var(--color-bg)] p-6 sm:p-8 flex flex-col justify-between shadow-soft">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-[var(--color-muted)] block mb-1">
                  Flexible split
                </span>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-heading font-extrabold text-4xl sm:text-5xl text-[var(--color-text)]">
                    ₦20,000
                  </span>
                  <span className="text-xs text-[var(--color-muted)] font-medium">× 2 payments</span>
                </div>

                <div className="p-3.5 rounded-card-sm bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-200 leading-relaxed mb-6 font-medium">
                  <span className="font-bold block mb-0.5">Important enrolment note:</span>
                  The first ₦20,000 unlocks Phase 01 only. The remaining phases (02, 03, 04, project evaluations, and Black Belt certification) unlock after the full fee is completed.
                </div>

                <ul className="space-y-3 pt-4 border-t border-[var(--color-border)] mb-8">
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text)]">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Low commitment start with Phase 01 foundations</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text)]">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Master core speed graphs and easing physics</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-muted)]">
                    <Lock className="w-4 h-4 text-[var(--color-muted)] shrink-0 mt-0.5" />
                    <span>Phases 02-04 locked until 2nd payment of ₦20,000</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-muted)]">
                    <Lock className="w-4 h-4 text-[var(--color-muted)] shrink-0 mt-0.5" />
                    <span>Project grading available upon completing full fee</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://blackbelt.motiondojo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[var(--color-surface-2)] hover:bg-[var(--color-border)] text-[var(--color-text)] font-heading font-extrabold text-sm tracking-tight border border-[var(--color-border)] transition-all active:scale-98"
              >
                <span>Start with Phase 01</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </a>
            </div>
          </div>

          {/* Secure Reassurance Footer */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--color-muted)] text-center">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Secure payments processed via Paystack
            </span>
            <span>•</span>
            <span>Practice. Keyframe. Repeat.</span>
            <span>•</span>
            <span>Self-paced access with lifetime community</span>
          </div>
        </div>
      </div>
    </section>
  );
}
