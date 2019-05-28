<template>
  <div class="uk-grid-large uk-text-center" uk-grid>
    <div v-for="item in locations" :key="item.id" class="uk-child-width-1-4@s">
      <div class="uk-card uk-card-default uk-card-body">
        <LocationPreview :location="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import LocationPreview from "@/components/LocationsList/LocationPreview";

export default {
  name: "LocationList",
  computed: {
    locations() {
      return this.$store.state.locationsList;
    }
  },
  components: {
    LocationPreview
  }
};
</script>
