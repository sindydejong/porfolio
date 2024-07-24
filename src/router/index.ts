import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {   return { top: 0 }  },
  routes: [

    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/overmij',
      name: 'over mij',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OvermijView.vue')
    },

    {
      path: '/cv',
      name: 'cv',
      component: () => import('../views/CvView.vue')
    },

    {
      path: '/projecten',
      name: 'projecten',
      component: () => import('../views/ProjectenView.vue')
    },

    {
      path: '/project/:name',
      name: 'ProjectDetail',
      component: () => import('../views/ProjectDetailView.vue'),
      props: true // Hiermee worden route-params als props doorgegeven aan ProjectDetailView
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
