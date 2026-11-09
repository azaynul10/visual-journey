import SectionHeading from './SectionHeading';

const sessions = [
  {
    id: 'torchtpu-dhaka-2026',
    title: 'Making TorchTPU less intimidating',
    event: 'Notion Café Dhaka · TPU Learning Clubs',
    date: '2026-10-30',
    displayDate: '30 October 2026',
    venue: 'MOAR Dhanmondi, Dhaka',
    role: 'Speaker',
    image: '/images/talks/torchtpu-dhaka-2026.webp',
    width: 1024,
    height: 757,
    alt: 'Zaynul presenting a TorchTPU teaching slide at MOAR Dhanmondi.',
    description: 'A beginner introduction to PyTorch on TPUs, using a kitchen analogy and a small matrix multiplication example in Google Colab. I led the demo and invited the room to predict what changes to the code would do.',
    takeaway: 'TPU usage limits affected the demo. The lesson for my next session: have a recording and saved outputs ready, and separate compilation, data transfer and steady-state execution in any timing experiment.',
    resources: [
      ['Teaching slides', 'https://drive.google.com/file/d/103nO9wRfIiZMJ8FADRjLfTqywR-q8r_P/view?usp=sharing'],
      ['Colab notebook', 'https://colab.research.google.com/drive/1Nwjd8by6cLhI-ZihMFK4JRyyHFaS7eH_?usp=sharing'],
      ['Event page', 'https://luma.com/hzrj66ah'],
    ],
  },
  {
    id: 'notion-cafe-dhaka-2026',
    title: 'From scattered notes to a research hub',
    event: 'Notion Café Dhaka',
    date: '2026-10-30',
    displayDate: '30 October 2026',
    venue: 'MOAR Dhanmondi, Dhaka',
    role: 'Speaker and community organizer',
    image: '/images/talks/notion-cafe-dhaka-2026.webp',
    width: 810,
    height: 810,
    alt: 'The Research and Higher Studies Hub teaching slide beside the Notion Café Dhaka banner.',
    description: 'I demonstrated student workflows for organizing research, deadlines and higher-studies applications in Notion. The free Research & Higher Studies Hub gives students a starting point they can duplicate and adapt.',
    takeaway: 'Co-organized with Shahriyar Al Mustakim Mitul and DevChangeMakers. Mitul also demonstrated a workflow involving Notion, Grafana, GitHub Copilot and Devin.',
    resources: [
      ['Teaching slides', 'https://drive.google.com/file/d/1A1C60NW6fwDV4SYpQD_8cDSKyyNZW7O4/view?usp=sharing'],
      ['Free research hub', 'https://numerous-tip-99d.notion.site/Research-Higher-Studies-Hub-Free-Notion-Template-417d145414184ef0bc27842277249d0b'],
      ['Event page', 'https://luma.com/hzrj66ah'],
    ],
  },
  {
    id: 'github-dev-days-dhaka-2026',
    title: 'Git. GitHub. Your first AI teammate.',
    event: 'GitHub Dev Days Dhaka',
    date: '2026-10-01',
    displayDate: '1 October 2026',
    venue: 'Daffodil International University',
    role: 'Invited speaker',
    image: '/images/talks/devdays-dhaka-2026.webp',
    width: 1600,
    height: 1067,
    alt: 'Zaynul speaking with a microphone at GitHub Dev Days at Daffodil International University.',
    description: 'Git basics, the difference between Git and GitHub, and using GitHub Copilot with clear instructions and human review. The demos included explaining a faulty prime-number check in Bangla and adding a small search filter.',
    takeaway: 'Hosted by Microsoft Campus Club – DIU, with the DIU Data Science Club and Department of Software Engineering. My role was speaking; Md Alamin Ali and Sameul Hasan organized the event.',
    resources: [
      ['Slides and practice files', 'https://github.com/azaynul10/Github_DevDays_2026'],
      ['My session recap', 'https://www.linkedin.com/posts/zaynul-abedin-miah_git-github-copilot-what-i-taught-330-activity-7513120725076025345-qs8R'],
      ['Event page', 'https://luma.com/p64hf211'],
    ],
  },
];

export default function RecentTalks() {
  return (
    <section className="mb-14" aria-labelledby="recent-talks-heading">
      <SectionHeading id="recent-talks-heading" bar="bg-[#00e5ff]">
        Recent talks &amp; workshops
      </SectionHeading>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        Sessions I presented, with the teaching materials and real event photos.
      </p>
      <div className="space-y-7">
        {sessions.map((session) => (
          <article id={session.id} key={session.id} className="glass-card overflow-hidden scroll-mt-20">
            <div className="grid md:grid-cols-[0.85fr_1.15fr]">
              <figure className="m-0 bg-black/20">
                <img
                  src={session.image}
                  alt={session.alt}
                  width={session.width}
                  height={session.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
                <figcaption className="px-5 py-3 text-xs leading-relaxed text-gray-400">
                  {session.venue} · <time dateTime={session.date}>{session.displayDate}</time>
                </figcaption>
              </figure>
              <div className="p-5 sm:p-6">
                <p className="text-xs font-medium text-cyan-300 mb-2">{session.event}</p>
                <h3 className="text-xl font-bold text-white leading-snug mb-2">{session.title}</h3>
                <p className="text-xs text-gray-400 mb-4">{session.role}</p>
                <p className="text-sm text-gray-200 leading-relaxed mb-4">{session.description}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{session.takeaway}</p>
                <div className="flex flex-wrap gap-2">
                  {session.resources.map(([label, url]) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${label}: ${session.title}`}
                      className="inline-flex items-center min-h-[44px] px-3 py-2 rounded-lg text-xs font-medium border border-white/15 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
