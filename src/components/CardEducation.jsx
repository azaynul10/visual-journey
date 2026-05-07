import React from 'react';

export default function CardEducation() {
  return (
    <div 
      className="glass-card p-6 h-full cursor-pointer hover:border-white/30 transition-all group"
      onClick={() => window.open('https://www.bracu.ac.bd/', '_blank')}
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
        <i className="fas fa-graduation-cap text-2xl text-white"></i>
      </div>
      <h3 className="text-xl font-bold mb-2">BRAC University | B.Sc in Computer Science</h3>
      <p className="text-sm text-gray-400 mb-4">May 2022 – Present, Dhaka, Bangladesh</p>
      <p className="text-sm text-gray-300">
        <strong className="text-white">Relevant Coursework:</strong> Numerical Methods, Deep Learning, Cloud Computing, Algorithms.
      </p>
    </div>
  );
}
