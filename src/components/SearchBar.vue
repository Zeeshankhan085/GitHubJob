<template>
  <div class="w-3/5 py-8 m-auto ">
    <div class="flex ">
      <div class="flex flex-col">
        <h3>Job Description</h3>
        <input
          v-model="searchTerm"
          class="bg-gray-300 p-2 mt-2"
          type="text"
          name=""
          id=""
        />
      </div>
      <div class="flex flex-col ml-4">
        <h3>Location</h3>
        <input
          v-model="location"
          class="bg-gray-300 p-2 mt-2"
          type="text"
          name=""
          id=""
        />
      </div>
      <div class="mt-auto ml-4">
        <input id="job-type" v-model="fullTime" type="checkbox" />
        <label class="ml-2" for="job-type">Full Time Only</label>
      </div>

      <div class=" flex mt-auto ml-8">
        <router-link :to="{ path: `/positions/${queryString}` }">
          <h6 class="focus:outline-none bg-green-500 px-8 h-8">Search</h6>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";

export default {
  data() {
    return {
      searchTerm: "",
      jobs: null,
      location: "",
      fullTime: false
    };
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
  },
  methods: {
    // search() {
    //   this.$router
    //     .push(`/positions?${qs.stringify(this.queryString)}`)
    //     .catch(() => {});
    // }
  }
};
</script>

<style scoped></style>
