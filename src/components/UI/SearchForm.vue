<template>
  <div class="uk-margin">
            <input class="uk-input" type="text" placeholder="Input" v-model="searchQ">
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  computed: {
    searchQ : {
      get: function() {
        return this.$store.state.searchQ
      },
      set: function(value) {
        this.$store.commit('setSearchQ', value)
      }
    }
  }
}
</script>

