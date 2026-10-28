import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsRow } from "@/components/StatsRow";
import { MeetTheNinjas } from "@/components/MeetTheNinjas";
import { NinjaPath } from "@/components/NinjaPath";
import { Stories } from "@/components/Stories";
import { LookingInOrInside } from "@/components/LookingInOrInside";
import { EnrolBlock } from "@/components/EnrolBlock";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Sticky Header */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero with Live Feed Preview and Members Only Lock */}
        <Hero />

        {/* 3. Stats Row (4 phases, 2 final projects, 2 ways to pay, 3 doors in the dojo) */}
        <StatsRow />

        {/* 4. Meet the Ninjas Grid & Profiles */}
        <MeetTheNinjas />

        {/* 5. The Ninja Path (Foundations, Tools, Creative, Portfolio, Black Belt) */}
        <NinjaPath />

        {/* 6. Stories (Mary, Roseline, Fatihi video testimonials) */}
        <Stories />

        {/* 7. "Looking in, or inside" Comparison */}
        <LookingInOrInside />

        {/* 8. Enrol Block (₦40,000 full or two ₦20,000 payments) */}
        <EnrolBlock />

        {/* 9. FAQ Accordion */}
        <FaqAccordion />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
