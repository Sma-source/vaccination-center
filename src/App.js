import { BrowserRouter, Route } from "react-router-dom";
import Header from "./pages/Header";
import Details from "./pages/Details";

function App() {
  return (
    <BrowserRouter>
      <div id="App">
        <Route exact path="/" component={Header} />
        <Route exact path="/:id" component={Details} />
      </div>
    </BrowserRouter>
  );
}

export default App;
