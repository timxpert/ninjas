import React from "react";

interface ShapeProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export function ShapePlus({ className = "text-violet", size = 16, ...props }: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H13V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H11V4Z" />
    </svg>
  );
}

export function ShapeDiamond({ className = "text-violet", size = 16, ...props }: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2L21.5 11.5C21.8 11.8 21.8 12.2 21.5 12.5L12 22L2.5 12.5C2.2 12.2 2.2 11.8 2.5 11.5L12 2Z" />
    </svg>
  );
}

export function ShapeHourglass({ className = "text-violet", size = 16, ...props }: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M5 3C5 2.44772 5.44772 2 6 2H18C18.5523 2 19 2.44772 19 3C19 3.55228 18.5523 4 18 4H17.5V7C17.5 9.07 16.03 10.8 14.05 11.36L12.98 11.66C12.33 11.85 12.33 12.15 12.98 12.34L14.05 12.64C16.03 13.2 17.5 14.93 17.5 17V20H18C18.5523 20 19 20.4477 19 21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21C5 20.4477 5.44772 20 6 20H6.5V17C6.5 14.93 7.97 13.2 9.95 12.64L11.02 12.34C11.67 12.15 11.67 11.85 11.02 11.66L9.95 11.36C7.97 10.8 6.5 9.07 6.5 7V4H6C5.44772 4 5 3.55228 5 3Z" />
    </svg>
  );
}

export function ShapeCircle({ className = "text-violet", size = 16, ...props }: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

export function ShapePlayTriangle({ className = "text-lime", size = 16, ...props }: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M7 5.24C7 4.45 7.87 3.97 8.54 4.39L19.34 11.15C19.98 11.55 19.98 12.45 19.34 12.85L8.54 19.61C7.87 20.03 7 19.55 7 18.76V5.24Z" />
    </svg>
  );
}

export function ShapeRoundedSquare({ className = "text-violet", size = 16, ...props }: ShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
    </svg>
  );
}

/**
 * Geometric shape avatar tile used as a fallback when a ninja's photo is absent or errors.
 */
export function NinjaShapeAvatar({ name, specialty }: { name: string; specialty: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#1D1838] via-[#14102A] to-[#2A2447] flex flex-col items-center justify-center p-6 text-center select-none">
      {/* Decorative floating ninja shapes in background */}
      <div className="absolute top-3 left-3 opacity-20 text-[#A77BFF]">
        <ShapeDiamond size={24} />
      </div>
      <div className="absolute bottom-3 right-3 opacity-25 text-[#C8FF3D]">
        <ShapeHourglass size={24} />
      </div>
      <div className="absolute top-3 right-3 opacity-20 text-[#A77BFF]">
        <ShapePlus size={20} />
      </div>
      <div className="absolute bottom-3 left-3 opacity-20 text-[#C8FF3D]">
        <ShapeRoundedSquare size={20} />
      </div>

      {/* Center Initials & Belt Mark */}
      <div className="w-16 h-16 rounded-full bg-[#2A2447] border border-[#A77BFF]/30 flex items-center justify-center shadow-lg mb-3">
        <span className="font-heading font-extrabold text-2xl tracking-tight text-[#F4F1FF]">
          {initials}
        </span>
      </div>
      <span className="text-xs uppercase tracking-widest text-[#A77BFF] font-semibold">
        Keyframe Ninja
      </span>
      <span className="text-[11px] text-[#A9A2C6] mt-0.5 line-clamp-1 max-w-[85%]">
        {specialty}
      </span>
    </div>
  );
}

/**
 * Motion Dojo Logo + Sub-brand mark
 */
export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Motion Dojo mark: Keyframe Ninja Diamond/Belt symbol */}
      <div className="w-8 h-8 rounded-[9px] bg-[#6D32E8] flex items-center justify-center shadow-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-[#C8FF3D] opacity-0 group-hover:opacity-20 transition-opacity" />
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#C8FF3D]"
        >
          {/* Keyframe diamond in center */}
          <path
            d="M12 3L20 12L12 21L4 12L12 3Z"
            fill="#C8FF3D"
          />
          {/* Ninja belt tie cross */}
          <path
            d="M8.5 12H15.5"
            stroke="#14102A"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className="font-heading font-extrabold text-[17px] leading-tight tracking-tight text-[var(--color-text)]">
          Motion Dojo
        </span>
        <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-link)] -mt-0.5">
          Keyframe Ninjas
        </span>
      </div>
    </div>
  );
}
