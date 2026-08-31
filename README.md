# Dr. Nandita Maitra - Senior OB/GYN Clinic Website

Official website for Dr. Nandita Maitra, Senior Obstetrician & Gynecologist with 35+ years of clinical and academic experience in Vadodara, Gujarat.

## Features

- **Responsive Design**: Fast, modern, accessible UI built with React and Tailwind CSS.
- **Appointment & Inquiry Booking**: Integrated form handling connecting to Google Sheets via Google Apps Script.
- **SEO & Social Sharing**: Pre-rendered static pages, structured schema metadata, and Open Graph / Twitter cards.
- **Comprehensive Patient Guides**: Educational content on prenatal care, high-risk pregnancy, menopause, and gynecological surgeries.

## Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + Motion
- **Icons & UI**: Lucide Icons, Swiper, Fancybox
- **Backend / Form Storage**: Google Apps Script & Google Sheets

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables in `.env`:
   ```env
   GOOGLE_SCRIPT_URL="<your-google-apps-script-web-app-url>"
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production with static prerendering:
   ```bash
   npm run build
   ```
