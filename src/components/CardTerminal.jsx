import React from 'react';
import Icon from './Icon';

export default function CardTerminal() {
  return (
    <div 
      className="glass-card flex-1 p-6 relative overflow-hidden group cursor-pointer"
      onClick={() => window.open('https://github.com/azaynul10', '_blank')}
      role="link"
      aria-label="View GitHub profile"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-600"></div>
      
      <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Icon name="github" className="text-lg" />
          GitHub Activity Snapshot
        </h2>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-green-500/50 transition-colors"></div>
          <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-green-500/80 transition-colors delay-75"></div>
          <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-green-400 transition-colors delay-150"></div>
        </div>
      </div>

      <div className="font-mono text-xs sm:text-sm text-green-400 space-y-2 opacity-90 relative">
        <p className="text-[10px] text-gray-400 absolute -top-5 right-0">Example GitHub activity view</p>
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
      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(12px,1fr))] gap-1 opacity-60" aria-hidden="true">
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
