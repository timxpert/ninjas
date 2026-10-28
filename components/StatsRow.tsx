import React from "react";
import { ShapeDiamond, ShapeHourglass, ShapePlus, ShapeRoundedSquare } from "@/components/BrandShapes";

export function StatsRow() {
  const stats = [
    {
      value: "4",
      label: "Phases to Black Belt",
      desc: "From core animation foundations to portfolio and professional execution.",
      icon: ShapeHourglass,
    },
    {
      value: "2",
      label: "Final projects",
      desc: "Commercial-grade portfolio capstones evaluated before Black Belt graduation.",
      icon: ShapeDiamond,
    },
    {
      value: "2",
      label: "Ways to pay",
      desc: "₦40,000 one-time in full or two flexible split payments of ₦20,000.",
      icon: ShapePlus,
    },
    {
      value: "3",
      label: "Doors in the dojo",
      desc: "Public showcase, step-by-step masterclass, and private peer community.",
      icon: ShapeRoundedSquare,
    },
  ];

  return (
    <section className="py-12 sm:py-16 border-b border-[var(--color-border)] bg-[var(--color-surface)]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-card border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-extrabold text-4xl sm:text-5xl tracking-tight text-[var(--color-text)]">
                    {item.value}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[var(--color-surface-2)] flex items-center justify-center text-[var(--color-link)] transition-transform duration-200 group-hover:scale-110">
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-base text-[var(--color-text)] mb-1.5">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
