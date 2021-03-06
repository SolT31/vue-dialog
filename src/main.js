import Vue from 'vue'
import App from './components/Common'
import router from './router'
import dialogs from './plugins/dialogs'
import kit from './plugins/kit'

Vue.config.productionTip = false

Vue.use(dialogs)
Vue.use(kit)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
