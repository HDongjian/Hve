<template>
  <div @click="handleClick" :class="classes">
    <div :class="titClass">
      <slot name="title">{{title}}</slot>
    </div>
    <div :class="cntClass">
      <slot>{{content}}</slot>
    </div>
    <i v-if="islink" class="h-icon h-cell-link-icon icon-arrow"></i>
  </div>
</template>

<script>
const prefixCls = 'h-cell'
export default {

  data () {
    return {
    }
  },
  props: {
    title: { type: String, default: '标题' },
    content: { type: String },
    islink: { type: Boolean, default: true },
    align: { type: String, default: 'right' },
    tooltip: { type: Boolean, default: false }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-link`]: this.islink,
          [`${prefixCls}-tooltip`]: this.tooltip
        }
      ]
    },
    titClass () {
      return [
        `${prefixCls}-title`,
        {
          [`${prefixCls}-title-tooltip`]: this.tooltip
        }
      ]
    },
    cntClass () {
      return [
        `${prefixCls}-content`,
        `${prefixCls}-content-tx-${this.align}`,
        {
          [`${prefixCls}-content-tooltip`]: this.tooltip
        }
      ]
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
