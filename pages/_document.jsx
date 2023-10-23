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
        </Head>
        <body className="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
