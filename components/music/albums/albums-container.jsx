import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { spotifyApi } from "../../../api/apiConfig";
import ProfileMenu from "../features/profile-menu";
import Search from "../utils/search";
import AlbumsContainerTrack from "./albums-container-track";

const AlbumsContainer = () => {
  const { data: session } = useSession();
  const accessToken = session?.user.accessToken;

  const router = useRouter();
  const [search, setSearch] = useState("");
  const [album, setAlbum] = useState({});

  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;

    if (search) {
      spotifyApi.searchAlbums(search, { limit: 1 }).then((response) =>
        setAlbum(
          response.body.albums.items.map((album) => {
            return {
              id: album.id,
              uri: album.uri,
              name: album.name,
              total_tracks: album.total_tracks,
              release_date: album.release_date,
              image: album.images[1].url,
              artist: album.artists.map((artist) => artist.name).join(", "),
              artistId: album.artists[0].id,
            };
          })[0]
        )
      );
    } else {
      if (router.query.album) {
        spotifyApi.getAlbum(router.query.album).then((response) =>
          setAlbum({
            id: response.body.id,
            uri: response.body.uri,
            name: response.body.name,
            total_tracks: response.body.total_tracks,
            release_date: response.body.release_date,
            popularity: response.body.popularity,
            image: response.body.images[1].url,
            artist: response.body.artists
              .map((artist) => artist.name)
              .join(", "),
            artistId: response.body.artists[0].id,
            tracks: response.body.tracks.items.map((track) => {
              return {
                id: track.id,
                name: track.name,
                explicit: track.explicit,
                duration: track.duration_ms,
                uri: track.uri,
              };
            }),
          })
        );
      } else {
        spotifyApi.getMySavedAlbums({ limit: 1 }).then((response) =>
          setAlbum(
            response.body.items.map((album) => {
              return {
                id: album.album.id,
                uri: album.album.uri,
                name: album.album.name,
                total_tracks: album.album.total_tracks,
                release_date: album.album.release_date,
                popularity: album.album.popularity,
                image: album.album.images[1].url,
                artist: album.album.artists
                  .map((artist) => artist.name)
                  .join(", "),
                artistId: album.album.artists[0].id,
                tracks: album.album.tracks.items.map((track) => {
                  return {
                    id: track.id,
                    name: track.name,
                    explicit: track.explicit,
                    duration: track.duration_ms,
                    uri: track.uri,
                  };
                }),
              };
            })[0]
          )
        );
      }
    }
  }, [accessToken, router.query.album, search]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getAlbum(album.id).then((response) =>
      setAlbum((prevstate) => ({
        ...prevstate,
        popularity: response.body.popularity,
        tracks: response.body.tracks.items.map((track) => {
          return {
            id: track.id,
            name: track.name,
            explicit: track.explicit,
            duration: track.duration_ms,
            uri: track.uri,
          };
        }),
      }))
    );
  }, [accessToken, album]);

  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMySavedAlbums({ limit: 5 }).then((response) =>
      setRecommended(
        response.body.items.map((album) => {
          return {
            id: album.album.id,
            uri: album.album.uri,
            name: album.album.name,
            image: album.album.images[1]?.url,
          };
        })
      )
    );
  }, [accessToken]);

  const handleGoBack = () => {
    router.replace("/music/4you");
  };

  const handleArtist = (artistId) => {
    router.replace(`/music/4you/artists?artist=${artistId}`);
  };

  const handleAlbum = (albumId) => {
    setSearch("");
    router.replace(`/music/4you/albums?album=${albumId}`);
  };

  return (
    <section className="w-full flex flex-col lg:h-screen">
      <div>
        <div className="flex justify-between items-start p-3 space-x-3 lg:gap-14">
          <div>
            <BsArrowLeft
              className="text-5xl cursor-pointer hover:animate-pulse"
              onClick={handleGoBack}
            />
          </div>

          <div className="flex-grow">
            <Search search={search} setSearch={setSearch} />
          </div>

          <div>
            <ProfileMenu />
          </div>
        </div>
      </div>

      <div className="h-full flex flex-col justify-center items-start lg:flex-row">
        <div className="w-full h-full flex flex-col gap-3 lg:w-[60%]">
          <div className="w-full flex justify-start items-center gap-5 p-8 pt-12">
            <img
              src={album.image}
              alt={album.name}
              className="h-48 w-48 object-cover shadow-2xl shadow-custom-dark-blue hover:scale-105 transition duration-500 hover:shadow-custom-blue cursor-pointer"
            />

            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-wider">
                {album.name}
              </h1>
              <h3
                className="text-lg italic opacity-70 hover:underline hover:cursor-pointer"
                onClick={handleArtist.bind(null, album.artistId)}
              >
                {album.artist}
              </h3>
            </div>
          </div>

          <div className="relative h-[425px] overflow-y-scroll scrollbar-hide lg:h-full">
            <div className="absolute z-20 w-full flex justify-around items-center py-3 bg-custom-black border">
              <div className="w-[10%] text-center">#</div>
              <div className="w-[60%] text-center">TITLE</div>
              <div className="w-[10%] text-center">DURATION</div>
              <div className="w-[20%] text-center"></div>
            </div>

            <div className="mt-16 pb-24">
              {album.tracks?.map((track, index) => (
                <AlbumsContainerTrack
                  key={track.id}
                  track={track}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-start items-center gap-7 pt-24 lg:w-[40%]">
          <h1
            className="text-6xl font-bold hover:underline hover:cursor-pointer"
            onClick={handleArtist.bind(null, album.artistId)}
          >
            {album.artist} 🎼
          </h1>

          <div className="space-y-4 flex flex-col items-start">
            <p className="text-xl border-b">
              Total Tracks 💿 : {album.total_tracks}
            </p>
            <p className="text-xl border-b">
              Release Date 📅 : {album.release_date}
            </p>
            <p className="text-xl border-b">
              Popularity 🌟 : {album.popularity} / 100
            </p>
          </div>

          <div className="mt-10 p-8 space-y-7 mb-44 lg:mb-auto">
            <h2 className="text-xl opacity-70 font-medium">
              Recommended 4 You
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {recommended.map((recom) => (
                <img
                  key={recom.id}
                  src={recom.image}
                  alt={recom.name}
                  className="w-40 h-40 opacity-70 rounded-xl cursor-pointer shadow-md shadow-custom-blue/10 hover:shadow-xl hover:shadow-custom-blue hover:opacity-100 hover:scale-105 transition duration-500"
                  onClick={handleAlbum.bind(null, recom.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumsContainer;
