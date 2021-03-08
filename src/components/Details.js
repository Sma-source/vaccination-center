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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        laudantium blanditiis quis omnis quas ea illum minus quaerat excepturi
        ex, eum tempore odio? Beatae repellendus aliquid eum aperiam, labore
        nobis.
      </p>
      {don
        .filter((person) => person.properties.gid == id)
        .map((filteredPerson) => (
          <li>{filteredPerson.properties.c_com_cp}</li>
        ))}
    </div>
  );
};

export default Details;
