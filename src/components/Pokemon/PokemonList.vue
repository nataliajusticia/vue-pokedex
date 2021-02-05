<template>
  <div
    class="grid grid-cols-1 gap-16 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
  >
    <Pokemon
      v-for="(pokemon, index) in pokedex"
      :key="`pokemon-${index}`"
      :index="index + 1"
      :pokedex="pokedex"
    />
  </div>
</template>

<script>
import Pokemon from "@/components/Pokemon/Pokemon";

export default {
  name: "PokemonList",
  components: {
    Pokemon
  },
  props: {
    pokedex: Array
  }
};
</script>
