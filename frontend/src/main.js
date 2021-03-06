import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import Vuetify from 'vuetify'

import axios from 'axios'

import VueAnalytics from 'vue-analytics'

import App from '@/App.vue'
import './registerServiceWorker'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

Vue.config.productionTip = false

// more info: https://github.com/MatteoGabriele/vue-analytics
Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GOOGLE_ANALYTICS,
  router
})

Vue.use(Vuetify, {
  iconfont: 'fa',
  icons: {
    'cancel': 'fas fa-ban',
    'menu': 'fas fa-ellipsis-v'
  }
})

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
