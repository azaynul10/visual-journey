import React from 'react';
import Icon from './Icon';

const PARTNERSTACK_LINK =
  'https://try.elevenlabs.io/zayn-dubbing-v2?sid1=dubbingv2&sid2=portfolio&sid3=hero&sharedid=dubbingv2_portfolio';

const ELEVENLABS_PRICING_LINK = 'https://elevenlabs.io/pricing';

const AWIN_LF_LINK = 'https://tidd.ly/4sCNu9U';

// ── Campaign Configuration ──
// Change ACTIVE_FOCUS to instantly swap the highlighted use-case 
const FOCUS_CAMPAIGNS = {
  'voice-cloning': {
    label: 'Current Focus: Voice Cloning',
    desc: 'Exploring custom AI voices for consistent branding across multiple languages and formats.'
  },
  'dubbing': {
    label: 'Current Focus: Video Dubbing',
    desc: 'Testing responsible multilingual video localization with Dubbing v2.'
  }
};

const ACTIVE_FOCUS = 'voice-cloning';
const currentCampaign = FOCUS_CAMPAIGNS[ACTIVE_FOCUS];

const useCases = [
  {
    icon: 'youtube',
    title: 'YouTube Tutorials',
    desc: 'Localize educational videos for global learners.',
  },
  {
    icon: 'rocket',
    title: 'Product Demos',
    desc: 'Explain your app, startup, or AI project in multiple languages.',
  },
  {
    icon: 'book-open',
    title: 'Course Content',
    desc: 'Make lessons more accessible without recording every version manually.',
  },
  {
    icon: 'megaphone',
    title: 'Marketing Campaigns',
    desc: 'Adapt launch videos for different regions faster.',
  },
  {
    icon: 'terminal',
    title: 'Developer Walkthroughs',
    desc: 'Share technical demos with international communities.',
  },
  {
    icon: 'users',
    title: 'Community Updates',
    desc: 'Reach multilingual audiences with the same core message.',
  },
];

const languageChips = [
  'English',
  'Bengali',
  'Hindi',
  'Spanish',
  'Arabic',
  'Japanese',
  'French',
  'German',
];

export default function ElevenLabsDubbingSection() {
  const scrollToUseCases = (e) => {
    e.preventDefault();
    document
      .getElementById('voice-use-cases')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="mt-24 mb-16 relative z-10 max-w-5xl mx-auto"
      aria-labelledby="voice-heading"
    >
      {/* ── Primary Campaign Card ── */}
      <div className="glass-card p-8 md:p-12 relative overflow-hidden border border-cyan-500/20 shadow-[0_0_50px_rgba(0,229,255,0.1)] group">
        {/* Ambient glow backgrounds */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/8 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"
          aria-hidden="true"
        />

        {/* Eyebrow - Fixed contrast and tracking */}
        <div className="flex items-center gap-3 mb-8 relative z-10">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
          <span className="text-sm font-bold uppercase tracking-wider text-cyan-300">
            Featured Creator Tool
          </span>
          <div className="h-px bg-gradient-to-r from-cyan-500/30 to-transparent flex-1" aria-hidden="true" />
        </div>

        {/* Headline */}
        <h2
          id="voice-heading"
          className="text-3xl md:text-5xl font-bold mb-6 tracking-tight relative z-10 leading-tight text-white"
        >
          AI Voice &amp; Localization
        </h2>

        {/* Subheadline & Configurable Focus Callout */}
        <div className="space-y-6 mb-10 relative z-10 max-w-3xl">
          <p className="text-lg leading-relaxed text-gray-200">
            Your audience may not speak your language, but they can still understand your message. Generate expressive speech in 29 languages, clone your own voice securely, and dub entire videos while preserving emotion and pacing.
          </p>
          
          {/* Swappable Current Focus Callout */}
          <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-xl p-5 flex items-start gap-4 shadow-inner">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0 border border-cyan-500/30">
              <Icon name="mic" className="text-cyan-300 text-lg" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-base font-bold text-cyan-100 mb-1">{currentCampaign.label}</h3>
              <p className="text-sm text-cyan-200/80 leading-relaxed">{currentCampaign.desc}</p>
            </div>
          </div>
        </div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 relative z-10">
          <a
            href={PARTNERSTACK_LINK}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-500 hover:to-blue-500 transition-all shadow-[0_0_30px_rgba(0,229,255,0.4)] border border-cyan-400/30 text-base tracking-wide min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050510] motion-reduce:transition-none"
            aria-label="Try ElevenLabs for voice and dubbing"
          >
            <span>Try ElevenLabs</span>
            <Icon
              name="arrow-right"
              className="ml-3 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </a>
          <a
            href={ELEVENLABS_PRICING_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md min-h-[56px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050510] motion-reduce:transition-none"
          >
            View Pricing
          </a>
        </div>

        {/* Disclosures */}
        <p className="text-sm text-gray-400 italic relative z-10 mb-4">
          Affiliate link. I may earn a commission if you sign up through this link.
        </p>

        {/* Responsible-use note */}
        <div className="mt-6 flex items-start gap-3 relative z-10 border-t border-white/10 pt-6">
          <Icon
            name="shield"
            className="text-cyan-400 text-lg mt-0.5 shrink-0"
            aria-hidden="true"
          />
          <p className="text-sm text-gray-300 leading-relaxed">
            <strong className="text-white font-semibold">Responsible use:</strong> Only clone voices or dub content you own or have explicit permission to use. This campaign focuses on responsible content localization and accessibility, not impersonation.
          </p>
        </div>
      </div>

      {/* ── Use-Case Bento Grid ── */}
      <div id="voice-use-cases" className="mt-10 scroll-mt-24">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-1.5 h-6 bg-cyan-400 rounded-full" aria-hidden="true" />
          Who is this for?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="glass-card p-5 group/uc hover:border-cyan-500/30 transition-all duration-300 motion-reduce:transition-none"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shrink-0 group-hover/uc:bg-cyan-500/20 transition-colors motion-reduce:transition-none">
                  <Icon
                    name={uc.icon}
                    className="text-cyan-300 text-lg"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-base font-bold text-gray-100">{uc.title}</h4>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                {uc.desc}
              </p>
            </div>
          ))}
        </div>
        
        {/* Language chips - ensuring touch targets >= 44px */}
        <div className="flex flex-wrap items-center gap-3 mt-8">
          <span className="text-sm font-semibold text-gray-300 mr-2">Supported Languages:</span>
          {languageChips.map((lang) => (
            <span
              key={lang}
              className="inline-flex items-center px-4 py-2 min-h-[44px] rounded-full text-sm font-medium bg-white/[0.04] border border-white/10 text-gray-300"
            >
              {lang}
            </span>
          ))}
          <span className="inline-flex items-center px-4 py-2 min-h-[44px] rounded-full text-sm font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            +21 more
          </span>
        </div>
      </div>

      {/* ── Secondary Resource Card: Linux Foundation ── */}
      <div className="mt-10">
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 max-w-lg">
          <div className="flex items-center gap-3 mb-4">
            <Icon
              name="certificate"
              className="text-lg text-gray-400"
              aria-hidden="true"
            />
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300">
              Other Partner Resource
            </h4>
          </div>
          <p className="text-base font-semibold text-gray-200 mb-2">
            Cloud-Native Certification Discount
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            Use code <strong className="text-gray-200">ZAYNUL</strong> for 30% off
            eligible Linux Foundation catalog items, if still valid at checkout.
          </p>
          <a
            href={AWIN_LF_LINK}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050510] rounded px-2 -ml-2 motion-reduce:transition-none"
            aria-label="Browse Linux Foundation certifications with discount code ZAYNUL"
          >
            Browse Certifications <Icon name="arrow-right" className="text-xs" aria-hidden="true" />
          </a>
          <p className="text-sm text-gray-500 italic mt-3">
            Affiliate link. I may earn a commission if you sign up.
          </p>
        </div>
      </div>
    </section>
  );
}
