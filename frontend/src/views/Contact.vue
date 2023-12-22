<template>
    <div class="contact-container">
      <div class="contact-card" @click="navigateTo('https://github.com/yourusername')">
        <img src="@/assets/github-icon.png" alt="GitHub" class="icon">
        <p>GitHub</p>
      </div>
  
      <div class="contact-card" @click="navigateTo('https://linkedin.com/in/yourusername')">
        <img src="@/assets/linkedin-icon.png" alt="LinkedIn" class="icon">
        <p>LinkedIn</p>
      </div>
  
      <div class="contact-card" @click="navigateTo('mailto:your.email@example.com')">
        <img src="@/assets/email-icon.png" alt="Email" class="icon">
        <p>Email</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact-page',
    methods: {
      navigateTo(url) {
        window.open(url, '_blank');
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }
  
  .contact-card {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .contact-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    width: 50px; /* Adjust size as needed */
    height: 50px;
    margin-bottom: 10px;
  }
  </style>
  
  