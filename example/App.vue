<template>
  <div id="app">
    <transition name="move-right">
      <router-view/>
    </transition>
  </div>
</template>

<style>
#app{
  height: 100%;
  width: 100%;
}
.hw{
  height: 100%;
  width: 100%;
}
</style>
