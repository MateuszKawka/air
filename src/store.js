import Vue from 'vue'
import Vuex from 'vuex'
import { helpers } from './helpers';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countriesList: Array,
    citiesList: Array,
    locationsList: Array,
    pickedCountry: '',
    pickedCity: '',
    pickedLocation: '',
    searchQ: '',
    dataReady: false,
    options: {
      limit: 20,
      page: 1,
      country: 'GB'
    }
  },
  mutations: {
    setCountriesList: (state, payload) => state.countriesList = payload,
    setCitiesList: (state, payload) => state.citiesList = payload,
    setLocationsList: (state, payload) => state.locationsList = payload,
    setdataReady: (state, payload) => state.dataReady = payload,
    setSearchQ: (state, payload) => state.searchQ = payload,
    setOptions: (state, payload) => state.options = payload
  },
  actions: {
    async getCountriesList({ commit, state }) {
      commit('setCountriesList', await helpers.getCountriesList(state.options))
    },
    async getCitiesList({ commit, state }) {
      commit('setCitiesList', await helpers.getCitiesList(state.options))
    },
    async getLocationsList({ commit, state }) {
      commit('setLocationsList', await helpers.getLocationsList(state.options))
    }
  },
  getters: {
    countriesList(state) {
      if (state.dataReady) {
        if (state.searchQ.length === 0) {
          return state.countriesList
        } else {
          return state.countriesList.filter(v => {

          })
        }
      }
    }
  }
})
