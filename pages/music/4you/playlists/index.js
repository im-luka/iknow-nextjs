import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Loader from "../../../../components/music/loader/loader";
import MusicLayout from "../../../../components/layout/music-layout";
import PlaylistsContainer from "../../../../components/music/playlists/playlists-container";
import { useSelector } from "react-redux";
import MusicPlayer from "../../../../components/music/utils/music-player";

const PlaylistsPage = () => {
  const router = useRouter();

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.replace("/auth/login");
    },
  });

  const { isPlaying, song } = useSelector((store) => store.player);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <MusicLayout>
      <PlaylistsContainer />

      {isPlaying && (
        <MusicPlayer
          accessToken={session?.user.accessToken}
          trackUri={song?.uri}
        />
      )}
    </MusicLayout>
  );
};

export default PlaylistsPage;
