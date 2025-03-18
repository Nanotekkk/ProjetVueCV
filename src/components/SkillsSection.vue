<template>
    <section class="skills">
      <h2>Compétences techniques</h2>
      
      <div class="skills-grid">
        <div 
          v-for="skill in skills" 
          :key="skill.id" 
          class="skill-item"
        >
          <div class="skill-name">{{ skill.name }}</div>
          <div class="skill-bar-container">
            <div class="skill-bar" :style="{ width: `${skill.level}%` }"></div>
            <div class="skill-level">{{ skill.level }}%</div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  
  export default {
    name: 'SkillsSection',
    setup() {
      const store = useStore()
      
      const skills = computed(() => store.getters['profile/getSkills'])
      
      return {
        skills
      }
    }
  }
  </script>
  
  <style scoped>
  .skills {
    margin-bottom: 40px;
  }
  
  h2 {
    color: #2c3e50;
    margin-bottom: 20px;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .skill-item {
    margin-bottom: 15px;
  }
  
  .skill-name {
    margin-bottom: 5px;
    font-weight: bold;
    color: #2c3e50;
  }
  
  .skill-bar-container {
    position: relative;
    height: 20px;
    background-color: #ecf0f1;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .skill-bar {
    height: 100%;
    background-color: #3498db;
    border-radius: 10px;
    transition: width 1s ease-in-out;
  }
  
  .skill-level {
    position: absolute;
    right: 10px;
    top: 0;
    line-height: 20px;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  }
  </style>