import { useParams, Link } from "react-router-dom";
import { getDog } from "./helper.js";
import "./DogDetails.css";

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
    if (dogForDisplay === null) {
      console.log("doggo not found");
      return <p>DOGGO NOT FOUND</p>;
    }
  }

  return (
    <div className="DogDetails">
      <Link to={`/dogs/${dogForDisplay.name}`}>
        <img src={`/${dogForDisplay.src}.jpg`} />
        <h1>{dogForDisplay.name}</h1>
      </Link>

      <p>Age:{dogForDisplay.age}</p>
      <ul>
        {dogForDisplay.facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
