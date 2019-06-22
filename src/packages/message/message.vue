<template>
  <transition name="move-up" appear>
    <div :class="classes">
      <div class="h-message-cnt">
        <i :class="iconClasses"></i>
        <span class="h-message-des">{{content}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
import { clearTimeout } from 'timers'
const prefixCls = 'h-message'
export default {

  data () {
    return {
      closeTimer: null,
      iconMap: {
        'info': 'info',
        'success': 'checked',
        'warning': 'warning-o',
        'error': 'clear'
      }
    }
  },
  props: {
    type: { type: String },
    content: { type: String },
    duration: { type: Number },
    withIcon: { type: String },
    onClose: { type: Function }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`
      ]
    },
    iconClasses () {
      return ['h-icon', 'h-message-icon', `h-message-icon-${this.type}`, `icon-${this.iconMap[this.type]}`]
    }
  },
  mounted () {
    this.closeTimer = setTimeout(() => {
      this.$parent.close()
      this.onClose()
    }, this.duration * 1000)
  },
  methods: {
    clearTimer () {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer)
        this.clearTimer = null
      }
    }
  }
}
</script>

<style lang='less'>

</style>
