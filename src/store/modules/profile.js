export default {
    namespaced: true,
    state: () => ({
      personalInfo: {
        name: 'Matheo "Nanotek" LANCEA',
        title: 'Etudiant en informatique',
        email: 'matheo.lancea@gmail.com',
        phone: '+33 6 12 34 56 78',
        location: 'Versaille, France',
        about: `Développeur web depuis tellement longtemps que même Internet Explorer me respecte.
Spécialiste de JavaScript, surtout Vue.js et Node.js, mais aussi expert en débogage nocturne.
Toujours prêt à relever de nouveaux défis... sauf s'il faut supporter du code legacy écrit par un stagiaire en 2009.`
      },
      experiences: [
        {
          "id": 1,
          "company": "Carlier Chaine",
          "position": "Alternant Data",
          "period": "2024 - 2025",
          "description": "Analyse et traitement de données, mise en place de solutions data-driven."
       
        },
        {
          "id": 2,
          "company": "LaFrabriq",
          "position": "Employé Polyvalent",
          "period": "2022 - 2023",
          "description": "Service, gestion des stocks et assistance en production."
        },
        {
"id": 3,
    "company": "Counter-Strike",
    "position": "Joueur de CS",
    "period": "21 août 2012 - Présent",
    "description": "Compétiteur et passionné, adaptation aux nouvelles mécaniques de CS2 depuis la fin de CS:GO."
        }
      ],
      skills: [
        { id: 1, name: 'Vue.js', level: 95 },
        { id: 2, name: 'JavaScript', level: 90 },
        { id: 3, name: 'HTML/CSS', level: 85 },
        { id: 4, name: 'Node.js', level: 80 },
        { id: 5, name: 'SQL', level: 75 },
        { id: 6, name: 'Git', level: 85 },
        { id: 7, name: 'Docker', level: 70 },
        { id: 8, name: 'TypeScript', level: 75 }
      ],
      socialLinks: [
        { id: 1, name: 'GitHub', url: 'https://github.com/Nanotekkk', icon: 'github' },
        { id: 2, name: 'LinkedIn', url: 'https://www.linkedin.com/in/mathéo-lancea-638180223', icon: 'linkedin' },
        { id: 3, name: 'Twitter', url: 'https://twitter.com/jeandupont', icon: 'twitter' }
      ]
    }),
    getters: {
      getPersonalInfo: state => state.personalInfo,
      getExperiences: state => state.experiences,
      getSkills: state => state.skills,
      getSocialLinks: state => state.socialLinks
    },
    mutations: {
      updatePersonalInfo(state, payload) {
        state.personalInfo = { ...state.personalInfo, ...payload }
      },
      addExperience(state, experience) {
        state.experiences.push(experience)
      },
      updateExperience(state, { id, experience }) {
        const index = state.experiences.findIndex(exp => exp.id === id)
        if (index !== -1) {
          state.experiences[index] = { ...state.experiences[index], ...experience }
        }
      },
      addSkill(state, skill) {
        state.skills.push(skill)
      },
      updateSkill(state, { id, skill }) {
        const index = state.skills.findIndex(s => s.id === id)
        if (index !== -1) {
          state.skills[index] = { ...state.skills[index], ...skill }
        }
      }
    },
    actions: {
      updateProfile({ commit }, payload) {
        commit('updatePersonalInfo', payload)
      },
      addNewExperience({ commit }, experience) {
        const newExperience = {
          id: Date.now(),
          ...experience
        }
        commit('addExperience', newExperience)
      },
      updateExistingExperience({ commit }, payload) {
        commit('updateExperience', payload)
      },
      addNewSkill({ commit }, skill) {
        const newSkill = {
          id: Date.now(),
          ...skill
        }
        commit('addSkill', newSkill)
      },
      updateExistingSkill({ commit }, payload) {
        commit('updateSkill', payload)
      }
    }
  }