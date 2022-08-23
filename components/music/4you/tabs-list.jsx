import TabsListItem from "./tabs-list-item";

const TabsList = ({ list }) => {
  return (
    <div className="space-y-4 h-96 flex flex-col py-3 overflow-y-scroll scrollbar-hide bg-[#0f0f0f]">
      {list.map((track, index) => (
        <TabsListItem key={index} track={track} />
      ))}
    </div>
  );
};

export default TabsList;
