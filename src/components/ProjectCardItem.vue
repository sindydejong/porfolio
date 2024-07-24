<!-- ProjectCard.vue -->

<template>
 <RouterLink :to="{ name: 'ProjectDetail', params: { name: project.name } }">
      <article class="project_card">
        <img :src="project.image" alt="Project Image">
        <ul>
          <li>
            <p>{{ project.title }}</p>
          </li>
          <li>
            <p>{{ project.subtitle }}</p>
          </li>
        </ul>
      </article>
 </RouterLink>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import type { Project } from '@/data/projects'; // Importeer Project interface

  const props = defineProps<{
    project: Project;
  }>();


</script>
  
