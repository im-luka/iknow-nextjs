import FeaturedListItem from "./featured-list-item";

const FeaturedList = ({ featuredMusic, searchedMusic }) => {
  return (
    <div className="grid overflow-y-scroll scrollbar-hide h-96 p-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {searchedMusic.length === 0
        ? featuredMusic
            .slice(0, 4)
            .map((track) => (
              <FeaturedListItem
                key={track.id}
                song={track}
                playSong={() => {}}
              />
            ))
        : searchedMusic
            .slice(0, 4)
            .map((track) => (
              <FeaturedListItem
                key={track.id}
                song={track}
                playSong={() => {}}
              />
            ))}
    </div>
  );
};

export default FeaturedList;
