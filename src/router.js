import Vue from 'vue'
import VueRouter from 'vue-router'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import Home from './views/Home.vue'
import GeraExcel from './views/GeraExcel.vue'
import Viu from './views/Viu.vue'

Vue.use(VueRouter)

export default new VueRouter({
	//mode: 'history',
	routes: [
		{
			path: '/',
			component: Home
		},
    {
			path: '/about',
			component: About
		},
    {
			path: '/contact',
			component: Contact
		},
		{
			path: '/geraexcel',
			component: GeraExcel
		},
    {
			path: '/viu',
			component: Viu
		}
	]
})