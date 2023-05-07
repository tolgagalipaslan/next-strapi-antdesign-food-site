import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@0.9.325/build/spline-viewer.js"
        ></Script>
      </body>
    </Html>
  );
}
