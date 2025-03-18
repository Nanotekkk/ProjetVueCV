<template>
    <div class="project-card">
      <h3 class="project-title">{{ project.name }}</h3>
      <p class="project-description">{{ project.description }}</p>
      
      <div class="project-details">
        <div class="project-detail">
          <span class="detail-label">Langage:</span>
          <span class="detail-value">{{ project.language || 'Non spécifié' }}</span>
        </div>
        
        <div class="project-detail">
          <span class="detail-label">Étoiles:</span>
          <span class="detail-value">{{ project.stargazers_count }}</span>
        </div>
        
        <div class="project-detail">
          <span class="detail-label">Forks:</span>
          <span class="detail-value">{{ project.forks_count }}</span>
        </div>
        
        <div class="project-detail">
          <span class="detail-label">Mis à jour:</span>
          <span class="detail-value">{{ project.updated_at }}</span>
        </div>
      </div>
      
      <div class="project-actions">
        <a :href="project.html_url" target="_blank" rel="noopener noreferrer" class="project-link">
          Voir sur GitHub
        </a>
        <button @click="$emit('view-details', project)" class="view-details-button">
          Détails
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      project: {
        type: Object,
        required: true
      }
    },
    emits: ['view-details']
  }
  </script>
  
  <style scoped>
  .project-card {
    background-color: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }
  
  .project-title {
    margin-top: 0;
    margin-bottom: 10px;
    color: #2c3e50;
    font-size: 1.2rem;
  }
  
  .project-description {
    margin-bottom: 15px;
    color: #7f8c8d;
    font-size: 0.9rem;
    line-height: 1.4;
  }
  
  .project-details {
    margin-bottom: 15px;
    font-size: 0.9rem;
  }
  
  .project-detail {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  
  .detail-label {
    font-weight: bold;
    color: #2c3e50;
  }
  
  .detail-value {
    color: #7f8c8d;
  }
  
  .project-actions {
    display: flex;
    justify-content: space-between;
  }
  
  .project-link, .view-details-button {
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 0.9rem;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.3s;
  }
  
  .project-link {
    background-color: #3498db;
    color: white;
    flex: 1;
    margin-right: 10px;
  }
  
  .project-link:hover {
    background-color: #2980b9;
  }
  
  .view-details-button {
    background-color: #ecf0f1;
    color: #2c3e50;
    border: none;
    cursor: pointer;
    flex: 1;
  }
  
  .view-details-button:hover {
    background-color: #d6dbdf;
  }
  </style>