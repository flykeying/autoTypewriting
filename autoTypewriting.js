window.onload = function(){
	var iObj = document.getElementsByTagName('input');
	for(var i=0; i<iObj.length; i++){
		if(iObj[i].type == 'text' || iObj[i].type == 'email' || iObj[i].type == 'password'){
			if (iObj[i].onfocus == null){
				iObj[i].setAttribute( "onFocus" , "autoTypewriting(this)" )
				iObj[i].setAttribute( "onBlur" , "narrowBody()" )
				
			}else{
				//如果标签有属性则追加autoTypewriting
				iObj[i].setAttribute( "onFocus" , iObj[i].getAttribute('onfocus') + ";autoTypewriting(this)" )
				iObj[i].setAttribute( "onBlur" , iObj[i].getAttribute('onblur') + ";narrowBody()" )
			}
		  
		}
	}
};
function autoTypewriting(obj){
	var gsr = parseInt(window.screen.height*0.382) //相对于top的黄金分割点位置
	var objTop = getTop(obj)
	if (  objTop > gsr ){
		var pageHight = document.body.scrollHeight
		var newPageHight = document.body.scrollHeight*2
		document.body.style.height = newPageHight+'px'
		var y = parseInt(document.documentElement.scrollTop + getTop(obj) - gsr +30)
		window.scrollTo(0,y)
	}
}
function narrowBody(){
	var newPageHight = parseInt(document.body.scrollHeight/2)
	document.body.style.height = newPageHight+'px'
}
function getTop(e){
	//30是一个相对于黄金分割点的系数 建议在30-50之间
  var offset=e.offsetTop;
  offset = offset - document.documentElement.scrollTop+30
  return offset;
}
