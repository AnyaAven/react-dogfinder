/**
 * Props:
 * - {  id: NUMBER,
 *      name: STRING,
 *      age: NUMBER,
 *      facts: [STRING,...],
 *      imageUrl: STRING  }
 */

function DogDetails({ id, name, age, facts, imageUrl }) {
  return (
    <div className="DogDetails">
      <h1>{name}</h1>
      <p>Age:{age}</p>
      <ul>
        {facts.map((fact) => (
          <li key={id}>{fact}</li>
        ))}
      </ul>
      <img src={imageUrl} />
    </div>
  );
}

export default DogDetails;
