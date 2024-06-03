import { useParams } from "react-router-dom";
import { getDog } from "./helper.js";

/**
 * Props:
 * dogs [{  id: NUMBER,
 *      name: STRING,
 *      age: NUMBER,
 *      facts: [STRING,...],
 *      src: STRING
 * },...
 * ]
 *
 */

function DogDetails({ dog, dogs }) {
  let dogForDisplay = dog;

  if (dog === undefined) {
    const { name } = useParams();
    dogForDisplay = getDog(dogs, name);
    console.log("DOG DETAILS IF", dogs, name);
    if (dog === null) {
      console.log("doggo not found");
      return <p>DOGGO NOT FOUND</p>;
    }
  }

  return (
    <div className="DogDetails">
      <h1>{dogForDisplay.name}</h1>
      <p>Age:{dogForDisplay.age}</p>
      <ul>
        {dogForDisplay.facts.map((fact) => (
          <li key={dogForDisplay.id + dogForDisplay.id}>{fact}</li>
        ))}
      </ul>
      <img src={`${dogForDisplay.src}.jpg`} />
    </div>
  );
}

export default DogDetails;
