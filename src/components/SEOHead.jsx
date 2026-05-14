import { useEffect } from 'react';

const BASE_URL = 'https://zaynul-abedin-miah.vercel.app';

/**
 * SEOHead — dynamically sets document title and meta tags per route.
 * Since this is an SPA, index.html carries the static defaults for
 * crawlers that don't execute JS, and this component overrides them
 * at runtime for users navigating between pages.
 */
export default function SEOHead({
  title = 'Zaynul Abedin Miah | Agentic AI & Cloud Native Platform Engineer',
  description = 'BRAC University CS student building agentic AI infrastructure, Kubernetes SRE agents, MLflow-observed AI workflows, and large-scale developer communities across Bangladesh.',
  canonicalPath = '/',
  ogImage = '/images/og-image.png',
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const fullUrl = `${BASE_URL}${canonicalPath}`;
    const fullImage = `${BASE_URL}${ogImage}`;

    setMeta('name', 'description', description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', fullUrl);
    setMeta('property', 'og:image', fullImage);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Zaynul Abedin Miah');

    // Twitter / X
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', fullImage);
  }, [title, description, canonicalPath, ogImage]);

  return null;
}
