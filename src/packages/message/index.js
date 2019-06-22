import MessageBox from './messageBox.vue'
import Vue from 'vue'
import lib from '../../utils/lib'
const newInstance = () => {
  const _props = {}
  const d = {
    type: 'info',
    content: '',
    duration: 2,
    withIcon: '',
    onClose: () => {}
  }
  const Instance = new Vue({
    render (h) {
      return h(MessageBox, {
        props: _props
      })
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  const messageBox = Instance.$children[0]

  return {
    message (props, type) {
      let nd = { ...d }
      nd.type = type
      if (lib.isString(props)) {
        nd.content = props
        this.messages.push(nd)
        return
      }
      if (lib.isObject(props)) {
        let p = Object.assign(nd, props)
        messageBox.add(p)
        return
      }
      throw new Error('参数错误')
    },
    remove (name) {
      messageBox.close(name)
    },
    destroy (element) {
      messageBox.closeAll()
      setTimeout(function () {
        document.body.removeChild(document.getElementsByClassName(element)[0])
      }, 500)
    }
  }
}
const instance = newInstance()
export default {
  info (options) {
    instance.message(options, 'info')
  },
  success (options) {
    instance.message(options, 'success')
  },
  warning (options) {
    instance.message(options, 'warning')
  },
  error (options) {
    instance.message(options, 'error')
  }
}
