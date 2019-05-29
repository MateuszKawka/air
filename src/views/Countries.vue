<template>
  <CountriesList/>
</template>

<script>
// @ is an alias to /src
import CountriesList from "@/components/CountriesList/CountriesList.vue";

export default {
  name: "CountriesView",
  components: {
    CountriesList
  },
  mounted() {
    this.$store.dispatch("getCountriesList")
  }
};
</script>