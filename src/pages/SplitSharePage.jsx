import ProjectPageTemplate from '../components/ProjectPageTemplate';
import PipelineDiagram from '../components/PipelineDiagram';

const projectTitle = 'SplitShare — Backend and Observability Engineering';
const repositoryUrl = 'https://github.com/azaynul10/split-share';

const marketplaceNodes = [
  { iconName: 'globe', label: 'Browser', desc: 'Marketplace requests', color: '#446CE3' },
  { iconName: 'terminal', label: 'Django', desc: 'Marketplace service', color: '#22c55e' },
  { iconName: 'database', label: 'MariaDB', desc: 'SQL data operations', color: '#FF9900' },
];

const couponNodes = [
  { iconName: 'terminal', label: 'Django', desc: 'Coupon HTTP client', color: '#22c55e' },
  { iconName: 'bolt', label: 'Flask', desc: 'Coupon service', color: '#a855f7' },
  { iconName: 'database', label: 'MariaDB', desc: 'Coupon data operations', color: '#FF9900' },
];

const independentContributions = [
  'Extended a Django/MariaDB marketplace with a Flask coupon service and OpenTelemetry instrumentation, propagating trace context across HTTP requests and database operations using OTLP/HTTP.',
  'Designed controlled database-outage and service-boundary fault experiments covering slow responses, downstream errors and service unavailability; compared AI-generated diagnoses with traces, server logs and source code.',
  'Improved database-outage visibility by recording exceptions on request spans and returning HTTP 503 for degraded page renders, documenting the issue-to-merged-fix verification workflow.',
];

function SplitShareArchitecture() {
  return (
    <figure aria-labelledby="splitshare-architecture-caption" className="space-y-8">
      <figcaption id="splitshare-architecture-caption" className="text-sm font-medium text-gray-300">
        Marketplace and coupon request paths
      </figcaption>
      <PipelineDiagram label="Browser → Django → MariaDB" nodes={marketplaceNodes} />
      <PipelineDiagram label="Django → Flask → MariaDB" nodes={couponNodes} />
      <p className="text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-4">
        Both paths use the marketplace&apos;s MariaDB database. OpenTelemetry spans cover Django and Flask: HTTP calls carry trace context between the services, while request and database spans are exported over OTLP/HTTP.
      </p>
    </figure>
  );
}

export default function SplitSharePage() {
  return (
    <ProjectPageTemplate
      seo={{
        title: `${projectTitle} | Zaynul Abedin Miah`,
        description: 'Collaborative CSE370 marketplace with independent Django/Flask reliability extensions: OpenTelemetry tracing, controlled fault experiments and database-outage HTTP handling.',
        canonicalPath: '/projects/splitshare-backend-observability',
      }}
      title={projectTitle}
      subtitle="Academic project with independent reliability extensions"
      notice="SplitShare began as a collaborative CSE370 academic project. The reliability extensions below are my independent work; the evaluation consists of self-reported controlled experiments, not a production or customer benchmark."
      problemStatement="A marketplace depends on both database access and downstream services. The engineering question was how to follow a request across those boundaries, distinguish slow or failed dependencies from healthy behavior, and make degraded database-backed pages report failure clearly."
      architectureDiagram={<SplitShareArchitecture />}
      techStack={[
        'Python',
        'Django',
        'Flask',
        'SQL',
        'MariaDB/MySQL',
        'OpenTelemetry',
        'distributed tracing',
        'fault injection',
        'root-cause analysis',
        'HTTP error handling',
        'GitHub workflows',
      ]}
      sections={[
        {
          title: 'Marketplace Database Flow',
          content: (
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>SplitShare originated as a collaborative CSE370 database-course marketplace built with Django, SQL and MariaDB/MySQL. The original course application was a team effort, distinct from my independently scoped reliability extensions.</p>
              <ol className="list-decimal list-inside space-y-3">
                <li><strong className="text-white">Browser to Django:</strong> Marketplace requests enter the Django application, which coordinates page rendering and database access.</li>
                <li><strong className="text-white">Django to MariaDB:</strong> SQL-backed data operations supply the marketplace pages. A database outage therefore affects what those pages can render.</li>
                <li><strong className="text-white">Django to Flask to MariaDB:</strong> The independently added coupon service introduces an HTTP boundary. Django calls Flask for coupon operations, and Flask accesses the database.</li>
              </ol>
              <p>The database flow provides the academic foundation; the additional service boundary makes it possible to study how failures and trace context travel between services.</p>
            </div>
          ),
        },
        {
          title: 'Independent Reliability Extensions',
          content: (
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>My scope was the Flask coupon service, cross-service instrumentation, fault experiments and database-outage handling—not sole authorship of the original course application.</p>
              <ul aria-label="Independent reliability contributions" className="list-disc list-inside space-y-3">
                {independentContributions.map((contribution) => (
                  <li key={contribution}>{contribution}</li>
                ))}
              </ul>
            </div>
          ),
        },
        {
          title: 'Controlled Observability Evaluation',
          content: (
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>I used controlled fault injection to examine database outages and the Django-to-Flask service boundary, rather than presenting normal requests alone as evidence of reliability.</p>
              <ul className="list-disc list-inside space-y-3">
                <li><strong className="text-white">Database outage:</strong> Examine request and database spans, server logs and the HTTP response when the database is unavailable.</li>
                <li><strong className="text-white">Service-boundary faults:</strong> Examine intentionally slow responses, downstream errors and coupon-service unavailability.</li>
              </ul>
              <p>AI-generated Bluebox diagnoses were compared with traces, server logs and source code to evaluate whether the proposed root cause matched the injected fault and the application behavior.</p>
              <p><strong className="text-white">Methodology:</strong> The extension used AI-assisted development with human review. I treated generated diagnoses and proposed changes as hypotheses to check against trace evidence, logs and source code.</p>
              <p>The observations are limited to the documented controlled scenarios; they do not establish diagnostic accuracy or production performance gains.</p>
            </div>
          ),
        },
        {
          title: 'Issue-to-Merged-Fix Verification',
          content: (
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <ol className="list-decimal list-inside space-y-3">
                <li>
                  <a href={`${repositoryUrl}/issues/4`} target="_blank" rel="noopener noreferrer" className="text-[#00e5ff] hover:underline">Issue #4</a> was filed by a bot on <time dateTime="2026-09-07">7 September 2026</time>. It records the database-outage visibility problem.
                </li>
                <li>
                  <a href={`${repositoryUrl}/pull/5`} target="_blank" rel="noopener noreferrer" className="text-[#00e5ff] hover:underline">Pull request #5</a> was merged on <time dateTime="2026-09-07">7 September 2026</time>. The change records exceptions on request spans and returns HTTP 503 for degraded page renders.
                </li>
                <li>The documented verification workflow compares the reported problem with traces, server logs, source code and the merged HTTP behavior, rather than treating a generated diagnosis as proof of a fix.</li>
              </ol>
              <p>
                <a href={`${repositoryUrl}/blob/main/docs/bluebox-eval.md`} target="_blank" rel="noopener noreferrer" className="text-[#00e5ff] hover:underline">Read the controlled evaluation notes</a> for the self-reported setup, observations and verification workflow.
              </p>
            </div>
          ),
        },
        {
          title: 'Academic Credits',
          content: (
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <dl className="space-y-4">
                <div>
                  <dt className="font-medium text-white">Theory faculty</dt>
                  <dd>
                    <a href="https://cse.sds.bracu.ac.bd/faculty_profile/203/mr_rakin_bin_rabbani" target="_blank" rel="noopener noreferrer" className="text-[#00e5ff] hover:underline">Rakin Bin Rabbani</a>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-white">Lab faculty</dt>
                  <dd>
                    <ul className="space-y-2">
                      <li><a href="https://www.bracu.ac.bd/about/people/ummay-maria-muna" target="_blank" rel="noopener noreferrer" className="text-[#00e5ff] hover:underline">Ummay Maria Muna</a></li>
                      <li><a href="https://cse.bracu.ac.bd/faculty_profile/510/md_arif_hasan" target="_blank" rel="noopener noreferrer" className="text-[#00e5ff] hover:underline">Md. Arif Hasan</a></li>
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-white">Course teammates</dt>
                  <dd>Thanks to my course teammates for their collective contributions to the original academic marketplace. The course application was collaborative; the reliability extensions above are my independently scoped work.</dd>
                </div>
              </dl>
              <p>These credits recognize the academic course project, not participation in or endorsement of the independent observability evaluation.</p>
            </div>
          ),
        },
        {
          title: 'Independent Feedback Acknowledgment',
          content: 'Thanks to Andrew Norris for the opportunity to share independent Bluebox feedback. This was independent feedback, not employment, a partnership or a vendor endorsement.',
        },
        {
          title: 'Learning Context',
          content: (
            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>A separate CSE370 learning resource is not yet public. The public project below is a practical study companion, not a published version of that course resource.</p>
              <p>
                <a href={repositoryUrl} target="_blank" rel="noopener noreferrer" className="text-[#00e5ff] hover:underline">SplitShare practical study companion</a>
              </p>
            </div>
          ),
        },
      ]}
      whatILearned={[
        'Follow a failure across request spans, downstream HTTP calls and database operations before deciding where the fault originated.',
        'Treat HTTP status codes and recorded exceptions as part of observability: a degraded page should not look like a healthy request.',
        'Use controlled fault scenarios and human review to evaluate AI-generated diagnoses, keeping the evidence and its limitations explicit.',
      ]}
      githubLink={repositoryUrl}
    />
  );
}
