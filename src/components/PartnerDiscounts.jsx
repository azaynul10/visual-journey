import React from 'react';
import Icon from './Icon';

export default function PartnerDiscounts() {
  return (
    <section className="mt-24 mb-16 relative z-10 max-w-5xl mx-auto" aria-labelledby="partner-heading">
      <div className="glass-card p-8 md:p-12 relative overflow-hidden border border-[#8714fa]/30 shadow-[0_0_50px_rgba(135,20,250,0.15)] group">
        {/* Glow effect backgrounds */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" aria-hidden="true"></div>

        <div className="flex items-center gap-3 mb-8 relative z-10">
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-purple-400/90">
            Exclusive Partner Discounts
          </span>
          <div className="h-px bg-gradient-to-r from-purple-500/30 to-transparent flex-1" />
        </div>

        <h2 id="partner-heading" className="text-3xl md:text-5xl font-bold mb-8 tracking-tight relative z-10 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Shatter Imposter Syndrome: Transform from Overwhelmed Beginner to a Confident, Job-Ready Cloud Native Engineer.
        </h2>

        <div className="space-y-6 mb-10 relative z-10 text-gray-300">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-1 border border-green-500/20 min-w-[32px]">
              <Icon name="check" className="text-green-400 text-sm" />
            </div>
            <p className="text-lg leading-relaxed">
              <strong className="text-white font-bold">End the Cycle of Tutorial Hell:</strong> Stop watching endless videos and start proving your skills with industry-recognized certifications that force you to build real, production-ready infrastructure.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-1 border border-green-500/20 min-w-[32px]">
              <Icon name="check" className="text-green-400 text-sm" />
            </div>
            <p className="text-lg leading-relaxed">
              <strong className="text-white font-bold">Command Ultimate Interview Confidence:</strong> Walk into technical interviews knowing you possess the exact, verified hands-on expertise that top-tier tech companies are desperately searching for.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-1 border border-green-500/20 min-w-[32px]">
              <Icon name="check" className="text-green-400 text-sm" />
            </div>
            <p className="text-lg leading-relaxed">
              <strong className="text-white font-bold">Bulletproof Your Job Security:</strong> In an unpredictable tech market, becoming a certified Cloud Native expert makes you an indispensable asset, securing your career trajectory and elevating your earning potential.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/20 border border-purple-500/30 rounded-2xl p-8 mb-10 relative z-10 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="bolt" className="text-yellow-400 text-2xl animate-pulse" />
            <h3 className="text-2xl font-bold text-white tracking-tight">
              MEGA MAY Cyber Boost (May 12 – May 20)
            </h3>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            The opportunity to level up has never been more accessible. For a highly limited time, automatically score up to <strong className="text-white text-xl">65% off</strong> industry-recognized Linux Foundation certifications and bundles. No code is needed during these exact dates—just instant, massive savings to kickstart your career.
          </p>
        </div>

        <div className="text-center relative z-10 bg-black/20 p-8 rounded-2xl border border-white/5">
          <p className="text-white font-bold mb-8 text-xl max-w-3xl mx-auto leading-relaxed">
            This historic discount window closes strictly on May 20th—claim your career-defining certification today before this opportunity vanishes forever.
          </p>

          <a 
            href="https://tidd.ly/4wnPgPd" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#8714fa] to-[#446CE3] text-white px-12 py-5 rounded-xl font-bold hover:from-purple-500 hover:to-blue-500 transition-all shadow-[0_0_40px_rgba(135,20,250,0.6)] border border-purple-400/50 text-xl tracking-wide group hover:scale-[1.02] duration-300 mb-8 w-full sm:w-auto min-h-[56px]"
            aria-label="Claim up to 65% off Linux Foundation certifications"
          >
            <span>Claim Up To 65% Off Now</span>
            <Icon name="arrow-right" className="ml-3 group-hover:translate-x-2 transition-transform" />
          </a>

          <p className="text-sm text-gray-400 italic max-w-2xl mx-auto leading-relaxed">
            Missed the May 20th deadline? You can still secure a massive 30% off year-round by using my personal code <strong className="text-purple-400">ZAYNUL</strong> at checkout via the <a href="https://tidd.ly/4sCNu9U" target="_blank" rel="noreferrer" className="text-white font-semibold underline decoration-purple-500/50 hover:decoration-purple-400 hover:text-purple-300 transition-colors">main catalog link here</a>.
          </p>
        </div>

      </div>
    </section>
  );
}
