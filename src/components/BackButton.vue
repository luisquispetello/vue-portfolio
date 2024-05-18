<template>
  <div>
    <router-link to="/" class="button-back">
      <img src="../assets/images/back.svg" alt="" />
      Home
    </router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.button-back {
  font-size: .375rem;
  font-size: clamp(2rem, 2vw + 1rem, 2.5rem);
  text-decoration: none;

  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
  transition: gap 200ms;
  text-transform: uppercase;
}
.button-back:hover,
.button-back:active {
  gap: 0.4rem
}
div {
  display: flex;
  align-content: flex-start;
  width: min(100%, 160rem);
}
</style>
