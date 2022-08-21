import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import Loader from "../../../../components/music/loader/loader";
import MusicLayout from "../../../../components/layout/music-layout";
import ArtistsContainer from "../../../../components/music/artists/artists-container";
import MusicPlayer from "../../../../components/music/utils/music-player";

const ArtistsPage = () => {
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
      <ArtistsContainer />

      {isPlaying && (
        <MusicPlayer accessToken={session?.accessToken} trackUri={song?.uri} />
      )}
    </MusicLayout>
  );
};

export default ArtistsPage;
