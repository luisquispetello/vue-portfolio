<template>
  <section>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <AppFooter />
  </section>
</template>

<script setup>
import AppFooter from "./components/AppFooter.vue";
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 10rem;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}
</style>
