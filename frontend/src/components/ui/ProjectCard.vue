<template>
    <div class="project-card">
      <div class="card-header">
        <img class="card-image" :src="project.image" :alt="project.title">
        <h3 class="card-title">{{ project.title }}</h3>
      </div>
      <div class="card-body">
        <p class="card-description">{{ project.description }}</p>
        <ul class="technologies">
          <li class="tech" v-for="tech in project.technologies" :key="tech">
            <i :class="`fab fa-${tech.toLowerCase()}`"></i> {{ tech }}
          </li>
        </ul>
        <div class="card-actions">
          <a :href="project.demoLink" target="_blank" class="button demo">Live Demo</a>
          <a :href="project.codeLink" target="_blank" class="button code">Source Code</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: ['project']
  };
  </script>
  
  <style scoped>
  .project-card {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    width: 100%;
    max-width: 320px;
    margin: 1rem;
    background: #ffffff;
  }
  
  .card-header {
    position: relative;
    overflow: hidden;
    text-align: center;
    color: #fff;
  }
  
  .card-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .card-title {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.75);
    padding: 6px 12px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }
  
  .card-body {
    padding: 1rem;
  }
  
  .card-description {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .technologies {
    list-style: none;
    padding: 0;
    text-align: center;
  }
  
  .tech {
    display: inline-block;
    background-color: #efefef;
    padding: 0.25rem 0.75rem;
    border-radius: 16px;
    margin: 0.25rem;
    font-size: 0.85rem;
    transition: background-color 0.3s ease;
  }
  
  .tech i {
    margin-right: 5px;
  }
  
  .card-actions {
    display: flex;
    justify-content: space-around;
    padding-top: 1rem;
  }
  
  .button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: opacity 0.3s ease;
  }
  
  .demo {
    background-color: #007bff;
  }
  
  .code {
    background-color: #28a745;
  }
  
  .button:hover {
    opacity: 0.9;
  }
  
  .project-card:hover .card-image {
    transform: scale(1.05);
  }
  
  .project-card:hover .card-title {
    background: rgba(0, 0, 0, 0.9);
  }
  
  .project-card:hover .tech {
    background-color: #ddeeff;
  }
  </style>
  