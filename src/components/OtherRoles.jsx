import React from 'react';
import BrandBadge from './BrandBadge';

export default function OtherRoles() {
  const organizations = [
    { label: 'CNCF',            subtitle: 'Ambassador',             accent: '#446CE3', link: 'https://www.cncf.io/people/ambassadors/?p=zaynul-abedin-miah&_sf_s=zaynul+abedin+miah', ariaLabel: 'View Zaynul Abedin Miah on CNCF Ambassadors directory' },
    { label: 'PyTorch',         subtitle: 'Ambassador',             accent: '#EE4C2C', link: 'https://pytorch.org/programs/ambassadors/', ariaLabel: 'View PyTorch Ambassador program page' },
    { label: 'AWS',             subtitle: 'Community Builder',      accent: '#FF9900', link: 'https://builder.aws.com/community/community-builders', ariaLabel: 'View AWS Community Builders program page' },
    { label: 'AWS SBG',         subtitle: 'Outgoing Group Leader',  accent: '#FF9900', link: 'https://www.credly.com/badges/ec2c7d7c-394a-4122-881c-4a160d538b2e', ariaLabel: 'View AWS Cloud Club Captain credential' },
    { label: 'Google AI',       subtitle: 'Community Co-Organizer', accent: '#34A853', link: 'https://www.youtube.com/watch?v=7wNhy2i9X10&list=PLHGDyeOCXVQfDHoouVp7YF_LEbdjh8JGz&pp=sAgC', ariaLabel: 'View Google AI Community activity' },
    { label: 'Azure Tech Group BD', subtitle: 'Co-Organizer',       accent: '#00a4ef', link: 'https://www.facebook.com/groups/1770787936632620', ariaLabel: 'View Azure Tech Group Bangladesh profile' },
    { label: 'Microsoft Student Ambassadors', subtitle: 'Former Gold Milestone', accent: '#737373', link: 'https://techcommunity.microsoft.com/blog/studentdeveloperblog/december%E2%80%93february-ambassadors-ai-projects-demo-day-showcasing-the-power-of-ai/4413462', ariaLabel: 'View Microsoft Student Ambassadors feature' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {organizations.map((org, i) => {
        const isClickable = !!org.link;
        const Wrapper = isClickable ? 'a' : 'div';
        return (
          <Wrapper
            key={i}
            href={isClickable ? org.link : undefined}
            target={isClickable ? "_blank" : undefined}
            rel={isClickable ? "noopener noreferrer" : undefined}
            className={`block min-h-[44px] rounded-2xl relative ${
              isClickable ? 'hover:ring-1 hover:ring-white/10 transition-all group cursor-pointer' : ''
            }`}
            aria-label={org.ariaLabel}
          >
            <BrandBadge
              label={org.label}
              subtitle={org.subtitle}
              accentColor={org.accent}
              ariaLabel={org.ariaLabel}
              className="w-full h-full"
            />
            {isClickable && (
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            )}
          </Wrapper>
        );
      })}
    </div>
  );
}
