import React from "react";

const Center = ({ clinic, ville }) => {
  return (
    <div className="cocktail-footer">
      <h3>{ville}</h3>
      <h4>{clinic}</h4>
    </div>
  );
};

export default Center;
