import { useParams } from "react-router-dom";
import { getDog } from "./helper.js";

/**
 * Props:
 * dog {  id: NUMBER,
 *      name: STRING,
 *      age: NUMBER,
 *      facts: [STRING,...],
 *      src: STRING
 * }
 *
 */

function DogDetails({ dog }) {
  // but if dog is undefined

  // then use the params
  const { name } = useParams();
  // fetch out dog details from db
  // could be broken out to a different fn

  async function getDoggyInfo() {
    const doggyInfo = dog ? dog : await getDog(name);
    return doggyInfo;
  }

  return (
    <div className="DogDetails">
      <h1>{doggyInfo.name}</h1>
      <p>Age:{doggyInfo.age}</p>
      <ul>
        {doggyInfo.facts.map((fact) => (
          <li key={doggyInfo.id}>{fact}</li>
        ))}
      </ul>
      <img src={`${doggyInfo.src}.jpg`} />
    </div>
  );
}

export default DogDetails;
