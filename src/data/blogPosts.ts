// Static blog post data for Patient Education section
// All 5 posts are fully defined here for static rendering

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  publishDate: string;
  readTime: string;
  seoTitle: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  canonical: string;
  ldJson: object;
}

const DOMAIN = 'https://www.drnanditamaitra.com';
const DOCTOR_NAME = 'Dr. Nandita Maitra';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'understanding-pcos',
    title: 'Understanding PCOS: Symptoms, Diagnosis, and Management',
    category: 'Hormonal Health',
    publishDate: 'July 2025',
    readTime: '7 min read',
    seoTitle: 'Understanding PCOS: Symptoms, Diagnosis & Management | Dr. Nandita Maitra Vadodara',
    description: `A clear, evidence-based guide to understanding Polycystic Ovary Syndrome (PCOS) — its symptoms, how it is diagnosed, and how it is effectively managed. Expert guidance from ${DOCTOR_NAME}, OB-GYN in Vadodara, Gujarat.`,
    keywords: 'PCOS symptoms Vadodara, PCOS diagnosis Gujarat, polycystic ovary syndrome treatment Vadodara, PCOS management India, irregular periods PCOS, PCOS fertility Vadodara, hormonal disorder women Gujarat',
    ogTitle: 'Understanding PCOS: Symptoms, Diagnosis & Management – Vadodara Gynecologist',
    ogDescription: `Learn how PCOS presents, how it is diagnosed, and how it is treated. Evidence-based guidance by ${DOCTOR_NAME}, Senior Gynecologist in Vadodara, Gujarat.`,
    canonical: `${DOMAIN}/patient-education/understanding-pcos`,
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Understanding PCOS: Symptoms, Diagnosis, and Management',
      author: { '@type': 'Person', name: DOCTOR_NAME, url: `${DOMAIN}/about` },
      publisher: { '@type': 'Organization', name: "Dr. Nandita Maitra's Clinic", url: DOMAIN },
      datePublished: '2025-07-01',
      description: 'Evidence-based guide to PCOS symptoms, diagnosis, and treatment by a senior gynecologist in Vadodara.',
      url: `${DOMAIN}/patient-education/understanding-pcos`,
      about: { '@type': 'MedicalCondition', name: 'Polycystic Ovary Syndrome' },
    },
  },
  {
    slug: 'cervical-screening-pap-smear',
    title: 'The Importance of Regular Cervical Screening and Pap Smears',
    category: 'Preventive Gynecology',
    publishDate: 'June 2025',
    readTime: '6 min read',
    seoTitle: 'Cervical Screening & Pap Smear Guide Vadodara | Dr. Nandita Maitra',
    description: `Why regular cervical screening and Pap smears are critical for women's health — including when to start, how often to screen, and what an abnormal result means. Expert guidance from ${DOCTOR_NAME}, Gynecologist in Vadodara, Gujarat.`,
    keywords: 'cervical screening Vadodara, Pap smear Vadodara, HPV test Gujarat, colposcopy Vadodara, cervical cancer prevention India, abnormal Pap smear Gujarat, women cancer screening Vadodara',
    ogTitle: 'Cervical Screening & Pap Smear – Why Every Woman Needs It | Vadodara OB-GYN',
    ogDescription: `Understand the importance of Pap smears and HPV-based cervical screening. When to test, what results mean, and next steps — by ${DOCTOR_NAME} in Vadodara, Gujarat.`,
    canonical: `${DOMAIN}/patient-education/cervical-screening-pap-smear`,
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'The Importance of Regular Cervical Screening and Pap Smears',
      author: { '@type': 'Person', name: DOCTOR_NAME, url: `${DOMAIN}/about` },
      publisher: { '@type': 'Organization', name: "Dr. Nandita Maitra's Clinic", url: DOMAIN },
      datePublished: '2025-06-01',
      description: 'A guide to cervical screening, Pap smears, HPV testing, and colposcopy by a senior gynecologist in Vadodara.',
      url: `${DOMAIN}/patient-education/cervical-screening-pap-smear`,
      about: { '@type': 'MedicalCondition', name: 'Cervical Cancer Screening' },
    },
  },
  {
    slug: 'navigating-menopause',
    title: 'Navigating Menopause: Evidence-Based Symptom Relief',
    category: 'Menopause Care',
    publishDate: 'May 2025',
    readTime: '8 min read',
    seoTitle: 'Navigating Menopause: Evidence-Based Symptom Relief | Dr. Nandita Maitra Vadodara',
    description: `A comprehensive, evidence-based guide to understanding perimenopause and menopause — covering hot flashes, sleep disturbance, mood changes, vaginal dryness, bone health, and treatment options. Expert guidance from ${DOCTOR_NAME}, Gynecologist in Vadodara, Gujarat.`,
    keywords: 'menopause treatment Vadodara, perimenopause symptoms Gujarat, hot flashes relief India, menopause specialist Vadodara, HRT Gujarat, menopause bone health Vadodara, vaginal dryness treatment Gujarat',
    ogTitle: 'Menopause Symptom Relief – Evidence-Based Guide | Vadodara Gynecologist',
    ogDescription: `Evidence-based guidance on menopause symptoms, hormone therapy, bone health, and long-term wellbeing after menopause by ${DOCTOR_NAME}, Senior OB-GYN in Vadodara.`,
    canonical: `${DOMAIN}/patient-education/navigating-menopause`,
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Navigating Menopause: Evidence-Based Symptom Relief',
      author: { '@type': 'Person', name: DOCTOR_NAME, url: `${DOMAIN}/about` },
      publisher: { '@type': 'Organization', name: "Dr. Nandita Maitra's Clinic", url: DOMAIN },
      datePublished: '2025-05-01',
      description: 'A comprehensive guide to menopause symptoms, treatment options, and long-term health after menopause by a senior gynecologist in Vadodara.',
      url: `${DOMAIN}/patient-education/navigating-menopause`,
      about: { '@type': 'MedicalCondition', name: 'Menopause' },
    },
  },
  {
    slug: 'early-pregnancy-care-first-trimester',
    title: 'Early Pregnancy Care: What to Expect in the First Trimester',
    category: 'Pregnancy Care',
    publishDate: 'April 2025',
    readTime: '7 min read',
    seoTitle: 'Early Pregnancy Care – First Trimester Guide | Dr. Nandita Maitra Vadodara',
    description: `A practical guide for women in early pregnancy — covering what to expect in the first trimester, when to see a doctor, essential tests, warning signs, and antenatal care in Vadodara, Gujarat. By ${DOCTOR_NAME}, Senior Obstetrician.`,
    keywords: 'early pregnancy care Vadodara, first trimester guide Gujarat, antenatal care Vadodara, pregnancy doctor Vadodara, early pregnancy bleeding Gujarat, pregnancy tests India, obstetrician Vadodara',
    ogTitle: 'Early Pregnancy Care: First Trimester Guide | Vadodara Obstetrician',
    ogDescription: `What every woman needs to know about the first trimester — tests, symptoms, warning signs, and antenatal care. Guidance by ${DOCTOR_NAME}, Senior Obstetrician in Vadodara.`,
    canonical: `${DOMAIN}/patient-education/early-pregnancy-care-first-trimester`,
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Early Pregnancy Care: What to Expect in the First Trimester',
      author: { '@type': 'Person', name: DOCTOR_NAME, url: `${DOMAIN}/about` },
      publisher: { '@type': 'Organization', name: "Dr. Nandita Maitra's Clinic", url: DOMAIN },
      datePublished: '2025-04-01',
      description: 'A first trimester guide covering antenatal care, essential tests, and warning signs by a senior obstetrician in Vadodara.',
      url: `${DOMAIN}/patient-education/early-pregnancy-care-first-trimester`,
      about: { '@type': 'MedicalCondition', name: 'Pregnancy' },
    },
  },
  {
    slug: 'fertility-evaluation-when-to-consult',
    title: 'Fertility Evaluation: When to Consult a Gynecologist',
    category: 'Fertility',
    publishDate: 'March 2025',
    readTime: '6 min read',
    seoTitle: 'Fertility Evaluation: When to Consult a Gynecologist | Dr. Nandita Maitra Vadodara',
    description: `When should couples seek a fertility evaluation? A clear guide covering causes of infertility, initial tests, ovulation assessment, PCOS-related fertility concerns, and when to consult a gynecologist. Expert guidance from ${DOCTOR_NAME} in Vadodara, Gujarat.`,
    keywords: 'fertility evaluation Vadodara, infertility consultation Gujarat, fertility specialist Vadodara, when to see gynecologist infertility, ovulation assessment Vadodara, PCOS fertility Gujarat, fertility doctor Vadodara',
    ogTitle: 'Fertility Evaluation: When to See a Gynecologist | Vadodara OB-GYN',
    ogDescription: `A guide on when couples should seek fertility evaluation, what tests are involved, and how to approach infertility — by ${DOCTOR_NAME}, Senior Gynecologist in Vadodara.`,
    canonical: `${DOMAIN}/patient-education/fertility-evaluation-when-to-consult`,
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Fertility Evaluation: When to Consult a Gynecologist',
      author: { '@type': 'Person', name: DOCTOR_NAME, url: `${DOMAIN}/about` },
      publisher: { '@type': 'Organization', name: "Dr. Nandita Maitra's Clinic", url: DOMAIN },
      datePublished: '2025-03-01',
      description: 'A guide on fertility evaluation, infertility causes, and when to consult a gynecologist in Vadodara by a senior OB-GYN.',
      url: `${DOMAIN}/patient-education/fertility-evaluation-when-to-consult`,
      about: { '@type': 'MedicalCondition', name: 'Female Infertility' },
    },
  },
];

export const getBlogBySlug = (slug: string): BlogPost | undefined =>
  BLOG_POSTS.find((p) => p.slug === slug);
