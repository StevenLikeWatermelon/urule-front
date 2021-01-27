<template>
  <xl-dialog
    title="选择参数和字段"
    :visible.sync="dialogVisible"
    append-to-body
    :close-on-press-escape="false"
    :show-close="false"
    :close-on-click-modal="false"
    width="60%"
  >
    <div class="content-search">
      <span>如需筛选输入参数。默认显示参数前20条</span>
      <xl-input
        v-model="valueOfParamsInput"
        placeholder="先搜索参数后再选择"
        @blur="clearAllNodes"
      />
    </div>
    <xl-cascader v-if="dialogVisible && refresh" v-model="selectValue" style="width: 600px" filterable :props="props" />
    <span slot="footer" class="dialog-footer">
      <xl-button @click="closeModal">取 消</xl-button>
      <xl-button type="primary" @click="confirmSelect">确 定</xl-button>
    </span>
  </xl-dialog>
</template>

<script>
import { getParams } from '@/api/param'
import { fieldsType } from '@/api/type'
export default {
  data() {
    return {
      dialogVisible: false,
      refresh: true,
      selectValue: [],
      allCascaderNodesArr: [],
      valueOfParamsInput: '',
      props: {
        lazy: true,
        checkStrictly: true,
        lazyLoad: (node, resolve) => {
          const { level } = node
          console.log(level)
          if (level === 0) {
            getParams({
              ruleParamNameLike: this.valueOfParamsInput,
              page: 1,
              pageSize: 10
            }).then(res => {
              const nodes = res.data.datas.map(item => ({
                value: item.id,
                ruleParamType: item.ruleParamType,
                label: item.ruleParamName,
                leaf: false
              }))
              this.allCascaderNodesArr.push(...nodes)
              resolve(nodes)
            })
          } else {
            console.log(node.data.ruleParamType)
            fieldsType(node.data.ruleParamType).then(res => {
              const nodes = res.data.map(item => ({
                value: item.id,
                ruleParamType: item.fieldType,
                label: item.fieldTypeName,
                leaf: false
              }))
              this.allCascaderNodesArr.push(...nodes)
              resolve(nodes)
            })
          }
        }
      }
    }
  },
  methods: {
    showModal(callback) {
      this.selectValue = []
      this.allCascaderNodesArr = []
      this.dialogVisible = true
      if (callback) {
        window.getSelectedParameter = callback
      }
    },
    closeModal() {
      this.dialogVisible = false
    },
    clearAllNodes() {
      this.refresh = false
      this.allCascaderNodesArr = []
      this.$nextTick(() => {
        this.refresh = true
      })
    },
    confirmSelect() {
      if (this.selectValue.length > 0) {
        const allLabel = this.allCascaderNodesArr.filter(item => this.selectValue.includes(item.value)).map(item => item.label).join('.')
        if (window.getSelectedParameter) {
          window.getSelectedParameter({
            variableCategory: allLabel || ''
          })
        }
        this.$emit('getSelectedParameter', allLabel)
        this.closeModal()
      } else {
        this.$message.error('请先选择参数')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content-search {
  width: 500px;
  margin-bottom: 25px;
}
</style>
