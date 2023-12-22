<template>
    <div class="projects">
      <h1>My Projects</h1>
      <div v-for="project in projects" :key="project.id" class="project">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'Projects-page',
    computed: mapState(['projects'])
  };
  </script>
  
  <style scoped>
  .projects {
    padding: 20px;
  }
  .project {
    margin-bottom: 15px;
  }
  </style>
  