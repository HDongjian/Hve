import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Button from './views/Button.vue'
import Input from './views/Input.vue'
import Header from './views/Header.vue'
import Layout from './views/Layout.vue'
import Uploader from './views/Uploader.vue'
import Message from './views/Message.vue'
import Cell from './views/Cell.vue'
import Checkbox from './views/Checkbox.vue'
import Grid from './views/Grid.vue'
import Icon from './views/Icon.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/button', name: 'button', component: Button },
    { path: '/input', name: 'input', component: Input },
    { path: '/header', name: 'header', component: Header },
    { path: '/layout', name: 'layout', component: Layout },
    { path: '/uploader', name: 'uploader', component: Uploader },
    { path: '/message', name: 'message', component: Message },
    { path: '/cell', name: 'cell', component: Cell },
    { path: '/checkbox', name: 'checkbox', component: Checkbox },
    { path: '/grid', name: 'grid', component: Grid },
    { path: '/icon', name: 'icon', component: Icon }
  ]
})
