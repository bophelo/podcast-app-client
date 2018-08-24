import axios from 'axios'

export const getPodcasts = (page = 1) => {
  return axios.get(`${process.env.VUE_APP_API_URL}/podcasts?page=${page}`)
}

export const getPodcast = (id) => {
  return axios.get(`${process.env.VUE_APP_API_URL}/podcasts/${id}`)
}
