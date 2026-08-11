import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Heart, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { getWhatsAppUrl } = useWhatsAppLink();

  return (
    <footer className="bg-[#4e2627] text-[#F9F8F8] border-t-4 border-[#d19890]" id="app-footer">
      {/* Upper Footer - Info and Contact Details */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-12 md:gap-8 lg:gap-16">
          {/* Column 1: Brand & Clinical Credibility */}
          <div className="flex-1 max-w-md md:max-w-[355px] space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <img
                src="/images/drnanditamaitra-sclinicLogo.svg"
                alt="Dr. Nandita Maitra's Clinic Logo"
                className="h-18 lg:h-22 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-[#F9F8F8]/80 leading-relaxed font-sans">
              Ethical • Evidence-Based • Compassionate Women's Healthcare | Over 35 years of clinical and academic experience in women's health. We are committed to providing care in accordance with National Medical Commission (NMC) ethical guidelines and applicable Indian laws. 
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="w-full md:w-auto md:min-w-[200px] space-y-5 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-serif text-lg font-semibold tracking-wider text-[#d19890]">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm text-[#F9F8F8]/80 flex flex-col items-center md:items-start">
              <li>
                <Link
                  to="/services"
                  className="flex items-center gap-2 hover:text-[#d19890] transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d19890]/40"></span>
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/patient-education"
                  className="flex items-center gap-2 hover:text-[#d19890] transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d19890]/40"></span>
                  <span>Patient Education</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-2 hover:text-[#d19890] transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d19890]/40"></span>
                  <span>About Dr. Maitra</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 hover:text-[#d19890] transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d19890]/40"></span>
                  <span>Book Appointment</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinic Hours & Contact */}
          <div className="flex-1 max-w-md md:max-w-[258px] space-y-5 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-serif text-lg font-semibold tracking-wider text-[#d19890]">
              Clinic Hours
            </h3>
            <div className="space-y-4 font-sans flex flex-col items-center md:items-start w-full">
              <div className="flex flex-col items-center md:flex-row md:items-start gap-3 text-center md:text-left">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#d19890]" />
                <a
                  href="https://maps.app.goo.gl/EQHrLazsA3twHYF26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-semibold hover:text-[#d19890] transition-colors"
                >
                  102, next to Pashabhai park, Race Course Medical Centre, Race Course, Vadodara, Gujarat 390007
                </a>
              </div>
              <div className="flex flex-col items-center md:flex-row md:items-start gap-3 text-center md:text-left">
                <Phone className="shrink-0 h-5 w-5 text-[#d19890]" />
                <a
                  href="tel:+912652331818"
                  className="font-mono text-sm font-semibold hover:text-[#d19890] transition-colors"
                >
                  0265-2331818
                </a>
              </div>
              <div className="flex flex-col items-center md:flex-row md:items-start gap-3 text-center md:text-left">
                <svg viewBox="0 0 24 24" fill="currentColor" className="shrink-0 h-5 w-5 text-[#d19890]">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-semibold hover:text-[#d19890] transition-colors"
                >
                  +91 90810 05399
                </a>
              </div>

              <div className="pt-4 border-t border-[#d19890]/15 space-y-3 w-full flex flex-col items-center md:items-start">
                <div className="flex flex-col items-center md:flex-row md:items-start gap-3 text-center md:text-left">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#d19890]" />
                  <div className="text-sm text-[#F9F8F8]/90 leading-relaxed">
                    <span className="block font-semibold">Monday – Saturday</span>
                    <span className="text-xs text-[#F9F8F8]/70 block">10:30 AM – 12:30 PM</span>
                    <span className="text-xs text-[#F9F8F8]/70 block">5:00 PM – 7:00 PM</span>
                  </div>
                </div>
                <div className="flex flex-col items-center md:flex-row md:items-start gap-3 text-rose-300 text-center md:text-left">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0" />
                  <div className="text-sm leading-relaxed">
                    <span className="block font-semibold">Sunday</span>
                    <span className="text-xs opacity-90 block">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="my-10 border-t border-[#d19890]/20" />

        {/* Legal, Medical Disclaimers and Privacy Notes */}
        <div className="space-y-6 font-sans text-xs text-[#F9F8F8]/70">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#d19890]" />
            <div className="space-y-2 leading-relaxed">
              <strong className="text-[#F9F8F8] uppercase text-[10px] tracking-wider block">
                Medical Disclaimer
              </strong>
              <p>
                The information provided on this website is intended solely for educational and informational purposes. It is not a substitute for professional medical advice, diagnosis, or treatment.
              </p>
              <p>
                Every woman's health concerns are unique. Always consult a qualified healthcare professional for advice regarding your individual medical condition. Do not disregard or delay seeking professional medical care because of information you have read on this website.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#d19890]" />
            <div className="space-y-2 leading-relaxed">
              <strong className="text-[#F9F8F8] uppercase text-[10px] tracking-wider block">
                Privacy & Confidentiality
              </strong>
              <p>
                At <b>GYNECOLOGY CLINIC</b>, we respect your privacy and are committed to keeping your personal information <b>private and confidential</b>.
              </p>
              <p>
                Information submitted through our contact or appointment forms is used only to respond to your enquiry, schedule appointments, or facilitate your healthcare needs.
              </p>
              <p>
                We do not sell or use your personal information for marketing. Your data is handled responsibly in accordance with applicable laws, including the <b>Digital Personal Data Protection Act, 2023 (DPDP Act).</b>
              </p>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="my-8 border-t border-[#d19890]/10" />

        {/* Lower Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-[#F9F8F8]/65 sm:flex-row font-sans">
          <p className='text-center sm:text-left'>© {currentYear} All rights reserved by Dr. Nandita Maitra's Clinic. Designed and developed by <a className="hover:text-[#ffffff] transition-colors focus:outline-none" href="https://shriiitrackingsolution.in/" target="_blank"> <b>Shriii&nbsp;Tracking&nbsp;Solution</b>
          </a> </p>
          <div className="flex items-center gap-3 sm:gap-6">
            <Link to="/privacy" className="hover:text-[#d19890] transition-colors focus:outline-none">
              Privacy Policy
            </Link>
            <Link to="/disclaimer" className="hover:text-[#d19890] transition-colors focus:outline-none">
              Professional & Legal Disclaimer
            </Link>
            <Link to="/contact" className="hidden sm:block hover:text-[#d19890] transition-colors focus:outline-none">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
