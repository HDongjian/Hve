<template>
  <div class="demo-header">
    <h-header title="使用TITLE"></h-header>
    <h-header>使用SLOT</h-header>
    <h-header>
      <template slot="left">返回</template>
    </h-header>
    <h-header>
      <template slot="right">更多</template>
    </h-header>
    <h-header :backfunction = 'back' ismore></h-header>
    <h-header :isBack="false">无返回键</h-header>
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
    back () {
      console.log(12)
    }
  }
}
</script>

<style lang='less'>
.demo-header{
  >div{
    margin-bottom: 10px;
  }
}
</style>
