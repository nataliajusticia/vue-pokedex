<template>
  <div
    id="app"
    class="flex flex-col min-h-screen bg-gray-100 bg-line-pattern bg-pattern-50 dark:bg-black dark:bg-line-pattern-light"
  >
    <main class="container p-8 pb-40 mx-auto">
      <DarkModeSwitch />

      <router-view />
    </main>

    <BackTop />

    <Footer />
  </div>
</template>

<script>
import BackTop from "@/components/BackTop";
import Footer from "@/components/Footer";
import DarkModeSwitch from "./components/DarkModeSwitch.vue";

export default {
  components: {
    BackTop,
    Footer,
    DarkModeSwitch
  }
};
</script>
