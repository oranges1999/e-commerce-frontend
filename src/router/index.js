import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/User/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // User
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/User/AboutView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/User/SignUpView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/User/LoginView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/User/ProfileView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/User/ContactView.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/User/ProductView.vue'),
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/User/WishListView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/User/CartView.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/User/CheckoutView.vue'),
    },
    // End User

    // Admin
    {
      path: '/admin/login',
      name: 'admin.login',
      component: () => import('../views/Admin/LoginView.vue'),
    },
    {
      path: '/admin/dashboard',
      name: 'admin.dashboard',
      component: () => import('../views/Admin/Dashboard.vue'),
    },
    {
      path: '/admin/all-products',
      name: 'admin.products',
      component: () => import('../views/Admin/Products/Index.vue'),
    },
    {
      path: '/admin/all-products/create',
      name: 'admin.products.create',
      component: () => import('../views/Admin/Products/Create.vue'),
    },
    {
      path: '/admin/all-products/edit',
      name: 'admin.products.edit',
      component: () => import('../views/Admin/Products/Update.vue'),
    },
    {
      path: '/admin/orders',
      name: 'admin.orders.index',
      component: () => import('../views/Admin/Orders/Index.vue'),
    },
    {
      path: '/admin/orders/show',
      name: 'admin.orders.show',
      component: () => import('../views/Admin/Orders/Show.vue'),
    },
    {
      path: '/admin/users',
      name: 'admin.users.index',
      component: () => import('../views/Admin/Users/Index.vue'),
    },
    {
      path: '/admin/users/show',
      name: 'admin.users.show',
      component: () => import('../views/Admin/Users/Show.vue'),
    },
    // End Admin

    // 404
    {
      path: "/:pathMatch(.*)*",
      name: 'notFound',
      component: () => import('../views/User/404View.vue'),
    },
  ],
})

export default router
