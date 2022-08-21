import FeaturedListItem from "./featured-list-item";

const FeaturedList = ({ featuredMusic, searchedMusic }) => {
  return (
    <div className="h-[420px] p-3 flex justify-around items-start flex-wrap gap-4 overflow-y-scroll scrollbar-hide">
      {searchedMusic.length === 0
        ? featuredMusic
            .slice(0, 12)
            .map((track) => (
              <FeaturedListItem
                key={track.id}
                song={track}
                playSong={() => {}}
              />
            ))
        : searchedMusic
            .slice(0, 12)
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
