import React from 'react';
import Icon from './Icon';

export default function CredentialsSection() {
  const credentials = [
    { label: "CNCF Ambassador", subtitle: "2025–2027", link: "https://www.credly.com/badges/772e6b5c-486a-4891-89b6-bf8bf4b55c39" },
    { label: "PyTorch Ambassador", subtitle: "2025", link: "https://www.credly.com/badges/99087d47-e21a-4c5e-b934-01d2c98e991e" },
    { label: "Databricks Academy", subtitle: "Data Preparation for ML", link: "https://credentials.databricks.com/d77a930d-b40c-4da2-a9b1-df0340faea6f#acc.3EQOK8jW" },
    { label: "AWS Cloud Club Captain", subtitle: "Diamond Level", link: "https://www.credly.com/badges/ec2c7d7c-394a-4122-881c-4a160d538b2e" },
    { label: "KCD Organizer", subtitle: "2024", link: "https://www.credly.com/badges/f2ad23d2-401e-481b-99fe-63dbfbee754b" },
    { label: "Microsoft Student Ambassadors", subtitle: "Former Projects Gold Lead", link: "https://www.credly.com/badges/e6c1538b-0b2c-4214-ae68-ea6bc886ee68" },
    { label: "Microsoft Certified", subtitle: "Azure AI Fundamentals (AI-900)", link: "https://learn.microsoft.com/api/credentials/share/en-us/ZaynulAbedinMiah-6537/5465F864D4930A8?sharingId=68C4BF49E5BB256D" },
  ];

  return (
    <section className="mb-24 relative z-10" aria-labelledby="credentials-heading">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-blue-400/90">
          Selected Credentials
        </span>
        <div className="h-px bg-gradient-to-r from-blue-500/30 to-transparent flex-1" />
      </div>

      <h2 id="credentials-heading" className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
        Selected Credentials
      </h2>
      <p className="text-gray-400 text-base md:text-lg mb-10 max-w-3xl leading-relaxed">
        Verified learning and program milestones supporting my work in AI, cloud-native, open-source, and student developer communities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {credentials.map((cred, i) => (
          <a 
            key={i} 
            href={cred.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all group block"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#446CE3] transition-colors pr-4">{cred.label}</h3>
                <p className="text-gray-400 text-sm">{cred.subtitle}</p>
              </div>
              <Icon name="external-link" className="text-gray-500 group-hover:text-[#446CE3] transition-colors shrink-0 mt-1" />
            </div>
          </a>
        ))}
        
        {/* Credly Profile Card */}
        <a 
          href="https://www.credly.com/users/zaynul-abedin-miah.65b5cd8c/badges"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-6 rounded-2xl border border-[#446CE3]/30 hover:border-[#446CE3] transition-all bg-[#446CE3]/5 group flex flex-col justify-center min-h-[96px]"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-bold text-lg group-hover:text-[#446CE3] transition-colors">View full verified Credly profile</h3>
            </div>
            <Icon name="external-link" className="text-gray-500 group-hover:text-[#446CE3] transition-colors shrink-0 ml-2" />
          </div>
        </a>
      </div>
    </section>
  );
}
