"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Ninja } from "@/types/ninja";
import { NinjaShapeAvatar } from "@/components/BrandShapes";
import { getVimeoEmbedUrl, resolveSocialUrl } from "@/lib/utils";
import {
  IconInstagram,
  IconYouTube,
  IconLinkedIn,
  IconX,
  IconTikTok,
  IconBehance,
  IconWhatsApp,
} from "@/components/SocialIcons";
import {
  X,
  Play,
  Share2,
  Check,
  ExternalLink,
  Mail,
  Globe,
} from "lucide-react";

interface NinjaModalProps {
  ninja: Ninja | null;
  onClose: () => void;
}

export function NinjaModal({ ninja, onClose }: NinjaModalProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [imgError, setImgError] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsPlayingVideo(false);
    setImgError(false);
    setCopiedLink(false);
  }, [ninja]);

  useEffect(() => {
    if (!ninja) return;

    previousActiveElement.current = document.activeElement as HTMLElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeBtn = modalRef.current?.querySelector<HTMLButtonElement>('[data-autofocus="true"]');
    closeBtn?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previousActiveElement.current?.focus();
    };
  }, [ninja, onClose]);

  if (!ninja) return null;

  const isBlackBelt = ninja.status === "graduate" || ninja.phase === "Black Belt";

  const handleShare = async () => {
    const url = `${window.location.origin}/n/${ninja.slug}`;
    try {
      if (typeof window !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2200);
      }
    } catch {
      // Fallback
    }
  };

  const availableLinks: { key: keyof typeof ninja.links; label: string; icon: React.ReactNode }[] = [
    { key: "instagram", label: "Instagram", icon: <IconInstagram className="w-3.5 h-3.5" /> },
    { key: "x", label: "X (Twitter)", icon: <IconX className="w-3.5 h-3.5" /> },
    { key: "linkedin", label: "LinkedIn", icon: <IconLinkedIn className="w-3.5 h-3.5" /> },
    { key: "behance", label: "Behance", icon: <IconBehance className="w-3.5 h-3.5" /> },
    { key: "tiktok", label: "TikTok", icon: <IconTikTok className="w-3.5 h-3.5" /> },
    { key: "youtube", label: "YouTube", icon: <IconYouTube className="w-3.5 h-3.5" /> },
    { key: "website", label: "Website", icon: <Globe className="w-3.5 h-3.5" /> },
    { key: "whatsapp", label: "WhatsApp", icon: <IconWhatsApp className="w-3.5 h-3.5" /> },
    { key: "email", label: "Email", icon: <Mail className="w-3.5 h-3.5" /> },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6 bg-[var(--modal-overlay)] backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ninja-modal-name"
      aria-describedby="ninja-modal-bio"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="w-full md:max-w-2xl max-h-[92vh] md:max-h-[88vh] overflow-y-auto bg-[var(--color-surface)] border border-[var(--color-border)] rounded-t-[28px] md:rounded-card-lg shadow-2xl flex flex-col focus:outline-none animate-fade-rise"
      >
        {/* Mobile Pull Handle Indicator */}
        <div className="md:hidden flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 rounded-full bg-[var(--color-border)]" />
        </div>

        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-10 px-5 sm:px-7 py-4 bg-[var(--color-surface)]/95 backdrop-blur-md border-b border-[var(--color-border)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[var(--color-link)]">
              Ninja profile
            </span>
            {ninja.isSample && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/20">
                Sample profile
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-surface-2)] text-[var(--color-text)] border border-[var(--color-border)] hover:bg-[var(--color-border)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)]"
              aria-label="Share ninja profile link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-emerald-500">Link copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 opacity-70" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              data-autofocus="true"
              aria-label="Close profile modal"
              className="w-8 h-8 rounded-full flex items-center justify-center bg-[var(--color-surface-2)] text-[var(--color-text)] hover:bg-[var(--color-border)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-card-sm overflow-hidden border border-[var(--color-border)] shrink-0 bg-[var(--color-surface-2)] shadow-sm">
              {!imgError && ninja.photo ? (
                <Image
                  src={ninja.photo}
                  alt={ninja.name}
                  fill
                  className="object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <NinjaShapeAvatar name={ninja.name} specialty={ninja.specialty} />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                    isBlackBelt
                      ? "bg-[#14102A] text-[#C8FF3D] border border-[#C8FF3D]/40"
                      : "bg-[var(--color-surface-2)] text-[var(--color-link)] border border-[var(--color-border)]"
                  }`}
                >
                  {ninja.phase || (isBlackBelt ? "Black Belt" : "In training")}
                </span>

                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[var(--color-surface-2)] text-[var(--color-muted)] border border-[var(--color-border)]">
                  {ninja.cohort}
                </span>

                {ninja.openToWork && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Open to work
                  </span>
                )}
              </div>

              <h2
                id="ninja-modal-name"
                className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text)] tracking-tight leading-tight"
              >
                {ninja.name}
              </h2>
              <p className="text-sm font-semibold text-[var(--color-link)] mt-0.5">
                {ninja.specialty}
              </p>
            </div>
          </div>

          {/* Bio (~60 words) */}
          <div className="rounded-card-sm border border-[var(--color-border)] bg-[var(--color-bg)] p-4 sm:p-5">
            <span className="text-[11px] uppercase font-bold tracking-wider text-[var(--color-muted)] block mb-1.5">
              About the ninja
            </span>
            <p
              id="ninja-modal-bio"
              className="text-sm sm:text-base text-[var(--color-text)] leading-relaxed font-normal"
            >
              {ninja.bio}
            </p>
          </div>

          {/* Final Project: Lazy-Loaded Video Player */}
          <div className="space-y-3">
            <div>
              <span className="text-[11px] uppercase font-bold tracking-wider text-[var(--color-link)] block">
                Final capstone project
              </span>
              <h4 className="font-heading font-extrabold text-lg text-[var(--color-text)] tracking-tight">
                {ninja.project.title}
              </h4>
            </div>

            {/* Video Container (16:9) */}
            <div className="relative aspect-video w-full rounded-card-sm overflow-hidden bg-black border border-[var(--color-border)] shadow-md">
              {isPlayingVideo ? (
                <iframe
                  src={getVimeoEmbedUrl(ninja.project.video, true)}
                  title={ninja.project.title}
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              ) : (
                <div
                  onClick={() => setIsPlayingVideo(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsPlayingVideo(true);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Play ${ninja.project.title} video`}
                  className="group relative w-full h-full cursor-pointer overflow-hidden flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8FF3D]"
                >
                  {ninja.project.poster ? (
                    <Image
                      src={ninja.project.poster}
                      alt={ninja.project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#14102A] to-[#2A2447] flex items-center justify-center" />
                  )}

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#C8FF3D] hover:bg-[#bcf728] text-[#14102A] flex items-center justify-center shadow-xl transition-transform duration-200 group-hover:scale-110 active:scale-95">
                    <Play className="w-6 h-6 fill-[#14102A] ml-0.5" />
                  </div>

                  <span className="absolute bottom-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/75 text-white backdrop-blur-md">
                    Tap to play capstone video
                  </span>
                </div>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed italic bg-[var(--color-surface-2)] p-3 rounded-card-sm border border-[var(--color-border)]">
              "{ninja.project.note}"
            </p>
          </div>

          {/* Connect Chips: Social Links */}
          <div className="pt-2">
            <span className="text-[11px] uppercase font-bold tracking-wider text-[var(--color-muted)] block mb-2.5">
              Connect with {ninja.name.split(" ")[0]}
            </span>

            <div className="flex flex-wrap gap-2">
              {availableLinks.map(({ key, label, icon }) => {
                const raw = ninja.links[key];
                if (!raw) return null;
                const url = resolveSocialUrl(key, raw);

                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-surface-2)] hover:bg-[var(--color-link)] hover:text-white text-[var(--color-text)] border border-[var(--color-border)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)]"
                  >
                    <span>{icon}</span>
                    <span>{label}</span>
                    <ExternalLink className="w-3 h-3 opacity-50 ml-0.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
