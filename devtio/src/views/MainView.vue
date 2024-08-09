<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue';
import ServicesSection from '@/components/ServicesSection.vue';
import AboutUs from '@/components/AboutUs.vue';
import HowWeWork from '@/components/HowWeWork.vue';
import ContactUs from '@/components/ContactUs.vue';
import FooterSection from '@/components/FooterSection.vue';
</script>

<template>
  <main>
    <HeroSection />
    <ServicesSection />
    <HowWeWork />
    <AboutUs />
    <ContactUs />
    <FooterSection />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
