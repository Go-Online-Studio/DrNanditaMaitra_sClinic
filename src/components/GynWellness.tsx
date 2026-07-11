import { ShieldCheck, ArrowLeft, Heart, CheckCircle2, ChevronRight, Activity, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageSEO from './PageSEO';
import Service1 from '../../public/images/Service1.webp';

export default function GynWellness() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number>(0);

  const keyServices = [
    {
      title: 'Annual Women’s Health Checkups',
      description: 'Systematic screenings incorporating vital checks, breast examination guidelines, thyroid baseline evaluations, and pelvic assessments tailored strictly to your age profile.',
    },
    {
      title: 'Cervical Cancer Screening (Pap Smear & HPV DNA)',
      description: 'Evidence-based preventative testing matching FOGSI and WHO guidelines. Painless, swift diagnostic sampling to identify precancerous cellular mutations early.',
    },
    {
      title: 'PCOS / PCOD Comprehensive Management',
      description: 'Hormonal and lifestyle recalibration without over-medicating. Focus on metabolic health, insulin resistance, dietary adaptation, and symptom relief.',
    },
    {
      title: 'Menopause & Geriatric Gynecology',
      description: 'Easing transitions with evidence-supported estrogen guidelines, bone density osteoporosis preventative trackers, and gentle hormone balancing support.',
    },
  ];

  const faqs = [
    {
      q: 'How often should I get a Pap smear?',
      a: 'According to WHO and ACOG guidelines, women aged 21 to 29 should receive a Pap smear every 3 years. For those aged 30 to 65, co-testing with Pap smear and HPV DNA screening is recommended every 5 years for optimal safety.',
    },
    {
      q: 'Can PCOS be cured permanently?',
      a: 'PCOS is a metabolic and endocrine syndrome rather than a simple infection, meaning there is no single instantaneous "cure." However, it can be managed 100% successfully through lifestyle pacing, clinical dietary guidance, insulin optimization, and targeted medical therapy under Dr. Maitra’s supervision.',
    },
    {
      q: 'Do you offer non-surgical treatments for uterine fibroids?',
      a: 'Yes, absolutely. Uterine fibroids often do not require immediate surgery unless they are causing severe hemorrhage or physical obstruction. We prioritize medical therapies, hormonal feedback controls, and wait-and-watch monitoring to avoid unnecessary surgical strain.',
    },
  ];

  return (
    <div className="bg-[#F9F8F8] min-h-screen py-12" id="gyn-wellness-pillar">
      <PageSEO pageKey="gynecology" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb & Navigation */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-[#a46b66] hover:text-[#4e2627] transition-colors focus:outline-none"
          id="back-to-home-gyn"
        >
          <ArrowLeft className="shrink-0 h-4 w-4" /> Back to Homepage
        </button>

        {/* Header Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-16">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d19890]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#a46b66]">
              <Activity className="shrink-0 h-4 w-4" /> Lifetime Health Partnership
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-[#4e2627]">
              Gynecology & <br />Preventive Wellness
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Clinical gynecology is more than treating illness; it is about active prevention and life-stage pacing. Dr. Nandita Maitra works with women from adolescence through post-menopause, safeguarding reproductive health with rigorous scientific diagnostics.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="rounded-full bg-[#4e2627] hover:bg-[#a46b66] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-md focus:outline-none"
              >
                Schedule Appointment
              </button>
              <button
                onClick={() => navigate('/second-opinion')}
                className="rounded-full border border-[#d19890] text-[#4e2627] hover:bg-white/60 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none"
              >
                Ask for Second Opinion
              </button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#d19890]/10">
            <img
              src={Service1}
              alt="Gynecological checkup environment"
              className="w-full h-full object-cover aspect-[1.5/1]"
            />
            <div className="static m-2 sm:m-0 sm:absolute bottom-4 left-4 right-4 glass-panel-heavy p-4 rounded-xl border border-[#d19890]/20">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                <p className="text-[11px] text-slate-600">
                  <strong>Clinical Assurance:</strong> We use only sterile, single-use disposable instruments for all basic pelvic exams and pap smears to eliminate cross-contamination risk.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Services Grid */}
        <div className="space-y-6 mb-16">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4e2627] text-center">
            Evidence-Based Treatment Pathways
          </h3>
          <p className="text-xs text-slate-500 text-center max-w-xl mx-auto">
            Our treatment options prioritizes conservative medical therapy over aggressive, premature, or non-indicated surgical options.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-8">
            {keyServices.map((service, index) => (
              <div key={index} className="glass-card border border-[#d19890]/20 p-4 sm:p-6 rounded-2xl shadow-sm space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#a46b66] shrink-0" />
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
            <span>Common Diagnostic Questions (FAQ)</span>
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
          <h4 className="font-serif text-xl font-bold text-[#4e2627]">Have individual health questions?</h4>
          <p className="text-xs text-slate-600 max-w-lg mx-auto">
            Schedule a private, respectful consultation at our primary Vadodara clinic location. We maintain strict patient confidentiality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#4e2627] text-white hover:bg-[#a46b66] px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none"
            >
              Book Consultation Now
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
