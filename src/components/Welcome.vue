<template>
  <div class="uk-child-width-expand@s uk-text-center" uk-grid>
    <p>{{ welcomeText }}</p>
    <router-link tag="button" to="/air" class="uk-button uk-button-primary">Get started</router-link>
  </div>
</template>

<script>
export default {
  name: 'WelcomeComp',
  props: {
    welcomeText: {
      type: String,
      required: true
    }
  }
}
</script>
