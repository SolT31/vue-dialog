import Vue from 'vue'
import App from './components/Common'
import router from './router'
import dialogs from './plugins/dialogs'

Vue.config.productionTip = false

Vue.use(dialogs)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
