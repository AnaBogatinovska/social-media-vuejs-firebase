const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Timeline",
        component: () => import("pages/Timeline.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("pages/auth/Login.vue")
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("pages/auth/Signup.vue")
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
