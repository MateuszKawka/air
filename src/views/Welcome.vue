<template>
  <Welcome :welcomeText="welcomeMessage" />
</template>

<script>
import Welcome from "@/components/Welcome.vue";

export default {
  name: "WelcomeView",
  components: {
    Welcome
  },
  data() {
    return {
      welcomeMessage: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`
    };
  }
};
</script>
