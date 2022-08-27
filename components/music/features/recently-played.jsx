import { useSession } from "next-auth/react";
import { useState } from "react";
import { useEffect } from "react";
import { spotifyApi } from "../../../api/apiConfig";
import RecentlyPlayedItem from "./recently-played-item";

const RecentlyPlayed = () => {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [recentlyPlayedTracks, setRecentlyPlayedTracks] = useState([]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then((response) =>
      setRecentlyPlayedTracks(
        response.body.items.map((track) => {
          return {
            id: track.track.id,
            name: track.track.name,
            uri: track.track.uri,
            duration: track.track.duration_ms,
            explicit: track.track.explicit,
            artist: track.track.artists.map((artist) => artist.name).join(", "),
            artistId: track.track.artists[0].id,
            image: track.track.album.images[1].url,
          };
        })
      )
    );
  }, [accessToken]);

  return (
    <aside className="mt-8 m-2 p-4 space-y-6 bg-custom-black relative left-20 xl:left-0 xl:z-0">
      <h2 className="text-3xl inline border-b-2">Recently Played</h2>
      <div className="space-y-2 h-[575px] overflow-y-scroll scrollbar-hide">
        {recentlyPlayedTracks.map((track, index) => (
          <RecentlyPlayedItem key={index} track={track} />
        ))}
      </div>
    </aside>
  );
};

export default RecentlyPlayed;
