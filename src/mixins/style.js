export default {
  data () {
    return {
      device: {}
    }
  },
  computed: {
    styles () {
      return {
        height: `${this.device.height}px`,
        width: `${this.device.width}px`
      }
    }
  },
  created () {
    this.device = this.$lib.getClient()
  }
}
