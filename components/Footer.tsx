"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandShapes";
import { IconInstagram, IconYouTube } from "@/components/SocialIcons";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[var(--color-surface)] border-t border-[var(--color-border)] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[var(--color-border)]">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)] rounded-lg">
              <BrandLogo />
            </Link>

            <p className="font-heading font-bold text-base text-[var(--color-text)] mb-2">
              Practice. Keyframe. Repeat.
            </p>

            <p className="text-sm text-[var(--color-muted)] leading-relaxed max-w-sm mb-6">
              The official public showcase and directory of students enrolled in Motion Dojo’s Black Belt in Motion Design course.
            </p>

            {/* Social handles */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/joinmotiondojo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-text)] hover:text-[#C8FF3D] hover:bg-[#14102A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)]"
                aria-label="Motion Dojo on Instagram"
              >
                <IconInstagram className="w-4 h-4" />
              </a>

              <a
                href="https://www.youtube.com/@joinmotiondojo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-text)] hover:text-[#C8FF3D] hover:bg-[#14102A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)]"
                aria-label="Motion Dojo on YouTube"
              >
                <IconYouTube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links: The Dojo */}
          <div className="md:col-span-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[var(--color-link)] mb-4">
              The Dojo
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a
                  href="https://motiondojo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  <span>Motion Dojo home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://blackbelt.motiondojo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  <span>Black Belt course enrolment</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="#path"
                  className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  The ninja path (4 phases)
                </a>
              </li>
              <li>
                <a
                  href="#stories"
                  className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  Student stories & reviews
                </a>
              </li>
              <li>
                <a
                  href="#enrol"
                  className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  Tuition & split pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Directory & Accreditations */}
          <div className="md:col-span-3">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[var(--color-link)] mb-4">
              Showcase Directory
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a
                  href="#ninjas"
                  className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  All ninjas
                </a>
              </li>
              <li>
                <a
                  href="#ninjas"
                  className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  Black Belt graduates
                </a>
              </li>
              <li>
                <a
                  href="#ninjas"
                  className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  In training (Phase 02 / 03)
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-card-sm border border-[var(--color-border)] bg-[var(--color-bg)]">
              <span className="text-[11px] font-bold text-[var(--color-text)] block mb-1">
                Are you an enrolled student?
              </span>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                Submit your project capstones inside the Dojo to receive your official public profile.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row: copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} Motion Dojo. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF3D]" />
              ninjas.motiondojo.com
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors focus:outline-none"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
