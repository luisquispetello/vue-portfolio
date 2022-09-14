<template>
  <div>
    <router-link to="/" class="button-back">
      <img src="../assets/images/back.svg" alt="arrow back" />
      Home
    </router-link>
  </div>
</template>

<script setup></script>

<style scoped>
.button-back {
  font-size: 3.375rem;
  font-size: clamp(2.4rem, 2vw + 1rem, 3.375rem);
  text-decoration: none;

  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
  transition: gap 200ms;
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
