<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
   <div id="app">
    <video autoplay muted loop id="bg-video">
      <source src="https://pin.it/12AaVrQ2v" type="video/mp4" />
    </video>
  </div>
  <main class="pt-20">
    <Navbar />
    <router-view />
  </main>
</template>