import DogDetails from "./DogDetails.jsx";
import DogList from "./DogList.jsx";
import { Route, Routes } from "react-router-dom";

/**
 *
 */
function RoutesList({ dogs }) {

  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs}/>} />
      <Route path="*" element={<h1>Not found! 404</h1>} />
    </Routes>
  );
  //TODO: chek DogDetails path
}

export default RoutesList;
