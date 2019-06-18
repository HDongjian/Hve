import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Button from './views/Button.vue'
import Input from './views/Input.vue'
import Header from './views/Header.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/button', name: 'button', component: Button },
    { path: '/input', name: 'input', component: Input },
    { path: '/header', name: 'header', component: Header }
  ]
})
