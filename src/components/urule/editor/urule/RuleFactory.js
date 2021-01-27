/**
 * @author GJ
 */
const convertXml = require('xml-js')
function transUruleData(data) {
  const tmpObj = {}
  if (data.separator) {
    tmpObj.junctionType = data.separator
  }
  if (data.operation) {
    tmpObj.op = data.operation
  }
  if (data.firstParamField) {
    tmpObj.left = {
      variableCategory: data.firstParamField
    }
  }
  if (data.operation && data.operation !== 'NotNull' && data.operation !== 'Null') {
    if (+data.secondParamIsConstant) {
      tmpObj.value = {
        content: data.secondParamField,
        valueType: 'Input'
      }
    } else {
      tmpObj.value = {
        variableCategory: data.secondParamField,
        variableLabel: data.secondParamField,
        valueType: 'Parameter'
      }
    }
  }
  if (data.children && data.children.length > 0) {
    tmpObj.criterions = []
    for (let i = 0; i < data.children.length; i++) {
      const element = data.children[i]
      tmpObj.criterions.push(transUruleData(element))
    }
  }
  return tmpObj
}
(function($) {
  $.fn.urule = function(initData, successCallBack, errorCallback, manualSave) {
    this.rules = []
    var saveButton = '<div class="btn-group btn-group-sm navbar-btn" style="margin-top:0px;margin-bottom: 0px" role="group" aria-label="...">' +
							'<button id="saveButton" type="button" class="btn btn-default navbar-btn" ><i class="icon-save"></i> 保存</button>' +
						'</div>'

    var toolbar = $(saveButton)
    toolbar.css({
      diaplay: 'inline-block'
    })
    manualSave && this.append(toolbar)
    var self = this
    $('#addRuleButton').click(function() {
      var rule = _addRule()
      rule.initTopJoin()
    })

    $('#saveButton').click(function() {
      window.saveUruleTree(false)
    })

    _loadRulesetFileData()

    var _this = this
    this.sortable({
      delay: 200,
      update: function(event, ui) {
        var children = _this.children('div')
        children.each(function(index, div) {
          const item = $(div); const id = item.prop('id'); const rules = _this.rules; let targetRule = null
          for (const rule of rules) {
            if (rule.uuid === id) {
              targetRule = rule
              break
            }
          }
          if (targetRule) {
            const pos = rules.indexOf(targetRule)
            rules.splice(pos, 1)
            rules.splice(index, 0, targetRule)
          }
        })
      }
    })
    function transKeysExcced(treeResult) {
      if (treeResult.type) {
        delete treeResult.type
      }
      if (treeResult.nodeTyle !== 'atom') {
        treeResult.separator = treeResult.nodeTyle
      }
      if (treeResult.children && treeResult.children.length > 0) {
        for (let index = 0; index < treeResult.children.length; index++) {
          const element = treeResult.children[index]
          if (element.type) {
            delete element.type
          }
          if (element.nodeTyle === 'atom') {
            element.firstParamField = element.children[0].attributes.category
            element.secondParamField = element.children[1] ? (element.children[1].attributes.content || element.children[1].attributes.category) : null
            element.operation = element.attributes.op
            element.firstParamIsConstant = 0
            element.secondParamIsConstant = +(element.children[1] && element.children[1].attributes.type === 'Input')
          } else {
            transKeysExcced(element)
          }
        }
      }
    }
    function cleanData(data) {
      const tmpObj = {}
      if (data.separator) {
        tmpObj.separator = data.separator
      }
      if (data.firstParamField) {
        tmpObj.firstParamField = data.firstParamField
      }
      if (data.firstParamIsConstant) {
        tmpObj.firstParamIsConstant = data.firstParamIsConstant
      }
      if (data.secondParamField) {
        tmpObj.secondParamField = data.secondParamField
      }
      if (data.secondParamIsConstant) {
        tmpObj.secondParamIsConstant = data.secondParamIsConstant
      }
      if (data.operation) {
        tmpObj.operation = data.operation
      }
      if (data.children && data.children.length > 0 && data.nodeTyle !== 'atom') {
        tmpObj.children = []
        for (let index = 0; index < data.children.length; index++) {
          const element = data.children[index]
          tmpObj.children.push(cleanData(element))
        }
      }
      return tmpObj
    }
    window.saveUruleTree = function() {
      var xml = '<?xml ?>'
      xml += '<rule-set>'
      try {
        for (var i = 0; i < self.rules.length; i++) {
          var rule = self.rules[i]
          xml += rule.toXml()
        }
      } catch (error) {
        errorCallback && errorCallback(error)
        return
      }
      xml += '</rule-set>'
      var result2 = convertXml.xml2json(xml, { compact: false, spaces: 4, ignoreDeclaration: true, elementsKey: 'children', nameKey: 'nodeTyle' })
      if (result2) {
        const treeAllResult = JSON.parse(result2) || {}
        const treeResult = treeAllResult.children[0].children[0].children[0].children[0]
        transKeysExcced(treeResult)
        const emitData = cleanData(treeResult)
        successCallBack && successCallBack(emitData)
      }
    }
    function _addRule(data) {
      var ruleContainer = $("<div class='well' style='margin:5px;padding:8px'></div>")
      self.prepend(ruleContainer)
      var rule = new urule.Rule(self, ruleContainer, data)
      self.rules.push(rule)

      return rule
    }

    function _loadRulesetFileData() {
      setTimeout(function() {
        window.refreshVariableLibraries()
        window.refreshParameterLibraries()
        if (initData) {
          const uruleObj = {
            name: 'rule',
            lhs: {
              criterion: transUruleData(initData)
            }
          }
          console.log(uruleObj)
          _addRule(uruleObj)
        } else {
          var rule = _addRule()
          rule.initTopJoin()
        }
      }, 50)
    }
  }
})(jQuery)
