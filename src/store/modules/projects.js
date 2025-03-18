import { fetchGithubProjects } from '@/services/githubApi'

export default {
  namespaced: true,
  state: () => ({
    projects: [],
    loading: false,
    error: null,
    filter: ''
  }),
  getters: {
    allProjects: state => state.projects,
    filteredProjects: state => {
      if (!state.filter) return state.projects
      return state.projects.filter(project => 
        project.name.toLowerCase().includes(state.filter.toLowerCase()) ||
        (project.description && project.description.toLowerCase().includes(state.filter.toLowerCase()))
      )
    },
    isLoading: state => state.loading,
    hasError: state => state.error !== null,
    errorMessage: state => state.error
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects
    },
    setLoading(state, status) {
      state.loading = status
    },
    setError(state, error) {
      state.error = error
    },
    setFilter(state, filter) {
      state.filter = filter
    }
  },
  actions: {
    async fetchProjects({ commit }) {
      commit('setLoading', true)
      commit('setError', null)
      
      try {
        const projects = await fetchGithubProjects()
        commit('setProjects', projects)
      } catch (error) {
        commit('setError', error.message || 'Failed to fetch GitHub projects')
      } finally {
        commit('setLoading', false)
      }
    },
    updateFilter({ commit }, filter) {
      commit('setFilter', filter)
    }
  }
}