import Vue from 'vue'
import router from './router'

import Config from './config'
import Fun from './function'
import axios from 'axios'
import QRCode from 'qrcode'
import ElementUI from 'element-ui'
import G2 from '@antv/g2'

// 主题（element-ui/lib/theme-chalk/index.css）
import './assets/theme/index.css'
import App from './App.vue'

// 全局组件
Vue.prototype.$ajax = axios;
Vue.prototype.$storage = window.localStorage;
Vue.prototype.$qrcode = QRCode;
Vue.prototype.$G2 = G2;
// 配置
Vue.use(Config)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')