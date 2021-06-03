import axios from "axios";

export async function getPokemons() {
  try {
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    return result;
  } catch (error) {
    return error;
  }
}
