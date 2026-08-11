import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';
import PageSEO from './PageSEO';

export default function Privacy() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F9F8F8]" id="privacy-policy-page">
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
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-10 shadow-sm space-y-6 text-slate-700 leading-relaxed font-sans text-sm md:text-base">
          <p>
                At <b>GYNECOLOGY CLINIC</b>, we respect your privacy and are committed to keeping your personal information <b>private and confidential</b>.
              </p>
              <p>
                Information submitted through our contact or appointment forms is used only to respond to your enquiry, schedule appointments, or facilitate your healthcare needs.
              </p>
              <p>
                We do not sell or use your personal information for marketing. Your data is handled responsibly in accordance with applicable laws, including the <b>Digital Personal Data Protection Act, 2023 (DPDP Act).</b>
              </p>
        </div>
      </div>
    </div>
  );
}
