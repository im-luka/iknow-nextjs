import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { millisToMinutesAndSeconds } from "../../../data/convertion";
import { setIsPlaying, setTrack } from "../../../redux/playerSlice";
import ProfileMenu from "../features/profile-menu";

const Main = ({ playlist }) => {
  const router = useRouter();

  const { isPlaying: isPlayingState, song: songState } = useSelector(
    (store) => store.player
  );
  const dispatch = useDispatch();

  const handlePlay = (track) => {
    dispatch(setTrack(track));

    dispatch(setIsPlaying(true));

    if (track.uri === songState.uri) {
      dispatch(setIsPlaying(!isPlayingState));
    }
  };

  const handleGoBack = () => {
    router.replace("/music/4you");
  };

  const handleArtist = (artistId) => {
    router.replace(`/music/4you/artists?artist=${artistId}`);
  };

  const handleAlbum = (albumId) => {
    router.replace(`/music/4you/albums?album=${albumId}`);
  };

  return (
    <main className="relative w-full h-screen flex flex-col">
      <div className="w-full flex justify-between items-start p-4">
        <div>
          <BsArrowLeft
            className="text-5xl cursor-pointer hover:animate-pulse"
            onClick={handleGoBack}
          />
        </div>

        <div>
          <ProfileMenu />
        </div>
      </div>

      <div className="flex flex-col justify-start items-center gap-4 p-3 md:flex-row">
        <div>
          <img
            src={playlist.image || "/images/error/music_note.png"}
            alt={playlist.name}
            className="h-72 w-72 shadow-xl shadow-custom-dark-blue object-cover"
          />
        </div>

        <div className="flex flex-col gap-1 mt-3 md:gap-4 md:mt-auto">
          <div>
            <h3 className="text-lg italic font-light opacity-60">PLAYLIST</h3>
          </div>

          <div>
            <h1 className="text-3xl font-bold">{playlist.name}</h1>
          </div>

          <div>
            <p className="italic opacity-60">{playlist.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 h-full overflow-y-scroll scrollbar-hide pb-24 md:mt-16">
        <div className="absolute z-20 w-full flex justify-around items-center py-2.5 bg-custom-dark-blue">
          <div className="w-[10%] text-center">#</div>
          <div className="w-[40%] text-center">Title & Artist</div>
          <div className="w-[40%] text-center hidden lg:block">Album</div>
          <div className="w-[10%] text-center">Duration</div>
        </div>

        <div className="bg-custom-dark-blue/30 mt-10">
          {playlist.tracks?.map((track, index) => (
            <div
              key={index}
              className="w-full flex justify-around items-center py-4"
            >
              <div className="w-[10%] text-center">{index + 1}</div>
              <div className="w-[40%]">
                <div className="flex items-center justify-start gap-3 lg:ml-24">
                  <div className="shrink-0">
                    <img
                      src={track.image}
                      alt={track.name}
                      className="w-16 h-16 rounded-sm shadow-md shadow-custom-blue object-cover hover:scale-110 transition duration-500 cursor-pointer hidden md:block"
                      onClick={handlePlay.bind(null, track)}
                    />
                  </div>

                  <div>
                    <h2
                      className="text-lg hover:underline cursor-pointer"
                      onClick={handlePlay.bind(null, track)}
                    >
                      {track.name}
                    </h2>
                    <p
                      className="text-sm italic opacity-60 hover:underline cursor-pointer"
                      onClick={handleArtist.bind(null, track.artistId)}
                    >
                      {track.artist}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="w-[40%] text-center opacity-60 hover:underline cursor-pointer hidden lg:block"
                onClick={handleAlbum.bind(null, track.albumId)}
              >
                {track.album}
              </div>
              <div className="w-[10%] text-center">
                {millisToMinutesAndSeconds(track.duration)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
