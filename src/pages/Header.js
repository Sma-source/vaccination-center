import React, { useState } from "react";

import CenterList from "../components/CenterList";
import data from "../centres-vaccination.json";
import Nav from "../components/Nav";

const Header = () => {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  const [oups, setOups] = useState(data.features);

  const filteredCenters = oups.filter((center) => {
    return (
      center.properties.c_nom
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
      center.properties.c_com_nom
        .toLowerCase()
        .includes(searchField.toLowerCase())
    );
  });
  const handleChange = (e) => {
    setSearchField(e.target.value);
    setSearchShow(true);
  };

  function searchList() {
    if (searchField === "") {
      return <></>;
    }
    if (searchShow) {
      return (
        <>
          <CenterList filteredCenters={filteredCenters} />
        </>
      );
    }
  }
  return (
    <>
      <Nav></Nav>
      <div className="header container">
        <div className="row">
          <div className="col-md-6 text-btn text-center">
            <h2>Vaccin covid-19</h2>
            <p>Trouve ton centre de vaccination</p>
            <div className="form">
              <input
                type="search"
                id="name"
                onChange={handleChange}
                placeholder="Lyon..."
              />
              <button type="submit">Trouver</button>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5e81d57cd802d68b3c8fa38d_covid19-illustration-example-3.png"
              alt="img"
              className="img"
            />
          </div>
          {searchList()}
        </div>
      </div>
    </>
  );
};

export default Header;
