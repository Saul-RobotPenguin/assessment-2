import { catBreeds } from "../services/constants";
import { useState } from "react";

const Cat = () => {
  const [catBreed, setCatBreed] = useState("");
  const [catBreedImage, setCatBreedImage] = useState();

  async function handleSearch() {
    const response = await catBreeds(catBreed);
    setCatBreedImage(response.data[0].url);
    console.log(response.data[0].url);
  }

  return (
    <div>
      <br />
      <input
        type="text"
        placeholder="Input A Cat Breed"
        value={catBreed}
        onChange={(event) => setCatBreed(event.target.value)}
      />
      <button onClick={handleSearch}>Click To Search</button>
      <br />
      <br />
      <br />
      <img src={catBreedImage} alt="Cat Image" width="300px" height="300px" />
    </div>
  );
};

export default Cat;
