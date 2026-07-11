import { ShieldCheck, ArrowLeft, Baby, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageSEO from './PageSEO';
import Service2 from '../../public/images/Service2.webp';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';

export default function Obstetrics() {
  const navigate = useNavigate();
  const { getWhatsAppUrl } = useWhatsAppLink();
  const [openFaq, setOpenFaq] = useState<number>(0);

  const keyMaternityServices = [
    {
      title: 'High-Risk Pregnancy Optimization',
      description: 'Extensive tracking for patients with Gestational Diabetes, Pre-eclampsia (pregnancy hypertension), advanced maternal age (35+), or multi-pregnancy challenges.',
    },
    {
      title: 'Routine Antenatal Care (Pregnancy Milestones)',
      description: 'Systematic checks covering growth monitoring, maternal nutritional guidelines, baseline supplements, fetal heartbeat tracking, and routine blood/urine profiles.',
    },
    {
      title: 'Natural Safe Birthing Preparation',
      description: 'Preparing the expectant mother physically and emotionally. Encouraging natural safe births, breathing strategies, pelvic tone exercises, and avoiding arbitrary C-sections.',
    },
    {
      title: 'Post-Partum Rehabilitation & Lactation Support',
      description: 'Post-delivery guidance focusing on maternal recovery, emotional health, pelvic floor recovery, and breastfeeding counseling.',
    },
  ];

  const faqs = [
    {
      q: 'How do you define a high-risk pregnancy?',
      a: 'A pregnancy is classed as high-risk if there are active co-morbid factors such as maternal age over 35, chronic hypertension, gestational diabetes, thyroid imbalances, multiple gestations (twins), history of recurrent pregnancy loss, or active fetal growth restrictions. Dr. Maitra specializes in resolving these conditions safely.',
    },
    {
      q: 'Do you recommend a Cesarean section (C-section) over a natural birth?',
      a: 'We strictly support natural, vaginal childbirth as the default preference unless there are clear, non-negotiable medical indications (such as placenta previa, breech positioning, active fetal distress, or cephalopelvic disproportion). We do not perform non-indicated elective surgeries.',
    },
    {
      q: 'When should I schedule my first prenatal ultrasound?',
      a: 'Your first dating and viability ultrasound is usually scheduled between weeks 6 and 8 of pregnancy. This confirms the gestational sac location, tracks the fetal heartbeat, and provides an accurate estimated due date (EDD).',
    },
  ];

  return (
    <div className="bg-[#F9F8F8] min-h-screen py-12" id="obstetrics-maternity-pillar">
      <PageSEO pageKey="obstetrics" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-[#a46b66] hover:text-[#4e2627] transition-colors focus:outline-none"
          id="back-to-home-obs"
        >
          <ArrowLeft className="shrink-0 h-4 w-4" /> Back to Homepage
        </button>
 
        {/* Header */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-16">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d19890]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#a46b66]">
              <Baby className="shrink-0 h-4 w-4" /> Comprehensive Maternity Care
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-[#4e2627]">
              Pre Conception & Early Pregnancy Care
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Welcoming a child is a sacred, deeply personal milestone. Dr. Nandita Maitra provides scholarly, empathetic obstetric management, ensuring mothers in Vadodara experience a secure, evidence-guided, and highly customized journey from early conception to safe postpartum recovery.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="rounded-full bg-[#4e2627] hover:bg-[#a46b66] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all shadow-md focus:outline-none"
              >
                Book Antenatal Consultation
              </button>
              <a
                href={getWhatsAppUrl("Hello Dr. Maitra's team, I'd like to inquire about maternity packages and consultations.")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
              >
                WhatsApp Prenatal Team
              </a>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#d19890]/10">
            <img
              src={Service2}
              alt="Caring maternal environment"
              className="w-full h-full object-cover aspect-[1.5/1]"
            />
            <div className="static m-2 sm:m-0 sm:absolute bottom-4 left-4 right-4 glass-panel-heavy p-4 rounded-xl border border-[#d19890]/20">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                <p className="text-[11px] text-slate-600">
                  <strong>Expectant Mothers Note:</strong> We integrate precise fetal cardiotocography (CTG) monitoring to track your baby’s heartbeat safely during labor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Maternity Pillars */}
        <div className="space-y-6 mb-16">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4e2627] text-center">
            Pillars of Safe Motherhood
          </h3>
          <p className="text-xs text-slate-500 text-center max-w-xl mx-auto">
            From first-trimester confirmation to postpartum lactation guidance, our care matches WHO motherhood standards.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-8">
            {keyMaternityServices.map((service, index) => (
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
            <span>Maternity & Pregnancy FAQs</span>
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
          <h4 className="font-serif text-xl font-bold text-[#4e2627]">Embark on a safe maternity journey today</h4>
          <p className="text-xs text-slate-600 max-w-lg mx-auto">
            Book an extensive baseline pregnancy appointment with Dr. Nandita Maitra at our clinic in Race Course, Vadodara.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#4e2627] text-white hover:bg-[#a46b66] px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none"
            >
              Book Maternity Visit
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
