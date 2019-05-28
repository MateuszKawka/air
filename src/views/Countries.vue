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
    this.$store.commit("setdataReady", false);
    this.$store
      .dispatch("getCountriesList")
      .then(() => this.$store.commit("setdataReady", true));
  }
};
</script>