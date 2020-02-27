import Vue from 'vue'
import App from './App.vue'
import {
  MdButton,
  MdContent,
  MdTabs,
  MdImage,
  MdCard,
  MdApp,
  MdDivider,
  MdLayout,
  MdSnackbar,
  MdToolbar,
  MdIcon,
  MdList,
  MdAvatar,
  MdEmptyState
} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import router from './router';
import store from './store';


Vue.config.productionTip = false
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdImage)
Vue.use(MdCard)
Vue.use(MdApp)
Vue.use(MdDivider)
Vue.use(MdLayout)
Vue.use(MdSnackbar)
Vue.use(MdToolbar)
Vue.use(MdIcon)
Vue.use(MdList)
Vue.use(MdAvatar)
Vue.use(MdEmptyState)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
