import Icon from './Icon';

export default function RecognitionSection() {
  const recognitions = [
    {
      title: 'National Press — Cloud Native Days Bangladesh 2026',
      description: 'Featured in New Age national newspaper coverage of Cloud Native Days Bangladesh 2026.',
      link: 'https://epaper.newagebd.net/25-01-2026/16',
      // Image placeholder: add press screenshot to /public/images/recognition/newage-press.webp
      // then set: image: '/images/recognition/newage-press.webp', imageAlt: 'New Age newspaper coverage of Cloud Native Days Bangladesh 2026'
    },
    {
      title: 'Microsoft IWD 2025 "Male Ally" Honoree',
      description: "Recognized by Microsoft's Student Developer program as a Male Ally for International Women's Day 2025.",
      link: 'https://techcommunity.microsoft.com/blog/studentdeveloperblog/recognizing-impact-international-womens-day-2025-honorees/4399332',
    },
    {
      title: 'Code4Sudan PyTorch Hackathon — Judge',
      description: 'Served as a judge for the Code4Sudan PyTorch Hackathon on Devpost.',
      link: 'https://code4sudan-pytorch-hackathon.devpost.com/',
    },
    {
      title: 'Kubernetes Bengali Localization — 24+ Merged PRs',
      description: 'CNCF Ambassador contributing 24+ merged pull requests to Kubernetes Bengali localization.',
      link: 'https://github.com/search?q=org%3Akubernetes-sigs+author%3Aazaynul10+is%3Amerged&type=pullrequests',
      // Image placeholders: add CNCF hoodie/swag and KCD Chattogram photos to /public/images/recognition/
      // e.g. cncf-swag.webp, kcd-chattogram.webp — then set image/imageAlt fields here or on a dedicated card.
    },
    {
      title: 'Google AI Community Network — 2× Community Grandmaster',
      description: 'Earned Community Grandmaster status twice in the Google AI Community Network.',
      link: 'https://www.facebook.com/groups/178663161076600',
    },
  ];

  return (
    <section className="mb-24 relative z-10" aria-labelledby="recognition-heading">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-blue-400/90">
          Recognition & Community Impact
        </span>
        <div className="h-px bg-gradient-to-r from-blue-500/30 to-transparent flex-1" />
      </div>

      <h2 id="recognition-heading" className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-white">
        Recognition & Community Impact
      </h2>
      <p className="text-gray-400 text-base md:text-lg mb-10 max-w-3xl leading-relaxed">
        Press features, honors, and open-source contributions from community work across AI, cloud-native, and student developer ecosystems.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recognitions.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all group block h-full"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.imageAlt}
                width={400}
                height={225}
                loading="lazy"
                decoding="async"
                className="w-full aspect-video object-cover rounded-xl mb-4 border border-white/10"
              />
            )}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#446CE3] transition-colors pr-4">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
              <Icon name="external-link" className="text-gray-500 group-hover:text-[#446CE3] transition-colors shrink-0 mt-1" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
