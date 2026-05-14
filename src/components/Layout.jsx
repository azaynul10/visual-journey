import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects/kube-autofix-autonomous-kubernetes-sre-agent', label: 'Kube-AutoFix' },
  { to: '/community/bangladesh-ai-cloud-native-developer-community', label: 'Community' },
  { to: '/speaking/ai-cloud-native-workshops', label: 'Workshops' },
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
          <Link to="/" className="text-sm font-bold text-white tracking-tight hover:text-[#00e5ff] transition-colors">
            ZAM<span className="text-[#446CE3]">.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
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
            className="md:hidden text-gray-400 hover:text-white p-2"
            aria-label="Toggle navigation"
          >
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
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
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
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

      {/* Footer with Linux Foundation discount */}
      <footer className="relative z-10 border-t border-white/5 bg-[#050510]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Branding */}
            <div>
              <h3 className="font-bold text-white mb-2">Zaynul Abedin Miah</h3>
              <p className="text-xs text-gray-500">Agentic AI & Cloud Native Platform Engineer</p>
              <p className="text-xs text-gray-500 mt-1">BRAC University '27</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3">Pages</h4>
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="text-xs text-gray-500 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Linux Foundation Discount */}
            <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 border border-purple-500/20 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <i className="fas fa-certificate text-purple-400 text-sm"></i>
                <h4 className="text-xs font-mono uppercase tracking-widest text-purple-400">Partner Discount</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">
                Get <strong className="text-white">30% off</strong> Linux Foundation certifications year-round with code <strong className="text-purple-400">ZAYNUL</strong>.
              </p>
              <a
                href="https://tidd.ly/4sCNu9U"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-purple-300 hover:text-white transition-colors"
              >
                Browse Certifications <i className="fas fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-gray-600">© {new Date().getFullYear()} Zaynul Abedin Miah. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/azaynul10" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/zaynul-abedin-miah/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
