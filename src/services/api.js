// Pokemon API
// https://pokeapi.co/docs/v2

const API_URL = "https://pokeapi.co/api/v2/pokemon";
// const numberOfPokemon = 150;

export const fetchPokemonData = async id => {
  const res = await fetch(`${API_URL}/${id}`);
  const data = await res.json();
  return data;
};

export const fetchKantoPokemon = async () => {
  const res = await fetch(`${API_URL}?limit=151`);
  const data = await res.json();
  return data;
};
