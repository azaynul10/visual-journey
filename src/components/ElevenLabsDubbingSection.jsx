import React from 'react';
import Icon from './Icon';

const PARTNERSTACK_LINK =
  'https://try.elevenlabs.io/zayn-dubbing-v2?sid1=dubbingv2&sid2=portfolio&sid3=hero&sharedid=dubbingv2_portfolio';

const AWIN_LF_LINK = 'https://tidd.ly/4sCNu9U';

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
      .getElementById('dubbing-use-cases')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="mt-24 mb-16 relative z-10 max-w-5xl mx-auto"
      aria-labelledby="dubbing-heading"
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

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 relative z-10">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cyan-400/90">
            Featured Creator Tool
          </span>
          <div className="h-px bg-gradient-to-r from-cyan-500/30 to-transparent flex-1" />
        </div>

        {/* Headline */}
        <h2
          id="dubbing-heading"
          className="text-3xl md:text-5xl font-bold mb-6 tracking-tight relative z-10 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400"
        >
          Dub Your Own Videos in 90+ Languages
        </h2>

        {/* Subheadline */}
        <div className="space-y-4 mb-10 relative z-10 text-gray-300 max-w-3xl">
          <p className="text-lg leading-relaxed">
            Your audience may not speak your language, but they can still
            understand your message.{' '}
            <strong className="text-white">ElevenLabs Dubbing v2</strong> helps
            you repurpose content you already made and make it accessible to
            more people — without re-recording from scratch.
          </p>
          <p className="text-base leading-relaxed text-gray-400">
            I'm testing it on my own creator and developer content to explore
            how AI dubbing can support responsible multilingual communication.
          </p>
        </div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 relative z-10">
          <a
            href={PARTNERSTACK_LINK}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-400 hover:to-blue-400 transition-all shadow-[0_0_30px_rgba(0,229,255,0.4)] border border-cyan-400/30 text-base tracking-wide group/cta hover:scale-[1.02] duration-300 w-full sm:w-auto min-h-[56px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#050510]"
            aria-label="Check Dubbing v2 access on ElevenLabs"
          >
            <span>Check Dubbing v2 Access</span>
            <Icon
              name="arrow-right"
              className="ml-3 group-hover/cta:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#dubbing-use-cases"
            onClick={scrollToUseCases}
            className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md w-full sm:w-auto min-h-[56px] focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-[#050510]"
          >
            See Use Cases
          </a>
        </div>

        {/* CTA support text */}
        <p className="text-sm text-gray-400 mb-2 relative z-10">
          For a limited launch period, free dubbing minutes may be available
          depending on your plan.
        </p>

        {/* Disclosures */}
        <p className="text-xs text-gray-500 italic relative z-10">
          Affiliate link. I may earn a commission if you sign up through this
          link.
        </p>

        {/* Responsible-use note */}
        <div className="mt-6 flex items-start gap-2 relative z-10">
          <Icon
            name="shield"
            className="text-cyan-400/60 text-sm mt-0.5 shrink-0"
          />
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-400">Responsible use:</strong> Only dub
            content you own or have permission to use. This campaign focuses on
            responsible content localization, not impersonation.
          </p>
        </div>
      </div>

      {/* ── Use-Case Bento Grid ── */}
      <div id="dubbing-use-cases" className="mt-10 scroll-mt-24">
        <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-1.5 h-6 bg-cyan-400 rounded-full" />
          Who is this for?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="glass-card p-5 group/uc hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/15 shrink-0 group-hover/uc:bg-cyan-500/15 transition-colors">
                  <Icon
                    name={uc.icon}
                    className="text-cyan-400 text-sm"
                  />
                </div>
                <h4 className="text-sm font-bold text-white">{uc.title}</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {uc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Demo Placeholder Card ── */}
      <div className="mt-8">
        <div className="glass-card p-6 md:p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Original side */}
            <div className="bg-white/[0.02] rounded-xl p-5 border border-white/5 flex flex-col items-center justify-center text-center min-h-[160px]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-3">
                Original
              </span>
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                <Icon name="play" className="text-white/40 text-lg ml-0.5" />
              </div>
              {/* Waveform motif */}
              <div className="flex items-end gap-[3px] h-6" aria-hidden="true">
                {[3, 5, 8, 12, 16, 12, 8, 14, 10, 6, 4, 7, 11, 15, 11, 7, 3].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="w-[2px] bg-gradient-to-t from-cyan-500/20 to-cyan-400/40 rounded-full"
                      style={{ height: `${h}px` }}
                    />
                  )
                )}
              </div>
            </div>

            {/* Dubbed side */}
            <div className="bg-cyan-500/[0.03] rounded-xl p-5 border border-cyan-500/10 flex flex-col items-center justify-center text-center min-h-[160px]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400/70 mb-3">
                Dubbed
              </span>
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/15 flex items-center justify-center mb-3">
                <Icon
                  name="languages"
                  className="text-cyan-400/60 text-lg"
                />
              </div>
              {/* Waveform motif — dubbed */}
              <div className="flex items-end gap-[3px] h-6" aria-hidden="true">
                {[4, 7, 10, 14, 12, 15, 10, 8, 13, 9, 5, 8, 12, 14, 10, 6, 4].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="w-[2px] bg-gradient-to-t from-cyan-400/30 to-cyan-300/50 rounded-full"
                      style={{ height: `${h}px` }}
                    />
                  )
                )}
              </div>
            </div>
          </div>

          {/* Center text */}
          <p className="text-center text-sm text-gray-400 mt-6 font-medium">
            One video. Multiple languages. Same message.
          </p>
          <p className="text-center text-xs text-gray-500 mt-2">
            Demo coming soon: original vs dubbed project walkthrough.
          </p>

          {/* Language chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {languageChips.map((lang) => (
              <span
                key={lang}
                className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-white/[0.04] border border-white/[0.08] text-gray-400"
              >
                {lang}
              </span>
            ))}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-cyan-500/10 border border-cyan-500/15 text-cyan-400">
              +90 languages
            </span>
          </div>
        </div>
      </div>

      {/* ── Secondary Resource Card: Linux Foundation ── */}
      <div className="mt-6">
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 max-w-lg">
          <div className="flex items-center gap-2 mb-2">
            <Icon
              name="certificate"
              className="text-sm text-gray-500"
            />
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-500">
              Other Partner Resource
            </h4>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-1">
            <strong className="text-gray-300">
              Cloud-Native Certification Discount
            </strong>
          </p>
          <p className="text-xs text-gray-500 leading-relaxed mb-3">
            Use code{' '}
            <strong className="text-gray-400">ZAYNUL</strong> for 30% off
            eligible Linux Foundation catalog items, if still valid at checkout.
          </p>
          <a
            href={AWIN_LF_LINK}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#050510] rounded"
            aria-label="Browse Linux Foundation certifications with discount code ZAYNUL"
          >
            Browse Certifications{' '}
            <Icon name="arrow-right" className="text-[10px]" />
          </a>
          <p className="text-[10px] text-gray-600 italic mt-1">
            Affiliate link. I may earn a commission if you sign up.
          </p>
        </div>
      </div>
    </section>
  );
}
