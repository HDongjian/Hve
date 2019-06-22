
import './styles/index.less'
import Packages from './packages'

const install = function (Vue) {
  Vue.use(Packages)
}

export default {
  install
}
