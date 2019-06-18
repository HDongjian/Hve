<template>
  <div :class="wrapClasses">
    <i v-if="clearable&&nativeInputValue&&!disabled" @click="handleClear" class="h-icon icon-clear clear-icon"></i>
    <i v-else-if="icon" :class="`h-icon icon-${icon}`"></i>
    <input :disabled="disabled" :placeholder="placeholder" :maxlength="maxlength" :type="type" @input="handleInput" ref="input" :class="inputClasses">
  </div>
</template>

<script>
const prefixCls = 'h-input'
export default {
  name: 'h-input',
  data () {
    return {
    }
  },
  props: {
    size: { type: String, default: 'normal' },
    disabled: { type: Boolean, default: false },
    align: { type: String, default: 'left' },
    value: [String, Number],
    type: { type: String, default: 'text' },
    maxlength: { type: Number },
    placeholder: { type: String },
    clearable: { type: Boolean, default: false },
    icon: { type: String },
    border: { type: String, default: 'around' }
  },
  watch: {
    nativeInputValue () {
      this.setNativeInputValue()
    }
  },
  computed: {
    wrapClasses () {
      return [
        `${prefixCls}-wrapper`
      ]
    },
    inputClasses () {
      return [
        `${prefixCls}`,
        `${prefixCls}-${this.size}`,
        `${prefixCls}-${this.border}`,
        `ta-${this.align}`,
        {
          [`${prefixCls}-icon`]: this.clearable || !!this.icon
        }
      ]
    },
    nativeInputValue () {
      return this.value === null || this.value === undefined ? '' : String(this.value)
    }
  },
  created () {},
  mounted () {
    this.setNativeInputValue()
  },
  methods: {
    handleInput (event) {
      if (event.target.value === this.nativeInputValue) return
      this.$emit('input', event.target.value)
    },
    setNativeInputValue () {
      const input = this.getInput()
      if (!input) return
      if (input.value === this.nativeInputValue) return
      input.value = this.nativeInputValue
    },
    getInput () {
      return this.$refs.input || this.$refs.textarea
    },
    handleClear () {
      this.$emit('input', '')
    }
  }
}
</script>

<style lang='less'>

</style>
