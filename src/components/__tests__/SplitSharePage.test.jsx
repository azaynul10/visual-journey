import { render, screen, within } from '@testing-library/react';
import { beforeEach, describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import SplitSharePage from '../../pages/SplitSharePage';
import { routes, BASE_URL } from '../../../scripts/seo-routes.mjs';

const title = 'SplitShare — Backend and Observability Engineering';
const routePath = '/projects/splitshare-backend-observability';
const repositoryUrl = 'https://github.com/azaynul10/split-share';
const contributions = [
  'Extended a Django/MariaDB marketplace with a Flask coupon service and OpenTelemetry instrumentation, propagating trace context across HTTP requests and database operations using OTLP/HTTP.',
  'Designed controlled database-outage and service-boundary fault experiments covering slow responses, downstream errors and service unavailability; compared AI-generated diagnoses with traces, server logs and source code.',
  'Improved database-outage visibility by recording exceptions on request spans and returning HTTP 503 for degraded page renders, documenting the issue-to-merged-fix verification workflow.',
];
const sourceLinks = [
  [`View ${title} repository on GitHub`, repositoryUrl],
  ['Read the controlled evaluation notes', `${repositoryUrl}/blob/main/docs/bluebox-eval.md`],
  ['Issue #4', `${repositoryUrl}/issues/4`],
  ['Pull request #5', `${repositoryUrl}/pull/5`],
];
const facultyLinks = [
  ['Rakin Bin Rabbani', 'https://cse.sds.bracu.ac.bd/faculty_profile/203/mr_rakin_bin_rabbani'],
  ['Ummay Maria Muna', 'https://www.bracu.ac.bd/about/people/ummay-maria-muna'],
  ['Md. Arif Hasan', 'https://cse.bracu.ac.bd/faculty_profile/510/md_arif_hasan'],
];

function renderPage() {
  return render(
    <MemoryRouter initialEntries={[routePath]}>
      <SplitSharePage />
    </MemoryRouter>
  );
}

function getSection(name) {
  return screen.getByRole('heading', { level: 2, name }).closest('section');
}

describe('SplitSharePage', () => {
  beforeEach(() => {
    document.title = '';
    document.head.innerHTML = '';
  });

  it('renders the exact case-study title and academic subtitle', () => {
    renderPage();
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: title })).toBeInTheDocument();
    expect(screen.getByText('Academic project with independent reliability extensions')).toBeInTheDocument();
  });

  it('renders the three independently scoped contributions verbatim', () => {
    renderPage();
    const section = getSection('Independent Reliability Extensions');
    const list = within(section).getByRole('list', { name: 'Independent reliability contributions' });
    expect(within(list).getAllByRole('listitem').map((item) => item.textContent)).toEqual(contributions);
    expect(section).toHaveTextContent('not sole authorship of the original course application');
  });

  it('separates marketplace database flow from controlled observability evaluation', () => {
    renderPage();
    const marketplace = getSection('Marketplace Database Flow');
    const evaluation = getSection('Controlled Observability Evaluation');
    expect(marketplace).not.toBe(evaluation);
    expect(marketplace).toHaveTextContent('collaborative CSE370 database-course marketplace');
    expect(marketplace).toHaveTextContent('Django to Flask to MariaDB');
    expect(evaluation).toHaveTextContent('database outages');
    expect(evaluation).toHaveTextContent('slow responses, downstream errors and coupon-service unavailability');
    expect(evaluation).toHaveTextContent('AI-generated Bluebox diagnoses were compared with traces, server logs and source code');
  });

  it('explains both architecture paths and tracing across the two services', () => {
    renderPage();
    const diagram = screen.getByRole('figure', { name: 'Marketplace and coupon request paths' });
    expect(within(diagram).getByText('Browser → Django → MariaDB')).toBeInTheDocument();
    expect(within(diagram).getByText('Django → Flask → MariaDB')).toBeInTheDocument();
    expect(diagram).toHaveTextContent('OpenTelemetry spans cover Django and Flask');
    expect(diagram).toHaveTextContent('HTTP calls carry trace context between the services');
    expect(diagram).toHaveTextContent('request and database spans are exported over OTLP/HTTP');
  });

  it('includes the backend and reliability technology stack', () => {
    renderPage();
    const technologies = [
      'Python', 'Django', 'Flask', 'SQL', 'MariaDB/MySQL', 'OpenTelemetry',
      'distributed tracing', 'fault injection', 'root-cause analysis',
      'HTTP error handling', 'GitHub workflows',
    ];
    technologies.forEach((technology) => {
      expect(screen.getAllByText(technology, { selector: 'span' }).length).toBeGreaterThan(0);
    });
  });

  it('links to the public repository, evaluation notes, issue and merged fix', () => {
    renderPage();
    sourceLinks.forEach(([name, href]) => {
      const link = screen.getByRole('link', { name });
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
    const verification = getSection('Issue-to-Merged-Fix Verification');
    expect(verification).toHaveTextContent('Issue #4 was filed by a bot on 7 September 2026');
    expect(verification).toHaveTextContent('Pull request #5 was merged on 7 September 2026');
    expect(verification).toHaveTextContent('records exceptions on request spans and returns HTTP 503');
    const dates = within(verification).getAllByText('7 September 2026');
    expect(dates).toHaveLength(2);
    dates.forEach((date) => expect(date).toHaveAttribute('datetime', '2026-09-07'));
  });

  it('separates theory faculty, lab faculty and collective teammate credits', () => {
    renderPage();
    const credits = getSection('Academic Credits');
    const theory = within(credits).getByText('Theory faculty').nextElementSibling;
    const lab = within(credits).getByText('Lab faculty').nextElementSibling;
    const teammates = within(credits).getByText('Course teammates').nextElementSibling;
    expect(within(theory).getAllByRole('link').map((link) => link.textContent)).toEqual(['Rakin Bin Rabbani']);
    expect(within(lab).getAllByRole('link').map((link) => link.textContent)).toEqual(['Ummay Maria Muna', 'Md. Arif Hasan']);
    facultyLinks.forEach(([name, href]) => {
      expect(within(credits).getByRole('link', { name })).toHaveAttribute('href', href);
    });
    expect(teammates).toHaveTextContent('collective contributions to the original academic marketplace');
    expect(teammates).toHaveTextContent('the reliability extensions above are my independently scoped work');
    expect(within(teammates).queryByRole('link')).not.toBeInTheDocument();
    expect(credits).not.toHaveTextContent('Andrew Norris');
  });

  it('keeps the independent feedback acknowledgment separate from academic credits', () => {
    renderPage();
    const feedback = getSection('Independent Feedback Acknowledgment');
    expect(feedback).toHaveTextContent('Thanks to Andrew Norris for the opportunity to share independent Bluebox feedback');
    expect(feedback).toHaveTextContent('not employment, a partnership or a vendor endorsement');
    expect(feedback).not.toHaveTextContent(/\bCEO\b/);
    expect(within(feedback).queryByRole('link')).not.toBeInTheDocument();
    facultyLinks.forEach(([name]) => expect(feedback).not.toHaveTextContent(name));
  });

  it('states human review and self-reported limits without unvalidated benchmark metrics', () => {
    const { container } = renderPage();
    expect(screen.getByText(/self-reported controlled experiments, not a production or customer benchmark/)).toBeInTheDocument();
    expect(getSection('Controlled Observability Evaluation')).toHaveTextContent('AI-assisted development with human review');
    expect(getSection('Controlled Observability Evaluation')).toHaveTextContent('do not establish diagnostic accuracy or production performance gains');
    expect(screen.queryByRole('heading', { name: 'Measurable Results' })).not.toBeInTheDocument();
    expect(container).not.toHaveTextContent(/\d+(?:\.\d+)?%|\b\d+\s+requests?\b/i);
  });

  it('links only the public project as a study companion for the unpublished course resource', () => {
    renderPage();
    const learning = getSection('Learning Context');
    expect(learning).toHaveTextContent('A separate CSE370 learning resource is not yet public');
    const links = within(learning).getAllByRole('link');
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveAccessibleName('SplitShare practical study companion');
    expect(links[0]).toHaveAttribute('href', repositoryUrl);

    const allowedUrls = new Set([...sourceLinks, ...facultyLinks].map(([, href]) => href));
    const externalLinks = screen.getAllByRole('link').filter((link) => link.getAttribute('href').startsWith('http'));
    expect(new Set(externalLinks.map((link) => link.getAttribute('href')))).toEqual(allowedUrls);
  });

  it('keeps runtime SEO aligned with the single prerender route and case-study JSON-LD', () => {
    renderPage();
    const matchingRoutes = routes.filter((route) => route.path === routePath);
    expect(matchingRoutes).toHaveLength(1);
    const route = matchingRoutes[0];
    const canonicalUrl = `${BASE_URL}${routePath}`;
    expect(route.title).toBe(`${title} | Zaynul Abedin Miah`);
    expect(document.title).toBe(route.title);
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', route.description);
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', canonicalUrl);
    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute('content', route.title);
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute('content', canonicalUrl);
    expect(document.querySelector('meta[name="twitter:title"]')).toHaveAttribute('content', route.title);
    expect(route.jsonLd).toMatchObject({
      '@type': 'WebPage',
      name: title,
      url: canonicalUrl,
      about: { '@type': 'SoftwareSourceCode', codeRepository: repositoryUrl },
    });
    expect(route.jsonLd.description).toContain('Academic project with independent reliability extensions');
    expect(route.jsonLd.about).not.toHaveProperty('author');
    expect(route.jsonLd.citation).toEqual(sourceLinks.slice(1).map(([, href]) => href));
  });
});
