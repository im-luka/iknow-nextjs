import { millisToMinutesAndSeconds } from "../../../data/convertion";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setIsPlaying, setTrack } from "../../../redux/playerSlice";

const RecentlyPlayedItem = ({ track }) => {
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
    <div className="max-w-md flex items-center justify-start gap-3 cursor-pointer">
      <img
        src={track.image}
        alt={track.name}
        className="h-20 w-20 object-cover rounded-md"
        onClick={handlePlay}
      />

      <div className="flex-grow">
        <h3
          className="line-clamp-1 w-56 font-medium hover:underline"
          onClick={handlePlay}
        >
          {track.name}{" "}
          {track.explicit && (
            <span className="text-xs bg-custom-white text-custom-black font-bold px-[2px] rounded-sm opacity-80">
              E
            </span>
          )}{" "}
        </h3>
        <p className="text-sm font-light opacity-70 hover:underline">
          {track.artist}
        </p>
      </div>

      <div className="hidden sm:block">
        {millisToMinutesAndSeconds(track.duration)}
      </div>

      <div className="hidden sm:block">
        <BsThreeDots size="1.25rem" color="gray" />
      </div>
    </div>
  );
};

export default RecentlyPlayedItem;
