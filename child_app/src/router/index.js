import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/router1",
    name: "Home",
    meta: { status: '3' },
    component: Home,
  },
  {
    path: "/router2",
    name: "About",
    meta: { status: '4' },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: 'portal',
  routes,
});

export default router;
