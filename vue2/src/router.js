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
      path: "/score",
      name: "score",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Score.vue")
    },
    {
      path: "/vote",
      name: "vote",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Vote.vue")
    },
    {
      path: "/settings",
      name: "settings",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Settings.vue"),
      beforeEnter: (to, from, next) => {
        localStorage.setItem('user', "admin")
        console.log(localStorage.getItem("user"));
        let user = localStorage.getItem("user");
        if(user === "admin") {
          next("/");
        } else{
          next();
        }
      }
    }
  ]
});
