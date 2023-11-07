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
          <script
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v18.0"
            nonce="631ke54t"
          ></script>
          <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        </body>
      </Html>
    );
  }
}
