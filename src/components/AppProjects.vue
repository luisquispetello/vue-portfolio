<template>
  <section class="project__container">
    <div class="project__content">
      <h2>Sartorial Class - Online Tailoring Courses</h2>
      <div class="project__content-text">
        <p>
          Online academy based on teaching bespoke tailoring. Project built from
          the idea to full design research and deployment.
        </p>
      </div>
      <router-link
        to="/sartorial-class"
        class="button"
        v-motion-slide-visible-once-bottom
        >See more</router-link
      >
    </div>
    <div class="project__content-mockup">
      <img
        src="../assets/images/sartorial-class/home-mockup.png"
        alt="mockup sartorial class"
      />
    </div>
  </section>

  <section class="project__container row-reverse">
    <div class="project__content">
      <h2>Confejas - Young Single Adult Spain Conference</h2>
      <div class="project__content-text">
        <p>
          Conference for young single adults. The goal, to get the users sign up
          early and not at the last minute.
        </p>
      </div>
      <router-link
        to="/confejas"
        class="button"
        v-motion-slide-visible-once-bottom
        >See more</router-link
      >
    </div>
    <div class="project__content-mockup">
      <img
        src="../assets/images/confejas/home-mockup.png"
        alt="mockup confejas"
      />
    </div>
  </section>
</template>

<script setup>
  import projects from "../data/projects.js"
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
}
.project__content-mockup {
  position: relative;
  max-width: 50%;
}
.row-reverse {
  flex-direction: row-reverse;
}
img {
  width: 100%;
  object-fit: contain;
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
