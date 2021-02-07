<template>
  <div
    id="app"
    class="flex flex-col min-h-screen bg-gray-100 bg-line-pattern bg-pattern-50"
  >
    <main class="container p-8 pb-40 mx-auto">
      <router-view />
    </main>

    <BackTop />

    <Footer />
  </div>
</template>

<script>
import BackTop from "@/components/BackTop";
import Footer from "@/components/Footer";

export default {
  components: {
    BackTop,
    Footer
  }
};
</script>
