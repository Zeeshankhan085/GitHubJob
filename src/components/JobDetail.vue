<template>
  <div class="w-full px-2 md:w-3/5 m-auto">
    <div v-if="currentJob" class="shadow-2xl">
      <div class="px-4 py-8 m-auto">
        <h4 class="text-gray-600 font-semibold">{{ currentJob.location }}</h4>
        <h2 class="text-2xl font-semibold">{{ currentJob.title }}</h2>

        <div
          class="mt-4 border-t-2 border-gray-200 leading-loose"
          v-html="`${addStyle(currentJob.description)}`"
        ></div>
        <div class="mt-6 w-full flex">
          <h2 class="text-lg mr-4">
            How To Apply <span class="fas fa-arrow-right inline-block"></span>
          </h2>
          <a
            class="text-blue-500 ml-2 block"
            v-html="currentJob.how_to_apply"
          ></a>
        </div>
      </div>
    </div>
    <div v-else class="text-center p-4">Loading...</div>
  </div>
</template>

<script>
import api from "../services/api.js";
export default {
  data() {
    return {
      currentJob: null
    };
  },
  methods: {
    parseId(str) {
      return str.split("/").pop();
    },
    addStyle(desc) {
      console.log("in addStyle");
      return desc
        .replace(/<p>/g, '<p class="mt-2">')
        .replace(/<ul>/g, '<ul class="list-disc pl-8">');
    },
    async fetchCurrentJobDetail() {
      const response = await api.fetchCurrentJobDetail(
        this.parseId(window.location.href)
      );
      this.currentJob = await response.data;
    }
  },
  created() {
    this.fetchCurrentJobDetail();
  }
};
</script>

<style  scoped>
</style>
