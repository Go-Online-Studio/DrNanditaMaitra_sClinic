import { useNavigate } from 'react-router-dom';
import PageSEO from './PageSEO';
import { BLOG_POSTS } from '../data/blogPosts';
import { BookOpen, ChevronRight, Clock, Tag } from 'lucide-react';

const CATEGORY_COLORS: Record<string, string> = {
  'Hormonal Health':      'bg-purple-50 text-purple-700 border-purple-200',
  'Preventive Gynecology': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Menopause Care':       'bg-amber-50 text-amber-700 border-amber-200',
  'Pregnancy Care':       'bg-blue-50 text-blue-700 border-blue-200',
  'Fertility':            'bg-rose-50 text-rose-700 border-rose-200',
};

export default function PatientEducation() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F9F8F8] min-h-screen" id="patient-education-page">
      <PageSEO pageKey="patient-education" />

      {/* Page Header */}
      <div className="bg-[#4e2627] text-[#F9F8F8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#d19890] bg-white/10 px-3.5 py-1 rounded-full mb-4">
            Patient Education
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9F8F8] mb-5 leading-tight">
            Women's Health Articles
          </h1>
          <p className="text-sm sm:text-base text-[#F9F8F8]/80 leading-relaxed max-w-2xl">
            Evidence-based health information to help you understand your gynecological concerns, treatment options, and what to expect — written by Dr. Nandita Maitra, MBBS MD FRCOG.
          </p>
        </div>
      </div>

      {/* Blog Post Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="blog-posts-grid">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => {
            const categoryClass = CATEGORY_COLORS[post.category] ?? 'bg-slate-50 text-slate-600 border-slate-200';
            return (
              <article
                key={post.slug}
                id={`blog-card-${post.slug}`}
                className="group flex flex-col rounded-3xl bg-white border border-[#d19890]/20 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#a46b66]/30 cursor-pointer"
                onClick={() => navigate(`/patient-education/${post.slug}`)}
              >
                {/* Card top accent */}
                <div className="h-1.5 bg-gradient-to-r from-[#4e2627] to-[#d19890]" />

                <div className="flex flex-col flex-1 p-6 sm:p-7 space-y-4">
                  {/* Category + Read time */}
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider border rounded-full px-2.5 py-1 ${categoryClass}`}>
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] text-slate-400 font-medium">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d19890]/10 text-[#a46b66]">
                    <BookOpen className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-lg font-bold text-[#4e2627] group-hover:text-[#a46b66] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed flex-1 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#d19890]/10">
                    <span className="text-[11px] text-slate-400">{post.publishDate}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); navigate(`/patient-education/${post.slug}`); }}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#a46b66] group-hover:text-[#4e2627] transition-colors focus:outline-none"
                      aria-label={`Read ${post.title}`}
                    >
                      Read Article
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Disclaimer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-2xl bg-slate-50 border border-slate-200 px-6 py-5 text-xs text-slate-500 leading-relaxed">
          <strong className="text-slate-700">Medical Information Notice:</strong> The articles on this page are intended for general educational purposes only and do not constitute medical advice, diagnosis, or treatment. Please consult Dr. Nandita Maitra or a qualified healthcare professional for any specific medical concerns.
        </div>
      </div>
    </div>
  );
}
