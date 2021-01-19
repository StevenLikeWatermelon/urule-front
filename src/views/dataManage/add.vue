<template>
  <xl-form ref="form" :model="form" label-width="80px">
    <xl-form-item label="活动名称">
      <xl-input v-model="form.name" />
    </xl-form-item>
    <xl-form-item label="活动区域">
      <xl-select v-model="form.region" placeholder="请选择活动区域">
        <xl-option label="区域一" value="shanghai" />
        <xl-option label="区域二" value="beijing" />
      </xl-select>
    </xl-form-item>
    <xl-form-item label="活动时间">
      <xl-col :span="11">
        <xl-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
      </xl-col>
      <xl-col class="line" :span="2">-</xl-col>
      <xl-col :span="11">
        <xl-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%;" />
      </xl-col>
    </xl-form-item>
    <xl-form-item label="即时配送">
      <xl-switch v-model="form.delivery" />
    </xl-form-item>
    <xl-form-item label="活动性质">
      <xl-checkbox-group v-model="form.type">
        <xl-checkbox label="美食/餐厅线上活动" name="type" />
        <xl-checkbox label="地推活动" name="type" />
        <xl-checkbox label="线下主题活动" name="type" />
        <xl-checkbox label="单纯品牌曝光" name="type" />
      </xl-checkbox-group>
    </xl-form-item>
    <xl-form-item label="特殊资源">
      <xl-radio-group v-model="form.resource">
        <xl-radio label="线上品牌商赞助" />
        <xl-radio label="线下场地免费" />
      </xl-radio-group>
    </xl-form-item>
    <xl-form-item label="活动形式">
      <xl-input v-model="form.desc" type="textarea" />
    </xl-form-item>
    <xl-form-item>
      <xl-button type="primary" @click="onSubmit">立即创建</xl-button>
      <xl-button>取消</xl-button>
    </xl-form-item>
  </xl-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
