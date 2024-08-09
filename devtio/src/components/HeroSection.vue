<template>
  <section class="hero">
    <div class="hero-content">
      <img src="/images/Logo.png" alt="Dev Logo" class="dev-logo">
      <div class="hero-text">
        <h1>Transform Your Business with Innovative Software</h1>
        <p>We craft digital experiences that inspire and grow your brand.</p>
        <button class="cta-button">Start Your Journey</button>
      </div>
      <img src="/images/teamwork.webp" alt="Hero image" class="hero-image">
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
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
}

.dev-logo {
  width: 120px;
  height: auto;
  object-fit: cover;
}

.hero-text {
  max-width: 700px;
  text-align: center;
  user-select: none;
}

.hero-text h1 {
  font-size: 2rem;
  user-select: none;
}

.hero-text p {
  font-size: 1rem;
}

.hero-image {
  width: 100%;
  height: auto;
  max-width: 400px;
}

.cta-button {
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Media query for large screens (1440px and above) */
@media (min-width: 1440px) {
  .hero-content {
    grid-template-columns: auto 1fr auto;
  }

  .hero-text h1 {
    font-size: 2.5rem;
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
  .hero-content {
    grid-template-columns: auto 1fr auto;
  }

  .hero-text h1 {
    font-size: 2rem;
  }

  .hero-text p {
    font-size: 1rem;
  }

  .hero-image {
    max-width: 300px;
  }
}

/* Media query for small screens (1024px and below) */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .dev-logo,
  .hero-image {
    justify-self: center;
  }

  .hero-image {
    width: 80%;
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-text h1 {
    font-size: 1.5rem;
  }

  .hero-text p {
    font-size: 0.875rem;
  }
}
</style>
