import Head from "next/head";

const MusicLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>iPlay - Music 4 You</title>
        <meta
          name="keywords"
          content="iplay, play, music, songs, artists, albums, radios"
        />
        <meta
          name="description"
          content="iPlay - place to play your favorite music and artists."
        />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default MusicLayout;
