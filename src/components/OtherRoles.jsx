import React from 'react';
import BrandBadge from './BrandBadge';

export default function OtherRoles() {
  const organizations = [
    { label: 'CNCF',            subtitle: 'Student Ambassador',     accent: '#446CE3', link: 'https://www.cncf.io/',        ariaLabel: 'CNCF Student Ambassador affiliation' },
    { label: 'PyTorch',         subtitle: 'Ambassador',             accent: '#EE4C2C', link: 'https://pytorch.org/',        ariaLabel: 'PyTorch Ambassador affiliation' },
    { label: 'AWS',             subtitle: 'Community Builder',      accent: '#FF9900', link: 'https://aws.amazon.com/developer/community/community-builders/', ariaLabel: 'AWS Community Builder affiliation' },
    { label: 'AWS SBG',         subtitle: 'Student Community Lead', accent: '#FF9900', link: 'https://community.aws/',      ariaLabel: 'AWS Student Builder Group Lead affiliation' },
    { label: 'Google AI',       subtitle: 'Community Co-Organizer', accent: '#34A853', link: 'https://developers.google.com/community', ariaLabel: 'Google AI Community Co-Organizer affiliation' },
    { label: 'Azure Tech Group BD', subtitle: 'Co-Organizer',      accent: '#00a4ef', link: 'https://www.facebook.com/groups/1770787936632620', ariaLabel: 'Azure Tech Group Bangladesh Co-Organizer' },
    { label: 'Microsoft Student Ambassadors', subtitle: 'Former Gold', accent: '#737373', link: 'https://mvp.microsoft.com/studentambassadors', ariaLabel: 'Former Microsoft Student Ambassadors Gold Milestone' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {organizations.map((org, i) => (
        <a
          key={i}
          href={org.link}
          target="_blank"
          rel="noreferrer"
          className="block min-h-[44px] rounded-2xl hover:ring-1 hover:ring-white/10 transition-all"
          aria-label={org.ariaLabel}
        >
          <BrandBadge
            label={org.label}
            subtitle={org.subtitle}
            accentColor={org.accent}
            ariaLabel={org.ariaLabel}
            className="w-full h-full"
          />
        </a>
      ))}
    </div>
  );
}
