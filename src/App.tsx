import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
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
import WhatsAppFAB from './components/WhatsAppFAB';
import { WhatsAppModalProvider } from './context/WhatsAppModalContext';

function BlogRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={slug ? `/patient-education/${slug}` : '/patient-education'} replace />;
}

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Router basename="/">
      <WhatsAppModalProvider>
        <ScrollToTop />
      <div className="relative flex min-h-screen flex-col bg-[#FAF9F9] text-slate-800 font-sans selection:bg-[#d19890]/70 selection:text-[#4e2627] overflow-x-clip" id="clinical-root">
        {/* Ambient Glowing Orbs */}
        <div className="pointer-events-none fixed -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#d19890]/15 blur-[100px] z-0 animate-pulse" style={{ animationDuration: '8s', animationDelay: '3s' }} />
        <div className="pointer-events-none fixed top-1/4 right-[-10%] h-[600px] w-[600px] rounded-full bg-[#a46b66]/10 blur-[120px] z-0 animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
        <div className="pointer-events-none fixed bottom-10 left-1/3 h-[500px] w-[500px] rounded-full bg-[#4e2627]/5 blur-[90px] z-0 animate-pulse" style={{ animationDuration: '10s', animationDelay: '5s' }} />

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
              <Route path="/blog" element={<Navigate to="/patient-education" replace />} />
              <Route path="/blog/:slug" element={<BlogRedirect />} />

              {/* Legacy blog redirects */}
              <Route path="/patient-education/understanding-pcos" element={<Navigate to="/patient-education/polycystic-ovary-syndrome-pcos" replace />} />
              <Route path="/patient-education/cervical-screening-pap-smear" element={<Navigate to="/services/cervical-cancer-screening" replace />} />
              <Route path="/patient-education/navigating-menopause" element={<Navigate to="/services/menopause-consultation" replace />} />
              <Route path="/patient-education/early-pregnancy-care-first-trimester" element={<Navigate to="/services/early-pregnancy-care" replace />} />
              <Route path="/patient-education/fertility-evaluation-when-to-consult" element={<Navigate to="/services/fertility-consultation" replace />} />

              {/* Legacy redirects — old service page URLs → /services */}
              <Route path="/gynecology" element={<Navigate to="/services" replace />} />
              <Route path="/earlypregnancycare" element={<Navigate to="/services/early-pregnancy-care" replace />} />
              <Route path="/fertility" element={<Navigate to="/services/fertility-consultation" replace />} />
              <Route path="/diagnostics" element={<Navigate to="/services/gynecologic-ultrasound" replace />} />
              <Route path="/second-opinion" element={<Navigate to="/services/second-opinion" replace />} />
              <Route path="/services/cervical-screening" element={<Navigate to="/services/cervical-cancer-screening" replace />} />
              <Route path="/services/colposcopy" element={<Navigate to="/services/colposcopy-and-vulval-evaluation" replace />} />
              <Route path="/services/vulval-evaluation" element={<Navigate to="/services/colposcopy-and-vulval-evaluation" replace />} />
              <Route path="/services/pregnancy-consultation" element={<Navigate to="/services/early-pregnancy-care" replace />} />

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

          <WhatsAppFAB />
        </div>
      </div>
      </WhatsAppModalProvider>
    </Router>
  );
}
