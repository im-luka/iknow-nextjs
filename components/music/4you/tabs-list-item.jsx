import { millisToMinutesAndSeconds } from "../../../data/convertion";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying, setTrack } from "../../../redux/playerSlice";
import { useRouter } from "next/router";

const TabsListItem = ({ track }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { isPlaying: isPlayingState, song: songState } = useSelector(
    (store) => store.player
  );
  const dispatch = useDispatch();

  const router = useRouter();

  const handlePlay = () => {
    dispatch(setTrack(track));

    dispatch(setIsPlaying(true));

    if (track.uri === songState.uri) {
      dispatch(setIsPlaying(!isPlayingState));
    }
  };

  const handleArtist = () => {
    router.replace(`/music/4you/artists?artist=${track.artistId}`);
  };

  return (
    <div className="flex items-center px-4 gap-3 cursor-pointer">
      <img
        src={track.image}
        alt={track.name}
        className="h-20 w-20 object-cover rounded-md"
        onClick={handlePlay}
      />

      <div className="flex-grow">
        <h3
          className="line-clamp-1 max-w-[100px] font-medium hover:underline sm:max-w-[300px]"
          onClick={handlePlay}
        >
          {track.name}{" "}
          {track.explicit && (
            <span className="text-xs bg-custom-white text-custom-black font-bold px-[2px] rounded-sm opacity-80">
              E
            </span>
          )}{" "}
        </h3>
        <p
          className="text-sm font-light opacity-70 hover:underline"
          onClick={handleArtist}
        >
          {track.artist}
        </p>
      </div>

      <div className="mr-4">{millisToMinutesAndSeconds(track.duration)}</div>

      <div
        onClick={() => {
          setIsFavorite((prevstate) => !prevstate);
        }}
      >
        {isFavorite ? (
          <BsSuitHeartFill size="1.5rem" color="#99c2fc" />
        ) : (
          <BsSuitHeart size="1.5rem" />
        )}
      </div>
    </div>
  );
};

export default TabsListItem;
