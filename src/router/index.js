import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const JobDetail = () => import( /* webpackChunkName: 'detail' */ '../components/JobDetail.vue')

const SearchPage = () => import( /* webpackChunkName: 'detail' */ '../views/SearchPage.vue')



const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/positions",
        name: "SearchPage",
        component: SearchPage,
    },
    {
        path: "/positions/:id",
        name: "JobDetail",
        component: JobDetail,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;