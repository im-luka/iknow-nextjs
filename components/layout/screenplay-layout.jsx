import Head from "next/head";
import Navbar from "../screenplay/navbar/navbar";
import Footer from "../screenplay/footer/footer";
import { ModalInfoContextProvider } from "../../context/modal-info-context";
import { FavoritesContextProvider } from "../../context/favorites-context";

const ScreenplayLayout = ({ children }) => {
  return (
    <ModalInfoContextProvider>
      <FavoritesContextProvider>
        <Head>
          <title>iWATCH - Movies & TV Shows</title>
          <meta
            name="keywords"
            content="iwatch, watch, movies, tv shows, cinema, screenplay"
          />
          <meta
            name="description"
            content="iWatch - place for watching your favorite Movies and TV Shows."
          />
        </Head>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </FavoritesContextProvider>
    </ModalInfoContextProvider>
  );
};

export default ScreenplayLayout;
