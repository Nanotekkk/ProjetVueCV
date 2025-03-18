<template>
    <footer class="footer">
      <div class="social-links">
        <a 
          v-for="link in socialLinks" 
          :key="link.id" 
          :href="link.url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="social-link"
        >
          {{ link.name }}
        </a>
      </div>
      <div class="copyright">
        &copy; {{ currentYear }} {{ personalInfo.name }}. Tous droits réservés.
      </div>
    </footer>
  </template>
  
  <script>
  import { computed, ref } from 'vue'
  import { useStore } from 'vuex'
  
  export default {
    name: 'Footer',
    setup() {
      const store = useStore()
      
      const personalInfo = computed(() => store.getters['profile/getPersonalInfo'])
      const socialLinks = computed(() => store.getters['profile/getSocialLinks'])
      const currentYear = ref(new Date().getFullYear())
      
      return {
        personalInfo,
        socialLinks,
        currentYear
      }
    }
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #2c3e50;
    color: white;
    padding: 20px;
    text-align: center;
    margin-top: 40px;
  }
  
  .social-links {
    margin-bottom: 15px;
  }
  
  .social-link {
    display: inline-block;
    margin: 0 10px;
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .social-link:hover {
    color: #3498db;
  }
  
  .copyright {
    font-size: 0.9rem;
    opacity: 0.8;
  }
  </style>