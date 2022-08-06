import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import "swiper/css";
import { useRouter } from "next/router";
import Layout from "../components/layout/layout";
import CircleMenu from "../components/ui/circle-menu";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <Layout>
      <Component {...pageProps} />

      {pathname !== "/" && <CircleMenu isMenu={true} inCorner={true} />}
    </Layout>
  );
}

export default MyApp;
