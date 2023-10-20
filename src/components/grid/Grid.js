import React from "react";
import "./Grid.css";

const Grid = ({ children, columns }) => {
  const gridStyles = {
    gridTemplateColumns: `repeat(${columns}, 1fr)`, // Use the 'columns' variable
    gap: "3rem",
  };

  return (
    <div className="grid-container" style={gridStyles}>
      {children}
    </div>
  );
};

export default Grid;
