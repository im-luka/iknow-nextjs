import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { spotifyApi } from "../../../api/apiConfig";
import { setPlaylist } from "../../../redux/playlistsSlice";

const Playlists = () => {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [playlists, setPlaylists] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getUserPlaylists().then((response) =>
      setPlaylists(
        response.body.items.map((item) => {
          return {
            id: item.id,
            image: item.images[0]?.url,
            name: item.name,
            description: item.description,
          };
        })
      )
    );
  }, [accessToken]);

  return (
    <>
      {playlists.map((playlist) => (
        <div key={playlist.id}>
          <p
            className="text-lg opacity-80 hover:opacity-100 hover:underline transition cursor-pointer"
            onClick={() => dispatch(setPlaylist(playlist))}
          >
            {playlist.name}
          </p>
        </div>
      ))}
    </>
  );
};

export default Playlists;
