import Head from "next/head";

const SEO = ({ title, description, keywords, canonicalUrl }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://www.lithiumtracker.com/Lithium_Tracker_logo.png"
      />
      <meta
        property="og:url"
        content={canonicalUrl || "https://www.lithiumtracker.com/"}
      />
      <link
        rel="icon"
        type="image/png"
        href="/Lithium_Tracker_icon.png"
      />
      <link
        rel="canonical"
        href={canonicalUrl || "https://www.lithiumtracker.com/"}
      />
      <script type="application/ld+json">
        {JSON.stringify({
          name: "Lithium Tracker",
          url: "https://www.lithiumtracker.com/",
          logo: "https://www.lithiumtracker.com/Lithium_Tracker_logo.png",
          description,
        })}
      </script>
    </Head>
  );
};

export default SEO;
