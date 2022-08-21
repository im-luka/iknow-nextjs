import { useSession, signOut } from "next-auth/react";
import ProfileMenu from "./profile-menu";
import RecentlyPlayed from "./recently-played";

const Features = () => {
  return (
    <section className="flex flex-col items-end p-3">
      <ProfileMenu />
      <RecentlyPlayed />
    </section>
  );
};

export default Features;
