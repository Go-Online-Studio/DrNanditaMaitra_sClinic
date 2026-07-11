# Project Structure & Customization Guide

This guide is designed to help you navigate, run, and modify this medical clinic React application. It outlines the project's technical stack, directories, commands, and exactly where you need to make changes to customize the branding, contact numbers, doctor info, and locations.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 19 (via Vite 6)
- **Language:** TypeScript (TSX)
- **Styling:** Tailwind CSS v4 (using the `@tailwindcss/vite` plugin for build integration)
- **Icons:** Lucide React (`lucide-react`)
- **State Management:** React's native Hook state (`useState`, `useEffect`) acting as a simple router in `src/App.tsx`.
- **Build tool:** Vite (configured with fast-build and page caching configurations).

---

## 📂 Folder Structure

Here is a breakdown of the directories and key files:

```text
📁 New folder/ (Workspace Root)
├── 📁 public/                     # Static assets served directly at root (unprocessed by Vite)
│   ├── 📁 images/                 # Main folder for all website images, logos, and photos
│   ├── README.md                  # Documentation on static asset behavior
│   └── favicon.ico                # Website browser tab favicon (copied directly to dist root)
├── 📁 src/                        # Core application source code
│   ├── 📁 components/             # Reusable UI views and layout sections
│   │   ├── About.tsx              # Doctor's profile, training, publications
│   │   ├── Contact.tsx            # Contact form (redirects to WhatsApp) & address timings
│   │   ├── Diagnostics.tsx        # High-precision scan details & diagnostic FAQs
│   │   ├── Fertility.tsx          # Fertility consulting page
│   │   ├── Footer.tsx             # Main footer (timings, maps iframe, disclaimer)
│   │   ├── GynWellness.tsx        # Gynecology services page
│   │   ├── Home.tsx               # Homepage (Hero, reviews, clinical indicators)
│   │   ├── Navbar.tsx             # Sticky responsive top navigation and branding header
│   │   ├── Obstetrics.tsx         # Maternity care / pregnancy journey page
│   │   └── SecondOpinion.tsx      # Surgical second opinion request form
│   ├── 📁 hooks/                  # Custom React Hooks
│   │   └── useWhatsAppLink.ts     # Detects device screen size & returns a parsed WhatsApp link
│   ├── App.tsx                    # Main app coordinator (holds page-switching router state)
│   ├── index.css                  # Core CSS styling & custom design system tokens
│   ├── main.tsx                   # React app entry point (mounts components into #root DOM)
│   └── types.ts                   # Central TypeScript types & interfaces
├── .env.example                   # Template file for setting up local environment variables
├── index.html                     # Root index HTML (stores site title, SEO descriptions, and schema)
├── package.json                   # List of node packages and script definitions
├── tsconfig.json                  # TypeScript compiler settings
└── vite.config.ts                 # Vite bundler server and build settings
```

---

## 🚀 Execution & Command Reference

Before running any script, make sure that dependencies are fully installed (we have already run this for you):

```bash
npm install
```

### 1. Run Development Server

Launches the local hot-reloading development server on port `3000`:

```bash
npm run dev
```

Open **`http://localhost:3000`** in your browser.

### 2. Build for Production

Compiles and minifies the source files, generating production bundles in the `/dist` directory:

```bash
npm run build
```

### 3. Check for TypeScript Errors

Validates that types are correct without compiling output files:

```bash
npm run lint
```

---

## ✏️ Customization Checklist (Where to Make Changes)

To customize this template for a different doctor, clinic, or location, follow this file-by-file checklist:

### 1. Website Title, SEO & Local Schema

Update the HTML title, search engine summaries, and JSON-LD schema (used by search engines like Google for local clinic indexing).

- 📄 **[index.html](file:///c:/Users/Admin/Desktop/New%20folder/index.html)**
  - **Line 6:** Edit page `<title>` tag.
  - **Line 7:** Edit the `<meta name="description">` content.
  - **Lines 14–54:** Edit the `application/ld+json` script fields including `"name"`, `"telephone"`, `"email"`, `"url"`, `"address"`, `"geo"` (latitude/longitude coordinates), and `"hasMap"`.

### 2. Clinic Name & Branding Header

Modify the branding and header name displayed at the top left of the site.

- 📄 **[src/components/Navbar.tsx](file:///c:/Users/Admin/Desktop/New%20folder/src/components/Navbar.tsx)**
  - **Line 69:** Update `<span>Dr. Nandita Maitra</span>`.
  - **Lines 74–76:** Update the consulting credentials ("35+ Years OB/GYN Expertise • Former Professor & Head").
  - **Line 240:** Update the mobile drawer navigation item `About Dr. Maitra`.

### 3. Emergency & Inquiry Phone Numbers

- 📄 **[src/App.tsx](file:///c:/Users/Admin/Desktop/New%20folder/src/App.tsx)**
  - **Line 71:** Update the triage emergency anchor tag `href="tel:+919081005399"`.
  - **Line 72:** Update the displayed emergency number string.
  - **Line 105:** Update the floating call widget's number `href="tel:+919081005399"`.
- 📄 **[src/components/Footer.tsx](file:///c:/Users/Admin/Desktop/New%20folder/src/components/Footer.tsx)**
  - **Line 44:** Update the clinic phone link `href="tel:+919081005399"`.
  - **Line 47:** Update the visible phone number text.

### 4. WhatsApp Number Setup

The project uses a mix of dynamic and hardcoded WhatsApp lines. **Ensure all of these are updated to the same target number:**

- **Dynamic Hook Setup:**
  - 📄 **[src/hooks/useWhatsAppLink.ts](file:///c:/Users/Admin/Desktop/New%20folder/src/hooks/useWhatsAppLink.ts)**
    - **Line 48:** Change `const phoneNumber = "919081005399"` to your new clinic's country-code formatted number (no spaces, plus signs, or hyphens).
- **Hardcoded Link References:**
  - 📄 **[src/components/Home.tsx](file:///c:/Users/Admin/Desktop/New%20folder/src/components/Home.tsx)**
    - **Line 258:** Update link `https://wa.me/919081005399...`
    - **Line 312:** Update link `https://wa.me/919081005399...`
  - 📄 **[src/components/Obstetrics.tsx](file:///c:/Users/Admin/Desktop/New%20folder/src/components.tsx)**
    - **Line 79:** Update link `https://wa.me/919081005399...`
  - 📄 **[src/components/Fertility.tsx](file:///c:/Users/Admin/Desktop/New%20folder/src/components/Fertility.tsx)**
    - **Line 79:** Update link `https://wa.me/919081005399...`

### 5. Email Addresses

- 📄 **[src/components/Footer.tsx](file:///c:/Users/Admin/Desktop/New%20folder/src/components/Footer.tsx)**
  - **Line 53:** Update `href="mailto:contact@drnanditamaitra.com"`.
  - **Line 56:** Update visible text `info@drnanditamaitra.com`.

### 6. Clinic Map Location & Embeds

Update the physical address text and replace the Google Maps iframe widget.

- **Footer Map:**
  - 📄 **[src/components/Footer.tsx](file:///c:/Users/Admin/Desktop/New%20folder/src/components/Footer.tsx)**
    - **Lines 36–38:** Update physical address text.
    - **Line 141:** Update the "Open Google Maps" external link query.
    - **Line 150:** Replace the Google Maps `src` iframe URL with the new clinic's coordinate embed code.
- **Contact Page Map:**
  - 📄 **[src/components/Contact.tsx](file:///c:/Users/Admin/Desktop/New%20folder/src/components/Contact.tsx)**
    - Replace address labels and coordinates map iframe (near the bottom of the file).

### 7. Professional Experience & Bio Details

To modify the doctor's narrative, publications, clinical awards, or patient success metrics:

- 📄 **[src/components/About.tsx](file:///c:/Users/Admin/Desktop/New%20folder/src/components/About.tsx)**: Edit detailed credentials, teaching histories, and professional photos.
- 📄 **[src/components/Home.tsx](file:///c:/Users/Admin/Desktop/New%20folder/src/components/Home.tsx)**: Modify landing page taglines, custom ratings/testimonials, and section graphics.
