import { useNavigate } from 'react-router-dom';
import PageSEO from './PageSEO';
import {
  Microscope,
  Activity,
  Baby,
  Heart,
  Scan,
  Thermometer,
  FlaskConical,
  MessageSquareDot,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

import { servicesData } from '../data/servicesData';

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F9F8F8] min-h-screen" id="services-page-wrapper">
      <PageSEO pageKey="services" />

      {/* Page Header */}
      <div className="bg-[#4e2627] text-[#F9F8F8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#d19890] bg-white/10 px-3.5 py-1 rounded-full mb-4">
            Our Services
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9F8F8] mb-6 max-w-3xl leading-tight">
            Gynecology &amp; Women's Health Services
          </h1>
          <p className="text-sm sm:text-base text-[#F9F8F8]/80 leading-relaxed max-w-3xl">
            At Gynecology Clinic, we offer thoughtful, evidence-based gynecology care with a strong emphasis on prevention, accurate diagnosis, and individualized treatment. Our services are designed to support women through common gynecological concerns as well as more specialised areas such as cervical screening, colposcopy, vulval evaluation, fertility assessment, and gynecologic ultrasound.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="services-grid">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => navigate(`/services/${service.id}`)}
                className="group cursor-pointer rounded-3xl bg-white border border-[#d19890]/20 overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#a46b66]/30 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.heading}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 backdrop-blur text-[#a46b66] shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-[#4e2627] mb-3 group-hover:text-[#a46b66] transition-colors">
                    {service.heading}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                    {service.shortDesc}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d19890] group-hover:text-[#a46b66] transition-colors">
                    Learn More <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Care Philosophy */}
      <section className="bg-white border-t border-[#d19890]/15" id="care-philosophy-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#a46b66] bg-[#d19890]/10 px-3.5 py-1 rounded-full">
              Our Care Philosophy
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4e2627]">
              Thoughtful, Balanced, and Compassionate Care
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At Gynecology Clinic, we believe that women's healthcare should be scientifically sound, ethically grounded, and personally attentive. Our approach combines clinical experience, academic rigor, and evidence-based practice with a strong emphasis on prevention, accurate diagnosis, and individualized treatment. Whether the concern is a menstrual problem, cervical screening, fertility evaluation, menopause, pelvic pain, or the need for a second opinion, our aim is to provide care that is thoughtful, balanced, and compassionate—with attention not only to the condition, but also to the woman's age, priorities, and stage of life.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 pb-20">
        <div className="rounded-3xl bg-[#4e2627] p-8 sm:p-12 text-center space-y-5">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F9F8F8]">
            Ready to book a consultation?
          </h2>
          <p className="text-sm text-[#F9F8F8]/75 max-w-md mx-auto">
            Reach out to schedule an appointment at our Race Course clinic in Vadodara.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d19890] hover:bg-[#a46b66] text-[#4e2627] hover:text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md focus:outline-none"
              id="services-cta-contact"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="shrink-0 h-4 w-4" />
            </button>
            <button
              onClick={() => navigate('/patient-education')}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none"
              id="services-cta-education"
            >
              <span>Patient Education</span>
              <ChevronRight className="shrink-0 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
