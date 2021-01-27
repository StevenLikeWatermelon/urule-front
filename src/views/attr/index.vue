<template>
  <div>
    <urule :init-data="initData" @success="getSuccess" @error="getError" />
  </div>
</template>

<script>
import urule from "@/components/urule/editor/urule/index.vue";

export default {
  name: "App",
  components: {
    urule,
  },
  data() {
    return {
      conditionTree: {
        separator: "and",
        children: [
          {
            firstParamField: "swj自选类型参数.Float",
            secondParamField: "33",
            secondParamIsConstant: 1,
            operation: "LessThen",
          },
          {
            separator: "and",
            children: [
              {
                firstParamField: "ssssd",
                secondParamField: "param1y",
                operation: "GreaterThen",
              },
              {
                firstParamField:
                  "swj自选类型参数.Integer.有一些字段的类型.Integer.有一些字段的类型",
                operation: "Null",
              },
            ],
          },
          {
            separator: "and",
            children: [
              {
                firstParamField: "param1",
                secondParamField: "23",
                secondParamIsConstant: 1,
                operation: "GreaterThen",
              },
            ],
          },
          {
            firstParamField: "param1",
            secondParamField: "param1",
            operation: "GreaterThen",
          },
        ],
      },
    };
  },
  methods: {
    getSuccess(data) {
      console.log(data);
    },
    getError(error) {
      this.$message.error(error);
    },
  },
};
</script>
