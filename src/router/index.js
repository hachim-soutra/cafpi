import Vue from 'vue'
import VueRouter from 'vue-router'
import config from '../config'

// start page 
import Home from "@/page/Home.vue"
import CreditImmobilier from "@/page/CreditImmobilier.vue"

// end page 

Vue.use(VueRouter)


const routes = [
    { 
        path: '/',     
        name: 'home',
        component: Home 
    },
    { 
        path: '/credit-immobilier',     
        name: 'creditImmobilier',
        component: CreditImmobilier 
    },
]

const router = new VueRouter({
	mode: 'history',
    base: config.base_name,
	routes,
	linkExactActiveClass: 'active',
    scrollBehavior: function (to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    }
})

export default router