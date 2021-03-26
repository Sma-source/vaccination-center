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
            <ul>
              <li>{filteredPerson.properties.c_rdv_lundi}</li>
              <li>{filteredPerson.properties.c_rdv_mardi}</li>
              <li>{filteredPerson.properties.c_rdv_mercredi}</li>
              <li>{filteredPerson.properties.c_rdv_jeudi}</li>
              <li>{filteredPerson.properties.c_rdv_vendredi}</li>
              <li>{filteredPerson.properties.c_rdv_samedi}</li>
              <li>{filteredPerson.properties.c_rdv_dimanche}</li>
            </ul>
          </>
        ))}
    </div>
  );
};

export default Details;
