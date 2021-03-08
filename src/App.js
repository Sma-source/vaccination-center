import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Header} />
        <Route exact path="/:id" component={Details} />
      </div>
    </BrowserRouter>
  );
}

export default App;
