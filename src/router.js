import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import CardDetails from '@/views/CardDetails.vue'
import LoginPage from '@/views/LoginPage.vue'
import SettingsPage from '@/views/SettingsPage.vue'

import { useAuth } from './Composables/useAuth'
const {isAuthenticated} = useAuth()
  

const routes = [
  { path: '/Homework11/', name: 'Home', component: HomePage },
  { path: '/Homework11/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/Homework11/employees/:id', name: 'CardDetails', component: CardDetails },
  { path: '/Homework11/login', name: 'LoginPage', component: LoginPage },
  { path: '/Homework11/settings', name: 'SettingsPage', component: SettingsPage,meta:{requiresAuth: true} },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//Navigation Guard
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({name: 'LoginPage', query: {redirect: to.fullPath}})
  } else {
    next()
  }
})

export default router