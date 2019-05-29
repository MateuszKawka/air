<template>
  <div class="uk-grid-large uk-text-center" uk-grid>
    <div v-for="item in countries" :key="item.id" class="uk-child-width-1-4@s">
      <div class="uk-card uk-card-default uk-card-body">
        <Country :country="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import Country from "@/components/CountriesList/Country";

export default {
  name: "CountriesList",
  computed: {
    countries() {
      return this.$store.getters.countriesList;
    }
  },
  components: {
    Country
  }
};
</script>
