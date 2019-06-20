<template>
  <div :class="classes">
    <div v-if="title" :class="titClasses">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = 'h-group'
export default {

  data () {
    return {
    }
  },
  props: {
    title: { type: String },
    align: { type: String, default: 'left' }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`
      ]
    },
    titClasses () {
      return [
        `${prefixCls}-title`,
        `${prefixCls}-title-${this.align}`
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='less' scoped>

</style>
