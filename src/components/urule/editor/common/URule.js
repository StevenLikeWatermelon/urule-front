/**
 * @author GJ
 */
window._ConstantValueArray = []
window._ActionTypeArray = []
window._VariableValueArray = []
window._ParameterValueArray = []
window._FunctionValueArray = []
window.actionLibraries = []
window.variableLibraries = []
window.constantLibraries = []
window.parameterLibraries = []
window.urule = {}

window.generateContainer = function() {
  var container = $('<span>.</span>')
  container.css({
    height: '20px',
    cursor: 'pointer',
    margin: '0px',
    color: 'white',
    border: 'dashed transparent 1px'
  })
  container.mouseover(function() {
    container.css({
      border: 'dashed gray 1px'
    })
  })
  container.mouseout(function() {
    container.css({
      border: 'dashed transparent 1px'
    })
  })
  return container
}

window.refreshParameterLibraries = function() {
  const data = [
    [
      {
        name: 'test',
        type: 'Custom',
        clazz: 'kkk',
        variables: [
          { name: 'kkk', label: 'kkk', type: 'String', dataType: 'String', act: 'InOut' },
          { name: 'uuu', label: 'uuu', type: 'String', dataType: 'String', act: 'InOut' }
        ]
      }
    ]
  ]
  window._uruleEditorParameterLibraries = data
  $.each(window._ParameterValueArray, function(index, item) {
    item.initMenu(data)
  })
}

window.refreshVariableLibraries = function() {
  const data = [
    [{
    name: 'test',
    type: 'Custom',
    clazz: 'kkk',
    variables: [
      { name: 'kkk', label: 'kkk', type: 'String', dataType: 'String', act: 'InOut' },
      { name: 'uuu', label: 'uuu', type: 'String', dataType: 'String', act: 'InOut' },
    ]
  }]
  ]
  window._uruleEditorVariableLibraries = data
  $.each(window._VariableValueArray, function(index, item) {
    item.initMenu(data)
  })
}
window.refreshActionLibraries = function() {
  var actionFiles = ''
  for (var i = 0; i < actionLibraries.length; i++) {
    var action = actionLibraries[i]
    if (i == 0) {
      actionFiles = action
    } else {
      actionFiles += ';' + action
    }
  }
  if (actionFiles == '' || actionFiles.length < 2) {
    actionFiles = 'builtinactions'
  }
  const data = [{"springBeans":[{"id":"urule.listAction","name":"List集合","methods":[{"name":"List是否为空","methodName":"isEmpty","parameters":[{"name":"集合对象","type":"List"}]},{"name":"从List中删除对象","methodName":"remove","parameters":[{"name":"集合对象","type":"List"},{"name":"要删除的对象","type":"Object"}]},{"name":"取List中指定位置对象","methodName":"get","parameters":[{"name":"集合对象","type":"List"},{"name":"索引","type":"Integer"}]},{"name":"向List中添加对象","methodName":"add","parameters":[{"name":"集合对象","type":"List"},{"name":"要添加的对象","type":"Object"}]},{"name":"实例化一个ArrayList","methodName":"newArrayListInstance","parameters":[]},{"name":"抽取集合属性","methodName":"retrive","parameters":[{"name":"集合对象","type":"List"},{"name":"属性名","type":"String"}]},{"name":"指定对象是否存在","methodName":"contains","parameters":[{"name":"集合对象","type":"List"},{"name":"要判断的对象","type":"Object"}]},{"name":"求List中所有的数字最大值","methodName":"max","parameters":[{"name":"包含所有数字的集合对象","type":"List"}]},{"name":"求List中所有的数字最小值","methodName":"min","parameters":[{"name":"包含所有数字的集合对象","type":"List"}]},{"name":"求List大小","methodName":"size","parameters":[{"name":"集合对象","type":"List"}]},{"name":"集合排序","methodName":"sort","parameters":[{"name":"集合对象","type":"List"},{"name":"属性名","type":"String"},{"name":"排序方式","type":"String"}]}]},{"id":"urule.mapAction","name":"Map集合","methods":[{"name":"从Map中删除","methodName":"remove","parameters":[{"name":"Map对象","type":"Map"},{"name":"key","type":"String"}]},{"name":"从Map中取值","methodName":"get","parameters":[{"name":"Map对象","type":"Map"},{"name":"key","type":"String"}]},{"name":"创建一个HashMap实例","methodName":"newHashMap","parameters":[]},{"name":"指定Key是否存在","methodName":"containsKey","parameters":[{"name":"Map对象","type":"Map"},{"name":"key","type":"String"}]},{"name":"添加到Map","methodName":"put","parameters":[{"name":"Map对象","type":"Map"},{"name":"key","type":"String"},{"name":"value","type":"Object"}]},{"name":"返回Map大小","methodName":"size","parameters":[{"name":"Map对象","type":"Map"}]},{"name":"返回Map的Key集合","methodName":"keys","parameters":[{"name":"Map对象","type":"Map"}]},{"name":"返回Map的值集合","methodName":"values","parameters":[{"name":"Map对象","type":"Map"}]}]},{"id":"bizAction","name":"业务方法","methods":[{"name":"MAX","methodName":"max","parameters":[{"name":"数值1","type":"BigDecimal"},{"name":"数值2","type":"BigDecimal"}]},{"name":"不包含关键字","methodName":"isNotContainKeyword","parameters":[{"name":"内容","type":"String"},{"name":"关键字","type":"String"}]},{"name":"包含关键字","methodName":"isContainKeyword","parameters":[{"name":"内容","type":"String"},{"name":"关键字","type":"String"}]},{"name":"该日期是否为近N个月","methodName":"isNearlyDate","parameters":[{"name":"N月数","type":"BigDecimal"},{"name":"日期","type":"Object"}]}]},{"id":"urule.stringAction","name":"字符串","methods":[{"name":"去空格","methodName":"trim","parameters":[{"name":"目标字符串","type":"String"}]},{"name":"字符最后出现位置","methodName":"lastIndexOf","parameters":[{"name":"目标字符串","type":"String"},{"name":"要查找的字符串","type":"String"}]},{"name":"字符首次出现位置","methodName":"indexOf","parameters":[{"name":"目标字符串","type":"String"},{"name":"要查找的字符串","type":"String"}]},{"name":"拆分字符串为集合","methodName":"split","parameters":[{"name":"目标字符串","type":"String"},{"name":"原字符串","type":"String"}]},{"name":"指定开始的字符串截取","methodName":"substringForStart","parameters":[{"name":"目标字符串","type":"String"},{"name":"开始位置","type":"Integer"}]},{"name":"指定结束的字符串截取","methodName":"substringForEnd","parameters":[{"name":"目标字符串","type":"String"},{"name":"结束位置","type":"Integer"}]},{"name":"指定起始的字符串截取","methodName":"substring","parameters":[{"name":"目标字符串","type":"String"},{"name":"开始位置","type":"Integer"},{"name":"结束位置","type":"Integer"}]},{"name":"替换字符串","methodName":"replace","parameters":[{"name":"目标字符串","type":"String"},{"name":"原字符串","type":"String"},{"name":"新字符串","type":"String"}]},{"name":"获取字符","methodName":"charAt","parameters":[{"name":"目标字符串","type":"String"},{"name":"位置","type":"Integer"}]},{"name":"获取长度","methodName":"length","parameters":[{"name":"目标字符串","type":"String"}]},{"name":"转大写","methodName":"toUpperCase","parameters":[{"name":"目标字符串","type":"String"}]},{"name":"转小写","methodName":"toLowerCase","parameters":[{"name":"目标字符串","type":"String"}]}]},{"id":"stringIntegerUtils","name":"字符串与数字","methods":[{"name":"判断是否为数字","methodName":"checkIsNumber","parameters":[{"name":"目标字符串","type":"String"}]}]},{"id":"urule.objectAction","name":"对象","methods":[{"name":"null","methodName":"toNull","parameters":[]},{"name":"对象取值","methodName":"newObjectInstance","parameters":[{"name":"目标对象","type":"Object"},{"name":"属性名","type":"String"}]},{"name":"对象实例化","methodName":"newObjectInstance","parameters":[{"name":"完整类路径","type":"String"}]},{"name":"根据对象创建新实例","methodName":"newObjectInstanceByObject","parameters":[{"name":"目标对象","type":"Object"}]},{"name":"空字符串","methodName":"toEmptyString","parameters":[]}]},{"id":"objToMap","name":"对象转Map","methods":[{"name":"map转对象","methodName":"mapToVO","parameters":[{"name":"map","type":"Map"},{"name":"Object对象","type":"Object"}]},{"name":"不同税种配置限额","methodName":"szxe","parameters":[{"name":"不同税种配置限额","type":"String"},{"name":"","type":"Map"}]},{"name":"对象转Map","methodName":"objToMap","parameters":[{"name":"目标对象","type":"Object"}]},{"name":"比较两个Map对象","methodName":"compareMap","parameters":[{"name":"比较两个Map对象","type":"Object"},{"name":"","type":"Object"}]},{"name":"比较两个对象","methodName":"compare","parameters":[{"name":"比较两个对象","type":"Object"},{"name":"","type":"Object"}]},{"name":"比较退抵税明细预填金额","methodName":"jejy","parameters":[{"name":"比较退抵税明细预填金额","type":"List"}]}]},{"id":"urule.currentRuleAction","name":"当前规则","methods":[{"name":"当前规则匹配的条件","methodName":"getCurrentRuleCriterias","parameters":[]},{"name":"当前规则名","methodName":"getCurrentRuleName","parameters":[]},{"name":"当前规则对象","methodName":"getCurrentRule","parameters":[]}]},{"id":"urule.loopAction","name":"循环操作","methods":[{"name":"中断循环","methodName":"breakLoop","parameters":[]}]},{"id":"urule.mathAction","name":"数学函数","methods":[{"name":"向上取整","methodName":"round","parameters":[{"name":"数字","type":"Object"}]},{"name":"向下取整","methodName":"floor","parameters":[{"name":"数字","type":"Object"}]},{"name":"四舍五入","methodName":"halfUp","parameters":[{"name":"数字","type":"Object"},{"name":"小数位数","type":"Integer"}]},{"name":"求10为底的对数","methodName":"log10","parameters":[{"name":"数字","type":"Object"}]},{"name":"求e为底的对数","methodName":"log","parameters":[{"name":"数字","type":"Object"}]},{"name":"求余切","methodName":"cot","parameters":[{"name":"数字","type":"Object"}]},{"name":"求余弦","methodName":"cos","parameters":[{"name":"数字","type":"Object"}]},{"name":"求指数","methodName":"exp","parameters":[{"name":"底数","type":"Object"},{"name":"幂","type":"Double"}]},{"name":"求最大值","methodName":"max","parameters":[{"name":"数字1","type":"Object"},{"name":"数字2","type":"Object"}]},{"name":"求最小值","methodName":"min","parameters":[{"name":"数字1","type":"Object"},{"name":"数字2","type":"Object"}]},{"name":"求正切","methodName":"tan","parameters":[{"name":"数字","type":"Object"}]},{"name":"求正弦","methodName":"in","parameters":[{"name":"数字","type":"Object"}]},{"name":"求绝对值","methodName":"abs","parameters":[{"name":"数字","type":"Object"}]}]},{"id":"urule.dateAction","name":"日期","methods":[{"name":"减日期","methodName":"subDate","parameters":[{"name":"目标日期","type":"Date"},{"name":"年数","type":"Integer"},{"name":"月数","type":"Integer"},{"name":"天数","type":"Integer"},{"name":"小时","type":"Integer"},{"name":"分钟","type":"Integer"},{"name":"秒数","type":"Integer"}]},{"name":"减日期减分钟","methodName":"subDateForMinute","parameters":[{"name":"目标日期","type":"Date"},{"name":"分钟","type":"Integer"}]},{"name":"减日期减天","methodName":"subDateForDay","parameters":[{"name":"目标日期","type":"Date"},{"name":"天数","type":"Integer"}]},{"name":"减日期减小时","methodName":"subDateForHour","parameters":[{"name":"目标日期","type":"Date"},{"name":"小时","type":"Integer"}]},{"name":"减日期减年","methodName":"subDateForYear","parameters":[{"name":"目标日期","type":"Date"},{"name":"年数","type":"Integer"}]},{"name":"减日期减月","methodName":"subDateForMonth","parameters":[{"name":"目标日期","type":"Date"},{"name":"月数","type":"Integer"}]},{"name":"减日期减秒","methodName":"subDateForSecond","parameters":[{"name":"目标日期","type":"Date"},{"name":"秒数","type":"Integer"}]},{"name":"加日期","methodName":"addDate","parameters":[{"name":"目标日期","type":"Date"},{"name":"年数","type":"Integer"},{"name":"月数","type":"Integer"},{"name":"天数","type":"Integer"},{"name":"小时","type":"Integer"},{"name":"分钟","type":"Integer"},{"name":"秒数","type":"Integer"}]},{"name":"取分钟","methodName":"getMinute","parameters":[{"name":"目标日期","type":"Date"}]},{"name":"取天","methodName":"getay","parameters":[{"name":"目标日期","type":"Date"}]},{"name":"取小时","methodName":"getHour","parameters":[{"name":"目标日期","type":"Date"}]},{"name":"取年份","methodName":"getYear","parameters":[{"name":"目标日期","type":"Date"}]},{"name":"取指定月份天数","methodName":"buildIncludeMonthDays","parameters":[{"name":"开始日期","type":"Object"},{"name":"结束日期","type":"Object"},{"name":"月份","type":"String"}]},{"name":"取星期","methodName":"getWeek","parameters":[{"name":"目标日期","type":"Date"}]},{"name":"取月份","methodName":"getMonth","parameters":[{"name":"目标日期","type":"Date"}]},{"name":"取秒","methodName":"getSecond","parameters":[{"name":"目标日期","type":"Date"}]},{"name":"取非指定月份天数","methodName":"buildExcludeMonthDays","parameters":[{"name":"开始日期","type":"Object"},{"name":"结束日期","type":"Object"},{"name":"月份","type":"String"}]},{"name":"当前日期","methodName":"getDate","parameters":[]},{"name":"日期加分钟","methodName":"addDateForMinute","parameters":[{"name":"目标日期","type":"Date"},{"name":"分钟数","type":"Integer"}]},{"name":"日期加天","methodName":"addDateForDay","parameters":[{"name":"目标日期","type":"Date"},{"name":"天数","type":"Integer"}]},{"name":"日期加小时","methodName":"addDateForHour","parameters":[{"name":"目标日期","type":"Date"},{"name":"小时数","type":"Integer"}]},{"name":"日期加年","methodName":"addDateForYear","parameters":[{"name":"目标日期","type":"Date"},{"name":"年数","type":"Integer"}]},{"name":"日期加月","methodName":"addDateForMonth","parameters":[{"name":"目标日期","type":"Date"},{"name":"月数","type":"Integer"}]},{"name":"日期加秒","methodName":"addDateForSecond","parameters":[{"name":"目标日期","type":"Date"},{"name":"秒数","type":"Integer"}]},{"name":"日期相减返回分钟","methodName":"dateDifMinute","parameters":[{"name":"日期","type":"Date"},{"name":"减去的日期","type":"Date"}]},{"name":"日期相减返回天","methodName":"dateDifDay","parameters":[{"name":"日期","type":"Date"},{"name":"减去的日期","type":"Date"}]},{"name":"日期相减返回小时","methodName":"dateDifHour","parameters":[{"name":"日期","type":"Date"},{"name":"减去的日期","type":"Date"}]},{"name":"日期相减返回星期","methodName":"dateDifWeek","parameters":[{"name":"日期","type":"Date"},{"name":"减去的日期","type":"Date"}]},{"name":"日期相减返回月","methodName":"dateDifMonth","parameters":[{"name":"日期","type":"Date"},{"name":"减去的日期","type":"Date"}]},{"name":"日期相减返回毫秒","methodName":"dateDifMillSecond","parameters":[{"name":"日期","type":"Date"},{"name":"减去的日期","type":"Date"}]},{"name":"日期相减返回秒","methodName":"dateDifSecond","parameters":[{"name":"日期","type":"Date"},{"name":"减去的日期","type":"Date"}]},{"name":"格式化日期","methodName":"format","parameters":[{"name":"目标日期","type":"Date"},{"name":"格式","type":"String"}]},{"name":"解析字符串为日期","methodName":"formatString","parameters":[{"name":"日期字符串","type":"String"},{"name":"格式","type":"String"}]}]},{"id":"myDemoAction2","name":"演示内置动作","methods":[{"name":"统计字符串出现次数","methodName":"getSubstringCount","parameters":[{"name":"目标字符串","type":"String"},{"name":"统计字符","type":"String"}]},{"name":"获得数字","methodName":"getSubstringCount","parameters":[{"name":"数字","type":"BigDecimal"}]},{"name":"获得集合中指定元素","methodName":"getSubstringCount","parameters":[{"name":"集合","type":"Object"},{"name":"位置","type":"Integer"}]}]},{"id":"commonMathAction","name":"演示自定义方法","methods":[{"name":"求和","methodName":"getSumValue","parameters":[{"name":"集合","type":"Object"},{"name":"属性","type":"String"}]},{"name":"求平均值","methodName":"getAvgValue","parameters":[{"name":"集合","type":"Object"},{"name":"属性","type":"String"}]},{"name":"求最大值","methodName":"getMaxValue","parameters":[{"name":"集合","type":"Object"},{"name":"属性","type":"String"}]},{"name":"求最大值的对象","methodName":"getMax","parameters":[{"name":"集合","type":"Object"},{"name":"属性","type":"String"}]},{"name":"求最小值","methodName":"getMinValue","parameters":[{"name":"集合","type":"Object"},{"name":"属性","type":"String"}]},{"name":"求最小值的对象","methodName":"getMin","parameters":[{"name":"集合","type":"Object"},{"name":"属性","type":"String"}]}]},{"id":"urule.invokeAction","name":"调用","methods":[{"name":"知识包","methodName":"invokeKnowledgePackage","parameters":[{"name":"知识包","type":"String"}]},{"name":"规则文件","methodName":"invokeFile","parameters":[{"name":"文件","type":"String"}]}]},{"id":"urule.commonAction","name":"通用","methods":[{"name":"IF_ERROR","methodName":"iferror","parameters":[{"name":"值","type":"Object"},{"name":"出错后值","type":"Object"}]}]}]}]
  window._uruleEditorActionLibraries = data
  $.each(window._ActionTypeArray, function(index, item) {
    item.initMenu(data)
  })

}
window.refreshFunctionLibraries = function() {
  var url = window._server + '/common/loadFunctions'
  $.ajax({
    url: url,
    error: function(req, error) {
      console.log('加载函数失败！')
    },
    success: function(data) {
      window._uruleEditorFunctionLibraries = data
      $.each(window._FunctionValueArray, function(index, item) {
        item.initMenu(data)
      })
    }
  })
}

window.refreshConstantLibraries = function() {
  var constantFiles = ''
  for (var i = 0; i < constantLibraries.length; i++) {
    var constant = constantLibraries[i]
    if (i == 0) {
      constantFiles = constant
    } else {
      constantFiles += ';' + constant
    }
  }
  if (constantFiles == '' || constantFiles.length < 2) {
    return
  }
  var url = window._server + '/common/loadXml'
  $.ajax({
    data: { files: constantFiles },
    url: url,
    type: 'POST',
    error: function(req, error) {
      console.log('加载文件失败！')
    },
    success: function(data) {
      window._uruleEditorConstantLibraries = data
      $.each(window._ConstantValueArray, function(index, item) {
        item.initMenu(data)
      })
    }
  })
}
