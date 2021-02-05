<template>
  <router-link :to="{ name: 'Pokemon', params: { id: index } }">
    <article
      v-if="pokemon"
      class="flex flex-col items-center p-8 transition duration-500 ease-in-out bg-white border-transparent rounded-lg shadow-lg border-5 hover:border-black hover:border-5 hover:shadow-black"
    >
      <img :src="pokemonImgUrl" :alt="pokemon.name" width="96px" height="96" />
      <span class="px-3 text-xs font-bold text-white bg-black rounded-xl">
        #{{ pokemon.id }}
      </span>
      <h3 class="my-3 text-xl font-poppins">{{ pokemon.name }}</h3>
      <div>
        <span
          v-for="(value, index) in pokemon.types"
          :key="`${value}-${index}`"
          :class="
            `inline-flex px-3 py-1 mx-1 text-xs font-bold text-center text-white bg-black rounded-xl ${value.type.name}`
          "
        >
          {{ value.type.name }}
        </span>
      </div>
    </article>
  </router-link>
</template>

<script>
import { fetchPokemonData } from "@/services/api.js";

export default {
  name: "Pokemon",
  props: {
    pokedex: Array,
    index: Number
  },
  data() {
    return {
      pokemon: null,
      pokemonImgUrl: ""
    };
  },
  watch: {},
  mounted() {
    this.loadPokemonData(this.index);
  },
  methods: {
    async loadPokemonData(id) {
      const res = await fetchPokemonData(id);
      this.pokemon = res;
      this.pokemonImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res.id}.png`;
    }
  }
};
</script>
