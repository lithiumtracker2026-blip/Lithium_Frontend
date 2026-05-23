import { Html, Head, Main, NextScript } from "next/document";

// Replace with your actual GA4 Measurement ID when available
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* DNS prefetch for all third-party origins */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//s3.tradingview.com" />
        <link rel="dns-prefetch" href="//www.tradingview.com" />
        <link rel="dns-prefetch" href="//lithiumdjango-production.up.railway.app" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />

        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://s3.tradingview.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/Lithium_Tracker_icon.png" />
        <link rel="apple-touch-icon" href="/Lithium_Tracker_icon.png" />

        {/* Theme color */}
        <meta name="theme-color" content="#2962FF" />

        {/* Google Analytics 4 — loads async, non-render-blocking */}
        {GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
