import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG, GEO_TAGS } from '../utils/seo-config';

interface PageSEOProps {
  pageKey: string;
}

export default function PageSEO({ pageKey }: PageSEOProps) {
  const seo = SEO_CONFIG[pageKey];
  if (!seo) return null;

  const ldJsonArray = Array.isArray(seo.ldJson) ? seo.ldJson : [seo.ldJson];

  return (
    <Helmet>
      {/* Primary */}
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={seo.canonical} />
      <meta name="robots" content="index, follow" />

      {/* GEO tags for local discovery */}
      <meta name="geo.region" content={GEO_TAGS.region} />
      <meta name="geo.placename" content={GEO_TAGS.placename} />
      <meta name="geo.position" content={GEO_TAGS.position} />
      <meta name="ICBM" content={GEO_TAGS.ICBM} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Dr. Nandita Maitra's Clinic" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.ogTitle} />
      <meta name="twitter:description" content={seo.ogDescription} />

      {/* LD+JSON — one script per schema object */}
      {ldJsonArray.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
