import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: () => import('views/home/Home')
        },
        {
            path: '/category',
            component: () => import('views/category/Category')
        }
    ]
})

export default router