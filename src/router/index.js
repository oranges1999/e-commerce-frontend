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
    // End Admin

    // 404
    {
      path: "/:pathMatch(.*)*",
      name: 'notFound',
      component: () => import('../views/User/404View.vue'),
    },
    // End 404
  ],
})

export default router
