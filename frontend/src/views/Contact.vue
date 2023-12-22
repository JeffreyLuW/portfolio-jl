<template>
    <div class="contact">
      <h1>Contact Me</h1>
      <form @submit.prevent="submitForm">
        <input type="text" placeholder="Your Name" v-model="name" />
        <input type="email" placeholder="Your Email" v-model="email" />
        <textarea placeholder="Your Message" v-model="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Contact-page',
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      submitForm() {
        // Handle form submission
        alert(`Message from ${this.name}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .contact {
    padding: 20px;
  }
  .contact form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: auto;
  }
  .contact form input,
  .contact form textarea {
    margin-bottom: 10px;
  }
  </style>
  