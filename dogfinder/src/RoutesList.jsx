import DogDetails from "./DogDetails.jsx";
import DogList from "./DogList.jsx";

function RoutesList({ dogs }) {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogDetails />} />
    </Routes>
  );
  //TODO: chek DogDetails path
}

export default RoutesList;
