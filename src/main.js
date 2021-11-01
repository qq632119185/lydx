import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
const app = createApp(App)
app.use(store)
app.use(router)
const appx = app.mount('#app')
// 注册一个全局自定义指令 `v-focus`
// app.directive('focus', {
//     // 当被绑定的元素挂载到 DOM 中时……
//     mounted(el) {
//       // 聚焦元素
//       el.focus()
//     }
//   })
// app.config.optionMergeStrategies.custom = (toVal, fromVal) => {
//     console.log(fromVal, toVal)
//     // => "goodbye!", undefined
//     // => "hello", "goodbye!"
//     return fromVal || toVal
//   }