// Base
import HButton from './button.vue'
import Icon from './icon.vue'
// Layout
import HHeader from './header.vue'
// Form
import HInput from './input.vue'

const views = {
  HInput,
  HButton,
  Icon,
  HHeader
}
export default {
  install (Vue) {
    for (const name in views) {
      Vue.component(name, views[name])
    }
  }
}
