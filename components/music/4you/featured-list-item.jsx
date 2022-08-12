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

    // dispatch(setIsPlaying(true));

    if (song.uri === songState.uri) {
      dispatch(setIsPlaying(!isPlayingState));
    }
  };

  console.log(isPlayingState, songState);

  return (
    <div
      className="w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-custom-white/80 cursor-pointer hover:scale-105 hover:text-custom-white/100 transition duration-200 ease-out group mx-auto"
      onClick={handlePlay}
    >
      <img
        src={song.albumUrl}
        alt={song.title}
        className="h-full w-full inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
      />

      <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5">
        <div className="h-10 w-10 bg-custom-light-blue rounded-full flex items-center justify-center group-hover:bg-custom-blue flex-shrink-0">
          {song.uri === songState.uri && isPlayingState ? (
            <BsFillPauseFill className="text-xl" />
          ) : (
            <BsFillPlayFill className="text-xl ml-[1px]" />
          )}
        </div>

        <div className="text-[15px]">
          <h4 className="font-extrabold w-44 truncate">{song.title}</h4>
          <h6>{song.artist}</h6>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListItem;
