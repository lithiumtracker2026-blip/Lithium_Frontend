import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to key third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://s3.tradingview.com" />

        {/* Favicon variants */}
        <link rel="icon" type="image/png" href="/Lithium_Tracker_icon.png" />
        <link rel="apple-touch-icon" href="/Lithium_Tracker_icon.png" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#2962FF" />

        {/* Global site verification placeholders — add real values when available */}
        {/* <meta name="google-site-verification" content="YOUR_CODE" /> */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
