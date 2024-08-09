<template>
  <section class="how-we-work">
    <h1 class="section-title">How We Work</h1>
    <div class="steps">
      <div class="step-card">
        <div class="icon">🗣️</div>
        <h2>1. Discover</h2>
        <p>We start with a conversation, understanding your ideas, challenges, and vision.</p>
      </div>
      <div class="step-card">
        <div class="icon">🗺️</div>
        <h2>2. Plan</h2>
        <p>We turn those ideas into a detailed roadmap, with clear steps and goals.</p>
      </div>
      <div class="step-card">
        <div class="icon">🔨</div>
        <h2>3. Develop</h2>
        <p>Our team brings your project to life with transparency, updates, and a commitment to quality.</p>
      </div>
      <div class="step-card">
        <div class="icon">🚀</div>
        <h2>4. Deliver</h2>
        <p>We deliver a solution that exceeds expectations and provide ongoing support.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-we-work {
  width: 100%;
  background-color: transparent;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}

.section-title {
  font-size: 2rem;
  color: var(--color-heading);
  margin-bottom: 20px;
  text-align: center;
  user-select: none;
}

.steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  user-select: none;
}

.step-card {
  background-color: var(--color-background-light);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 20px;
  width: 100%; /* Full width for large screens */
  max-width: 280px; /* Restrict max-width */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}

.icon {
  font-size: 2rem; /* Adjust as needed */
  margin-bottom: 10px;
  user-select: none;
}

.step-card h2 {
  font-size: 1.25rem;
  color: var(--color-heading);
  margin-bottom: 10px;
  user-select: none;
}

.step-card p {
  font-size: 1rem;
  color: var(--color-text);
  text-align: justify;
  user-select: none;
}

/* For large screens (1440px and above) */
@media (min-width: 1440px) {
  .section-title {
    font-size: 2.5rem; /* Larger font size for big screens */
  }

  .step-card {
    max-width: 350px; /* Larger max-width for step cards */
    padding: 25px; /* Increased padding */
  }

  .icon {
    font-size: 2.5rem; /* Larger icon size */
  }

  .step-card h2 {
    font-size: 1.5rem; /* Larger heading size */
  }

  .step-card p {
    font-size: 1.1rem; /* Larger text size */
  }
}

/* For medium screens (769px to 1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  .section-title {
    font-size: 2.25rem; /* Medium font size */
  }

  .step-card {
    max-width: 320px; /* Medium max-width */
    padding: 20px; /* Padding for medium screens */
  }

  .icon {
    font-size: 2rem; /* Medium icon size */
  }

  .step-card h2 {
    font-size: 1.25rem; /* Medium heading size */
  }

  .step-card p {
    font-size: 1rem; /* Medium text size */
  }
}

/* For tablets and mobile screens (768px and below) */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.75rem; /* Smaller font size */
  }

  .step-card {
    max-width: 100%; /* Full width on small screens */
    margin-bottom: 15px; /* Reduced margin */
    padding: 15px; /* Reduced padding */
  }

  .icon {
    font-size: 1.75rem; /* Smaller icon size */
  }

  .step-card h2 {
    font-size: 1.125rem; /* Smaller heading size */
  }

  .step-card p {
    font-size: 0.875rem; /* Smaller text size */
  }
}
</style>
