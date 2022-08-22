import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import MusicLayout from "../../../../components/layout/music-layout";
import AlbumsContainer from "../../../../components/music/albums/albums-container";
import Loader from "../../../../components/music/loader/loader";
import MusicPlayer from "../../../../components/music/utils/music-player";

const AlbumsPage = () => {
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
      <AlbumsContainer />

      {isPlaying && (
        <MusicPlayer accessToken={session?.accessToken} trackUri={song?.uri} />
      )}
    </MusicLayout>
  );
};

export default AlbumsPage;
