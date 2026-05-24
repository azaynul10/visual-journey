import React from 'react';

/**
 * BrandBadge — Premium 2026-style glassmorphism brand-wordmark chip.
 *
 * Renders a polished pill/card with:
 *   • Dark translucent backdrop with subtle border
 *   • Accent-colored top glow strip
 *   • Bold wordmark label in brand color
 *   • Optional muted subtitle
 *   • Smooth hover lift (respects prefers-reduced-motion)
 *
 * No external CDN, no logo images, no icon library.
 *
 * @param {string} label          - Brand wordmark text (e.g. "CNCF", "AWS")
 * @param {string} subtitle       - Optional subtitle (e.g. "Ambassador")
 * @param {string} accentColor    - CSS color string for brand accent
 * @param {string} accentGradient - Optional CSS gradient for multi-color brands (e.g. Google)
 * @param {boolean} compact       - If true, renders inline pill (no subtitle)
 * @param {string} ariaLabel      - Accessible label override
 * @param {string} className      - Additional classes
 */
export default function BrandBadge({
  label,
  subtitle,
  accentColor = '#9ca3af',
  accentGradient,
  compact = false,
  ariaLabel,
  className = '',
}) {
  if (compact) {
    return (
      <span
        className={`
          inline-flex items-center gap-1.5 px-3 py-1.5
          bg-white/[0.04] backdrop-blur-sm
          border border-white/[0.08]
          rounded-lg
          text-[11px] font-bold tracking-tight
          transition-all duration-300
          hover:-translate-y-[1px] hover:border-white/[0.15]
          motion-reduce:hover:translate-y-0
          select-none
          ${className}
        `}
        style={{ color: accentColor }}
        role="img"
        aria-label={ariaLabel || `${label} affiliation`}
      >
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: accentColor }}
          aria-hidden="true"
        />
        {label}
      </span>
    );
  }

  return (
    <div
      className={`
        relative flex flex-col items-center text-center
        bg-white/[0.03] backdrop-blur-md
        border border-white/[0.08]
        rounded-2xl
        px-5 py-5
        transition-all duration-300
        hover:-translate-y-[2px] hover:border-white/[0.15]
        motion-reduce:hover:translate-y-0
        group/badge overflow-hidden
        ${className}
      `}
      role="img"
      aria-label={ariaLabel || `${label}${subtitle ? ' ' + subtitle : ''} affiliation`}
    >
      {/* Accent glow strip at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover/badge:opacity-100 transition-opacity duration-300"
        style={{ background: accentGradient
          ? `linear-gradient(90deg, transparent 0%, #4285F4 15%, #EA4335 35%, #FBBC05 60%, #34A853 85%, transparent 100%)`
          : `linear-gradient(90deg, transparent, ${accentColor}, transparent)`
        }}
        aria-hidden="true"
      />

      {/* Soft ambient glow behind label */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full blur-2xl opacity-[0.08] group-hover/badge:opacity-[0.15] transition-opacity duration-500"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />

      {/* Brand wordmark */}
      <span
        className="relative z-10 text-sm font-extrabold tracking-tight leading-none"
        style={accentGradient
          ? {
              background: accentGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }
          : { color: accentColor }
        }
      >
        {label}
      </span>

      {/* Subtitle */}
      {subtitle && (
        <span className="relative z-10 text-[10px] text-gray-400 mt-1.5 font-medium leading-tight">
          {subtitle}
        </span>
      )}
    </div>
  );
}
