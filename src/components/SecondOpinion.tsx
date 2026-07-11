import { useState, ChangeEvent, FormEvent } from 'react';
import { ShieldCheck, ArrowLeft, FileText, CheckCircle, Phone, Sparkles, AlertCircle } from 'lucide-react';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';
import { useNavigate } from 'react-router-dom';
import PageSEO from './PageSEO';

interface SecondOpinionProps {}

export default function SecondOpinion() {
  const navigate = useNavigate();
  const { getWhatsAppUrl } = useWhatsAppLink();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    recommendedSurgery: '',
    currentSymptoms: '',
    reportsList: '',
    urgentTriage: false
  });
  const [errors, setErrors] = useState({ name: '', phone: '', recommendedSurgery: '' });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when typing/selecting
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Clear errors first
    const newErrors = { name: '', phone: '', recommendedSurgery: '' };
    let hasError = false;

    if (!formData.name.trim()) {
      newErrors.name = 'Patient Full Name is required.';
      hasError = true;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Patient Full Name must be at least 3 characters.';
      hasError = true;
    }

    // Phone validation
    const phoneRegex = /^[+]?[0-9\s-]{10,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact Number is required.';
      hasError = true;
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-15 digit contact number (digits, spaces, hyphens, and optional + only).';
      hasError = true;
    }

    if (!formData.recommendedSurgery) {
      newErrors.recommendedSurgery = 'Please select the recommended surgery type.';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Compile a beautiful WhatsApp message containing the form data
    const formattedMessage = `Hello Dr. Maitra's Clinic,

I am requesting an Academic Surgical Second Opinion review. Here are my baseline details:
• Patient Name: ${formData.name.trim()}
• Contact Number: ${formData.phone.trim()}
• Recommended Surgery: ${formData.recommendedSurgery}
• Diagnostic Reports Available: ${formData.reportsList.trim() || 'None Specified'}
• History & Symptoms: ${formData.currentSymptoms.trim() || 'Not Provided'}
• Urgent Case Review (Surgery scheduled < 48hrs): ${formData.urgentTriage ? 'YES 🔴' : 'NO'}

Thank you!`;

    const whatsappUrl = getWhatsAppUrl(formattedMessage);

    // Set form state
    setFormSubmitted(true);

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[#F9F8F8] min-h-screen py-12" id="second-opinion-page">
      <PageSEO pageKey="second-opinion" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center gap-2 text-xs font-semibold text-[#a46b66] hover:text-[#4e2627] transition-colors focus:outline-none"
          id="back-to-home-so"
        >
          <ArrowLeft className="shrink-0 h-4 w-4" /> Back to Homepage
        </button>

        {/* Introduction */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-red-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-red-700">
            <Sparkles className="shrink-0 h-3.5 w-3.5" /> Empowering Patient Autonomy & Surgical Safety
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#4e2627]">
            Surgical Second Opinion
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Has another medical center advised a hysterectomy (uterus removal), complex keyhole laparoscopy, or major fibroid extraction? Let Dr. Nandita Maitra review your clinical records to confirm if surgery is truly indicated, or if a safe, non-invasive pharmacological pathway exists.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-2xl border border-[#d19890]/20 glass-card p-4 sm:p-6 space-y-2 shadow-sm">
            <h4 className="font-serif text-sm font-bold text-[#4e2627]">Minimize Unnecessary Procedures</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Medical surveys reveal up to 30% of recommended hysterectomies in gynecological settings could be safely avoided with modern conservative pharmacology.
            </p>
          </div>
          <div className="rounded-2xl border border-[#d19890]/20 glass-card p-4 sm:p-6 space-y-2 shadow-sm">
            <h4 className="font-serif text-sm font-bold text-[#4e2627]">35+ Years Academic Caliber</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              As a former Professor and Department Head, Dr. Maitra brings clinical wisdom to evaluate complex case records objectively.
            </p>
          </div>
          <div className="rounded-2xl border border-[#d19890]/20 glass-card p-4 sm:p-6 space-y-2 shadow-sm">
            <h4 className="font-serif text-sm font-bold text-[#4e2627]">Honest, Unbiased Analysis</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Operating entirely under clinician-led, patient-first ethics, we have zero corporate surgical targets or commission pressures.
            </p>
          </div>
        </div>

        {/* Second Opinion Interactive Triage Form */}
        <div className="rounded-3xl glass-panel border border-[#d19890]/20 shadow-xl p-3 sm:p-10 mb-12">
          {formSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CheckCircle className="shrink-0 h-8 w-8" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4e2627]">Records Triage Setup Successfully</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Dr. Maitra’s senior clinical desk has received your request regarding a recommended <span className="underline italic text-[#a46b66]">{formData.recommendedSurgery}</span>. We will call you at <span className="font-mono text-slate-900">{formData.phone}</span> shortly to coordinate your physical or digital record submissions.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+912652331818"
                  className="rounded-full bg-[#4e2627] hover:bg-[#a46b66] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider font-mono shadow-md text-center"
                >
                  Direct Call: 0265-2331818
                </a>
                <button
                  onClick={() => { setFormSubmitted(false); setFormData({ name: '', phone: '', recommendedSurgery: '', currentSymptoms: '', reportsList: '', urgentTriage: false }); }}
                  className="rounded-full border border-[#d19890] text-[#4e2627] hover:bg-white bg-white/40 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Reset Form
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#d19890]/10">
                <h3 className="font-serif text-lg font-bold text-[#4e2627] flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#a46b66]" />
                  <span>Surgical File Review Registration</span>
                </h3>
                <span className="text-[10px] bg-red-50 text-red-700 px-2.5 py-1 rounded-md font-bold uppercase tracking-wider flex items-center gap-1 border border-red-100">
                  <AlertCircle className="h-3 w-3" /> Strict Doctor-Patient Privilege Assured
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Sharda Patel"
                    className={`w-full rounded-xl border bg-white/40 focus:bg-white px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 transition-all ${
                      errors.name 
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-500' 
                        : 'border-[#d19890]/20 focus:border-[#a46b66] focus:ring-[#a46b66]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-[11px] text-red-600 font-semibold flex items-center gap-1">
                      ⚠ {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Contact Number (WhatsApp Enabled Preferred) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g., +91 90810 XXXXX"
                    className={`w-full rounded-xl border bg-white/40 focus:bg-white px-3.5 py-2.5 text-xs font-mono focus:outline-none focus:ring-1 transition-all ${
                      errors.phone 
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-500' 
                        : 'border-[#d19890]/20 focus:border-[#a46b66] focus:ring-[#a46b66]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-[11px] text-red-600 font-semibold flex items-center gap-1">
                      ⚠ {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="recommendedSurgery" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Surgery Advised Elsewhere *
                  </label>
                  <select
                    name="recommendedSurgery"
                    id="recommendedSurgery"
                    required
                    value={formData.recommendedSurgery}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl border bg-white/40 focus:bg-white px-3.5 py-2.5 text-xs focus:outline-none focus:ring-1 transition-all ${
                      errors.recommendedSurgery 
                        ? 'border-red-400 focus:border-red-500 focus:ring-red-500' 
                        : 'border-[#d19890]/20 focus:border-[#a46b66] focus:ring-[#a46b66]'
                    }`}
                  >
                    <option value="">-- Choose Surgery Type --</option>
                    <option value="Hysterectomy (Uterus Removal)">Hysterectomy (Uterus Removal)</option>
                    <option value="Myomectomy (Fibroid Removal)">Myomectomy (Fibroid Removal)</option>
                    <option value="Ovarian Cystectomy (Cyst Removal)">Ovarian Cystectomy (Cyst Removal)</option>
                    <option value="Laparoscopic Clearance (Endometriosis)">Laparoscopic Clearance (Endometriosis)</option>
                    <option value="Diagnostic Laparoscopy / Hysteroscopy">Diagnostic Laparoscopy / Hysteroscopy</option>
                    <option value="Other Surgical Procedure">Other Surgical Procedure</option>
                  </select>
                  {errors.recommendedSurgery && (
                    <p className="mt-1 text-[11px] text-red-600 font-semibold flex items-center gap-1">
                      ⚠ {errors.recommendedSurgery}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="reportsList" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Available Diagnostic Reports (e.g., Pelvic USG, MRI)
                  </label>
                  <input
                    type="text"
                    name="reportsList"
                    id="reportsList"
                    value={formData.reportsList}
                    onChange={handleInputChange}
                    placeholder="e.g., Transvaginal Scan, CA-125 markers"
                    className="w-full rounded-xl border border-[#d19890]/20 bg-white/40 focus:bg-white px-3.5 py-2.5 text-xs focus:border-[#a46b66] focus:outline-none focus:ring-1 focus:ring-[#a46b66] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="currentSymptoms" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Brief Medical History & Symptoms
                </label>
                <textarea
                  name="currentSymptoms"
                  id="currentSymptoms"
                  rows={3}
                  value={formData.currentSymptoms}
                  onChange={handleInputChange}
                  placeholder="Describe your current discomfort, heavy bleeding, pain, and how long surgery has been advised..."
                  className="w-full rounded-xl border border-[#d19890]/20 bg-white/40 focus:bg-white px-3.5 py-2.5 text-xs focus:border-[#a46b66] focus:outline-none focus:ring-1 focus:ring-[#a46b66] transition-all"
                />
              </div>

              <div className="flex items-center gap-3 bg-red-50/60 p-4 rounded-xl border border-red-100">
                <input
                  type="checkbox"
                  name="urgentTriage"
                  id="urgentTriage"
                  checked={formData.urgentTriage}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded text-[#a46b66] focus:ring-[#a46b66]"
                />
                <label htmlFor="urgentTriage" className="text-xs text-red-900 font-semibold">
                  <strong>Urgent Case Review:</strong> Check this if your surgery has been scheduled within the next 48 hours and you need an expedited academic consult.
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#4e2627] hover:bg-[#a46b66] text-white py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md focus:outline-none text-center"
                id="submit-second-opinion-btn"
              >
                Register Surgical File Review
              </button>
            </form>
          )}
        </div>

        {/* Safety Note */}
        <div className="rounded-2xl border border-[#d19890]/20 glass-panel-heavy p-4 sm:p-6 text-center flex items-start gap-4 shadow-sm">
          <ShieldCheck className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-600 text-left leading-relaxed">
            <strong>Clinical Regulatory Compliance:</strong> While digital file consultation is highly effective for preliminary analysis, a physical clinical evaluation at our Vadodara clinic may be required before Dr. Nandita Maitra can formulate a definitive medical recommendation or treatment adjustment.
          </p>
        </div>

      </div>
    </div>
  );
}
