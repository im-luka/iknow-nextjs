import { useEffect } from "react";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { setIsPlaying, setTrack } from "../../../redux/playerSlice";

const FeaturedListItem = ({ song, playSong }) => {
  const { isPlaying: isPlayingState, song: songState } = useSelector(
    (store) => store.player
  );
  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(setTrack(song));

    dispatch(setIsPlaying(true));

    if (song.uri === songState.uri) {
      dispatch(setIsPlaying(!isPlayingState));
    }
  };

  return (
    <div
      className="w-48 h-72 overflow-hidden relative text-custom-white/80 cursor-pointer hover:scale-105 hover:text-custom-white/100 transition duration-200 ease-out group mx-auto"
      onClick={handlePlay}
    >
      <img
        src={song.albumUrl}
        alt={song.title}
        className="h-full w-full object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
      />

      <div className="absolute bottom-5 ml-1 flex items-center space-x-1">
        <div className="h-9 w-9 bg-custom-light-blue rounded-full flex items-center justify-center group-hover:bg-custom-blue flex-shrink-0 transition">
          {song.uri === songState.uri && isPlayingState ? (
            <BsFillPauseFill className="text-xl" />
          ) : (
            <BsFillPlayFill className="text-xl ml-[1px]" />
          )}
        </div>

        <div>
          <h4 className="font-extrabold w-44 truncate text-sm">{song.title}</h4>
          <h6 className="text-xs">{song.artist}</h6>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListItem;
