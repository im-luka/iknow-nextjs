import { useRouter } from "next/router";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BsFillSuitHeartFill, BsSpotify } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setPlaylist } from "../../../redux/playlistsSlice";
import Playlists from "./playlists";

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <nav className="bg-custom-dark-blue flex flex-col justify-start items-start gap-5 py-4">
      <div className="w-full flex items-center justify-center">
        {/* <BsSpotify className="text-4xl mt-1 text-custom-light-blue" /> */}
        <h1 className="font-logo text-5xl cursor-pointer">iPLAY</h1>
      </div>

      <div className="space-y-4">
        <div
          className="group w-full flex items-center ml-3 gap-3 cursor-pointer"
          onClick={() => router.replace("/music/4you")}
        >
          <AiFillHome className="text-xl group-hover:scale-125 group-hover:text-custom-blue transition duration-500" />
          <span className="text-lg opacity-80 group-hover:opacity-100 group-hover:underline transition">
            Home
          </span>
        </div>

        <div
          className="group w-full flex items-center ml-3 gap-3 cursor-pointer"
          onClick={() => router.replace("/music/4you")}
        >
          <AiOutlineSearch className="text-xl group-hover:scale-125 group-hover:text-custom-blue transition duration-500" />
          <span className="text-lg opacity-80 group-hover:opacity-100 group-hover:underline transition">
            Search
          </span>
        </div>

        <div
          className="group w-full flex items-center ml-3 gap-3 cursor-pointer"
          onClick={() => dispatch(setPlaylist({}))}
        >
          <BsFillSuitHeartFill className="text-xl group-hover:scale-125 group-hover:text-custom-blue transition duration-500" />
          <span className="text-lg opacity-80 group-hover:opacity-100 group-hover:underline transition">
            Favorites
          </span>
        </div>
      </div>

      <div className="flex flex-col p-2 gap-3">
        <Playlists />
      </div>
    </nav>
  );
};

export default Sidebar;
