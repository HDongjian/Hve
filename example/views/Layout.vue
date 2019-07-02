<template>
  <div class="hw demo-layout">
    <h-layout>
      <h-header slot="header">布局</h-header>
      <div slot="content" class="content">内容</div>
      <div slot="bottom" class="bottom">
        <h-button circle type="primary" size="large">提交</h-button>
      </div>
    </h-layout>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less'>
.demo-layout{
  .content{
    height: 100%;
    background-color: #7cbce9;
    color:#fff;
    font-size: 30px;
    text-align: center;
  }
  .bottom{
    background-color: #0f8de9;
    padding:4px;
  }
}
</style>
