import React from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Lisa Bagley",
      role: "Sr. Program Manager, AWS Developer Experience",
      text: "Thanks for your visionary leadership, Zaynul Abedin Miah! We are looking forward to following your progress!",
      icon: <i className="fab fa-aws text-[#FF9900]" />
    },
    {
      name: "Nayoung Miller Won",
      role: "Global PM & Community Educator, AWS",
      text: "We are looking forward to finding more leaders like you! Congratulations on your many achievements!",
      icon: <i className="fab fa-aws text-[#FF9900]" />
    },
    {
      name: "Nari Yoon",
      role: "AI Developer Programs, Google",
      text: "Our team felt it was important to recognize your dedicated efforts. I'm pleased to share that your Gemini project was featured in our latest community newsletter... We appreciate your active participation in the AI Community Network.",
      icon: <i className="fab fa-google text-[#34A853]" />
    },
    {
      name: "Pablo Veramendi",
      role: "Global Director, Audience Evangelism, Microsoft",
      text: "The Gold milestone is earned by a select few students in the program... I truly believe Zaynul has obtained the skills needed to thrive in their next venture and I am eager to see what their future endeavors hold.",
      icon: <i className="fab fa-microsoft text-[#00a4ef]" />
    },
    {
      name: "Vincent Kok (VK)",
      role: "Microsoft Technical Trainer in AI",
      text: "I had the privilege to be sharing at a session regarding Azure AI services... hosted by Zaynul Abedin Miah, Gold Student Ambassador. I want to have you on my YouTube to inspire others with your story as an MLSA.",
      icon: <i className="fab fa-microsoft text-[#00a4ef]" />
    },
    {
      name: "Audra Montenegro",
      role: "Community & Outreach Manager, CNCF (Linux Foundation)",
      text: "It is great to see what look like successful gatherings... Thank you for helping make cloud native ubiquitous.",
      icon: <i className="fas fa-dharmachakra text-[#446CE3]" />
    },
    {
      name: "CNCF Community-Led Events",
      role: "",
      text: "So great to see the Bangladesh community grow! Their Cloud Native Community Day seemed to be a huge success. Congratulations to Zaynul Abedin Miah and team!\"!",
      icon: <i className="fas fa-dharmachakra text-[#446CE3]" />
    }
  ];

  return (
    <section className="mt-20 mb-8 relative">
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-purple-400/80">
            Endorsements
          </span>
        </div>
        <div className="h-px bg-gradient-to-r from-purple-500/30 to-transparent flex-1" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-tight">
        Industry Recognition & Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="glass-card p-6 flex flex-col group cursor-default">
            <div className="mb-4">
              <i className="fas fa-quote-left text-2xl text-white/10 group-hover:text-purple-400/20 transition-colors"></i>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 italic flex-1">
              "{t.text.replace(/^"|"$/g, '')}"
            </p>
            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/5">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                {t.icon}
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">{t.name}</h4>
                {t.role && <p className="text-xs text-gray-400">{t.role}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
