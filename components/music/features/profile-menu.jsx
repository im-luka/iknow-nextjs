import { Menu, Transition } from "@headlessui/react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { CgLogOut, CgProfile } from "react-icons/cg";

const ProfileMenu = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <Menu as="div" className="w-36 h-12 relative flex items-center">
      <div className="w-full absolute right-1 group">
        <Menu.Button className="flex items-center w-full px-7 py-2 text-md text-white rounded-full bg-[#251e1e] hover:bg-[#463e3e] transition">
          <p>{session.user.name}</p>
          <img
            src={session.user.image}
            alt={session.user.name}
            className="rounded-full w-11 h-11 absolute -right-1 object-cover"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-32 origin-top-right bg-[#251e1e] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active && "bg-white/10"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold tracking-wide text-white cursor-default`}
                  onClick={() => router.push("/music/4you/playlists")}
                >
                  <CgProfile className="w-5 h-5 mr-2" aria-hidden="true" />
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active && "bg-white/10"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm font-semibold tracking-wide text-white cursor-default`}
                  onClick={() => signOut({ redirect: false })}
                >
                  <CgLogOut className="w-5 h-5 mr-2" aria-hidden="true" />
                  Log out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileMenu;
