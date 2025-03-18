<template>
    <div class="home">
      <ProfileSection />
      
      <ExperienceSection />
      
      <SkillsSection />
      
      <section class="contact-section">
        <h2>Contact</h2>
        <ContactForm @form-submitted="handleFormSubmit" />
      </section>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import ProfileSection from '@/components/ProfileSection.vue'
  import ExperienceSection from '@/components/ExperienceSection.vue'
  import SkillsSection from '@/components/SkillsSection.vue'
  import ContactForm from '@/components/ContactForm.vue'
  
  export default {
    name: 'HomeView',
    components: {
      ProfileSection,
      ExperienceSection,
      SkillsSection,
      ContactForm
    },
    setup() {
      const formStatus = ref(null)
      
      const handleFormSubmit = (formData) => {
        // Dans un cas réel, on enverrait les données à un service backend
        console.log('Form submitted:', formData)
        formStatus.value = 'Votre message a été envoyé avec succès!'
        
        // Réinitialiser le statut après 3 secondes
        setTimeout(() => {
          formStatus.value = null
        }, 3000)
      }
      
      return {
        formStatus,
        handleFormSubmit
      }
    }
  }
  </script>
  
  <style scoped>
  .home {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .contact-section {
    margin-top: 40px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }
  
  h2 {
    color: #2c3e50;
    margin-bottom: 20px;
  }
  </style>