import React from "react";
import { useGlobalContext } from "../Context";

const CenterList = () => {
  const { vaccineData } = useGlobalContext();
  return (
    <div>
      <div className="cocktails-center">
        {vaccineData.map((it) => {
          const { c_nom, c_com_nom } = it.properties;
          return (
            <>
              <p>
                {c_nom} : {c_com_nom}{" "}
              </p>
              <p> </p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CenterList;
