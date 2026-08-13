import { useState, useRef, FormEvent } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { GEO_TAGS } from '../utils/seo-config';
import { getBlogBySlug, BLOG_POSTS } from '../data/blogPosts';
import {
  ArrowLeft, Clock, Tag, Calendar, BookOpen,
  ChevronRight, Phone, Search, X,
} from 'lucide-react';

/* ─────────────────────────── constants ─────────────────────────── */

const CATEGORY_COLORS: Record<string, string> = {
  'Hormonal Health':       'bg-purple-50 text-purple-700 border-purple-200',
  'Preventive Gynecology': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Menopause Care':        'bg-amber-50  text-amber-700  border-amber-200',
  'Pregnancy Care':        'bg-blue-50   text-blue-700   border-blue-200',
  'Fertility':             'bg-rose-50   text-rose-700   border-rose-200',
};



/* ─────────────────────────── component ─────────────────────────── */

export default function BlogPost() {
  const { slug }   = useParams<{ slug: string }>();
  const navigate   = useNavigate();
  const post       = getBlogBySlug(slug ?? '');
  const articleRef = useRef<HTMLElement>(null);

  const [searchQuery, setSearchQuery]       = useState('');
  const [mobileSearch, setMobileSearch]     = useState('');
  const [showAllArticles, setShowAllArticles] = useState(false);

  /* ── 404 ── */
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9F8F8] text-[#4e2627] px-4 text-center gap-4">
        <BookOpen className="h-12 w-12 text-[#d19890]" />
        <h1 className="font-serif text-2xl font-bold">Article not found</h1>
        <button
          onClick={() => navigate('/patient-education')}
          className="text-sm font-semibold text-[#a46b66] hover:underline"
        >
          Back to Patient Education
        </button>
      </div>
    );
  }

  const categoryClass = CATEGORY_COLORS[post.category] ?? 'bg-slate-50 text-slate-600 border-slate-200';

  /* Related Articles (sidebar + mobile) — up to 3, exclude current */
  const relatedPosts   = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  /* All Articles — every post except current */
  const allOtherPosts  = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  /* Mobile search results */
  const mobileResults = mobileSearch.trim()
    ? BLOG_POSTS.filter((p) =>
        p.title.toLowerCase().includes(mobileSearch.toLowerCase()) ||
        p.category.toLowerCase().includes(mobileSearch.toLowerCase())
      ).slice(0, 6)
    : [];

  /* Live search */
  const searchResults = searchQuery.trim()
    ? BLOG_POSTS.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchResults.length === 1) {
      navigate(`/patient-education/${searchResults[0].slug}`);
      setSearchQuery('');
    }
  };

  /* Shared accent-bar article row used in sidebar + mobile */
  const ArticleRow = ({ p }: { p: typeof BLOG_POSTS[number]; key?: string }) => (
    <div
      onClick={() => navigate(`/patient-education/${p.slug}`)}
      className="group cursor-pointer flex items-start gap-3 p-2 rounded-xl hover:bg-[#d19890]/10 transition-colors"
    >
      <div className="shrink-0 mt-0.5 w-1 h-10 rounded-full bg-[#d19890]/50 group-hover:bg-[#a46b66] transition-colors" />
      <div className="min-w-0">
        {/* <p className="text-[10px] font-bold uppercase tracking-wider text-[#a46b66] mb-0.5">{p.category}</p> */}
        <p className="text-xs font-semibold text-[#4e2627] group-hover:text-[#a46b66] transition-colors line-clamp-2 leading-snug">
          {p.title}
        </p>
        <p className="text-[10px] text-slate-400 mt-1 inline-flex items-center gap-1">
          <Clock className="h-2.5 w-2.5" />{p.readTime}
        </p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#F9F8F8] min-h-screen" id={`blog-post-${post.slug}`}>

      {/* ─── SEO Head ─── */}
      <Helmet>
        <html lang="en" />
        <title>{post.seoTitle}</title>
        <meta name="description"   content={post.description} />
        <meta name="keywords"      content={post.keywords} />
        <link rel="canonical"      href={post.canonical} />
        <meta name="robots"        content="index, follow" />
        <meta name="author"        content="Dr. Nandita Maitra" />
        <meta name="geo.region"    content={GEO_TAGS.region} />
        <meta name="geo.placename" content={GEO_TAGS.placename} />
        <meta name="geo.position"  content={GEO_TAGS.position} />
        <meta name="ICBM"          content={GEO_TAGS.ICBM} />
        <meta property="og:type"         content="article" />
        <meta property="og:url"          content={post.canonical} />
        <meta property="og:title"        content={post.ogTitle} />
        <meta property="og:description"  content={post.ogDescription} />
        <meta property="og:locale"       content="en_IN" />
        <meta property="og:site_name"    content="Dr. Nandita Maitra's Clinic" />
        <meta property="article:author"  content="Dr. Nandita Maitra" />
        <meta property="article:section" content={post.category} />
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={post.ogTitle} />
        <meta name="twitter:description" content={post.ogDescription} />
        <script type="application/ld+json">{JSON.stringify(post.ldJson)}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home',              item: 'https://www.drnanditamaitra.com/' },
            { '@type': 'ListItem', position: 2, name: 'Patient Education', item: 'https://www.drnanditamaitra.com/patient-education' },
            { '@type': 'ListItem', position: 3, name: post.title,          item: post.canonical },
          ],
        })}</script>
      </Helmet>

      {/* ─── Breadcrumb ─── */}
      <div className="bg-white border-b border-[#d19890]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-500 flex-wrap">
          <Link to="/"                  className="hover:text-[#a46b66] transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/patient-education" className="hover:text-[#a46b66] transition-colors">Patient Education</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-slate-700 font-medium line-clamp-1">{post.title}</span>
        </div>
      </div>

      {/* ── MOBILE-ONLY sticky search strip (below site nav) ── */}
      <div className="lg:hidden sticky top-0 z-30 bg-white border-b border-[#d19890]/15 shadow-sm px-4 py-2.5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (mobileResults.length === 1) {
              navigate(`/patient-education/${mobileResults[0].slug}`);
              setMobileSearch('');
            }
          }}
          className="relative"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          <input
            type="search"
            value={mobileSearch}
            onChange={(e) => setMobileSearch(e.target.value)}
            placeholder="Search health topics..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-8 py-2 text-xs text-slate-700 placeholder-slate-400 outline-none focus:border-[#a46b66] focus:ring-1 focus:ring-[#a46b66]/30 transition"
            id="mobile-search"
          />
          {mobileSearch && (
            <button
              type="button"
              onClick={() => setMobileSearch('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </form>
        {/* Mobile search results dropdown */}
        {mobileResults.length > 0 && (
          <div className="absolute left-4 right-4 top-full mt-1 rounded-xl border border-[#d19890]/20 bg-white shadow-lg overflow-hidden z-40">
            {mobileResults.map((r) => (
              <button
                key={r.slug}
                onClick={() => { navigate(`/patient-education/${r.slug}`); setMobileSearch(''); }}
                className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-[#d19890]/10 hover:text-[#4e2627] transition-colors border-b border-slate-100 last:border-0"
              >
                <p className="font-semibold line-clamp-1">{r.title}</p>
                <p className="text-[10px] text-[#a46b66] mt-0.5">{r.category}</p>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ─────────────────────────────────────────────────────
          MAIN WRAPPER  — lg: 75/25 flex row
      ───────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14 lg:flex lg:gap-10 lg:items-start relative">

        {/* ════════════════════════════════════════════════
            LEFT COLUMN — article (takes ~75% on desktop)
        ════════════════════════════════════════════════ */}
        <article ref={articleRef} className="min-w-0 flex-1">

          {/* Back link */}
          <button
            onClick={() => navigate('/patient-education')}
            className="group mb-8 inline-flex items-center gap-1.5 text-xs font-semibold text-[#a46b66] hover:text-[#4e2627] transition-colors focus:outline-none"
            id="blog-back-btn"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Patient Education
          </button>

          {/* ── Hero ── */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
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

          {/* H1 — constrained to ~680px for 55-75 chars/line */}
          <h1
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#4e2627] leading-tight mb-4"
            style={{ maxWidth: '680px' }}
          >
            {post.title}
          </h1>

          {/* Author byline */}
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-[#d19890]/15">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d19890]/20 text-[#a46b66]">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#4e2627]">Dr. Nandita Maitra</p>
              <p className="text-[11px] text-slate-500">MBBS, MD, FRCOG — Senior Gynecologist, Vadodara</p>
            </div>
          </div>

          {/* Blog Image */}
          <div className="mb-10 w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm border border-slate-200/60">
            <img
              src={post.imageUrl || 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200'}
              alt={post.title}
              className="w-full h-auto aspect-[1.5/1] object-cover"
            />
          </div>

          {/* ── Article body — max-width 680px for readability ── */}
          <div className="prose prose-sm max-w-none space-y-10" style={{ maxWidth: '680px' }}>
            {post.sections.map((section, i) => (
              <section key={i}>
                {section.title && (
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-[#4e2627] mb-3">
                    {section.title}
                  </h2>
                )}
                <div
                  className="text-sm text-slate-600"
                  style={{ lineHeight: '1.75' }}
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </section>
            ))}
          </div>

          {/* Disclaimer */}
          <div
            className="mt-12 rounded-2xl bg-slate-50 border border-slate-200 px-6 py-5 text-xs text-slate-500 leading-relaxed"
            style={{ maxWidth: '680px' }}
          >
            <strong className="text-slate-700">Medical Disclaimer:</strong> This article is intended for <strong>general patient education</strong> and is based on <strong>current medical evidence</strong> and clinical guidelines. Reputable medical references, including <strong>UpToDate&reg;</strong>, have been consulted, and the content has been <strong>independently reviewed and edited</strong> by <strong>Dr. Nandita Maitra</strong>.
            <br /><br />
            This information is <strong>not a substitute for individual medical advice</strong>, diagnosis, or treatment. Please consult a <strong>qualified healthcare professional</strong> for personalized advice.
          </div>

          {/* Inline CTA */}
          <div className="mt-10 rounded-3xl bg-[#4e2627] p-8 text-center space-y-4" style={{ maxWidth: '680px' }}>
            <h2 className="font-serif text-xl font-bold text-[#F9F8F8]">Have questions? Book a consultation.</h2>
            <p className="text-sm text-[#F9F8F8]/75">Dr. Nandita Maitra is available at Race Course Medical Centre, Vadodara.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d19890] hover:bg-[#a46b66] text-[#4e2627] hover:text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none"
                id="blog-cta-contact"
              >
                Appointment and Enquiries
              </button>
              <a
                href="tel:+912652331818"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Phone className="h-4 w-4" /> 0265-2331818
              </a>
            </div>
          </div>

          {/* ════ MOBILE-ONLY: Related + All Articles below CTA ════ */}
          <div className="lg:hidden mt-12 space-y-8">

            {/* Related Articles — accent-bar style, no image */}
            {relatedPosts.length > 0 && (
              <div>
                <h2 className="font-serif text-lg font-bold text-[#4e2627] mb-3">Related Articles</h2>
                <div className="rounded-2xl bg-white border border-[#d19890]/20 p-3 shadow-sm space-y-1">
                  {relatedPosts.map((p) => <ArticleRow key={p.slug} p={p} />)}
                </div>
              </div>
            )}

            {/* All Articles — compact list with toggle */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-serif text-lg font-bold text-[#4e2627]">All Articles</h2>
                <button
                  onClick={() => setShowAllArticles((v) => !v)}
                  className="text-[11px] font-semibold text-[#a46b66] hover:text-[#4e2627] transition-colors"
                >
                  {showAllArticles ? 'Show less ↑' : 'Show all ↓'}
                </button>
              </div>
              <div className="rounded-2xl bg-white border border-[#d19890]/20 p-3 shadow-sm space-y-1">
                {(showAllArticles ? allOtherPosts : allOtherPosts.slice(0, 4)).map((p) => (
                  <ArticleRow key={p.slug} p={p} />
                ))}
              </div>
              {!showAllArticles && allOtherPosts.length > 4 && (
                <button
                  onClick={() => navigate('/patient-education')}
                  className="mt-3 w-full text-center text-xs font-bold text-[#a46b66] hover:text-[#4e2627] transition-colors"
                >
                  View all {BLOG_POSTS.length} articles →
                </button>
              )}
            </div>

          </div>{/* end mobile-only */}
        </article>

        {/* ════════════════════════════════════════════════
            RIGHT COLUMN — Sticky Sidebar (~25%) — desktop only
        ════════════════════════════════════════════════ */}
        <aside
          className="hidden lg:block shrink-0 w-[280px] xl:w-[300px]"
          style={{ position: 'sticky', top: '6rem', alignSelf: 'flex-start', maxHeight: 'calc(100vh - 7rem)', overflowY: 'auto' }}
        >
          <div className="space-y-5">

            {/* ── Search Bar ── */}
            <div className="rounded-2xl bg-white border border-[#d19890]/20 p-5 shadow-sm">
              <h3 className="font-serif text-sm font-bold text-[#4e2627] mb-3">Search Health Topics</h3>
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search health topics..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-8 py-2.5 text-xs text-slate-700 placeholder-slate-400 outline-none focus:border-[#a46b66] focus:ring-1 focus:ring-[#a46b66]/30 transition"
                  id="sidebar-search"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </form>

              {/* Live results */}
              {searchResults.length > 0 && (
                <div className="mt-2 rounded-xl border border-[#d19890]/20 bg-white shadow-md overflow-hidden">
                  {searchResults.map((r) => (
                    <button
                      key={r.slug}
                      onClick={() => { navigate(`/patient-education/${r.slug}`); setSearchQuery(''); }}
                      className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-[#d19890]/10 hover:text-[#4e2627] transition-colors border-b border-slate-100 last:border-0"
                    >
                      <p className="font-semibold line-clamp-1">{r.title}</p>
                      <p className="text-[10px] text-[#a46b66] mt-0.5">{r.category}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ── Related Articles — accent-bar style, no image ── */}
            {relatedPosts.length > 0 && (
              <div className="rounded-2xl bg-white border border-[#d19890]/20 p-4 shadow-sm">
                <h3 className="font-serif text-sm font-bold text-[#4e2627] mb-2">Related Articles</h3>
                <div className="space-y-1">
                  {relatedPosts.map((p) => <ArticleRow key={p.slug} p={p} />)}
                </div>
              </div>
            )}

            {/* ── All Articles ── */}
            <div className="rounded-2xl bg-white border border-[#d19890]/20 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-sm font-bold text-[#4e2627]">All Articles</h3>
                <button
                  onClick={() => navigate('/patient-education')}
                  className="text-[10px] font-bold text-[#a46b66] hover:text-[#4e2627] transition-colors"
                >
                  View all
                </button>
              </div>
              <div className="space-y-1">
                {allOtherPosts.map((p) => <ArticleRow key={p.slug} p={p} />)}
              </div>
            </div>

            {/* ── Persistent "Book a Consultation" CTA ── */}
            <div className="rounded-2xl bg-[#4e2627] p-5 text-center space-y-3">
              <BookOpen className="mx-auto h-7 w-7 text-[#d19890]" />
              <h3 className="font-serif text-sm font-bold text-white leading-snug">
                Book a Consultation
              </h3>
              <p className="text-[11px] text-white/70 leading-relaxed">
                Personalized gynecology care from Dr. Nandita Maitra, Vadodara.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#d19890] hover:bg-[#a46b66] text-[#4e2627] hover:text-white py-2.5 text-xs font-bold uppercase tracking-wider transition-all focus:outline-none"
                id="sidebar-cta-book"
              >
                Appointment and Enquiries
              </button>
              <a
                href="tel:+912652331818"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white py-2.5 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <Phone className="h-3.5 w-3.5" /> 0265-2331818
              </a>
            </div>

          </div>
        </aside>

      </div>{/* /max-w-7xl */}
    </div>
  );
}
