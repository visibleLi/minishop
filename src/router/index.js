import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: resolve => require(['../components/Home.vue'], resolve),
  },
  {
    path: "/admin",
    name: "Admin",
    component: resolve => require(['../pages/admin/Index'], resolve),
    children: [
      {
        path: "new",
        name: "New",
        component: resolve => require(['../pages/admin/New'], resolve),
      },
      {
        path: "edit/:id",
        name: "Edit",
        component: resolve => require(['../pages/admin/Edit'], resolve),
      },
      {
        path: "",
        name: "Products",
        component: resolve => require(['../pages/admin/Products'], resolve),
      }
    ]
  },
  {
    path: "/cart",
    name: "Cart",
    component: resolve => require(['../pages/Cart.vue'], resolve),
  }
];

const router = new VueRouter({
  routes
});

export default router;
