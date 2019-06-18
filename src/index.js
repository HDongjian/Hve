
import './styles/index.less'
import Packages from './packages'
import Utils from './utils/index'

const install = function (Vue) {
  Vue.use(Utils)
  Vue.use(Packages)
}

export default {
  install
}
