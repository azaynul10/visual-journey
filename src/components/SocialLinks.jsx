import React from 'react';
import Icon from './Icon';

const socialData = [
  {
    name: 'GitHub',
    url: 'https://github.com/azaynul10',
    ariaLabel: "View Zaynul's GitHub Profile",
    iconName: 'github',
    hoverClass: 'hover:text-white hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/zaynul-abedin-miah/',
    ariaLabel: 'Connect with Zaynul on LinkedIn',
    iconName: 'linkedin',
    hoverClass: 'hover:text-[#0A66C2] hover:shadow-[0_0_12px_rgba(10,102,194,0.4)]',
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@zaynulabedinmiah',
    ariaLabel: "Subscribe to Zaynul's YouTube Channel",
    iconName: 'youtube',
    hoverClass: 'hover:text-[#FF0000] hover:shadow-[0_0_12px_rgba(255,0,0,0.4)]',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/azaynul123',
    ariaLabel: 'Follow Zaynul on X',
    iconName: 'x',
    hoverClass: 'hover:text-white hover:shadow-[0_0_12px_rgba(255,255,255,0.3)]',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/azaynul123',
    ariaLabel: 'Connect with Zaynul on Facebook',
    iconName: 'facebook',
    hoverClass: 'hover:text-[#1877F2] hover:shadow-[0_0_12px_rgba(24,119,242,0.4)]',
  },
];

export default function SocialLinks({ mode = 'footer' }) {
  if (mode === 'sidebar') {
    return (
      <div 
        className="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-6 animate-fade-in-up"
        style={{ animationDuration: '1s' }}
      >
        <div className="flex flex-col gap-5">
          {socialData.map((social) => {
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.ariaLabel}
                className={`group relative flex items-center justify-center w-10 h-10 rounded-lg text-gray-400 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-white/10 ${social.hoverClass}`}
              >
                <Icon 
                  name={social.iconName} 
                  className="text-base transition-transform duration-300 group-hover:scale-110" 
                />
                
                {/* Tooltip */}
                <span className="absolute left-14 scale-0 transition-all duration-200 origin-left group-hover:scale-100 bg-[#050510]/90 text-white text-[10px] font-mono px-2.5 py-1 rounded-md border border-white/5 whitespace-nowrap shadow-xl pointer-events-none">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>
        
        {/* Vertical line extending to screen bottom */}
        <div className="w-px h-24 bg-gradient-to-b from-gray-500/30 to-transparent mt-2"></div>
      </div>
    );
  }

  // Default horizontal mode (e.g. for footer)
  return (
    <div className="flex items-center gap-3.5">
      {socialData.map((social) => {
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            className={`group flex items-center justify-center w-9 h-9 rounded-lg text-gray-400 bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300 hover:border-white/10 ${social.hoverClass}`}
          >
            <Icon 
              name={social.iconName} 
              className="text-base transition-transform duration-300 group-hover:scale-110" 
            />
          </a>
        );
      })}
    </div>
  );
}
