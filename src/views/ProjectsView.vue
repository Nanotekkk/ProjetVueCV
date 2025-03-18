<template>
    <div class="projects">
      <h1>Mes Projets GitHub</h1>
      
      <div class="search-bar">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Rechercher un projet..." 
          @input="filterProjects"
          class="search-input"
        />
      </div>
      
      <div v-if="isLoading" class="loading">
        Chargement des projets...
      </div>
      
      <div v-else-if="hasError" class="error">
        {{ errorMessage }}
        <button @click="loadProjects" class="retry-button">Réessayer</button>
      </div>
      
      <div v-else-if="filteredProjects.length === 0" class="no-projects">
        Aucun projet ne correspond à votre recherche.
      </div>
      
      <div v-else class="projects-grid">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.id" 
          :project="project"
          @view-details="viewProjectDetails"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import ProjectCard from '@/components/ProjectCard.vue'
  
  export default {
    name: 'ProjectsView',
    components: {
      ProjectCard
    },
    setup() {
      const store = useStore()
      const searchQuery = ref('')
      
      const isLoading = computed(() => store.getters['projects/isLoading'])
      const hasError = computed(() => store.getters['projects/hasError'])
      const errorMessage = computed(() => store.getters['projects/errorMessage'])
      const filteredProjects = computed(() => store.getters['projects/filteredProjects'])
      
      const loadProjects = () => {
        store.dispatch('projects/fetchProjects')
      }
      
      const filterProjects = () => {
        store.dispatch('projects/updateFilter', searchQuery.value)
      }
      
      const viewProjectDetails = (project) => {
        // Rediriger vers le projet GitHub
        window.open(project.html_url, '_blank')
      }
      
      onMounted(() => {
        loadProjects()
      })
      
      return {
        searchQuery,
        isLoading,
        hasError,
        errorMessage,
        filteredProjects,
        loadProjects,
        filterProjects,
        viewProjectDetails
      }
    }
  }
  </script>
  
  <style scoped>
  .projects {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    color: #2c3e50;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .search-bar {
    margin-bottom: 30px;
    text-align: center;
  }
  
  .search-input {
    width: 100%;
    max-width: 500px;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .loading, .error, .no-projects {
    text-align: center;
    padding: 40px;
    font-size: 18px;
    color: #666;
  }
  
  .error {
    color: #e74c3c;
  }
  
  .retry-button {
    display: block;
    margin: 20px auto 0;
    padding: 8px 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .retry-button:hover {
    background-color: #2980b9;
  }
  </style>