import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Plugin from '../../build'

Vue.use(Plugin, {
  scheme: {
    local: {
      login: {
        url: '',
        method: 'post',
        token: 'payload.token'
      },
      profile: {
        url: '',
        method: 'get',
        user: 'payload.profile'
      },
      logout: {
        url: '',
        method: 'get'
      }
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
