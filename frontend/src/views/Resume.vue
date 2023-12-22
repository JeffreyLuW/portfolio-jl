<template>
    <div class="resume-container">
      <h2>My Resume</h2>
      <div class="resume-content">
        <div class="resume-section">
          <h3>Professional Experience</h3>
          <ul>
            <li><strong>Job Title 1</strong> - Company Name, Year</li>
            <li><strong>Job Title 2</strong> - Company Name, Year</li>
            <!-- Add more experiences as needed -->
          </ul>
        </div>
        <div class="resume-section">
          <h3>Education</h3>
          <ul>
            <li><strong>Degree</strong> - University Name, Year</li>
            <!-- Add more educational qualifications as needed -->
          </ul>
        </div>
      </div>
      <button @click="downloadResume">Download Full Resume</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Resume-page',
    methods: {
      downloadResume() {
        window.open('path/to/your-resume.pdf', '_blank');
      }
    }
  };
  </script>
  
  <style scoped>
  .resume-container {
    text-align: center;
    padding: 20px;
  }
  
  .resume-content {
    text-align: left;
    margin: 20px auto;
    max-width: 800px; /* Adjust as needed */
  }
  
  .resume-section {
    margin-bottom: 20px;
  }
  
  .resume-section h3 {
    margin-bottom: 10px;
  }
  
  button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  
  