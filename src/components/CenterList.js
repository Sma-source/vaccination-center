import React from "react";
import Center from "./Center";

const CenterList = ({ filteredCenters }) => {
  const filtered = filteredCenters.map((center) => {
    return <Center key={center.properties.gid} center={center} />;
  });
  return (
    <div className="container list">
      <div className="row">{filtered}</div>
    </div>
  );
};

export default CenterList;
