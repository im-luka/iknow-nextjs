import MusicLayout from "../../components/layout/music-layout";
import Artists from "../../components/music/home/artists";
import Featured from "../../components/music/home/featured";
import Followers from "../../components/music/home/followers";
import Hero from "../../components/music/home/hero";

const MusicPage = () => {
  return (
    <MusicLayout>
      <Hero />
      <Artists />
      <Featured />
      <Followers />
    </MusicLayout>
  );
};

export default MusicPage;
