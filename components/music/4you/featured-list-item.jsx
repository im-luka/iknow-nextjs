import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";

const FeaturedListItem = ({ song, playSong }) => {
  return (
    <div className="w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-custom-white/80 cursor-pointer hover:scale-105 hover:text-custom-white/100 transition duration-200 ease-out group mx-auto">
      <img
        src={song.albumUrl}
        alt={song.title}
        className="h-full w-full inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
      />

      <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5">
        <div className="h-10 w-10 bg-custom-light-blue rounded-full flex items-center justify-center group-hover:bg-custom-blue flex-shrink-0">
          <BsFillPauseFill className="text-xl" />
          <BsFillPlayFill className="text-xl ml-[1px]" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedListItem;
