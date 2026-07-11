/**
 * Post-build static pre-render script
 * Copies dist/index.html to each route directory so every URL
 * gets its own HTML entry point for deployment on static hosts.
 *
 * Run via: node prerender.mjs  (called automatically by `npm run build`)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

// All routes that should have their own index.html
const routes = [
  'about',
  'services',
  'patient-education',
  'patient-education/understanding-pcos',
  'patient-education/cervical-screening-pap-smear',
  'patient-education/navigating-menopause',
  'patient-education/early-pregnancy-care-first-trimester',
  'patient-education/fertility-evaluation-when-to-consult',
  'services/cervical-screening',
  'services/gynecologic-ultrasound',
  'services/fertility-consultation',
  'services/comprehensive-gynecology',
  'services/pcos-care',
  'services/menopause-consultation',
  'services/pregnancy-consultation',
  'services/second-opinion',
  'contact',
  'privacy',
  'faq',
];

const sourceHtml = path.join(distDir, 'index.html');

if (!fs.existsSync(sourceHtml)) {
  console.error('❌ dist/index.html not found. Run `vite build` first.');
  process.exit(1);
}

const template = fs.readFileSync(sourceHtml, 'utf-8');

// Page-specific meta overrides to inject into each HTML file
const pageMeta = {
  about: {
    title: 'About Dr. Nandita Maitra | MBBS MD FRCOG Senior Gynecologist Vadodara',
    description: 'Learn about Dr. Nandita Maitra — MBBS, MD, FRCOG — Additional Professor (Retd.) with over 33 years at Medical College & SSG Hospital, Baroda.',
    canonical: 'https://www.drnanditamaitra.com/about',
  },
  services: {
    title: "Gynecology & Women's Health Services Vadodara | Dr. Nandita Maitra",
    description: "Comprehensive gynecology services in Vadodara — cervical screening, colposcopy, PCOS care, fertility evaluation, menopause consultation, gynecologic ultrasound, pregnancy consultation, and second opinion.",
    canonical: 'https://www.drnanditamaitra.com/services',
  },
  'patient-education': {
    title: "Patient Education – Women's Health Articles | Dr. Nandita Maitra Vadodara",
    description: "Trusted women's health articles on PCOS, cervical screening, menopause, early pregnancy care, and fertility — by Dr. Nandita Maitra, Senior Gynecologist in Vadodara, Gujarat.",
    canonical: 'https://www.drnanditamaitra.com/patient-education',
  },
  'patient-education/understanding-pcos': {
    title: 'Understanding PCOS: Symptoms, Diagnosis & Management | Dr. Nandita Maitra Vadodara',
    description: 'A clear, evidence-based guide to PCOS — symptoms, how it is diagnosed, and how it is effectively managed. By Dr. Nandita Maitra, OB-GYN in Vadodara, Gujarat.',
    canonical: 'https://www.drnanditamaitra.com/patient-education/understanding-pcos',
  },
  'patient-education/cervical-screening-pap-smear': {
    title: 'Cervical Screening & Pap Smear Guide Vadodara | Dr. Nandita Maitra',
    description: 'Why regular cervical screening and Pap smears are critical for women — when to start, how often, and what an abnormal result means. By Dr. Nandita Maitra, Vadodara.',
    canonical: 'https://www.drnanditamaitra.com/patient-education/cervical-screening-pap-smear',
  },
  'patient-education/navigating-menopause': {
    title: 'Navigating Menopause: Evidence-Based Symptom Relief | Dr. Nandita Maitra Vadodara',
    description: 'Evidence-based guide to menopause symptoms, hormone therapy, bone health, and long-term wellbeing. By Dr. Nandita Maitra, Senior OB-GYN in Vadodara.',
    canonical: 'https://www.drnanditamaitra.com/patient-education/navigating-menopause',
  },
  'patient-education/early-pregnancy-care-first-trimester': {
    title: 'Early Pregnancy Care – First Trimester Guide | Dr. Nandita Maitra Vadodara',
    description: 'A practical guide for the first trimester — tests, warning signs, and antenatal care. By Dr. Nandita Maitra, Senior Obstetrician in Vadodara.',
    canonical: 'https://www.drnanditamaitra.com/patient-education/early-pregnancy-care-first-trimester',
  },
  'patient-education/fertility-evaluation-when-to-consult': {
    title: 'Fertility Evaluation: When to Consult a Gynecologist | Dr. Nandita Maitra Vadodara',
    description: 'When should couples seek fertility evaluation? Causes, tests, and when to consult — by Dr. Nandita Maitra, Senior Gynecologist in Vadodara.',
    canonical: 'https://www.drnanditamaitra.com/patient-education/fertility-evaluation-when-to-consult',
  },
  'services/cervical-screening': {
    title: 'Cervical Screening & Colposcopy | Dr. Nandita Maitra Vadodara',
    description: 'Comprehensive evaluation for cervical and vulval health including HPV testing and colposcopy.',
    canonical: 'https://www.drnanditamaitra.com/services/cervical-screening',
  },
  'services/gynecologic-ultrasound': {
    title: 'Gynecologic Ultrasound | Dr. Nandita Maitra Vadodara',
    description: 'Expert pelvic ultrasound for diagnosing abnormal bleeding, pain, cysts, and fertility issues.',
    canonical: 'https://www.drnanditamaitra.com/services/gynecologic-ultrasound',
  },
  'services/fertility-consultation': {
    title: 'Fertility Consultation & Evaluation | Dr. Nandita Maitra Vadodara',
    description: 'Systematic fertility evaluation and guidance for conception and reproductive health.',
    canonical: 'https://www.drnanditamaitra.com/services/fertility-consultation',
  },
  'services/comprehensive-gynecology': {
    title: 'Comprehensive Gynecology Consultation | Dr. Nandita Maitra Vadodara',
    description: 'Careful evaluation and treatment for a wide range of common gynecological concerns.',
    canonical: 'https://www.drnanditamaitra.com/services/comprehensive-gynecology',
  },
  'services/pcos-care': {
    title: 'PCOS Care & Treatment | Dr. Nandita Maitra Vadodara',
    description: 'Individualized treatment for PCOS including cycle regulation and metabolic guidance.',
    canonical: 'https://www.drnanditamaitra.com/services/pcos-care',
  },
  'services/menopause-consultation': {
    title: 'Menopause Consultation | Dr. Nandita Maitra Vadodara',
    description: 'Evidence-based symptom relief and guidance on long-term health after menopause.',
    canonical: 'https://www.drnanditamaitra.com/services/menopause-consultation',
  },
  'services/pregnancy-consultation': {
    title: 'Pregnancy Consultation & Antenatal Care | Dr. Nandita Maitra Vadodara',
    description: 'Expert consultation for early pregnancy concerns, antenatal guidance, and high-risk care.',
    canonical: 'https://www.drnanditamaitra.com/services/pregnancy-consultation',
  },
  'services/second-opinion': {
    title: 'Second Opinion Consultation | Dr. Nandita Maitra Vadodara',
    description: 'Careful second opinion for complex gynecological problems and uncertain diagnoses.',
    canonical: 'https://www.drnanditamaitra.com/services/second-opinion',
  },
  contact: {
    title: "Book Appointment | Dr. Nandita Maitra's Clinic Vadodara",
    description: "Book a consultation with Dr. Nandita Maitra at Race Course Medical Centre, Vadodara. Call 0265-2331818.",
    canonical: 'https://www.drnanditamaitra.com/contact',
  },
  privacy: {
    title: "Privacy Policy | Dr. Nandita Maitra's Clinic Vadodara",
    description: "Privacy Policy of Dr. Nandita Maitra's Clinic — how we protect your personal and medical data.",
    canonical: 'https://www.drnanditamaitra.com/privacy',
  },
  faq: {
    title: "FAQs — Women's Health Questions | Dr. Nandita Maitra Vadodara",
    description: 'Frequently asked questions about gynecology, PCOS, cervical screening, menopause, fertility, and pregnancy — answered by Dr. Nandita Maitra.',
    canonical: 'https://www.drnanditamaitra.com/faq',
  },
};

// GEO tags to inject into every page
const geoTagsHtml = `
  <meta name="geo.region" content="IN-GJ" />
  <meta name="geo.placename" content="Vadodara, Gujarat" />
  <meta name="geo.position" content="22.310784;73.165440" />
  <meta name="ICBM" content="22.310784, 73.165440" />`;

routes.forEach((route) => {
  const routeDir = path.join(distDir, route);
  fs.mkdirSync(routeDir, { recursive: true });

  const meta = pageMeta[route];
  let html = template;

  if (meta) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);

    if (html.includes('name="description"')) {
      html = html.replace(
        /<meta name="description" content="[^"]*"/,
        `<meta name="description" content="${meta.description}"`,
      );
    } else {
      html = html.replace('</head>', `  <meta name="description" content="${meta.description}" />\n</head>`);
    }

    html = html.replace('</head>', `  <link rel="canonical" href="${meta.canonical}" />\n</head>`);

    const ogTags = `
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:url" content="${meta.canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_IN" />`;
    html = html.replace('</head>', `${ogTags}\n</head>`);
  }

  html = html.replace('</head>', `${geoTagsHtml}\n</head>`);

  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  console.log(`✅ Generated: dist/${route}/index.html`);
});

console.log(`\n🚀 Pre-render complete! ${routes.length} route HTML files generated.\n`);
