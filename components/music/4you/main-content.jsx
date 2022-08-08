import React from "react";
import Search from "../utils/search";
import { useState } from "react";

const MainContent = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="bg-custom-black m-4">
      <Search search={search} setSearch={setSearch} />
    </section>
  );
};

export default MainContent;
