<template>
  <section>
    <div class="flex justify-center my-8">
      <h1
        class="p-4 text-5xl text-center bg-white rounded-lg shadow-lg font-poppins"
      >
        Pokémon Pokédex
      </h1>
    </div>

    <div class="flex justify-center">
      <input
        type="text"
        name="search"
        v-model="search"
        placeholder="Search pokemon ..."
        class="w-full p-4 border-transparent rounded-lg shadow-sm md:w-7/12 focus:outline-none focus:ring-4 focus:ring-black focus:border-transparent"
      />
    </div>

    <PokemonList :pokedex="pokedex" v-if="pokedex" />
  </section>
</template>

<script>
import { fetchKantoPokemon } from "@/services/api.js";
import PokemonList from "@/components/Pokemon/PokemonList";

export default {
  name: "Home",
  components: {
    PokemonList
  },
  data() {
    return {
      pokedex: null,
      pokedexFilter: null,
      search: ""
    };
  },
  mounted() {
    this.loadKantoPokemon();
  },
  computed: {
    filteredPokemon() {
      return this.pokedex.filter(pokemon => {
        return pokemon.name.match(this.search);
      });
    }
  },
  methods: {
    async loadKantoPokemon() {
      const res = await fetchKantoPokemon();
      this.pokedex = res.results;
    }
  }
};
</script>
