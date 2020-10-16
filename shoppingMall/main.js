import Vue from 'vue'
import App from './App'
import global from 'util/global.js'
import api from './util/api.js'
import common from './config/common.js'


Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$http = api
Vue.prototype.$fun = common

const app = new Vue({
    ...App
})
app.$mount()
