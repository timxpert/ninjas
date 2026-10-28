import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Ninja } from "@/types/ninja";
import ninjasData from "@/data/ninjas.json";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NinjaStandaloneProfile } from "@/components/NinjaStandaloneProfile";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const ninjas = ninjasData as Ninja[];
  return ninjas.map((n) => ({
    slug: n.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ninjas = ninjasData as Ninja[];
  const ninja = ninjas.find((n) => n.slug === slug);

  if (!ninja) {
    return {
      title: "Ninja Not Found | Motion Dojo",
      description: "Student profile could not be found.",
    };
  }

  const isBlackBelt = ninja.status === "graduate" || ninja.phase === "Black Belt";

  return {
    title: `${ninja.name} — ${isBlackBelt ? "Black Belt" : "Ninja"} | Motion Dojo`,
    description: ninja.bio,
    openGraph: {
      title: `${ninja.name} — ${ninja.specialty} | Keyframe Ninja`,
      description: ninja.bio,
      url: `https://ninjas.motiondojo.com/n/${ninja.slug}`,
      images: [
        {
          url: ninja.project.poster || ninja.photo || "/images/hero-poster.webp",
          width: 1200,
          height: 630,
          alt: `${ninja.name}'s final project`,
        },
      ],
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${ninja.name} — Keyframe Ninja`,
      description: ninja.bio,
      images: [ninja.project.poster || ninja.photo || "/images/hero-poster.webp"],
    },
  };
}

export default async function NinjaProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const ninjas = ninjasData as Ninja[];
  const ninja = ninjas.find((n) => n.slug === slug);

  if (!ninja) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/#ninjas"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors px-3 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all ninjas</span>
            </Link>

            <a
              href="https://blackbelt.motiondojo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-link)] hover:underline"
            >
              <span>Enrol in Black Belt</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Standalone Interactive Profile View */}
          <NinjaStandaloneProfile ninja={ninja} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
