<template>
    <header class="site-header">
      <div class="logo">
        <img src="@/assets/logo.png" alt="Logo" /> <!-- Replace with your logo -->
      </div>
      <nav class="navigation">
        <router-link to="/#home">Home</router-link>
        <router-link to="/#about">About</router-link>
        <router-link to="/#projects">Projects</router-link>
        <!-- Add more links as needed -->
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header-page'
  };
  </script>
  
  <style scoped>
  .site-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #333;
    color: white;
  }
  
  .logo img {
    height: 50px; /* Adjust as needed */
  }
  
  .navigation a {
    margin: 0 10px;
    color: white;
    text-decoration: none;
  }
  
  .navigation a:hover {
    text-decoration: underline;
  }
  </style>
  