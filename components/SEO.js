import Head from "next/head";

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  noIndex = false,
}) => {
  const siteUrl = "https://www.lithiumtracker.com";
  const defaultImage = `${siteUrl}/Lithium_Tracker_logo.png`;
  const canonical = canonicalUrl
    ? canonicalUrl.replace(/\/$/, "") || siteUrl  // strip trailing slash
    : siteUrl;
  const image = ogImage || defaultImage;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lithium Tracker",
    url: siteUrl,
    logo: defaultImage,
    description,
    sameAs: [siteUrl],
  };

  return (
    <Head>
      {/* Core */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/Lithium_Tracker_icon.png" />

      {/* Open Graph */}
      <meta property="og:site_name" content="Lithium Tracker" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@lithiumtracker" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </Head>
  );
};

export default SEO;
