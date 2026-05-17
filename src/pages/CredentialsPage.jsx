import React from 'react';
import SEOHead from '../components/SEOHead';
import Icon from '../components/Icon';

export default function CredentialsPage() {
  const credentialGroups = [
    {
      title: "Data & AI",
      items: [
        { label: "PyTorch Ambassador", subtitle: "2025", link: "https://www.credly.com/badges/99087d47-e21a-4c5e-b934-01d2c98e991e" },
        { 
          label: "Databricks Academy Knowledge Badge", 
          subtitle: "Data Preparation for Machine Learning",
          link: "https://credentials.databricks.com/d77a930d-b40c-4da2-a9b1-df0340faea6f#acc.3EQOK8jW"
        }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      items: [
        { label: "AWS Cloud Club Captain", subtitle: "Diamond Level", link: "https://www.credly.com/badges/ec2c7d7c-394a-4122-881c-4a160d538b2e" }
      ]
    },
    {
      title: "Cloud Native & Open Source",
      items: [
        { label: "CNCF Ambassador", subtitle: "2025–2027", link: "https://www.credly.com/badges/772e6b5c-486a-4891-89b6-bf8bf4b55c39" },
        { label: "KCD Organizer", subtitle: "2024", link: "https://www.credly.com/badges/f2ad23d2-401e-481b-99fe-63dbfbee754b" }
      ]
    },
    {
      title: "Microsoft & Azure Community",
      items: [
        { label: "Microsoft Student Ambassadors", subtitle: "Former Projects Gold Lead", link: "https://www.credly.com/badges/e6c1538b-0b2c-4214-ae68-ea6bc886ee68" }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="Credentials & Certifications | Zaynul Abedin Miah"
        description="Verified learning and program milestones supporting my work in AI, cloud-native, open-source, and student developer communities."
      />
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Credentials &amp; Certifications
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Verified learning and program milestones supporting my work in AI, cloud-native, open-source, and student developer communities.
          </p>
          <div className="mt-8">
             <a 
              href="https://www.credly.com/users/zaynul-abedin-miah.65b5cd8c/badges"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#446CE3]/10 text-[#446CE3] border border-[#446CE3]/30 px-6 py-3 rounded-xl font-bold hover:bg-[#446CE3]/20 transition-all"
            >
              <span>View full verified Credly profile</span>
              <Icon name="external-link" className="text-sm" />
            </a>
          </div>
        </header>

        <div className="space-y-16">
          {credentialGroups.map((group, idx) => (
            <section key={idx} aria-labelledby={`group-${idx}`}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <h2 id={`group-${idx}`} className="text-xl font-bold text-white tracking-wide">
                  {group.title}
                </h2>
                <div className="h-px bg-gradient-to-r from-white/10 to-transparent flex-1" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {group.items.map((cred, i) => (
                  cred.link ? (
                    <a 
                      key={i} 
                      href={cred.link}
                      target="_blank"
                      rel="noreferrer"
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
                  ) : (
                    <div key={i} className="glass-card p-6 rounded-2xl border border-white/5">
                      <h3 className="text-white font-bold text-lg mb-1">{cred.label}</h3>
                      <p className="text-gray-400 text-sm">{cred.subtitle}</p>
                    </div>
                  )
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
