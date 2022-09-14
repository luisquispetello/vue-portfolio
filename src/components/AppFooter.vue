<template>
  <footer :class="{ 'center-text': $route.path !== '/' }">
    <p>luisquispetello@gmail.com</p>
    <a href="https://www.linkedin.com/in/luisquispetello" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  </footer>
</template>

<script setup></script>

<style scoped>
.center-text {
  text-align: center;
}
p {
  font-size: 5.063rem;
  font-size: clamp(2rem, 3vw + 1rem, 5.063rem);
  margin: 0;
}
a {
  font-size: 3.375rem;
}
</style>
