<template>
    <footer class="footer">
      <p>© 2024 Dev Tio. We value creativity and innovation.</p>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    width: 100%;
    padding: 20px;
    background-color: var(--footer-bg-color);
    text-align: center;
    color: var(--footer-text-color);
    font-size: 0.875rem;
    user-select: none;
  }
  
  /* For large screens (1440px and above) */
  @media (min-width: 1440px) {
    .footer {
      padding: 30px;
      font-size: 1rem;
    }
  }
  
  /* For medium screens (1024px to 1440px) */
  @media (max-width: 1440px) and (min-width: 1024px) {
    .footer {
      padding: 25px;
      font-size: 0.95rem;
    }
  }
  
  /* For small screens (1024px and below) */
  @media (max-width: 1024px) {
    .footer {
      padding: 20px;
      font-size: 0.875rem;
    }
  }
  
  /* For very small screens (768px and below) */
  @media (max-width: 768px) {
    .footer {
      padding: 15px;
      font-size: 0.75rem;
    }
  }
  </style>
  