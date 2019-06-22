<template>
  <div class="demo-button">
    <h-header>全局消息</h-header>
    <div class="list">
      <h-button @click="message('info')" type="primary">默认</h-button>
      <h-button @click="message('info')" type="info">消息</h-button>
      <h-button @click="message('success')" type="success">成功</h-button>
      <h-button @click="message('warning')" type="warning">警告</h-button>
      <h-button @click="message('error')" type="error">错误</h-button>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
    }
  },

  created () {},
  mounted () {},
  methods: {
    message (type) {
      this.$Message[type]({
        content: '发送成功',
        duration: 2,
        onClose () {}
      })
    }
  }
}
</script>

<style lang='less' scoped>

</style>
