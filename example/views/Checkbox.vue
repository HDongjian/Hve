<template>
  <h-layout>
    <h-header slot="header">复选框</h-header>
    <div slot="content">
      <h-checkbox v-model="value" label="复选框"></h-checkbox>
      <h-checkbox v-model="value" :disabled="true" label="只读"></h-checkbox>
    </div>
  </h-layout>
</template>

<script>
export default {

  data () {
    return {
      value: true,
      data: [{
        label: 'A',
        value: 1
      }, {
        label: 'B',
        value: 2
      }]
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang='less' scoped>

</style>
