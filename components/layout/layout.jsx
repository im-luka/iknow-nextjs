import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Luka Dusak" />
        <meta name="keywords" content="music, movies, tv shows, social, meet" />
        <meta
          name="description"
          content="iKNOW - place for listening Music, watching Movies and TV Shows and connect with other people."
        />
        <title>iKNOW - Music & Movies</title>
      </Head>

      <main>{children}</main>
    </>
  );
};

export default Layout;
