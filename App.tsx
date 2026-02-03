
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const NavLink = ({ to, children, active, onClick }: { to: string, children?: React.ReactNode, active: boolean, onClick?: () => void }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className={`text-sm font-bold transition-colors ${
      active ? 'text-primary' : 'text-slate-600 hover:text-primary'
    }`}
  >
    {children}
  </Link>
);

const SectionLink = ({ id, children, onClick }: { id: string, children?: React.ReactNode, onClick: (id: string) => void }) => (
  <button 
    onClick={() => onClick(id)}
    className="text-slate-600 hover:text-primary text-sm font-bold transition-colors cursor-pointer text-left"
  >
    {children}
  </button>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAbout = location.pathname === '/about';
  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false); // Close mobile menu if open
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 group">
            <img 
              src="https://drive.google.com/uc?export=view&id=1mJkBydECdYbuhZ53uAD4Ogj8DRsh5gtB" 
              alt="Amplifier Business Hub Logo" 
              className="h-10 sm:h-12 w-auto group-hover:scale-105 transition-transform"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.querySelector('.fallback-logo')?.classList.remove('hidden');
              }}
            />
            <div className="fallback-logo hidden flex items-center gap-2">
              <div className="size-8 sm:size-20 rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined"><img src="logo.png" alt="" /></span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-primary text-base sm:text-lg font-black leading-none uppercase">The Amplifier</h2>
                <span className="text-slate-500 text-[8px] sm:text-[9px] font-bold tracking-widest uppercase">Business Hub</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex flex-1 justify-end items-center gap-10">
            <div className="flex items-center gap-8">
              <NavLink to="/" active={isHome}>Home</NavLink>
              
              {isHome && (
                <>
                  <SectionLink id="services" onClick={scrollToSection}>Services</SectionLink>
                  <SectionLink id="advisory" onClick={scrollToSection}>Advisory</SectionLink>
                </>
              )}

              <NavLink to="/about" active={isAbout}>About Us</NavLink>
              <SectionLink id="contact" onClick={() => scrollToSection('contact')}>Contact</SectionLink>
            </div>
            
            <button 
              onClick={() => window.open('https://wa.me/2349067243214', '_blank')}
              className="bg-secondary hover:bg-orange-700 text-white text-sm font-bold h-11 px-8 rounded-full transition-all active:scale-95 shadow-lg shadow-orange-500/20 flex items-center gap-2"
            >
              Get Started
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="p-2 text-slate-900 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl z-40 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col p-6 gap-6">
            <NavLink to="/" active={isHome} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            
            {isHome && (
              <>
                <SectionLink id="services" onClick={scrollToSection}>Services</SectionLink>
                <SectionLink id="advisory" onClick={scrollToSection}>Advisory</SectionLink>
              </>
            )}

            <NavLink to="/about" active={isAbout} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
            <SectionLink id="contact" onClick={() => scrollToSection('contact')}>Contact Us</SectionLink>
            
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                window.open('https://wa.me/2349067243214', '_blank');
              }}
              className="bg-secondary hover:bg-orange-700 text-white text-center text-sm font-bold py-4 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2 w-full"
            >
              Get Started
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
