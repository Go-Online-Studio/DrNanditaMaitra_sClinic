import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageSEO from './PageSEO';
import { ArrowLeft, Award, BookOpen, GraduationCap, Heart, HeartHandshake, ArrowRight, Star, Quote, Users, Shield, Globe } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function About() {
  const navigate = useNavigate();

  const clinicImages = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=1200"
  ];
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

        {/* Banner Section */}
        <div className="w-full mb-12 lg:mb-16 rounded-3xl overflow-hidden border border-[#d19890]/25 shadow-md h-64 md:h-80 lg:h-[400px]">
           <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" alt="Clinic Interior" className="w-full h-full object-cover" />
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-20">
          
          {/* Left Column - 35% */}
          <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="w-48 h-48 sm:w-56 sm:h-56 overflow-hidden rounded-full border-4 border-[#F9F8F8] shadow-lg shrink-0 mx-auto lg:mx-0">
               <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400"
                  alt="Dr. Nandita Maitra"
                  className="w-full h-full object-cover grayscale-40 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
            </div>
            
            <div className="space-y-2 w-full">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4e2627]">
                Dr. Nandita Maitra
              </h2>
              <p className="font-sans text-sm font-bold text-[#a46b66]">
                MBBS, MD, FRCOG
              </p>
              <p className="font-serif text-lg text-slate-700">
                Senior Consultant Gynecologist & Obstetrician
              </p>
            </div>
            
            <hr className="w-full border-t border-[#d19890]/30 my-4" />
            
            <div className="w-full text-sm text-slate-600 font-sans space-y-1">
              <p className="font-semibold text-[#4e2627]">Former Additional Professor & Unit Head</p>
              <p>Department of Obstetrics & Gynecology</p>
              <p>Medical College & SSG Hospital, Vadodara</p>
            </div>
            
            <div className="w-full space-y-3 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#a46b66]">Professional Registrations</h4>
              <div className="space-y-3">
                 <div className="flex items-center gap-3 text-sm text-slate-600 justify-center lg:justify-start">
                   <Shield className="h-4.5 w-4.5 text-[#d19890] shrink-0" />
                   <span>Gujarat Medical Council Registration No. G-4169</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-slate-600 justify-center lg:justify-start">
                   <Globe className="h-4.5 w-4.5 text-[#d19890] shrink-0" />
                   <span>RCOG (UK) Registration No. 102761</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column - 65% */}
          <div className="w-full lg:w-[65%] space-y-6 lg:pt-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#4e2627]">
              Academic & Clinical Biography
            </span>
            <div className="space-y-5 text-slate-600 text-sm md:text-base leading-relaxed font-sans mt-4">
              <p>
                <b>Dr. Nandita Maitra, MBBS, MD, FRCOG,</b> is a Senior Consultant Gynecologist and Obstetrician with over <b>35 years of distinguished experience</b> in women's healthcare, obstetrics, gynecology, academic medicine, and clinical teaching.
              </p>
              <p>
                She completed her <b>MBBS and MD in Obstetrics & Gynecology</b> from Medical College, Baroda, and holds the prestigious <b>FRCOG (Fellow of the Royal College of Obstetricians and Gynaecologists, United Kingdom)</b>.
              </p>
              <p>
                Dr. Maitra dedicated more than three decades to the Department of Obstetrics & Gynecology at <b>Medical College and SSG Hospital, Vadodara</b>, where she served as <b>Additional Professor and Unit Head</b> before her retirement. Throughout her academic career, she was actively involved in undergraduate and postgraduate teaching, mentoring future obstetricians and gynecologists while providing comprehensive care to thousands of women.
              </p>
              <p>
                Today, through <b>GYNECOLOGY CLINIC</b>, Dr. Maitra combines decades of academic expertise with compassionate, evidence-based clinical practice. She is committed to providing ethical, individualized care in accordance with National Medical Commission (NMC) ethical guidelines and current evidence-based practice.
              </p>
              
              <div className="pt-6 mt-2 border-t border-[#d19890]/20 space-y-4">
                <p className="text-sm text-slate-600">
                  Take the next step in your healthcare journey with compassionate, evidence-based support.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => navigate('/contact')}
                    className="rounded-full bg-[#4e2627] hover:bg-[#a46b66] text-white px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:translate-y-[-1px] focus:outline-none flex items-center justify-center gap-2 w-full sm:w-auto"
                  >
                    <span>Book Appointment Now</span>
                    <ArrowRight className="shrink-0 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Visuals Carousel */}
        <div className="mb-20">
          <div className="text-center space-y-2 mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4e2627]">Our Facility</h3>
            <p className="text-sm text-slate-500">A glimpse into our comfortable and modern clinic</p>
          </div>
          <div className="rounded-3xl overflow-hidden border border-[#d19890]/25 shadow-xl bg-white p-2 sm:p-3">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              rewind={true}
              className="w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden"
              style={{
                '--swiper-theme-color': '#4e2627',
                '--swiper-navigation-size': '24px',
                '--swiper-pagination-bullet-inactive-color': '#d19890',
                '--swiper-pagination-bullet-inactive-opacity': '0.5'
              } as React.CSSProperties}
            >
              {clinicImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img src={img} alt={`Clinic View ${idx + 1}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
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
                  At <b>Gynecology Clinic</b>, we believe that women’s healthcare should be <b>scientifically sound, ethically grounded, and personally attentive</b>. Our approach combines clinical experience, academic rigor, and evidence-based practice with a strong emphasis on prevention, accurate diagnosis, and individualized treatment.
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

      </div>
    </div>
  );
}
