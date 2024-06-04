const DB_URL = "http://localhost:5001";

/**
 * Takes in a list of dog objects and a name
 *
 * Return a dog object
 */
function getDog(dogs, name) {
  const dog = dogs.filter(
    (dogData) => dogData.name.toLowerCase() === name.toLowerCase()
  );

  return dog[0] || null;
}

/**
 * Return a list of dogs from DB
 */
async function getDogs() {
  const responses = await fetch(`${DB_URL}/dogs`);
  const dogsData = await responses.json();

  return dogsData;
}

/** Takes an array of dog objects
 * returns [name, name,...]
 */
function getDogNames(dogs) {
  return dogs.map(dog => dog.name);
}

export {
  getDog,
  getDogs,
  getDogNames,
};