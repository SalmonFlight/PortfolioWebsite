// src/components/sections/contact.jsx
import { useState } from 'react';
import FadeIn from '../common/FadeIn';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'B.AaronSantoso@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-slate-800">
      <FadeIn>
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl font-bold text-white">Let's work together</h2>
          <p className="mt-3 text-lg text-slate-400">
            I'm always open to discussing new projects, creative ideas, or 
            opportunities to be part of your vision.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-sm text-slate-500 mb-2">Email me directly:</p>
              <div className="flex items-center gap-3">
                <span className="text-lg text-slate-300 font-medium">
                  {email}
                </span>
                <button
                  onClick={handleCopy}
                  className={`text-sm px-3 py-1.5 rounded-lg border transition-all duration-200 ${
                    copied 
                      ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10' 
                      : 'border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <p className="text-sm text-slate-500 mb-3">Or connect with me:</p>
              <div className="flex gap-6">
                <a 
                  href="https://github.com/SalmonFlight" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/brayden-aaron-santoso/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;