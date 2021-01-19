<template>
  <div>
    <urule :init-data="initData" @success="getSuccess" @error="getError" />
  </div>
</template>

<script>
import urule from '@/components/urule/editor/urule/index.vue'

export default {
  name: 'App',
  components: {
    urule
  },
  data() {
    return {
      initData: {
        name: 'rule',
        lhs: {
          criterion: {
            criterions: [
              {
                op: 'GreaterThen',
                left: {
                  variableCategory: 't1'
                },
                value: {
                  content: '444',
                  valueType: 'Input'
                }
              }
            ],
            junctionType: 'and'
          }
        }
      }
    }
  },
  methods: {
    getSuccess(data) {
      console.log(data)
    },
    getError(error) {
      this.$message.error(error)
    }
  }
}
</script>
