import "./App.css";
//import {v4 as uuid } from "uuid";
import RoutesList from "./RoutesList";
import { BrowserRouter } from "react-router-dom";
import { getDogs } from "./helper.js";

const DOGS = await getDogs();

function App() {
  return (
    <div className="App">
      <h1>App!</h1>
      <BrowserRouter>
        <RoutesList dogs={DOGS} />
      </BrowserRouter>
    </div>
  );
}

export default App;
