// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.router = router
Vue.use(VueResource)
Vue.http.options.root = process.env.API


Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  rolesVar: 'type',
  loginData: { url: 'user_token', method: 'POST', redirect: '/', fetchUser: false },
  fetchData: { url: 'auth/user', method: 'GET' },
  refreshData: { url: 'auth/refresh', method: 'GET', atInit: false }
})
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/signup',
    component: SignUp,
    meta: { auth: true }
  },
  {
    path: '/login',
    component: Login,
    meta: { auth: false }
  }]