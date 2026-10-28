"use client";

import React, { useState } from "react";
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
  Play,
  Share2,
  Check,
  ExternalLink,
  Mail,
  Globe,
} from "lucide-react";

interface NinjaStandaloneProfileProps {
  ninja: Ninja;
}

export function NinjaStandaloneProfile({ ninja }: NinjaStandaloneProfileProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [imgError, setImgError] = useState(false);

  const isBlackBelt = ninja.status === "graduate" || ninja.phase === "Black Belt";

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
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
    <div className="rounded-card-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-soft-lg overflow-hidden">
      {/* Top Banner / Actions */}
      <div className="px-6 sm:px-8 py-5 border-b border-[var(--color-border)] flex items-center justify-between bg-[var(--color-surface)]">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase font-extrabold tracking-wider text-[var(--color-link)]">
            Verified Ninja Showcase
          </span>
          {ninja.isSample && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/20">
              Sample profile
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-surface-2)] text-[var(--color-text)] border border-[var(--color-border)] hover:bg-[var(--color-border)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)]"
          aria-label="Share ninja profile"
        >
          {copiedLink ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-500">Link copied!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 opacity-70" />
              <span>Share profile</span>
            </>
          )}
        </button>
      </div>

      <div className="p-6 sm:p-10 space-y-8">
        {/* Identity & Badges */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-card-sm overflow-hidden border border-[var(--color-border)] shrink-0 bg-[var(--color-surface-2)] shadow-md">
            {!imgError && ninja.photo ? (
              <Image
                src={ninja.photo}
                alt={ninja.name}
                fill
                priority
                className="object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <NinjaShapeAvatar name={ninja.name} specialty={ninja.specialty} />
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full ${
                  isBlackBelt
                    ? "bg-[#14102A] text-[#C8FF3D] border border-[#C8FF3D]/40"
                    : "bg-[var(--color-surface-2)] text-[var(--color-link)] border border-[var(--color-border)]"
                }`}
              >
                {ninja.phase || (isBlackBelt ? "Black Belt" : "In training")}
              </span>

              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-surface-2)] text-[var(--color-muted)] border border-[var(--color-border)]">
                {ninja.cohort}
              </span>

              {ninja.openToWork && (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open to work
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)] tracking-tight">
              {ninja.name}
            </h1>
            <p className="text-base font-semibold text-[var(--color-link)] mt-1">
              {ninja.specialty}
            </p>
          </div>
        </div>

        {/* Bio */}
        <div className="rounded-card border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
          <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-muted)] block mb-2">
            Bio & Creative focus
          </span>
          <p className="text-base text-[var(--color-text)] leading-relaxed font-normal">
            {ninja.bio}
          </p>
        </div>

        {/* Final Project */}
        <div className="space-y-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-link)] block mb-1">
              Final capstone project
            </span>
            <h2 className="text-2xl font-extrabold text-[var(--color-text)] tracking-tight">
              {ninja.project.title}
            </h2>
          </div>

          {/* 16:9 Video Player */}
          <div className="relative aspect-video w-full rounded-card overflow-hidden bg-black border border-[var(--color-border)] shadow-lg">
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
                aria-label={`Play ${ninja.project.title}`}
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

                <div className="relative z-10 w-20 h-20 rounded-full bg-[#C8FF3D] hover:bg-[#bcf728] text-[#14102A] flex items-center justify-center shadow-2xl transition-transform duration-200 group-hover:scale-110 active:scale-95">
                  <Play className="w-8 h-8 fill-[#14102A] ml-1" />
                </div>

                <span className="absolute bottom-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full bg-black/75 text-white backdrop-blur-md">
                  Tap to play capstone video
                </span>
              </div>
            )}
          </div>

          <p className="text-sm text-[var(--color-muted)] leading-relaxed italic bg-[var(--color-surface-2)] p-4 rounded-card-sm border border-[var(--color-border)]">
            "{ninja.project.note}"
          </p>
        </div>

        {/* Connect Row */}
        <div className="pt-2">
          <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-muted)] block mb-3">
            Connect with {ninja.name.split(" ")[0]}
          </span>

          <div className="flex flex-wrap gap-2.5">
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[var(--color-surface-2)] hover:bg-[var(--color-link)] hover:text-white text-[var(--color-text)] border border-[var(--color-border)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-link)]"
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50 ml-0.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
