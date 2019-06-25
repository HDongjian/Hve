<template>
  <div class="demo-message">
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

<style lang='less'>
.demo-message{
  height: 100%;
  width: 100%;
  .list{
    padding:10px;
  }
  button{
    margin-bottom: 10px;
  }
}
</style>
