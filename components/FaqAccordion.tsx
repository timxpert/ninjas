"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Who is the Black Belt in Motion Design course for?",
      answer:
        "The course is tailored for graphic designers, 2D/3D animators, video editors, and digital creatives who want to stop making stiff, default animations and start directing high-impact, commercial-standard motion work.",
    },
    {
      question: "How does the ₦20,000 split payment option work?",
      answer:
        "The first payment of ₦20,000 grants instant access to Phase 01 (Foundations), where you master speed graphs, easing physics, and timing. When you are ready to continue into Phases 02, 03, 04, project submissions, and Black Belt certification, you pay the remaining ₦20,000 balance.",
    },
    {
      question: "What software do I need to participate?",
      answer:
        "Adobe After Effects is the primary workhorse for 2D motion and compositing. We also cover 3D workflows using Cinema 4D and Blender, but the core animation principles you learn apply universally across any modern motion software.",
    },
    {
      question: "How are student profiles featured on ninjas.motiondojo.com?",
      answer:
        "All paid students who progress through the phases receive an official profile in the showcase directory. As you hit milestones, your status updates from 'In training' (Phase 02/03) to 'Black Belt' once your two commercial capstone projects are successfully approved.",
    },
    {
      question: "Is the training self-paced or do I need to attend live sessions?",
      answer:
        "The curriculum is completely self-paced with pre-recorded high-definition video modules, exercise files, and workbooks. However, mentor project reviews and community feedback happen asynchronously throughout the week so you can make steady progress on your own schedule.",
    },
    {
      question: "How do the two final projects get evaluated?",
      answer:
        "Your capstones are reviewed directly by seasoned motion directors against commercial studio standards. We evaluate graph easing, audio synchronization, spacing, and narrative clarity, providing timestamped feedback until your work is ready for an agency portfolio.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 border-b border-[var(--color-border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-surface-2)] text-[var(--color-link)] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--color-text)] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-muted)] mt-3">
            Everything you need to know about the course, payments, and the showcase.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-card border border-[var(--color-border)] bg-[var(--color-surface)] transition-all overflow-hidden shadow-soft"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)]"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[var(--color-text)] tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[var(--color-surface-2)] text-[var(--color-link)] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[var(--color-muted)] leading-relaxed border-t border-[var(--color-border)]/50 animate-fade-rise">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
