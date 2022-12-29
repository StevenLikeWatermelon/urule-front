<template>
    <div id="container" />
</template>

<script>
// import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../jquery.handsontable.full.min.css';
import '../bootstrap-table.min.css';
import '../context.standalone.css';
import '../../css/iconfont.css';
import '../urule/ruleset.css';
import '../common/jquery.utils.js';
import '../jquery.handsontable.full.js';
import '../bootstrap-table.min.js';
import '../Math.uuid.js';
import '../../Remark.js';
import '../common/URule.js';
import '../common/contextMenu.js';
import '../common/Context.js';
import '../urule/RuleFactory.js';
import '../common/ComparisonOperator.js';
import '../common/ComplexArithmetic.js';
import '../common/VariableValue.js';
import '../common/ResourceListDialog.js';
import '../common/ResourceVersionDialog.js';
import '../common/ConstantValue.js';
import '../urule/ActionType.js';
import '../urule/PrintAction.js';
import '../urule/AssignmentAction.js';
import '../urule/ActionType.js';
import '../urule/SimpleArithmetic.js';
import '../urule/RuleProperty.js';
import './Join.js';
import './Connection.js';
import '../common/InputType.js';
import '../common/NextType.js';
import '../common/Paren.js';
import '../common/MethodParameter.js';
import '../common/MethodAction.js';
import '../common/ParameterValue.js';
import '../common/MethodValue.js';
import '../common/FunctionProperty.js';
import '../common/FunctionParameter.js';
import '../common/FunctionValue.js';
import '../common/SimpleValue.js';
import './Condition.js';
import './CellCondition.js';
import './CellContent.js';
import './CellExecuteMethod.js';
import './renderers.js';
import '../table/manualColumnResize.js';
import '../table/manualRowResize.js';
import '../urule/Rule.js';
import './DecisionTable.js';


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
            new URule.DecisionTable('container');
            // container.urule(initData, this.successCallBack, this.errorCallback, this.manualSave)
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
