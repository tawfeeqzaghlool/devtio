<template>
  <section class="about-us">
    <h2 class="section-title">About Us</h2>
    <div class="about-grid">
      <div
        class="about-card"
        v-for="(content, index) in aboutContent"
        :key="index"
        @click="toggleContent(index)"
        :class="{ 'is-expanded': expandedIndex === index }"
      >
        <h3 class="about-title">{{ content.title }}</h3>
        <a href="javascript:void(0);" class="see-more" @click.stop="toggleContent(index)">
          {{ expandedIndex === index ? 'See less...' : 'See more...' }}
        </a>
        <p class="about-description" v-if="expandedIndex === index">{{ content.description }}</p>
      </div>
    </div>
  </section>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const aboutContent = [
{
  title: 'Our Story',
  description: 'Born from a shared frustration with slow, unreliable software, DevTio began as a vision to revolutionize digital experiences. What started as late-night coding sessions between friends has grown into a dynamic startup dedicated to crafting software that’s fast, reliable, and a joy to use. Our journey is fueled by a passion for technology and a commitment to pushing boundaries, making the digital world a better place, one line of code at a time.'
},
{
  title: 'Our Culture',
  description: 'At DevTio, we believe that creativity and innovation are sparked by collaboration. Our culture is one where every voice matters, ideas flow freely, and teamwork leads to breakthroughs. We’ve cultivated an environment where curiosity is encouraged, challenges are met with enthusiasm, and learning never stops. Together, we celebrate our successes and learn from our failures, all while having fun along the way.'
},
{
  title: 'Our Values',
  description: 'Our values are the foundation of everything we do. We are committed to excellence, innovation, and integrity. Quality is non-negotiable; we go above and beyond to ensure our software exceeds expectations. We value our clients as partners, working closely to deliver solutions that truly meet their needs. We also believe in continuous improvement, always seeking new ways to enhance our work and deliver even greater value.'
},
{
  title: 'Social Responsibility',
  description: 'DevTio is more than just a software company; we’re committed to making a positive impact. We embrace remote work to reduce our carbon footprint and support a healthier work-life balance. We’re passionate about giving back, from supporting local initiatives to adopting sustainable practices. Social responsibility isn’t just a buzzword for us—it’s a core part of who we are and how we operate, ensuring we contribute to a better future.'
}
];

const expandedIndex = ref<number | null>(null);

function toggleContent(index: number) {
  expandedIndex.value = expandedIndex.value === index ? null : index;
}
</script>

<style scoped>
.about-us {
  width: 100%;
  padding: 40px 20px;
  background-color: transparent;
}

.section-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  color: var(--color-heading);
  user-select: none;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  margin: 0 auto;
}

.about-card {
  padding: 20px;
  text-align: center;
  border-radius: 12px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid var(--color-border);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  position: relative;
}

.about-title {
  font-size: 1.5rem;
  color: var(--color-heading);
  margin-bottom: 10px;
  user-select: none;
}

.see-more {
  font-size: 1rem;
  color: var(--color-primary);
  text-decoration: underline;
  cursor: pointer;
  user-select: none;
}

.about-description {
  font-size: 1rem;
  color: var(--color-text);
  text-align: justify;
  margin-top: 10px;
  user-select: none;
}

.about-card.is-expanded .about-description {
  display: block;
}

/* For large screens (1440px and above) */
@media (min-width: 1440px) {
  .section-title {
    font-size: 2.5rem; /* Larger font size for big screens */
  }

  .about-grid {
    grid-template-columns: repeat(3, minmax(280px, 1fr)); /* Added a third column for extra large screens */
  }

  .about-card {
    max-width: 400px; /* Larger max-width for cards */
    padding: 25px; /* Increased padding */
  }

  .about-title {
    font-size: 1.75rem; /* Larger title size */
  }

  .see-more {
    font-size: 1.2rem; /* Larger see-more text size */
  }

  .about-description {
    font-size: 1.125rem; /* Larger description text size */
  }
}

/* For medium screens (769px to 1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  .section-title {
    font-size: 2rem; /* Medium font size */
  }

  .about-card {
    max-width: 320px; /* Medium max-width */
    padding: 20px; /* Standard padding */
  }

  .about-title {
    font-size: 1.5rem; /* Medium title size */
  }

  .see-more {
    font-size: 1.1rem; /* Medium see-more text size */
  }

  .about-description {
    font-size: 1rem; /* Medium description text size */
  }
}

/* For tablets and mobile screens (768px and below) */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr; /* Single column layout */
  }

  .about-us {
    padding: 20px 10px; /* Reduced padding for mobile screens */
  }

  .section-title {
    font-size: 1.75rem; /* Smaller font size for mobile */
  }

  .about-card {
    width: 100%; /* Full width for small screens */
    padding: 15px; /* Reduced padding */
  }

  .about-title {
    font-size: 1.25rem; /* Smaller title size */
  }

  .see-more {
    font-size: 0.875rem; /* Smaller see-more text size */
  }

  .about-description {
    font-size: 0.875rem; /* Smaller description text size */
  }
}
</style>