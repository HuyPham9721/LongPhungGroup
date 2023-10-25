import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en"
        data-wf-page="61f483667f6caa8a8181540e"
        data-wf-site="611c8104e15cb659481fb48d"
      >
        <Head>
          <meta name="mobile-web-app-capable" content="yes" />
          <link
            rel="stylesheet"
            href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css"
          />

          <link
            rel="stylesheet"
            href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-solid.css"
          />

          <link
            rel="stylesheet"
            href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-regular.css"
          />

          <link
            rel="stylesheet"
            href="https://site-assets.fontawesome.com/releases/v6.4.2/css/sharp-light.css"
          />
        </Head>
        <body className="body">
          <Main />
          <NextScript />
          <div id="fb-root"></div>{" "}
          <script
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v18.0"
            nonce="bNlnCOUO"
          ></script>
        </body>
      </Html>
    );
  }
}
