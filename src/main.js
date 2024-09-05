
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false //设置为 false，可以禁止在控制台输出生产提示。

import store from "@/store";// 可以省略index.js



//2.全局注册
new Vue({
  render: h => h(App),
  store // 所有组件都能访问到store这个仓库
}).$mount('#app')

