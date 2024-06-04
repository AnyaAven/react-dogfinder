import "./App.css";
import RoutesList from "./RoutesList";
import Nav from "./Nav.jsx";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { getDogs, getDogNames } from "./helper.js";

/**
 * App for Dog Finder
 */
function App() {
  const [dogs, setDogs] = useState(null);

  const dogNames = dogs ? getDogNames(dogs) : [];

  async function getDogData() {
    const dogData = await getDogs();
    setDogs(dogData);
  }

  if (dogs === null) {
    getDogData();
    return <div className="App">loading</div>;
  }

  return (
    <div className="App">
      <h1>Dog Finder</h1>
      <BrowserRouter>
        <Nav links={dogNames} />
        <RoutesList dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
