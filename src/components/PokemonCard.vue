<template>
  <router-link :to="{ name: 'Pokemon', params: { id: index } }">
    <div
      class="flex flex-col items-center p-8 transition duration-500 ease-in-out bg-white border-transparent rounded-lg shadow-lg border-5 hover:border-black hover:bg-red-700 hover:border-5 hover:shadow-black"
    >
      <img
        :src="pokemonImgUrl"
        :alt="pokemonData.name"
        width="96px"
        height="96"
      />
      <span class="px-3 text-xs font-bold text-white bg-black rounded-xl">
        #{{ pokemonData.id }}
      </span>
      <h3 class="my-3 text-xl font-poppins">{{ pokemonData.name }}</h3>
      <div>
        <span
          v-for="(typesOfPokemon, index) in pokemonData.types"
          :key="`type${index}`"
          class="px-3 py-1 mx-1 text-xs font-bold text-center text-white bg-grey rounded-xl"
        >
          {{ typesOfPokemon.type.name }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
import { fetchPokemonData } from "@/services/api.js";

export default {
  name: "PokemonCard",
  props: {
    index: Number
  },
  data() {
    return {
      pokemonData: [],
      pokemonImgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.index}.png`
    };
  },
  mounted() {
    this.loadPokemonData(this.index);
  },
  methods: {
    async loadPokemonData(id) {
      const res = await fetchPokemonData(id);
      this.pokemonData = res;
    }
  }
};
</script>
