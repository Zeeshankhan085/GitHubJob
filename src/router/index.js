import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SearchPage from "../views/SearchPage.vue";
import JobDetail from "../components/JobDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/positions/:id",
    name: "JobDetail",
    component: JobDetail,
  },
  {
    path: "/position*",
    name: "SearchPage",
    component: SearchPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
