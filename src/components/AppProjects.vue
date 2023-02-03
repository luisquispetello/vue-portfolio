<template>
  <ProjectSingle v-for='project in projects' :key="project.id" :project='project'/>
  <OtherProject />
</template>

<script setup>
import projects from "../data/projects.js";
import OtherProject from "./projects/OtherProject.vue";
import ProjectSingle from "./projects/ProjectSingle.vue";
</script>

<style scoped>
</style>
