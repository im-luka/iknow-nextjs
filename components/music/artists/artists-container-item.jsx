import { useState } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { millisToMinutesAndSeconds } from "../../../data/convertion";
import { setIsPlaying, setTrack } from "../../../redux/playerSlice";

const ArtistsContainerItem = ({ track }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { isPlaying: isPlayingState, song: songState } = useSelector(
    (store) => store.player
  );
  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(setTrack(track));

    dispatch(setIsPlaying(true));

    if (track.uri === songState.uri) {
      dispatch(setIsPlaying(!isPlayingState));
    }
  };

  return (
    <div
      key={track.id}
      className="p-3 flex justify-between bg-custom-dark-blue"
    >
      <h3
        className="w-56 truncate font-medium hover:underline cursor-pointer"
        onClick={handlePlay}
      >
        {track.name}
        {track.explicit && (
          <span className="ml-1 text-xs bg-custom-white text-custom-black font-bold px-[2px] rounded-sm opacity-80">
            E
          </span>
        )}
      </h3>

      <div className="opacity-70">
        {millisToMinutesAndSeconds(track.duration)}
      </div>

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

export default ArtistsContainerItem;
