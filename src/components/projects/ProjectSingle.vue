<template>
  <section class="project__container" :class="{ 'row-reverse': project.id !== 2 }">
    <div class="project__content">
      <h2>{{ project.title }}</h2>
      <div class="project__content-text">
        <p>{{ project.body }}</p>
      </div>
      <router-link
        :to="project.link"
        class="button"
        :class="{ 'display-none': project.id === 3 }"
        v-motion-slide-visible-once-bottom
        >Explore details</router-link
      >
    </div>
    <div class="project__content-mockup">
      <img :src="project.img" :alt="project.title" />
    </div>
  </section>
</template>

<script setup>
const props = defineProps(["project"]);
</script>

<style scoped>
h2 {
  margin: 0;
}
.project__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
  position: relative;
}
.project__content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 40%;
}
.project__content-text p {
  margin: 0;
  font-size: clamp(1rem, 1vw + 1rem, 2rem);
}
.project__content-mockup {
  position: relative;
  max-width: 50%;
}
.row-reverse {
  flex-direction: row-reverse;
}
.display-none {
  display: none;
}

@media only screen and (max-width: 768px) {
  .project__container {
    flex-direction: column-reverse;
    gap: 5rem;

    height: 100%;
  }
  .project__content {
    max-width: 100%;
  }
  .project__content-text p {
    margin: 0;
  }
  .project__content-mockup {
    display: flex;
    justify-items: center;
    max-width: 100%;
  }
}
</style>
