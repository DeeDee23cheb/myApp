import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/my-own-works",
      name: "myOwnWorks",
      component: () => import("./views/MyOwnWorks.vue"),
      children: [
        {
          path: "/my-own-works/slider",
          name: "Slider",
          component: () => import("./views/Slider.vue")
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    }
  ]
});
