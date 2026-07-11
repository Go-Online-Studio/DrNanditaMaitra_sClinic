import { useState, ChangeEvent, FormEvent } from 'react';
import { Phone, MapPin, Clock, Mail, MessageSquare, ArrowRight, ShieldCheck, CheckSquare, HelpCircle } from 'lucide-react';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';
import { useNavigate } from 'react-router-dom';
import PageSEO from './PageSEO';

export default function Contact() {
  const navigate = useNavigate();
  const { getWhatsAppUrl } = useWhatsAppLink();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    visitReason: 'General Gynecology Consultation',
    message: ''
  });
  const [errors, setErrors] = useState({ name: '', phone: '' });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Clear errors first
    const newErrors = { name: '', phone: '' };
    let hasError = false;

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
      hasError = true;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Full Name must be at least 3 characters.';
      hasError = true;
    }

    // Phone validation
    const phoneRegex = /^[+]?[0-9\s-]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact Number is required.';
      hasError = true;
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-15 digit contact number (digits, spaces, hyphens, and optional + only).';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Process Form Data and compile a beautiful WhatsApp message
    const formattedMessage = `Hello Dr. Maitra's Clinic,

I would like to schedule an appointment. Here are my registration details:
• Name: ${formData.name.trim()}
• Phone Number: ${formData.phone.trim()}
• Email Address: ${formData.email.trim() || 'Not Provided'}
• Reason for Visit: ${formData.visitReason}
• Message: ${formData.message.trim() || 'No additional details provided.'}

Thank you!`;

    const whatsappUrl = getWhatsAppUrl(formattedMessage);
    
    // Set success state
    setFormSubmitted(true);
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[#F9F8F8] min-h-screen py-12" id="contact-and-location-page">
      <PageSEO pageKey="contact" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="inline-block text-xs font-semibold tracking-wider text-[#a46b66] uppercase bg-[#d19890]/10 px-3.5 py-1 rounded-full">
            Connect & Visit
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#4e2627]">
            Schedule Your Visit
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600">
            Reach out to our clinical administration team in Vadodara to coordinate your visit, secure pre-natal counseling packages, or request detailed surgical reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Column 1: Clinic Details & Maps (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl glass-panel border border-[#d19890]/20 p-3 sm:p-6 space-y-6 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#4e2627]">Dr. Nandita Maitra's Office</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#a46b66] shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-600 space-y-1">
                    <strong className="text-[#4e2627] text-sm block">Primary Clinic Address</strong>
                    <a target="_blank" className="font-mono text-sm font-bold text-[#4e2627] hover:underline block pt-0.5"
                       rel="noopener noreferrer" href="https://maps.app.goo.gl/gns4QpjdtSRMsEUg9">
                      102, Race Course Medical Centre, Race Course, Vadodara, Gujarat 390007
                    </a>
                    <span className="block italic text-[11px] text-slate-500 pt-1">
                      Landmark: Located conveniently close to Race Course Road. Complete elevator and wheelchair access is available.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#a46b66] shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-600">
                    <strong className="text-[#4e2627] text-sm block">Appointment Helpline</strong>
                    <a href="tel:+912652331818" className="font-mono text-sm font-bold text-[#4e2627] hover:underline block pt-0.5">
                      0265-2331818
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#a46b66] shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-600">
                    <strong className="text-[#4e2627] text-sm block">Clinical Timings</strong>
                    <span className="block pt-0.5">Monday – Saturday: 10:00 AM – 1:00 PM | 4:00 PM – 7:00 PM</span>
                    <span className="block font-medium text-rose-700">Sunday: Closed (Emergency Triage Only)</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="bg-emerald-50/60 rounded-xl p-4 border border-emerald-100 space-y-3">
                <h4 className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                  <MessageSquare className="shrink-0 h-4 w-4 text-emerald-600" />
                  <span>Instant Booking Triage</span>
                </h4>
                <p className="text-[11px] text-emerald-800 leading-relaxed">
                  Couples and maternity patients can connect instantly with our senior coordinator via WhatsApp to request priority evening slots.
                </p>
                <a
                  href={getWhatsAppUrl("Hello Dr. Maitra's clinic. I would like to coordinate an appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 text-xs font-bold uppercase tracking-wider shadow-md transition-all text-center"
                >
                  Message Clinical Admin
                </a>
              </div>
            </div>
            {/* Map Embed panel */}
            <div className="rounded-2xl overflow-hidden border border-[#d19890]/20 shadow-md">
              <iframe
                title="Google Maps Location for Race Course Medical Centre, Vadodara"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1845.5691294440767!2d73.1580569!3d22.3106103!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8bd4f2ea561%3A0xe6e7428aab521983!2sRace%20Course%20Medical%20Centre!5e0!3m2!1sen!2s!4v1783142633632!5m2!1sen!2s"
                className="h-60 w-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Column 2: Booking/Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass-panel-heavy border border-[#d19890]/20 p-3 sm:p-8 shadow-xl space-y-6">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckSquare className="shrink-0 h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4e2627]">Booking Inquiry Processed</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your clinical request has been secured. Our head clinic coordinator will contact you at <span className="font-mono text-slate-900">{formData.phone}</span> shortly to complete your booking.
                  </p>
                  <button
                    onClick={() => { setFormSubmitted(false); setFormData({ name: '', phone: '', email: '', visitReason: 'General Gynecology Consultation', message: '' }); }}
                    className="rounded-full border border-[#d19890] text-[#4e2627] hover:bg-white bg-white/40 px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none"
                  >
                    Submit another booking request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="pb-3 border-b border-[#d19890]/10">
                    <h3 className="font-serif text-lg font-bold text-[#4e2627]">Clinic Registration Form</h3>
                    <p className="text-xs text-slate-500">Provide baseline details below; fields marked with * are mandatory.</p>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Sharda Patel"
                      className={`w-full rounded-xl border bg-white/40 focus:bg-white px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 transition-all ${
                        errors.name 
                          ? 'border-red-400 focus:border-red-500 focus:ring-red-500' 
                          : 'border-[#d19890]/20 focus:border-[#a46b66] focus:ring-[#a46b66]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-600 font-semibold flex items-center gap-1">
                        ⚠ {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g., +91 90810 05399"
                        className={`w-full rounded-xl border bg-white/40 focus:bg-white px-3.5 py-2.5 text-xs font-mono focus:outline-none focus:ring-1 transition-all ${
                          errors.phone 
                            ? 'border-red-400 focus:border-red-500 focus:ring-red-500' 
                            : 'border-[#d19890]/20 focus:border-[#a46b66] focus:ring-[#a46b66]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-[11px] text-red-600 font-semibold flex items-center gap-1">
                          ⚠ {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g., sharda@example.com"
                        className="w-full rounded-xl border border-[#d19890]/20 bg-white/40 focus:bg-white px-3.5 py-2.5 text-xs focus:border-[#a46b66] focus:outline-none focus:ring-1 focus:ring-[#a46b66] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="visitReason" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Reason for Visit *
                    </label>
                    <select
                      name="visitReason"
                      id="visitReason"
                      required
                      value={formData.visitReason}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-[#d19890]/20 bg-white/40 focus:bg-white px-3.5 py-2.5 text-xs focus:border-[#a46b66] focus:outline-none focus:ring-1 focus:ring-[#a46b66] transition-all"
                    >
                      <option value="General Gynecology Consultation">General Gynecology & Wellness</option>
                      <option value="Antenatal Maternity Monitoring">Pregnancy / Antenatal Monitoring</option>
                      <option value="Infertility Workup / Follicular scan">Infertility / Follicular Scan</option>
                      <option value="Surgical Second Opinion">Surgical Second Opinion</option>
                      <option value="Cancer Screen / Pap smear test">Cancer Screen / Pap Smear Test</option>
                      <option value="PCOS / Endometriosis treatment">PCOS / Endometriosis Treatment</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Brief Message or Symptoms description
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Add brief details about your conditions, symptoms, or requested date preferences..."
                      className="w-full rounded-xl border border-[#d19890]/20 bg-white/40 focus:bg-white px-3.5 py-2.5 text-xs focus:border-[#a46b66] focus:outline-none focus:ring-1 focus:ring-[#a46b66] transition-all"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 bg-[#d19890]/10 p-3.5 rounded-xl border border-[#d19890]/35">
                    <ShieldCheck className="h-5 w-5 text-[#a46b66] mt-0.5 shrink-0" />
                    <p className="text-[10px] text-slate-600 leading-relaxed">
                      By submitting, you agree that Dr. Nandita Maitra's clinic can contact you regarding your clinical inquiry. All information is secured under patient privacy laws.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#4e2627] hover:bg-[#a46b66] text-white py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md focus:outline-none text-center"
                    id="submit-contact-form"
                  >
                    Submit Booking Request
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* FAQs list specifically for clinic visits */}
        <div className="mt-16 glass-panel border border-[#d19890]/20 rounded-3xl p-3 sm:p-10">
          <h3 className="font-serif text-xl font-bold text-[#4e2627] mb-6 flex items-center gap-2">
            <HelpCircle className="shrink-0 h-5 w-5 text-[#a46b66]" />
            <span>Clinic Visitation Guidelines (FAQ)</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-600">
            <div className="space-y-2">
              <h4 className="font-serif font-bold text-[#4e2627] text-sm">Do I need to carry previous medical reports?</h4>
              <p className="leading-relaxed">
                Yes, absolutely. To maximize the effectiveness of your consultation, please carry all previous pelvic scans, pregnancy trackers, baseline blood reports, or prescription booklets compiled by other doctors.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-serif font-bold text-[#4e2627] text-sm">Is walk-in consultation allowed?</h4>
              <p className="leading-relaxed">
                While we accommodate urgent emergencies directly, we strongly recommend booking a clinical appointment slot beforehand to avoid extended waiting times for pregnant mothers and elderly patients.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
