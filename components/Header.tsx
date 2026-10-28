"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandShapes";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? "bg-[var(--header-bg)] backdrop-blur-md border-[var(--color-border)] shadow-soft"
          : "bg-[var(--header-bg)] backdrop-blur-sm border-[var(--color-border)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)] rounded-lg py-1"
          aria-label="Motion Dojo Ninjas Home"
        >
          <BrandLogo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5 text-sm font-medium">
            <a
              href="#ninjas"
              className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors py-1"
            >
              Meet the ninjas
            </a>
            <a
              href="#path"
              className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors py-1"
            >
              The path
            </a>
            <a
              href="#stories"
              className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors py-1"
            >
              Stories
            </a>
            <a
              href="#enrol"
              className="text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors py-1"
            >
              Enrol
            </a>
            <a
              href="https://motiondojo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors py-1"
            >
              <span>Back to the Dojo</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </nav>

          <div className="h-5 w-px bg-[var(--color-border)]" />

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Primary CTA */}
          <a
            href="https://blackbelt.motiondojo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold tracking-tight rounded-full bg-[#C8FF3D] hover:bg-[#bcf728] text-[#14102A] transition-all shadow-sm hover:shadow active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF3D] focus-visible:ring-offset-2"
          >
            Start training
          </a>
        </div>

        {/* Mobile Hamburger & Quick Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 md:hidden bg-[var(--color-bg)]/98 backdrop-blur-xl flex flex-col justify-between p-6 overflow-y-auto animate-fade-rise border-t border-[var(--color-border)]">
          <nav className="flex flex-col gap-4 text-base font-medium">
            <a
              href="#ninjas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-card-sm bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] flex items-center justify-between"
            >
              <span>Meet the ninjas</span>
              <span className="text-xs text-[var(--color-muted)] font-normal">Showcase</span>
            </a>
            <a
              href="#path"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-card-sm bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] flex items-center justify-between"
            >
              <span>The ninja path</span>
              <span className="text-xs text-[var(--color-muted)] font-normal">4 phases</span>
            </a>
            <a
              href="#stories"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-card-sm bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] flex items-center justify-between"
            >
              <span>Student stories</span>
              <span className="text-xs text-[var(--color-muted)] font-normal">Video reviews</span>
            </a>
            <a
              href="#enrol"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-card-sm bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] flex items-center justify-between"
            >
              <span>Enrolment & pricing</span>
              <span className="text-xs font-semibold text-[#6D32E8] dark:text-[#A77BFF]">₦40,000</span>
            </a>
            <a
              href="https://motiondojo.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-card-sm bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-text)] flex items-center justify-between"
            >
              <span>Back to the Dojo</span>
              <ArrowUpRight className="w-4 h-4 text-[var(--color-muted)]" />
            </a>
          </nav>

          <div className="pt-6 border-t border-[var(--color-border)] flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-sm text-[var(--color-muted)]">Interface theme</span>
              <ThemeToggle showLabel />
            </div>

            <a
              href="https://blackbelt.motiondojo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 text-center font-heading font-bold text-sm tracking-tight rounded-full bg-[#C8FF3D] text-[#14102A] shadow-sm active:scale-98"
            >
              Start training
            </a>

            <p className="text-center text-xs text-[var(--color-muted)]">
              Practice. Keyframe. Repeat.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
