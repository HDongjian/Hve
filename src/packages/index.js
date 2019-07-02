// Base
import HButton from './button.vue'
import Icon from './icon.vue'
// Layout
import HHeader from './header.vue'
import HLayout from './layout.vue'
import HCell from './cell.vue'
import HGroup from './group.vue'
// Form
import HInput from './input.vue'
import HCheckbox from './checkbox/checkbox.vue'
import HUploader from './uploader.vue'
import { HRow, HCol } from './grid/index'

// View
import Message from './message/index'

const views = {
  HInput,
  HButton,
  Icon,
  HHeader,
  HLayout,
  HUploader,
  HCell,
  HGroup,
  HCheckbox,
  HRow,
  HCol
}
export default {
  install (Vue) {
    Vue.prototype.$Message = Message
    for (const name in views) {
      Vue.component(name, views[name])
    }
  }
}
