import { createRouter, createWebHistory } from 'vue-router'
import Product from '../components/views/Product.vue'
import Store from '../components/views/Store.vue'
import About from '../components/views/About.vue'
import Support from '../components/views/Support.vue'
import Profile from '../components/views/Profile.vue'
import Login from '../components/views/Login.vue'
import Signin from '../components/views/Sigin.vue'
import Home from '../components/views/Home.vue'

const routes = [
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
