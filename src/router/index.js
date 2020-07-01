import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
//import Admin from "../pages/Admin.vue";
import Cart from "../pages/Cart.vue";

import Index from "../pages/admin/Index";
import New from "../pages/admin/New";
import Edit from "../pages/admin/Edit";
import Products from "../pages/admin/Products";

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
    component: Index,
    children: [
      {
        path: "new",
        name: "New",
        component: New
      },
      {
        path: "edit/:id",
        name: "Edit",
        component: Edit
      },
      {
        path: "",
        name: "Products",
        component: Products
      }
    ]
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
