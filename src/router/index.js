import Vue from 'vue'
import store from '../store'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        requiresAuth: true,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['Auth/isLoggedIn']) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
