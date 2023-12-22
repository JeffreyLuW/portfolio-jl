<template>
  <div class="projects-container">
    <div class="project" v-for="project in projects" :key="project.id">
      <img :src="project.image" :alt="project.title" class="project-image" />
      <div class="project-info">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="project-buttons">
          <a :href="project.liveDemoUrl" target="_blank" class="button"
            >Live Demo</a
          >
          <a :href="project.sourceCodeUrl" target="_blank" class="button"
            >Source Code</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects-page",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Project 1",
          description: "Description for Project 1.hhhhhhhhhhhhhh",
          image: "path/to/image1.jpg", // Replace with actual image paths
          liveDemoUrl: "https://live-demo1.com",
          sourceCodeUrl: "https://source-code1.com",
        },
        {
          id: 2,
          title: "Project 2",
          description: "Description for Project 2.",
          image: "path/to/image2.jpg",
          liveDemoUrl: "https://live-demo2.com",
          sourceCodeUrl: "https://source-code2.com",
        },
        // ... more projects
      ],
    };
  },
};
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project {
  flex-basis: calc(33% - 20px); /* Adjust the spacing as per requirement */
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  background: #fff;
}

.project-image {
  width: 100%;
  height: 200px; /* Fixed height or use object-fit for better control */
  object-fit: cover;
}

.project-info {
  padding: 15px;
}

.project-buttons {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.button {
  padding: 10px 15px;
  text-align: center;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.button:hover {
  background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .project {
    flex-basis: calc(50% - 20px); /* 2 projects per row on medium screens */
  }
}

@media (max-width: 480px) {
  .project {
    flex-basis: 100%; /* 1 project per row on small screens */
  }
}
</style>
