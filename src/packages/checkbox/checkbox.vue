<template>
  <div :class="classes">
    <span :class="innerClasses"></span>
    <input @change="handleChange" type="checkbox" class="h-checkbox-input">
    <span class="h-checkbox-content">{{label}}</span>
  </div>
</template>

<script>
const prefixCls = 'h-checkbox'
export default {

  data () {
    return {
      currentValue: this.value
    }
  },

  props: {
    value: { type: [String, Number, Boolean], default: false },
    label: { type: String },
    disabled: { type: Boolean }
  },
  watch: {
    value () {
      this.updateModel()
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`, {
          'h-checkbox-disabled': this.disabled
        }
      ]
    },
    innerClasses () {
      return [
        `${prefixCls}-inner`,
        {
          'h-icon icon-success h-checkbox-checked': this.currentValue
        }
      ]
    },
    nativeCheckValue () {
      return this.value === null || this.value === undefined ? '' : this.value
    }
  },
  created () {},
  mounted () {},
  methods: {
    handleChange (event) {
      if (this.disabled) {
        return false
      }

      const checked = event.target.checked
      this.currentValue = checked
      this.$emit('input', checked)
    },
    updateModel () {
      this.currentValue = this.value
    }
  }
}
</script>
