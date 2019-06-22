<template>
<div>
  <h-layout>
    <h-header slot="header" :isBack="false">组件</h-header>
    <div slot="content">
      <h-group title="Base" align='center'>
        <h-cell title="Button 按钮 " @click="$router.push('button')"></h-cell>
      </h-group>
      <h-group title="Layout" align='center'>
        <h-cell title="Header 头部" @click="$router.push('header')"></h-cell>
        <h-cell title="Layout 布局" @click="$router.push('layout')"></h-cell>
        <h-cell title="Cell 行" @click="$router.push('cell')"></h-cell>
      </h-group>
      <h-group title="Form" align='center'>
        <h-cell title="Input 输入框" @click="$router.push('input')"></h-cell>
        <h-cell title="Uploader 上传" @click="$router.push('uploader')"></h-cell>
      </h-group>
      <h-group title="View" align='center'>
        <h-cell title="Message 全局消息" @click="$router.push('message')"></h-cell>
      </h-group>
    </div>
  </h-layout>
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
  methods: {}
}
</script>

<style lang='less'>

</style>
