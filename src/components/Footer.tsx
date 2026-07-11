import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Heart, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
              Senior Obstetrician, Gynecologist, and Fertility Consultant with over 35 years of clinical and teaching excellence. Committed to offering evidence-based, compassionate, and ethical women's healthcare services in Vadodara, Gujarat.
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
                  102, Race Course Medical Centre, Race Course, Vadodara, Gujarat 390007
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
                <Mail className="shrink-0 h-5 w-5 text-[#d19890]" />
                <a
                  href="mailto:info@drnanditamaitra.com"
                  className="text-sm hover:text-[#d19890] transition-colors"
                >
                  info@drnanditamaitra.com
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
        <div className="space-y-4 font-sans text-xs text-[#F9F8F8]/70">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#d19890]" />
            <p className="leading-relaxed">
              <strong className="text-[#F9F8F8] uppercase text-[10px] tracking-wider block mb-1">
                Medical Disclaimer
              </strong>
              The information presented on this website is strictly for educational and informational purposes only. It is not intended to serve as, nor should it be substituted for, professional medical advice, clinical diagnosis, or medical treatment. Always seek the advice of Dr. Nandita Maitra or another qualified healthcare provider regarding any questions or concerns you have about an obstetric or gynecological condition. Never disregard professional medical advice or delay in seeking it because of information read on this website. For acute emergencies, please contact our helpline or go to the nearest hospital casualty department immediately.
            </p>
          </div>

          <div className="flex items-start gap-2.5">
            <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#d19890]" />
            <p className="leading-relaxed">
              <strong className="text-[#F9F8F8] uppercase text-[10px] tracking-wider block mb-1">
                Privacy & Data Compliance (DPDP Act / NMC Ethics)
              </strong>
              Patient privacy is our utmost priority. Any personal health details submitted via our Quick Inquiry Form are securely processed in accordance with the Digital Personal Data Protection (DPDP) Act, 2023. We adhere strictly to patient-doctor confidentiality as mandated by the National Medical Commission (NMC) Code of Medical Ethics and do not share health parameters with third-party networks.
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="my-8 border-t border-[#d19890]/10" />

        {/* Lower Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-[#F9F8F8]/65 sm:flex-row font-sans">
          <p className='text-center sm:text-left'>© {currentYear} All rights reserved by Dr. Nandita Maitra's Clinic. Designed and developed by <a className="hover:text-[#ffffff] transition-colors focus:outline-none" href="https://shriiitrackingsolution.in/" target="_blank"> <b>Shriii&nbsp;Tracking&nbsp;Solution</b>
          </a> </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#d19890] transition-colors focus:outline-none">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-[#d19890] transition-colors focus:outline-none">
              About the Clinic
            </Link>
            <Link to="/faq" className="hover:text-[#d19890] transition-colors focus:outline-none">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
