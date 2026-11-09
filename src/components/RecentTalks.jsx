import { useEffect, useRef, useState } from 'react';
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
  {
    id: 'aiub-gitai-campusverse-2026',
    title: 'Demystifying the CNCF Landscape',
    event: 'GITAI Campusverse · AIUB Computer Club',
    date: '2026-04-13',
    displayDate: '13 April 2026',
    venue: 'AIUB, D Building Multipurpose Hall',
    role: 'Speaker',
    image: '/images/talks/aiub-gitai-campusverse-2026.webp',
    width: 1600,
    height: 1067,
    preserveFrame: true,
    alt: 'Zaynul presenting Demystifying the CNCF Landscape at GITAI Campusverse, AIUB.',
    description: 'A beginner-focused introduction to cloud-native architecture: provisioning, runtimes, orchestration, application deployment and observability. I used Kubernetes and Prometheus as starting points for understanding how the landscape fits together.',
    takeaway: 'My first in-person talk, hosted by AIUB Computer Club. I spoke alongside Md. Al-Amin Talukdar in the opening cloud-architecture session.',
    resources: [
      ['Session slides (Canva)', 'https://canva.link/y8hth6e4j4fg697'],
      ['Organizer recap', 'https://aiubcc.org/gitai-campusverse/'],
    ],
  },
];

function scrollToTalk(viewport, index, behavior = 'auto') {
  const slides = viewport?.querySelectorAll('[data-talk-slide]');
  const slide = slides?.[index];
  if (!slide) return;
  viewport.scrollTo({
    left: slide.offsetLeft - slides[0].offsetLeft,
    behavior,
  });
}

export default function RecentTalks() {
  const viewportRef = useRef(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    const slides = [...viewport.querySelectorAll('[data-talk-slide]')];
    const updateActive = () => {
      const start = slides[0].offsetLeft;
      let closest = 0;
      for (let i = 1; i < slides.length; i++) {
        if (Math.abs(slides[i].offsetLeft - start - viewport.scrollLeft)
          < Math.abs(slides[closest].offsetLeft - start - viewport.scrollLeft)) closest = i;
      }
      activeRef.current = closest;
      setActive(closest);
    };
    const openHash = () => {
      const index = sessions.findIndex(({ id }) => `#${id}` === window.location.hash);
      if (index >= 0) scrollToTalk(viewport, index);
    };
    const preserveSlide = () => scrollToTalk(viewport, activeRef.current);
    viewport.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('hashchange', openHash);
    window.addEventListener('resize', preserveSlide);
    openHash();
    return () => {
      viewport.removeEventListener('scroll', updateActive);
      window.removeEventListener('hashchange', openHash);
      window.removeEventListener('resize', preserveSlide);
    };
  }, []);

  const goTo = (index) => {
    const target = Math.max(0, Math.min(sessions.length - 1, index));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    scrollToTalk(viewportRef.current, target, reduceMotion ? 'auto' : 'smooth');
  };
  const handleKeys = (event) => {
    if (event.target !== event.currentTarget) return;
    const targets = { ArrowLeft: active - 1, ArrowRight: active + 1, Home: 0, End: sessions.length - 1 };
    if (!(event.key in targets)) return;
    event.preventDefault();
    goTo(targets[event.key]);
  };

  return (
    <section className="mb-14" aria-labelledby="recent-talks-heading" aria-roledescription="carousel">
      <div className="flex items-center justify-between gap-4 mb-3">
        <SectionHeading id="recent-talks-heading" bar="bg-[#00e5ff]" className="text-xl font-bold flex items-center gap-3">
          Recent talks &amp; workshops
        </SectionHeading>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            aria-label="Previous talk"
            aria-controls="talks-carousel"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            className="w-11 h-11 rounded-full border border-white/20 text-xl hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >←</button>
          <button
            type="button"
            aria-label="Next talk"
            aria-controls="talks-carousel"
            onClick={() => goTo(active + 1)}
            disabled={active === sessions.length - 1}
            className="w-11 h-11 rounded-full border border-white/20 text-xl hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >→</button>
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-2">
        Sessions I presented, with the teaching materials and real event photos.
      </p>
      <p id="recent-talks-help" className="text-xs text-gray-400 mb-5">
        Swipe or use the arrows to explore. Keyboard: Left / Right, Home / End.
      </p>
      <div
        id="talks-carousel"
        ref={viewportRef}
        role="group"
        aria-label="Talk slides"
        aria-describedby="recent-talks-help"
        tabIndex={0}
        onKeyDown={handleKeys}
        className="relative flex items-start gap-6 overflow-x-auto overscroll-x-contain snap-x snap-mandatory rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
      >
        {sessions.map((session, index) => (
          <article
            id={session.id}
            key={session.id}
            data-talk-slide
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${sessions.length}: ${session.title}`}
            className="w-full min-w-0 shrink-0 basis-full snap-start rounded-2xl border border-white/10 bg-[#0f0f23]/60 overflow-hidden scroll-mt-20"
          >
            <div className="grid md:grid-cols-[0.85fr_1.15fr]">
              <figure className="m-0 bg-black/20">
                <img
                  src={session.image}
                  alt={session.alt}
                  width={session.width}
                  height={session.height}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-auto aspect-[4/3] ${session.preserveFrame ? 'object-contain' : 'object-cover'}`}
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
      <div className="flex flex-wrap items-center justify-between gap-x-4 mt-3">
        <div className="flex items-center" aria-label="Choose a talk">
          {sessions.map((session, index) => (
            <button
              key={session.id}
              type="button"
              aria-label={`Show talk ${index + 1}: ${session.title}`}
              aria-current={active === index ? 'true' : undefined}
              aria-controls={session.id}
              onClick={() => goTo(index)}
              className="w-11 h-11 flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <span className={`h-1 rounded-full transition-[width,background-color] motion-reduce:transition-none ${active === index ? 'w-7 bg-cyan-300' : 'w-4 bg-white/25'}`} />
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-400" role="status" aria-live="polite" aria-atomic="true">
          {active + 1} / {sessions.length} · {sessions[active].displayDate}
        </p>
      </div>
    </section>
  );
}
