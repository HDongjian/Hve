<template>
  <div class="demo-input">
    <h-header>输入框</h-header>
    <div class="list">
      <h-input size="small" :disabled="true"  v-model="data"></h-input>
      <h-input placeholder="请输入" border="bottom" clearable type="password" v-model="data"></h-input>
      <h-input align="right" border="bottom" icon="alipay" size="large" v-model="data"></h-input>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      data: ''
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='less'>
.demo-input{
  .list{
    padding:10px;
  }
  >div{
    margin-bottom: 10px;
  }
}

</style>
