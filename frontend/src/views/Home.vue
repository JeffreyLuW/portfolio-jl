<template>
    <div class="home-container">
      <div class="welcome-message">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm Jeffrey Lu, a Full-Stack Developer passionate about building meaningful software.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home-page'
  };
  </script>
  
  <style scoped>
  .home-container {
    background-image: url('@/assets/home-background.jpg'); /* Replace with your background image */
    background-size: cover;
    background-position: center;
    height: 100vh; /* Full viewport height */
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  }
  
  .welcome-message {
    max-width: 600px;
    text-align: center;
  }
  
  .welcome-message h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .welcome-message p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  </style>
  
  