import React from 'react';
import CardOpenSource from './CardOpenSource';
import CardLeadership from './CardLeadership';
import CardTerminal from './CardTerminal';
import CardTechStack from './CardTechStack';
import CardEducation from './CardEducation';
import OtherRoles from './OtherRoles';

export default function BentoGrid() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (Span 6) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <CardOpenSource />
          
          {/* Bottom Left Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
            {/* Hero Photo Focus Card */}
            <div 
              className="glass-card glow-blue relative overflow-hidden h-full min-h-[280px] cursor-pointer group"
              onClick={() => window.open('https://www.linkedin.com/in/zaynul-abedin-miah/', '_blank')}
            >
              {/* Full-bleed Photo */}
              <img 
                src="/images/Zaynul.jpg" 
                alt="Zaynul Abedin Miah" 
                className="absolute inset-0 w-full h-full object-cover object-top brightness-75 group-hover:brightness-90 transition-all duration-700"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-[#050510]/30 to-transparent"></div>
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                {/* Pulsing status badge */}
                <div className="flex gap-2 items-center text-blue-400 mb-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="text-[10px] font-mono uppercase tracking-widest">Available for Collaborations</span>
                </div>
                <h3 className="font-bold text-white text-lg leading-tight">Zaynul Abedin Miah</h3>
                <p className="text-gray-400 text-xs mt-1">BRAC University '27</p>
              </div>
            </div>
            <CardTechStack />
          </div>
        </div>

        {/* Right Column (Span 6) */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <CardLeadership />
          <CardTerminal />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-1">
            <CardEducation />
         </div>
         <div className="lg:col-span-2 flex flex-col justify-center">
            <OtherRoles />
         </div>
      </div>
    </div>
  );
}
