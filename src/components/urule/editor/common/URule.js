/**
 * @author GJ
 */
window._ConstantValueArray=[];
window._ActionTypeArray=[];
window._VariableValueArray=[];
window._ParameterValueArray=[];
window._FunctionValueArray=[];
window.actionLibraries=[];
window.variableLibraries=[];
window.constantLibraries=[];
window.parameterLibraries=[];
window.urule={};

window.generateContainer=function(){
	var container=$("<span>.</span>");
	container.css({
		height:"20px",
		cursor:"pointer",
		margin:"0px",
		color:"white",
		border:"dashed transparent 1px"
	});
	container.mouseover(function(){
		container.css({
			border:"dashed gray 1px"
		});
	});
	container.mouseout(function(){
		container.css({
			border:"dashed transparent 1px"
		});
	});
	return container;
};

window.refreshParameterLibraries=function(){
	
	let data = [
		[
			{
				"name": "test",
				"type": "Custom",
				"clazz": "kkk",
				"variables": [
					{
						"name": "kkk",
						"label": "kkk",
						"type": "String",
						"dataType": "String",
						"act": "InOut"
					},
					{
						"name": "uuu",
						"label": "uuu",
						"type": "String",
						"dataType": "String",
						"act": "InOut"
					}
				]
			},
			{
				"name": "test2",
				"type": "Custom",
				"clazz": "kkk2",
				"variables": [
					{
						"name": "kkk2",
						"label": "kkk23",
						"type": "String",
						"dataType": "String",
						"act": "InOut"
					},
					{
						"name": "uuu2",
						"label": "uuu2",
						"type": "String",
						"dataType": "String",
						"act": "InOut"
					}
				]
			}
		]
	]
			window._uruleEditorParameterLibraries=data;
			$.each(window._ParameterValueArray,function(index,item){
				item.initMenu(data);
			});
};

window.refreshVariableLibraries=function(){
	let data = [[{"name":"test","type":"Custom","clazz":"kkk","variables":[{"name":"kkk","label":"kkk","type":"String","dataType":"String","act":"InOut"},{"name":"uuu","label":"uuu","type":"String","dataType":"String","act":"InOut"}]}]]
			window._uruleEditorVariableLibraries=data;
			$.each(window._VariableValueArray,function(index,item){
				item.initMenu(data);
			});
};
window.refreshActionLibraries=function(){
	var actionFiles="";
	for(var i=0;i<actionLibraries.length;i++){
		var action=actionLibraries[i];
		if(i==0){
			actionFiles=action;
		}else{
			actionFiles+=";"+action;
		}
	}
	if(actionFiles=="" || actionFiles.length<2){
		actionFiles="builtinactions";
	}
	var url=window._server+'/common/loadXml';
	$.ajax({
		type:'POST',
		data:{files:actionFiles},
		url:url,
		error:function(req,error){
			console.log("加载文件失败！");
		},
		success:function(data){
			window._uruleEditorActionLibraries=data;
			$.each(window._ActionTypeArray,function(index,item){
				item.initMenu(data);
			});
		}
	});
};
window.refreshFunctionLibraries=function(){
	var url=window._server+'/common/loadFunctions';
	$.ajax({
		url:url,
		error:function(req,error){
			console.log("加载函数失败！");
		},
		success:function(data){
			window._uruleEditorFunctionLibraries=data;
			$.each(window._FunctionValueArray,function(index,item){
				item.initMenu(data);
			});
		}
	});
};

window.refreshConstantLibraries=function(){
	var constantFiles="";
	for(var i=0;i<constantLibraries.length;i++){
		var constant=constantLibraries[i];
		if(i==0){
			constantFiles=constant;
		}else{
			constantFiles+=";"+constant;
		}
	}
	if(constantFiles=="" || constantFiles.length<2){
		return;
	}
	var url=window._server+'/common/loadXml';
	$.ajax({
		data:{files:constantFiles},
		url:url,
		type:'POST',
		error:function(req,error){
			console.log("加载文件失败！");
		},
		success:function(data){
			window._uruleEditorConstantLibraries=data;
			$.each(window._ConstantValueArray,function(index,item){
				item.initMenu(data);
			});
		}
	});
};


