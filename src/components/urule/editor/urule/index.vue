<template>
    <div class="urule-html">
        <!--    <urule-html :init-data="initData" :manual-save="manualSave" @success="successCallBack" @error="errorCallBack" />-->
        <Parameter-modal ref="selectParameter"/>
        <Dmn></Dmn>
        <msg-dialog ref="msgDialog"></msg-dialog>
    </div>
</template>

<script>
import uruleHtml from './uruleHtml.vue'
import ParameterModal from './ParameterModal.vue'
import Dmn from '@/components/urule/editor/decisiontable/Dmn.vue'
import MsgDialog from '@/components/urule/editor/decisiontable/MsgDialog.vue'

export default {
    components: {
        uruleHtml,
        ParameterModal,
        Dmn,
        MsgDialog
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
        window.showTableMenu = this.showTableMenu
        window.getTableParameter = null
    },
    methods: {
        showSelectParameterMenu(callback) {
            this.$refs.selectParameter.showModal(callback)
        },
        showTableMenu(cb) {
            this.$refs.msgDialog.showModal(cb)
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
