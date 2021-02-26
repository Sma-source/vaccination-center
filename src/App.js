import { useState } from "react";
import Map from "./components/Map";
import Header from "./components/Header";
import data from "./centres-vaccination.json";

function App() {
  return (
    <div className="App">
      <Header data={data.features} />
    </div>
  );
}

export default App;
