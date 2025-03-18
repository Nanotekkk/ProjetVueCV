<template>
    <section class="experience">
      <h2>Expériences professionnelles</h2>
      
      <div class="timeline">
        <div 
          v-for="experience in experiences" 
          :key="experience.id" 
          class="timeline-item"
        >
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>{{ experience.position }}</h3>
            <h4>{{ experience.company }}</h4>
            <p class="period">{{ experience.period }}</p>
            <p class="description">{{ experience.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  export default {
    name: 'ExperienceSection',
    setup() {
      const store = useStore()
      
      const experiences = computed(() => store.getters['profile/getExperiences'])
      
      return {
        experiences
      }
    }
  }
  </script>
  
  <style scoped>
  .experience {
    margin-bottom: 40px;
  }
  
  h2 {
    color: #2c3e50;
    margin-bottom: 20px;
  }
  
  .timeline {
    position: relative;
    padding-left: 30px;
  }
  
  .timeline:before {
    content: '';
    position: absolute;
    left: 8px;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: #3498db;
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 30px;
  }
  
  .timeline-dot {
    position: absolute;
    left: -30px;
    top: 5px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #3498db;
    border: 2px solid white;
  }
  
  .timeline-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .timeline-content h3 {
    margin-top: 0;
    color: #2c3e50;
  }
  
  .timeline-content h4 {
    margin: 5px 0;
    color: #3498db;
  }
  
  .period {
    font-style: italic;
    color: #7f8c8d;
    margin-bottom: 10px;
  }
  
  .description {
    margin: 0;
    line-height: 1.5;
  }
  </style>