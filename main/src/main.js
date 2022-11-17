import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './g.css'
// 导入qiankun
import { registerMicroApps } from 'qiankun';
const childAppList = [{
  name: 'micro-app-child-app',
  entry: 'http://localhost:8236/',
  container: '#MountChildAppNode',
  activeRule: [
    '/portal/router1',
    '/portal/router2'
  ]
}

]
registerMicroApps(childAppList);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
