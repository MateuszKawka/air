<template>
  <div class="uk-card uk-card-default uk-width-1-2@m">
    <div class="uk-card-header">
      <div class="uk-grid-small uk-flex-middle" uk-grid>
        <div class="uk-width-expand">
          <h3 class="uk-card-title uk-margin-remove-bottom">{{ city.city }} | {{ city.country }}</h3>
        </div>
      </div>
    </div>
    <div class="uk-card-body">
      <p class="uk-text-meta uk-margin-remove-top">Locations: {{ city.locations }}</p>
      <p class="uk-text-meta uk-margin-remove-top">Measurements: {{ city.count }}</p>
    </div>
    <div class="uk-card-footer">
      <span uk-icon="heart"></span>
      <a href="#" class="uk-button uk-button-text" @click="getLocations">Show locations</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityComponent",
  props: {
    city: {
      type: Object,
      required: true
    }
  },
  methods: {
    getLocations() {
      this.$store.commit("setdataReady", false);
      this.$store
        .dispatch("getLocationsList")
        .then(() => this.$store.commit("setdataReady", true))
        .then(() => this.$router.push("/locations"));
    }
  }
};
</script>
