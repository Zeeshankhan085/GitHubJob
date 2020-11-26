<template>
  <div class="px-20">
    <div class="shadow-2xl w-3/5 px-16 m-auto">
      <div class="px-4 py-8 m-auto" v-if="currentJob">
        <h4 class="text-gray-600 font-semibold">{{ currentJob.location }}</h4>
        <h2 class="text-2xl font-semibold">{{ currentJob.title }}</h2>

        <div
          class="mt-4 border-t-2 border-gray-200 leading-loose"
          v-html="`${addStyle(currentJob.description)}`"
        ></div>
        <div class="mt-6 flex">
          <h2 class="text-lg mr-4">
            How To Apply <span class="fas fa-arrow-right inline-block"></span>
          </h2>
          <div
            class="text-blue-500 ml-2"
            v-html="currentJob.how_to_apply"
          ></div>
        </div>
      </div>
    </div>
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
