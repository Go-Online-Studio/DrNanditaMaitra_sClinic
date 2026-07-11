import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Search, HelpCircle, Phone } from 'lucide-react';
import PageSEO from './PageSEO';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  id: string;
  label: string;
  color: string;
  items: FAQItem[];
}

const categories: FAQCategory[] = [
  {
    id: 'general',
    label: 'General & Appointments',
    color: '#4e2627',
    items: [
      {
        q: 'How do I book an appointment with Dr. Nandita Maitra?',
        a: 'You can book an appointment by calling our clinic at 0265-2331818, via WhatsApp at +91 90810 05399, by filling out the form on our Contact page, or by visiting our clinic at 102, Race Course Medical Centre, Race Course, Vadodara.',
      },
      {
        q: 'What are the clinic hours?',
        a: 'Monday to Saturday: 10:30 AM – 12:30 PM and 5:00 PM – 7:00 PM. The clinic is closed on Sundays and public holidays. We suggest calling in advance to confirm availability.',
      },
      {
        q: 'How often should I visit a gynecologist for a checkup?',
        a: 'Women aged 21 and above should have at least one annual gynecological examination. If you have conditions like PCOS, fertility issues, menopause concerns, or are pregnant, your visits will be scheduled according to your specific care plan.',
      },
      {
        q: 'What documents should I bring to my first appointment?',
        a: 'Please bring any past medical files, ultrasound/scan reports, blood test results, prescriptions, and a valid photo ID. If you have had previous surgeries, please bring the operation notes or discharge summaries.',
      },
    ],
  },
  {
    id: 'services',
    label: 'Clinical Services FAQ',
    color: '#a46b66',
    items: [
      {
        q: 'What is a colposcopy and when is it recommended?',
        a: 'A colposcopy is a detailed examination of the cervix, vagina, and vulva using a specialized magnifying instrument. It is recommended for women with abnormal Pap smears, positive HPV tests, persistent vaginal discharge, postcoital bleeding, or suspicious vulval findings.',
      },
      {
        q: 'When is a gynecologic ultrasound indicated?',
        a: 'Pelvic ultrasound is used to evaluate conditions like abnormal uterine bleeding, pelvic pain, fibroids, ovarian cysts, endometrial abnormalities, or fertility concerns. Findings are carefully reviewed in clinical context.',
      },
      {
        q: 'What does a fertility consultation involve?',
        a: 'We perform a systematic evaluation including menstrual history, ovulation tracking, tubal or uterine assessment, and ovarian reserve evaluation. The focus is to identify the causes of conception issues and map out clear next steps.',
      },
      {
        q: 'How is PCOS managed at the clinic?',
        a: 'Since PCOS is a metabolic and endocrine disorder, we focus on individualized treatment. This includes cycle regulation, targeted medical therapies, lifestyle advice, and managing symptoms like acne, hair growth, or fertility issues.',
      },
      {
        q: 'What support is available for menopause?',
        a: 'We offer consultations for perimenopause and menopause symptoms such as hot flashes, sleep issues, irregular bleeding, and vaginal dryness, alongside long-term counseling on bone and cardiovascular health.',
      },
      {
        q: 'Do you offer second opinions for gynecological surgeries?',
        a: 'Yes. We provide thorough second opinion consultations for complex gynecological issues, abnormal reports, or recommended surgical procedures to help you understand all treatment pathways before deciding.',
      },
    ],
  },
];

export default function FAQ() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [openItem, setOpenItem] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const activeCategoryData = categories.find((c) => c.id === activeCategory)!;

  const filteredItems = searchQuery.trim()
    ? categories
        .flatMap((c) => c.items.map((item) => ({ ...item, category: c.label })))
        .filter(
          (item) =>
            item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.a.toLowerCase().includes(searchQuery.toLowerCase()),
        )
    : activeCategoryData.items.map((item) => ({ ...item, category: activeCategoryData.label }));

  const toggleItem = (key: string) => {
    if (openItem === key) {
      setOpenItem(null);
    } else {
      setOpenItem(key);
    }
  };

  return (
    <div className="bg-[#F9F8F8] min-h-screen" id="faq-page">
      <PageSEO pageKey="faq" />

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#4e2627] via-[#6b3535] to-[#4e2627] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-[#d19890]/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-[#a46b66]/10 blur-2xl" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-[#d19890] hover:text-white transition-colors focus:outline-none"
            id="faq-back-btn"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#d19890]/20 border border-[#d19890]/30">
              <HelpCircle className="h-7 w-7 text-[#d19890]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#d19890]/70">Help Centre</span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">Frequently Asked Questions</h1>
            </div>
          </div>

          <p className="text-[#F9F8F8]/75 text-sm leading-relaxed max-w-2xl mb-8">
            Common questions about women's health, gynecology, fertility, pregnancy, and our clinic — answered by Dr. Nandita Maitra.
          </p>

          {/* Search Box */}
          <div className="relative max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#d19890]/60 pointer-events-none" />
            <input
              type="text"
              placeholder="Search any question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full bg-white/10 border border-white/20 pl-11 pr-5 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#d19890]/50 focus:bg-white/15 transition-all backdrop-blur-sm"
              id="faq-search"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        {!searchQuery && (
          /* Category Tabs */
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenItem(null); }}
                className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none border ${
                  activeCategory === cat.id
                    ? 'bg-[#4e2627] text-white border-[#4e2627] shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#d19890]/40 hover:text-[#4e2627]'
                }`}
                id={`faq-tab-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {searchQuery && (
          <p className="text-sm text-slate-500 mb-6">
            Showing <strong>{filteredItems.length}</strong> result{filteredItems.length !== 1 ? 's' : ''} for &ldquo;<strong>{searchQuery}</strong>&rdquo;
          </p>
        )}

        {/* FAQ Items */}
        <div className="space-y-3">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <HelpCircle className="mx-auto h-12 w-12 text-slate-300 mb-4" />
              <p className="text-slate-500 font-medium">No results found for &ldquo;{searchQuery}&rdquo;</p>
              <p className="text-slate-400 text-sm mt-1">Try different keywords or browse the categories above.</p>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const key = `${item.q}-${idx}`;
              const isOpen = openItem === key;
              return (
                <div
                  key={key}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-[#d19890]/40 shadow-md bg-white' : 'border-slate-200 bg-white hover:border-[#d19890]/25 hover:shadow-sm'
                  }`}
                  id={`faq-item-${idx}`}
                >
                  <button
                    onClick={() => toggleItem(key)}
                    className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-colors ${
                          isOpen ? 'bg-[#4e2627] text-white' : 'bg-[#d19890]/15 text-[#a46b66]'
                        }`}
                      >
                        Q
                      </span>
                      <div>
                        <p className={`text-sm font-bold transition-colors ${isOpen ? 'text-[#4e2627]' : 'text-slate-700'}`}>
                          {item.q}
                        </p>
                        {searchQuery && 'category' in item && (
                          <span className="mt-1 inline-block text-[10px] font-semibold uppercase tracking-wider text-[#a46b66] bg-[#d19890]/10 px-2 py-0.5 rounded-full">
                            {item.category}
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronDown
                      className={`mt-0.5 shrink-0 h-4 w-4 text-[#a46b66] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pl-[3.75rem]">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[10px] font-bold text-emerald-700">
                          A
                        </span>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 rounded-2xl border border-[#d19890]/20 bg-gradient-to-br from-[#d19890]/5 to-[#4e2627]/5 p-8">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#4e2627]">
              <Phone className="h-7 w-7 text-[#d19890]" />
            </div>
            <div className="text-center sm:text-left flex-1">
              <h2 className="font-serif text-xl font-bold text-[#4e2627] mb-1">Still Have a Question?</h2>
              <p className="text-sm text-slate-600">
                Can't find what you're looking for? Speak directly with our clinic team — we're happy to help.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="tel:+912652331818"
                className="inline-flex items-center gap-2 rounded-full bg-[#4e2627] hover:bg-[#a46b66] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none"
              >
                <Phone className="h-3.5 w-3.5" /> Call Clinic
              </a>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#4e2627]/20 bg-white hover:bg-slate-50 text-[#4e2627] px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
