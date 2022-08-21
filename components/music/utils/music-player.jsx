import { useDispatch, useSelector } from "react-redux";
import SpotifyPlayer from "react-spotify-web-playback";
import { setIsPlaying } from "../../../redux/playerSlice";
import LyricsFinder from "lyrics-finder";
import { useState } from "react";
import Lyrics from "./lyrics";

const MusicPlayer = ({ accessToken, trackUri }) => {
  const { isPlaying, song } = useSelector((store) => store.player);
  const [showLyrics, setShowLyrics] = useState(false);
  const dispatch = useDispatch();

  if (!accessToken) return null;

  return (
    <>
      <div className="fixed left-0 right-0 bottom-0 z-50">
        <SpotifyPlayer
          styles={{
            color: "#fff",
            bgColor: "#00080e",
            activeColor: "#99c2fc",
            loaderColor: "#1a76f8",
            trackArtistColor: "#b3b3b3",
            trackNameColor: "#fff",
            height: "75px",
            sliderColor: "#1a76f8",
            sliderTrackColor: "#858c97",
            sliderHandleColor: "#fff",
            errorColor: "#ff1a1a",
          }}
          token={accessToken}
          uris={trackUri ? [trackUri] : []}
          play={isPlaying}
          callback={(state) => {
            if (state.isPlaying) {
              setIsPlaying(state.isPlaying);
            }
          }}
          showSaveIcon
          autoPlay
          magnifySliderOnHover
        />

        <div
          className="fixed bottom-[29px] right-24 z-50 cursor-pointer"
          onClick={() => setShowLyrics(true)}
        >
          Lyrics
        </div>
      </div>

      {showLyrics && (
        <Lyrics
          artist={song.artist}
          name={song.name}
          setShowLyrics={setShowLyrics}
        />
      )}
    </>
  );
};

export default MusicPlayer;
