export default {
  countriesList(state) {
    if (state.dataReady && state.countriesList.length > 0) {
      if (state.searchQ.length === 0) {
        return state.countriesList
      } else {
        return state.countriesList.filter(v => {
          if(v.name.toUpperCase().indexOf(state.searchQ.toUpperCase()) > -1) {
            return v
          }
        })
      }
    }
  },
  citiesList(state) {
    if (state.dataReady && state.citiesList.length > 0) {
      if (state.searchQ.length === 0) {
        return state.citiesList
      } else {
        return state.citiesList.filter(v => {
          if(v.city.toUpperCase().indexOf(state.searchQ.toUpperCase()) > -1) {
            return v
          }
        })
      }
    }
  },
  locationsList(state) {
    if (state.dataReady && state.locationsList.length > 0) {
      if (state.searchQ.length === 0) {
        return state.locationsList
      } else {
        return state.locationsList.filter(v => {
          if(v.location.toUpperCase().indexOf(state.searchQ.toUpperCase()) > -1) {
            return v
          }
        })
      }
    }
  }
}