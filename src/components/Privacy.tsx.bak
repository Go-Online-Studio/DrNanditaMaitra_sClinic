import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, FileText, UserCheck, Bell, Mail, Phone } from 'lucide-react';
import PageSEO from './PageSEO';

const LAST_UPDATED = 'July 1, 2025';
const CLINIC_NAME = "Dr. Nandita Maitra's Clinic";
const CONTACT_EMAIL = 'info@drnanditamaitra.com';
const CONTACT_PHONE = '0265-2331818';

const sections = [
  {
    icon: Eye,
    id: 'information-we-collect',
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Personal Information',
        text: 'When you contact our clinic or use our website, we may collect your name, phone number, email address, age, and the nature of your medical inquiry. This information is used solely for appointment scheduling and patient communication.',
      },
      {
        subtitle: 'Medical Information',
        text: 'Any health-related information you share — such as medical history, symptoms, or surgical records — is treated as strictly confidential medical data under Indian healthcare regulations and is never shared with third parties without your explicit consent.',
      },
      {
        subtitle: 'Website Usage Data',
        text: 'Our website may automatically collect anonymized technical data such as browser type, IP address, pages visited, and visit duration through standard web analytics. This data contains no personal identifiers and is used solely to improve site performance.',
      },
    ],
  },
  {
    icon: Lock,
    id: 'how-we-use-information',
    title: 'How We Use Your Information',
    content: [
      {
        subtitle: 'Appointment & Communication',
        text: 'Contact information is used to schedule and confirm your appointments, send reminders, and respond to your inquiries. We do not use your contact data for unsolicited marketing.',
      },
      {
        subtitle: 'Clinical Care',
        text: 'Medical information shared with our clinic is used exclusively to provide appropriate clinical care and follow-up. It is recorded in our confidential patient files in accordance with the Indian Medical Council regulations.',
      },
      {
        subtitle: 'Website Improvement',
        text: 'Anonymized usage analytics help us understand how visitors navigate our website so we can improve content and usability. No personal data is used for this purpose.',
      },
    ],
  },
  {
    icon: Shield,
    id: 'data-protection',
    title: 'Data Protection & Security',
    content: [
      {
        subtitle: 'Confidentiality Commitment',
        text: 'All patient data is protected under the strict confidentiality standards of the Indian Medical Council Act. Our clinic staff is bound by professional confidentiality obligations and does not disclose patient information to any unauthorized party.',
      },
      {
        subtitle: 'Technical Security',
        text: 'Our website uses HTTPS encryption to protect data transmitted between your browser and our server. Any digital patient records maintained by our clinic are stored on access-controlled, password-protected systems.',
      },
      {
        subtitle: 'Physical Security',
        text: 'Paper records are stored in locked filing cabinets accessible only to authorized clinical staff within our clinic premises at Race Course Medical Centre, Vadodara.',
      },
    ],
  },
  {
    icon: UserCheck,
    id: 'sharing-information',
    title: 'Sharing of Information',
    content: [
      {
        subtitle: 'No Third-Party Sharing',
        text: "We do not sell, rent, or trade your personal or medical information to any third party. Your data is not used for targeted advertising or shared with commercial entities.",
      },
      {
        subtitle: 'Referrals & Specialists',
        text: 'If your care requires referral to a specialist or hospital, we will share only the medically relevant information with your prior informed consent, following standard clinical referral protocols.',
      },
      {
        subtitle: 'Legal Obligations',
        text: 'In rare circumstances required by Indian law — such as specific communicable disease reporting obligations or a court order — we may be required to disclose limited information to appropriate authorities.',
      },
    ],
  },
  {
    icon: FileText,
    id: 'your-rights',
    title: 'Your Rights as a Patient',
    content: [
      {
        subtitle: 'Access to Records',
        text: 'You have the right to request access to your medical records maintained by our clinic. Such requests should be made in writing to our clinic and will be addressed within a reasonable timeframe.',
      },
      {
        subtitle: 'Correction of Information',
        text: 'If you believe any personal information we hold is inaccurate or incomplete, you have the right to request corrections. Please contact us with the relevant details.',
      },
      {
        subtitle: 'Withdrawal of Consent',
        text: 'You may withdraw your consent for non-essential communications (such as appointment reminders via WhatsApp) at any time by notifying us. This will not affect your right to receive clinical care.',
      },
    ],
  },
  {
    icon: Bell,
    id: 'cookies',
    title: 'Cookies & Tracking',
    content: [
      {
        subtitle: 'Essential Cookies',
        text: 'Our website may use essential technical cookies to ensure basic functionality. These cookies do not collect personally identifiable information.',
      },
      {
        subtitle: 'Analytics',
        text: 'We may use anonymized Google Analytics or equivalent tools to understand website traffic. These analytics do not store or process any identifiable patient information.',
      },
      {
        subtitle: 'Opting Out',
        text: 'You can disable cookies in your browser settings. This will not affect your ability to access clinic information, but some website features may not function optimally.',
      },
    ],
  },
];

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F9F8F8] min-h-screen" id="privacy-policy-page">
      <PageSEO pageKey="privacy" />

      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#4e2627] via-[#6b3535] to-[#4e2627] py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-[#d19890]/10 blur-3xl" />
          <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-[#a46b66]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-[#d19890] hover:text-white transition-colors focus:outline-none"
            id="privacy-back-btn"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#d19890]/20 border border-[#d19890]/30">
              <Shield className="h-7 w-7 text-[#d19890]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#d19890]/70">Legal</span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">Privacy Policy</h1>
            </div>
          </div>

          <p className="text-[#F9F8F8]/75 text-sm leading-relaxed max-w-2xl">
            {CLINIC_NAME} is committed to protecting the privacy and confidentiality of all patients and website visitors. This policy explains how we collect, use, and safeguard your information.
          </p>
          <p className="mt-4 text-xs text-[#d19890]/60 font-mono">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl border border-[#d19890]/15 bg-white p-6 shadow-sm mb-12">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#4e2627] mb-4">Contents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-[#4e2627] transition-colors py-1 group"
              >
                <span className="text-[#d19890] font-bold text-xs w-5">{String(i + 1).padStart(2, '0')}.</span>
                <span className="group-hover:underline underline-offset-2">{s.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d19890]/15">
                    <Icon className="h-5 w-5 text-[#a46b66]" />
                  </div>
                  <h2 className="font-serif text-xl font-bold text-[#4e2627]">{section.title}</h2>
                </div>
                <div className="space-y-6 pl-13">
                  {section.content.map((item) => (
                    <div key={item.subtitle} className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                      <h3 className="text-sm font-bold text-[#4e2627] mb-2">{item.subtitle}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[#4e2627] to-[#6b3535] p-8 text-center">
          <h2 className="font-serif text-xl font-bold text-white mb-3">Privacy Concerns or Requests?</h2>
          <p className="text-[#F9F8F8]/75 text-sm mb-6">
            If you have questions about this privacy policy or wish to exercise your data rights, please contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 px-6 py-3 text-sm font-semibold text-white transition-all"
            >
              <Mail className="h-4 w-4" />
              {CONTACT_EMAIL}
            </a>
            <a
              href={`tel:+912652331818`}
              className="inline-flex items-center gap-2 rounded-full bg-[#d19890] hover:bg-[#a46b66] px-6 py-3 text-sm font-semibold text-[#4e2627] transition-all"
            >
              <Phone className="h-4 w-4" />
              {CONTACT_PHONE}
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-slate-400 leading-relaxed">
          This privacy policy applies to the website of {CLINIC_NAME}. It may be updated periodically to reflect changes in our practices or legal requirements. Continued use of our website or services after any changes constitutes your acceptance of the updated policy.
        </p>
      </div>
    </div>
  );
}
