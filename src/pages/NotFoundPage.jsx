import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page not found | Zaynul Abedin Miah"
        description="This page could not be found. Explore Zaynul's projects and community talks."
        canonicalPath="/404"
        noindex
      />
      <section className="max-w-4xl mx-auto px-6 py-24 min-h-[60vh]">
        <p className="text-sm font-mono text-gray-400 mb-4">404</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Page not found</h1>
        <p className="text-gray-300 mb-8">This address may have changed. You can find my work and recent talks below.</p>
        <div className="flex flex-wrap gap-4">
          <Link to="/" className="inline-flex items-center min-h-[44px] px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15">
            Back to portfolio
          </Link>
          <Link to="/speaking/ai-cloud-native-workshops" className="inline-flex items-center min-h-[44px] px-5 py-3 rounded-xl border border-white/20 hover:bg-white/5">
            Talks and workshops
          </Link>
        </div>
      </section>
    </>
  );
}
