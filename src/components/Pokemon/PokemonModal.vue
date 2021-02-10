<template>
  <transition name="modal">
    <div
      class="fixed top-0 bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-center p-8 bg-white bg-opacity-95 dark:bg-opacity-95 dark:bg-black dark:text-white"
    >
      <button
        class="absolute top-8 right-8 focus:outline-black dark:focus:outline-white"
        @click="closeModal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <img :src="pokemonImgUrl" :alt="pokemon.name" width="200" height="200" />

      <h1 class="py-4 text-5xl text-center font-poppins">
        {{ pokemon.name }}
      </h1>

      <div>
        <span
          v-for="(value, index) in pokemon.types"
          :key="`${value}-${index}`"
          :class="
            `inline-flex px-2 py-1 mx-1 text-xs font-bold text-center text-white bg-black rounded-xl ${value.type.name}`
          "
        >
          {{ value.type.name }}
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PokemonModal",
  props: {
    pokemon: Object
  },
  data() {
    return {
      pokemonImgUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon.id}.png`
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
</script>
