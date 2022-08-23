import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Search from "../utils/search";
import { useState } from "react";
import FeaturedList from "./featured-list";
import { spotifyApi } from "../../../api/apiConfig";
import Tabs from "./tabs";
import GridArtists from "./grid-artists";
import GridAlbums from "./grid-albums";

const MainContent = () => {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [featuredMusic, setFeaturedMusic] = useState([]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    spotifyApi.searchTracks(search).then((response) =>
      setSearchResults(
        response.body.tracks.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
            popularity: track.popularity,
          };
        })
      )
    );
  }, [accessToken, search]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getNewReleases().then((response) =>
      setFeaturedMusic(
        response.body.albums.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.images[0].url,
          };
        })
      )
    );
  }, [accessToken]);

  return (
    <section className="m-4 flex flex-col">
      <Search search={search} setSearch={setSearch} />
      <FeaturedList
        featuredMusic={featuredMusic}
        searchedMusic={searchResults}
      />

      <div className="flex flex-col justify-between gap-12 mt-8 items-start min-w-full xl:flex-row xl:flex-wrap">
        <div className="w-full xl:w-auto">
          <Tabs />
        </div>

        <div className="flex flex-wrap gap-4 w-full xl:gap-12 xl:w-auto">
          <GridArtists />
          <GridAlbums />
        </div>
      </div>
    </section>
  );
};

export default MainContent;
