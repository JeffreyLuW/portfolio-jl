<template>
  <div class="contact-section">
    <div class="contact-cards">
      <!-- Email Card -->
      <div class="card" @click="openLink('mailto:your.email@example.com')">
        <!-- <img src="@/assets/email-icon.svg" alt="Email" class="icon" /> -->
        <img src="https://via.placeholder.com/50" alt="Placeholder" class="icon" />
        <h3>Email</h3>
        <p>Let's get in touch.</p>
      </div>

      <!-- LinkedIn Card -->
      <div class="card" @click="openLink('https://www.linkedin.com/in/yourusername/')">
        <!-- <img src="@/assets/linkedin-icon.svg" alt="LinkedIn" class="icon" /> -->
        <img src="https://via.placeholder.com/50" alt="Placeholder" class="icon" />
        <h3>LinkedIn</h3>
        <p>Let's connect.</p>
      </div>

      <!-- GitHub Card -->
      <div class="card" @click="openLink('https://github.com/JeffreyLuW')">
        <!-- <img src="@/assets/github-icon.svg" alt="GitHub" class="icon" /> -->
        <img src="https://via.placeholder.com/50" alt="Placeholder" class="icon" />
        <h3>GitHub</h3>
        <p>Check out my repos.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact-page',
  methods: {
    openLink(url) {
      window.open(url, '_blank');
    }
  }
};
</script>

<style scoped>
.contact-section {
  text-align: center;
  padding: 2rem 0;
}

.contact-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.card {
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 2rem;
  width: 300px; /* adjust the width as needed */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}

.icon {
  width: 50px; /* adjust the size as needed */
  margin-bottom: 1rem;
}

h3 {
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  .contact-cards {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>

  
  