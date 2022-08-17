import { useSession, signOut } from "next-auth/react";

const Features = () => {
  return (
    <button
      className="px-4 py-1 border-none bg-custom-blue text-custom-white"
      onClick={() => signOut({redirect: false})}
    >
      log out
    </button>
  );
};

export default Features;
