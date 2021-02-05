<template>
  <div
    id="app"
    class="flex flex-col min-h-screen bg-gray-200 pattern-vertical-lines"
  >
    <main class="container p-8 pb-40 mx-auto">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  components: {
    Footer
  }
};
</script>
