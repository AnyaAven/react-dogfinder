const DB_URL = "http://localhost:5001";

/**
 * get a dog by name
 */
function getDog(dogs, name) {
  const dog = dogs.filter(
    (dogData) => dogData.name.toLowerCase() === name.toLowerCase()
  );

  return dog[0] || null;
}

/**
 * Get list of dogs from DB
 */
async function getDogs() {
  const responses = await fetch(`${DB_URL}/dogs`);
  const dogsData = await responses.json();

  return dogsData;
}

/** get the names of each dog
 * returns [name, name,...]
 */
function getDogNames(dogs){
  return dogs.map(dog => dog.name);
}

export {
  getDog,
  getDogs,
  getDogNames,
};