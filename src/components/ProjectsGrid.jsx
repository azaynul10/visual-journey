import React from 'react';

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Transnational AQMS via IoT",
      tech: "Google ADK, PyTorch, C++",
      link: "https://github.com/azaynul10/adk-breathe-together",
      demo: "https://youtu.be/P8x1D-2WdYw",
      desc: "Designed an IoT-driven Air Quality Monitoring System capable of cross-border data aggregation. Implemented Random Forest predicting AQI levels with 89% accuracy."
    },
    {
      title: "Multimodal Fall Detection",
      tech: "PyTorch, Computer Vision",
      link: "https://github.com/azaynul10/Privacy-Fall-Detector",
      desc: "Developed a Fall Detection mechanism integrating Vision-Language Models for elderly care, achieving a 99% accuracy on Fall-dataset utilizing Multi-Modal learning architectures."
    },
    {
      title: "IAN: Intelligent Accessibility Navigator",
      tech: "Gemini 2.5 Vision, Cloud Run, TTS",
      link: "https://github.com/azaynul10/ian-accessibility-agent",
      desc: "Architected a real-time visual-assistance system for the visually impaired utilizing Gemini Vision capabilities, deployed on Google Cloud Run."
    }
  ];

  return (
    <section className="mt-16">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold">Featured Engineering</h2>
        <div className="h-px bg-white/10 flex-1"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className="glass-card p-6 flex flex-col group cursor-pointer hover:border-brand-blue/50"
            onClick={() => window.open(project.link, '_blank')}
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-brand-blue transition-colors">{project.title}</h3>
            <p className="text-brand-orange text-xs font-mono mb-4">{project.tech}</p>
            <p className="text-gray-400 text-sm flex-1 mb-6 leading-relaxed">
              {project.desc}
            </p>
            <div className="flex gap-3 mt-auto">
              <span className="text-sm font-medium text-white bg-white/5 px-4 py-2 rounded-lg group-hover:bg-brand-blue group-hover:text-white transition-colors">
                View Repository
              </span>
              {project.demo && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.demo, '_blank');
                  }}
                  className="text-sm font-medium text-white bg-white/5 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors flex items-center gap-2"
                >
                  <i className="fab fa-youtube"></i> Demo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
