<template>
  <button :class="classes" @click="handleClickLink" >
    <i v-if="icon" :class="iconClass"></i>
    <slot></slot>
  </button>
</template>

<script>
const prefixCls = 'h-btn'
export default {
  name: 'b-button',
  props: {
    type: { type: String, default: 'default' },
    size: { type: String, default: 'normal' },
    plain: { type: Boolean, default: false },
    auto: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    icon: { type: String }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.size}`,
        this.plain ? `${prefixCls}-plain-${this.type}` : `${prefixCls}-${this.type}`,
        {
          [`${prefixCls}-auto`]: this.auto,
          [`${prefixCls}-circle`]: this.circle
        }
      ]
    },
    iconClass () {
      return ['h-icon', 'h-btn-icon', {
        [`icon-${this.icon}`]: this.icon
      }]
    }
  },
  methods: {
    handleClickLink (event) {
      this.$emit('click', event)
    }
  }
}
</script>
