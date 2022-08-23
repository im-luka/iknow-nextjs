import { useSession, signOut } from "next-auth/react";
import ProfileMenu from "./profile-menu";
import RecentlyPlayed from "./recently-played";

const Features = () => {
  return (
    <section className="flex flex-col items-end p-3">
      <div className="fixed right-3 top-3 xl:relative xl:right-0 xl:top-0">
        <ProfileMenu />
      </div>
      <RecentlyPlayed />
    </section>
  );
};

export default Features;
