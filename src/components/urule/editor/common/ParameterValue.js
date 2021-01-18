/**
 * @author GJ
 */
urule.ParameterValue = function (arithmetic, data, act, functionProperty) {
  this.container = $('<span>')

  var self = this
  this.label = generateContainer()
  this.container.append(this.label)
  this.label.css({
    color: 'darkcyan'
  })
  URule.setDomContent(this.label, '请选择参数')
  if (data) {
    this.initData(data)
  }
  window._ParameterValueArray.push(this)
  this.act = act
  this.initMenu()
}

urule.ParameterValue.prototype.getDisplayContainer = function () {
  var container = $('<span>' + this.category + '.' + this.variableLabel + '</span>')
  return container
}

urule.ParameterValue.prototype.initMenu = function (variableLibraries) {
  // var data = window._uruleEditorParameterLibraries
  // if (variableLibraries) {
  //   data = variableLibraries
  // }
  // if (!data) {
  //   return
  // }
  // var self, onCategoryClick, onParameterClick, config
  // self = this
  // onCategoryClick = function (menuItem) {
  //   self.setValue({ variableCategory: menuItem.label, variables: menuItem.variables })
  // }
  // onParameterClick = function (menuItem) {
  //   self.setValue({
  //     variables: menuItem.parent.parent.variables,
  //     variableCategory: menuItem.parent.parent.label,
  //     variableLabel: menuItem.label,
  //     variableName: menuItem.name,
  //     datatype: menuItem.datatype
  //   })
  // }
  // config = { menuItems: [] }
  // $.each(data, function (index, categories) {
  //   $.each(categories, function (i, category) {
  //     var variables = category.variables
  //     var menuItem = {
  //       label: category.name,
  //       variables: variables,
  //       onClick: onCategoryClick
  //     }
  //     $.each(variables || [], function (j, variable) {
  //       if (!menuItem.subMenu) {
  //         menuItem.subMenu = { menuItems: [] }
  //       }
  //       if (self.matchAct(variable.act)) {
  //         var subMenuItem = {
  //           name: variable.name,
  //           label: variable.label,
  //           datatype: variable.type,
  //           act: variable.act,
  //           variables: variables,
  //           onClick: onParameterClick
  //         }
  //         menuItem.subMenu.menuItems.push(subMenuItem)
  //       }
  //     })
  //     config.menuItems.push(menuItem)
  //   })
  // })
  // if (self.menu) {
  //   self.menu.setConfig(config)
  // } else {
  //   self.menu = new URule.menu.Menu(config)
  // }
  this.label.click((e) => {
    window
  })
}
urule.ParameterValue.prototype.setValue = function (data) {
  var self = this
  this.category = data.variableCategory
  URule.setDomContent(this.label, '参数.' + this.category)
}
urule.ParameterValue.prototype.initData = function (data) {
  this.setValue(data)
}

urule.ParameterValue.prototype.toXml = function () {
  if (!this.category || this.category == '') {
    throw '参数不能为空！'
  }
  var xml = 'category="' + this.category + '"'
  return xml
}
urule.ParameterValue.prototype.getContainer = function () {
  return this.container
}
