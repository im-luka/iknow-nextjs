import FeaturedListItem from "./featured-list-item";

const FeaturedList = ({ featuredMusic, searchedMusic }) => {
  return (
    <div className="h-[420px] flex justify-around items-start flex-wrap gap-2 overflow-y-scroll scrollbar-hide md:gap-4 md:p-3">
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
