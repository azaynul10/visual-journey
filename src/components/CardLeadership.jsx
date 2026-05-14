import React from 'react';

export default function CardLeadership() {
  const roles = [
    {
      title: "CNCF Ambassador",
      subtitle: "Community Organizer",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
      icon: <i className="fas fa-dharmachakra text-3xl" />
    },
    {
      title: "PyTorch Ambassador",
      subtitle: "AI/ML Community Contributor",
      color: "text-red-500",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
      icon: <i className="fab fa-gripfire text-3xl" />
    },
    {
      title: "AWS Community Builder",
      subtitle: "Student Community Lead",
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      border: "border-orange-400/20",
      icon: <i className="fab fa-aws text-3xl" />
    }
  ];

  return (
    <div 
      className="glass-card glow-blue p-6 lg:p-8 cursor-pointer"
      onClick={() => window.open('https://www.linkedin.com/in/zaynul-abedin-miah/', '_blank')}
    >
      <h2 className="text-xl md:text-2xl font-bold mb-8">Community & Open Source Involvement</h2>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        {roles.map((role, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className={`w-16 h-16 rounded-2xl ${role.bg} ${role.border} border flex items-center justify-center ${role.color} mb-4 transition-transform group-hover:scale-110 group-hover:shadow-[0_0_20px_currentColor]`}>
              {role.icon}
            </div>
            <h3 className="font-bold text-sm mb-1">{role.title}</h3>
            <p className="text-xs text-gray-400">{role.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
