import {
  GET_COUNTRIES_LIST,
  GET_CITIES_LIST,
  GET_LOCATIONS_LIST
} from './actions.types';
import {
  SET_COUNTRIES_LIST,
  SET_CITIES_LIST,
  SET_LOCATIONS_LIST,
  SET_DATA_READY,
  SET_OPTIONS_COUNTRY,
  SET_OPTIONS_CITY
} from './mutations.types';
import { helpers } from './helpers/helpers';



export default {
  async [GET_COUNTRIES_LIST]({ commit, state }) {
    commit(SET_DATA_READY, false)
    commit(SET_COUNTRIES_LIST, await helpers.getCountriesList(state.options))
    commit(SET_DATA_READY, true)
  },
  async [GET_CITIES_LIST]({ commit, state }, country) {
    commit(SET_OPTIONS_COUNTRY, country)
    commit(SET_DATA_READY, false)
    commit(SET_CITIES_LIST, await helpers.getCitiesList(state.options))
    commit(SET_DATA_READY, true)
  },
  async [GET_LOCATIONS_LIST]({ commit, state }, city) {
    commit(SET_OPTIONS_CITY, city)
    commit(SET_DATA_READY, false)
    commit(SET_LOCATIONS_LIST, await helpers.getLocationsList(state.options))
    commit(SET_DATA_READY, true)
  }
}