import axios from "axios";

export async function catBreeds(breed) {
  const catResponse = await axios.get(
    `https://api.thecatapi.com/v1/images/search?${breed}`,
    {
      headers: {
        "x-api-key": process.env.REACT_APP_CAT_API_KEY,
      },
    }
  );

  return catResponse;
}

export async function dogBreeds(breed) {
  const dogResponse = await axios.get(
    `https://api.TheDogAPI.com/v1/images/search?${breed}`,
    {
      headers: {
        "x-api-key": process.env.REACT_APP_DOG_API_KEY,
      },
    }
  );

  return dogResponse;
}
