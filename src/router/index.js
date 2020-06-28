import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Admin from "../pages/Admin.vue";
import Cart from "../pages/Cart.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  }
];

const router = new VueRouter({
  routes
});

export default router;
