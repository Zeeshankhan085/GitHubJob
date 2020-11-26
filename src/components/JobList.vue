<template>
  <div class="flex flex-col items-center">
    <h1 class="mb-4 text-2xl">Showing {{ jobs.length }} jobs</h1>
    <div v-if="jobs" class="shadow-xl w-2/5 m-auto">
      <div
        class="border-solid border-b border-gray-200 last:border-b-0 px-2 py-4 flex"
        v-for="(job, index) in jobs"
        :key="index"
      >
        <div>
          <a :href="`/positions/${job.id}`"
            ><h2
              class="text-lg text-blue-400 font-semibold hover:underline cursor:pointer"
            >
              {{ job.title }}
            </h2></a
          >

          <h4>
            {{ job.company }} -
            <span class="text-green-700">{{ job.type }}</span>
          </h4>
        </div>
        <div class="ml-auto">
          <p class="text-gray-600">{{ job.location }}</p>
          <p class="text-gray-600">{{ parseDate(job.created_at) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api.js";
import moment from "moment";
export default {
  data() {
    return {
      name: "",
      jobs: null
    };
  },

  created() {
    this.searchJobs();
  },

  methods: {
    // fetchDetails(e) {
    //   console.log(e.target);
    //   this.$router.push("/positions/e.target.id");
    // },
    parseDate(date) {
      return moment(date).format("MM-DD-YYYY");
    },
    async searchJobs() {
      const response = await api.searchJobs(this.$route.query);
      this.jobs = response.data;
      console.log("Jobs: ", this.jobs);
    }
  },
  watch: {
    $route() {
      this.searchJobs();
    }
  }
};
</script>

<style scoped></style>
