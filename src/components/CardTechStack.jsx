import React from 'react';
import Icon from './Icon';

export default function CardTechStack() {
  return (
    <div className="glass-card flex-1 p-6 flex flex-col items-center justify-center relative overflow-hidden group">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent z-0" aria-hidden="true"></div>
      
      <h2 className="text-lg font-bold mb-6 relative z-10 w-full text-left">Ecosystem Focus</h2>
      
      <div className="relative z-10 flex flex-wrap justify-center gap-4 w-full h-full items-center">
        {/* Kubernetes */}
        <div className="flex flex-col items-center group/icon">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-2 transition-transform group-hover/icon:-translate-y-1">
            <span className="text-xs font-bold" aria-hidden="true">K8s</span>
          </div>
          <span className="text-[10px] text-gray-400 font-medium tracking-wider">K8S</span>
        </div>

        {/* Python */}
        <div className="flex flex-col items-center group/icon">
          <div className="w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 mb-2 transition-transform group-hover/icon:-translate-y-1">
            <span className="text-2xl font-bold" aria-hidden="true">Py</span>
          </div>
          <span className="text-[10px] text-gray-400 font-medium tracking-wider">PYTHON</span>
        </div>

        {/* AWS */}
        <div className="flex flex-col items-center group/icon">
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-2 transition-transform group-hover/icon:-translate-y-1">
            <Icon name="aws" className="text-2xl" />
          </div>
          <span className="text-[10px] text-gray-400 font-medium tracking-wider">AWS</span>
        </div>

        {/* Go */}
        <div className="flex flex-col items-center group/icon">
          <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-2 transition-transform group-hover/icon:-translate-y-1">
            <span className="text-2xl font-bold" aria-hidden="true">Go</span>
          </div>
          <span className="text-[10px] text-gray-400 font-medium tracking-wider">GO</span>
        </div>
      </div>
    </div>
  );
}
