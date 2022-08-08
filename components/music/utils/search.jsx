import { BsSearch } from "react-icons/bs";

const Search = ({ search, setSearch }) => {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg border-2 border-custom-light-blue">
      <BsSearch className="text-xl flex-shrink-0" />

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search..."
        className="flex-grow bg-transparent border-0 px-3 placeholder:text-custom-white focus:ring-0"
      />
    </div>
  );
};

export default Search;
