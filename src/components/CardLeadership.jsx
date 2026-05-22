import React from 'react';
import BrandBadge from './BrandBadge';

export default function CardLeadership() {
  const roles = [
    { label: 'CNCF',    subtitle: 'Ambassador',       accent: '#446CE3', link: 'https://www.cncf.io/people/ambassadors/?p=zaynul-abedin-miah&_sf_s=zaynul+abedin+miah', ariaLabel: 'View Zaynul Abedin Miah on CNCF Ambassadors directory' },
    { label: 'PyTorch',  subtitle: 'Ambassador',       accent: '#EE4C2C', link: 'https://pytorch.org/programs/ambassadors/', ariaLabel: 'View PyTorch Ambassador program page' },
    { label: 'ElevenLabs', subtitle: 'Ambassador',     accent: '#E2E8F0', link: 'https://try.elevenlabs.io/cfmtptx6mpbc', ariaLabel: 'View ElevenLabs Ambassador program' },
    { label: 'AWS',      subtitle: 'Community Builder', accent: '#FF9900', link: 'https://builder.aws.com/community/community-builders', ariaLabel: 'View AWS Community Builders program page' },
  ];

  return (
    <div className="glass-card glow-blue p-6 lg:p-8">
      <h2 className="text-xl md:text-2xl font-bold mb-2">Community & Open Source Involvement</h2>
      <p className="text-xs text-gray-400 mb-8">Helping organize and support student developer communities across Bangladesh</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {roles.map((role, i) => {
          const isClickable = !!role.link;
          const Wrapper = isClickable ? 'a' : 'div';
          return (
            <Wrapper
              key={i}
              href={isClickable ? role.link : undefined}
              target={isClickable ? "_blank" : undefined}
              rel={isClickable ? "noopener noreferrer" : undefined}
              className={`block rounded-2xl relative ${
                isClickable ? 'hover:ring-1 hover:ring-white/10 transition-all group cursor-pointer' : ''
              }`}
              aria-label={role.ariaLabel}
            >
              <BrandBadge
                label={role.label}
                subtitle={role.subtitle}
                accentColor={role.accent}
                ariaLabel={role.ariaLabel}
                className="w-full h-full"
              />
              {isClickable && (
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              )}
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}
