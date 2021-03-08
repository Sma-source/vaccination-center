import React from "react";
import { Icon } from "@iconify/react";
import vaccineIcon from "@iconify-icons/tabler/vaccine";
import { Link } from "react-router-dom";

const Center = ({ center }) => {
  return (
    <div className="col-md-4 col-xs-12">
      <Link to={`/${center.properties.gid}`}>
        <div className="legacy-panel">
          <span className="icon">
            <Icon className="icon" icon={vaccineIcon} />
          </span>
          <div className="project-card-header">
            <h4>
              {center.properties.c_com_nom}{" "}
              <span classname="codepostale">{center.properties.c_com_cp}</span>
            </h4>
            <h5></h5>
          </div>
          <div className="project-card-description">
            <p>
              {center.properties.c_adr_num} {center.properties.c_adr_voie}{" "}
            </p>

            <p>{center.properties.c_nom}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Center;
