import "./App.css";
//import {v4 as uuid } from "uuid";
import RoutesList from "./RoutesList";
import Nav from "./Nav.jsx";
import { BrowserRouter } from "react-router-dom";
import { getDogs, getDogNames } from "./helper.js";

const DOGS = await getDogs();
const DOG_NAMES = getDogNames(DOGS);

function App() {
  return (
    <div className="App">
      <h1>App!</h1>
      <BrowserRouter>
        <Nav links={DOG_NAMES} />
        <RoutesList dogs={DOGS} />
      </BrowserRouter>
    </div>
  );
}

export default App;
