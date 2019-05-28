<template>
  <div class="spinner-container" v-if="showSpinner">
    <div uk-spinner="ratio: 2"></div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  computed: {
    showSpinner() {
      return !this.$store.state.dataReady;
    }
  }
};
</script>

<style scoped>
.spinner-container {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 2;
  top: 0;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


