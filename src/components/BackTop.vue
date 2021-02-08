<template>
  <a
    @click="scrollTop"
    v-show="visible"
    class="fixed p-4 text-white transition duration-500 ease-in-out bg-black rounded-full shadow-lg cursor-pointer right-8 bottom-8 dark:bg-black-light"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-arrow-up"
    >
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  </a>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    scrollTop: function() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 20);
    },
    scrollListener: function() {
      this.visible = window.scrollY > 150;
    }
  },
  mounted: function() {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy: function() {
    window.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
