import { useEffect } from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { spotifyApi } from "../../../api/apiConfig";
import { useRouter } from "next/router";

const GridAlbums = () => {
  const { data: session } = useSession();
  const accessToken = session?.user.accessToken;
  const [albums, setAlbums] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMySavedAlbums({ limit: 4 }).then((response) =>
      setAlbums(
        response.body.items.map((album) => {
          return {
            id: album.album.id,
            image: album.album.images[1].url,
            name: album.album.name,
            artist: album.album.artists[0].name,
          };
        })
      )
    );
  }, [accessToken]);

  const handleAlbum = (albumId) => {
    router.replace(`/music/4you/albums?album=${albumId}`);
  };

  return (
    <div className="flex flex-col justify-start items-start space-y-4 py-2">
      <h2 className="text-2xl font-bold">Popular Albums</h2>

      <div className="grid grid-cols-2 gap-2">
        {albums.map((album) => (
          <img
            key={album.id}
            src={album.image}
            alt={album.name}
            className="w-40 h-40 shrink-0 opacity-70 rounded-xl cursor-pointer shadow-md shadow-custom-blue/10 hover:shadow-xl hover:shadow-custom-blue hover:opacity-100 hover:scale-105 transition duration-500"
            onClick={handleAlbum.bind(null, album.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default GridAlbums;
