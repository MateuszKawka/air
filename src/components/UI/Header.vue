<template>
  <nav class="uk-navbar-container" uk-navbar>
    <a href uk-icon="icon: heart"></a>
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav">
        <li class="uk-active">
          <a @click="$router.go(-1)">Back</a>
        </li>
        <li class="uk-active">
          <a href="#">Filter</a>
        </li>
        <SearchForm/>
      </ul>
    </div>
  </nav>
</template>

<script>
import SearchForm from "@/components/UI/SearchForm";

export default {
  name: "HeaderComponent",
  components: {
    SearchForm
  }
};
</script>

