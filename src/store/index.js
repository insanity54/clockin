import VuexPersistence from 'vuex-persist';
import Vue from 'vue';
import Vuex from 'vuex';
import employees from './modules/employees'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})


export default new Vuex.Store({
    modules: {
        employees
    },
    plugins: [
      vuexLocal.plugin
    ],
    strict: true
})
