<template>
  <div class="relative  z-50">
    <div v-if="!jobs" class="text-center p-4">Loading...</div>
    <div v-else class="flex flex-col items-center mt-6">
      <h1 class="mb-4 text-xl">Showing {{ jobs.length }} jobs</h1>
      <div class="shadow-xl w-full px-4 md:w-2/5 m-auto">
        <div
          class="border-solid border-b border-gray-200 last:border-b-0 px-2 py-4 flex justify-between"
          v-for="(job, index) in jobs"
          :key="index"
        >
          <div class="">
            <router-link :to="`/positions/${job.id}`"
              ><h2
                class="text-sm text-blue-400 font-semibold hover:underline cursor:pointer"
              >
                {{ job.title }}
              </h2></router-link
            >

            <h4 class="text-sm">
              {{ job.company }} -
              <span class="text-xs font-semibold text-green-700">{{
                job.type
              }}</span>
            </h4>
          </div>
          <div class="ml-4">
            <p class="text-sm text-gray-600">{{ job.location }}</p>
            <p class="mt- 2 text-xs text-gray-600">
              {{ getDifferenceInDays(job.created_at) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api.js";
// import moment from "moment";
export default {
  data() {
    return {
      jobs: null
    };
  },

  created() {
    this.jobs = null;
    this.searchJobs();
  },

  methods: {
    getDifferenceInDays(date) {
      const d2 = new Date();
      const d1 = new Date(date);

      // time difference
      const timeDiff = Math.abs(d2.getTime() - d1.getTime());

      // days difference
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      // difference
      return `${diffDays} Days ago`;
    },
    // parseDate(date) {
    //   return moment(date).format("MM-DD-YYYY");
    // },

    async searchJobs() {
      this.jobs = null;
      const response = await api.searchJobs(this.$route.query);
      this.jobs = response.data;
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
