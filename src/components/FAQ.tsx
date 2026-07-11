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
        a: 'You can book an appointment by calling our clinic at 0265-2331818 or WhatsApp-ing us at +91 90810 05399, by filling out the appointment form on our Contact page, or by visiting our clinic directly at 102, Race Course Medical Centre, Race Course, Vadodara.',
      },
      {
        q: 'What are the clinic hours?',
        a: 'Monday to Friday: 10:00 AM – 1:00 PM and 4:00 PM – 7:00 PM. The clinic is closed on Sundays and public holidays. We recommend calling ahead to confirm availability.',
      },
      {
        q: 'How often should I visit a gynecologist for a routine checkup?',
        a: 'Women aged 21 and above should have at least one annual gynecological examination. If you have conditions like PCOS, fibroids, endometriosis, or are pregnant, your visit frequency will be tailored to your care plan — often every 4 to 8 weeks.',
      },
      {
        q: 'Does Dr. Maitra accept new patients?',
        a: 'Yes, Dr. Maitra is currently accepting new patients for all clinical services including gynecology, obstetrics, fertility consultation, diagnostic screenings, and surgical second opinions. Please contact the clinic to schedule your first appointment.',
      },
      {
        q: 'What documents should I bring to my first appointment?',
        a: 'For your first visit, please bring: any existing medical reports, scan reports, blood test results, previous prescription records, and a valid government-issued photo ID. If you have had prior surgeries, bring any operation notes or discharge summaries.',
      },
    ],
  },
  {
    id: 'gynecology',
    label: 'Gynecology & Wellness',
    color: '#a46b66',
    items: [
      {
        q: 'How often should I get a Pap smear?',
        a: 'Per WHO and FOGSI (Federation of Obstetric and Gynecological Societies of India) guidelines: women aged 21–29 should get a Pap smear every 3 years; women aged 30–65 should combine a Pap smear with HPV DNA co-testing every 5 years for optimal safety and early detection.',
      },
      {
        q: 'Can PCOS be cured permanently?',
        a: "PCOS (Polycystic Ovarian Syndrome) is a metabolic and endocrine disorder — not a simple infection — so there is no single-step permanent cure. However, it can be managed very successfully through a combination of lifestyle modification, dietary changes, insulin optimization, and targeted medical therapy under expert clinical supervision. Many patients achieve complete symptom control.",
      },
      {
        q: 'Do you offer non-surgical treatments for uterine fibroids?',
        a: 'Absolutely. Uterine fibroids often do not require immediate surgery unless they are causing severe hemorrhage, reproductive obstruction, or significant quality-of-life impact. We prioritize medical therapies, hormonal feedback regulation, and monitored observation to avoid unnecessary surgical interventions wherever clinically safe.',
      },
      {
        q: 'What is colposcopy and when is it needed?',
        a: "Colposcopy is a close-up examination of the cervix, vagina, and vulva using a specialized magnifying instrument called a colposcope. It is recommended when a Pap smear result shows abnormal cells, when an HPV test is positive, or when the cervix appears abnormal during a routine examination. It is a painless, in-clinic procedure.",
      },
      {
        q: 'What are the symptoms of endometriosis?',
        a: 'Common symptoms include severe menstrual cramps, chronic pelvic pain especially before and during periods, pain during intercourse, heavy or irregular menstrual bleeding, and difficulty conceiving. However, some women with significant endometriosis may have minimal or no symptoms. A proper diagnosis requires clinical examination and sometimes laparoscopy.',
      },
    ],
  },
  {
    id: 'obstetrics',
    label: 'Obstetrics & Pregnancy',
    color: '#6b8e6b',
    items: [
      {
        q: 'When should I start antenatal care during pregnancy?',
        a: 'Ideally, your first antenatal visit should happen as early as possible — ideally in the first trimester (weeks 1–12). Early registration helps identify and manage any high-risk factors, establishes baseline health data, and ensures you receive timely screening tests, supplements, and vaccinations.',
      },
      {
        q: 'What are the signs of a healthy pregnancy?',
        a: "Key positive signs include: regular and appropriate fetal movements (felt from around 18–20 weeks), stable blood pressure, adequate weight gain per trimester, no unexplained vaginal bleeding, no severe persistent pain, and normal results on scans and blood tests. Regular antenatal checkups with Dr. Maitra are the best way to confirm your pregnancy's progress.",
      },
      {
        q: 'What makes a pregnancy high-risk?',
        a: "A pregnancy may be classified as high-risk if the mother has pre-existing conditions such as diabetes, hypertension, thyroid disease, heart disease, or kidney disorders. Other factors include advanced maternal age (35+), multiple pregnancies (twins, triplets), previous pregnancy complications, or when the fetus has detected growth or structural concerns. High-risk pregnancies require closer monitoring and specialist care.",
      },
      {
        q: "Does Dr. Maitra support normal (vaginal) delivery?",
        a: 'Yes. Dr. Maitra strongly advocates for evidence-based delivery decisions and supports vaginal delivery wherever it is safe for both mother and baby. Caesarean sections are recommended only when medically indicated — not for convenience. She practices patient-informed, evidence-based obstetric care aligned with WHO and FOGSI guidelines.',
      },
    ],
  },
  {
    id: 'fertility',
    label: 'Fertility & Family Planning',
    color: '#6b6b8e',
    items: [
      {
        q: 'How do I know if I have fertility problems?',
        a: 'If you have been trying to conceive for 12 consecutive months without success (or 6 months if you are 35 years or older), a fertility evaluation is clinically recommended. A basic workup includes hormonal blood tests, a pelvic ultrasound, and a semen analysis for the male partner. Many fertility issues are treatable once properly diagnosed.',
      },
      {
        q: 'What fertility treatments does Dr. Maitra offer?',
        a: "Dr. Maitra offers comprehensive fertility evaluation, medical management of ovulatory disorders (such as PCOS-related infertility), thyroid and hormonal correction, cycle monitoring, and IUI (Intrauterine Insemination). For couples requiring IVF or advanced assisted reproductive technologies, she provides clinical guidance and appropriate referrals to specialized IVF centres.",
      },
      {
        q: 'Can age affect female fertility?',
        a: "Yes. Female fertility begins to decline gradually after age 32 and more significantly after age 37, as egg quantity and quality both diminish with age. However, many women in their late 30s and early 40s conceive successfully with appropriate monitoring and care. If you are planning to conceive after 35, an early fertility assessment is strongly recommended.",
      },
      {
        q: 'What contraception methods does your clinic advise?',
        a: "Dr. Maitra provides individualized contraception counselling based on your health history, lifestyle, and family planning goals. Options discussed include oral contraceptive pills, intrauterine devices (copper or hormonal IUDs), injectable contraceptives, barrier methods, and permanent sterilization options. There is no one-size-fits-all — the best method depends on your specific needs.",
      },
    ],
  },
  {
    id: 'second-opinion',
    label: 'Surgical Second Opinion',
    color: '#2e5266',
    items: [
      {
        q: 'Does Dr. Maitra offer second opinions for gynecological surgery?',
        a: "Yes, Dr. Maitra actively encourages patients to seek second opinions before proceeding with any significant gynecological surgery — including hysterectomy (womb removal), myomectomy (fibroid surgery), laparoscopy, or ovarian cystectomy. You can submit your surgical records and previous scan reports through our second opinion request form on the website.",
      },
      {
        q: 'What documents should I send for a second opinion review?',
        a: "Please submit: your surgical recommendation letter, recent ultrasound or MRI/CT scan reports, all relevant blood and hormone test results, previous surgical notes if you have had prior procedures, and a clear description of your current symptoms. The more information you provide, the more thorough Dr. Maitra's review can be.",
      },
      {
        q: 'How long does a second opinion consultation take?',
        a: 'A second opinion consultation typically takes 30 to 60 minutes. Dr. Maitra reviews all submitted documents carefully and then meets with you to discuss her clinical assessment, alternative options, and her evidence-based recommendation in detail.',
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
    const firstItemKey = filteredItems.length > 0 ? `${filteredItems[0].q}-0` : null;
    const activeKey = openItem !== null ? openItem : firstItemKey;
    if (key === activeKey) {
      if (firstItemKey !== null) {
        setOpenItem(firstItemKey);
      }
    } else {
      setOpenItem(key);
    }
  };

  const firstItemKey = filteredItems.length > 0 ? `${filteredItems[0].q}-0` : null;
  const activeKey = openItem !== null ? openItem : firstItemKey;

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
            Common questions about women's health, gynecology, obstetrics, fertility, and our clinic — answered by Dr. Nandita Maitra.
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
              const isOpen = activeKey === key;
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
