import {
  SET_COUNTRIES_LIST,
  SET_CITIES_LIST,
  SET_LOCATIONS_LIST,
  SET_DATA_READY,
  SET_SEARCH_Q,
  CLEAR_SEARCH_Q,
  SET_OPTIONS_LIMIT,
  SET_OPTIONS_PAGE,
  SET_OPTIONS_COUNTRY,
  SET_OPTIONS_CITY
} from './mutations.types';

export default {
  [SET_COUNTRIES_LIST]: (state, countries) => state.countriesList = countries,
  [SET_CITIES_LIST]: (state, cities) => state.citiesList = cities,
  [SET_LOCATIONS_LIST]: (state, locations) => state.locationsList = locations,
  [SET_DATA_READY]: (state, ready) => state.dataReady = ready,
  [SET_SEARCH_Q]: (state, searchQ) => state.searchQ = searchQ,
  [CLEAR_SEARCH_Q]: state => state.searchQ = '',
  [SET_OPTIONS_LIMIT]: (state, limit) => state.options.limit = limit,
  [SET_OPTIONS_PAGE]: (state, page) => state.options.page = page,
  [SET_OPTIONS_COUNTRY]: (state, country) => state.options.country = country,
  [SET_OPTIONS_CITY]: (state, city) => state.options.city = city
}