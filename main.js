import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import {
	base
} from './static/js/base.js'

App.mpType = 'app'


Vue.use(base)
const app = new Vue({
	...App
})
app.$mount()
