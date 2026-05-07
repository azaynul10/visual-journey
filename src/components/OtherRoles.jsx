import React from 'react';

export default function OtherRoles() {
  const organizations = [
    {
      name: "Cloud Native Computing Foundation",
      role: "CNCF Student Ambassador",
      icon: <i className="fas fa-dharmachakra text-3xl" />,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      link: "https://www.cncf.io/"
    },
    {
      name: "PyTorch",
      role: "Ambassador",
      icon: <i className="fab fa-gripfire text-3xl" />,
      color: "text-red-500",
      bg: "bg-red-500/10",
      link: "https://pytorch.org/"
    },
    {
      name: "AWS Community",
      role: "AWS Community Builder",
      icon: <i className="fab fa-aws text-3xl" />,
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      link: "https://aws.amazon.com/developer/community/community-builders/"
    },
    {
      name: "AWS Student Group",
      role: "AWS Student Builder Group Leader, BRACU",
      tag: "Diamond Tier",
      icon: <i className="fab fa-aws text-3xl" />,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      link: "https://community.aws/"
    },
    {
      name: "Google Student Developer Club",
      role: "Machine Learning Lead",
      icon: <i className="fab fa-google text-3xl" />,
      color: "text-green-400",
      bg: "bg-green-400/10",
      link: "https://developers.google.com/community/gdsc"
    },
    {
      name: "Microsoft Learn",
      role: "Student Ambassador",
      icon: <i className="fab fa-microsoft text-3xl" />,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      link: "https://mvp.microsoft.com/studentambassadors"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full">
      {organizations.map((org, i) => (
        <div 
          key={i} 
          className="glass-card p-4 flex items-center gap-4 cursor-pointer hover:bg-white/5 transition-colors group"
          onClick={() => window.open(org.link, '_blank')}
        >
          <div className={`w-12 h-12 rounded-lg ${org.bg} flex items-center justify-center ${org.color} shrink-0 group-hover:scale-110 transition-transform`}>
            {org.icon}
          </div>
          <div>
            <h4 className="font-bold text-sm text-white line-clamp-1">{org.name}</h4>
            <p className="text-xs text-gray-400 line-clamp-1">{org.role}</p>
            {org.tag && (
              <span className="inline-block mt-1 px-2 py-0.5 bg-orange-500/20 text-orange-400 text-[10px] rounded-full">
                {org.tag}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
