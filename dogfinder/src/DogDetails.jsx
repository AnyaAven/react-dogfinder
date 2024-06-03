import { useParams } from "react-router-dom";

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
  if (dog === undefined){

  }
  // then use the params
  const { name } = useParams();
  // fetch out dog details from db
  // could be broken out to a different fn

  return (
    <div className="DogDetails">
      <h1>{dog.name}</h1>
      <p>Age:{dog.age}</p>
      <ul>
        {dog.facts.map((fact) => (
          <li key={dog.id}>{fact}</li>
        ))}
      </ul>
      <img src={`${dog.src}.jpg`} />
    </div>
  );
}

export default DogDetails;
