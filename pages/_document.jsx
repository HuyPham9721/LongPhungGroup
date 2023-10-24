import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en"
        data-wf-page="61f483667f6caa8a8181540e"
        data-wf-site="611c8104e15cb659481fb48d"
      >
        {" "}
        <link
          href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro-v6@44659d9/css/all.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <Head>
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>
        <body className="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
