<template>
  <div class="uk-card uk-card-default uk-width-1-2@m">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">{{ location.location }}</h3>
          <p class="uk-text-meta uk-margin-remove-top">Last update: {{ location.lastUpdated }}</p>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <p class="uk-text-meta uk-margin-remove-top">City: {{ location.city }}</p>
      <p class="uk-text-meta uk-margin-remove-top">Country: {{ location.country }}</p>
      <p class="uk-text-meta uk-margin-remove-top">Measurements: {{ location.count }}</p>
    </div>
    <div class="uk-card-footer">
      <a href="#" class="uk-button uk-button-text">Show location</a>
      <p class="uk-text-meta uk-margin-remove-top">Source: {{ location.sourceName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationComponent",
  props: {
    location: {
      type: Object,
      required: true
    }
  },
  methods: {
    getCountry() {
      this.$store.commit("setdataReady", false);
      this.$store
        .dispatch("getCitiesList")
        .then(() => this.$store.commit("setdataReady", true))
        .then(() => this.$router.push("/cities"));
    }
  }
};
</script>
