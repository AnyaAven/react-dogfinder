async function getDog(name) {
  const responses = await fetch("http://localhost:5001/dogs");
  const dogsData = await responses.json();

  console.log("DATA", dogsData);
  const dog = dogsData.filter(
    (dogData) => dogData.name.toLowerCase() === name.toLowerCase()
  );

  return dog;
}

export { getDog };