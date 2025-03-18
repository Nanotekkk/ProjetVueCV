<template>
    <header class="header">
      <div class="logo">
        <router-link to="/">{{ personalInfo.name }}</router-link>
      </div>
      <nav class="nav">
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/projects">Projets</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  export default {
    name: 'Header',
    setup() {
      const store = useStore()
      
      const personalInfo = computed(() => store.getters['profile/getPersonalInfo'])
      
      return {
        personalInfo
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #2c3e50;
    color: white;
  }
  
  .logo a {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
  }
  
  .nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav li {
    margin-left: 20px;
  }
  
  .nav a {
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .nav a:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .nav a.router-link-active {
    background-color: rgba(255, 255, 255, 0.2);
  }
  </style>