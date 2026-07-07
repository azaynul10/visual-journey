import React from 'react';
import { Users, Award, Cloud, Monitor } from 'lucide-react';

export default function AmbassadorshipsSection() {
  const flagshipRoles = [
    {
      id: 'aaif',
      organization: 'Agentic AI Foundation (Linux Foundation)',
      title: 'AAIF Ambassador',
      year: '2026–Present',
      description: "Only Ambassador from Bangladesh in AAIF's first global cohort (138 selected from 1,000+ applicants across 41 countries). Advancing open agentic-AI standards — MCP, AGENTS.md, agentgateway.",
      link: 'https://aaif.io/ambassadors',
      logo: '/logos/aaif.svg',
      logoAlt: 'AAIF Logo'
    },
    {
      id: 'cognition',
      organization: 'Cognition',
      title: 'Devin Ambassador',
      year: '2026–Present',
      description: "Ambassador for Cognition's Devin (autonomous AI software engineer); community building and developer advocacy.",
      link: 'https://cognition.ai',
      logo: '/logos/cognition.svg',
      logoAlt: 'Cognition Logo'
    },
    {
      id: 'cncf',
      organization: 'Cloud Native Computing Foundation (Linux Foundation)',
      title: 'CNCF Ambassador',
      year: 'Present',
      description: "Helping make cloud native ubiquitous.",
      link: 'https://www.cncf.io/',
      logo: '/logos/cncf.svg',
      logoAlt: 'CNCF Logo'
    },
    {
      id: 'pytorch',
      organization: 'Linux Foundation',
      title: 'PyTorch Foundation Ambassador',
      year: 'Present',
      description: "Advocating and building with PyTorch in the local AI community.",
      link: 'https://pytorch.org/',
      logo: '/logos/pytorch.svg',
      logoAlt: 'PyTorch Logo'
    },
    {
      id: 'aws',
      organization: 'Amazon Web Services',
      title: 'AWS Community Builder (ML)',
      year: 'Present',
      description: "Building and sharing machine learning solutions on AWS.",
      link: 'https://aws.amazon.com/developer/community/community-builders/',
      logo: '/logos/aws.svg',
      logoAlt: 'AWS Logo'
    },
    {
      id: 'elevenlabs',
      organization: 'ElevenLabs',
      title: 'ElevenLabs Ambassador',
      year: 'Present',
      description: "Evangelizing AI dubbing and voice generation technologies.",
      link: 'https://elevenlabs.io/',
      logo: '/logos/elevenlabs.svg',
      logoAlt: 'ElevenLabs Logo'
    },
    {
      id: 'grafana',
      organization: 'Grafana and Friends Dhaka',
      title: 'Founding Organizer',
      year: '2026–Present',
      description: "Launched and lead the first official Grafana community in Bangladesh, bringing observability (Grafana, Prometheus, Loki, k6) meetups and hands-on workshops to Dhaka's developer community.",
      highlights: [
        "First Grafana and Friends chapter in Bangladesh",
        "Organizing quarterly meetups + hands-on workshops (SQL expressions, k6 load testing, Infinity)",
        "Growing local observability skills across students and professionals"
      ],
      link: 'https://www.meetup.com/grafana-friends-dhaka/',
      logo: '/logos/grafana.svg',
      logoAlt: 'Grafana Logo',
      disclaimer: "Grafana and Friends is a community program; this is a volunteer organizer role and is not an official Grafana Labs page."
    }
  ];

  const pastRoles = [
    {
      id: 'google-ai',
      organization: 'Google AI',
      title: 'Community Co-Organizer',
      icon: <Users className="w-6 h-6 text-[#4285F4]" aria-hidden="true" />,
      link: 'https://www.facebook.com/groups/178663161076600'
    },
    {
      id: 'azure',
      organization: 'Azure Tech Group BD',
      title: 'Co-Organizer',
      icon: <Cloud className="w-6 h-6 text-[#0078D4]" aria-hidden="true" />,
      link: 'https://www.facebook.com/groups/1770787936632620'
    },
    {
      id: 'aws-sbg',
      organization: 'AWS SBG',
      title: 'Outgoing Group Leader',
      icon: <Monitor className="w-6 h-6 text-[#FF9900]" aria-hidden="true" />,
      link: 'https://www.credly.com/badges/ec2c7d7c-394a-4122-881c-4a160d538b2e'
    },
    {
      id: 'mlsa',
      organization: 'Microsoft Student Ambassadors',
      title: 'Former Gold Milestone',
      icon: <Award className="w-6 h-6 text-[#737373]" aria-hidden="true" />,
      link: 'https://techcommunity.microsoft.com/blog/studentdeveloperblog/december%E2%80%93february-ambassadors-ai-projects-demo-day-showcasing-the-power-of-ai/4413462'
    }
  ];

  return (
    <section className="mt-20 mb-8 relative scroll-mt-24" aria-labelledby="ambassadorships-heading">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-blue-400/80">
            Global Representation
          </span>
        </div>
        <div className="h-px bg-gradient-to-r from-blue-500/30 to-transparent flex-1" />
      </div>
      <h2 
        id="ambassadorships-heading" 
        className="text-2xl md:text-3xl font-bold mb-10 tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:rounded"
        tabIndex="-1"
      >
        Ambassadorships & Recognition
      </h2>

      {/* TIER 1: Flagship Ambassadorships */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
        {flagshipRoles.map((role) => (
          <div key={role.id} className="glass-card p-6 flex flex-col group relative transition-transform duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0 h-full">
            {/* Logo Container */}
            <div className="h-14 w-14 mb-5 rounded-xl bg-white/90 p-2 flex items-center justify-center shadow-inner border border-white/20 shrink-0">
              {role.logo ? (
                <img
                  src={role.logo}
                  alt={role.logoAlt}
                  width={40}
                  height={40}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="font-extrabold text-2xl" style={{ color: role.logoColor }}>
                  {role.logoText}
                </span>
              )}
            </div>

            <div className="flex-1 flex flex-col h-full">
              <h3 className="font-bold text-lg text-white mb-1">
                {role.title}
              </h3>
              
              <div className="text-sm font-medium text-blue-300 mb-1">
                <a 
                  href={role.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                >
                  {role.organization}
                  <span className="absolute inset-0 rounded-2xl" aria-hidden="true" />
                </a>
              </div>
              
              <div className="text-xs text-gray-400 font-mono tracking-wider mb-4">
                {role.year}
              </div>

              <p className="text-sm text-gray-300 leading-relaxed mt-auto">
                {role.description}
              </p>
              
              {role.highlights && (
                <ul className="mt-4 space-y-2">
                  {role.highlights.map((hl, i) => (
                    <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                      <span className="text-[#F47A20] mt-0.5 shrink-0">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {role.disclaimer && (
                <div className="mt-5 pt-3 border-t border-white/10 text-[10px] text-gray-500 italic leading-snug">
                  {role.disclaimer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* TIER 2: Community Leadership & Past Roles */}
      <div className="mt-8">
        <h3 className="text-lg font-bold mb-6 text-gray-300 border-b border-white/10 pb-2 inline-block">
          Community Leadership & Past Roles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {pastRoles.map((role) => (
            <div key={role.id} className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex items-center gap-4 transition-colors hover:bg-white/[0.04] group relative h-full">
              <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                {role.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-gray-200 truncate">
                  {role.title}
                </h4>
                <a 
                  href={role.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-gray-300 transition-colors block truncate mt-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                >
                  {role.organization}
                  <span className="absolute inset-0 rounded-xl" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
