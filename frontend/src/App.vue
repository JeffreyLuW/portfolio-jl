<template>
  <div>
    <the-header></the-header>
    <section id="home">
      <home-section></home-section>
      <!-- Content -->
    </section>

    <section id="about">
      <about-section></about-section>
      <!-- Content -->
    </section>

    <section id="projects">
      <h1>My Projects</h1>
      <project-section></project-section>
      <!-- Content -->
    </section>

    <section id="contact">
      <h1>Contact Me</h1>
      <contact-section></contact-section>
      <!-- Content -->
    </section>
    <the-footer></the-footer>
  </div>
</template>
<script>
import ProjectSection from "./views/Projects.vue";
import ContactSection from "./views/Contact.vue";
import AboutSection from "./views/About.vue";
import HomeSection from "./views/Home.vue";
import TheHeader from "./components/global/Header.vue";
import TheFooter from "./components/global/Footer.vue";
export default {
  components: {
    ProjectSection,
    ContactSection,
    AboutSection,
    HomeSection,
    TheHeader,
    TheFooter,
  },
  watch: {
    $route(to) {
      this.scrollToSection(to.hash);
    },
  },
  methods: {
    scrollToSection(hash) {
      if (hash) {
        let element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
  },
  mounted() {
    this.scrollToSection(this.$route.hash);
  },
};
</script>

<style>
nav {
  background-color: #333;
  padding: 10px;
  text-align: center;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: white;
  font-size: 1.1em;
}

nav a:hover {
  color: #ddd;
}

/* override padding for home section */
#home {
  padding: 0;
}
section {
  padding: 100px 0;
  text-align: center;
  border-bottom: 1px solid #eee;
}

#home {
  background-color: #f8f8f8;
}

#about,
#contact {
  background-color: #f0f0f0;
}

#projects {
  background-color: #e8e8e8;
}
</style>
