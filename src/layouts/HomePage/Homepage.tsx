import React from "react";
import Carousel from "./componenets/Carousel";
import ExploreTopBooks from "./componenets/ExploreTopBooks";
import Heros from "./componenets/Heros";
import LibraryServices from "./componenets/LibraryServices";

const Homepage = () => {
  return (
    <>
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </>
  );
};

export default Homepage;
