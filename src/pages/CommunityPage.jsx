import SEOHead from '../components/SEOHead';
import Icon from '../components/Icon';
import BrandBadge from '../components/BrandBadge';
import SectionHeading from '../components/SectionHeading';
import Breadcrumb from '../components/Breadcrumb';
import BackToPortfolio from '../components/BackToPortfolio';

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
  { name: "Grafana and Friends Dhaka", members: "New", url: "https://www.meetup.com/grafana-friends-dhaka/", platform: "meetup" },
];

const platformIconMap = { facebook: 'facebook', meetup: 'meetup', cncf: 'dharmachakra', linkedin: 'linkedin' };

const roles = [
  { label: 'CNCF',            subtitle: 'Ambassador',             accent: '#446CE3', link: 'https://www.cncf.io/people/ambassadors/?p=zaynul-abedin-miah&_sf_s=zaynul+abedin+miah', ariaLabel: 'View Zaynul Abedin Miah on CNCF Ambassadors directory' },
  { label: 'PyTorch',         subtitle: 'Ambassador',             accent: '#EE4C2C', link: 'https://pytorch.org/programs/ambassadors/', ariaLabel: 'View PyTorch Ambassador program page' },
  { label: 'AWS',             subtitle: 'Community Builder',      accent: '#FF9900', link: 'https://builder.aws.com/community/community-builders', ariaLabel: 'View AWS Community Builders program page' },
  { label: 'AWS SBG',         subtitle: 'Outgoing Group Leader',  accent: '#FF9900', link: 'https://www.credly.com/badges/ec2c7d7c-394a-4122-881c-4a160d538b2e', ariaLabel: 'View AWS Cloud Club Captain credential' },
  { label: 'ElevenLabs',      subtitle: 'Ambassador',             accent: '#E2E8F0', link: 'https://elevenlabs.io/', ariaLabel: 'View ElevenLabs Ambassador affiliation' },
  { label: 'Grafana and Friends', subtitle: 'Founding Organizer',     accent: '#F47A20', link: 'https://www.meetup.com/grafana-friends-dhaka/', ariaLabel: 'View Grafana and Friends Dhaka Meetup' },
  { label: 'Cognition',       subtitle: 'Devin Ambassador',       accent: '#06B6D4', link: 'https://www.cognition.ai/', ariaLabel: 'View Cognition Devin Ambassador affiliation' },
  { label: 'Google AI',       subtitle: 'Community Co-Organizer', accent: '#4285F4', accentGradient: 'linear-gradient(135deg, #4285F4, #EA4335, #FBBC05, #34A853)', link: 'https://www.youtube.com/watch?v=7wNhy2i9X10&list=PLHGDyeOCXVQfDHoouVp7YF_LEbdjh8JGz&pp=sAgC', ariaLabel: 'View Google AI Community activity' },
  { label: 'Azure Tech Group BD', subtitle: 'Co-Organizer',       accent: '#0078D4', accentGradient: 'linear-gradient(135deg, #005A9E, #0078D4, #008AD7, #008C45)', link: 'https://www.facebook.com/groups/1770787936632620', ariaLabel: 'View Azure Tech Group Bangladesh profile' },
  { label: 'Microsoft Student Ambassadors', subtitle: 'Former Gold Milestone', accent: '#737373', link: 'https://techcommunity.microsoft.com/blog/studentdeveloperblog/december%E2%80%93february-ambassadors-ai-projects-demo-day-showcasing-the-power-of-ai/4413462', ariaLabel: 'View Microsoft Student Ambassadors feature' },
];

export default function CommunityPage() {
  return (
    <>
      <SEOHead
        title="Bangladesh AI & Cloud Native Developer Community | Zaynul Abedin Miah"
        description="Co-organizing and leading tech community members across AI, ML, Cloud Native, Grafana, AWS, Azure, and CNCF chapters in Bangladesh."
        canonicalPath="/community/bangladesh-ai-cloud-native-developer-community"
      />
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <Breadcrumb current="Community" />

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Bangladesh AI &amp; Cloud Native Developer Community
        </h1>
        <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
          Co-organizing and leading tech communities across Bangladesh — bridging AI, cloud native, and emerging platforms into practical student learning ecosystems.
        </p>

        {/* Primary CTA */}
        <div className="mb-12">
          <a href="https://www.facebook.com/groups/mlaidlnlpbd" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#00e5ff]/10 border border-[#00e5ff]/30 px-6 py-3 rounded-xl text-sm font-bold text-[#00e5ff] hover:bg-[#00e5ff]/20 transition-all min-h-[44px] motion-reduce:transition-none" aria-label="Join the main Facebook community group">
            <Icon name="users" /> Join the Community
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 motion-safe:animate-fade-in-up">
          {[
            { value: '87K+', label: 'Aggregated Community Reach' },
            { value: '14+', label: 'Community Chapters' },
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
        <section className="mb-12 motion-safe:animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <SectionHeading bar="bg-[#446CE3]">Community & Program Involvement</SectionHeading>
          <p className="text-sm text-gray-400 mb-6">Formerly AWS Cloud Club Captain; completed Platinum and Diamond milestones.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {roles.map((r, i) => {
              const isClickable = !!r.link;
              const Wrapper = isClickable ? 'a' : 'div';
              return (
                <Wrapper
                  key={i}
                  href={isClickable ? r.link : undefined}
                  target={isClickable ? "_blank" : undefined}
                  rel={isClickable ? "noopener noreferrer" : undefined}
                  className={`block rounded-2xl relative ${
                    isClickable ? 'hover:ring-1 hover:ring-white/10 transition-all group cursor-pointer motion-reduce:transition-none' : ''
                  }`}
                  aria-label={r.ariaLabel}
                >
                  <BrandBadge
                    label={r.label}
                    subtitle={r.subtitle}
                    accentColor={r.accent}
                    accentGradient={r.accentGradient}
                    ariaLabel={r.ariaLabel}
                    className="w-full h-full"
                  />
                  {isClickable && (
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity motion-reduce:transition-none z-20">
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  )}
                </Wrapper>
              );
            })}
          </div>
        </section>

        {/* Community Groups */}
        <section className="mb-12 motion-safe:animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <SectionHeading bar="bg-[#00e5ff]">Community Chapters &amp; Groups</SectionHeading>
          <div className="glass-card p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {communityGroups.map((g, i) => (
                <a key={i} href={g.url} target="_blank" rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group min-h-[44px] motion-reduce:transition-none"
                  aria-label={`${g.name} — ${g.members} members`}>
                  <Icon name={platformIconMap[g.platform] || 'users'} className="text-gray-400 group-hover:text-white transition-colors motion-reduce:transition-none" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-white truncate">{g.name}</p>
                    <p className="text-xs text-gray-400">{g.members} members</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <BackToPortfolio />
      </div>
    </>
  );
}
