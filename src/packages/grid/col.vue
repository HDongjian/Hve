<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'h-col',
  data () {
    return {
      gutter: 0
    }
  },
  props: {
    span: [String, Number]
  },
  computed: {
    classes () {
      return [
        'h-col', {
          [`h-col-span-${this.span}`]: this.span
        }
      ]
    },
    styles () {
      let style = {}
      if (this.gutter !== 0) {
        style = {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
      return style
    }
  }
}
</script>
