import './publib-path.js'
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
var instance = null
function render(props) {
  instance = new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
}
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
// 导出qiankun生命周期
export async function bootstrap(props) { };
export async function mount(props) {
  render()
};
export async function unmount(props) {
  instance.$destroy()
  instance = null
};
export async function update(props) {
  console.log('update props', props);
}
