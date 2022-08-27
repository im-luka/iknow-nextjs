import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import Main from "./main";
import Sidebar from "./sidebar";
import { spotifyApi } from "../../../api/apiConfig";

const PlaylistsContainer = () => {
  const { playlist: playlistState } = useSelector((store) => store.playlists);
  const [playlist, setPlaylist] = useState([]);

  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;

    if (!playlistState.id) {
      spotifyApi.getMySavedTracks({ limit: 50 }).then((response) => {
        console.log(response);
        setPlaylist({
          id: new Date().toString(),
          name: "Your Favorite Music",
          description: "",
          image: "",
          tracks: response.body.items.map((item) => {
            return {
              id: item.track.id,
              name: item.track.name,
              uri: item.track.uri,
              duration: item.track.duration_ms,
              explicit: item.track.explicit,
              artist: item.track.artists
                .map((artist) => artist.name)
                .join(", "),
              artistId: item.track.artists[0].id,
              image: item.track.album.images[1].url,
              album: item.track.album.name,
              albumId: item.track.album.id,
            };
          }),
        });
      });
    } else {
      spotifyApi.getPlaylist(playlistState.id).then((response) => {
        console.log(response);
        setPlaylist({
          id: response.body.id,
          name: response.body.name,
          description: response.body.description,
          image: response.body.images[0]?.url,
          tracks: response.body.tracks.items.map((item) => {
            return {
              id: item.track.id,
              name: item.track.name,
              uri: item.track.uri,
              duration: item.track.duration_ms,
              explicit: item.track.explicit,
              artist: item.track.artists
                .map((artist) => artist.name)
                .join(", "),
              artistId: item.track.artists[0].id,
              image: item.track.album.images[1].url,
              album: item.track.album.name,
              albumId: item.track.album.id,
            };
          }),
        });
      });
    }
  }, [accessToken, playlistState]);

  return (
    <section className="w-full overflow-hidden lg:h-screen">
      <div
        className="w-full h-full flex items-stretch"
        style={{
          background: "linear-gradient(transparent, rgba(0,0,0,1))",
          backgroundColor: "#1652a7",
        }}
      >
        <Sidebar />

        <div className="w-full h-full overflow-auto">
          <Main playlist={playlist} />
        </div>
      </div>
    </section>
  );
};

export default PlaylistsContainer;
