
<template>
    <div>
      <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
    </div>
  </template>
  
  <script setup lang="ts">
  import ProjectCard from './ProjectCard.vue';
  import { projects, Project } from '/src/data/projects.ts';
  
  
  // Props
  const props = defineProps({
    projects: {
      type: Array as () => Project[],
      required: true
    }
  });
  </script>
  