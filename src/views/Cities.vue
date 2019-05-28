<template>
  <CitiesList />
</template>

<script>
// @ is an alias to /src
import CitiesList from '@/components/CitiesList/CitiesList.vue'

export default {
  name: 'CountriesView',
  components: {
    CitiesList
  },
  methods: {
    ss() {
      this.$store.dispatch('getCitiesList')
    }
  }
}
</script>