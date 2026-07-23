import SEOHead from './SEOHead';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import Breadcrumb from './Breadcrumb';
import BackToPortfolio from './BackToPortfolio';

/**
 * ProjectPageTemplate — reusable page shell for all project/community/speaking pages.
 * Renders: SEO head, breadcrumb, H1, problem statement, architecture diagram,
 * tech stack badges, description sections, results, "What I Learned", and links.
 */
export default function ProjectPageTemplate({
  seo = {},
  title,
  subtitle,
  problemStatement,
  architectureDiagram,
  techStack = [],
  sections = [],
  results = [],
  whatILearned = [],
  githubLink,
  articleLink,
  articleLabel,
  demoLink,
  notice,
}) {
  return (
    <>
      <SEOHead {...seo} />
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <Breadcrumb current={title} currentClassName="text-gray-300 truncate" />

        {/* H1 */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">{subtitle}</p>
        )}

        {/* Notice banner */}
        {notice && (
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-8">
            <p className="text-sm text-blue-300 leading-relaxed">
              <Icon name="info-circle" className="mr-2 inline-block align-text-bottom" />{notice}
            </p>
          </div>
        )}

        {/* Tech stack badges */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 min-h-[44px] flex items-center bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action links */}
        <div className="flex flex-wrap gap-3 mb-12">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all min-h-[44px]" aria-label={`View ${title} repository on GitHub`}>
              <Icon name="github" /> View Repository
            </a>
          )}
          {articleLink && (
            <a href={articleLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all min-h-[44px] motion-reduce:transition-none" aria-label={`View article or PR for ${title}`}>
              <Icon name="external-link" /> {articleLabel || 'View Article / PR'}
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-5 py-2.5 rounded-xl text-sm font-medium text-red-300 hover:bg-red-500/20 transition-all min-h-[44px]" aria-label={`Watch demo video for ${title}`}>
              <Icon name="youtube" /> Watch Demo
            </a>
          )}
        </div>

        {/* Problem Statement */}
        {problemStatement && (
          <section className="mb-12 motion-safe:animate-fade-in-up">
            <SectionHeading bar="bg-[#FF9900]">Problem Statement</SectionHeading>
            <div className="glass-card p-6">
              <p className="text-gray-300 leading-relaxed">{problemStatement}</p>
            </div>
          </section>
        )}

        {/* Architecture Diagram */}
        {architectureDiagram && (
          <section className="mb-12 motion-safe:animate-fade-in-up">
            <SectionHeading bar="bg-[#446CE3]">Architecture</SectionHeading>
            <div className="glass-card p-6 overflow-x-auto">
              {architectureDiagram}
            </div>
          </section>
        )}

        {/* Dynamic content sections */}
        {sections.map((section, i) => (
          <section key={i} className="mb-12 motion-safe:animate-fade-in-up">
            <SectionHeading bar="bg-[#00e5ff]">{section.title}</SectionHeading>
            <div className="glass-card p-6">
              {typeof section.content === 'string' ? (
                <p className="text-gray-300 leading-relaxed">{section.content}</p>
              ) : (
                section.content
              )}
            </div>
          </section>
        ))}

        {/* Measurable Results */}
        {results.length > 0 && (
          <section className="mb-12 motion-safe:animate-fade-in-up">
            <SectionHeading bar="bg-green-500">Measurable Results</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {results.map((result, i) => (
                <div key={i} className="glass-card p-5">
                  <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                  <p className="text-xs text-gray-400">{result.label}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* What I Learned */}
        {whatILearned.length > 0 && (
          <section className="mb-12 motion-safe:animate-fade-in-up">
            <SectionHeading bar="bg-purple-500">What I Learned</SectionHeading>
            <div className="glass-card p-6">
              <ul className="space-y-3">
                {whatILearned.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                    <Icon name="chevron-right" className="text-purple-400 text-[10px] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <BackToPortfolio />
      </div>
    </>
  );
}
