import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import BentoGrid from '../components/BentoGrid';
import AmbassadorshipsSection from '../components/AmbassadorshipsSection';
import CommunityNetwork from '../components/CommunityNetwork';
import TestimonialsSection from '../components/TestimonialsSection';
import ProjectsGrid from '../components/ProjectsGrid';
import ElevenLabsDubbingSection from '../components/ElevenLabsDubbingSection';
import ContactSection from '../components/ContactSection';
import CredentialsSection from '../components/CredentialsSection';
import Icon from '../components/Icon';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="Zaynul Abedin Miah | AI Dubbing & Cloud-Native Developer"
        description="Explore Zaynul Abedin Miah's AI and cloud-native work, including responsible multilingual video localization with ElevenLabs Dubbing v2."
      />
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Header Section */}
        <header className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            CS Student Building AI Agents &amp; Cloud-Native Tools
            <span className="block mt-2 text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#446CE3] to-[#FF9900] font-semibold">
              Zaynul Abedin Miah
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
            I build practical AI, cloud-native, and developer-tooling projects while organizing student communities around open-source learning.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2 flex-wrap mb-8">
            Building AI infrastructure prototypes <span className="hidden md:inline text-[#FF9900]">|</span> 
            <span className="text-gray-300">OpenAI Cookbook PR #2659 under review</span> <span className="hidden md:inline text-[#446CE3]">|</span> 
            <span className="text-gray-300">CNCF, PyTorch &amp; AWS community involvement.</span>
          </p>
          <div className="flex flex-col gap-2 mt-8 sticky top-20 z-40">
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a href="#contact" className="w-full sm:w-auto bg-[#00e5ff] text-black px-6 py-3 rounded-xl font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(0,229,255,0.4)] text-center min-h-[48px] flex items-center justify-center">
                Get in Touch
              </a>
              <a href="https://www.linkedin.com/in/zaynul-abedin-miah/" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#0077b5] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#006097] transition-colors shadow-[0_0_20px_rgba(0,119,181,0.3)] text-center min-h-[48px] flex items-center justify-center gap-2" aria-label="View LinkedIn profile">
                <Icon name="linkedin" className="text-lg" /> LinkedIn
              </a>
              <a href="https://drive.google.com/file/d/1fm6D7-z8-_LjtDtkGlzkTsMflrjSRVwH/view?usp=sharing" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md text-center min-h-[48px] flex items-center justify-center gap-2" aria-label="Download resume PDF">
                <Icon name="file-pdf" className="text-lg" /> Resume
              </a>
            </div>
          </div>
        </header>

        {/* Bento Box Layout */}
        <BentoGrid />

        {/* Ambassadorships & Recognition */}
        <AmbassadorshipsSection />

        {/* Community Network */}
        <CommunityNetwork />
        
        {/* Industry Recognition & Testimonials */}
        <TestimonialsSection />
        
        {/* Featured Projects with internal links */}
        <ProjectsGrid />
        
        {/* Selected Credentials */}
        <CredentialsSection />
        
        {/* ElevenLabs Dubbing v2 Campaign */}
        <ElevenLabsDubbingSection />

        <ContactSection />
      </div>
    </>
  );
}
