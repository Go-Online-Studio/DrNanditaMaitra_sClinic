import { ShieldCheck, ArrowLeft, HeartHandshake, CheckCircle2, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageSEO from './PageSEO';
import Service3 from '../../public/images/Service3.webp';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';

export default function Fertility() {
  const navigate = useNavigate();
  const { getWhatsAppUrl } = useWhatsAppLink();
  const [openFaq, setOpenFaq] = useState<number>(0);

  const keyFertilityServices = [
    {
      title: 'Primary & Secondary Infertility Workups',
      description: 'Systematic diagnosis for couples trying to conceive. Evaluating ovulatory factors, tubal patency (HSG), uterine anomalies, and baseline semen profiles.',
    },
    {
      title: 'Follicular Studies & Ovulation Tracking',
      description: 'Ultra-precise in-clinic ultrasound monitoring to trace follicle recruitment, maturation, and timely release, optimizing the natural window of conception.',
    },
    {
      title: 'Ovarian Reserve Assessment (AMH)',
      description: 'Scientific blood analysis evaluating Anti-Müllerian Hormone (AMH) and Antral Follicle Counts (AFC) to map reproductive potential honestly and transparently.',
    },
    {
      title: 'Ethical Contraception & Family Planning',
      description: 'Providing a comprehensive range of family planning solutions including barrier counseling, oral contraceptive profiling, and safe intrauterine device (IUD/Copper T) insertion.',
    },
  ];

  const faqs = [
    {
      q: 'How long should we try to conceive naturally before consulting Dr. Maitra?',
      a: 'If the female partner is under 35 years of age, we recommend attempting natural conception for 12 months before initiating a clinical fertility evaluation. If she is 35 or older, we strongly advise consulting us after 6 months of active trying, as ovarian reserves decline with age.',
    },
    {
      q: 'What does a follicular study involve?',
      a: 'A follicular study is a series of 3 to 5 rapid, painless transvaginal ultrasounds conducted across specific days of your menstrual cycle (usually starting around Day 9 or 10). It allows us to monitor the growth of the dominant follicle, confirm ovulation, and advice on optimal intercourse windows.',
    },
    {
      q: 'Do you offer IVF (In-Vitro Fertilization) directly at the clinic?',
      a: 'We specialize in primary and secondary fertility evaluations, hormonal correction, ovulation induction, and follicular monitoring. We deliberately focus on helping couples conceive through natural or minimally invasive pathways. If advanced tertiary IVF/ICSI cycles are clinically mandatory, we provide honest, un-commercialized expert referrals to top accredited IVF labs.',
    },
  ];

  return (
    <div className="bg-[#F9F8F8] min-h-screen py-12" id="fertility-pillar">
      <PageSEO pageKey="fertility" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-[#a46b66] hover:text-[#4e2627] transition-colors focus:outline-none"
          id="back-to-home-fer"
        >
          <ArrowLeft className="shrink-0 h-4 w-4" /> Back to Homepage
        </button>

        {/* Header */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-16">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d19890]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#a46b66]">
              <HeartHandshake className="shrink-0 h-4 w-4" /> Honest Fertility Answers
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-[#4e2627]">
              Fertility & <br />Family Planning
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Navigating reproductive delays can feel overwhelming, especially in a landscape full of heavily commercialized clinics. Dr. Nandita Maitra stands for non-commercialized, evidence-led fertility evaluations. We investigate with transparency and guide couples towards natural, safe conception with zero commercial pressures.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="rounded-full bg-[#4e2627] hover:bg-[#a46b66] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-md focus:outline-none"
              >
                Request Infertility Check
              </button>
              <a
                href={getWhatsAppUrl("Hello Dr. Maitra's team, I'd like to learn more about fertility and family planning.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
              >
                WhatsApp Fertility Desk
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#d19890]/10">
            <img
              src={Service3}
              alt="Ethical medical counseling"
              className="w-full h-full object-cover aspect-[1.5/1]"
            />
            <div className="static m-2 sm:m-0 sm:absolute bottom-4 left-4 right-4 glass-panel-heavy p-4 rounded-xl border border-[#d19890]/20">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                <p className="text-[11px] text-slate-600">
                  <strong>Ethics First:</strong> Over 70% of couples seeking fertility counseling achieve pregnancy through ovulation correction and lifestyle pacing, without needing expensive IVF.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Fertility Services */}
        <div className="space-y-6 mb-16">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4e2627] text-center">
            Scientific Conception Support
          </h3>
          <p className="text-xs text-slate-500 text-center max-w-xl mx-auto">
            We focus on systematic testing to identify precise blockages, then execute targeted clinical interventions.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-8">
            {keyFertilityServices.map((service, index) => (
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
            <span>Fertility & Evaluation FAQs</span>
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
          <h4 className="font-serif text-xl font-bold text-[#4e2627]">Uncover Your Reproductive Health Honestly</h4>
          <p className="text-xs text-slate-600 max-w-lg mx-auto">
            Let Dr. Nandita Maitra evaluate your fertility markers with academic rigor. Schedule your initial consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#4e2627] text-white hover:bg-[#a46b66] px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none"
            >
              Book Fertility Evaluation
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
