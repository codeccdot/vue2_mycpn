import Vue from 'vue'

// import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import * as echarts from 'echarts'
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
Vue.prototype.$echarts = echarts
Vue.use(echarts)

import axios from 'axios'
import '../src/components/autoRegister' // 自动注册组件

// websocket
import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
  debug: true, // 设置true可以让你的控制台文字变颜色，更好的调试阅读
  connection: 'http://localhost:4000'
}))

// 百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  ak: 'N1EnuSNkAcCSGGXrymwjgoij0VufNy5N' // 这个地方是官方提供的ak密钥
})

// 富文本
import VueQuillEditor from 'vue-quill-editor'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.prototype.msgSuccess = function(msg) {
  this.$message({ showClose: true, message: msg, type: 'success' })
}

Vue.prototype.msgError = function(msg) {
  this.$message({ showClose: true, message: msg, type: 'error' })
}

Vue.prototype.msgWarning = function(msg) {
  this.$message({ showClose: true, message: msg, type: 'warning' })
}

Vue.prototype.msgInfo = function(msg) {
  this.$message.info(msg)
}

Vue.prototype.$Axios = axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
