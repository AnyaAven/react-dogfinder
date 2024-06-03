import DogDetails from "./DogDetails.jsx";

/**
 * Shows details of all the dogs on DogFinder
 *
 * Stateless
 * props:
 * dogs - [{  id: NUMBER,
 *      name: STRING,
 *      age: NUMBER,
 *      facts: [STRING,...],
 *      src: STRING
 * },...]
 */
function DogList({ dogs }) {

  return (
  <div className="DogList">
    {dogs.map(
      dog =>
        (
          <DogDetails key={dog.id} dog={dog}/>
        )
    )}
  </div>)
}

export default DogList;
