<template>
    <div class="project-card">
      <div class="project-image">
        <img :src="project.image" :alt="project.title" />
      </div>
      <div class="project-content">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <ul class="technologies">
          <li v-for="tech in project.technologies" :key="tech">
            <!-- You can use icons or labels for technologies -->
            {{ tech }}
          </li>
        </ul>
        <div class="project-actions">
          <a :href="project.demoLink" target="_blank" class="button">Live Demo</a>
          <a :href="project.codeLink" target="_blank" class="button">Source Code</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      project: Object
    }
  };
  </script>
  
  <style scoped>
  .project-card {
    max-width: 300px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin-bottom: 20px;
    background-color: #fff;
  }
  
  .project-image img {
    width: 100%;
    height: 200px; /* Adjust as needed or use object-fit */
    object-fit: cover;
  }
  
  .project-content {
    padding: 15px;
  }
  
  .technologies {
    list-style: none;
    padding: 0;
  }
  
  .technologies li {
    display: inline-block;
    margin-right: 5px;
    /* Add more styles for your technology badges here */
  }
  
  .project-actions {
    margin-top: 15px;
  }
  
  .button {
    text-decoration: none;
    padding: 10px 15px;
    color: #fff;
    background-color: #007bff;
    border-radius: 5px;
    margin-right: 5px;
  }
  
  .button:hover {
    background-color: #0056b3;
  }
  </style>
  