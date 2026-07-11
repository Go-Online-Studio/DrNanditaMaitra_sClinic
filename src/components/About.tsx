import { useNavigate } from 'react-router-dom';
import PageSEO from './PageSEO';
import { ArrowLeft, Award, BookOpen, GraduationCap, Heart, HeartHandshake, ArrowRight, Star, Quote, Users } from 'lucide-react';

export default function About() {
  const navigate = useNavigate();
  // const milestoneTimeline = [
  //   {
  //     year: "1988",
  //     title: "Academic Beginnings & MD",
  //     description: "Completed MD in Obstetrics & Gynecology with prestigious clinical awards. Started active academic residency."
  //   },
  //   {
  //     year: "1995",
  //     title: "Assistant Professor Appointments",
  //     description: "Began teaching undergraduate and postgraduate medical students, establishing deep research benchmarks."
  //   },
  //   {
  //     year: "2005",
  //     title: "Department Chair & Professor",
  //     description: "Promoted to full Professor and subsequent Head of Department (HOD) of OBGYN at premier medical colleges."
  //   },
  //   {
  //     year: "2015",
  //     title: "Establishment of Private Scholarly Practice",
  //     description: "Inaugurated the high-precision consulting clinic in Race Course, Vadodara to deliver uncompromised ethical care."
  //   },
  //   {
  //     year: "2024 - Present",
  //     title: "Senior Clinical Advisor",
  //     description: "Continuing the legacy of non-commercialized medical consultation, second opinion evaluations, and high-risk case oversight."
  //   }
  // ];

  const credentials = [
    {
      title: "Academic Caliber & Leadership",
      desc: "Served at Medical College & SSG Hospital, Baroda for 33 years, retiring as Additional Professor & Unit Head."
    },
    {
      title: "FRCOG (United Kingdom)",
      desc: "Fellow of the Royal College of Obstetricians and Gynaecologists, reflecting global academic and clinical excellence."
    },
    {
      title: "Prolific Medical Author",
      desc: "Published more than 60 peer-reviewed articles and contributed 12 book chapters to academic gynecology."
    },
    {
      title: "Clinical Areas of Interest",
      desc: "Special interest in preventive gynecology, high-risk pregnancy, ultrasound, colposcopy, and vulvoscopy."
    }
  ];

  return (
    <div className="bg-[#F9F8F8] min-h-screen py-12" id="about-page-wrapper">
      <PageSEO pageKey="about" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-1.5 text-xs font-semibold text-[#a46b66] hover:text-[#4e2627] transition-colors focus:outline-none"
            id="about-back-btn"
          >
            <ArrowLeft className="shrink-0 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </button>
          <span className="text-slate-300">/</span>
          <span className="text-xs font-semibold text-slate-500">About the Clinician</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center mb-20">
          
          {/* Text Info */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d19890]/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#a46b66]">
              <GraduationCap className="h-4 w-4" /> Academic & Clinical Biography
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-bold text-[#4e2627]">
              Meet Dr. Nandita Maitra
            </h2>
            <p className="font-serif text-lg italic text-[#a46b66] font-medium">
              MBBS, MD, FRCOG &bull; Senior Consultant Gynecologist & Obstetrician
            </p>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-sans">
              <p>
                Dr. Nandita Maitra, MBBS, MD, FRCOG is a highly respected Senior Consultant Gynecologist and Obstetrician, carrying over <strong>33 years of distinguished experience</strong> in women’s healthcare, obstetrics, gynecology, academic medicine, and clinical teaching.
              </p>
              <p>
                She completed her MBBS and MD in Obstetrics and Gynecology from Medical College, Baroda, and holds the prestigious <strong>FRCOG</strong> (Fellow of the Royal College of Obstetricians and Gynaecologists, United Kingdom), reflecting her academic excellence, professional standing, and contribution to the field.
              </p>
              <p>
                Dr. Maitra served in the Department of Obstetrics and Gynecology at Medical College and SSG Hospital, Baroda, for 33 years and retired as Additional Professor and Unit Head. Over her accomplished academic and clinical career, she has trained numerous students and made significant contributions to patient care and medical education.
              </p>
            </div>

            {/* Micro Badges */}
            {/* <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              <div className="rounded-xl border border-[#d19890]/15 bg-white p-3 text-center">
                <div className="text-2xl font-serif font-bold text-[#4e2627]">35+</div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Years of Practice</div>
              </div>
              <div className="rounded-xl border border-[#d19890]/15 bg-white p-3 text-center">
                <div className="text-2xl font-serif font-bold text-[#4e2627]">15k+</div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Babies Delivered</div>
              </div>
              <div className="rounded-xl border border-[#d19890]/15 bg-white p-3 text-center">
                <div className="text-2xl font-serif font-bold text-[#4e2627]">40+</div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Research Papers</div>
              </div>
              <div className="rounded-xl border border-[#d19890]/15 bg-white p-3 text-center">
                <div className="text-2xl font-serif font-bold text-[#4e2627]">100%</div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Ethical Unbiased</div>
              </div>
            </div> */}
          </div>

          {/* Photo & Dr. Quote */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-[#d19890]/25 bg-white shadow-xl p-3">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600"
                alt="Dr. Nandita Maitra - Senior OBGYN Consultant"
                className="w-full h-[400px] object-cover rounded-2xl grayscale-60 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6 bg-[#4e2627] text-[#F9F8F8] p-2.5 rounded-xl shadow-lg border border-[#d19890]/20">
                <Award className="shrink-0 h-6 w-6 text-[#d19890]" />
              </div>
            </div>
            {/* <div className="rounded-2xl glass-panel-heavy p-3 sm:p-6 border border-[#d19890]/20 relative">
              <Quote className="absolute top-3 left-3 h-8 w-8 text-[#d19890]/15 pointer-events-none" />
              <p className="text-xs italic text-[#4e2627] leading-relaxed relative z-10 pl-4 sm:pl-6">
                "Medicine is a scholarly calling before it is a business. In gynecology, our role is to act as partners throughout a woman's life-stages—supporting natural outcomes first, and reserving surgery strictly for when scientifically necessary."
              </p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#a46b66] mt-3 pl-4 sm:pl-6">
                — Dr. Nandita Maitra
              </p>
            </div> */}
          </div>

        </div>

        {/* Credentials and Clinical Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Philosophy Card */}
          <div className="glass-panel rounded-3xl p-3 sm:p-8 border border-[#d19890]/20 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4e2627]/5 text-[#4e2627]">
                <Heart className="shrink-0 h-6 w-6 text-[#a46b66]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#4e2627]">Our Care Philosophy</h3>
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  At Gynecology Clinic, we believe that women’s healthcare should be scientifically sound, ethically grounded, and personally attentive. Our approach combines clinical experience, academic rigor, and evidence-based practice with a strong emphasis on prevention, accurate diagnosis, and individualized treatment.
                </p>
                <p>
                  Whether the concern is a menstrual problem, cervical screening, fertility evaluation, menopause, pelvic pain, or the need for a second opinion, our aim is to provide care that is thoughtful, balanced, and compassionate—with attention not only to the condition, but also to the woman’s age, priorities, and stage of life.
                </p>
              </div>
            </div>
            
            {/* <div className="border-t border-[#d19890]/10 pt-6 mt-6">
              <div className="flex items-center gap-3">
                <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4e2627]">Trusted by 12,000+ Families in Vadodara</span>
              </div>
            </div> */}
          </div>

          {/* Credentials Listing */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#4e2627] mb-2 px-2">Clinical Highlights & Qualifications</h3>
            <div className="grid grid-cols-1 gap-4">
              {credentials.map((cred, idx) => (
                <div key={idx} className="glass-card border border-[#d19890]/20 p-3 lg:p-5 rounded-2xl flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4e2627]/5 text-[#a46b66] shrink-0">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#4e2627]">{cred.title}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{cred.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Timeline Path */}
        {/* <div className="bg-white border border-[#d19890]/15 rounded-3xl p-3 sm:p-12 mb-20 shadow-sm">
          <div className="text-center space-y-2 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#a46b66]">The Path of Experience</span>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#4e2627]">Professional Milestones</h3>
          </div>

          <div className="relative border-l-2 border-[#d19890]/30 ml-4 md:ml-12 space-y-12">
            {milestoneTimeline.map((milestone, idx) => (
              <div key={idx} className="relative pl-6 lg:pl-8 md:pl-12 group">
            
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-white border-2 border-[#4e2627] group-hover:bg-[#4e2627] transition-all duration-300" />
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                  <span className="font-mono text-xs font-bold text-[#a46b66] bg-[#d19890]/10 px-2.5 py-0.5 rounded-md self-start">
                    {milestone.year}
                  </span>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#4e2627] group-hover:text-[#a46b66] transition-colors">
                      {milestone.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed max-w-2xl">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Professional Affiliations & Memberships */}
        <div className="bg-white border border-[#d19890]/15 rounded-3xl p-6 sm:p-10 mb-20 shadow-sm">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#4e2627] mb-6 flex items-center gap-2">
            <Users className="shrink-0 h-5 w-5 text-[#a46b66]" />
            <span>Professional Affiliations & Memberships</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Royal College of Obstetricians and Gynaecologists (RCOG), UK",
              "Federation of Obstetric and Gynaecological Societies of India (FOGSI)",
              "Indian Menopause Society (IMS)",
              "International Gynecologic Cancer Society (IGCS)",
              "Asia Oceania Research Organisation on Genital Infections and Neoplasia (AOGIN India)",
              "Association of Gynaecologic Oncologists of India (AGOI)",
              "Society of Fetal Medicine (SFM)"
            ].map((body, i) => (
              <span key={i} className="inline-flex items-center rounded-xl bg-[#d19890]/10 px-3.5 py-2 text-xs font-semibold text-[#4e2627] border border-[#d19890]/20 shadow-sm transition-all hover:bg-[#d19890]/20 hover:scale-102">
                {body}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Pre-footer block */}
        <div className="rounded-3xl glass-panel-heavy border border-[#d19890]/30 p-4 sm:p-8 md:p-12 text-center space-y-6">
          <HeartHandshake className="shrink-0 mx-auto h-12 w-12 text-[#a46b66] animate-scale-pulse" />
          <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#4e2627] max-w-xl mx-auto">
            Experience Transparent, Scholar-Led Care
          </h3>
          <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
            Choose a partner who respects your reproductive autonomy and provides guidelines-driven solutions. Consult with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="rounded-full bg-[#4e2627] hover:bg-[#a46b66] text-white px-4 py-4 text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:translate-y-[-1px] focus:outline-none flex items-center justify-center gap-2"
            >
              <span>Book Appointment Now</span>
              <ArrowRight className="shrink-0 h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
