<template>
  <div class="home">
    <Header />
    <SearchBar />
    <JobList />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from "@/components/SearchBar.vue";
import JobList from "@/components/JobList.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    SearchBar,
    JobList,
    Header,
    Footer
  }
};
</script>
