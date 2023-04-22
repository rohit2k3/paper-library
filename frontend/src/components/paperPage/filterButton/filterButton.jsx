import React from "react";
import "./filterButton.css"
function FilterButtons({ buttons, activeButton, onClick }) {
  return (
    <div className="filter-buttons">
      {buttons.map(button => (
        <button 
          key={button}
          className={button === activeButton ? "active" : "filter-button"}
          onClick={() => onClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
