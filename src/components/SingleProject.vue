<template>
  <div class="container">
    <NavMenu />
    <div class="container__content">
      <h2>{{ project.title }}</h2>
      <div class="container__content__header">
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
      </div>
      <slot></slot>
    </div>
    <NavMenu />
  </div>
</template>

<script setup>
import NavMenu from "../components/NavMenu.vue";

const props = defineProps(["project"]);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}
.container__content {
  max-width: 70%;
  margin-bottom: 5rem;
}
.container__content__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5rem 0 8rem;
}
.container__content__header-column {
  line-height: 1.1;
}
</style>
