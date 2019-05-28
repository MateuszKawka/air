<template>
  <div id="app">
    <Header />
    <Spinner />
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/UI/Header'
import Spinner from '@/components/UI/Spinner'
export default {
  name: 'App',
  components: {
    Header,
    Spinner
  }
}
</script>


<style lang="scss">

</style>
