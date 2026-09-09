/**
 * Post-build static pre-render script
 * Copies dist/index.html to each route directory so every URL
 * gets its own HTML entry point for deployment on static hosts.
 *
 * Also generates dist/sitemap.xml and dist/robots.txt.
 *
 * Run via: node prerender.mjs  (called automatically by `npm run build`)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, "dist");

// ─── SITE CONFIG ────────────────────────────────────────────────────────────
const SITE_URL = "https://www.panchshilgynecologyclinic.com";
const OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;

// ─── JSON-LD (shared across all pages) ──────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Nandita Maitra - Obstetrician & Gynecologist",
  "image": `${SITE_URL}/images/drnanditamaitra-sclinicLogo.svg`,
  "telephone": "+91 90810 05399",
  "url": SITE_URL,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "102, next to Pashabhai park, Race Course Medical Centre, Race Course",
    "addressLocality": "Vadodara",
    "addressRegion": "Gujarat",
    "postalCode": "390007",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "22.310784",
    "longitude": "73.165440"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:30",
      "closes": "12:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "17:00",
      "closes": "19:00"
    }
  ],
  "medicalSpecialty": ["ObstetricsAndGynecology"],
  "areaServed": "Vadodara, Gujarat",
  "hasMap": "https://maps.google.com/?q=102,+Race+Course+Medical+Centre,+Race+Course,+Vadodara+390007"
};

// ─── ALL ROUTES ──────────────────────────────────────────────────────────────
// Must match exact folder names used in the Dr_Nandita / dist directory
const routes = [
  "about",
  "services",
  "patient-education",
  "patient-education/acne-in-women-could-it-be-hormonal",
  "patient-education/healthy-weight-loss-for-women",
  "patient-education/excess-facial-or-body-hair-in-women-hirsutism",
  "patient-education/pms-vs-pmdd-understanding-difference",
  "patient-education/polycystic-ovary-syndrome-pcos",
  "patient-education/painful-periods-dysmenorrhea",
  "patient-education/is-my-period-normal",
  "patient-education/understanding-pcos",
  "patient-education/cervical-screening-pap-smear",
  "patient-education/navigating-menopause",
  "patient-education/early-pregnancy-care-first-trimester",
  "patient-education/fertility-evaluation-when-to-consult",
  "services/cervical-cancer-screening",
  "services/colposcopy-and-vulval-evaluation",
  "services/gynecologic-ultrasound",
  "services/fertility-consultation",
  "services/pcos-care",
  "services/menopause-consultation",
  "services/early-pregnancy-care",
  "services/preconception-counselling",
  "services/second-opinion",
  "contact",
  "privacy",
  "disclaimer",
  "faq",
];

// ─── PAGE META ───────────────────────────────────────────────────────────────
const pageMeta = {
  // Root "/" is handled separately below (inject into dist/index.html directly)
  root: {
    title: "Dr. Nandita Maitra | Senior Obstetrician & Gynecologist Vadodara",
    description:
      "Senior Obstetrician & Gynecologist Dr. Nandita Maitra offers 35+ years of clinical and academic teaching expertise in maternity care, gynecology, and fertility in Vadodara, Gujarat.",
    canonical: `${SITE_URL}/`,
  },
  about: {
    title: "About Dr. Nandita Maitra | MBBS MD FRCOG Senior Gynecologist Vadodara",
    description:
      "Learn about Dr. Nandita Maitra — MBBS, MD, FRCOG — Additional Professor (Retd.) with over 33 years at Medical College & SSG Hospital, Baroda.",
    canonical: `${SITE_URL}/about`,
  },
  services: {
    title: "Gynecology & Women's Health Services Vadodara | Dr. Nandita Maitra",
    description:
      "Comprehensive gynecology services in Vadodara — cervical screening, colposcopy and vulval evaluation, PCOS care, fertility evaluation, menopause consultation, gynecologic ultrasound, pregnancy consultation, and second opinion.",
    canonical: `${SITE_URL}/services`,
  },
  "patient-education": {
    title: "Patient Education – Women's Health Articles | Dr. Nandita Maitra Vadodara",
    description:
      "Trusted women's health articles on PCOS, cervical screening, menopause, early pregnancy care, and fertility — by Dr. Nandita Maitra, Senior Gynecologist in Vadodara, Gujarat.",
    canonical: `${SITE_URL}/patient-education`,
  },
  "patient-education/acne-in-women-could-it-be-hormonal": {
    title: "Acne in Women: Could It Be Hormonal? | Dr. Nandita Maitra Vadodara",
    description:
      "Persistent acne in women may be linked to hormonal imbalance or PCOS. Learn about the causes, treatment options, and when to consult a gynecologist.",
    canonical: `${SITE_URL}/patient-education/acne-in-women-could-it-be-hormonal`,
  },
  "patient-education/healthy-weight-loss-for-women": {
    title: "Healthy Weight Loss for Women | Dr. Nandita Maitra Vadodara",
    description:
      "Evidence-based weight loss strategies for women — addressing hormonal factors, metabolic health, nutrition, and sustainable habits.",
    canonical: `${SITE_URL}/patient-education/healthy-weight-loss-for-women`,
  },
  "patient-education/excess-facial-or-body-hair-in-women-hirsutism": {
    title: "Excess Facial or Body Hair in Women (Hirsutism) | Dr. Nandita Maitra Vadodara",
    description:
      "Understanding hirsutism in women — causes including PCOS, diagnostic evaluation, and medical treatment options in Vadodara.",
    canonical: `${SITE_URL}/patient-education/excess-facial-or-body-hair-in-women-hirsutism`,
  },
  "patient-education/pms-vs-pmdd-understanding-difference": {
    title: "PMS vs PMDD: Understanding the Difference | Dr. Nandita Maitra Vadodara",
    description:
      "Learn the distinction between Premenstrual Syndrome (PMS) and Premenstrual Dysphoric Disorder (PMDD), their symptoms, and effective relief options.",
    canonical: `${SITE_URL}/patient-education/pms-vs-pmdd-understanding-difference`,
  },
  "patient-education/polycystic-ovary-syndrome-pcos": {
    title: "Polycystic Ovary Syndrome (PCOS): Guide | Dr. Nandita Maitra Vadodara",
    description:
      "A comprehensive guide to Polycystic Ovary Syndrome (PCOS) — symptoms, diagnosis, long-term health risks, and individualized management.",
    canonical: `${SITE_URL}/patient-education/polycystic-ovary-syndrome-pcos`,
  },
  "patient-education/painful-periods-dysmenorrhea": {
    title: "Painful Periods (Dysmenorrhea): Causes & Care | Dr. Nandita Maitra Vadodara",
    description:
      "Understanding menstrual cramps and painful periods — when pain is normal, when it indicates endometriosis or fibroids, and treatment options.",
    canonical: `${SITE_URL}/patient-education/painful-periods-dysmenorrhea`,
  },
  "patient-education/is-my-period-normal": {
    title: "Is My Period Normal? What Every Woman Should Know | Dr. Nandita Maitra Vadodara",
    description:
      "Guide to normal menstrual cycle length, flow, regularity, and warning signs that warrant evaluation by a gynecologist.",
    canonical: `${SITE_URL}/patient-education/is-my-period-normal`,
  },
  "patient-education/understanding-pcos": {
    title: "Understanding PCOS: Symptoms, Diagnosis & Management | Dr. Nandita Maitra Vadodara",
    description:
      "A clear, evidence-based guide to PCOS — symptoms, how it is diagnosed, and how it is effectively managed. By Dr. Nandita Maitra, OB-GYN in Vadodara, Gujarat.",
    canonical: `${SITE_URL}/patient-education/understanding-pcos`,
  },
  "patient-education/cervical-screening-pap-smear": {
    title: "Cervical Screening & Pap Smear Guide Vadodara | Dr. Nandita Maitra",
    description:
      "Why regular cervical screening and Pap smears are critical for women — when to start, how often, and what an abnormal result means. By Dr. Nandita Maitra, Vadodara.",
    canonical: `${SITE_URL}/patient-education/cervical-screening-pap-smear`,
  },
  "patient-education/navigating-menopause": {
    title: "Navigating Menopause: Evidence-Based Symptom Relief | Dr. Nandita Maitra Vadodara",
    description:
      "Evidence-based guide to menopause symptoms, hormone therapy, bone health, and long-term wellbeing. By Dr. Nandita Maitra, Senior OB-GYN in Vadodara.",
    canonical: `${SITE_URL}/patient-education/navigating-menopause`,
  },
  "patient-education/early-pregnancy-care-first-trimester": {
    title: "Early Pregnancy Care – First Trimester Guide | Dr. Nandita Maitra Vadodara",
    description:
      "A practical guide for the first trimester — tests, warning signs, and antenatal care. By Dr. Nandita Maitra, Senior Obstetrician in Vadodara.",
    canonical: `${SITE_URL}/patient-education/early-pregnancy-care-first-trimester`,
  },
  "patient-education/fertility-evaluation-when-to-consult": {
    title: "Fertility Evaluation: When to Consult a Gynecologist | Dr. Nandita Maitra Vadodara",
    description:
      "When should couples seek fertility evaluation? Causes, tests, and when to consult — by Dr. Nandita Maitra, Senior Gynecologist in Vadodara.",
    canonical: `${SITE_URL}/patient-education/fertility-evaluation-when-to-consult`,
  },
  "services/cervical-cancer-screening": {
    title: "Cervical Cancer Screening | Dr. Nandita Maitra Vadodara",
    description:
      "Comprehensive cervical cancer screening including Pap smear and HPV testing by Dr. Nandita Maitra, Senior Gynecologist in Vadodara.",
    canonical: `${SITE_URL}/services/cervical-cancer-screening`,
  },
  "services/colposcopy-and-vulval-evaluation": {
    title: "Colposcopy and Vulval Evaluation | Dr. Nandita Maitra Vadodara",
    description:
      "Detailed examination of the cervix, vagina, and vulva using colposcopy and vulvoscopy for abnormal smears, HPV, and vulval symptoms.",
    canonical: `${SITE_URL}/services/colposcopy-and-vulval-evaluation`,
  },
  "services/gynecologic-ultrasound": {
    title: "Gynecologic Ultrasound | Dr. Nandita Maitra Vadodara",
    description:
      "Expert pelvic ultrasound for diagnosing abnormal bleeding, pain, cysts, and fertility issues.",
    canonical: `${SITE_URL}/services/gynecologic-ultrasound`,
  },
  "services/fertility-consultation": {
    title: "Fertility Consultation & Evaluation | Dr. Nandita Maitra Vadodara",
    description:
      "Systematic fertility evaluation and guidance for conception and reproductive health.",
    canonical: `${SITE_URL}/services/fertility-consultation`,
  },
  "services/pcos-care": {
    title: "PCOS Care & Treatment | Dr. Nandita Maitra Vadodara",
    description:
      "Individualized treatment for PCOS including cycle regulation and metabolic guidance.",
    canonical: `${SITE_URL}/services/pcos-care`,
  },
  "services/menopause-consultation": {
    title: "Menopause Consultation | Dr. Nandita Maitra Vadodara",
    description:
      "Evidence-based symptom relief and guidance on long-term health after menopause.",
    canonical: `${SITE_URL}/services/menopause-consultation`,
  },
  "services/early-pregnancy-care": {
    title: "Early Pregnancy Care & Antenatal Consultation | Dr. Nandita Maitra Vadodara",
    description:
      "Expert consultation for early pregnancy concerns, antenatal guidance, and high-risk care.",
    canonical: `${SITE_URL}/services/early-pregnancy-care`,
  },
  "services/preconception-counselling": {
    title: "Preconception Counselling | Dr. Nandita Maitra Vadodara",
    description:
      "Pre-pregnancy health optimisation and counselling to support a healthy conception and pregnancy.",
    canonical: `${SITE_URL}/services/preconception-counselling`,
  },
  "services/second-opinion": {
    title: "Second Opinion Consultation | Dr. Nandita Maitra Vadodara",
    description:
      "Careful second opinion for complex gynecological problems and uncertain diagnoses.",
    canonical: `${SITE_URL}/services/second-opinion`,
  },
  contact: {
    title: "Appointment and Enquiries | Panchshil Gynecology Clinic Vadodara",
    description:
      "Book a consultation with Dr. Nandita Maitra at Race Course Medical Centre, Vadodara. Call 0265-2331818.",
    canonical: `${SITE_URL}/contact`,
  },
  privacy: {
    title: "Privacy Policy | Panchshil Gynecology Clinic Vadodara",
    description:
      "Privacy Policy of Panchshil Gynecology Clinic — how we protect your personal and medical data.",
    canonical: `${SITE_URL}/privacy`,
  },
  disclaimer: {
    title: "Professional & Legal Disclaimer | Panchshil Gynecology Clinic Vadodara",
    description:
      "Professional and legal disclaimer for Panchshil Gynecology Clinic — medical information, scope of service, and regulatory compliance.",
    canonical: `${SITE_URL}/disclaimer`,
  },
  faq: {
    title: "FAQs — Women's Health Questions | Dr. Nandita Maitra Vadodara",
    description:
      "Frequently asked questions about gynecology, PCOS, cervical screening, menopause, fertility, and pregnancy — answered by Dr. Nandita Maitra.",
    canonical: `${SITE_URL}/faq`,
  },
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

/** Build the complete <head> SEO block for a given meta entry */
function buildSeoBlock(meta) {
  return `
    <link data-rh="true" rel="canonical" href="${meta.canonical}" />

    <meta data-rh="true" property="og:title" content="${meta.title}" />
    <meta data-rh="true" property="og:description" content="${meta.description}" />
    <meta data-rh="true" property="og:url" content="${meta.canonical}" />
    <meta data-rh="true" property="og:type" content="website" />
    <meta data-rh="true" property="og:locale" content="en_IN" />
    <meta data-rh="true" property="og:image" content="${OG_IMAGE}" />
    <meta data-rh="true" property="og:image:width" content="1200" />
    <meta data-rh="true" property="og:image:height" content="630" />

    <meta data-rh="true" name="twitter:card" content="summary_large_image" />
    <meta data-rh="true" name="twitter:title" content="${meta.title}" />
    <meta data-rh="true" name="twitter:description" content="${meta.description}" />
    <meta data-rh="true" name="twitter:image" content="${OG_IMAGE}" />

    <meta data-rh="true" name="geo.region" content="IN-GJ" />
    <meta data-rh="true" name="geo.placename" content="Vadodara, Gujarat" />
    <meta data-rh="true" name="geo.position" content="22.310784;73.165440" />
    <meta data-rh="true" name="ICBM" content="22.310784, 73.165440" />`;
}

/** Inject page-specific SEO tags and fix shared content in an HTML template */
function injectSeo(html, meta) {
  // 1. Replace <title>
  html = html.replace(
    /<title[^>]*>[^<]*<\/title>/,
    `<title data-rh="true">${meta.title}</title>`
  );

  // 2. Replace or insert <meta name="description">
  if (html.includes('name="description"')) {
    html = html.replace(
      /<meta[^>]*name="description"[^>]*"/,
      `<meta data-rh="true" name="description" content="${meta.description}"`
    );
  } else {
    html = html.replace(
      "</head>",
      `  <meta data-rh="true" name="description" content="${meta.description}" />\n</head>`
    );
  }

  // 3. Fix JSON-LD "telephon" typo → "telephone" and fix domain
  html = html.replace(/"telephon":/g, '"telephone":');
  html = html.replace(/https:\/\/panchshilgynecologyclinic\.com/g, SITE_URL);
  html = html.replace(/https:\/\/www\.panchshilgynecologyclinic\.com/g, SITE_URL);

  // 4. Fix trailing comma before ] in JSON-LD openingHoursSpecification
  html = html.replace(/,(\s*)\]/g, '$1]');

  // 5. Strip existing OG / Twitter / canonical / geo tags from base template
  //    to prevent duplicates — we will re-inject page-specific ones below.
  html = html.replace(/<meta[^>]*property="og:[^"]*"[^>]*>\s*/g, "");
  html = html.replace(/<meta[^>]*name="twitter:[^"]*"[^>]*>\s*/g, "");
  html = html.replace(/<link[^>]*rel="canonical"[^>]*>\s*/g, "");
  html = html.replace(/<meta[^>]*name="geo\.[^"]*"[^>]*>\s*/g, "");
  html = html.replace(/<meta[^>]*name="ICBM"[^>]*>\s*/g, "");

  // 6. Inject clean, page-specific SEO block just before </head>
  html = html.replace("</head>", `${buildSeoBlock(meta)}\n  </head>`);

  return html;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

const sourceHtml = path.join(distDir, "index.html");

if (!fs.existsSync(sourceHtml)) {
  console.error("❌ dist/index.html not found. Run `vite build` first.");
  process.exit(1);
}

const template = fs.readFileSync(sourceHtml, "utf-8");

// ── Root page (dist/index.html itself) ────────────────────────────────────
const rootHtml = injectSeo(template, pageMeta.root);
fs.writeFileSync(sourceHtml, rootHtml);
console.log("✅ Updated: dist/index.html (root /  page)");

// ── Sub-route pages ────────────────────────────────────────────────────────
routes.forEach((route) => {
  const routeDir = path.join(distDir, route);
  fs.mkdirSync(routeDir, { recursive: true });

  const meta = pageMeta[route];
  if (!meta) {
    // Fallback: copy root html unchanged
    fs.writeFileSync(path.join(routeDir, "index.html"), rootHtml);
    console.warn(`⚠️  No pageMeta for "${route}" — used root fallback.`);
    return;
  }

  const html = injectSeo(template, meta);
  fs.writeFileSync(path.join(routeDir, "index.html"), html);
  console.log(`✅ Generated: dist/${route}/index.html`);
});

// ── sitemap.xml ───────────────────────────────────────────────────────────
const allPages = [
  { url: `${SITE_URL}/`, priority: "1.0", changefreq: "weekly" },
  ...routes.map((r) => ({
    url: `${SITE_URL}/${r}`,
    priority: r.startsWith("patient-education/") || r.startsWith("services/") ? "0.7" : "0.8",
    changefreq: "weekly",
  })),
];

const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD for lastmod

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (p) => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemapXml);
console.log("✅ Generated: dist/sitemap.xml");

// ── robots.txt ────────────────────────────────────────────────────────────
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.join(distDir, "robots.txt"), robotsTxt);
console.log("✅ Generated: dist/robots.txt");

console.log(
  `\n🚀 Pre-render complete! ${routes.length} route HTML files + sitemap.xml + robots.txt generated.\n`
);
