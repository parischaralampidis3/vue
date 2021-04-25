import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ToDo from "../components/ToDo.vue";
import ShowToDoTasks from "../views/ShowToDoTasks.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path:"/ToDo",
    name :"ToDo",
    component:ToDo
  },
  {
    path:"/ShowToDoTasks",
    name:"ShowToDoTasks",
    component:ShowToDoTasks

  }
  
];

const router = new VueRouter({
  routes,
});

export default router;
