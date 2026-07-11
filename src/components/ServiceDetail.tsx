import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ArrowLeft, Phone, Calendar } from 'lucide-react';
import PageSEO from './PageSEO';
import { useEffect } from 'react';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const service = servicesData.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="bg-[#F9F8F8] min-h-screen" id={`service-detail-${service.id}`}>
      <PageSEO 
        pageKey={`services/${service.id}` as any} // we will handle missing keys gracefully in PageSEO or prerender
      />
      
      {/* Dynamic SEO Tags just in case */}
      <title>{`${service.heading} | Dr. Nandita Maitra Vadodara`}</title>
      <meta name="description" content={service.shortDesc} />

      {/* Hero Section */}
      <div className="bg-[#4e2627] text-[#F9F8F8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <button 
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 text-[#d19890] hover:text-white transition-colors mb-6 font-semibold text-sm focus:outline-none"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Services
          </button>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-[#d19890]/20 text-[#d19890] shrink-0">
              <Icon className="h-8 w-8 md:h-10 md:w-10" />
            </div>
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9F8F8] mb-4 leading-tight">
                {service.heading}
              </h1>
              <p className="text-base sm:text-lg text-[#F9F8F8]/80 max-w-3xl">
                {service.shortDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Content Area */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl overflow-hidden mb-8 shadow-sm">
              <img 
                src={service.image} 
                alt={service.heading} 
                className="w-full h-auto object-cover max-h-[400px]"
              />
            </div>
            
            <div className="prose prose-slate prose-lg max-w-none text-slate-700">
              <p className="whitespace-pre-line leading-relaxed">
                {service.fullDesc}
              </p>
            </div>
          </div>
          
          {/* Sidebar / CTA */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 rounded-3xl bg-white border border-[#d19890]/20 p-8 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-[#4e2627] mb-4">
                Need more information?
              </h3>
              <p className="text-slate-600 text-sm mb-6">
                If you have concerns regarding {service.heading.toLowerCase()}, our clinic provides comprehensive consultation and expert guidance.
              </p>
              
              <div className="space-y-4">
                <a
                  href="tel:+912652331818"
                  className="flex items-center gap-3 w-full rounded-xl bg-[#d19890]/10 hover:bg-[#d19890]/20 text-[#4e2627] p-4 transition-colors font-semibold"
                >
                  <Phone className="h-5 w-5 text-[#a46b66]" />
                  Call Clinic: 0265-2331818
                </a>
                
                <button
                  onClick={() => navigate('/contact')}
                  className="flex items-center gap-3 w-full rounded-xl bg-[#4e2627] hover:bg-[#a46b66] text-white p-4 transition-colors font-semibold shadow-md focus:outline-none"
                >
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
