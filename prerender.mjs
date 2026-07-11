/**
 * Post-build static pre-render script
 * Copies dist/index.html to each route directory so every URL
 * gets its own HTML entry point for deployment on static hosts.
 *
 * Run via: node prerender.mjs  (called automatically by `npm run build`)
 *
 * Note: For full SSR-rendered meta tags baked in, pair this with
 * a server that runs renderToString — this script handles static file
 * routing for hosts that need pre-existing HTML files per path.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');

// All routes that should have their own index.html
const routes = [
  'gynecology',
  'obstetrics',
  'fertility',
  'diagnostics',
  'second-opinion',
  'about',
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
  gynecology: {
    title: "Gynecology & Women's Wellness Clinic Vadodara | Dr. Nandita Maitra",
    description: "Expert gynecological care in Vadodara — Pap smears, PCOS management, menopause, fibroids by Dr. Nandita Maitra.",
    canonical: 'https://www.drnanditamaitra.com/gynecology',
  },
  obstetrics: {
    title: 'Pre Conception & Early Pregnancy Care Vadodara | Dr. Nandita Maitra',
    description: 'Safe, evidence-based maternity and antenatal care in Vadodara by Dr. Nandita Maitra.',
    canonical: 'https://www.drnanditamaitra.com/earlypregnancycare',
  },
  fertility: {
    title: 'Fertility & Family Planning Clinic Vadodara | Dr. Nandita Maitra',
    description: 'Specialized fertility consultation and IUI support in Vadodara by Dr. Nandita Maitra.',
    canonical: 'https://www.drnanditamaitra.com/fertility',
  },
  diagnostics: {
    title: 'OB-GYN Diagnostics & Screening Vadodara | Dr. Nandita Maitra',
    description: 'Comprehensive gynecological diagnostics in Vadodara — ultrasound, colposcopy, cancer screening.',
    canonical: 'https://www.drnanditamaitra.com/diagnostics',
  },
  'second-opinion': {
    title: "Surgical Second Opinion Women's Health | Dr. Nandita Maitra Vadodara",
    description: 'Expert surgical second opinions by Dr. Nandita Maitra in Vadodara before any OB-GYN procedure.',
    canonical: 'https://www.drnanditamaitra.com/second-opinion',
  },
  about: {
    title: 'About Dr. Nandita Maitra | 35+ Years OB-GYN Expert Vadodara',
    description: 'Learn about Dr. Nandita Maitra — MBBS, DGO, MD, FICOG — Senior Gynecologist with 35+ years in Vadodara.',
    canonical: 'https://www.drnanditamaitra.com/about',
  },
  contact: {
    title: "Book Appointment | Dr. Nandita Maitra's Clinic Vadodara",
    description: "Book a consultation with Dr. Nandita Maitra at Race Course Medical Centre, Vadodara. Call +91 90810 05399.",
    canonical: 'https://www.drnanditamaitra.com/contact',
  },
  privacy: {
    title: "Privacy Policy | Dr. Nandita Maitra's Clinic Vadodara",
    description: "Privacy Policy of Dr. Nandita Maitra's Clinic — how we protect your personal and medical data.",
    canonical: 'https://www.drnanditamaitra.com/privacy',
  },
  faq: {
    title: "FAQs — Women's Health Questions | Dr. Nandita Maitra Vadodara",
    description: 'Frequently asked questions about gynecology, obstetrics, fertility, PCOS, and pregnancy — answered by Dr. Nandita Maitra.',
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
    // Replace title
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);

    // Replace or add description
    if (html.includes('name="description"')) {
      html = html.replace(
        /<meta name="description" content="[^"]*"/,
        `<meta name="description" content="${meta.description}"`,
      );
    } else {
      html = html.replace('</head>', `  <meta name="description" content="${meta.description}" />\n</head>`);
    }

    // Add canonical
    html = html.replace('</head>', `  <link rel="canonical" href="${meta.canonical}" />\n</head>`);

    // Add Open Graph tags
    const ogTags = `
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:url" content="${meta.canonical}" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_IN" />`;
    html = html.replace('</head>', `${ogTags}\n</head>`);
  }

  // Inject GEO tags
  html = html.replace('</head>', `${geoTagsHtml}\n</head>`);

  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
  console.log(`✅ Generated: dist/${route}/index.html`);
});

console.log(`\n🚀 Pre-render complete! ${routes.length} route HTML files generated.\n`);
