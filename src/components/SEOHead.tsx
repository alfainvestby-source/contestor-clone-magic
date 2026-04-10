import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown>;
}

const SITE_NAME = "Contestor";
const BASE_URL = "https://contestor-clone-magic.lovable.app";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0969a37e-60b4-48de-a704-dd37c50635a0/id-preview-a0dab5b1--2dbb6e9e-4716-4eb2-a3ac-e1412f3a6c52.lovable.app-1775847061803.png";

const SEOHead = ({ title, description, canonical, type = "website", jsonLd }: SEOHeadProps) => {
  const fullUrl = `${BASE_URL}${canonical}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content="en_EE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* GEO tags */}
      <meta name="geo.region" content="EE" />
      <meta name="geo.placename" content="Tallinn" />
      <meta name="geo.position" content="59.4370;24.7536" />
      <meta name="ICBM" content="59.4370, 24.7536" />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
