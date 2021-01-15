/**
 * @author GJ
 */
(function($){
	$.fn.urule=function(){
		this.rules=[];
		var saveButton = '<div class="btn-group btn-group-sm navbar-btn" style="margin-top:0px;margin-bottom: 0px" role="group" aria-label="...">'+
							'<button id="saveButton" type="button" class="btn btn-default navbar-btn" ><i class="icon-save"></i> 保存</button>' + 
							'<button id="saveButtonNewVersion" type="button" class="btn btn-default navbar-btn" ><i class="icon-save"></i> 保存新版本</button>' +
						'</div>';
		var toolbarHtml=`<nav class="navbar navbar-default" style="margin: 5px">
        	<div style="margin-left:5px;margin-top:0px;margin-bottom: 0px">
	            <div>
	                ${saveButton}
	            </div>
            </div>
    	</nav>`;
		var toolbar=$(toolbarHtml);
		toolbar.css({
			diaplay:"inline-block"
		});
		this.append(toolbar);
		var self=this;
		$("#addRuleButton").click(function(){
			var rule=_addRule();
			rule.initTopJoin();
		});

		$("#saveButton").click(function(){
			save(false);
		});

		_loadRulesetFileData();

		var _this=this;
		this.sortable({
			delay: 200,
			update: function (event, ui) {
				var children=_this.children("div");
				children.each(function(index,div){
					let item=$(div),id=item.prop("id"),rules=_this.rules,targetRule=null;
					for(let rule of rules){
						if(rule.uuid===id){
							targetRule=rule;
							break;
						}
					}
					if(targetRule){
						const pos=rules.indexOf(targetRule);
						rules.splice(pos,1);
						rules.splice(index,0,targetRule);
					}
				});
				
			}
		});

		function save(newVersion){
			var xml="<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
			xml+="<rule-set>";
			$.each(parameterLibraries,function(index,item){
				xml+="<import-parameter-library path=\""+item+"\"/>";
			});
			$.each(variableLibraries,function(index,item){
				xml+="<import-variable-library path=\""+item+"\"/>";
			});
			$.each(constantLibraries,function(index,item){
				xml+="<import-constant-library path=\""+item+"\"/>";
			});
			$.each(actionLibraries,function(index,item){
				xml+="<import-action-library path=\""+item+"\"/>";
			});
            // xml+=self.remark.toXml();
			try{
				for(var i=0;i<self.rules.length;i++){
					var rule=self.rules[i];
					xml+=rule.toXml();
				}
			}catch(error){
				console.log(error);
				console.log(error);
				return;
			}
			xml+="</rule-set>";
			console.log(xml);
		}
		function _addRule(data){
			var ruleContainer=$("<div class='well' style='margin:5px;padding:8px'></div>");
			self.append(ruleContainer);
			var rule=new urule.Rule(self,ruleContainer,data);
			self.rules.push(rule);
			
			return rule;
		};

		function _loadRulesetFileData(){
			setTimeout(function(){
				window.refreshVariableLibraries();
				window.refreshParameterLibraries();
				// var rule=_addRule();
				// rule.initTopJoin();
				_addRule({
					"name": "rule",
					"lhs": {
						"criterion": {
							"criterions": [
								{
									"op": "GreaterThen",
									"left": {
										"leftPart": {
											"variableName": "uuu",
											"variableLabel": "uuu",
											"variableCategory": "test",
											"datatype": "String"
										},
										"type": "variable"
									},
									"value": {
										"content": "4444",
										"valueType": "Input"
									},
									"necessaryClassList": []
								},
								{
									"op": "GreaterThen",
									"left": {
										"leftPart": {
											"variableName": "kkk",
											"variableLabel": "kkk",
											"variableCategory": "test",
											"datatype": "String"
										},
										"type": "variable"
									},
									"value": {
										"content": "000",
										"valueType": "Input"
									},
									"necessaryClassList": []
								},
								{
									"op": "GreaterThen",
									"left": {
										"leftPart": {
											"keyName": "test1",
											"variableName": "uuu",
											"variableLabel": "uuu",
											"variableCategory": "t1",
											"datatype": "String"
										},
										"type": "parameter"
									},
									"value": {
										"content": "444",
										"valueType": "Input"
									},
									"necessaryClassList": []
								}
							],
							"junctionType": "and"
						}
					},
					"rhs": {
						"actions": []
					},
					"other": {},
					"loopRule": false,
					"remark": "",
					"withElse": false
				});
			}, 1000)
		}
		
	};
})(jQuery);
