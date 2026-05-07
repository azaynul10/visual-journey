import React from 'react';

export default function CardTechStack() {
  return (
    <div className="glass-card flex-1 p-6 flex flex-col items-center justify-center relative overflow-hidden group">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent z-0"></div>
      
      <h2 className="text-lg font-bold mb-6 relative z-10 w-full text-left">Ecosystem Focus</h2>
      
      <div className="relative z-10 flex flex-wrap justify-center gap-4 w-full h-full items-center">
        {/* Kubernetes */}
        <div className="flex flex-col items-center group/icon">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-2 transition-transform group-hover/icon:-translate-y-1 group-hover/icon:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <i className="fas fa-dharmachakra text-2xl" />
          </div>
          <span className="text-[10px] text-gray-400 font-medium tracking-wider">K8S</span>
        </div>

        {/* Python */}
        <div className="flex flex-col items-center group/icon">
          <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-2 transition-transform group-hover/icon:-translate-y-1 group-hover/icon:shadow-[0_0_15px_rgba(250,204,21,0.5)]">
            <i className="fab fa-python text-2xl" />
          </div>
          <span className="text-[10px] text-gray-400 font-medium tracking-wider">PYTHON</span>
        </div>

        {/* AWS */}
        <div className="flex flex-col items-center group/icon">
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-2 transition-transform group-hover/icon:-translate-y-1 group-hover/icon:shadow-[0_0_15px_rgba(249,115,22,0.5)]">
            <i className="fab fa-aws text-2xl" />
          </div>
          <span className="text-[10px] text-gray-400 font-medium tracking-wider">AWS</span>
        </div>

        {/* Go */}
        <div className="flex flex-col items-center group/icon">
          <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-2 transition-transform group-hover/icon:-translate-y-1 group-hover/icon:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            <i className="fab fa-golang text-2xl" />
          </div>
          <span className="text-[10px] text-gray-400 font-medium tracking-wider">GO</span>
        </div>
      </div>
    </div>
  );
}
