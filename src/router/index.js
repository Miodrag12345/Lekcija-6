import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import ProductsView from '@/views/ProductsView.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    {path:'/products', name:'Products', component: ProductsView},
    {path:'/:pathMatch(.*)*',name:'PageNotFound', component:PageNotFound },

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router