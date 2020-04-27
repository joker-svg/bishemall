import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.use(element);
Vue.prototype.$axios = axios;

//axios拦截器设置请求头Authorization
axios.interceptors.request.use(config => {
  //console.log(config);
  config.headers.Authorization = window.localStorage.getItem("userInfo.token");
  return config;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
