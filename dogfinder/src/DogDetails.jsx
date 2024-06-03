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

function DogDetails({ dogs }) {
  const { name } = useParams();
  console.log({dogs})
  const dog = getDog(dogs, name);

  return (
    <div className="DogDetails">
      <h1>{dog.name}</h1>
      <p>Age:{dog.age}</p>
      <ul>
        {dog.facts.map((fact) => (
          <li key={dog.id + dog.id}>{fact}</li>
        ))}
      </ul>
      <img src={`${dog.src}.jpg`} />
    </div>
  );
}

export default DogDetails;
