import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../centres-vaccination.json";

const Details = () => {
  const [don, setDon] = useState(data.features);
  const { id } = useParams();

  // const result = don.filter((item) => {
  //   return item.properties.gid === id;
  // });
  // console.log(result);

  return (
    <div>
      <br />
      {don
        .filter((person) => person.properties.gid == id)
        .map((filteredPerson) => (
          <>
            <h1 className="text-center">{filteredPerson.properties.c_nom} </h1>
            <h3 className="text-center">
              {filteredPerson.properties.c_structure_rais}{" "}
            </h3>
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <ul>
                  <li>Lundi &nbsp; {filteredPerson.properties.c_rdv_lundi}</li>
                  <li>Mardi &nbsp; {filteredPerson.properties.c_rdv_mardi}</li>
                  <li>
                    Mercredi &nbsp; {filteredPerson.properties.c_rdv_mercredi}
                  </li>
                  <li>Jeudi &nbsp; {filteredPerson.properties.c_rdv_jeudi}</li>
                  <li>
                    Vendredi &nbsp; {filteredPerson.properties.c_rdv_vendredi}
                  </li>
                  <li>
                    Samedi &nbsp; {filteredPerson.properties.c_rdv_samedi}
                  </li>
                  <li>
                    Dimanche &nbsp; {filteredPerson.properties.c_rdv_dimanche}
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-xs-12">
                Adresse: {filteredPerson.properties.c_adr_num}&nbsp;
                {filteredPerson.properties.c_adr_voie},
                {filteredPerson.properties.c_com_cp}&nbsp;
                {filteredPerson.properties.c_com_nom}
              </div>
              <div className="col-sm-4 col-xs-12">
                <a href={filteredPerson.properties.c_rdv_site_web}>
                  <button>Rendez-vous en ligne</button>
                </a>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default Details;
