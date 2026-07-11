// Centralized SEO configuration for all pages
// Replace DOMAIN with the live domain when ready

const DOMAIN = 'https://www.drnanditamaitra.com';
const CLINIC_NAME = "Dr. Nandita Maitra's Clinic";
const DOCTOR_NAME = 'Dr. Nandita Maitra';
const ADDRESS = '102, Race Course Medical Centre, Race Course, Vadodara, Gujarat 390007';
const PHONE = '+912652331818';
const PHONE_DISPLAY = '0265-2331818';
const EMAIL = 'info@drnanditamaitra.com';
const GEO_LAT = '22.310784';
const GEO_LNG = '73.165440';
const LOGO = `${DOMAIN}/images/drnanditamaitra-sclinicLogo.svg`;
const MAPS_URL = 'https://maps.app.goo.gl/EQHrLazsA3twHYF26';

// Base LD+JSON for Physician (reused across service pages)
export const physicianLdJson = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: DOCTOR_NAME,
  image: LOGO,
  telephone: PHONE,
  email: EMAIL,
  url: DOMAIN,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '102, Race Course Medical Centre, Race Course',
    addressLocality: 'Vadodara',
    addressRegion: 'Gujarat',
    postalCode: '390007',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: GEO_LAT,
    longitude: GEO_LNG,
  },
  hasMap: MAPS_URL,
  medicalSpecialty: ['ObstetricsAndGynecology'],
  areaServed: 'Vadodara, Gujarat, India',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '16:00',
      closes: '19:00',
    },
  ],
};

export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  keywords: string;
  ldJson: object | object[];
}

export const SEO_CONFIG: Record<string, PageSEO> = {
  home: {
    title: `${DOCTOR_NAME} | Senior Obstetrician & Gynecologist Vadodara, Gujarat`,
    description: `${DOCTOR_NAME} — 35+ years of expert obstetric, gynecological, and fertility care in Vadodara. Serving Race Course Medical Centre. Book your appointment today.`,
    canonical: DOMAIN,
    ogTitle: `${DOCTOR_NAME} | Obstetrician & Gynecologist in Vadodara`,
    ogDescription: `Trusted senior OB-GYN in Vadodara, Gujarat with 35+ years of experience. Expert in maternity, gynecology, fertility & diagnostics.`,
    keywords: 'gynecologist Vadodara, obstetrician Vadodara, best gynecologist Gujarat, Dr Nandita Maitra, women health clinic Vadodara, fertility doctor Vadodara',
    ldJson: [
      physicianLdJson,
      {
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        name: CLINIC_NAME,
        image: LOGO,
        telephone: PHONE,
        email: EMAIL,
        url: DOMAIN,
        address: physicianLdJson.address,
        geo: physicianLdJson.geo,
        hasMap: MAPS_URL,
        medicalSpecialty: ['ObstetricsAndGynecology', 'Fertility'],
        openingHoursSpecification: physicianLdJson.openingHoursSpecification,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        url: DOMAIN,
        name: CLINIC_NAME,
        description: `Official website of ${DOCTOR_NAME}, Senior Obstetrician and Gynecologist in Vadodara, Gujarat.`,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${DOMAIN}/?s={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  },

  gynecology: {
    title: `Gynecology & Women's Wellness Clinic Vadodara | ${DOCTOR_NAME}`,
    description: `Expert gynecological care in Vadodara — Pap smears, PCOS management, menopause, fibroids, and annual health checkups by ${DOCTOR_NAME}. Book at Race Course Medical Centre.`,
    canonical: `${DOMAIN}/gynecology`,
    ogTitle: `Gynecology & Wellness | ${DOCTOR_NAME} Vadodara`,
    ogDescription: `Comprehensive women's wellness: Pap smears, PCOS, menopause, fibroids & more. 35 years of gynecological expertise in Vadodara.`,
    keywords: 'gynecologist Vadodara, PCOS treatment Vadodara, pap smear Vadodara, menopause specialist Gujarat, fibroid treatment Vadodara, HPV screening Vadodara',
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: `Gynecology & Women's Wellness — ${CLINIC_NAME}`,
      url: `${DOMAIN}/gynecology`,
      description: `Gynecology and women's wellness services by ${DOCTOR_NAME} in Vadodara.`,
      medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
      about: { '@type': 'MedicalCondition', name: 'Gynecological Conditions' },
      author: physicianLdJson,
    },
  },

  earlypregnancycare: {
    title: `Pre Conception & Early Pregnancy Care Vadodara | ${DOCTOR_NAME}`,
    description: `Safe, evidence-based maternity and antenatal care in Vadodara by ${DOCTOR_NAME}. High-risk pregnancy, normal delivery, and postpartum support at Race Course Medical Centre.`,
    canonical: `${DOMAIN}/earlypregnancycare`,
    ogTitle: `Pre Conception & Early Pregnancy Care | ${DOCTOR_NAME} Vadodara`,
    ogDescription: `Comprehensive pregnancy care in Vadodara — antenatal, high-risk, normal delivery, and postpartum by expert obstetrician ${DOCTOR_NAME}.`,
    keywords: 'obstetrician Vadodara, maternity hospital Vadodara, antenatal care Gujarat, high risk pregnancy Vadodara, normal delivery doctor Vadodara',
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: `Pre Conception & Early Pregnancy Care — ${CLINIC_NAME}`,
      url: `${DOMAIN}/earlypregnancycare`,
      description: `Expert Pre Conception & Early Pregnancy Care in Vadodara by ${DOCTOR_NAME}.`,
      medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
      about: { '@type': 'MedicalCondition', name: 'Pregnancy and Childbirth' },
      author: physicianLdJson,
    },
  },

  fertility: {
    title: `Fertility & Family Planning Clinic Vadodara | ${DOCTOR_NAME}`,
    description: `Specialized fertility consultation, infertility assessment, and IUI support in Vadodara by ${DOCTOR_NAME}. Compassionate care for couples struggling to conceive.`,
    canonical: `${DOMAIN}/fertility`,
    ogTitle: `Fertility & Family Planning | ${DOCTOR_NAME} Vadodara`,
    ogDescription: `Infertility evaluation, fertility treatments, and IUI support in Vadodara. ${DOCTOR_NAME} offers compassionate, evidence-based care.`,
    keywords: 'fertility specialist Vadodara, infertility treatment Vadodara, IUI Vadodara, family planning Gujarat, PCOS fertility Vadodara',
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: `Fertility & Family Planning — ${CLINIC_NAME}`,
      url: `${DOMAIN}/fertility`,
      description: `Fertility consultation and treatment in Vadodara by ${DOCTOR_NAME}.`,
      medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
      about: { '@type': 'MedicalCondition', name: 'Female Infertility' },
      author: physicianLdJson,
    },
  },

  diagnostics: {
    title: `OB-GYN Diagnostics & Screening Vadodara | ${DOCTOR_NAME}`,
    description: `Comprehensive gynecological diagnostics in Vadodara — ultrasound, fetal scans, colposcopy, and cancer screening by ${DOCTOR_NAME} at Race Course Medical Centre.`,
    canonical: `${DOMAIN}/diagnostics`,
    ogTitle: `Diagnostics & Screening | ${DOCTOR_NAME} Vadodara`,
    ogDescription: `OB-GYN diagnostic scans — ultrasound, colposcopy, pap smear, fetal monitoring. Trusted diagnostics in Vadodara by ${DOCTOR_NAME}.`,
    keywords: 'gynecology diagnostics Vadodara, ultrasound scan Vadodara, colposcopy Gujarat, cancer screening Vadodara, obstetric scan Vadodara',
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: `Diagnostics & Screening — ${CLINIC_NAME}`,
      url: `${DOMAIN}/diagnostics`,
      description: `OB-GYN diagnostic services in Vadodara by ${DOCTOR_NAME}.`,
      medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
      about: { '@type': 'MedicalTest', name: 'Gynecological Diagnostic Tests' },
      author: physicianLdJson,
    },
  },

  'second-opinion': {
    title: `Surgical Second Opinion for Women's Health | ${DOCTOR_NAME} Vadodara`,
    description: `Get an expert surgical second opinion from ${DOCTOR_NAME} in Vadodara. Review hysterectomy, fibroid surgery, and other OB-GYN procedures before deciding.`,
    canonical: `${DOMAIN}/second-opinion`,
    ogTitle: `Get a Second Opinion | ${DOCTOR_NAME} Vadodara`,
    ogDescription: `Review your surgical recommendation before proceeding. Expert women's health second opinions by ${DOCTOR_NAME} in Vadodara.`,
    keywords: 'second opinion gynecology Vadodara, hysterectomy second opinion Gujarat, surgical review women Vadodara, OB-GYN second opinion India',
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: `Surgical Second Opinion — ${CLINIC_NAME}`,
      url: `${DOMAIN}/second-opinion`,
      description: `Expert surgical second opinion for women's health procedures in Vadodara.`,
      medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
      author: physicianLdJson,
    },
  },

  about: {
    title: `About ${DOCTOR_NAME} | 35+ Years OB-GYN Expert Vadodara`,
    description: `Learn about ${DOCTOR_NAME} — MBBS, DGO, MD, FICOG — Senior Obstetrician and Gynecologist with 35+ years of clinical and academic excellence in Vadodara, Gujarat.`,
    canonical: `${DOMAIN}/about`,
    ogTitle: `About ${DOCTOR_NAME} | OB-GYN Expert Vadodara`,
    ogDescription: `35+ years of compassionate women's healthcare — ${DOCTOR_NAME} is a trusted senior OB-GYN in Vadodara with FICOG credentials.`,
    keywords: 'Dr Nandita Maitra gynecologist, FICOG gynecologist Vadodara, senior obstetrician Gujarat, women health expert Vadodara',
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': `${DOMAIN}/about#physician`,
      name: DOCTOR_NAME,
      jobTitle: 'Senior Obstetrician, Gynecologist & Fertility Consultant',
      description: `${DOCTOR_NAME} has over 35 years of clinical and teaching experience in obstetrics and gynecology.`,
      image: LOGO,
      url: `${DOMAIN}/about`,
      telephone: PHONE,
      email: EMAIL,
      address: physicianLdJson.address,
      alumniOf: [
        { '@type': 'EducationalOrganization', name: 'Medical College Vadodara (MBBS)' },
        { '@type': 'EducationalOrganization', name: 'DGO, MD Obstetrics & Gynecology' },
      ],
      hasCredential: { '@type': 'EducationalOccupationalCredential', name: 'FICOG (Fellow of Indian College of Obstetrics and Gynecology)' },
      memberOf: { '@type': 'MedicalOrganization', name: 'Indian College of Obstetrics and Gynecology' },
    },
  },

  contact: {
    title: `Book Appointment | ${DOCTOR_NAME} Clinic Vadodara`,
    description: `Book an appointment with ${DOCTOR_NAME} at Race Course Medical Centre, Vadodara. Clinic hours: Mon–Fri 10AM–1PM & 4PM–7PM. Call ${PHONE_DISPLAY}.`,
    canonical: `${DOMAIN}/contact`,
    ogTitle: `Contact & Appointments | ${DOCTOR_NAME} Vadodara`,
    ogDescription: `Schedule a consultation with ${DOCTOR_NAME}. Call or WhatsApp ${PHONE_DISPLAY} or visit Race Course Medical Centre, Vadodara.`,
    keywords: 'book appointment gynecologist Vadodara, contact Dr Nandita Maitra, clinic appointment Vadodara, women health appointment Gujarat',
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: `Contact ${CLINIC_NAME}`,
      url: `${DOMAIN}/contact`,
      description: `Contact and appointment booking for ${CLINIC_NAME} in Vadodara.`,
      mainEntity: {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: CLINIC_NAME,
        telephone: PHONE,
        email: EMAIL,
        url: DOMAIN,
        address: physicianLdJson.address,
        geo: physicianLdJson.geo,
        hasMap: MAPS_URL,
        openingHoursSpecification: physicianLdJson.openingHoursSpecification,
      },
    },
  },

  privacy: {
    title: `Privacy Policy | ${CLINIC_NAME} Vadodara`,
    description: `Privacy Policy of ${CLINIC_NAME}. Learn how we collect, use, and protect your personal and medical data in compliance with Indian healthcare regulations.`,
    canonical: `${DOMAIN}/privacy`,
    ogTitle: `Privacy Policy | ${CLINIC_NAME}`,
    ogDescription: `Read the privacy policy of ${CLINIC_NAME} — how we handle patient data and protect your confidentiality.`,
    keywords: 'privacy policy clinic Vadodara, patient data policy Dr Nandita Maitra, healthcare data privacy Gujarat',
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `Privacy Policy — ${CLINIC_NAME}`,
      url: `${DOMAIN}/privacy`,
      description: "Privacy policy for patients and website visitors of Dr. Nandita Maitra's Clinic.",
      isPartOf: { '@type': 'WebSite', url: DOMAIN, name: CLINIC_NAME },
    },
  },

  faq: {
    title: `FAQs — Women's Health Questions Answered | ${DOCTOR_NAME} Vadodara`,
    description: `Frequently asked questions about gynecology, obstetrics, fertility, PCOS, menopause, and pregnancy in Vadodara. Answered by ${DOCTOR_NAME}.`,
    canonical: `${DOMAIN}/faq`,
    ogTitle: `Women's Health FAQs | ${DOCTOR_NAME} Vadodara`,
    ogDescription: `Common questions about OB-GYN care — answered by ${DOCTOR_NAME} in Vadodara. Topics: pregnancy, PCOS, fertility, menopause, diagnostics.`,
    keywords: 'gynecology FAQ Vadodara, women health questions Gujarat, PCOS FAQ, pregnancy questions India, fertility FAQ Vadodara',
    ldJson: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      name: `Women's Health FAQs — ${CLINIC_NAME}`,
      url: `${DOMAIN}/faq`,
      mainEntity: [
        { '@type': 'Question', name: 'How often should I visit a gynecologist?', acceptedAnswer: { '@type': 'Answer', text: 'Women aged 21 and above should have an annual gynecological examination. If you have specific conditions like PCOS, fibroids, or are pregnant, you may need visits every 4–8 weeks depending on your care plan.' } },
        { '@type': 'Question', name: 'How often should I get a Pap smear?', acceptedAnswer: { '@type': 'Answer', text: 'Women aged 21–29 should get a Pap smear every 3 years. Women aged 30–65 should combine Pap smear with HPV DNA testing every 5 years (co-testing) per WHO and FOGSI guidelines.' } },
        { '@type': 'Question', name: 'Can PCOS be cured permanently?', acceptedAnswer: { '@type': 'Answer', text: 'PCOS is a metabolic and hormonal syndrome. It cannot be cured in a single step, but it can be managed very effectively through lifestyle changes, hormonal therapy, and dietary modifications under expert supervision.' } },
        { '@type': 'Question', name: 'What are the signs of a healthy pregnancy?', acceptedAnswer: { '@type': 'Answer', text: 'Key signs include regular fetal movements after 20 weeks, stable blood pressure, appropriate weight gain, no unexplained bleeding or severe pain, and normal scan results. Regular antenatal checkups are the best way to ensure pregnancy health.' } },
        { '@type': 'Question', name: 'How do I know if I have fertility problems?', acceptedAnswer: { '@type': 'Answer', text: 'If you have been trying to conceive for 12 months (or 6 months if above 35) without success, a fertility evaluation is recommended. This includes hormonal blood tests, ultrasound, and semen analysis for the male partner.' } },
        { '@type': 'Question', name: "What is Dr. Nandita Maitra's clinic address in Vadodara?", acceptedAnswer: { '@type': 'Answer', text: '102, Race Course Medical Centre, Race Course, Vadodara, Gujarat 390007.' } },
        { '@type': 'Question', name: 'What are the clinic hours?', acceptedAnswer: { '@type': 'Answer', text: 'Monday to Saturday: 10:00 AM – 1:00 PM and 4:00 PM – 7:00 PM. Closed on Sundays and public holidays.' } },
        { '@type': 'Question', name: 'Does Dr. Maitra offer second opinions for surgery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Dr. Maitra actively encourages patients to seek second opinions before proceeding with any surgical intervention such as hysterectomy, fibroid surgery, or laparoscopy.' } },
      ],
    },
  },
};

export const GEO_TAGS = {
  region: 'IN-GJ',
  placename: 'Vadodara, Gujarat',
  position: `${GEO_LAT};${GEO_LNG}`,
  ICBM: `${GEO_LAT}, ${GEO_LNG}`,
};

export { DOMAIN, CLINIC_NAME, DOCTOR_NAME, PHONE_DISPLAY, EMAIL, ADDRESS };
