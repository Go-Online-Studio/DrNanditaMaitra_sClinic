import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PageSEO from './PageSEO';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { validateName, validatePhone } from '../utils/validation';
import { submitToGoogleSheet } from '../services/googleSheets';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// Import local images
import BannerImage1 from '../../public/images/BannerImage1.webp';
import BannerImage2 from '../../public/images/BannerImage2.webp';
import BannerImage3 from '../../public/images/BannerImage3.webp';
import BannerImageMob1 from '../../public/images/BannerMob1.webp';
import BannerImageMob2 from '../../public/images/BannerMob2.webp';
import BannerImageMob3 from '../../public/images/BannerMob3.webp';

import { servicesData } from '../data/servicesData';
import { PageId, QuickInquiry, Testimonial } from '../types';
import { 
  Phone, 
  MessageSquare, 
  Clock, 
  Award, 
  Users, 
  Stethoscope, 
  Calendar, 
  CheckCircle, 
  User, 
  ChevronRight, 
  ShieldCheck, 
  Sparkles,
  Baby,
  Activity,
  HeartHandshake,
  HelpCircle
} from 'lucide-react';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';

export default function Home() {
  const navigate = useNavigate();
  const { getWhatsAppUrl } = useWhatsAppLink();
  // FAQ state
  const [openFaq, setOpenFaq] = useState<number>(0);
  // Swiper state is managed internally by the Swiper component.

  // Quick Inquiry Form State
  const [formData, setFormData] = useState<QuickInquiry>({
    patientName: '',
    patientPhone: '',
    reasonForVisit: '',
    preferredDate: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    const nameError = validateName(formData.patientName);
    if (nameError) {
      setFormError(nameError);
      return;
    }

    const phoneError = validatePhone(formData.patientPhone);
    if (phoneError) {
      setFormError(phoneError);
      return;
    }

    if (!formData.preferredDate) {
      setFormError('Preferred Date is required.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    // First store data in Google Sheet
    await submitToGoogleSheet({
      name: formData.patientName,
      number: formData.patientPhone,
      reason: formData.reasonForVisit,
      date: formData.preferredDate || 'N/A',
      email: 'N/A',
      description: formData.message || 'N/A'
    });

    // Prepare WhatsApp message
    const formattedMessage = `Hello Dr. Maitra's Clinic,

I would like to make a quick clinic inquiry:
• Name: ${formData.patientName.trim()}
• Phone Number: ${formData.patientPhone.trim()}
• Reason for Visit: ${formData.reasonForVisit}
• Preferred Date: ${formData.preferredDate.trim() || 'N/A'}
• Details: ${formData.message.trim() || 'N/A'}

Thank you!`;

    const whatsappUrl = getWhatsAppUrl(formattedMessage);
    
    setIsSubmitting(false);
    setFormSubmitted(true);

    // Open WhatsApp URL (triggers app on mobile and web client on desktop)
    window.open(whatsappUrl, '_blank');
  };

  const resetForm = () => {
    setFormData({
      patientName: '',
      patientPhone: '',
      reasonForVisit: '',
      preferredDate: '',
      message: ''
    });
    setFormSubmitted(false);
    setFormError('');
    setIsSubmitting(false);
  };

  // Testimonials list matching FOGSI/ACOG high standards
  const testimonials: Testimonial[] = [
    {
      id: '1',
      author: 'Priya Shah, Vadodara',
      text: 'Dr. Nandita Maitra provided exceptional care during my high-risk pregnancy. Her decades of teaching experience shine through as she explains everything clearly, removing all anxiety.',
      tag: 'Obstetrics & Maternity',
      rating: 5
    },
    {
      id: '2',
      author: 'Anjali Patel, Anand',
      text: 'The best gynecologist in Gujarat. She advised against unnecessary surgeries and helped manage my complex fibroid condition with evidence-based medical treatment. Extremely ethical!',
      tag: 'Gynecology & Wellness',
      rating: 5
    },
    {
      id: '3',
      author: 'Dr. Meera Vyas (MD), Vadodara',
      text: 'As a fellow medical professional, I highly recommend Dr. Maitra. Her clinical acumen is unparalleled. She is the ultimate expert for second opinions on gynecological surgeries.',
      tag: 'Second Opinion',
      rating: 5
    }
  ];

  // Gallery items
  const galleryItems = [
    {
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
      caption: 'The Welcoming Consultation Space - Private, calm, and tailored for absolute patient confidentiality.',
      alt: 'Private Consultation Area'
    },
    {
      src: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800',
      caption: 'Clinical Diagnostics & Screening Room - Equipped with modern, high-precision equipment.',
      alt: 'Diagnostics Room'
    },
    {
      src: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800',
      caption: 'Maternity Ultrasound & Evaluation Area - Comfort and care for expectant mothers.',
      alt: 'Maternity Evaluation Area'
    },
    {
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
      caption: 'Our Relaxing Lounge - Designed to keep families and patient companions perfectly comfortable.',
      alt: 'Patient Lounge Room'
    }
  ];

  const homeFaqs = [
    {
      q: "When should I see a gynecologist?",
      a: "You should see a gynecologist if you have irregular or painful periods, heavy bleeding, pelvic pain, unusual discharge, itching, fertility concerns, menopausal symptoms, or simply wish to have a routine women’s health check-up."
    },
    {
      q: "How often should I have a gynecology check-up?",
      a: "An annual gynecology check-up is generally advisable. You may need an earlier consultation if you have menstrual concerns, pelvic pain, abnormal bleeding, vaginal symptoms, fertility concerns, or are due for cervical cancer screening."
    },
    {
      q: "When should cervical cancer screening be done?",
      a: "Cervical cancer screening is usually advised for women between 30 and 65 years of age. At our clinic, HPV-based screening is preferred, as it helps identify women at higher risk for cervical precancer at an early stage. The type and interval of screening are guided by your age, previous reports, and individual risk factors."
    },
    {
      q: "What is a Pap smear and is it painful?",
      a: "A Pap smear is a simple test used to detect abnormal changes in cervical cells. The procedure is quick and generally causes only mild, brief discomfort."
    },
    {
      q: "What is colposcopy and when is it advised?",
      a: "Colposcopy is a detailed examination of the cervix using magnification for closer assessment. It is usually advised if your HPV test is positive, your Pap smear is abnormal, or the cervix requires further evaluation on examination."
    },
    {
      q: "When should I seek medical advice for heavy bleeding or irregular periods?",
      a: "Medical advice should be sought if bleeding is unusually heavy, prolonged, very irregular, occurs between periods, or happens after menopause. These symptoms should not be ignored and deserve proper evaluation."
    },
    {
      q: "Do I need an ultrasound for every gynecology problem?",
      a: "No. Ultrasound is advised only when clinically indicated. It can be helpful in evaluating abnormal bleeding, pelvic pain, fibroids, ovarian cysts, infertility concerns, and other gynecological conditions."
    },
    {
      q: "Can PCOS and menopause symptoms be treated effectively?",
      a: "Yes. Both PCOS and menopause-related concerns can usually be managed effectively with the right combination of lifestyle guidance, medical treatment, and follow-up care tailored to your individual needs."
    }
  ];

  return (
    <main className="bg-[#F9F8F8]" id="home-page-container">
      <PageSEO pageKey="home" />
      {/* 1. Hero Section: Full-width Swiper Carousel */}
      <section className="relative w-full bg-slate-900" id="hero-carousel-section">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
          navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
          loop={true}
          autoHeight={true}
          className="w-full"
        >
          {/* Slide 1 */} {/*sm:min-h-[calc(100vh-114px)]*/}
          <SwiperSlide>
            <div className="relative w-full min-h-[calc(100vh-81px)] flex items-center py-20 md:py-28">
              <div className="absolute inset-0 z-0">
                <picture>
                  <source media="(min-width: 1024px) and (orientation: landscape)" srcSet={BannerImage1} />
                  <img
                    src={BannerImageMob1}
                    alt="Compassionate Maternal Care"
                    className="h-full w-full object-cover object-center"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a0d0d]/90 to-[#1a0d0d]/40 z-10" />
              </div>
              <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl space-y-4 sm:space-y-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d19890]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#d19890] backdrop-blur-sm sm:text-sm">
                    <Sparkles className="shrink-0 h-4 w-4" /> 35+ Years of Dedicated Clinical Excellence
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#F9F8F8]">
                    Ethical and Evidence-Based <br />
                    <span className="text-[#d19890]">Gynecology</span> Care
                  </h2>
                  <p className="text-sm text-slate-200 sm:text-base md:text-lg leading-relaxed">
                    Guidance and clinical precision from former Medical College Professor, helping mothers navigate safe journeys from conception to childbirth.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-3">
                    <button
                      onClick={() => navigate('/services')}
                      className="rounded-full bg-[#d19890] hover:bg-[#a46b66] hover:text-white text-[#4e2627] px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-102 focus:outline-none"
                    >
                      Our Services
                    </button>
                    <button
                      onClick={() => navigate('/contact')}
                      className="rounded-full border border-white/30 bg-white/10 hover:bg-white/20 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:scale-102 focus:outline-none"
                    >
                      Schedule Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative w-full min-h-[calc(100vh-81px)] flex items-center py-20 md:py-28">
              <div className="absolute inset-0 z-0">
                <picture>
                  <source media="(min-width: 1024px) and (orientation: landscape)" srcSet={BannerImage2} />
                  <img
                    src={BannerImageMob2}
                    alt="Advanced Gynecological Diagnostics"
                    className="h-full w-full object-cover object-center"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a0d0d]/95 to-[#1a0d0d]/40 z-10" />
              </div>
              <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl space-y-4 sm:space-y-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d19890]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#d19890] backdrop-blur-sm sm:text-sm">
                    <Stethoscope className="shrink-0 h-4 w-4" /> Academic-Grade Consultation & Treatment
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#F9F8F8]">
                    Comprehensive <br />
                    <span className="text-[#d19890]">Gynecology & Wellness</span>
                  </h2>
                  <p className="text-sm text-slate-200 sm:text-base md:text-lg leading-relaxed">
                    Promoting women's lifelong health with state-of-the-art screenings, preventive guidelines, and minimal-intervention surgical protocols.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-3">
                    <button
                      onClick={() => navigate('/services')}
                      className="rounded-full bg-[#d19890] hover:bg-[#a46b66] hover:text-white text-[#4e2627] px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-102 focus:outline-none"
                    >
                      Our Services
                    </button>
                    <button
                      onClick={() => navigate('/contact')}
                      className="rounded-full bg-[#4e2627] border border-[#d19890]/40 hover:bg-[#a46b66] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:scale-102 focus:outline-none"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative w-full min-h-[calc(100vh-81px)] flex items-center py-20 md:py-28">
              <div className="absolute inset-0 z-0">
                <picture>
                  <source media="(min-width: 1024px) and (orientation: landscape)" srcSet={BannerImage3} />
                  <img
                    src={BannerImageMob3}
                    alt="Fertility and Family Planning"
                    className="h-full w-full object-cover object-center"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a0d0d]/95 to-[#1a0d0d]/40 z-10" />
              </div>
              <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl space-y-4 sm:space-y-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d19890]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#d19890] backdrop-blur-sm sm:text-sm">
                    <Award className="shrink-0 h-4 w-4" /> Trusted Teaching Faculty and Surgeon
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#F9F8F8]">
                    Empathetic <br />
                    <span className="text-[#d19890]">Fertility Evaluation</span>
                  </h2>
                  <p className="text-sm text-slate-200 sm:text-base md:text-lg leading-relaxed">
                    Providing transparent family planning answers, modern follicular studies, and ethical guidance aligned with global fertility standards.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-3">
                    <button
                      onClick={() => navigate('/services')}
                      className="rounded-full bg-[#d19890] hover:bg-[#a46b66] hover:text-white text-[#4e2627] px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-102 focus:outline-none"
                    >
                      Our Services
                    </button>
                    <a
                      href={getWhatsAppUrl("Hello Dr. Maitra's team, I'd like to inquire about a fertility consultation.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-emerald-600 hover:bg-emerald-700 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:scale-102 flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="shrink-0 h-4 w-4" /> Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation buttons */}
        <button className="hidden xl:flex swiper-button-prev-custom absolute left-4 top-1/2 z-30 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/30 text-white hover:bg-[#a46b66] transition-all focus:outline-none" aria-label="Previous Slide">
          &larr;
        </button>
        <button className="hidden xl:flex swiper-button-next-custom absolute right-4 top-1/2 z-30 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-black/30 text-white hover:bg-[#a46b66] transition-all focus:outline-none" aria-label="Next Slide">
          &rarr;
        </button>

        {/* Custom Pagination Container */}
        <div className="swiper-custom-pagination absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-2" />
      </section>

      {/* 2. Quick Action Bar (Sticky-on-mobile style immediately below Hero) */}
      <section className="relative z-30 mx-auto -mt-10 max-w-6xl px-4 pb-8" id="quick-action-bar">
        <div className="glass-panel-heavy rounded-2xl p-3 sm:p-6 shadow-xl border border-[#d19890]/20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            
            {/* Direct Contact Links / Emergency (4 Cols) */}
            <div className="lg:col-span-5 space-y-4 border-b border-[#d19890]/15 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
              <div className="flex items-center gap-2 text-[#a46b66]">
                <Clock className="shrink-0 h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Fast Contact Channels</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#4e2627]">
                Connect Instantly with Dr. Maitra’s Clinic
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For prompt triage, appointment confirmations, or direct driving landmarks to our Race Course office, use the immediate links below.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+912652331818"
                  className="flex flex-1 items-center justify-center gap-2.5 rounded-xl bg-red-50/60 backdrop-blur-xs hover:bg-red-100 border border-red-200 px-4 py-3 text-red-700 font-mono text-sm font-semibold transition-all shadow-sm"
                >
                  <Phone className="shrink-0 h-4.5 w-4.5 text-red-600 animate-pulse" />
                  <span>Call: 0265-2331818</span>
                </a>
              </div>
            </div>

            {/* Quick Inquiry Triage Form (7 Cols) */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="rounded-xl bg-emerald-50/80 backdrop-blur-xs p-4 sm:p-6 border border-emerald-100 text-center space-y-3">
                  <CheckCircle className="shrink-0 mx-auto h-12 w-12 text-emerald-600" />
                  <h4 className="font-serif text-lg font-bold text-[#4e2627]">Inquiry Received Securely</h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.patientName}</strong>. Our clinical administrator will review your medical reason (<span className="italic">{formData.reasonForVisit}</span>) and contact you at <span className="font-mono text-slate-900">{formData.patientPhone}</span> shortly to finalize your time slot.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-2 text-xs font-semibold text-[#a46b66] hover:underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#d19890]/10">
                    <h4 className="font-serif text-base font-bold text-[#4e2627] flex items-center gap-1.5 justify-center sm:justify-start">
                      <Calendar className="shrink-0 h-4.5 w-4.5 text-[#a46b66]" />
                      <span>Quick Clinic Inquiry & Triage</span>
                    </h4>
                    <span className="text-[10px] glass-badge text-[#4e2627] px-2.5 py-1.5 rounded-md font-bold uppercase tracking-wider text-center self-center sm:self-auto">
                      DPDP Act & Confidentiality Compliant
                    </span>
                  </div>

                  {formError && (
                    <div className="text-xs text-red-600 bg-red-50/80 p-2 rounded-lg font-semibold border border-red-200">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="patientName" className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="patientName"
                        id="patientName"
                        required
                        value={formData.patientName}
                        onChange={handleInputChange}
                        placeholder="e.g., Sharda Patel"
                        className="w-full text-xs glass-input p-3 rounded-lg"
                      />
                    </div>

                    <div>
                      <label htmlFor="patientPhone" className="block text-xs font-semibold text-slate-700 mb-1">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        name="patientPhone"
                        id="patientPhone"
                        required
                        value={formData.patientPhone}
                        onChange={handleInputChange}
                        placeholder="e.g., +91 98XXX XXXXX"
                        className="w-full text-xs font-mono glass-input p-3 rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="reasonForVisit" className="block text-xs font-semibold text-slate-700 mb-1">
                        Primary Reason for Visit *
                      </label>
                      <select
                        name="reasonForVisit"
                        id="reasonForVisit"
                        required
                        value={formData.reasonForVisit}
                        onChange={handleInputChange}
                        className="w-full text-xs glass-input p-3 rounded-lg bg-white/50"
                      >
                        <option value="">-- Choose Care Reason --</option>
                        <option value="General Consultation">General Consultation / Wellness</option>
                        <option value="Pregnancy Confirm / Antenatal">Pregnancy Confirmation & Maternity</option>
                        <option value="Fertility Evaluation">Infertility / Conception Issues</option>
                        <option value="Second Surgical Opinion">Second Surgical Opinion</option>
                        <option value="Menopause / PCOS Care">Menopause / PCOS & Hormonal Care</option>
                        <option value="Diagnostics or Ultrasound">Ultrasound or Screenings</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="preferredDate" className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        id="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full text-xs glass-input p-3 rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1">
                      Additional Details / Description (Optional)
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share any details about your health concern or preferences..."
                      className="w-full text-xs glass-input p-3 rounded-lg resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 rounded-full bg-[#4e2627] hover:bg-[#a46b66] text-white py-3 px-4 text-xs font-bold uppercase tracking-wide transition-all shadow-lg hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-[#a46b66] disabled:opacity-50 disabled:cursor-not-allowed"
                      id="submit-quick-inquiry-btn"
                    >
                      {isSubmitting ? 'Sending Confidential Inquiry...' : 'Send Confidential Inquiry'}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services Grid: 8 Services */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="clinical-services-grid">
        <div className="text-center space-y-3 mb-12">
          <span className="inline-block text-xs font-semibold tracking-wider text-[#a46b66] uppercase bg-[#d19890]/10 px-3.5 py-1 rounded-full">
            Our Services
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#4e2627]">
            Gynecology &amp; Women's Health Services
          </h3>
          <p className="mx-auto max-w-2xl text-sm text-slate-600">
            At Gynecology Clinic, we offer thoughtful, evidence-based gynecology care with a strong emphasis on prevention, accurate diagnosis, and individualized treatment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => navigate(`/services/${service.id}`)}
                className="group cursor-pointer rounded-2xl bg-white border border-[#d19890]/20 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#a46b66]/30 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.heading}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 backdrop-blur text-[#a46b66] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="font-serif text-lg font-bold text-[#4e2627] group-hover:text-[#a46b66] transition-colors mb-2 line-clamp-2">
                    {service.heading}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 flex-grow mb-4">
                    {service.shortDesc}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d19890] group-hover:text-[#a46b66] transition-colors">
                    Learn More <ChevronRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all services CTA */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center gap-2 rounded-full bg-[#4e2627] hover:bg-[#a46b66] text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-102 focus:outline-none"
            id="home-services-view-all"
          >
            <span>View All Services</span>
            <ChevronRight className="shrink-0 h-4 w-4" />
          </button>
        </div>
      </section>

      {/* 4. Trust & Statistics */}
      {/* <section className="bg-[#4e2627] text-white py-20 relative overflow-hidden" id="clinical-metrics-section">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,152,144,0.12),transparent_45%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col gap-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
 
               <div className="space-y-6">
                 <span className="text-xs font-bold uppercase tracking-widest text-[#d19890] bg-[#d19890]/10 px-3.5 py-1 rounded-full border border-[#d19890]/20 inline-block mb-3">
                   Academic & Clinical Heritage
                 </span>
                 <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                   Academic Leadership. <br />Decades of True Clinical Wisdom.
                 </h3>
                 <p className="text-base text-[#d3ada7] leading-relaxed">
                   Dr. Nandita Maitra, MBBS, MD, FRCOG, retired as Additional Professor and Unit Head from Medical College and SSG Hospital, Baroda, after 33 years of distinguished academic service and clinical teaching. She brings this depth of scientific insight directly to patient consultations.
                 </p>
                 <div className="flex flex-col gap-4 pt-2">
                   <div className="flex items-start gap-3">
                     <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#d19890]" />
                     <span className="text-sm text-slate-200">Holds prestigious Fellow of the Royal College of Obstetricians and Gynaecologists (FRCOG, UK)</span>
                   </div>
                   <div className="flex items-start gap-3">
                     <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#d19890]" />
                     <span className="text-sm text-slate-200">Published over 60 peer-reviewed research papers and contributed 12 book chapters</span>
                   </div>
                 </div>

                 <div className="pt-6">
                   <button
                     onClick={() => navigate('/about')}
                     className="inline-flex items-center gap-2 rounded-full bg-[#d19890] hover:bg-white hover:text-[#4e2627] text-[#4e2627] px-8 py-3.5 text-sm font-bold uppercase tracking-wider transition-all shadow-md focus:outline-none"
                   >
                     <span>Read Academic Bio</span>
                     <ChevronRight className="shrink-0 h-5 w-5" />
                   </button>
                 </div>
               </div>


               <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] lg:aspect-square xl:aspect-[4/3] shadow-2xl border border-white/[0.05] group">
                 <img 
                   src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1000" 
                   alt="Dr. Nandita Maitra - Senior OBGYN Consultant" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#4e2627] via-[#4e2627]/20 to-transparent opacity-80" />
                 <div className="absolute bottom-3 left-3  right-3  md:bottom-6 md:left-6 md:right-6">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white">
                     <p className="text-sm font-bold">MBBS, MD, FRCOG</p>
                     <p className="text-xs text-slate-300 mt-1">33+ Years of Clinical & Academic Excellence</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 5. Patient Testimonials: 3-card Swiper */}
      {/* <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="patient-testimonials">
        <div className="text-center space-y-3 mb-12">
          <span className="inline-block text-xs font-semibold tracking-wider text-[#a46b66] uppercase bg-[#d19890]/10 px-3.5 py-1 rounded-full">
            Patient Words & Validation
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#4e2627]">
            Trusted by Mothers & Families
          </h3>
          <p className="mx-auto max-w-2xl text-sm text-slate-600">
            Read verified reviews from patient families in Vadodara highlighting Dr. Maitra's comforting, clinical, and transparent treatment methodology.
          </p>
        </div>

        <div className="relative px-4 sm:px-8">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 6000 }}
            pagination={{ clickable: true, el: '.swiper-testimonials-pagination' }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="h-full rounded-2xl glass-card border border-[#d19890]/20 p-4 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center justify-between border-t border-[#d19890]/10 pt-4">
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#4e2627]">{t.author}</h4>
                      <span className="text-[10px] font-semibold text-[#a46b66]">{t.tag}</span>
                    </div>
                    <div className="flex items-center text-amber-500 gap-0.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="text-sm">&#9733;</span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="swiper-testimonials-pagination flex justify-center gap-2 mt-4" />
        </div>
      </section> */}

      {/* 6. Clinic Environment Gallery */}
      <section className="bg-white/30 backdrop-blur-md border-t border-b border-[#d19890]/10 py-16" id="clinic-gallery">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <span className="inline-block text-xs font-bold tracking-wider text-[#a46b66] uppercase bg-[#d19890]/15 px-3.5 py-1 rounded-full">
              Tour Our Practice
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#4e2627]">
              A Reassuring, Well-Equipped Sanctuary
            </h3>
            <p className="mx-auto max-w-2xl text-sm text-slate-600">
              Dr. Nandita Maitra's clinic is specifically engineered to offer safe, quiet, and highly sanitised consultation zones. Take an interactive preview of our healing environment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border border-[#d19890]/15 glass-card p-2 shadow-sm transition-transform duration-300 hover:scale-103">
                <Link
                  to="/about"
                  className="block relative h-48 overflow-hidden rounded-xl"
                  aria-label={`Learn more about ${item.alt}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#4e2627]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="rounded-full bg-white/95 px-3.5 py-1.5 text-[11px] font-bold text-[#4e2627] shadow-md">
                      About Our Practice
                    </span>
                  </div>
                </Link>
                <div className="mt-3 px-1 pb-1">
                  <h4 className="font-serif text-sm font-bold text-[#4e2627]">{item.alt}</h4>
                  <p className="text-[10px] text-slate-500 line-clamp-1">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-xs text-slate-500 italic flex items-center justify-center gap-2">
            <ShieldCheck className="shrink-0 h-4 w-4 text-[#a46b66]" />
            <span>All clinical rooms undergo deep-cleansing sanitisation cycles daily as mandated by healthcare standards.</span>
          </div>

        </div>
      </section>

      {/* 6.5. Frequently Asked Questions */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8" id="home-faqs-section">
        <div className="glass-panel border border-[#d19890]/20 rounded-3xl p-4 sm:p-10">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4e2627] mb-6 flex items-center gap-2">
            <HelpCircle className="shrink-0 h-5 w-5 text-[#a46b66]" />
            <span>Frequently Asked Questions</span>
          </h3>
          <div className="space-y-4">
            {homeFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-[#d19890]/10 pb-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? 0 : idx)}
                    className="w-full flex justify-between items-center text-left py-2 font-serif text-sm font-semibold text-[#4e2627] focus:outline-none cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#a46b66] text-lg">{isOpen ? '−' : '+'}</span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100 mt-2 pl-2 border-l-2 border-[#d19890]' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
