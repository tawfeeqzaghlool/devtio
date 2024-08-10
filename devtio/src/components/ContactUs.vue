<template>
  <section class="call-to-action">
    <div class="contact-wrapper">
      <div class="contact-image">
        <img src="/images/contact.webp" alt="Contact Us">
      </div>
      <div class="call-to-action-content">
        <h1 class="section-title">Contact Us</h1>
        <p class="section-description">
          We're here to help and answer any questions you might have. Fill out the form below, and we'll get back to you as soon as possible. Prefer email? You can reach us directly at 
          <span class="email-wrapper">
            <a href="javascript:void(0);" @click="copyEmailToClipboard">info@devtio.com</a>
            <div v-if="isCopied" class="toast email-toast">Email address copied!</div>
          </span>
        </p>
        <form class="contact-form" @submit.prevent="validateForm">
          <div class="form-group" :class="{ 'has-error': errors.name }">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" v-model="form.name" @input="validateField('name')" placeholder="Your Name" required>
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          </div>
          <div class="form-group" :class="{ 'has-error': errors.email }">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" v-model="form.email" @input="validateField('email')" placeholder="email@example.com" required>
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>
          <div class="form-group" :class="{ 'has-error': errors.subject }">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" v-model="form.subject" @input="validateField('subject')" placeholder="Subject" required>
            <span class="char-count">{{ form.subject.length }}/255</span>
            <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
          </div>
          <div class="form-group" :class="{ 'has-error': errors.message }">
            <label for="message">Message</label>
            <textarea id="message" name="message" v-model="form.message" @input="validateField('message')" rows="5" placeholder="Enter your message" required></textarea>
            <span class="char-count">{{ form.message.length }}/1000</span>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>
          <!-- <vue-recaptcha
              sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY"
              @verify="onVerify"
              @expired="onExpired"
        ></vue-recaptcha> -->
        <div class="form-group submit-wrapper">
          <button type="submit" class="submit-button" :disabled="isFormInvalid || isSending">
            <span v-if="isSending" class="spinner"></span>
            Send Message
          </button>
          <div v-if="isFormSubmitted" class="toast form-toast">Form submitted successfully!</div>
        </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import emailjs from '@emailjs/browser';

const isCopied = ref(false);
const isSending = ref(false);
const isFormSubmitted = ref(false);

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const errors = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

function validateField(field: string) {
  if (field === 'name' || !form.value.name) {
    errors.value.name = form.value.name ? (form.value.name.match(/^[A-Za-z\s]+$/) ? '' : 'Name can only contain letters and spaces.') : 'Name is required.';
  }

  if (field === 'email' || !form.value.email) {
    errors.value.email = form.value.email ? (form.value.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ? '' : 'Please enter a valid email address.') : 'Email is required.';
  }

  if (field === 'subject' || !form.value.subject) {
    errors.value.subject = form.value.subject ? (form.value.subject.length < 30 ? 'Subject must be at least 30 characters long.' : form.value.subject.length > 255 ? 'Subject must be no more than 255 characters long.' : '') : 'Subject is required.';
    form.value.subject = form.value.subject.slice(0, 255);
  }

  if (field === 'message' || !form.value.message) {
    errors.value.message = form.value.message ? (form.value.message.length < 100 ? 'Message must be at least 100 characters long.' : form.value.message.length > 1000 ? 'Message must be no more than 1000 characters long.' : '') : 'Message is required.';
    form.value.message = form.value.message.slice(0, 1000);
  }
}

function validateForm() {
  validateField('name');
  validateField('email');
  validateField('subject');
  validateField('message');

  if (!errors.value.name && !errors.value.email && !errors.value.subject && !errors.value.message) {
    // Initialize EmailJS if not done already
    emailjs.init('aiyrgd7ch6YO-Ay9q'); // Replace with your actual public key

    // Send the email
    emailjs.send('service_2x6e1zy', 'template_4b0aq0l', {
      from_name: form.value.name,
      to_name: 'Dev Tio',
      subject: form.value.subject,
      message: form.value.message
    })
    .then(response => {
      console.log('Email sent successfully', response);
      isFormSubmitted.value = true;
      setTimeout(() => {
        isFormSubmitted.value = false;
      }, 2000); // Hide the toast after 2 seconds
    })
    .catch(error => {
      console.error('Failed to send email', error);
    });
  }
}
// function onVerify() {
//   isVerified.value = true;
// }

// function onExpired() {
//   isVerified.value = false;
// }

// const isFormInvalid = computed(() => {
//   return Object.values(errors.value).some(error => error) || Object.values(form.value).some(value => !value) || !isVerified.value;
// });
const isFormInvalid = computed(() => {
  return Object.values(errors.value).some(error => error) || Object.values(form.value).some(value => !value);
});

function copyEmailToClipboard() {
  navigator.clipboard.writeText('info@devtio.com');
  isCopied.value = true;
  setTimeout(() => {
    isCopied.value = false;
  }, 2000); // Hide the toast after 2 seconds
}

</script>

<style scoped>
.call-to-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  user-select: none;
}

.section-title {
  text-align: center;
  margin-bottom: 10px;
  font-size: 2rem; /* Adjust for larger screens */
  color: var(--color-heading);
  user-select: none;
}

.section-description {
  font-size: 1rem;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 20px;
  user-select: none;
}

.contact-wrapper {
  display: flex;
  flex-direction: row; /* Side by side on larger screens */
  align-items: flex-start;
  width: 100%;
  user-select: none;
}

.contact-image {
  flex: 1;
  padding: 10px;
  user-select: none;
}

.contact-image img {
  width: 100%;
  height: auto;
}

.call-to-action-content {
  flex: 1;
  max-width: 600px;
  padding: 20px;
}

.contact-form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
  position: relative;
}

.form-group label {
  font-size: 1rem;
  color: var(--color-heading);
  margin-bottom: 5px;
  display: block;
  user-select: none;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 5px;
}

input::placeholder, textarea::placeholder {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  opacity: 0.6;
}

.char-count {
  position: absolute;
  right: 10px;
  bottom: 2px;
  font-size: 0.875rem;
  color: var(--color-text-light);
  white-space: nowrap;
}

.submit-button {
  padding: 10px 20px;
  font-size: 1rem;
  color: var(--color-text);
  background-color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.submit-button:hover {
  background-color: var(--color-primary-hover);
}

.submit-button:disabled {
  background-color: var(--color-disabled);
  cursor: not-allowed;
}

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
}

.has-error input,
.has-error textarea {
  border-color: red;
}

.toast {
  white-space: nowrap; /* Prevent text wrapping */
  font-size: 1rem; /* Default text size */
}

/* CSS for Toast Notification */
.email-wrapper {
  position: relative;
  display: inline-block;
}

.toast.email-toast {
  position: absolute;
  top: 100%; /* Position below the email link */
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #28a745; /* Green background */
  color: var(--text-color);
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
  z-index: 1000;
}

/* Specific to form submission */
.submit-wrapper {
  position: relative;
}

.toast.form-toast {
  position: absolute;
  top: 100%; /* Position below the submit button */
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #28a745; /* Green background */
  color: var(--text-color);
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
  z-index: 1000;
}

.spinner {
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: inline-block;
  animation: spin 1s linear infinite;
  margin-right: 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive design */
@media (max-width: 1440px) {
  /* Additional styles for larger desktops, if necessary */
}

@media (max-width: 1024px) and (min-width: 769px) {
  .contact-wrapper {
    flex-direction: row;
  }

  .contact-image,
  .call-to-action-content {
    padding: 15px;
  }

  .section-title {
    font-size: 1.75rem; /* Slightly smaller title font size */
  }

  .section-description {
    font-size: 0.9rem; /* Adjust font size */
  }
  .toast {
    font-size: 0.9rem; /* Slightly smaller text size */
  }
}

@media (max-width: 768px) {
.contact-wrapper {
  flex-direction: column; /* Stack image and form */
}

.contact-image {
  order: 2; /* Move the image after the content */
  width: 100%;
  padding: 20px;
}

.call-to-action-content {
  order: 1; /* Ensure the content remains on top */
  width: 100%;
  padding: 20px;
}

.section-title {
  font-size: 1.5rem; /* Adjust font size for smaller screens */
}

.section-description {
  font-size: 0.875rem; /* Adjust font size for smaller screens */
}

.form-group label {
  font-size: 0.875rem; /* Adjust font size for smaller screens */
}

.form-group input,
.form-group textarea {
  font-size: 0.875rem; /* Adjust font size for smaller screens */
}

.char-count {
  font-size: 0.75rem; /* Adjust font size for smaller screens */
}

.submit-button {
  width: 100%;
  font-size: 0.875rem; /* Adjust font size for smaller screens */
}
.toast {
  font-size: 0.8rem; /* Smaller text size for mobile */
}

.contact-form {
  width: 100%; /* Ensure the form takes full width */
}
}
</style>