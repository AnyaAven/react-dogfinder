import './App.css';
//import {v4 as uuid } from "uuid";

import DogDetails from './DogDetails.jsx';

const demoDog = {
  "name": "Whiskey",
  "age": 5,
  "src": "whiskey",
  "facts": [
    "Whiskey loves eating popcorn.",
    "Whiskey is a terrible guard dog.",
    "Whiskey wants to cuddle with you!"
  ],
  "id": crypto.randomUUID()
}

function App() {
  return (
    <div className="App">
      <h1>App!</h1>
      <DogDetails
       dog={demoDog}
      >
      </DogDetails>
    </div>
  );
}

export default App;
