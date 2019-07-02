<template>
  <h-layout class="grid">
    <h-header slot="header">栅格</h-header>
    <div slot="content">
      <h-row>
        <h-col :span="12">
          <div class="demo-coll">50%</div>
        </h-col>
        <h-col :span="12">
          <div class="demo-coll">50%</div>
        </h-col>
      </h-row>
      <h-row :gutter="20">
        <h-col :span="8">
          <div class="demo-coll">33%</div>
        </h-col>
        <h-col :span="8">
          <div class="demo-coll">33%</div>
        </h-col>
        <h-col :span="8">
          <div class="demo-coll">33%</div>
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

<style lang='less'>
.grid .demo-coll{
  margin-top: 10px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border:1px solid red;
}
</style>
