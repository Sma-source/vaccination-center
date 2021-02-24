import React from "react";

const Header = () => {
  return (
    <>
      <div className="header container">
        <div className="row">
          <div className="col-md-6 text-btn text-center">
            <h2>Vaccin covid-19</h2>
            <p>Trouve ton centre de vaccination</p>
            <input type="text" name="" id="" />
            <button>input button</button>
          </div>
          <div className="col-md-6">
            <img
              src="https://global-uploads.webflow.com/5bcb5ee81fb2091a2ec550c7/5e81d57cd802d68b3c8fa38d_covid19-illustration-example-3.png"
              alt="img"
              className="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;