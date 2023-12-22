<template>
    <footer class="site-footer">
      <div class="footer-content">
        <p>Contact me at <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p>Follow me on <a href="https://github.com/yourusername" target="_blank">GitHub</a> | <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a></p>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Your Name. All rights reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer-page'
  };
  </script>
  
  <style scoped>
  .site-footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 20px;
  }
  
  .footer-content a {
    color: white;
    text-decoration: none;
  }
  
  .footer-content a:hover {
    text-decoration: underline;
  }
  
  .footer-bottom {
    margin-top: 20px;
    font-size: 0.8rem;
  }
  </style>
  