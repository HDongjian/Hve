<template>
  <div :class="classes" :style="styles">
    <div ref="top" class="h-layout-header">
      <slot name="header"></slot>
    </div>
    <div ref="content" class="h-layout-content">
      <slot name="content"></slot>
    </div>
    <div ref="bottom" class="h-layout-bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
import { rp } from '../utils/rem'
import { getClient } from '../utils/lib'
const prefixCls = 'h-layout'
export default {
  name: 'h-layout',
  data () {
    return {
      device: {}
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`
      ]
    },
    styles () {
      return {
        height: `${this.device.height}px`,
        width: `${this.device.width}px`
      }
    }
  },
  created () {
    this.device = getClient()
    rp.addSub((device) => {
      this.device = device
    })
  },
  mounted () {
    this.resizeContent()
  },
  methods: {
    resizeContent () {
      const { top, content, bottom } = this.$refs
      const topH = top.clientHeight
      const bottomH = bottom.clientHeight
      content.style.height = `calc(100% - ${topH + bottomH}px)`
    }
  }
}
</script>
