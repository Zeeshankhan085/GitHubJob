<template>
  <div class="px-8 w-full py-2 m-auto sm:px-10">
    <form
      @submit.prevent="search"
      class="flex flex-col justify-center items-center space-y-4 md:space-y-0 md:space-x-4 md:flex-row"
    >
      <div class="flex flex-col">
        <h6>Job Description</h6>
        <div class="flex  flex-col items-center">
          <input
            v-model="searchTerm"
            placeholder="Filter by title, benefits, companies, expertise"
            class="bg-gray-300 z-10 focus:outline-none inline-block px-2 py-4 mt-2 w-72 h-6 text-sm"
            type="text"
          />
        </div>
      </div>
      <div class="flex flex-col">
        <h6>Location</h6>
        <div class="flex  flex-col items-center">
          <input
            v-model="location"
            placeholder="Filter by city, state, zip code or country"
            class="focus:outline-none bg-gray-300 z-10 inline-block px-2 py-4  mt-2 w-72  h-6 text-sm"
            type="text"
          />
         
        </div>
      </div>
      <div class="z-10">
        <input id="job-type" v-model="fullTime" type="checkbox" />
        <label class="ml-2 text-xs" for="job-type">Full Time Only</label>
      </div>

      <div class="z-10">
        <button
          @click="search"
          class=" focus:outline-none text-sm flex items-center justify-center bg-green-500 px-6 py-2 h-8"
        >
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import qs from "qs";


export default {
  components: {
  },
  data() {
    return {
      searchTerm: "",
      jobs: null,
      location: "",
      fullTime: false,
    }
  },
  methods: {
    search() {

      this.$router.push(`/positions?${this.queryString}`).catch(() => {});
    },
    setLocation(el) {

      this.location = el;
    },
    setState(el) {
      this.searchTerm = el;
    },
    filterList1() {
      this.filteredList1 = this.list1.filter(el => {
        return el.toLowerCase().startsWith(this.searchTerm.toLowerCase());
      });
    },
    filterList2() {
      this.filteredList2 = this.list2.filter(el => {
        return el.toLowerCase().startsWith(this.location.toLowerCase());
      });
    }
  },
  computed: {
    queryString() {
      if (this.fullTime)
        return qs.stringify({
          description: this.searchTerm,
          location: this.location,
          full_time: "on"
        });
      return qs.stringify({
        description: this.searchTerm,
        location: this.location
      });
    }
  }
};
</script>

<style scoped></style>
