<template>
  <div>
    <article
      @click="showModal = true"
      v-if="pokemon"
      class="flex flex-col items-center p-8 transition duration-500 ease-in-out bg-white border-transparent rounded-lg shadow-lg cursor-pointer border-5 hover:border-black hover:border-5 hover:shadow-black"
    >
      <img :src="pokemonImgUrl" :alt="pokemon.name" width="96px" height="96" />
      <span class="px-3 text-xs font-bold text-white bg-black rounded-xl">
        #{{ pokemon.id }}
      </span>
      <h2 class="my-3 text-xl font-poppins">{{ pokemon.name }}</h2>
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
    </article>

    <PokemonModal
      v-if="showModal"
      @closeModal="showModal = false"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import { fetchPokemonData } from "@/services/api.js";
import PokemonModal from "@/components/Pokemon/PokemonModal";

export default {
  name: "Pokemon",
  components: {
    PokemonModal
  },
  props: {
    index: Number
  },
  data() {
    return {
      pokemon: null,
      pokemonImgUrl: "",
      showModal: false
    };
  },
  mounted() {
    this.loadPokemonData(this.index);
  },
  methods: {
    loadPokemonData(id) {
      fetchPokemonData(id)
        .then(res => {
          this.pokemon = res;
          this.pokemonImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res.id}.png`;
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
