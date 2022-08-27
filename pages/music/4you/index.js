import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import React from "react";
import MainContent from "../../../components/music/4you/main-content";
import MusicContainer from "../../../components/music/utils/music-container";
import MusicLayout from "../../../components/layout/music-layout";
import Loader from "../../../components/music/loader/loader";
import MusicPlayer from "../../../components/music/utils/music-player";
import { useSelector } from "react-redux";

const ForYouPage = () => {
  const router = useRouter();

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.replace("/auth/login");
    },
  });

  const { isPlaying, song } = useSelector((store) => store.player);

  console.log(session);

  if (status === "loading") {
    return <Loader />;
  }

  return (
    <MusicLayout>
      <MusicContainer>
        <MainContent />
      </MusicContainer>

      {isPlaying && (
        <MusicPlayer
          accessToken={session?.user.accessToken}
          trackUri={song?.uri}
        />
      )}
    </MusicLayout>
  );
};

export default ForYouPage;
