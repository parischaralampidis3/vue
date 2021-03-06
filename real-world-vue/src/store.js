import Vue from 'vue'
import Vuex from 'vuex'
import EventService from "./services/EventService.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Paris Charalampidis' },

    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: []
  },

  mutations: {
    ADD_EVENT(state, event) {
      EventService.postEvent(event)
      state.events.push(event)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
      commit('ADD_EVENT', event)
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id == id)
    }
  }
})
