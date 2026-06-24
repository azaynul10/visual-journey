import React from 'react';

export default function CardLeadership() {
  const handleScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById('ambassadorships-heading');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      target.focus({ preventScroll: true });
    }
  };

  return (
    <div className="glass-card glow-blue p-6 lg:p-8 flex flex-col justify-center">
      <div className="flex gap-2 items-center text-blue-400 mb-4">
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
        <span className="text-[10px] font-mono uppercase tracking-widest">Community Impact</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
        6 Active Ambassadorships
      </h2>
      <p className="text-sm text-gray-300 mb-8 leading-relaxed">
        Representing Bangladesh across the global AI & cloud-native ecosystem, including roles with the Agentic AI Foundation, CNCF, PyTorch, Cognition, and AWS.
      </p>
      
      <div className="mt-auto">
        <a 
          href="#ambassadorships-heading"
          onClick={handleScroll}
          className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 rounded-xl font-semibold transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          View Community Roles
          <svg className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
