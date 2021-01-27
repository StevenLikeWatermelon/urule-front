<template>
  <div class="urule-container" />
</template>

<script>
import './bootstrap.min.css'
import '../jquery.datetimepicker.css'
import '../context.standalone.css'
import './ruleset.css'
import '../../css/iconfont.css'
import '../Math.uuid.js'
import '../common/jquery.utils.js'
import '../common/contextMenu.js'
import '../common/URule.js'
import '../common/Context.js'
import '../../Remark.js'
import './RuleFactory.js'
import './RuleProperty.js'
import '../common/ComparisonOperator.js'
import '../common/ComplexArithmetic.js'
import '../common/VariableValue.js'
import '../common/ResourceListDialog.js'
import '../common/ResourceVersionDialog.js'
import '../common/ConstantValue.js'
import './ActionType.js'
import './SimpleArithmetic.js'
import './PrintAction.js'
import './AssignmentAction.js'
import './Join.js'
import './NamedJoin.js'
import './NamedCondition.js'
import './Connection.js'
import '../common/InputType.js'
import '../common/NextType.js'
import '../common/Paren.js'
import '../common/MethodParameter.js'
import '../common/MethodAction.js'
import '../common/ParameterValue.js'
import '../common/MethodValue.js'
import '../common/FunctionProperty.js'
import '../common/FunctionParameter.js'
import '../common/FunctionValue.js'
import '../common/SimpleValue.js'
import './NamedReferenceValue.js'
import './Condition.js'
import './Rule.js'
export default {
  props: ['initData', 'manualSave'],
  data() {
    return {

    }
  },
  mounted() {
    setTimeout(() => {
      const container = $(this.$el)
      let initData = null
      if (this.initData) {
        const keys = Object.keys(this.initData)
        if (keys.length > 0) {
          initData = this.initData
        }
      }
      container.urule(initData, this.successCallBack, this.errorCallback, this.manualSave)
    }, 100)
  },
  methods: {
    successCallBack(data) {
      this.$emit('success', data)
    },
    errorCallback(error) {
      this.$emit('error', error)
    }
  }
}
</script>

<style scoped>
.urule-container {
  width: 100%;
}
</style>
