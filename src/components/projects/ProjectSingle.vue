<template>
  <div class="project__container">
    <section class="project__content">
      <h2>{{ project.title }}</h2>
      <div class="project__content-text">
        <p>{{ project.body }}</p>
      </div>
      <router-link :to="project.link"
        ><button>View Project</button></router-link
      >
    </section>
    <div class="project__content-mockup">
      <img :src="project.img" :alt="project.title" />
    </div>
  </div>
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
  gap: 6.4rem;

  width: 100%;
  height: 55rem;
}

.project__content {
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.project__content-mockup {
  height: 100%;
  width: 60%;
}
img {
  height: 100%;
  object-fit: fill;
}
</style>
