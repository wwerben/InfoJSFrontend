import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/oferta',
    name: 'Oferta',
    component: () => import('@/views/Oferta.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('@/views/PostList.vue')
  },
  {
    path: '/post/:documentId',
    name: 'Post',
    component: () => import('@/views/Post.vue'),
    props: true,
  },
  {
    path: '/rfid',
    name: 'rfid',
    component: () => import('@/views/RFID.vue'),
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: () => import('@/views/Contact.vue'),
  },
  {
    path: '/onas',
    name: 'AboutUs',
    component: () => import('@/views/AboutUs.vue'),
  }


  
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
