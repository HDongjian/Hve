<template>
  <div :class="classes" :style="styles">
    <Message :type="message.type" :content="message.content" :duration="message.duration" :withIcon="message.withIcon" :onClose="message.onClose" v-for="message in messages" :key="message.name"></Message>
  </div>
</template>

<script>
import Message from './message.vue'
const prefixCls = 'h-message-box'
export default {
  data () {
    return {
      messages: [],
      defalutOptions: {
        type: 'info',
        content: '',
        duration: 2,
        withIcon: ''
      },
      top: 80
    }
  },
  computed: {
    classes () {
      return [
        `${prefixCls}`
      ]
    },
    styles () {
      return {
        top: `${this.top}px`
      }
    }
  },
  components: {
    Message
  },
  created () {},
  mounted () {},
  methods: {
    add (options, type) {
      this.messages.push(options)
    },
    close () {
      this.messages.shift()
    }
  }
}
</script>

<style lang='less' scoped>

</style>
