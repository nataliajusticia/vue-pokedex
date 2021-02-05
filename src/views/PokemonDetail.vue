<template>
  <section>
    <div class="flex justify-center m-8">
      <h1
        class="p-4 text-5xl text-center bg-white rounded-lg shadow-lg font-poppins"
      >
        {{ pokemonData.name }}
      </h1>
    </div>

    <div class="flex justify-center m-8 font-bold">
      <router-link :to="{ name: 'Home' }"> Go back</router-link>
    </div>

    <div
      class="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg"
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

      <div class="my-4">
        <p>Weight: {{ pokemonData.weight }}</p>
        <p>Height: {{ pokemonData.height }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { fetchPokemonData } from "@/services/api.js";

export default {
  name: "PokemonDetail",
  data() {
    return {
      pokemonData: [],
      pokemonImgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.$route.params.id}.png`,
      pokemonId: this.$route.params.id || ""
    };
  },
  created() {
    this.loadPokemonData(this.$route.params.id);
  },
  methods: {
    async loadPokemonData(id) {
      const res = await fetchPokemonData(id);
      this.pokemonData = res;
    }
  }
};
</script>
