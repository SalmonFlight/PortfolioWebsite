// src/components/layout/footer.jsx
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-[#0B0E14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Aaron. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="https://github.com/SalmonFlight" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/brayden-aaron-santoso-351010434/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;