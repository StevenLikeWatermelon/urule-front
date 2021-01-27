<template>
  <div class="urule-html">
    <urule-html :init-data="initData" :manual-save="manualSave" @success="successCallBack" @error="errorCallBack" />
    <Parameter-modal ref="selectParameter" />
  </div>
</template>

<script>
import uruleHtml from './uruleHtml.vue'
import ParameterModal from './ParameterModal.vue'
export default {
  components: {
    uruleHtml,
    ParameterModal
  },
  props: {
    manualSave: {
      type: Boolean,
      default: true
    },
    initData: {
      type: null,
      default() {
        return {}
      }
    }
  },
  mounted() {
    window.showSelectParameterMenu = this.showSelectParameterMenu
    window.getSelectedParameter = null
  },
  methods: {
    showSelectParameterMenu(callback) {
      this.$refs.selectParameter.showModal(callback)
    },
    successCallBack(data) {
      this.$emit('success', data)
    },
    errorCallBack(error) {
      this.$emit('error', error)
    }
  }
}
</script>

<style>

</style>
