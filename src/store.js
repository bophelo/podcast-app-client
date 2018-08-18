import Vue from 'vue'
import Vuex from 'vuex'
import player from './store/modules/player'
import podcasts from './store/modules/podcasts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    player,
    podcasts
  }
})
