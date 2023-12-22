<template>
    <div class="about-container">
      <div class="about-image">
        <img src="@/assets/your-photo.jpg" alt="Your Name">
      </div>
      <div class="about-text">
        <h2>About Me</h2>
        <p>
          Hi, I'm Jeffrey Lu, a passionate Full-Stack Developer...
          <!-- Your brief introduction -->
        </p>
        <!-- You can add more content here like your skills, experiences, etc. -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About-page'
  };
  </script>
  
  <style scoped>
  .about-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 20px;
  }
  
  .about-image {
    flex: 1;
    max-width: 300px; /* Adjust as needed */
  }
  
  .about-image img {
    width: 100%;
    height: auto;
    border-radius: 10px; /* Optional: for rounded corners */
  }
  
  .about-text {
    flex: 2;
    max-width: 600px; /* Adjust as needed */
  }
  
  .about-text h2 {
    margin-bottom: 10px;
  }
  
  .about-text p {
    line-height: 1.6;
  }
  </style>
  