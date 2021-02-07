<template>
  <section>
    <div class="flex justify-center my-8">
      <div class="rounded-lg bg-pattern-10 bg-dots-pattern">
        <h1
          class="p-4 text-5xl text-center transform translate-x-4 -translate-y-4 bg-white rounded-lg shadow-lg font-poppins"
        >
          Error 404
        </h1>
      </div>
    </div>

    <div
      class="flex flex-col items-center p-8 text-center bg-white border-transparent rounded-lg shadow-lg"
    >
      <img
        src="@/assets/images/pikachu-detective.png"
        width="200"
        height="200"
        alt="Detective Pikachu"
      />
      <p class="my-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <router-link
        to="/"
        class="w-40 p-4 text-white bg-black rounded-lg font-poppins focus:outline-black"
        >Home</router-link
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFound"
};
</script>
