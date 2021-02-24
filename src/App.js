import { useState } from "react";
import Map from "./components/Map";
import Header from "./components/Header";
import CenterList from "./components/CenterList";

function App() {
  return (
    <div className="App">
      <Header />
      <CenterList />
    </div>
  );
}

export default App;
