import { dogBreeds } from "../services/constants";
import { useState } from "react";

const Cat = () => {
  const [dogBreed, setDogBreed] = useState("");
  const [dogBreedImage, setDogBreedImage] = useState();

  async function handleSearch() {
    const response = await dogBreeds(dogBreed);
    setDogBreedImage(response.data[0].url);
    console.log(response.data[0].url);
  }

  return (
    <div>
      <br />
      <input
        type="text"
        placeholder="Input A Dog Breed"
        value={dogBreed}
        onChange={(event) => setDogBreed(event.target.value)}
      />
      <button onClick={handleSearch}>Click To Search</button>
      <br />
      <br />
      <br />
      <img src={dogBreedImage} alt="Dog Image" width="300px" height="300px" />
    </div>
  );
};

export default Cat;
