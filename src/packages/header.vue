<template>
  <div ref="header" :class="Classes">
    <div class="h-header-left">
      <slot name="left">
        <i v-if="isBack" @click="back" class="h-icon icon-arrow-left"></i>
      </slot>
    </div>
    <div class="h-header-center"><slot>{{title}}</slot></div>
    <div class="h-header-right">
      <slot name="right">
        <i v-if="ismore" class="h-icon icon-bars"></i>
      </slot>
    </div>
  </div>
</template>

<script>
const prefixCls = 'h-header'
export default {
  name: 'h-header',
  data () {
    return {
    }
  },
  props: {
    title: { type: String, default: '标题' },
    ismore: { type: Boolean, default: false },
    isBack: { type: Boolean, default: true },
    backfunction: { type: Function },
    background: [String, Object, Array]
  },
  computed: {
    Classes () {
      return [
        `${prefixCls}`
      ]
    }
  },
  methods: {
    back () {
      if (this.$lib.isFunction(this.backfunction)) {
        this.backfunction()
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang='less' scoped>

</style>
