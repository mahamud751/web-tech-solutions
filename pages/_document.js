/* eslint-disable @next/next/no-sync-scripts */
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/*Animate Style */}
          <link
            rel="stylesheet"
            href="assets/css/animate.css"
            type="text/css"
          />
          {/*Custome Style */}
          <link rel="stylesheet" href="assets/css/style.css" type="text/css" />
          <link rel="stylesheet" href="assets/css/custom.css" type="text/css" />

          <link
            rel="stylesheet"
            href="assets/css/magnific-popup.css"
            type="text/css"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
            crossorigin="anonymous"
          ></link>

          <link href="assets/css/font-awesome.min.css" rel="stylesheet" />

          {/* Google-Font*/}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
            crossorigin="anonymous"
          />
        </Head>
        <body className="home">
          <Main />
          <NextScript />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
            crossorigin="anonymous"
          ></script>
          <script src="assets/js/jquery.min.js"></script>

          <script src="assets/js/interface.js"></script>

          <script src="assets/js/owl.carousel.min.js"></script>

          <script src="assets/js/jquery.magnific-popup.min.js"></script>

          <script src="assets/switcher/js/switcher.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
