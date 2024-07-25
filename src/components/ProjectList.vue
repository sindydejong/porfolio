<!-- 
<template>
    <div>
      <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
    </div>
  </template>
  
  <script setup lang="ts">
  import ProjectCard from './ProjectCardItem.vue';
  import { projects, Project } from '../data/projects';
  
  
  // Props
  defineProps({
    projects: {
      type: Array as () => Project[],
      required: true
    }
  });
  </script>
   -->