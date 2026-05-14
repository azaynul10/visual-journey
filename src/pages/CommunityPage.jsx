import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

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

const platformIcons = {
  facebook: 'fab fa-facebook',
  meetup: 'fab fa-meetup',
  cncf: 'fas fa-dharmachakra',
  linkedin: 'fab fa-linkedin',
};

export default function CommunityPage() {
  return (
    <>
      <SEOHead
        title="Bangladesh AI & Cloud Native Developer Community | Zaynul Abedin Miah"
        description="Co-organizing and leading 87K+ tech community members across AI, ML, Cloud Native, AWS, Azure, and CNCF chapters in Bangladesh."
        canonicalPath="/community/bangladesh-ai-cloud-native-developer-community"
      />
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-mono">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
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
            { value: '87K+', label: 'Total Network Members' },
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
            Leadership Roles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'CNCF Ambassador', org: 'Cloud Native Computing Foundation', icon: 'fas fa-dharmachakra', color: '#446CE3' },
              { title: 'PyTorch Ambassador', org: 'Meta / PyTorch Foundation', icon: 'fab fa-gripfire', color: '#EE4C2C' },
              { title: 'AWS Community Builder', org: 'Amazon Web Services', icon: 'fab fa-aws', color: '#FF9900' },
              { title: 'AWS Student Builder Group Leader', org: 'BRAC University', icon: 'fab fa-aws', color: '#FF9900' },
              { title: 'Microsoft Learn Student Ambassador', org: 'Gold Milestone', icon: 'fab fa-microsoft', color: '#00a4ef' },
              { title: 'Google AI Community Co-Organizer', org: 'Bangladesh Chapter', icon: 'fab fa-google', color: '#34A853' },
            ].map((r, i) => (
              <div key={i} className="glass-card p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${r.color}15` }}>
                  <i className={`${r.icon} text-lg`} style={{ color: r.color }}></i>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">{r.title}</h3>
                  <p className="text-xs text-gray-400">{r.org}</p>
                </div>
              </div>
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
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group">
                  <i className={`${platformIcons[g.platform] || 'fas fa-users'} text-gray-500 group-hover:text-white transition-colors`}></i>
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
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <i className="fas fa-arrow-left text-xs"></i> Back to Portfolio
          </Link>
        </div>
      </div>
    </>
  );
}
