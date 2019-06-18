import './rem'
import lib from './lib.js'
export default {
  install: function (Vue) {
    Vue.lib = Vue.prototype.$lib = lib
  }
}
