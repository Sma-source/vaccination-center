import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../centres-vaccination.json";
import { Icon } from "@iconify/react";
import phoneIcon from "@iconify-icons/tabler/phone";

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
            <h1 className="text-center pt-1">
              {filteredPerson.properties.c_nom}{" "}
            </h1>
            <h3 className="text-center pt-1 pb-2">
              {filteredPerson.properties.c_structure_rais}{" "}
            </h3>
            <div className="row pt-3">
              <div className="col-sm-4 col-xs-12 text-center">
                <h4 className="text-center">Horaires</h4>
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
              <div className="col-sm-4 col-xs-12 text-center">
                <h4 className="text-center pb-1">Adresse</h4>
                {filteredPerson.properties.c_adr_num}&nbsp;
                {filteredPerson.properties.c_adr_voie},
                {filteredPerson.properties.c_com_cp}&nbsp;
                {filteredPerson.properties.c_com_nom}
              </div>
              <div className="col-sm-4 col-xs-12 text-center">
                <h4 className="text-center pb-1">Prise de rdv</h4>
                <div className="btn-rdv">
                  <a
                    className="pb-1"
                    href={filteredPerson.properties.c_rdv_site_web}
                  >
                    <button>Rendez-vous en ligne</button>
                  </a>
                  <a href={`tel:${filteredPerson.properties.c_rdv_tel}`}>
                    <button>
                      <Icon className="icon-phone" icon={phoneIcon} />
                      {filteredPerson.properties.c_rdv_tel}{" "}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default Details;
