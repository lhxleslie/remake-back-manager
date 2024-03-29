import Vue from "vue";
import VueRouter from "vue-router";
import homePage from '../views/homePage.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
];

const router = new VueRouter({
  routes
});

export default router;
