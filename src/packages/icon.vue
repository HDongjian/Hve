<template>
  <i :class="classes" :style="styles"></i>
</template>

<script>
export default {
  name: 'h-icon',
  data () {
    return {
    }
  },
  props: {
    type: { type: String, required: true },
    color: { type: String, default: '#80848f' },
    size: { type: String, default: '16px' }
  },
  computed: {
    classes () {
      return ['h-icon', `icon-${this.type}`]
    },
    styles () {
      return {
        color: this.color,
        fontSize: this.size
      }
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='less'>

</style>
