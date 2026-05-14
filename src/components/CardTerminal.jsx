import React from 'react';

export default function CardTerminal() {
  return (
    <div 
      className="glass-card flex-1 p-6 relative overflow-hidden group cursor-pointer"
      onClick={() => window.open('https://github.com/azaynul10', '_blank')}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-600"></div>
      
      <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub Activity Snapshot
        </h2>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-green-500/50 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-green-500/80 transition-colors delay-75"></div>
          <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-green-400 transition-colors delay-150"></div>
        </div>
      </div>

      <div className="font-mono text-xs sm:text-sm text-green-400 space-y-2 opacity-90 relative">
        <p className="text-[10px] text-gray-500 absolute -top-5 right-0">Example GitHub activity view</p>
        <p className="flex items-center gap-2 mt-4">
          <span className="text-gray-500">zaynul@cosmic-bento:~$</span>
          <span className="typing-animation">curl https://api.github.com/users/azaynul10/events/public | jq -r '.[].type'</span>
        </p>
        <div className="pl-4 text-gray-300 space-y-1 animate-pulse">
          <p>PushEvent</p>
          <p>PullRequestEvent</p>
          <p>IssuesEvent</p>
        </div>
      </div>

      {/* GitHub Contribution Graph Mockup */}
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(12px,1fr))] gap-1 opacity-60">
        {Array.from({ length: 110 }).map((_, i) => (
          <div 
            key={i} 
            className="aspect-square rounded-[2px]"
            style={{
              backgroundColor: Math.random() > 0.7 
                ? `rgba(74, 222, 128, ${Math.random() * 0.8 + 0.2})` 
                : 'rgba(255,255,255,0.05)'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
