<template>
  <div class="uk-card uk-card-default uk-width-1-2@m">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">{{ country.name }}</h3>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <p class="uk-text-meta uk-margin-remove-top">
            Cities: {{ country.cities }}
      </p>
      <p class="uk-text-meta uk-margin-remove-top">
            Locations: {{ country.locations }}
      </p>
      <p class="uk-text-meta uk-margin-remove-top">
            Measurements: {{ country.count }}
      </p>
    </div>
    <div class="uk-card-footer">
      <a href="#" class="uk-button uk-button-text" @click="getCountry">Show cities</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryComponent',
  props: {
    country: {
      type: Object,
      required: true
    }
  },
  methods: {
    getCountry() {
      this.$store.commit('setdataReady', false)
      this.$store.dispatch('getCitiesList')
      .then(() => this.$store.commit('setdataReady', true))
      .then(() => this.$router.push('/cities'));
    }
  }
}
</script>
