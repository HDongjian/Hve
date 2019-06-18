<template>
  <div class="demo-button">
    <h-header>按钮</h-header>
    <div class="list">
      <h-button>按钮</h-button>
      <h-button auto size="small">小按钮</h-button>
      <h-button size="large">按钮</h-button>
      <h-button type="primary">按钮</h-button>
      <h-button type="info">按钮</h-button>
      <h-button type="success">按钮</h-button>
      <h-button type="warning">按钮</h-button>
      <h-button @click="clickButton" plain auto type="error">按钮</h-button>
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
