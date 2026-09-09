import { useState, useEffect, useRef, ChangeEvent, FormEvent, MouseEvent } from 'react';
import { X, CheckCircle, Calendar, User, Phone, MessageSquare, Send } from 'lucide-react';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink';
import { submitToGoogleSheet } from '../services/googleSheets';
import { validateName, validatePhone } from '../utils/validation';
import { useWhatsAppModal } from '../context/WhatsAppModalContext';

interface FABFormData {
  patientName: string;
  patientPhone: string;
  reasonForVisit: string;
  preferredDate: string;
  message: string;
}

const INITIAL_FORM: FABFormData = {
  patientName: '',
  patientPhone: '',
  reasonForVisit: '',
  preferredDate: '',
  message: '',
};

export default function WhatsAppFAB() {
  const { getWhatsAppUrl } = useWhatsAppLink();
  const { isOpen, modalOptions, openWhatsAppModal, closeWhatsAppModal } = useWhatsAppModal();

  // Form state
  const [formData, setFormData] = useState<FABFormData>(INITIAL_FORM);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync reason from modal options if provided
  useEffect(() => {
    if (isOpen) {
      setShowPing(false);
      if (modalOptions.reason) {
        setFormData(prev => ({
          ...prev,
          reasonForVisit: modalOptions.reason || prev.reasonForVisit
        }));
      }
    }
  }, [isOpen, modalOptions]);

  // Ping animation pulse state
  const [showPing, setShowPing] = useState(true);

  // Stop ping after 6s on mount so it's attention-grabbing but not forever
  useEffect(() => {
    const t = setTimeout(() => setShowPing(false), 6000);
    return () => clearTimeout(t);
  }, []);

  // Re-enable ping when modal closes (after a brief delay)
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => setShowPing(true), 2000);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Close on backdrop click
  const backdropRef = useRef<HTMLDivElement>(null);
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) closeWhatsAppModal();
  };

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeWhatsAppModal();
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeWhatsAppModal]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formError) setFormError('');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation
    const nameErr = validateName(formData.patientName);
    if (nameErr) { setFormError(nameErr); return; }

    const phoneErr = validatePhone(formData.patientPhone);
    if (phoneErr) { setFormError(phoneErr); return; }

    if (!formData.reasonForVisit) {
      setFormError('Please select a reason for your visit.');
      return;
    }
    if (!formData.preferredDate) {
      setFormError('Please select a preferred date.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    // Store in Google Sheet
    await submitToGoogleSheet({
      name: formData.patientName,
      number: formData.patientPhone,
      reason: formData.reasonForVisit,
      date: formData.preferredDate,
      email: 'N/A',
      description: formData.message || 'N/A',
    });

    // Build rich emoji WhatsApp message
    const whatsappMessage =
`🌸 *New Appointment Request* 🌸
━━━━━━━━━━━━━━━━━━━━

👤 *Patient Name:*  ${formData.patientName.trim()}
📞 *Contact Number:*  ${formData.patientPhone.trim()}

🩺 *Reason for Visit:*  ${formData.reasonForVisit}
📅 *Preferred Date:*  ${formData.preferredDate}

📝 *Additional Details:*
${formData.message.trim() || 'No additional details provided.'}

━━━━━━━━━━━━━━━━━━━━
✨ Kindly confirm the appointment at your earliest convenience.
Thank you, Dr. Maitra's Clinic! 🙏`;

    const url = getWhatsAppUrl(whatsappMessage);

    setIsSubmitting(false);
    setSubmitted(true);

    // Open WhatsApp (mobile app or web, dynamically chosen by useWhatsAppLink)
    window.open(url, '_blank');
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setFormError('');
    setIsSubmitting(false);
    setSubmitted(false);
  };

  const handleOpen = () => {
    openWhatsAppModal();
    setShowPing(false);
  };

  // Today's date in YYYY-MM-DD for min-date on date picker
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <>
      {/* ── FAB Button ── */}
      <div className="relative" id="whatsapp-fab-wrapper">
        {/* Ping ring */}
        {showPing && (
          <div
            className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-60"
            style={{ animationDuration: '2s' }}
            aria-hidden="true"
          />
        )}
        <button
          onClick={handleOpen}
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:bg-[#128C7E] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:ring-offset-2"
          aria-label="Contact us on WhatsApp"
          id="whatsapp-fab-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </button>
      </div>

      {/* ── Modal Overlay ── */}
      {isOpen && (
        <div
          ref={backdropRef}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4"
          style={{ background: 'rgba(30,10,10,0.55)', backdropFilter: 'blur(4px)' }}
          role="dialog"
          aria-modal="true"
          aria-label="WhatsApp Inquiry Form"
        >
          {/* Modal Panel */}
          <div
            className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden"
            style={{ animation: 'fabModalSlideUp 0.32s cubic-bezier(0.34,1.56,0.64,1) both' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#128C7E] to-[#25D366] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">WhatsApp Inquiry</p>
                  <p className="text-white/75 text-[11px] leading-tight">Dr. Nandita Maitra's Clinic</p>
                </div>
              </div>
              <button
                onClick={() => closeWhatsAppModal()}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30 transition-colors focus:outline-none"
                aria-label="Close form"
                id="whatsapp-fab-close-btn"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 py-5 max-h-[80vh] overflow-y-auto">
              {submitted ? (
                /* ── Success State ── */
                <div className="flex flex-col items-center text-center gap-4 py-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle className="h-9 w-9 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#4e2627]">Inquiry Sent! 🎉</h3>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                      Your request has been forwarded to WhatsApp. Our team will confirm your appointment shortly.
                    </p>
                  </div>
                  <div className="w-full rounded-xl bg-[#f0fdf4] border border-emerald-100 p-4 text-left space-y-1.5 text-xs text-slate-700">
                    <div className="flex items-center gap-2"><span>👤</span><span><strong>Name:</strong> {formData.patientName}</span></div>
                    <div className="flex items-center gap-2"><span>📞</span><span><strong>Phone:</strong> {formData.patientPhone}</span></div>
                    <div className="flex items-center gap-2"><span>🩺</span><span><strong>Reason:</strong> {formData.reasonForVisit}</span></div>
                    <div className="flex items-center gap-2"><span>📅</span><span><strong>Date:</strong> {formData.preferredDate}</span></div>
                  </div>
                  <button
                    onClick={handleReset}
                    className="mt-2 text-xs font-semibold text-[#128C7E] hover:underline"
                    id="whatsapp-fab-new-inquiry-btn"
                  >
                    ✦ Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <p className="text-[11px] text-slate-500 leading-relaxed -mt-1">
                    🔒 Fill in the details below. Your information stays private and will be sent securely via WhatsApp.
                  </p>

                  {/* Error banner */}
                  {formError && (
                    <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-xs font-semibold text-red-600">
                      <span>⚠️</span> {formError}
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fab-patientName"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      <User className="h-3.5 w-3.5 text-[#25D366]" />
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fab-patientName"
                      name="patientName"
                      required
                      value={formData.patientName}
                      onChange={handleChange}
                      placeholder="e.g., Sharda Patel"
                      autoComplete="name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#25D366] focus:outline-none focus:ring-2 focus:ring-[#25D366]/20 transition-all"
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label
                      htmlFor="fab-patientPhone"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#25D366]" />
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="fab-patientPhone"
                      name="patientPhone"
                      required
                      value={formData.patientPhone}
                      onChange={handleChange}
                      placeholder="e.g., +91 98XXX XXXXX"
                      autoComplete="tel"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs font-mono text-slate-800 placeholder-slate-400 focus:border-[#25D366] focus:outline-none focus:ring-2 focus:ring-[#25D366]/20 transition-all"
                    />
                  </div>

                  {/* Reason for Visit */}
                  <div>
                    <label
                      htmlFor="fab-reasonForVisit"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      <span className="text-base leading-none">🩺</span>
                      Reason for Visit <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="fab-reasonForVisit"
                      name="reasonForVisit"
                      required
                      value={formData.reasonForVisit}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#25D366] focus:outline-none focus:ring-2 focus:ring-[#25D366]/20 transition-all"
                    >
                      <option value="">-- Choose Care Reason --</option>
                      <option value="General Consultation / Wellness">🏥 General Consultation / Wellness</option>
                      <option value="Pregnancy Confirmation & Maternity">🤰 Pregnancy Confirmation &amp; Maternity</option>
                      <option value="Infertility / Conception Issues">👶 Infertility / Conception Issues</option>
                      <option value="Second Surgical Opinion">🔍 Second Surgical Opinion</option>
                      <option value="Menopause / PCOS & Hormonal Care">💊 Menopause / PCOS &amp; Hormonal Care</option>
                      <option value="Ultrasound or Screenings">🖥️ Ultrasound or Screenings</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label
                      htmlFor="fab-preferredDate"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      <Calendar className="h-3.5 w-3.5 text-[#25D366]" />
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="fab-preferredDate"
                      name="preferredDate"
                      required
                      min={todayStr}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 focus:border-[#25D366] focus:outline-none focus:ring-2 focus:ring-[#25D366]/20 transition-all"
                    />
                  </div>

                  {/* Additional Details */}
                  <div>
                    <label
                      htmlFor="fab-message"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-[#25D366]" />
                      Additional Details
                      <span className="ml-1 text-[10px] font-normal text-slate-400">(Optional)</span>
                    </label>
                    <textarea
                      id="fab-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share any details about your health concern or preferences…"
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#25D366] focus:outline-none focus:ring-2 focus:ring-[#25D366]/20 transition-all"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="whatsapp-fab-submit-btn"
                    className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white py-3 text-xs font-bold uppercase tracking-wide transition-all shadow-md hover:shadow-lg hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#25D366]/40"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                        Sending to WhatsApp…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send via WhatsApp 💬
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] text-slate-400">
                    🔐 Your details are kept confidential and never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Keyframe animation injected inline */}
      <style>{`
        @keyframes fabModalSlideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
      `}</style>
    </>
  );
}
