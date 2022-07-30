import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import "swiper/css";
import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;