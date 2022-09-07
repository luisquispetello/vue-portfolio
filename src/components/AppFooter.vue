<template>
  <div :class="{ 'center-text': $route.path !== '/' }">
    <p>hola@luis.run</p>
    <a href="https://www.linkedin.com/in/luisquispetello">LinkedIn</a>
  </div>
</template>

<script setup></script>

<style scoped>
.center-text {
  text-align: center;
}
p {
  font-size: 6.8rem;
  margin-bottom: 2rem;
}
a {
  font-size: 3.4rem;
}
</style>
