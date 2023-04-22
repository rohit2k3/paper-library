import React, { useState } from "react";
import FilterButtons from "./filterButton";

function Test() {
  const [activeButton, setActiveButton] = useState("All");


  // handle button click
  const handleClick = button => {
    setActiveButton(button);
  };

  return (
    <div className="App">
      <FilterButtons
        buttons={["All", "Unit 1", "Unit 2", "Unit 3", "Unit 4"]}
        activeButton={activeButton}
        onClick={handleClick}
      />
      <h1>{activeButton}</h1>
    </div>
  );
}

export default Test;
