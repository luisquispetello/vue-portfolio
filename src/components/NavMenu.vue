<template>
  <div>
    <router-link to="/">
      <img src="../assets/images/back.svg" alt="arrow back"/>
      Home
    </router-link>
  </div>
</template>

<script setup></script>

<style scoped>
a {
  font-size: 3.4rem;
  color: inherit;
  text-decoration: none;
}
div {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
}
</style>
