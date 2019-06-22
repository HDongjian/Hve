<template>
  <div class="demo-button">
    <h-header>按钮</h-header>
    <div class="list">
      <h-button icon="delete">默认</h-button>
      <h-button icon="search" size="large">大默认</h-button>
      <h-button type="primary">默认</h-button>
      <h-button type="info">消息</h-button>
      <h-button icon="search" type="success">成功</h-button>
      <h-button icon="search" plain type="success">成功</h-button>
      <h-button icon="search" circle type="warning">圆形警告</h-button>
      <h-button circle type="error">圆形错误</h-button>
      <h-button @click="clickButton" plain auto type="error">小按钮</h-button>
      <h-button icon="delete" type="primary">默认</h-button>
      <h-button icon="search" auto size="small">小小按钮</h-button>
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
    clickButton () {
      console.log(2)
    }
  }
}
</script>

<style lang='less'>
.demo-button{
  .list{
    padding:10px;
  }
  button{
    margin-bottom: 10px;
  }
}
</style>
