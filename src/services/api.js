import axios from "axios";
import qs from "qs";
const ROOT_URL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com";

export default {
  searchJobs: function(queryString) {
    console.log("hello");
    //   const URL = queryString.checked ? `${ROOT_URL}/positions.json?{}`

    // console.log(
    //   `hello: ${ROOT_URL}/positions.json?${qs.stringify(queryString)}`
    // );
    return axios.get(`${ROOT_URL}/positions.json?${qs.stringify(queryString)}`);
  },
  fetchCurrentJobDetail(id) {
    return axios.get(`${ROOT_URL}/positions/${id}.json`);
  },
};
