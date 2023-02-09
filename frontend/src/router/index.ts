import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import Login from '../views/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'task',
        component: () => import('@/views/Task.vue')
      },
      {
        path: 'task/:id',
        component: () => import('@/views/TaskDetails.vue')
      },
      {
        path: 'projects',
        component: () => import('@/views/Projects.vue')
      },
      {
        path: 'project/:id',
        component: () => import('@/views/ProjectDetails.vue')
      },
      {
        path: 'timerecord',
        component: () => import('@/views/Timerecord.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
