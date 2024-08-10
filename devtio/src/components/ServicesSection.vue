<template>
  <section class="services">
    <h2 class="section-title">
      Our Services
    </h2>
    <div class="service-grid">
      <div
        class="service-card"
        v-for="(service, index) in services"
        :key="index"
        @click="toggleInfo(index)"
      >
        <div class="service-card-inner" :class="{ 'is-flipped': flippedIndex === index }">
          <!-- Front Card: Display Service Image and Name -->
          <div class="service-card-front">
            <div class="service-image-container">
              <img :src="images[service]" alt="service" class="service-image" />
            </div>
            <div class="service-title">
              <h3>{{ service }}</h3>
              <span class="details-link">Click for details</span>
            </div>
          </div>
          <!-- Back Card: Display Headline and Description -->
          <div class="service-card-back">
            <div class="service-info">
              <h4>{{ serviceInfo[service].headline }}</h4>
              <p>{{ serviceInfo[service].description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define the type for the service names
type Service = 'Web Development' | 'Mobile Development' | 'Smart Devices Development' | 'IoT Development' | 'UI/UX Design' | 'IT Consultation';

const services: Service[] = [
  'Web Development',
  'Mobile Development',
  'Smart Devices Development',
  'IoT Development',
  'UI/UX Design',
  'IT Consultation',
];

const images: Record<Service, string> = {
  'Web Development': '/images/web-development.webp',
  'Mobile Development': '/images/mobile-development.webp',
  'Smart Devices Development': '/images/smart-device.webp',
  'IoT Development': '/images/iot-development.webp',
  'UI/UX Design': '/images/ui-ux-design.webp',
  'IT Consultation': '/images/it-consultation.webp',
};

const serviceInfo: Record<Service, { headline: string; description: string }> = {
  'Web Development': {
    headline: 'Crafting Digital Experiences That Convert',
    description: 'Our web development services focus on creating stunning, user-friendly, and high-performing websites tailored to your business goals. From e-commerce platforms to corporate websites, we deliver exceptional solutions that drive results.',
  },
  'Mobile Development': {
    headline: 'Delivering Seamless Mobile Experiences',
    description: 'We specialize in developing innovative mobile apps that captivate your audience. Whether it\'s iOS or Android, we create engaging apps that meet the needs of your target market and drive user engagement.',
  },
  'Smart Devices Development': {
    headline: 'Bringing Your Smart Device Vision to Life',
    description: 'Our team of experts is dedicated to developing cutting-edge smart device solutions. From wearables to home automation systems, we create intelligent devices that enhance people\'s lives.',
  },
  'IoT Development': {
    headline: 'Unlock the Power of the Internet of Things',
    description: 'We help businesses harness the potential of IoT by developing customized solutions that connect devices, collect data, and drive actionable insights. Our IoT expertise enables you to optimize operations and create new revenue streams.',
  },
  'UI/UX Design': {
    headline: 'Designing User Experiences That Delight',
    description: 'Our design team creates intuitive and visually appealing user interfaces that drive user engagement and satisfaction. We combine user research, design thinking, and cutting-edge technology to deliver exceptional user experiences.',
  },
  'IT Consultation': {
    headline: 'Your Trusted IT Partner',
    description: 'Our IT consulting services provide expert guidance to help you optimize your technology infrastructure and achieve your business objectives. From system analysis to project management, we offer tailored solutions to meet your specific needs.',
  },
};

const flippedIndex = ref<number | null>(null);

function toggleInfo(index: number) {
  flippedIndex.value = flippedIndex.value === index ? null : index;
}

</script>

<style scoped>
.services {
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

.details-link {
  display: inline-block;
  margin-left: 10px; /* Space between the title and the span */
  font-size: 0.875rem; /* Smaller font size */
  color: var(--color-link); /* Color for the link */
  cursor: pointer;
  user-select: none;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  margin: 0 auto;
}

.service-card {
  perspective: 1000px;
  width: 100%;
  height: 300px;
  border: 1px solid var(--color-border);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: transparent;
}

.service-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
  user-select: none;
}

.service-card-inner.is-flipped {
  transform: rotateY(180deg);
}

.service-card-front,
.service-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.service-card-front {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 20px;
  user-select: none;
}

.service-card-back {
  background-color: transparent;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transform: rotateY(180deg);
  text-align: center;
  user-select: none;
}

.service-image-container {
  width: 100%;
  height: 300px; /* Adjust as needed for your design */
  overflow: hidden;
  border-radius: 12px;
  position: relative; /* Ensure the container has relative positioning for absolute positioning of the image */
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute; /* Position absolutely to ensure it covers the entire container */
  top: 0;
  left: 0;
}

.service-title h3 {
  margin: 10px 0 0;
  font-size: 1.5rem;
  color: var(--color-heading);
}

.service-info h4 {
  color: var(--color-heading);
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.service-info p {
  color: var(--color-text);
  font-size: 1rem;
  text-align: justify;
}

/* For large screens */
@media (min-width: 1440px) {
  .service-card {
    height: 350px; /* Adjust height for larger screens */
  }

  .section-title {
    font-size: 2.25rem; /* Larger font size for big screens */
  }

  .details-link {
    font-size: 1rem; /* Larger font size for larger screens */
    margin-left: 15px; /* Adjust space as needed */
  }

  .service-title h3 {
    font-size: 1.75rem; /* Larger font size for service title */
  }
}

/* For medium screens (769px to 1024px) */
@media (max-width: 1024px) and (min-width: 769px) {
  .service-grid {
    grid-template-columns: repeat(3, minmax(250px, 1fr)); /* Adjust grid for medium screens */
  }

  .section-title {
    font-size: 2rem; /* Adjust font size */
  }

  .details-link {
    font-size: 0.9rem; /* Adjust font size for medium screens */
    margin-left: 12px; /* Adjust space as needed */
  }

  .service-title h3 {
    font-size: 1.5rem; /* Adjust font size */
  }

  .service-card {
    height: 280px; /* Adjust height */
  }
}

/* For tablets and mobile screens (768px and below) */
@media (max-width: 768px) {
  .service-grid {
    grid-template-columns: 1fr; /* Stack cards in a single column */
    gap: 15px; /* Reduced gap */
  }

  .service-card {
    height: 250px; /* Adjust height */
  }

  .section-title {
    font-size: 1.75rem; /* Smaller font size */
  }

  .details-link {
    display: block; /* Stack on small screens */
    margin-left: 0;
    margin-top: 5px; /* Space above the span */
    font-size: 0.875rem; /* Adjust font size */
    text-align: center; /* Center-align text */
  }

  .service-title h3 {
    font-size: 1.25rem; /* Smaller font size */
  }

  .service-info h4 {
    font-size: 1.1rem; /* Smaller font size */
  }

  .service-info p {
    font-size: 0.875rem; /* Smaller font size */
  }
}
</style>
