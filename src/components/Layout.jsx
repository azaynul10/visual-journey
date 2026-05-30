import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';
import Icon from './Icon';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects/kube-autofix-autonomous-kubernetes-sre-agent', label: 'Kube-AutoFix' },
  { to: '/community/bangladesh-ai-cloud-native-developer-community', label: 'Community' },
  { to: '/speaking/ai-cloud-native-workshops', label: 'Sessions' },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Background effects */}
      <div className="fixed inset-0 z-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-30 mix-blend-screen"></div>
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle,transparent,#050510)]"></div>
      <ParticleBackground />
      <div className="noise-overlay"></div>

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="text-sm font-bold text-white tracking-tight hover:text-[#00e5ff] transition-colors" aria-label="Home">
            ZAM<span className="text-[#446CE3]">.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all min-h-[44px] flex items-center ${
                  location.pathname === link.to
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-400 hover:text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          >
            <Icon name={mobileOpen ? 'times' : 'bars'} className="text-lg" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#050510]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all min-h-[44px] flex items-center ${
                  location.pathname === link.to
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Main content with top padding for fixed nav */}
      <main className="relative z-10 pt-14">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-[#050510]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branding */}
            <div>
              <h3 className="font-bold text-white mb-2">Zaynul Abedin Miah</h3>
              <p className="text-xs text-gray-400">CS Student Building AI & Cloud-Native Tools</p>
              <p className="text-xs text-gray-400 mt-1">BRAC University '27</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3">Pages</h4>
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="text-xs text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Partner Resources */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">Partner Resources</h4>

              {/* ElevenLabs Dubbing v2 */}
              <a
                href="https://try.elevenlabs.io/zayn-dubbing-v2?sid1=dubbingv2&sid2=portfolio&sid3=footer&sharedid=dubbingv2_footer"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-white transition-colors min-h-[36px] focus:outline-none focus:ring-2 focus:ring-cyan-400/30 rounded"
                aria-label="Check ElevenLabs Dubbing v2 access"
              >
                <Icon name="video" className="text-[10px] shrink-0" />
                Check Dubbing v2 Access <Icon name="arrow-right" className="text-[10px]" />
              </a>

              <div className="h-px bg-white/5 my-2" />

              {/* Linux Foundation Certifications */}
              <a
                href="https://tidd.ly/4sCNu9U"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors min-h-[36px] focus:outline-none focus:ring-2 focus:ring-white/20 rounded"
                aria-label="Browse Linux Foundation certifications with discount code ZAYNUL"
              >
                <Icon name="certificate" className="text-[10px] shrink-0" />
                Browse Cloud-Native Certifications <Icon name="arrow-right" className="text-[10px]" />
              </a>
              <p className="text-[10px] text-gray-600 mt-1 pl-4">
                Code <strong className="text-gray-500">ZAYNUL</strong> for 30% off, if still valid.
              </p>

              <p className="text-[10px] text-gray-600 italic mt-3">
                Affiliate links. I may earn a commission if you sign up.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <p className="text-[10px] text-gray-500">© {new Date().getFullYear()} Zaynul Abedin Miah. All rights reserved.</p>
              <p className="text-[9px] text-gray-600 mt-1">Trademarks and logos belong to their respective owners and are used only to identify public community affiliations.</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/azaynul10" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="GitHub profile">
                <Icon name="github" className="text-lg" />
              </a>
              <a href="https://www.linkedin.com/in/zaynul-abedin-miah/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="LinkedIn profile">
                <Icon name="linkedin" className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
