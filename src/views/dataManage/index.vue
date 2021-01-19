<template>
  <div class="attr-container">
    <xl-row>
      <xl-col :span="24">
        <xl-form :inline="true">
          <xl-form-item label="类型id">
            <xl-input
              v-model="programmeConfig.programmeName"
              placeholder="类型id"
              clearable
            />
          </xl-form-item>
          <xl-form-item label="类型名称">
            <xl-input
              v-model="programmeConfig.programmeDesc"
              placeholder="类型名称"
              clearable
            />
          </xl-form-item>
          <xl-form-item label="类型标题">
            <xl-input
              v-model="programmeConfig.programmeName"
              placeholder="类型标题"
              clearable
            />
          </xl-form-item>
          <xl-form-item label="类名简称">
            <xl-input
              v-model="programmeConfig.programmeDesc"
              placeholder="类名简称"
              clearable
            />
          </xl-form-item>
          <xl-form-item>
            <xl-button type="primary" @click="submitForm">查询</xl-button>
          </xl-form-item>
        </xl-form>
      </xl-col>
    </xl-row>
    <xl-row>
      <xl-col :span="24">
        <xl-button type="primary" @click="addProgranmme">新增</xl-button>
      </xl-col>
    </xl-row>
    <xl-row class="table-row">
      <xl-col :span="24">
        <xl-table-pageable
          :data="tableData"
          :loading="loading"
          border
          striped
          :pagination="pagination"
          style="width: 100%"
          @current-page-change="changePage"
          @size-change="changeSize"
        >
          <xl-table-column prop="programmeName" label="类型id" width="180" />
          <xl-table-column prop="programmeDesc" label="类型标题" width="180" />
          <xl-table-column prop="programmeType" label="类型名称" />
          <xl-table-column prop="programmeLength" label="类名" />
          <xl-table-column prop="decimalLength" label="类名简称" />
          <xl-table-column label="操作" width="340">
            <template slot-scope="scope">
              <xl-button size="mini" type="primary" @click="deleteType(scope.row)">删除</xl-button>
              <xl-button size="mini" type="primary" @click="editBasic(scope.row)">修改</xl-button>
            </template>
          </xl-table-column>
        </xl-table-pageable>
      </xl-col>
    </xl-row>
  </div>
</template>

<script>
import { XlTablePageable } from 'xl-views'
export default {
  components: {
    XlTablePageable
  },
  data() {
    return {
      withBasic: true,
      addTitle: '创建规约方案',
      programmeConfig: {
        programmeName: '',
        programmeDesc: ''
      },
      tableData: [{
        programmeName: '33'
      }],
      loading: false,
      pagination: {
        pageSize: 10,
        pageIndex: 1,
        total: 0
      }
    }
  },
  mounted() {

  },
  methods: {
    submitForm() {

    },
    addProgranmme() {
      this.$router.push({
        name: 'typeAdd',
        query: {
          operateType: 'add'
        }
      })
    },
    deleteType() {

    },
    changePage() {

    },
    changeSize() {

    },
    editDraft() {

    }
  }
}
</script>

<style lang="scss" scoped>
.attr-container {
  width: 100%;
}
.table-row {
    margin-top: 15px;
}
</style>
