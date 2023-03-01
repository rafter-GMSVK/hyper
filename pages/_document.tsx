import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@200&family=Cabin+Sketch:wght@400;700&family=Montserrat:wght@300&family=Quicksand:wght@300&family=Rowdies:wght@300&family=Special+Elite&display=swap"
          rel="stylesheet"
        ></link>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant:wght@200&family=Cabin+Sketch:wght@400;700&family=Darker+Grotesque:wght@300&family=Montserrat:wght@300&family=Quicksand:wght@300&family=Rowdies:wght@300&family=Special+Elite&family=Thasadith&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.0.0/dist/cdn.min.js"></script>
      </body>
    </Html>
  );
}
