import { ShieldCheck, ArrowLeft, Stethoscope, CheckCircle2, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageSEO from './PageSEO';
import Service4 from '../../public/images/Service4.webp';

export default function Diagnostics() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number>(0);

  const keyDiagnosticServices = [
    {
      title: 'In-Clinic Gyn & Obstetric Ultrasound',
      description: 'Using high-resolution diagnostic transducers to perform dating scans, anomaly assessments, fetal weight tracking, uterine tissue analysis, and endometrial thickness maps.',
    },
    {
      title: 'Preventative Cervical and Breast Screenings',
      description: 'Systematic clinical examinations paired with Pap smears, HPV DNA tests, and professional breast palpation guidelines to identify early neoplastic changes.',
    },
    {
      title: 'Comprehensive Hormonal Blood Panels',
      description: 'Accurate profiling of reproductive hormones including Thyroid (TSH), Prolactin, AMH, LH, FSH, and metabolic factors to identify underlying health blocks.',
    },
    {
      title: 'Advanced Prenatal Genetic Screening (NIPT)',
      description: 'Safe maternal blood sampling for Non-Invasive Prenatal Testing (NIPT) to screen for chromosomal abnormalities (Down Syndrome) with maximum accuracy.',
    },
  ];

  const faqs = [
    {
      q: 'Do I need a full bladder for my pelvic ultrasound?',
      a: 'Yes. For transabdominal pelvic scans (TAS), a comfortably full bladder is essential. It acts as an acoustic window, lifting the bowel out of the pelvis and allowing Dr. Maitra to view the uterus and ovaries clearly. This is not required for transvaginal scans (TVS).',
    },
    {
      q: 'How long does it take to receive Pap smear results?',
      a: 'Cervical smear cells are processed via leading certified pathology laboratories. Results are usually compiled within 3 to 5 business days. We contact you immediately if any cytological abnormalities require follow-up.',
    },
    {
      q: 'Are your ultrasound procedures safe for my baby?',
      a: 'Absolutely. Diagnostic medical ultrasound utilizes non-ionizing high-frequency sound waves, not radiation. It has an exceptional safety record over multiple decades. We follow ALARA (As Low As Reasonably Achievable) power settings to safeguard your child.',
    },
  ];

  return (
    <div className="bg-[#F9F8F8] min-h-screen py-12" id="diagnostics-pillar">
      <PageSEO pageKey="diagnostics" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-[#a46b66] hover:text-[#4e2627] transition-colors focus:outline-none"
          id="back-to-home-dia"
        >
          <ArrowLeft className="shrink-0 h-4 w-4" /> Back to Homepage
        </button>

        {/* Header */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-16">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d19890]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#a46b66]">
              <Stethoscope className="shrink-0 h-4 w-4" /> Scholarly Diagnostic Precision
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-[#4e2627]">
              Diagnostics & <br />Screenings
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Clinical precision begins with flawless diagnostics. Dr. Nandita Maitra integrates modern, low-emission ultrasound imaging and state-of-the-art laboratory assays. We ensure each scan and test is analyzed with academic rigor, eliminating diagnostic speculation.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="rounded-full bg-[#4e2627] hover:bg-[#a46b66] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-md focus:outline-none"
              >
                Schedule Diagnostic Scan
              </button>
              <a
                href="tel:+912652331818"
                className="rounded-full border border-[#d19890] text-[#4e2627] hover:bg-white/60 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                Call to Book: 0265-2331818
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#d19890]/10">
            <img
              src={Service4}
              alt="High-tech diagnostic environment"
              className="w-full h-full object-cover aspect-[1.5/1]"
            />
            <div className="static m-2 sm:m-0 sm:absolute bottom-4 left-4 right-4 glass-panel-heavy p-4 rounded-xl border border-[#d19890]/20">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                <p className="text-[11px] text-slate-600">
                  <strong>Diagnostic Standard:</strong> All clinical laboratory samples are sent exclusively to NABL-accredited, premium processing centers for flawless accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <div className="space-y-6 mb-16">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4e2627] text-center">
            Pioneering In-Clinic Testing
          </h3>
          <p className="text-xs text-slate-500 text-center max-w-xl mx-auto">
            Our diagnostics are fully customized based on patient profiles to avoid repetitive or non-indicated blood tests.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-8">
            {keyDiagnosticServices.map((service, index) => (
              <div key={index} className="glass-card border border-[#d19890]/20 p-4 sm:p-6 rounded-2xl shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="shrink-0 h-5 w-5 text-[#a46b66]" />
                  <h4 className="font-serif text-base font-bold text-[#4e2627]">{service.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="glass-panel border border-[#d19890]/20 rounded-3xl p-4 sm:p-10 mb-16">
          <h3 className="font-serif text-xl font-bold text-[#4e2627] mb-6 flex items-center gap-2">
            <HelpCircle className="shrink-0 h-5 w-5 text-[#a46b66]" />
            <span>Diagnostic & Screening FAQs</span>
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
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

        {/* Contact Strip */}
        <div className="rounded-2xl glass-panel-heavy border border-[#d19890]/20 p-4 sm:p-8 text-center space-y-4">
          <h4 className="font-serif text-xl font-bold text-[#4e2627]">In-depth diagnostic safety you can trust</h4>
          <p className="text-xs text-slate-600 max-w-lg mx-auto">
            Plan your diagnostic ultrasound or wellness blood screens today with Dr. Nandita Maitra at Race Course, Vadodara.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#4e2627] text-white hover:bg-[#a46b66] px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none"
            >
              Book Diagnostic Visit
            </button>
            <a
              href="tel:+912652331818"
              className="rounded-full border border-[#d19890] bg-white/40 hover:bg-white text-[#4e2627] px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all font-mono"
            >
              0265-2331818
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
