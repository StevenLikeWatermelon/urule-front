/**
 * @author GJ
 */
urule.Rule=function(parent,container,data){
	this.uuid=Math.uuid();
	this.namedMap=new Map();
	this.namedReferenceValues=[];
	container.prop('id',this.uuid);
	this.parent=parent;
	this.container=container;
	this.data=data;
	this.actions=[];
	this.elseActions=[];
	this.properties=[];
	this.init();
	this.initData();
};
urule.Rule.prototype.init=function(){
	this.ruleContainer=$("<div>");
	this.container.append(this.ruleContainer);
	this.initIf();
};
urule.Rule.prototype.initData=function(){
	if(!this.data){
		return;
	}
	this.name=this.data["name"];
	var lhs=this.data["lhs"];
	if(lhs){
		var criterion=lhs["criterion"];
		if(criterion){
			this.initCriterion(criterion);
		}else{
			this.initCriterion();			
		}
	}else{
		this.initCriterion();
	}
};
urule.Rule.prototype.initTopJoin=function(){
	var context=new urule.Context(this.conditionContainer,this);
	this.join=new urule.Join(context);
	this.join.init(null);
	this.join.initTopJoin(this.conditionContainer);
	this.join.setType("and");	
};
urule.Rule.prototype.initCriterion=function(criterion){
	var context=new urule.Context(this.conditionContainer,this);
	this.join=new urule.Join(context);
	this.join.init(null);
	this.join.initTopJoin(this.conditionContainer);
	var junctionType="and";
	if(criterion){
		junctionType=criterion["junctionType"];		
	}
	this.join.setType(junctionType);
	if(criterion){		
		this.join.initData(criterion);
	}
};
urule.Rule.prototype.addProperty=function(property){
	this.propertyContainer.append(property.getContainer());
	this.properties.push(property);
	
};
urule.Rule.prototype.initIf=function(){
	this.ifLabel=$("<div><strong>如果</strong></div>");
	this.ruleContainer.append(this.ifLabel);
	this.conditionContainer=$("<div>");
	this.conditionContainer.css({
		height:"40px",
		position:"relative"
	});
	this.ruleContainer.append(this.conditionContainer);
};
urule.Rule.prototype.toXml=function(){
	var xml="<rule name=\""+this.name+"\"";
	xml+=">";
	xml+="<if>";
	xml+=this.join.toXml();
	xml+="</if>";
	xml+="</rule>";
	return xml;
};