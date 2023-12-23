<template>
  <div class="projects-section">
    <h2>My Projects</h2>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ui/ProjectCard.vue'

export default {
  name: 'ProjectsSection',
  components: {
    ProjectCard
  },
  data() {
  return {
    projects: [
      {
        id: 1,
        title: 'ConnectME',
        description: 'A social media platform to connect with people around the globe.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
        // image: '@/assets/project-connectme.jpg', // Replace with the path to your project image
        demoLink: 'https://connectme.example.com', // Replace with the link to your live demo
        codeLink: 'https://github.com/yourusername/connectme' // Replace with the link to your source code
      },
      {
        id: 2,
        title: 'BookMe',
        description: 'A scheduling app for service-based businesses like salons and barbershops.',
        technologies: ['Vue.js', 'Firebase', 'Vuetify'],
        image: '@/assets/project-bookme.jpg', // Replace with the path to your project image
        demoLink: 'https://bookme.example.com', // Replace with the link to your live demo
        codeLink: 'https://github.com/yourusername/bookme' // Replace with the link to your source code
      },
      {
        id: 3,
        title: 'ProPet',
        description: 'An e-commerce platform for pet lovers to buy pet supplies and accessories.',
        technologies: ['Angular', 'TypeScript', 'Stripe API'],
        image: '@/assets/project-propet.jpg', // Replace with the path to your project image
        demoLink: 'https://propet.example.com', // Replace with the link to your live demo
        codeLink: 'https://github.com/yourusername/propet' // Replace with the link to your source code
      }
      // Add more projects as needed
    ]
  };
}

};
</script>

<style scoped>
.projects-section {
  padding: 40px;
}

.projects-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px; /* Space between cards */
}

@media (max-width: 768px) {
  .projects-grid {
    flex-direction: column;
    align-items: center;
  }
}
</style>

