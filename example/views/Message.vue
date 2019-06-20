<template>
  <div class="demo-button">
    <h-header>全局消息</h-header>
    <div class="list">
      <h-button @click="message" type="primary">默认</h-button>
      <h-button  type="info">消息</h-button>
      <h-button  type="success">成功</h-button>
      <h-button  type="warning">警告</h-button>
      <h-button  type="error">错误</h-button>
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
    message () {
      this.$Message.info()
    }
  }
}
</script>

<style lang='less' scoped>

</style>
