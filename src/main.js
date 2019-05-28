import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './style.scss'
Vue.config.productionTip = false
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
