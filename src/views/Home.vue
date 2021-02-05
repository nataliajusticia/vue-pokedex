<template>
  <section>
    <div class="flex justify-center m-8">
      <h1
        class="p-4 text-5xl text-center bg-white rounded-lg shadow-lg font-poppins"
      >
        Pokémon Pokédex
      </h1>
    </div>

    <input
      type="text"
      name="search"
      v-model="search"
      placeholder="Search pokemon ..."
    />

    <div
      class="grid grid-cols-1 gap-16 pt-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
      v-if="pokedex.length"
    >
      <PokemonCard
        v-for="(pokemon, index) in filteredPokemon"
        :key="index + 1"
        :index="index + 1"
      />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import PokemonCard from "@/components/PokemonCard";
import { fetchKantoPokemon } from "@/services/api.js";

export default {
  name: "Home",
  components: {
    PokemonCard
  },
  data() {
    return {
      pokedex: [],
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
