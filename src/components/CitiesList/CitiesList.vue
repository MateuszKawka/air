<template>
  <div class="uk-grid-large uk-text-center" uk-grid>
    <div v-for="item in cities" :key="item.id" class="uk-child-width-1-4@s">
      <div class="uk-card uk-card-default uk-card-body">
        <City :city="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import City from "@/components/CitiesList/City";

export default {
  name: "CitiesList",
  computed: {
    cities() {
      return this.$store.state.citiesList;
    }
  },
  components: {
    City
  }
};
</script>
