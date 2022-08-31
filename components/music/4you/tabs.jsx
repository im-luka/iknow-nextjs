import { Tab } from "@headlessui/react";
import { useEffect } from "react";
import { useState } from "react";
import TabsList from "./tabs-list";
import { useSession } from "next-auth/react";
import { spotifyApi } from "../../../api/apiConfig";

const Tabs = () => {
  const { data: session } = useSession();
  const accessToken = session?.user.accessToken;
  const [recommended, setRecommended] = useState([]);
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMyTopTracks().then((response) => {
      setRecommended(
        response.body.items.map((track) => {
          return {
            id: track.id,
            name: track.name,
            uri: track.uri,
            duration: track.duration_ms,
            explicit: track.explicit,
            artist: track.artists.map((artist) => artist.name).join(", "),
            artistId: track.artists[0].id,
            image: track.album.images[1].url,
          };
        })
      );
    });
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMyTopTracks({ limit: 40 }).then((response) => {
      setPopular(
        response.body.items.slice(21, 40).map((track) => {
          return {
            id: track.id,
            name: track.name,
            uri: track.uri,
            duration: track.duration_ms,
            explicit: track.explicit,
            artist: track.artists.map((artist) => artist.name).join(", "),
            artistId: track.artists[0].id,
            image: track.album.images[1].url,
          };
        })
      );
    });
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMySavedTracks().then((response) => {
      setTrending(
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
      );
    });
  }, [accessToken]);

  return (
    <Tab.Group>
      <Tab.List className="flex gap-2 md:gap-10">
        <Tab
          className={({ selected }) =>
            `p-2 opacity-50 ${selected ? "opacity-100 shadow-xl" : ""}`
          }
        >
          <h2 className="text-lg">Recommended</h2>
        </Tab>
        <Tab
          className={({ selected }) =>
            `p-2 opacity-50 ${selected ? "opacity-100 shadow-xl" : ""}`
          }
        >
          <h2 className="text-lg">Popular</h2>
        </Tab>
        <Tab
          className={({ selected }) =>
            `p-2 opacity-50 ${selected ? "opacity-100 shadow-xl" : ""}`
          }
        >
          <h2 className="text-lg">My Tracks</h2>
        </Tab>
      </Tab.List>
      <Tab.Panels className="mt-4">
        <Tab.Panel>
          <TabsList list={recommended} />
        </Tab.Panel>
        <Tab.Panel>
          <TabsList list={popular} />
        </Tab.Panel>
        <Tab.Panel>
          <TabsList list={trending} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
