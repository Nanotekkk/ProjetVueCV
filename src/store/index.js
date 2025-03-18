import { createStore } from 'vuex'
import profile from './modules/profile'
import projects from './modules/projects'

export default createStore({
  modules: {
    profile,
    projects
  }
})