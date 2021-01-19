<template>
  <div>
    <xl-form
      :inline="true"
      :model="form"
      class="demo-form-inline"
    >
      <xl-form-item label="名称">
        <xl-input
          v-model="form.user"
          placeholder="请输入名称"
        />
      </xl-form-item>
      <xl-form-item label="状态">
        <xl-select v-model="form.region" placeholder="请选择状态">
          <xl-option label="全部" value="0" />
          <xl-option label="未审核" value="1" />
          <xl-option label="审核通过" value="2" />
          <xl-option label="审核驳回" value="3" />
          <xl-option label="已核实" value="4" />
        </xl-select>
      </xl-form-item>
      <xl-form-item label="日期">
        <xl-date-picker
          v-model="form.date"
          type="date"
          placeholder="选择日期"
          style="width: 100%;"
        />
      </xl-form-item>
      <xl-form-item>
        <xl-button type="primary" @click="onSubmit">查询</xl-button>
      </xl-form-item>
    </xl-form>
    <xl-table-pageable
      :data="tableData"
      :loading="loading"
      :pagination="pagination"
      style="width: 100%"
      @current-page-change="displayLoading"
    >
      <xl-table-column prop="company" label="企业" />
      <xl-table-column prop="equipmentName" label="设备名称" />
      <xl-table-column prop="currentState" label="当前状态" width="180" />
      <xl-table-column prop="runTime" label="运行时长" width="180" />
      <xl-table-column prop="stopTime" label="停运时间" width="180" />
    </xl-table-pageable>
  </div>

</template>

<script>
import { XlTablePageable } from 'xl-views'
console.log(XlTablePageable)

export default {
  components: {
    XlTablePageable
  },
  data() {
    return {
      form: {
        user: '',
        region: '',
        date: null
      },
      tableData: [
        {
          company: '测试用公司1',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '测试用公司1',
          equipmentName: '43测试车间111-2#风机',
          currentState: '停用',
          runTime: '-',
          stopTime: '8小时'
        },
        {
          company: '测试用公司1',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '测试用公司2',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '测试用公司13',
          equipmentName: '43测试车间111-2#风机',
          currentState: '停用',
          runTime: '-',
          stopTime: '8小时'
        },
        {
          company: '测试用公司14',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '测试用公司16',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '测试用公司1',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '测试用公司17',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        },
        {
          company: '测试用公司18',
          equipmentName: '42#测试车间111-2#风机',
          currentState: '启用',
          runTime: '8小时',
          stopTime: '-'
        }
      ],
      pagination: {
        pageSize: 10,
        pageIndex: 1,
        total: 52
      },
      loading: false
    }
  },
  methods: {
    displayLoading() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
