<template>
    <div class="DMN">
        <el-form ref="form" :model="item" label-width="120px">
            <el-form-item label="请选择属性">
                <el-select v-model="item.selectedAttributeCodes" clearable filterable style="width: 100%" multiple
                           @change="attributeChange" value=""
                >
                    <el-option v-for="attribute in allAttributes" :key="attribute.code" :label="attribute.name"
                               :value="attribute.code"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="DMN">
                <div>
                    <el-tabs tab-position="top" v-model="dmnEditorName" @tab-click="dmnEditorTabClick">
                        <el-tab-pane v-for="(v,index) in dmnEditorTabs" :key="index" :name="index.toString()">
                            <span slot="label"> <i :class="v.className"></i>{{ v.name }}</span>
                        </el-tab-pane>
                    </el-tabs>
                    <div class="dmn-container" ref="dmn-container"></div>
                </div>
            </el-form-item>
            <el-form-item label="XML">
                <el-input type="textarea" readonly v-model="item.dmnXML" rows="25"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import DmnJS from 'dmn-js/lib/Modeler'
import 'dmn-js/dist/assets/diagram-js.css'
import 'dmn-js/dist/assets/dmn-font/css/dmn-embedded.css'
import 'dmn-js/dist/assets/dmn-js-decision-table-controls.css'
import 'dmn-js/dist/assets/dmn-js-decision-table.css'
import 'dmn-js/dist/assets/dmn-js-drd.css'
import 'dmn-js/dist/assets/dmn-js-literal-expression.css'
import 'dmn-js/dist/assets/dmn-js-shared.css'
import 'dmn-js/dist/assets/dmn-font/css/dmn.css'
import { DmnXml } from '@/components/dmn/dmn-xml'

const dmnModeler = new DmnJS({
    height: 500,
    width: '100%',
    keyboard: {
        bindTo: window
    }
})

const CLASS_NAMES = {
    drd: 'dmn-icon-lasso-tool',
    decisionTable: 'dmn-icon-decision-table',
    literalExpression: 'dmn-icon-literal-expression'
}
export default {
    name: 'DMN',
    data() {
        return {
            // 所有属性列表
            allAttributes: {
                'A': { 'code': 'A', 'name': '整数属性A', 'type': 'int' },
                'B': { 'code': 'B', 'name': '整数属性B', 'type': 'int' },
                'C': { 'code': 'C', 'name': '布尔属性C', 'type': 'bool' },
                'D': { 'code': 'D', 'name': '字符属性D', 'type': 'text' },
                'E': { 'code': 'E', 'name': '日期属性E', 'type': 'dateTime' }
            },
            item: {
                // 选中属性code
                selectedAttributeCodes: [],
                // 生成的xml
                dmnXML: ''
            },
            dmnEditorTabs: [],
            dmnEditorName: '0'
        }
    },
    created() {
    },
    computed: {
        selectedAttributes: function() {
            let data = []
            let codes = this.item.selectedAttributeCodes
            for (let k in codes) {
                let tmp = this.allAttributes[codes[k]]
                tmp = JSON.parse(JSON.stringify(tmp))
                data.push(tmp)
            }
            return data
        }
    },
    mounted() {
        let _this = this
        dmnModeler.on('views.changed', function(event) {
            const { views, activeView } = event
            // 给每个视图创建一个tab
            let dmnEditorTabs = []
            views.forEach(function(v, idx) {
                console.log(v)
                v.className = CLASS_NAMES[v.type]
                if (v === activeView) {
                    _this.dmnEditorName = idx.toString()
                }
                dmnEditorTabs.push(v)
            })
            _this.dmnEditorTabs = dmnEditorTabs
            
            // 每次修改DMN立即更新this.item.dmnXML
            _this.exportDmnXml()
        })
        
        this.initDmn()
    },
    methods: {
        initDmn() {
            dmnModeler.attachTo('.dmn-container')
            
            if (!this.item.dmnXML) {
                this.attributeChange()
            } else {
                this.openDmnDiagram(this.item.dmnXML)
            }
            
            this.openDmnView(0)
        },
        attributeChange() {
            let newXml = DmnXml.getXmlByAttributes(this.item.dmnXML, this.selectedAttributes)
            this.item.dmnXML = newXml
            this.openDmnDiagram(newXml)
        },
        dmnEditorTabClick(tab, event) {
            const viewIdx = parseInt(tab.index)
            this.openDmnView(viewIdx)
        },
        // Open diagram in our modeler instance.
        async openDmnDiagram(dmnXML) {
            try {
                const { warnings } = await dmnModeler.importXML(dmnXML)
                
                if (warnings.length) {
                    console.log('import with warnings', warnings)
                } else {
                    console.log('import successful')
                }
                
                // access active editor components
                const activeEditor = dmnModeler.getActiveViewer()
                
                const canvas = activeEditor.get('canvas')
                
                // zoom to fit full viewport
                canvas.zoom('fit-viewport')
                
            } catch (err) {
                console.error('could not import DMN 1.3 diagram', err)
            }
        },
        // 导出整个决策表的xml，保存到data
        async exportDmnXml() {
            try {
                const { xml } = await dmnModeler.saveXML({ format: true })
                //console.log('exportDmnXml', xml)
                this.item.dmnXML = xml
            } catch (err) {
                console.error('could not save DMN 1.3 diagram', err)
            }
        },
        // 打开一个决策表视图，即decision节点
        async openDmnView(viewIdx) {
            const view = dmnModeler.getViews()[viewIdx]
            try {
                await dmnModeler.open(view)
            } catch (err) {
                console.error('error opening tab', err)
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>
