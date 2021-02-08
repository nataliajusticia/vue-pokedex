<template>
  <div class="flex justify-center">
    <button
      @click="toggleTheme"
      aria-label="Toggle theme"
      class="px-2 py-1 bg-white shadow-xl rounded-xl focus:outline-black dark:focus:outline-white"
    >
      <span v-if="this.theme == 'dark'">🌞 Light</span>
      <span v-else>🌚 Dark</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ThemeSwitch",
  data() {
    return {
      theme: localStorage.getItem("theme")
    };
  },
  methods: {
    toggleTheme() {
      if (this.theme == "dark") {
        this.theme = "light";
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        this.theme = "dark";
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      }
    }
  }
};
</script>
