<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-top">
        <img src="/images/Logo.png" alt="Dev Tio Logo" class="dev-logo">
        <p>Innovating Tomorrow's Digital Landscape</p>
      </div>
      <img src="/images/teamwork.webp" alt="Collaborative Teamwork" class="hero-image">
      <div class="hero-text">
        <h1>Empower Your Business with Cutting-Edge Solutions</h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: transparent;
}

.hero-content {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  gap: 2rem;
}

.hero-top {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the <p> under the logo */
  margin-bottom: 1rem; /* Add some margin to separate the group from other content */
  user-select: none; /* Prevent selection of the group */
  justify-self: start; /* Align the group to the left of the row */
}

.hero-image {
  width: 100%;
  max-width: 400px;
  min-width: 300px;
  margin: 0 auto;
}

.dev-logo {
  width: 120px;
  height: auto;
  object-fit: cover;
}

.hero-image,
.dev-logo {
  user-select: none; /* Prevent both images from being copied */
  -webkit-user-drag: none; /* Prevent drag on images */
}

.hero-text {
  display: flex;
  justify-content: center;
}

.hero-text h1 {
  font-size: 2rem;
  margin: 0;
  text-align: center;
  justify-self: center;
  user-select: none;
}

.hero-text p {
  font-size: 1rem;
}

/* Media query for large screens (1440px and above) */
@media (min-width: 1440px) {

  .hero-text h1 {
    font-size: 2.5rem;
    text-align: center;
    justify-content: center;
  }

  .hero-text p {
    font-size: 1.2rem;
  }

  .hero-image {
    max-width: 700px;
  }
}

/* Media query for medium screens (1024px to 1440px) */
@media (max-width: 1440px) and (min-width: 1024px) {

  .hero-text h1 {
    font-size: 2rem;
    text-align: center;
    justify-content: center;
  }

  .hero-text p {
    font-size: 1rem;
  }

  .hero-image {
    max-width: 500px;
  }
}

/* Media query for small screens (1024px and below) */
@media (max-width: 1024px) {
  .hero-content {
  grid-template-rows: auto auto auto;
  text-align: center;
  grid-template-columns: 1fr; /* Stack everything in one column on smaller screens */
  }

  .hero-top {
    margin-bottom: 1rem;
  }

  .dev-logo,
  .hero-image {
    justify-self: center;
  }

  .dev-logo{
    max-width: 90px;
  }

  .hero-image {
    width: 80%;
    min-width: 300px; /* Ensure the image doesn't disappear */
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-text h1 {
    font-size: 1rem;
  }

  .hero-text p {
    font-size: 0.75rem;
  }
}
</style>
