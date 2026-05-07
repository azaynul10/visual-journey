import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xblrgzvv");

  return (
    <section className="mt-16 text-center max-w-2xl mx-auto pb-16">
      <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
        <h2 className="text-3xl font-bold mb-4 relative z-10">Let's Build the Future</h2>
        <p className="text-gray-400 mb-8 relative z-10">
          Currently exploring staff-level roles and ambitious collaborations in the Cloud Native and Agentic AI space.
        </p>

        {state.succeeded ? (
          <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-xl relative z-10">
            <p className="font-bold text-lg mb-2 flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/></svg>
              Transmission Received
            </p>
            <p className="text-sm opacity-80">I'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left relative z-10">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 ml-1">
                Email Address
              </label>
              <input
                id="email"
                type="email" 
                name="email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
                placeholder="you@example.com"
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="text-red-400 text-xs mt-1 ml-1"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 ml-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all resize-none"
                placeholder="How can we collaborate?"
                required
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="text-red-400 text-xs mt-1 ml-1"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button 
                type="submit" 
                disabled={state.submitting}
                className="flex-1 bg-[#446CE3] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(68,108,227,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Transmission'}
              </button>
              <a href="https://github.com/azaynul10" target="_blank" rel="noreferrer" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub Profile
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
