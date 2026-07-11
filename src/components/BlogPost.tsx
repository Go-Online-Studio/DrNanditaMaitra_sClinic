import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { GEO_TAGS } from '../utils/seo-config';
import { getBlogBySlug, BLOG_POSTS } from '../data/blogPosts';
import { ArrowLeft, Clock, Tag, Calendar, BookOpen, ChevronRight, Phone } from 'lucide-react';

const LOREM_SECTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis molestie dictum semper, nunc augue iaculis erat, vel condimentum mi nulla sed enim.`,
  `Aliquam fringilla cursus purus. Nullam aliquet, diam vel sagittis luctus, erat nisi porttitor enim, vitae tristique felis est a erat. Nam sollicitudin massa at dui tincidunt, nec efficitur lorem volutpat. Integer condimentum eros non felis tristique, in malesuada nunc pharetra.`,
  `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.`,
  `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`,
];

const SECTION_HEADINGS = [
  'Understanding the Basics',
  'Symptoms and When to Seek Help',
  'Diagnosis and Evaluation',
  'Treatment and Management',
  'Long-Term Outlook and Follow-Up',
];

const CATEGORY_COLORS: Record<string, string> = {
  'Hormonal Health':       'bg-purple-50 text-purple-700 border-purple-200',
  'Preventive Gynecology': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Menopause Care':        'bg-amber-50 text-amber-700 border-amber-200',
  'Pregnancy Care':        'bg-blue-50 text-blue-700 border-blue-200',
  'Fertility':             'bg-rose-50 text-rose-700 border-rose-200',
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getBlogBySlug(slug ?? '');

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9F8F8] text-[#4e2627] px-4 text-center gap-4">
        <BookOpen className="h-12 w-12 text-[#d19890]" />
        <h1 className="font-serif text-2xl font-bold">Article not found</h1>
        <button onClick={() => navigate('/patient-education')} className="text-sm font-semibold text-[#a46b66] hover:underline">
          ← Back to Patient Education
        </button>
      </div>
    );
  }

  const categoryClass = CATEGORY_COLORS[post.category] ?? 'bg-slate-50 text-slate-600 border-slate-200';
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="bg-[#F9F8F8] min-h-screen" id={`blog-post-${post.slug}`}>

      {/* SEO Head — fully static, all tags included */}
      <Helmet>
        <html lang="en" />
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={post.canonical} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dr. Nandita Maitra" />

        {/* GEO tags — Vadodara, Gujarat, India */}
        <meta name="geo.region" content={GEO_TAGS.region} />
        <meta name="geo.placename" content={GEO_TAGS.placename} />
        <meta name="geo.position" content={GEO_TAGS.position} />
        <meta name="ICBM" content={GEO_TAGS.ICBM} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={post.canonical} />
        <meta property="og:title" content={post.ogTitle} />
        <meta property="og:description" content={post.ogDescription} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Dr. Nandita Maitra's Clinic" />
        <meta property="article:author" content="Dr. Nandita Maitra" />
        <meta property="article:section" content={post.category} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.ogTitle} />
        <meta name="twitter:description" content={post.ogDescription} />

        {/* LD+JSON Article Schema */}
        <script type="application/ld+json">{JSON.stringify(post.ldJson)}</script>

        {/* Breadcrumb schema */}
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.drnanditamaitra.com/' },
            { '@type': 'ListItem', position: 2, name: 'Patient Education', item: 'https://www.drnanditamaitra.com/patient-education' },
            { '@type': 'ListItem', position: 3, name: post.title, item: post.canonical },
          ],
        })}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#d19890]/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-500 flex-wrap">
          <Link to="/" className="hover:text-[#a46b66] transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/patient-education" className="hover:text-[#a46b66] transition-colors">Patient Education</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-slate-700 font-medium line-clamp-1">{post.title}</span>
        </div>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Back link */}
        <button
          onClick={() => navigate('/patient-education')}
          className="group mb-8 inline-flex items-center gap-1.5 text-xs font-semibold text-[#a46b66] hover:text-[#4e2627] transition-colors focus:outline-none"
          id="blog-back-btn"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Patient Education
        </button>

        {/* Metadata row */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider border rounded-full px-2.5 py-1 ${categoryClass}`}>
            <Tag className="h-3 w-3" />{post.category}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
            <Calendar className="h-3.5 w-3.5" />{post.publishDate}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
            <Clock className="h-3.5 w-3.5" />{post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#4e2627] leading-tight mb-4">
          {post.title}
        </h1>

        {/* Author byline */}
        <div className="flex items-center gap-3 mb-10 pb-8 border-b border-[#d19890]/15">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d19890]/20 text-[#a46b66]">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-[#4e2627]">Dr. Nandita Maitra</p>
            <p className="text-[11px] text-slate-500">MBBS, MD, FRCOG — Senior Gynecologist, Vadodara</p>
          </div>
        </div>

        {/* Article body — 5 sections with lorem ipsum */}
        <div className="prose prose-sm max-w-none space-y-10">
          {SECTION_HEADINGS.map((heading, i) => (
            <section key={i}>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#4e2627] mb-3">
                {heading}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {LOREM_SECTIONS[i]}
              </p>
            </section>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-2xl bg-slate-50 border border-slate-200 px-6 py-5 text-xs text-slate-500 leading-relaxed">
          <strong className="text-slate-700">Medical Information Notice:</strong> This article is for general educational purposes only and does not constitute medical advice, diagnosis, or treatment. For personal medical guidance, please consult Dr. Nandita Maitra or a qualified healthcare professional.
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-3xl bg-[#4e2627] p-8 text-center space-y-4">
          <h2 className="font-serif text-xl font-bold text-[#F9F8F8]">Have questions? Book a consultation.</h2>
          <p className="text-sm text-[#F9F8F8]/75">Dr. Nandita Maitra is available at Race Course Medical Centre, Vadodara.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d19890] hover:bg-[#a46b66] text-[#4e2627] hover:text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none"
              id="blog-cta-contact"
            >
              Book Appointment
            </button>
            <a
              href="tel:+912652331818"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <Phone className="h-4 w-4" /> 0265-2331818
            </a>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-16" id="related-articles">
          <h2 className="font-serif text-xl font-bold text-[#4e2627] mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => navigate(`/patient-education/${rel.slug}`)}
                className="group cursor-pointer rounded-2xl bg-white border border-[#d19890]/20 p-6 transition-all hover:shadow-md hover:border-[#a46b66]/30"
              >
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#a46b66] mb-2">{rel.category}</p>
                <h3 className="font-serif text-sm font-bold text-[#4e2627] group-hover:text-[#a46b66] transition-colors leading-snug mb-1">
                  {rel.title}
                </h3>
                <span className="text-[11px] text-slate-400">{rel.readTime}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
