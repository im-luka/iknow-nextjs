import { useEffect } from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { spotifyApi } from "../../../api/apiConfig";
import { useRouter } from "next/router";

const GridArtists = () => {
  const { data: session } = useSession();
  const accessToken = session?.user.accessToken;
  const [artists, setArtists] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMyTopArtists({ limit: 4 }).then((response) =>
      setArtists(
        response.body.items.map((item) => {
          return {
            id: item.id,
            image: item.images[1].url,
            name: item.name,
          };
        })
      )
    );
  }, [accessToken]);

  const handleArtist = (artistId) => {
    router.replace(`/music/4you/artists?artist=${artistId}`);
  };

  return (
    <div className="flex flex-col justify-start items-start space-y-4 py-2">
      <h2 className="text-2xl font-bold">Popular Artists</h2>

      <div className="grid grid-cols-2 gap-2">
        {artists.map((artist) => (
          <img
            key={artist.id}
            src={artist.image}
            alt={artist.name}
            className="w-40 h-40 opacity-70 rounded-xl cursor-pointer shadow-md shadow-custom-blue/10 hover:shadow-xl hover:shadow-custom-blue hover:opacity-100 hover:scale-105 transition duration-500"
            onClick={handleArtist.bind(null, artist.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default GridArtists;
