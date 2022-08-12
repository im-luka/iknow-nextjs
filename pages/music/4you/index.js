import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import React from "react";
import MainContent from "../../../components/music/4you/main-content";
import MusicContainer from "../../../components/music/utils/music-container";

const ForYouPage = () => {
  const router = useRouter();

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.replace("/auth/login");
    },
  });

  console.log(session, status);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  console.log(session);

  return (
    <MusicContainer>
      <MainContent />
    </MusicContainer>
  );
};

export default ForYouPage;
