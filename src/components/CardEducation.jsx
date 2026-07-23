import React from 'react';
import Icon from './Icon';

export default function CardEducation() {
  return (
    <a 
      href="https://www.bracu.ac.bd/"
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card p-6 h-full block hover:border-white/30 transition-all group"
      aria-label="BRAC University — B.Sc in Computer Science"
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
        <Icon name="graduation-cap" className="text-2xl text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2">BRAC University | B.Sc in Computer Science</h3>
      <p className="text-sm text-gray-400 mb-4">May 2022 – Present, Dhaka, Bangladesh</p>
      <p className="text-sm text-gray-300">
        <strong className="text-white">Relevant Coursework:</strong> Numerical Methods, Deep Learning, Cloud Computing, Algorithms.
      </p>
    </a>
  );
}
