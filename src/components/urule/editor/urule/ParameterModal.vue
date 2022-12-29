<template>
  <xl-dialog
    title="提示"
    :visible.sync="dialogVisible"
    append-to-body
    :close-on-press-escape="false"
    :show-close="false"
    :close-on-click-modal="false"
    width="60%"
  >
    <xl-cascader v-if="dialogVisible" v-model="selectValue" style="width: 60%" filterable :props="props" />
    <span slot="footer" class="dialog-footer">
      <xl-button @click="closeModal">取 消</xl-button>
      <xl-button type="primary" @click="confirmSelect">确 定</xl-button>
    </span>
  </xl-dialog>
</template>

<script>
let id = 0
export default {
  data() {
    return {
      dialogVisible: false,
      selectValue: [],
      allCascaderNodesArr: [],
      props: {
        lazy: true,
        checkStrictly: true,
        lazyLoad: (node, resolve) => {
          const { level } = node
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 })
              .map(item => ({
                value: ++id,
                label: `选项${id}`,
                leaf: level >= 2
              }))
            this.allCascaderNodesArr.push(...nodes)
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes)
          }, 1000)
        }
      }
    }
  },
  methods: {
    showModal(callback) {
      this.selectValue = []
      this.allCascaderNodesArr = []
      this.dialogVisible = true
      window.getSelectedParameter = callback
    },
    closeModal() {
      this.dialogVisible = false
    },
    confirmSelect() {
      console.log(this.selectValue)
      if (this.selectValue.length > 0) {
        const allLabel = this.allCascaderNodesArr.filter(item => this.selectValue.includes(item.value)).map(item => item.label).join('.')
        window.getSelectedParameter({
          variableCategory: allLabel || ''
        })
        this.closeModal()
      } else {
        this.$message.error('请先选择参数')
      }
    }
  }
}
</script>
