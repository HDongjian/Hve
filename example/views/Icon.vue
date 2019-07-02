<template>
  <h-layout>
    <h-header slot="header">图标</h-header>
    <div slot="content">
      <h-row>
        <h-col :span="12">
          <div class="demo-col1">50%</div>
        </h-col>
        <h-col :span="12">
          <div class="demo-col1">50%</div>
        </h-col>
      </h-row>
      <h-row :gutter="20">
        <h-col :span="8">
          <div class="demo-col1">33%</div>
        </h-col>
        <h-col :span="8">
          <div class="demo-col1">33%</div>
        </h-col>
        <h-col :span="8">
          <div class="demo-col1">33%</div>
        </h-col>
      </h-row>
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

<style lang='less' scoped>

</style>
