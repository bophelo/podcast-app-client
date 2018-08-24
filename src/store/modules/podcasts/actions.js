import * as api from '@/api/podcasts'
// dispatching an action which calls our api, using the data we get back, we commit a mutation which updates our state and then a getter which reads from the state
export const getPodcasts = ({ commit }, page = 1) => {
  api.getPodcasts(page).then((response) => {
    commit('setPodcasts', response.data.data)// response.data is from axios, then our data
    commit('setPageData', {
      current: page,
      max: response.data.meta.pagination.total_pages
    })
  })
}

export const getMorePodcasts = ({ commit, state }, page = 1) => {
  api.getPodcasts(state.page.current + 1).then((response) => {
    // append to podcasts array
    commit('appendToPodcasts', response.data.data)
    commit('setPageData', {
      current: state.page.current + 1,
      max: response.data.meta.pagination.total_pages
    })
  })
}

export const getPodcast = ({ commit }, id) => {
  return api.getPodcast(id).then((response) => {
    return response.data.data
  })
}
