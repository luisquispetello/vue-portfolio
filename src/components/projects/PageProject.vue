<template>
  <div class="container__projects">
    <BackButton />
    <div class="container__content">
      <h2>{{ project.title }}</h2>
      <header class="container__content__header">
        <section class="container__content__header-column">
          <p>My role</p>
          <div>
            <p>{{ project.rol1 }}</p>
            <p>{{ project.rol2 }}</p>
            <p>{{ project.rol3 }}</p>
          </div>
        </section>
        <section class="container__content__header-column">
          <p>Results</p>
          <div>
            <p>{{ project.result1 }}</p>
            <p>{{ project.result2 }}</p>
            <p>{{ project.result3 }}</p>
          </div>
        </section>
      </header>
      <div class="main-mockup">
        <img :src="project.img2" :alt="project.title" />
      </div>
      <slot></slot>
    </div>
    <BackButton />
  </div>
</template>

<script setup>
import BackButton from "../BackButton.vue";

const props = defineProps(["project"]);
</script>

<style scoped>
.container__projects {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}
.container__content {
  width: min(100%, 110rem);
  margin-bottom: 5rem;
}
.container__content__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5rem 0 8rem;
  gap: 3rem;
}
.container__content__header-column {
  line-height: 1.1;
}
.main-mockup {
  height: auto;
  margin-bottom: 10rem;
}
.main-mockup img {
  object-fit: contain;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .container__content__header-column {
    width: 50%;
  }
  .container__content__header {
    margin: 3rem 0 5rem;
  }
}
</style>
