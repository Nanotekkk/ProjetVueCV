<template>
    <div class="contact-form">
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nom</label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            required
          />
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email" 
            required
          />
        </div>
        
        <div class="form-group">
          <label for="subject">Sujet</label>
          <input 
            type="text" 
            id="subject" 
            v-model="formData.subject" 
            required
          />
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea 
            id="message" 
            v-model="formData.message" 
            rows="5" 
            required
          ></textarea>
        </div>
        
        <div v-if="formStatus" class="form-status" :class="{ success: formStatus.success }">
          {{ formStatus.message }}
        </div>
        
        <button type="submit" class="submit-button" :disabled="isSubmitting">
          {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer' }}
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'ContactForm',
    emits: ['form-submitted'],
    setup(props, { emit }) {
      const formData = ref({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      const isSubmitting = ref(false)
      const formStatus = ref(null)
      
      const submitForm = async () => {
        isSubmitting.value = true
        formStatus.value = null
        
        try {
          // Simuler un délai de soumission
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          // Émettre l'événement avec les données du formulaire
          emit('form-submitted', formData.value)
          
          // Réinitialiser le formulaire
          formData.value = {
            name: '',
            email: '',
            subject: '',
            message: ''
          }
          
          formStatus.value = {
            success: true,
            message: 'Message envoyé avec succès!'
          }
        } catch (error) {
          formStatus.value = {
            success: false,
            message: 'Une erreur est survenue. Veuillez réessayer.'
          }
        } finally {
          isSubmitting.value = false
        }
      }
      
      return {
        formData,
        isSubmitting,
        formStatus,
        submitForm
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #2c3e50;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  textarea {
    resize: vertical;
  }
  
  .submit-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  .submit-button:hover {
    background-color: #2980b9;
  }
  
  .submit-button:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }
  
  .form-status {
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 4px;
    background-color: #e74c3c;
    color: white;
  }
  
  .form-status.success {
    background-color: #2ecc71;
  }
  </style>