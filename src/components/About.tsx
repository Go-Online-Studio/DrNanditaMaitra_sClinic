import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageSEO from './PageSEO';
import { ZoomIn, ArrowLeft, Award, BookOpen, GraduationCap, Heart, HeartHandshake, ArrowRight, Star, Quote, Users, Shield, Globe } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    Fancybox.bind('[data-fancybox="facility-gallery"]', {
      Hash: false,
    });

    return () => {
      Fancybox.unbind('[data-fancybox="facility-gallery"]');
      Fancybox.close();
    };
  }, []);

  const clinicImages = [
    {
      url: "/images/GalleryAbout1.avif",
      caption: "Welcome to Gynecology Clinic."
    },
    {
      url: "/images/GalleryAbout4.avif",
      caption: "Welcome. Take a seat."
    },
    {
      url: "/images/GalleryAbout9.avif",
      caption: "Listening with empathy."
    },
    {
      url: "/images/GalleryAbout2.avif",
      caption: "Every woman deserves care in an environment that respects her privacy, dignity, and comfort"
    },
    {
      url: "/images/GalleryAbout8.avif",
      caption: "Listening first. Examining carefully. Imaging when it adds value."
    },
    {
      url: "/images/GalleryAbout10.avif",
      caption: "Colposcopy Closer examination. Clearer answers."
    },
    {
      url: "/images/GalleryAbout3.avif",
      caption: "Your safety is our priority. Committed to the standards of sterilization and patient safety."
    }
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
      desc: "Fellow of the Royal College of Obstetricians and Gynecologists, reflecting global academic and clinical excellence."
    },
    {
      title: "Research & Academic Contributions",
      desc: "Dr. Nandita Maitra has authored 63+ peer-reviewed publications, with 530+ citations and a Google Scholar h-index of 10, reflecting her longstanding contribution to research and academic medicine."
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
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start mb-20">
          
          {/* Left Column - 35% */}
          <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="w-48 h-48 sm:w-56 sm:h-56 overflow-hidden rounded-full border-4 border-[#F9F8F8] shadow-lg shrink-0 mx-auto lg:mx-0">
               <img
                  src="/images/ProfileDoctor.webp"
                  alt="Dr. Nandita Maitra"
                  className="w-full h-full object-cover"
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
                   <span>RCOG (UK) Membership Number 102761</span>
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
                <b>Dr. Nandita Maitra, MBBS, MD, FRCOG,</b> is a Senior Consultant Gynecologist and Obstetrician with over <b>35 years of experience</b> in women's healthcare, obstetrics, gynecology, academic medicine, and clinical teaching.
              </p>
              <p>
                She completed her <b>MBBS and MD in Obstetrics & Gynecology</b> from Medical College, Baroda, and holds <b>FRCOG (Fellow of the Royal College of Obstetricians and Gynecologists, United Kingdom)</b>.
              </p>
              <p>
                Dr. Maitra spent more than three decades in the Department of Obstetrics & Gynecology at <b>Medical College and SSG Hospital, Vadodara</b>, where she served as <b>Additional Professor and Unit Head</b> before her retirement. Throughout her academic career, she was actively involved in undergraduate and postgraduate teaching, mentoring future obstetricians and gynecologists while providing comprehensive care to thousands of women.
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
                    <span>Appointment and Enquiries</span>
                    <ArrowRight className="shrink-0 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
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
                  Whether the concern is a menstrual problem, cervical cancer screening, fertility evaluation, menopause, pelvic pain, or the need for a second opinion, our aim is to provide care that is thoughtful, balanced, and compassionate—with attention not only to the condition, but also to the woman’s age, priorities, and stage of life.
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
              "Royal College of Obstetricians and Gynecologists (RCOG), UK",
              "Federation of Obstetric and Gynecological Societies of India (FOGSI)",
              "Indian Menopause Society (IMS)",
              "International Gynecologic Cancer Society (IGCS)",
              "Asia Oceania Research Organisation on Genital Infections and Neoplasia (AOGIN India)",
              "Association of Gynecologic Oncologists of India (AGOI)",
              "Society of Fetal Medicine (SFM)",
              "Indian Society of Gynecologic endoscopists ( IAGE )",
              "Indian Society for the study of Cervical Pathology and Colposcopy ( ISCCP)"

            ].map((body, i) => (
              <span key={i} className="inline-flex items-center rounded-xl bg-[#d19890]/10 px-3.5 py-2 text-xs font-semibold text-[#4e2627] border border-[#d19890]/20 shadow-sm transition-all hover:bg-[#d19890]/20 hover:scale-102">
                {body}
              </span>
            ))}
          </div>
        </div>

        {/* Clinic Visuals Carousel */}
        <div className="mb-20">
          <div className="text-center space-y-2 mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4e2627]">Tour Our Practice</h3>
            <p className="text-sm text-slate-500">A glimpse into our comfortable clinic</p>
          </div>
          <div className="relative px-0 sm:px-2">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={12}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }} 
              speed={1500}
              rewind={true}
              className="w-full relative [&_.swiper-pagination]:!bottom-0"
              style={{
                '--swiper-theme-color': '#4e2627',
                '--swiper-navigation-size': '20px',
                '--swiper-pagination-bullet-inactive-color': '#d19890',
                '--swiper-pagination-bullet-inactive-opacity': '0.5'
              } as React.CSSProperties}
            >
              {clinicImages.map((img, idx) => (
                <SwiperSlide key={idx} className="h-auto flex flex-col pb-6">
                  {/* Image Card Frame */}
                  <div className="bg-white rounded-[22px] p-3 border border-[#e8d5d1]/80 shadow-sm hover:shadow-md transition-all duration-300 w-full overflow-hidden shrink-0">
                    <a
                      href={img.url}
                      data-fancybox="facility-gallery"
                      data-caption={img.caption}
                      className="group relative block w-full aspect-[4/3] rounded-xl overflow-hidden cursor-zoom-in bg-slate-100"
                    >
                      <img
                        src={img.url}
                        alt={`Clinic View ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#4e2627]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white">
                        <ZoomIn className="h-5 w-5" />
                        <span className="text-xs font-semibold tracking-wide">Click to Enlarge</span>
                      </div>
                    </a>
                  </div>
                  {/* Caption Below Image Frame */}
                  <div className="pt-3 px-1 flex-1">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {img.caption}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </div>
  );
}