import Vue from 'vue'
import VueRouter from 'vue-router'
//import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Dashboard from '@/modules/admin/Dashboard.vue'
import AddClient from '@/modules/admin/Addclient.vue'
import Payment from '@/modules/admin/Payment.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'login',
        component: Login
    },
    {
        path: '/admin/dashboard',
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: '/admin/add-client',
        component: AddClient
    },
    {
        path: '/admin/payment',
        component: Payment
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router