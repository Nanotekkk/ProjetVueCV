<template>
    <section class="profile">
      <div class="profile-header">
        <div class="profile-image-placeholder"></div>
        <div class="profile-title">
          <h1>{{ personalInfo.name }}</h1>
          <h2>{{ personalInfo.title }}</h2>
        </div>
      </div>
      
      <div class="profile-content">
        <div class="profile-info">
          <p><strong>Email:</strong> {{ personalInfo.email }}</p>
          <p><strong>Téléphone:</strong> {{ personalInfo.phone }}</p>
          <p><strong>Localisation:</strong> {{ personalInfo.location }}</p>
        </div>
        
        <div class="profile-about">
          <h3>À propos de moi</h3>
          <p>{{ personalInfo.about }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  export default {
    name: 'ProfileSection',
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
  .profile {
    margin-bottom: 40px;
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
  }
  
  .profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .profile-image-placeholder {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #ddd;
    margin-right: 20px;
  }
  
  .profile-title h1 {
    margin: 0;
    font-size: 2rem;
    color: #2c3e50;
  }
  
  .profile-title h2 {
    margin: 5px 0 0;
    font-size: 1.2rem;
    color: #7f8c8d;
    font-weight: normal;
  }
  
  .profile-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
  }
  
  .profile-info p {
    margin: 10px 0;
  }
  
  .profile-about h3 {
    margin-top: 0;
    color: #2c3e50;
  }
  
  @media (max-width: 768px) {
    .profile-header {
      flex-direction: column;
      text-align: center;
    }
    
    .profile-image-placeholder {
      margin-right: 0;
      margin-bottom: 20px;
    }
    
    .profile-content {
      grid-template-columns: 1fr;
    }
  }
  </style>