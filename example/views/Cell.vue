<template>
  <h-layout>
    <h-header slot="header">行</h-header>
    <div slot="content">
      <h-cell title="默认显示">内容</h-cell>
      <h-cell title="超出不隐藏">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</h-cell>
      <h-cell :tooltip="true" title="内容超出隐藏">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</h-cell>
      <h-cell :islink="false" title="取消箭头">无箭头</h-cell>
      <h-cell title="标题标题标题标题标题标题标题标题标题标题标题标题标题">标题超出不隐藏</h-cell>
      <h-cell :tooltip="true" title="标题标题标题标题标题标题标题标题标题标题标题标题标题">标题超出隐藏</h-cell>
    </div>
  </h-layout>
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
