import DogDetails from "./DogDetails.jsx";
import DogList from "./DogList.jsx";
import { Route, Routes } from "react-router-dom";

/**
 * Props:
 * - dogs: { id: NUMBER,
 *          name: STRING,
 *          age: STRING,
 *          src: STRING,
 *          imageUrl: STRING }
 *
 * State: none
 *
 * App > RoutesList > Routes
 */
function RoutesList({ dogs }) {
  console.log("routes list", dogs);

  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
      <Route path="*" element={<h1>Not found! 404</h1>} />
    </Routes>
  );
}

export default RoutesList;
