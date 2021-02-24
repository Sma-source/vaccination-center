import { useState } from "react";
import Map from "./components/Map";
import Header from "./components/Header";
import data from "./centres-vaccination.json";

function App() {
  const [vaccineData, setVaccineData] = useState(data.features);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
