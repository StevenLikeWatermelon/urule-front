<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <urule :initData="initData" />
  </div>
</template>

<script>
import urule from './components/urule/editor/urule/index.vue'

export default {
  name: 'App',
  components: {
    urule
  },
  data () {
    return {
      initData: {}
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
