<template>
  <section>
    <h2>Redesigns</h2>
    <div class="gallery">
      <div class="project-one">
        <img src="../../assets/images/others/home-mockup-byu2.png" alt="">
      </div>
      <div class="project-two">
        <img src="../../assets/images/others/home-mockup-byu.png" alt="">
      </div>
      <div class="project-three">
        <img src="../../assets/images/others/home-mockup-familysearch.gif" alt="">
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style>
.project-one {
  grid-area: project-one;
}
.project-two {
  grid-area: project-two;
}
.project-three {
  grid-area: project-three;
}
.gallery {
  display: grid;
  gap: 1em;
  grid-auto-columns: 1fr;
  grid-template-areas: 
    "project-one project-three project-three"
    "project-two project-three project-three"
  ;
  margin-top: 1.5em;
}

.gallery img {
  object-fit: cover;
  height: 100%;
  border-radius: 1em;
}

</style>