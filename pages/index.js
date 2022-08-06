import MusicContainer from "../components/home/music/music-container";
import Navbar from "../components/home/navbar/navbar";
import ScreenplayContainer from "../components/home/screenplay/screenplay-container";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MusicContainer />
      <ScreenplayContainer />
    </>
  );
};

export default HomePage;
