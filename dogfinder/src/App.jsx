import "./App.css";
import RoutesList from "./RoutesList";
import Nav from "./Nav.jsx";
import { BrowserRouter } from "react-router-dom";
import { getDogs, getDogNames } from "./helper.js";

const DOGS = await getDogs();
const DOG_NAMES = getDogNames(DOGS);

/**
 * App for Dog Finder
 */
function App() {
  return (
    <div className="App">
      <h1>Dog Finder</h1>
      <BrowserRouter>
        <Nav links={DOG_NAMES} />
        <RoutesList dogs={DOGS} />
      </BrowserRouter>
    </div>
  );
}

export default App;
