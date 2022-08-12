import { AiFillHome } from "react-icons/ai";
import { GiMicrophone } from "react-icons/gi";
import { RiAlbumFill } from "react-icons/ri";
import { BsMusicNoteList, BsThreeDots, BsSpotify } from "react-icons/bs";

const Navbar = () => {
  return (
    <section className="h-screen relative z-20 flex flex-col items-center p-4 space-y-10 bg-black">
      {/* <h1 className="text-4xl font-logo text-custom-light-blue">iPLAY</h1> */}
      <div>
        <BsSpotify className="text-4xl mt-1 text-custom-light-blue" />
      </div>

      <nav className="h-1/3 flex flex-col justify-around">
        <div>
          <AiFillHome className="navbar-icon opacity-100" />
        </div>
        <div>
          <BsMusicNoteList className="navbar-icon" />
        </div>
        <div>
          <GiMicrophone className="navbar-icon" />
        </div>
        <div>
          <RiAlbumFill className="navbar-icon" />
        </div>
        <div>
          <BsThreeDots className="navbar-icon" />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;