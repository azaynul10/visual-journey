import React from 'react'
import BentoGrid from './components/BentoGrid'
import CommunityNetwork from './components/CommunityNetwork'
import TestimonialsSection from './components/TestimonialsSection'
import ProjectsGrid from './components/ProjectsGrid'
import ContactSection from './components/ContactSection'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background with glowing effect */}
      <div className="fixed inset-0 z-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center opacity-30 mix-blend-screen"></div>
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle,transparent,#050510)]"></div>
      
      <ParticleBackground />
      
      {/* Digital Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* System Status Indicator */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">
        <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">System Status</span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-500 status-dot"></span>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Header Section */}
        <header className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Zaynul Abedin Miah
            <span className="block mt-2 text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#446CE3] to-[#FF9900]">
              Architecting Staff-Level Autonomy in Cloud Native Infrastructure.
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl flex items-center gap-2 flex-wrap mb-8">
            Building Agentic Infrastructure <span className="hidden md:inline text-[#FF9900]">|</span> 
            <span className="text-gray-300">OpenAI Cookbook Contributor</span> <span className="hidden md:inline text-[#446CE3]">|</span> 
            <span className="text-gray-300">CNCF & PyTorch Ambassador.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 sticky top-20 z-40">
            <a href="#contact" className="w-full sm:w-auto bg-[#00e5ff] text-black px-8 py-4 rounded-xl font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(0,229,255,0.4)] text-center min-h-[50px] flex items-center justify-center text-lg">
              Get in Touch
            </a>
            <a href="https://www.linkedin.com/in/zaynul-abedin-miah/" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#0077b5] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#006097] transition-colors shadow-[0_0_20px_rgba(0,119,181,0.3)] text-center min-h-[50px] flex items-center justify-center text-lg">
              <i className="fab fa-linkedin mr-2"></i> LinkedIn
            </a>
          </div>
        </header>

        {/* Bento Box Layout */}
        <BentoGrid />

        {/* Community Network — Antigravity Floating Cards */}
        <CommunityNetwork />
        
        {/* Industry Recognition & Testimonials */}
        <TestimonialsSection />
        
        {/* Additional Sections */}
        <ProjectsGrid />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
