import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
// import Archive from '../views/Archive.vue'
import Post from '../views/Post.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/:category',
    name: 'category',
    component: Category
  },
  {
    path: '/:category/:name',
    name: 'post',
    component: Post
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
