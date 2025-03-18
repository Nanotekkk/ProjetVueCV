import axios from 'axios'

const GITHUB_API_URL = 'https://api.github.com'
const USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'Nanotekkk'

export async function fetchGithubProjects() {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${USERNAME}/repos`, {
      params: {
        sort: 'updated',
        direction: 'desc',
        per_page: 10
      }
    })
    
    // Traitement et formatage des données
    return response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'Aucune description disponible',
      html_url: repo.html_url,
      homepage: repo.homepage,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      language: repo.language,
      created_at: new Date(repo.created_at).toLocaleDateString(),
      updated_at: new Date(repo.updated_at).toLocaleDateString()
    }))
  } catch (error) {
    console.error('Error fetching GitHub projects:', error)
    throw new Error('Impossible de récupérer les projets GitHub')
  }
}

export async function fetchRepoDetails(repoName) {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/repos/${USERNAME}/${repoName}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching repo details for ${repoName}:`, error)
    throw new Error(`Impossible de récupérer les détails du projet ${repoName}`)
  }
}