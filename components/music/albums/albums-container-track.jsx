import { useState } from "react";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { millisToMinutesAndSeconds } from "../../../data/convertion";
import { setIsPlaying, setTrack } from "../../../redux/playerSlice";

const AlbumsContainerTrack = ({ track, index }) => {
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
    <div className="w-full flex justify-around items-center py-4">
      <div className="w-[10%] text-center">{index + 1}</div>
      <div className="w-[60%]">
        <h2
          className="text-lg text-center hover:underline cursor-pointer"
          onClick={handlePlay}
        >
          {track.name}
          {track.explicit && (
            <span className="ml-1 text-xs bg-custom-white text-custom-black font-bold px-[2px] rounded-sm opacity-80">
              E
            </span>
          )}
        </h2>
      </div>
      <div className="w-[10%] text-center">
        {millisToMinutesAndSeconds(track.duration)}
      </div>
      <div
        className="w-[20%] flex justify-end pr-4"
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

export default AlbumsContainerTrack;
