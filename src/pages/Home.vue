<template>
  <div class="container">
    <AppHero />
    <AppProjects />
    <AboutMe />
  </div>
</template>

<script setup>
import AppProjects from "../components/AppProjects.vue";
import AboutMe from "../components/AboutMe.vue";
import AppHero from "../components/AppHero.vue";
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20vh;
}
</style>
