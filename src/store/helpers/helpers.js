import { entries } from './entries';

export const helpers = {
  getCountriesList: options => fetch(entries.countriesList(options))
    .then(v => v.json())
    .then(v => v.results),
  getCitiesList: options => fetch(entries.citiesList(options))
    .then(v => v.json())
    .then(v => v.results),
  getLocationsList: options => fetch(entries.locationsList(options))
    .then(v => v.json())
    .then(v => v.results),
}