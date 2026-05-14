import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const pastEvents = [
  {
    title: 'Cloud Native Community Day — Chattogram',
    org: 'CNCF Cloud Native Chattogram',
    date: '2025',
    url: 'https://ocgroups.dev/cncf/group/zjrcuw4/event/j3nrmeg',
    icon: 'fas fa-dharmachakra',
    color: '#446CE3',
  },
  {
    title: 'CNCF Cloud Native Chattogram — Community Event',
    org: 'CNCF',
    date: '2025',
    url: 'https://ocgroups.dev/cncf/group/zjrcuw4/event/bxhpvd8',
    icon: 'fas fa-dharmachakra',
    color: '#446CE3',
  },
  {
    title: 'Cloud Native Bangladesh — Community Event',
    org: 'CNCF Cloud Native Bangladesh',
    date: '2025',
    url: 'https://ocgroups.dev/cncf/group/w9fz6fg/event/9ghz5ad',
    icon: 'fas fa-dharmachakra',
    color: '#446CE3',
  },
  {
    title: 'AWS Student Builder Group — BRAC University Meetup',
    org: 'AWS SBG BRACU',
    date: '2025',
    url: 'https://www.meetup.com/aws-sbg-brac-university/events/311703434/',
    icon: 'fab fa-aws',
    color: '#FF9900',
  },
  {
    title: 'AWS Student Builder Group — Cloud Workshop',
    org: 'AWS SBG BRACU',
    date: '2024',
    url: 'https://www.meetup.com/aws-sbg-brac-university/events/303548382/',
    icon: 'fab fa-aws',
    color: '#FF9900',
  },
];

const speakingTopics = [
  { topic: 'Kubernetes debugging for students', icon: 'fas fa-dharmachakra', color: '#446CE3' },
  { topic: 'AI agents for developer tools', icon: 'fas fa-robot', color: '#a855f7' },
  { topic: 'MLflow observability for AI agent prototypes', icon: 'fas fa-chart-line', color: '#FF9900' },
  { topic: 'Cloud-native fundamentals', icon: 'fas fa-cloud', color: '#00e5ff' },
  { topic: 'Building student developer communities', icon: 'fas fa-users', color: '#22c55e' },
];

export default function SpeakingPage() {
  return (
    <>
      <SEOHead
        title="Community Events & Learning Sessions | Zaynul Abedin Miah"
        description="Selected public community activities and learning sessions across cloud-native, AWS, AI, open source, and student developer communities."
        canonicalPath="/speaking/ai-cloud-native-workshops"
      />
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-mono">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-300">Sessions</span>
        </nav>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Community Events &amp; Learning Sessions
        </h1>
        <p className="text-lg text-gray-400 mb-4 leading-relaxed max-w-2xl">
          Selected public community activities, meetups, and learning sessions across cloud-native, AWS, AI, and student developer communities.
        </p>

        {/* LinkedIn activity proof */}
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7452028060905680896/"
          target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#0077b5] hover:text-blue-400 transition-colors mb-10">
          <i className="fab fa-linkedin"></i> View recent community activity on LinkedIn
        </a>

        {/* Past Events */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#22c55e] rounded-full"></span>
            Past Public Events
          </h2>
          <div className="space-y-4">
            {pastEvents.map((event, i) => (
              <a key={i} href={event.url} target="_blank" rel="noreferrer"
                className="glass-card p-5 flex items-center gap-4 hover:bg-white/5 transition-colors group block">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${event.color}15` }}>
                  <i className={`${event.icon} text-lg`} style={{ color: event.color }}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm text-white group-hover:text-[#00e5ff] transition-colors">{event.title}</h3>
                  <p className="text-xs text-gray-400">{event.org} · {event.date}</p>
                </div>
                <i className="fas fa-external-link-alt text-xs text-gray-500 group-hover:text-white transition-colors shrink-0"></i>
              </a>
            ))}
          </div>
        </section>

        {/* Topics I Can Speak About */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
            <span className="w-1.5 h-6 bg-[#a855f7] rounded-full"></span>
            Topics I’m Exploring
          </h2>
          <div className="glass-card p-6">
            <p className="text-sm text-gray-400 mb-4">
              These are topics I am currently learning, building around, or open to presenting in community sessions.
            </p>
            <div className="space-y-3">
              {speakingTopics.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}15` }}>
                    <i className={`${item.icon} text-sm`} style={{ color: item.color }}></i>
                  </div>
                  <span className="text-sm text-gray-300">{item.topic}</span>
                </div>
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
