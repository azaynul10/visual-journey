import React, { useState, useEffect, useRef } from 'react';

/* ── Animated counter hook ── */
function useCounter(target, duration = 2000, startDelay = 0) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [started, target, duration, startDelay]);

  return { count, ref };
}

/* ── Community Group Data ── */
const communityGroups = [
  {
    name: "The AI, ML & Agentic Community - Bangladesh",
    members: "21.4K",
    url: "https://www.facebook.com/groups/mlaidlnlpbd",
    platform: "facebook",
    category: "ai"
  },
  {
    name: "ML, AI, Deep Learning & NLP Community - BD",
    members: "15.5K",
    url: "https://www.facebook.com/groups/bdaiml",
    platform: "facebook",
    category: "ai"
  },
  {
    name: "BRAC University CSE & CS Student Community",
    members: "22.4K",
    url: "https://www.facebook.com/groups/bracucsestudentcommunity",
    platform: "facebook",
    category: "university"
  },
  {
    name: "BRACU Hackathon, Project & Higher Study Society",
    members: "19.0K",
    url: "https://www.facebook.com/groups/bracuhphss",
    platform: "facebook",
    category: "university"
  },
  {
    name: "Quantum Computing BD Research Community",
    members: "2.9K",
    url: "https://www.facebook.com/groups/quantumbd",
    platform: "facebook",
    category: "ai"
  },
  {
    name: "Cloud Native Community Group Dhaka",
    members: "1.1K",
    url: "https://www.facebook.com/groups/cloudnativebd",
    platform: "facebook",
    category: "cloud"
  },
  {
    name: "GCP User Group Bangladesh",
    members: "1.0K",
    url: "https://www.facebook.com/groups/gcpusergroupbd",
    platform: "facebook",
    category: "cloud"
  },
  {
    name: "AWS SBG at BRAC University",
    members: "1,439",
    url: "https://www.meetup.com/aws-cloud-club-brac-university/",
    platform: "meetup",
    category: "cloud"
  },
  {
    name: "Cloud Native Dhaka",
    members: "CNCF",
    url: "https://ocgroups.dev/cncf/group/ybjqphv",
    platform: "cncf",
    category: "cloud"
  },
  {
    name: "Cloud Native Chattogram",
    members: "CNCF",
    url: "https://ocgroups.dev/cncf/group/zjrcuw4",
    platform: "cncf",
    category: "cloud"
  },
  {
    name: "Cloud Native Bangladesh",
    members: "CNCF",
    url: "https://ocgroups.dev/cncf/group/w9fz6fg",
    platform: "cncf",
    category: "cloud"
  },
  {
    name: "Cloud Native Bangladesh (LinkedIn)",
    members: "LinkedIn",
    url: "https://www.linkedin.com/company/91442132",
    platform: "linkedin",
    category: "cloud"
  },
  {
    name: "Cloud Native Dhaka (LinkedIn)",
    members: "LinkedIn",
    url: "https://www.linkedin.com/company/104193827",
    platform: "linkedin",
    category: "cloud"
  },
  {
    name: "Azure Tech Group Bangladesh",
    members: "2.6K",
    url: "https://www.facebook.com/groups/1770787936632620",
    platform: "facebook",
    category: "cloud"
  },
  {
    name: "Azure Tech Group BD (LinkedIn)",
    members: "LinkedIn",
    url: "https://www.linkedin.com/company/99426105",
    platform: "linkedin",
    category: "cloud"
  },
  {
    name: "Fabric User Community BD",
    members: "38",
    url: "https://www.facebook.com/groups/816320010678987",
    platform: "facebook",
    category: "cloud"
  }
];

/* ── Platform icon component ── */
function PlatformIcon({ platform, className = "" }) {
  switch (platform) {
    case 'facebook':
      return <i className={`fab fa-facebook ${className}`} />;
    case 'meetup':
      return <i className={`fab fa-meetup ${className}`} />;
    case 'cncf':
      return <i className={`fas fa-dharmachakra ${className}`} />;
    case 'linkedin':
      return <i className={`fab fa-linkedin ${className}`} />;
    default:
      return <i className={`fas fa-users ${className}`} />;
  }
}

/* ── Stat Card (Floating Holographic Bento) ── */
function StatCard({ number, suffix, label, sublabel, icon, accentColor, glowColor, delay, groups }) {
  const { count, ref } = useCounter(number, 2200, delay);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={(el) => { cardRef.current = el; if (ref) ref.current = el; }}
      className="antigravity-card group"
      style={{
        '--accent': accentColor,
        '--glow': glowColor,
        '--delay': `${delay}ms`,
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Holographic shimmer overlay */}
      <div className="holographic-shimmer" />
      
      {/* Glow border effect */}
      <div className="glow-border" />
      
      {/* Content */}
      <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
        {/* Top row: icon + label */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="stat-icon-ring" style={{ '--accent': accentColor }}>
              {icon}
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
              {sublabel}
            </span>
          </div>
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full transition-all duration-500"
                style={{
                  backgroundColor: isHovered
                    ? accentColor
                    : 'rgba(255,255,255,0.15)',
                  transitionDelay: `${i * 100}ms`,
                  boxShadow: isHovered ? `0 0 8px ${accentColor}` : 'none',
                }}
              />
            ))}
          </div>
        </div>

        {/* Holographic number */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="holographic-number">
            <span className="number-value">{count.toLocaleString()}{suffix}</span>
          </div>
          <p className="text-base md:text-lg font-semibold text-white/90 mt-2 tracking-tight">
            {label}
          </p>
        </div>

        {/* Community group links - bottom */}
        {groups && groups.length > 0 && (
          <div className={`community-links-container mt-4 pt-4 border-t border-white/5 transition-all duration-500 ${isHovered ? 'opacity-100 max-h-[200px]' : 'opacity-60 max-h-[80px]'} overflow-hidden`}>
            <div className="flex flex-wrap gap-2">
              {groups.map((group, i) => (
                <a
                  key={i}
                  href={group.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="community-chip"
                  style={{ '--accent': accentColor }}
                  title={`${group.name} • ${group.members} members`}
                >
                  <PlatformIcon platform={group.platform} className="text-[10px]" />
                  <span className="text-[10px] font-medium truncate max-w-[120px]">
                    {group.name.length > 20 ? group.name.substring(0, 20) + '…' : group.name}
                  </span>
                  <span className="text-[9px] opacity-70">{group.members}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Main Component ── */
export default function CommunityNetwork() {
  const aiGroups = communityGroups.filter(g => g.category === 'ai');
  const universityGroups = communityGroups.filter(g => g.category === 'university');
  const cloudGroups = communityGroups.filter(g => g.category === 'cloud');

  const stats = [
    {
      number: 87,
      suffix: 'K+',
      label: 'Tech Ecosystem Members',
      sublabel: 'Total Network Reach',
      icon: <i className="fas fa-globe text-xl" />,
      accentColor: '#00e5ff',
      glowColor: 'rgba(0, 229, 255, 0.15)',
      delay: 0,
      groups: communityGroups,
    },
    {
      number: 41,
      suffix: 'K+',
      label: 'University Devs',
      sublabel: 'BRACU Community',
      icon: <i className="fas fa-graduation-cap text-xl" />,
      accentColor: '#7c3aed',
      glowColor: 'rgba(124, 58, 237, 0.15)',
      delay: 150,
      groups: universityGroups,
    },
    {
      number: 36,
      suffix: 'K+',
      label: 'AI & ML Network',
      sublabel: 'Research & Community',
      icon: <i className="fas fa-brain text-xl" />,
      accentColor: '#a855f7',
      glowColor: 'rgba(168, 85, 247, 0.15)',
      delay: 300,
      groups: aiGroups,
    },
    {
      number: 0,
      suffix: '',
      label: 'AWS, Azure & CNCF Leader',
      sublabel: 'Cloud Infrastructure',
      icon: <i className="fab fa-aws text-xl" />,
      accentColor: '#FF9900',
      glowColor: 'rgba(255, 153, 0, 0.15)',
      delay: 450,
      groups: cloudGroups,
      isLeaderCard: true,
    },
  ];

  return (
    <section id="community-network" className="mt-20 mb-8 relative">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-cyan-400/80">
            Community Impact
          </span>
        </div>
        <div className="h-px bg-gradient-to-r from-cyan-500/30 to-transparent flex-1" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">
        Global Developer Network
        <span className="block text-sm font-normal text-gray-400 mt-2 tracking-normal">
          Co-organizing and leading tech communities across Bangladesh & beyond
        </span>
      </h2>

      {/* Floating antigravity bento grid */}
      <div className="antigravity-grid">
        {stats.map((stat, i) =>
          stat.isLeaderCard ? (
            <LeaderCard key={i} stat={stat} />
          ) : (
            <StatCard key={i} {...stat} />
          )
        )}
      </div>

      {/* Floating ambient particles around the grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="ambient-orb"
            style={{
              '--orb-x': `${15 + Math.random() * 70}%`,
              '--orb-y': `${10 + Math.random() * 80}%`,
              '--orb-size': `${80 + Math.random() * 200}px`,
              '--orb-hue': [190, 270, 30, 190, 270, 30][i],
              '--orb-delay': `${i * 1.5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}

/* ── AWS & CNCF Leader Card (special layout) ── */
function LeaderCard({ stat }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const badges = [
    { label: 'AWS Diamond Captain', icon: 'fab fa-aws', color: '#FF9900' },
    { label: 'CNCF Ambassador', icon: 'fas fa-dharmachakra', color: '#446CE3' },
    { label: 'Azure Tech Lead', icon: 'fab fa-microsoft', color: '#00a4ef' },
  ];

  return (
    <div
      ref={cardRef}
      className="antigravity-card leader-variant group"
      style={{
        '--accent': stat.accentColor,
        '--glow': stat.glowColor,
        '--delay': `${stat.delay}ms`,
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="holographic-shimmer" />
      <div className="glow-border" />

      <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
        {/* Top */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="stat-icon-ring" style={{ '--accent': stat.accentColor }}>
              {stat.icon}
            </div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
              {stat.sublabel}
            </span>
          </div>
        </div>

        {/* Badges row */}
        <div className="flex flex-wrap gap-2 mb-5">
          {badges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-300"
              style={{
                borderColor: isHovered ? `${badge.color}60` : 'rgba(255,255,255,0.08)',
                backgroundColor: isHovered ? `${badge.color}12` : 'rgba(255,255,255,0.03)',
                boxShadow: isHovered ? `0 0 12px ${badge.color}20` : 'none',
              }}
            >
              <i className={`${badge.icon} text-xs`} style={{ color: badge.color }} />
              <span className="text-[11px] font-medium text-white/80">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Title */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-xl md:text-2xl font-bold text-white tracking-tight">
            {stat.label}
          </p>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Leading AWS, Azure & CNCF Community Chapters across Bangladesh
          </p>
        </div>

        {/* Group links */}
        {stat.groups && stat.groups.length > 0 && (
          <div className={`community-links-container mt-4 pt-4 border-t border-white/5 transition-all duration-500 ${isHovered ? 'opacity-100 max-h-[200px]' : 'opacity-60 max-h-[100px]'} overflow-hidden`}>
            <div className="flex flex-wrap gap-2">
              {stat.groups.map((group, i) => (
                <a
                  key={i}
                  href={group.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="community-chip"
                  style={{ '--accent': stat.accentColor }}
                  title={`${group.name} • ${group.members}`}
                >
                  <PlatformIcon platform={group.platform} className="text-[10px]" />
                  <span className="text-[10px] font-medium truncate max-w-[120px]">
                    {group.name.length > 22 ? group.name.substring(0, 22) + '…' : group.name}
                  </span>
                  <span className="text-[9px] opacity-70">{group.members}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
