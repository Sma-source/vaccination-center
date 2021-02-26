import React from "react";
import { Icon } from "@iconify/react";
import vaccineIcon from "@iconify-icons/tabler/vaccine";

const Center = ({ center }) => {
  return (
    <div className="col-md-4 col-xs-12">
      <div className="legacy-panel">
        <span className="icon">
          <Icon className="icon" icon={vaccineIcon} />
        </span>
        <div className="project-card-header">
          <h4>{center.properties.c_com_nom}</h4>
        </div>
        <div className="project-card-description">
          <p>{center.properties.c_nom}</p>
        </div>
      </div>
    </div>
  );
};

export default Center;
