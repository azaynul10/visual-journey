import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Icon from '../components/Icon';
import BrandBadge from '../components/BrandBadge';

const communityGroups = [
  { name: "The AI, ML & Agentic Community - Bangladesh", members: "21.4K", url: "https://www.facebook.com/groups/mlaidlnlpbd", platform: "facebook" },
  { name: "ML, AI, Deep Learning & NLP Community - BD", members: "15.5K", url: "https://www.facebook.com/groups/bdaiml", platform: "facebook" },
  { name: "BRAC University CSE & CS Student Community", members: "22.4K", url: "https://www.facebook.com/groups/bracucsestudentcommunity", platform: "facebook" },
  { name: "BRACU Hackathon, Project & Higher Study Society", members: "19.0K", url: "https://www.facebook.com/groups/bracuhphss", platform: "facebook" },
  { name: "Quantum Computing BD Research Community", members: "2.9K", url: "https://www.facebook.com/groups/quantumbd", platform: "facebook" },
  { name: "Cloud Native Community Group Dhaka", members: "1.1K", url: "https://www.facebook.com/groups/cloudnativebd", platform: "facebook" },
  { name: "GCP User Group Bangladesh", members: "1.0K", url: "https://www.facebook.com/groups/gcpusergroupbd", platform: "facebook" },
  { name: "AWS SBG at BRAC University", members: "1,439", url: "https://www.meetup.com/aws-cloud-club-brac-university/", platform: "meetup" },
  { name: "Cloud Native Dhaka", members: "CNCF", url: "https://ocgroups.dev/cncf/group/ybjqphv", platform: "cncf" },
  { name: "Cloud Native Chattogram", members: "CNCF", url: "https://ocgroups.dev/cncf/group/zjrcuw4", platform: "cncf" },
  { name: "Cloud Native Bangladesh", members: "CNCF", url: "https://ocgroups.dev/cncf/group/w9fz6fg", platform: "cncf" },
  { name: "Azure Tech Group Bangladesh", members: "2.6K", url: "https://www.facebook.com/groups/1770787936632620", platform: "facebook" },
  { name: "Fabric User Community BD", members: "38", url: "https://www.facebook.com/groups/816320010678987", platform: "facebook" },
];

const platformIconMap = { facebook: 'facebook', meetup: 'meetup', cncf: 'dharmachakra', linkedin: 'linkedin' };

const roles = [
  { label: 'CNCF',            subtitle: 'Ambassador',             accent: '#446CE3', ariaLabel: 'CNCF Ambassador affiliation' },
  { label: 'PyTorch',         subtitle: 'Ambassador',             accent: '#EE4C2C', ariaLabel: 'PyTorch Ambassador affiliation' },
  { label: 'AWS',             subtitle: 'Community Builder',      accent: '#FF9900', ariaLabel: 'AWS Community Builder affiliation' },
  { label: 'AWS SBG',         subtitle: 'Student Community Lead', accent: '#FF9900', ariaLabel: 'AWS Student Builder Group Lead affiliation' },
  { label: 'Google AI',       subtitle: 'Community Co-Organizer', accent: '#34A853', ariaLabel: 'Google AI Community Co-Organizer affiliation' },
  { label: 'Azure Tech Group BD', subtitle: 'Co-Organizer',      accent: '#00a4ef', ariaLabel: 'Azure Tech Group Bangladesh Co-Organizer' },
  { label: 'Microsoft Student Ambassadors', subtitle: 'Former Gold', accent: '#737373', ariaLabel: 'Former Microsoft Student Ambassadors Gold Milestone' },
];

export default function CommunityPage() {
  return (
    <>
      <SEOHead
        title="Bangladesh AI & Cloud Native Developer Community | Zaynul Abedin Miah"
        description="Co-organizing and leading 87K+ tech community members across AI, ML, Cloud Native, AWS, Azure, and CNCF chapters in Bangladesh."
        canonicalPath="/community/bangladesh-ai-cloud-native-developer-community"
      />
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-mono" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span aria-hidden="true">/</span>
          <span className="text-gray-300">Community</span>
        </nav>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Bangladesh AI &amp; Cloud Native Developer Community
        </h1>
        <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl">
          Co-organizing and leading tech communities across Bangladesh — bridging AI, cloud native, and emerging platforms into practical student learning ecosystems.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: '87K+', label: 'Aggregated Community Reach' },
            { value: '13+', label: 'Community Chapters' },
            { value: '3', label: 'Cloud Platforms (AWS, Azure, GCP)' },
            { value: 'CNCF', label: 'Ambassador Status' },
          ].map((s, i) => (
            <div key={i} className="glass-card p-5 text-center">
              <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
              <p className="text-xs text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Roles */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#446CE3] rounded-full"></span>
            Community & Program Involvement
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {roles.map((r, i) => (
              <BrandBadge
                key={i}
                label={r.label}
                subtitle={r.subtitle}
                accentColor={r.accent}
                ariaLabel={r.ariaLabel}
              />
            ))}
          </div>
        </section>

        {/* Community Groups */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#00e5ff] rounded-full"></span>
            Community Chapters &amp; Groups
          </h2>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {communityGroups.map((g, i) => (
                <a key={i} href={g.url} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group min-h-[44px]"
                  aria-label={`${g.name} — ${g.members} members`}>
                  <Icon name={platformIconMap[g.platform] || 'users'} className="text-gray-500 group-hover:text-white transition-colors" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-white truncate">{g.name}</p>
                    <p className="text-xs text-gray-500">{g.members} members</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="pt-8 border-t border-white/5">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors min-h-[44px]">
            <Icon name="arrow-left" className="text-xs" /> Back to Portfolio
          </Link>
        </div>
      </div>
    </>
  );
}
