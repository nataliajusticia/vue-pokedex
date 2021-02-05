<template>
  <section>
    <div class="flex justify-center my-8">
      <div class="rounded-lg bg-pattern-10 bg-dots-pattern">
        <h1
          class="p-4 text-5xl text-center transform translate-x-4 -translate-y-4 bg-white rounded-lg shadow-lg font-poppins"
        >
          Pokémon Pokédex
        </h1>
      </div>
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
      pokedex: null
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
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
