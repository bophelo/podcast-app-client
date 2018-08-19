import * as api from '@/api/podcasts'
// dispatching an action which calls our api, using the data we get back, we commit a mutation which updates our state and then a getter which reads from the state
export const getPodcasts = ({ commit }, page = 1) => {
  api.getPodcasts(page).then((response) => {
    commit('setPodcasts', response.data.data)// response.data is from axios, then our data
  })
}
