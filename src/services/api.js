// Pokemon API
// https://pokeapi.co/docs/v2

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemonData = id => {
  return fetch(`${API_URL}/${id}`, { method: "GET" })
    .then(res => res.json())
    .then(res => res);
};

export const fetchKantoPokemon = () => {
  return fetch(`${API_URL}?limit=151`, { method: "GET" })
    .then(res => res.json())
    .then(res => res);
};
