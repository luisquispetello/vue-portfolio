<template>
  <div class="project__container">
    <section class="project__content">
      <h2>Sartorial Class - Online Tailoring Courses</h2>
      <div class="project__content-text">
        <p>
          Online academy based on teaching all the secrets of bespoke tailoring.
          Project built from the idea to full design research and deployment.
        </p>
      </div>
      <router-link to="/sartorial-class" class="button">View Project</router-link>
    </section>
    <div class="project__content-mockup">
      <img
        src="../assets/images/sartorial-class/main-mockup-sartorial.png"
        alt=""
      />
    </div>
  </div>

  <div class="project__container">
    <div class="project__content-mockup">
      <img src="../assets/images/confejas/main-mockup-confejas.png" alt="" />
    </div>
    <section class="project__content">
      <h2>Confejas - Youth Single Adult Spain Conference</h2>
      <div class="project__content-text">
        <p>
          Conference for YSA from The Church of Jesus Christ of Latter Days
          Saints and friends. The goal, to get young people sign up early and
          not at the last minute.
        </p>
      </div>
      <router-link to="/confejas" class="button">View Project</router-link>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
h2 {
  margin: 0;
}
.project__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 10rem;

  width: 100%;
  height: 70rem;
}

.project__content {
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.project__content p {
  margin: 0;
}
.project__content-mockup {
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
