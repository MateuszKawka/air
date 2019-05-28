<template>
  <LocationsList/>
</template>

<script>
// @ is an alias to /src
import LocationsList from "@/components/LocationsList/LocationsList.vue";

export default {
  name: "LocationsView",
  components: {
    LocationsList
  }
};
</script>