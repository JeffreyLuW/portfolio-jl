<template>
  <div class="home-container">
    <video autoplay muted loop id="myVideo">
      <source src="@/assets/video-1.mp4" type="video/mp4"/>
      Your browser does not support HTML5 video.
    </video>
    <div class="welcome-message">
      <h1>Welcome to My Portfolio</h1>
      <p>I'm Jeffrey Lu, a Full-Stack Developer passionate about building meaningful software.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home-page",
};
</script>

<style scoped>
/* for video background */
.home-container {
  position: relative;
  height: 100vh; /* Full viewport height */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  overflow: hidden; /* Hide overflow of video */
}
#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%; 
  min-height: 100%;
  z-index: 1; /* Ensure video is in the background */
}
/* for image background */


.welcome-message {
  max-width: 600px;
  text-align: center;
  z-index: 2; /* Ensure text is on top */
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
