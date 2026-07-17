import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import ServiceDetail from './components/ServiceDetail';
import PatientEducation from './components/PatientEducation';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import About from './components/About';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import Privacy from './components/Privacy';
import FAQ from './components/FAQ';
import ProfessionalDisclaimer from './components/ProfessionalDisclaimer';
import { ArrowUp, Phone } from 'lucide-react';
import { useWhatsAppLink } from './hooks/useWhatsAppLink';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { getWhatsAppUrl } = useWhatsAppLink();

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="relative flex min-h-screen flex-col bg-[#FAF9F9] text-slate-800 font-sans selection:bg-[#d19890]/70 selection:text-[#4e2627] overflow-x-hidden" id="clinical-root">
        {/* Ambient Glowing Orbs */}
        <div className="pointer-events-none fixed -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#d19890]/15 blur-[100px] z-0 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="pointer-events-none fixed top-1/4 right-[-10%] h-[600px] w-[600px] rounded-full bg-[#a46b66]/10 blur-[120px] z-0 animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="pointer-events-none fixed bottom-10 left-1/3 h-[500px] w-[500px] rounded-full bg-[#4e2627]/5 blur-[90px] z-0 animate-pulse" style={{ animationDuration: '10s' }} />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-grow" id="primary-content-wrapper">
            <Routes>
              {/* Core pages */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:id" element={<ServiceDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/disclaimer" element={<ProfessionalDisclaimer />} />
              <Route path="/faq" element={<FAQ />} />

              {/* Patient Education */}
              <Route path="/patient-education" element={<PatientEducation />} />
              <Route path="/patient-education/:slug" element={<BlogPost />} />

              {/* Legacy redirects — old service page URLs → /services */}
              <Route path="/gynecology" element={<Navigate to="/services" replace />} />
              <Route path="/earlypregnancycare" element={<Navigate to="/services" replace />} />
              <Route path="/fertility" element={<Navigate to="/services" replace />} />
              <Route path="/diagnostics" element={<Navigate to="/services" replace />} />
              <Route path="/second-opinion" element={<Navigate to="/services" replace />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>

        {/* Floating Widgets */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3" id="floating-widgets">
          {showScrollTop && (
            <button
              onClick={handleScrollToTop}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#4e2627] border border-[#d19890]/30 shadow-lg transition-all duration-300 hover:bg-[#4e2627]/90 hover:text-[#F9F8F8] hover:scale-105 focus:outline-none"
              aria-label="Scroll back to top"
              id="back-to-top-btn"
            >
              <ArrowUp className="shrink-0 h-5 w-5" />
            </button>
          )}

          <a
            href="tel:+912652331818"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d19890] text-[#4e2627] shadow-lg transition-all duration-300 hover:bg-[#a46b66] hover:text-white hover:scale-105 focus:outline-none"
            aria-label="Call Clinic"
            id="call-floating-btn"
          >
            <Phone className="h-6 w-6" />
          </a>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" style={{ animationDuration: '2s' }} />
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:bg-[#128C7E] hover:scale-105 focus:outline-none"
              aria-label="Contact on WhatsApp"
              id="whatsapp-floating-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Router>
  );
}
