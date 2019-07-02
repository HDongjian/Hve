<template>
  <div class="h-row" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentDownward, findBrothersComponents } from '../../utils/assets'
export default {
  name: 'h-row',
  data () {
    return {
    }
  },
  computed: {
    styles () {
      let style = {}
      if (this.gutter !== 0) {
        style = {
          marginLeft: this.gutter / -2 + 'px',
          marginRight: this.gutter / -2 + 'px'
        }
      }
      return style
    }
  },
  props: {
    gutter: { type: Number, default: 0 }
  },
  watch: {
    gutter (val) {
      this.updateGutter(val)
    }
  },
  created () {
    this.$nextTick(this.updateGutter.bind(this, this.gutter))
  },
  mounted () {},
  methods: {
    updateGutter (val) {
      const Col = findComponentDownward(this, 'h-col')
      const Cols = findBrothersComponents(Col, 'h-col', false)
      if (Cols.length) {
        Cols.forEach((child) => {
          if (val !== 0) {
            child.gutter = val
          }
        })
      }
    }
  }
}
</script>
