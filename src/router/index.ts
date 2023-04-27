import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/legal',
            name: 'legal',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/LegalView.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('../views/NotFoundView.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash != '') {
            return { selector: to.hash, behavior: 'smooth' }
        }

        if (savedPosition) {
            return savedPosition
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0, behavior: 'smooth' })
            }, 100)
        })
    }
})

export default router
