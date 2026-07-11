import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Heart, ChevronRight, ChevronDown, Award, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [navHeight, setNavHeight] = useState<number | 'auto'>('auto');
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;
    
    const updateHeight = () => {
      if (headerRef.current) {
        setNavHeight(headerRef.current.offsetHeight);
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateHeight, 150); // debounce resize
    };

    const handleScroll = () => {
      if (headerRef.current && navWrapperRef.current) {
        const height = headerRef.current.offsetHeight;
        // Trigger sticky only when the entire header (and anything above it) has scrolled out of view
        const triggerPoint = navWrapperRef.current.offsetTop + height;
        if (window.scrollY >= triggerPoint) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    // Initial measure
    updateHeight();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const mainNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Dr. Maitra' },
  ] as const;

  const servicesItems = [
    { id: 'gynecology', label: 'Gynecology & Wellness', desc: 'Preventative care & lifecourse medicine' },
    { id: 'earlypregnancycare', label: 'Pre Conception & Early Pregnancy Care', desc: 'Scholarly, evidence-guided birthing journey' },
    { id: 'fertility', label: 'Fertility & Family', desc: 'Transparent, non-commercial evaluations' },
    { id: 'diagnostics', label: 'Diagnostics & Screenings', desc: 'High-precision scans & accredited lab assays' },
  ] as const;

  const otherNavItems = [
    { id: 'second-opinion', label: 'Second Opinion' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
    navigate(path);
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServiceActive = servicesItems.some(item => location.pathname === `/${item.id}`);

  return (
    <div ref={navWrapperRef} style={{ height: navHeight }}>
      <header
        ref={headerRef}
        className={`w-full border-b border-[#d19890]/20 bg-white/80 backdrop-blur-md z-50 transition-colors duration-300 ${
          isSticky
            ? 'fixed top-0 left-0 right-0 shadow-md animate-slide-down'
            : 'relative shadow-sm'
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo / Brand Name */}
        <Link
          to="/"
          onClick={() => handleNavClick('/')}
          className="group flex items-center focus:outline-none"
          id="nav-logo"
        >
          <img
            src="/images/drnanditamaitra-sclinicLogo.svg"
            alt="Dr. Nandita Maitra's Clinic Logo"
            className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-3 xl:gap-6" aria-label="Main Navigation">
          
          {/* Main items */}
          {mainNavItems.map((item) => {
            const path = item.id === 'home' ? '/' : `/${item.id}`;
            const isActive = location.pathname === path;
            return (
              <Link
                key={item.id}
                to={path}
                onClick={() => handleNavClick(path)}
                className={`relative py-2 text-sm font-bold transition-colors duration-200 hover:text-[#4e2627] focus:outline-none ${
                  isActive ? 'text-[#4e2627]' : 'text-slate-600 hover:text-[#a46b66]'
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#a46b66] rounded-full" />
                )}
              </Link>
            );
          })}

          {/* Services Dropdown Item */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onMouseEnter={() => setIsServicesOpen(true)}
              className={`relative py-2 flex items-center gap-1 text-sm font-bold transition-colors duration-200 hover:text-[#4e2627] focus:outline-none ${
                isServiceActive ? 'text-[#4e2627]' : 'text-slate-600 hover:text-[#a46b66]'
              }`}
              id="services-dropdown-btn"
            >
              <span>Clinical Services</span>
              <ChevronDown className={`shrink-0 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-[#4e2627]' : 'text-slate-500'}`} />
              {isServiceActive && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#a46b66] rounded-full" />
              )}
            </button>

            {/* Services Dropdown Panel */}
            {isServicesOpen && (
              <div 
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-82 rounded-2xl bg-white border border-[#d19890]/20 p-4 shadow-xl ring-1 ring-black/5 animate-fade-in"
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#a46b66] mb-2 px-2 pb-1 border-b border-[#d19890]/10 flex items-center justify-between">
                  <span>Primary Pillars of Care</span>
                  <Sparkles className="shrink-0 h-3 w-3" />
                </div>
                <div className="space-y-1">
                        {servicesItems.map((item) => {
                          const path = `/${item.id}`;
                          const isActive = location.pathname === path;
                          return (
                            <Link
                              key={item.id}
                              to={path}
                              onClick={() => handleNavClick(path)}
                              className={`flex flex-col py-2.5 transition-colors ${
                                isActive ? 'text-[#4e2627]' : 'text-slate-600 hover:text-[#a46b66]'
                              }`}
                            >
                              <span className="text-[15px] font-bold">{item.label}</span>
                              <span className="text-xs text-slate-500">{item.desc}</span>
                            </Link>
                          );
                        })}
                </div>
              </div>
            )}
          </div>

          {/* Other navigation items */}
          {otherNavItems.map((item) => {
            const path = `/${item.id}`;
            const isActive = location.pathname === path;
            const isContact = item.id === 'contact';
            return (
              <Link
                key={item.id}
                to={path}
                onClick={() => handleNavClick(path)}
                className={`relative py-2 text-sm font-bold transition-colors duration-200 hover:text-[#4e2627] focus:outline-none ${
                  isActive && !isContact ? 'text-[#4e2627]' : 'text-slate-600 hover:text-[#a46b66]'
                }`}
              >
                {item.label}
                {isActive && !isContact && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#a46b66] rounded-full" />
                )}
              </Link>
            );
          })}

        </nav>

        {/* Call to Action Button */}
        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={() => handleNavClick('second-opinion')}
            className="rounded-full bg-[#4e2627] hover:bg-[#a46b66] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:translate-y-[-1px] hover:shadow-xl focus:outline-none"
            id="nav-cta-second-opinion"
          >
            Second Opinion
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="tel:+912652331818"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d19890]/20 text-[#4e2627]"
            aria-label="Call clinic"
          >
            <Phone className="shrink-0 h-5 w-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#d19890]/20 bg-white/40 text-slate-700 transition-colors hover:bg-white/60 focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-menu-btn"
          >
            {isOpen ? <X className="shrink-0 h-6 w-6" /> : <Menu className="shrink-0 h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full border-b border-[#d19890]/20 bg-white/95 backdrop-blur-lg shadow-xl transition-all duration-300 lg:hidden">
          <div className="space-y-1 px-4 pt-2 pb-6 sm:px-6 max-h-[80vh] overflow-y-auto">
            
            {/* Home Link */}
            <Link
              to="/"
              onClick={() => handleNavClick('/')}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                location.pathname === '/' ? 'bg-[#d19890]/20 text-[#4e2627]' : 'text-slate-600 hover:bg-white/40'
              }`}
              id="mobile-nav-link-home"
            >
              <span>Home</span>
            </Link>

            {/* About Link */}
            <Link
              to="/about"
              onClick={() => handleNavClick('/about')}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                location.pathname === '/about' ? 'bg-[#d19890]/20 text-[#4e2627]' : 'text-slate-600 hover:bg-white/40'
              }`}
              id="mobile-nav-link-about"
            >
              <span>About Dr. Maitra</span>
            </Link>

            {/* Services Expandable Item */}
            <div className="rounded-xl border border-[#d19890]/10 bg-slate-50/50 p-2 space-y-1">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex w-full items-center justify-between px-3 py-2 text-sm font-bold text-[#4e2627]"
              >
                <span>Clinical Services</span>
                <ChevronDown className={`shrink-0 h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileServicesOpen && (
                <div className="pl-4 space-y-1 border-l border-[#d19890]/20 ml-3 py-1">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.id}
                      to={`/${item.id}`}
                      onClick={() => handleNavClick(`/${item.id}`)}
                      className="group flex flex-col p-4 transition-all duration-200 hover:bg-[#d19890]/10 focus:outline-none"
                    >
                      <span className="text-sm font-bold text-[#4e2627] group-hover:text-[#a46b66] transition-colors">
                        {item.label}
                      </span>
                      <span className="mt-1 text-xs text-slate-500 line-clamp-1">
                        {item.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other items */}
            {otherNavItems.map((item) => {
              const path = `/${item.id}`;
              const isActive = location.pathname === path;
              return (
                <Link
                  key={item.id}
                  to={path}
                  onClick={() => handleNavClick(path)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[#d19890]/20 text-[#4e2627]'
                      : 'text-slate-600 hover:bg-white/40'
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}

            <div className="mt-4 border-t border-[#d19890]/15 pt-4">
              <Link
                to="/second-opinion"
                onClick={() => handleNavClick('/second-opinion')}
                className="flex w-full items-center justify-center rounded-full bg-[#4e2627] py-3 text-center font-bold text-xs uppercase tracking-wider text-[#F9F8F8] transition-all hover:bg-[#a46b66]"
                id="mobile-nav-cta"
              >
                Get a Second Opinion
              </Link>
              <div className="mt-4 flex items-center justify-center gap-2 font-mono text-sm text-slate-700 font-semibold">
                <Phone className="shrink-0 h-4 w-4 text-[#a46b66]" />
                <span>0265-2331818</span>
              </div>
            </div>
          </div>
        </div>
      )}
      </header>
    </div>
  );
}
