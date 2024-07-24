<script setup lang="ts">
  
  import { ref, computed } from 'vue';
  import DOMPurify from 'dompurify';
  
  import { projects } from '@/data/projects'; // Importeer de projects array
  import ProjectCard from '@/components/ProjectCardItem.vue'; // Importeer de ProjectCard component
import { defineProps } from 'vue';


const props = defineProps<{
  name: string;
}>();

const project = projects.find(proj => proj.name === props.name) || {
  title: 'Project Not Found',
  image: '',
  video: '',
  video2: '',
  subtitle: '',
  hoofdzaak: '',
  vak: '',
  duur: '',
  datum: '',
  skills: [] as string[],
  opdracht: '',
  eindproduct: '',
  eindproduct_link: '',
};

console.log('Props:', props);
console.log('Gevonden project:', project);

const sanitizedOpdracht = computed(() => DOMPurify.sanitize(project.opdracht));

</script>


<template>

  <main>

<a class="link_terug" @click="$router.go(-1)"> Ga terug </a>

  <h1>  {{ project.title }} </h1>

<section>

  <img :src="project.image" alt="Project Image">
  <p class="hoofdzaak"> {{ project.hoofdzaak }} </p>


</section>

<section>

<ul>
<li> <h3> Vak: </h3> 
  <p> {{ project.vak }} </p>
</li>
<li> <h3> Duur: </h3>
<p>  {{ project.duur }} </p>
</li>
<li> <h3> Datum: </h3>
<p>  {{ project.datum }}</p> </li>
</ul>

</section>

<section> 

  <h2> Skills </h2>

  <p>{{ project.skills.join(', ') }}</p>

</section>

<section>

<h2> Opdracht</h2>

<p> <div v-html="sanitizedOpdracht"></div> </p>
<!-- <p> <div v-html="project.opdracht"> </div> </p> -->


</section>

<section>
<h2> eindproduct </h2>

<p> <div v-html="project.eindproduct"> </div> </p> 


<div class="video-container" v-if="project.video">
      <iframe :src="project.video" title="YouTube video player" data-cookieconsent="marketing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen> </iframe>
    </div>

    <div class="video-container" v-if="project.video2">
      <iframe :src="project.video2" title="YouTube video player" data-cookieconsent="marketing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen> </iframe>
    </div>



<a class="link_eindproduct" v-if="project.eindproduct_link" :href="project.eindproduct_link" target="_blank"> Naar online eindproduct </a> 

</section>

<section class="cards">
     
     <p> Alle projecten: </p>
     
         <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
     
     
         </section>
  
        </main>

  </template>



<style lang="scss" scoped>

main {
  // grid-template-columns: none !important;
  // grid-template-rows: repeat(auto-fit, minmax(5em, 1fr)) !important; /* Pas de 5em aan naar de gewenste minimumhoogte */
  grid-template-columns: 1fr;


}

h2 {
  color: red;
  margin: 0.5em 0em 0.5em 0em;
}

ul {
  display: block;
  padding: 0;
  margin: 0;
  
  li {
    list-style: none;
    margin: 1em 0em  1em 0em;
  }
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  margin: 1.5em 0;
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.link_terug,
.link_eindproduct {
  padding: 10px;
  background-color: red;
  margin: 0.5em 0em 0.5em 0em;
  display: block;
  text-decoration: none;
  width: max-content;

  &:hover {
    color: red;
    background-color: white;
  }
}

.hoofdzaak {
margin-top: 1em;
}


@media screen and (min-width: 1000px) {
  h1 {
    width: 90vw;
  }

  section {
    width: 70vw;

    &:first-of-type {
      margin-top: 1em;
    }
  }

  ul {
  position: relative;
  top: auto;
  display: flex;
  gap: 10em;
  justify-content:flex-start;

}

img {
  height: 70vh;
}

.cards {
  margin-bottom: 0em;
}




}
</style>

