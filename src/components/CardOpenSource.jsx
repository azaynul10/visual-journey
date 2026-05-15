import React from 'react';
import Icon from './Icon';

export default function CardOpenSource() {
  return (
    <div 
      className="glass-card glow-orange p-6 flex-1 flex flex-col min-h-[300px] cursor-pointer"
      onClick={() => window.open('https://github.com/openai/openai-cookbook/pull/2659', '_blank')}
      role="link"
      aria-label="View OpenAI Cookbook PR #2659 on GitHub"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">OpenAI Cookbook PR</h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            PR #2659
          </div>
        </div>
      </div>

      {/* Mock Editor Window */}
      <div className="flex-1 bg-[#0d1117] border border-white/10 rounded-xl mt-4 overflow-hidden flex flex-col font-mono text-[10px] sm:text-xs">
        {/* Editor Header */}
        <div className="bg-[#161b22] px-4 py-2 border-b border-white/10 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="ml-2 text-gray-400 text-xs font-sans">agentic_validation.py</span>
        </div>
        {/* Editor Body */}
        <div className="p-4 text-gray-300 leading-relaxed overflow-x-auto">
          <p><span className="text-pink-400">import</span> yaml</p>
          <p><span className="text-pink-400">from</span> pydantic <span className="text-pink-400">import</span> BaseModel</p>
          <br/>
          <p><span className="text-blue-400">def</span> <span className="text-yellow-200">validate_mutations</span>(manifest_str):</p>
          <p className="pl-4 text-gray-500">"""Deny-by-default structural invariant checks."""</p>
          <p className="pl-4">docs = yaml.safe_load_all(manifest_str)</p>
          <p className="pl-4"><span className="text-pink-400">for</span> doc <span className="text-pink-400">in</span> docs:</p>
          <p className="pl-8"><span className="text-pink-400">if</span> doc.get(<span className="text-green-300">'kind'</span>) <span className="text-pink-400">not in</span> [<span className="text-green-300">'Deployment'</span>, <span className="text-green-300">'Service'</span>]:</p>
          <p className="pl-12 text-red-400"><span className="text-pink-400">raise</span> Exception(<span className="text-green-300">"Hallucination Detected: Invalid Kind"</span>)</p>
          <p className="pl-8 text-gray-500"># Safely apply structural fixes...</p>
        </div>
      </div>
      
      <div className="mt-6 flex justify-between items-end">
        <p className="text-gray-400 text-sm max-w-sm">
          Submitted a structured-output Kubernetes debugging agent example to the OpenAI Cookbook. The PR is under review and has received Codex feedback.
        </p>
        <a href="https://github.com/openai/openai-cookbook/pull/2659" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white hover:text-brand-orange transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium border border-white/5 min-h-[44px]" aria-label="View PR #2659 on GitHub" onClick={(e) => e.stopPropagation()}>
          <Icon name="github" className="text-lg" />
          View PR
        </a>
      </div>
    </div>
  );
}
