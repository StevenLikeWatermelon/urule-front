<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <urule :initData="initData" @success="getSuccess" @error="getError"/>
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
      initData: {
        name: 'rule',
        lhs: {
          criterion: {
            criterions: [
              {
                op: 'GreaterThen',
                left: {
                  leftPart: {
                    keyName: 'test1',
                    variableCategory: 't1',
                    datatype: 'String'
                  },
                  type: 'parameter'
                },
                value: {
                  content: '444',
                  valueType: 'Input'
                },
                necessaryClassList: []
              }
            ],
            junctionType: 'and'
          }
        }
      }
    }
  },
  methods: {
    getSuccess (data) {
      console.log(data)
    },
    getError (error) {
      console.log(error)
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
