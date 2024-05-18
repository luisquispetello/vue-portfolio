<template>
  <section>
    <h2>Redesigns</h2>
    <div class="gallery">
      <div class="project-one">
        <img
          src="../../assets/images/others/familysearch-dashboard-redesign-open.webp"
          alt="family search web"
        />
      </div>
      <div class="project-two">
        <img
          src="../../assets/images/others/familysearch-dashboard-redesign-close.webp"
          alt="family search web"
        />
      </div>
      <div class="project-three">
        <img
          src="../../assets/images/others/home-mockup-pathway.webp"
          alt="pathway worldwide web"
        />
      </div>
    </div>
  </section>
</template>

<script></script>

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
    "project-two project-three project-three";
  margin-top: 1.5em;
}

.gallery img {
  object-fit: contain;
  height: 100%;
  border-radius: 0.2em;
}

@media only screen and (max-width: 768px) {
  .gallery {
    gap: 2em;
    grid-template-areas: "project-three" "project-one" "project-two";
  }
}
</style>
