/**
 * @author GJ
 */
const convertXml = require('xml-js');
(function ($) {
  $.fn.urule = function (initData, errorCallback, successCallBack) {
    this.rules = []
    var saveButton = '<div class="btn-group btn-group-sm navbar-btn" style="margin-top:0px;margin-bottom: 0px" role="group" aria-label="...">' +
							'<button id="saveButton" type="button" class="btn btn-default navbar-btn" ><i class="icon-save"></i> 保存</button>' +
						'</div>'

    var toolbar = $(saveButton)
    toolbar.css({
      diaplay: 'inline-block'
    })
    this.append(toolbar)
    var self = this
    $('#addRuleButton').click(function () {
      var rule = _addRule()
      rule.initTopJoin()
    })

    $('#saveButton').click(function () {
      save(false)
    })

    _loadRulesetFileData()

    var _this = this
    this.sortable({
      delay: 200,
      update: function (event, ui) {
        var children = _this.children('div')
        children.each(function (index, div) {
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

    function save (newVersion) {
      var xml = '<?xml ?>'
      xml += '<rule-set>'
      try {
        for (var i = 0; i < self.rules.length; i++) {
          var rule = self.rules[i]
          xml += rule.toXml()
        }
      } catch (error) {
        console.log(error)
        errorCallback && errorCallback(error)
        return
      }
      xml += '</rule-set>'
      var result2 = convertXml.xml2json(xml, { compact: false, spaces: 4, ignoreDeclaration: true, elementsKey: 'children' })
      if (result2) {
        const treeAllResult = JSON.parse(result2) || {}
        const treeResult = treeAllResult.children[0].children[0].children[0].children
        console.log(treeResult)
        successCallBack && successCallBack(treeResult)
      }
    }
    function _addRule (data) {
      var ruleContainer = $("<div class='well' style='margin:5px;padding:8px'></div>")
      self.prepend(ruleContainer)
      var rule = new urule.Rule(self, ruleContainer, data)
      self.rules.push(rule)

      return rule
    };

    function _loadRulesetFileData () {
      setTimeout(function () {
        window.refreshVariableLibraries()
        window.refreshParameterLibraries()
        if (initData) {
          _addRule(initData)
        } else {
          var rule = _addRule()
          rule.initTopJoin()
        }
      }, 100)
    }
  }
})(jQuery)
