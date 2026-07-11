import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const NAV_ITEMS = [
  { id: 'home',              label: 'Home',              path: '/' },
  { id: 'about',             label: 'About',             path: '/about' },
  { id: 'services',          label: 'Services',          path: '/services', hasDropdown: true },
  { id: 'patient-education', label: 'Patient Education', path: '/patient-education' },
  { id: 'contact',           label: 'Contact',           path: '/contact' },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [navHeight, setNavHeight] = useState<number | 'auto'>('auto');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const navWrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const updateHeight = () => {
      if (headerRef.current) setNavHeight(headerRef.current.offsetHeight);
    };

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateHeight, 150);
    };

    const handleScroll = () => {
      if (headerRef.current && navWrapperRef.current) {
        const height = headerRef.current.offsetHeight;
        const triggerPoint = navWrapperRef.current.offsetTop + height;
        setIsSticky(window.scrollY >= triggerPoint);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    updateHeight();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    navigate(path);
  };

  const toggleDropdown = (e: React.MouseEvent, id: string, path: string) => {
    // If it's a mobile click, toggle. If desktop, it's hover based, but click can navigate or toggle
    if (window.innerWidth < 1024) {
      e.preventDefault(); // Prevent navigation on mobile toggle
      setActiveDropdown(activeDropdown === id ? null : id);
    }
  };

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

          {/* Logo */}
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
          <nav className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-8 h-full" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);
              
              if ('hasDropdown' in item && item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative h-full flex items-center group"
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    ref={item.id === 'services' ? dropdownRef : null}
                  >
                    <Link
                      to={item.path}
                      onClick={() => handleNavClick(item.path)}
                      className={`relative py-2 text-sm font-bold transition-colors duration-200 focus:outline-none flex items-center gap-1 ${
                        isActive
                          ? 'text-[#4e2627]'
                          : 'text-slate-600 hover:text-[#a46b66]'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                      {isActive && (
                        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#a46b66] rounded-full" />
                      )}
                    </Link>

                    {/* Desktop Dropdown Menu */}
                    <div
                      className={`absolute top-[calc(100%-10px)] left-0 min-w-[280px] bg-white rounded-xl shadow-xl border border-[#d19890]/20 p-2 transition-all duration-200 ${
                        activeDropdown === item.id
                          ? 'opacity-100 translate-y-0 visible'
                          : 'opacity-0 translate-y-2 invisible'
                      }`}
                    >
                      {servicesData.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          onClick={() => handleNavClick(`/services/${service.id}`)}
                          className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                            location.pathname === `/services/${service.id}`
                              ? 'bg-[#d19890]/10 text-[#a46b66]'
                              : 'text-slate-600 hover:bg-[#d19890]/10 hover:text-[#a46b66]'
                          }`}
                        >
                          {service.heading}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative py-2 text-sm font-bold transition-colors duration-200 focus:outline-none flex items-center h-full ${
                    isActive
                      ? 'text-[#4e2627]'
                      : 'text-slate-600 hover:text-[#a46b66]'
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  <span className="relative py-2">
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#a46b66] rounded-full" />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile: phone icon + hamburger */}
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
          <div className="absolute top-20 left-0 w-full border-b border-[#d19890]/20 bg-white/95 backdrop-blur-lg shadow-xl lg:hidden max-h-[80vh] overflow-y-auto">
            <div className="space-y-1 px-4 pt-2 pb-6 sm:px-6">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.path === '/'
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path);

                if ('hasDropdown' in item && item.hasDropdown) {
                  const isDropdownOpen = activeDropdown === item.id;
                  return (
                    <div key={item.id} className="w-full">
                      <div 
                        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                          isActive
                            ? 'bg-[#d19890]/20 text-[#4e2627]'
                            : 'text-slate-600 hover:bg-white/40'
                        }`}
                      >
                        <Link
                          to={item.path}
                          onClick={() => handleNavClick(item.path)}
                          className="flex-grow"
                        >
                          {item.label}
                        </Link>
                        <button 
                          onClick={(e) => toggleDropdown(e as any, item.id, item.path)}
                          className="p-1"
                        >
                          <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      
                      {/* Mobile Accordion Dropdown */}
                      {isDropdownOpen && (
                        <div className="overflow-hidden">
                          <div className="pl-6 pr-4 py-2 space-y-1 animate-slide-down">
                            {servicesData.map((service) => (
                              <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                onClick={() => handleNavClick(`/services/${service.id}`)}
                                className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                                  location.pathname === `/services/${service.id}`
                                    ? 'bg-[#d19890]/10 text-[#a46b66]'
                                    : 'text-slate-500 hover:text-[#a46b66]'
                                }`}
                              >
                                {service.heading}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => handleNavClick(item.path)}
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

              {/* Phone number at bottom of mobile menu */}
              <div className="mt-4 border-t border-[#d19890]/15 pt-4 flex items-center justify-center gap-2 font-mono text-sm text-slate-700 font-semibold">
                <Phone className="shrink-0 h-4 w-4 text-[#a46b66]" />
                <span>0265-2331818</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
