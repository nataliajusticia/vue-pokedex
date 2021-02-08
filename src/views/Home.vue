<template>
  <section>
    <div class="flex justify-center my-8">
      <div
        class="rounded-lg bg-pattern-10 bg-dots-pattern dark:bg-dots-pattern-light"
      >
        <h1
          class="p-4 text-5xl text-center transform translate-x-4 -translate-y-4 bg-white rounded-lg shadow-lg font-poppins dark:bg-black-light dark:text-white"
        >
          Pokémon Pokédex
        </h1>
      </div>
    </div>

    <Spinner v-if="isLoading" />

    <PokemonList :pokedex="pokedex" v-if="pokedex" />
  </section>
</template>

<script>
import { fetchKantoPokemon } from "@/services/api.js";
import PokemonList from "@/components/Pokemon/PokemonList";
import Spinner from "@/components/Spinner";

export default {
  name: "Home",
  components: {
    PokemonList,
    Spinner
  },
  data() {
    return {
      pokedex: null,
      isLoading: true
    };
  },
  mounted() {
    this.loadKantoPokemon();
  },
  methods: {
    loadKantoPokemon() {
      fetchKantoPokemon()
        .then(res => {
          this.pokedex = res.results;
          this.isLoading = false;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
