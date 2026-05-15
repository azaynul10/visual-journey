import React from 'react';
import BrandBadge from './BrandBadge';

export default function CardLeadership() {
  const roles = [
    { label: 'CNCF',    subtitle: 'Ambassador',       accent: '#446CE3' },
    { label: 'PyTorch',  subtitle: 'Ambassador',       accent: '#EE4C2C' },
    { label: 'AWS',      subtitle: 'Community Builder', accent: '#FF9900' },
  ];

  return (
    <div 
      className="glass-card glow-blue p-6 lg:p-8 cursor-pointer"
      onClick={() => window.open('https://www.linkedin.com/in/zaynul-abedin-miah/', '_blank')}
      role="link"
      aria-label="View community involvement on LinkedIn"
    >
      <h2 className="text-xl md:text-2xl font-bold mb-2">Community & Open Source Involvement</h2>
      <p className="text-xs text-gray-400 mb-8">Helping organize and support student developer communities across Bangladesh</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {roles.map((role, i) => (
          <BrandBadge
            key={i}
            label={role.label}
            subtitle={role.subtitle}
            accentColor={role.accent}
          />
        ))}
      </div>
    </div>
  );
}
