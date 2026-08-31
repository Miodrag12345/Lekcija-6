import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '@/views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    {path:'/:pathMatch(.*)*',name:'PageNotFound', component:PageNotFound }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router