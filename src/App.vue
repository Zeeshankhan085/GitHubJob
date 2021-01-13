<template>
  <div class="relative" id="app">
     <Header />
    <SearchBar></SearchBar>
    <router-view />
  </div>
</template>


<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    SearchBar,
   Header
  }
};
</script>


<style src="./assets/tailwind.css" />
