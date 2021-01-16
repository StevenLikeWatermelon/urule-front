<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <urule :initData="initData" msg="Welcome to Your Vue.js App"/>
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
                    variableName: 'uuu',
                    variableLabel: 'uuu',
                    variableCategory: 'test',
                    datatype: 'String'
                  },
                  type: 'variable'
                },
                value: {
                  content: '4444',
                  valueType: 'Input'
                },
                necessaryClassList: []
              },
              {
                op: 'GreaterThen',
                left: {
                  leftPart: {
                    variableName: 'kkk',
                    variableLabel: 'kkk',
                    variableCategory: 'test',
                    datatype: 'String'
                  },
                  type: 'variable'
                },
                value: {
                  content: '000',
                  valueType: 'Input'
                },
                necessaryClassList: []
              },
              {
                op: 'GreaterThen',
                left: {
                  leftPart: {
                    keyName: 'test1',
                    variableName: 'uuu',
                    variableLabel: 'uuu',
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
