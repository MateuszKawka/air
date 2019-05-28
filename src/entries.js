export const entries = {
  countriesList: options => {
    let entry = `https://api.openaq.org/v1/countries?`;
    if (options.order_by) {
      entry += `order_by=${options.order_by}`
    }
    if (options.sort) {
      entry += `&sort=${options.sort}`
    }
    if (options.limit) {
      entry += `&limit=${options.limit}`
    }
    if (options.page) {
      entry += `&page=${options.page}`
    }
    return entry
  },
  citiesList: options => {
    let entry = `https://api.openaq.org/v1/cities?`

    if (options.country) {
      entry += `country=${options.country}`
    }

    if (options.order_by) {
      entry += `&order_by=${options.order_by}`
    }
    if (options.sort) {
      entry += `&sort=${options.sort}`
    }
    if (options.limit) {
      entry += `&limit=${options.limit}`
    }
    if (options.page) {
      entry += `&page=${options.page}`
    }
    return entry
  },
  locationsList: options => {
    let entry = `https://api.openaq.org/v1/locations?`

    if (options.country) {
      entry += `country=${options.country}`
    }
    if (options.city) {
      entry += `&city=${options.city}`
    }
    if (options.order_by) {
      entry += `&order_by=${options.order_by}`
    }
    if (options.sort) {
      entry += `&sort=${options.sort}`
    }
    if (options.limit) {
      entry += `&limit=${options.limit}`
    }
    if (options.page) {
      entry += `&page=${options.page}`
    }
    return entry
  }
}