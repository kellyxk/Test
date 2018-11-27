// JavaScript Document
function drag(id){
	var obj=document.getElementById(id);
	var disX=0;
	var disY=0;
	obj.onmousedown=function(ev){
		disX=ev.pageX-obj.offsetLeft;
		disY=ev.pageY-obj.offsetTop;
		document.onmousemove=function(ev){
			/*github老师用的left和top不能拖拽，我用的marginLeft
			和marginTop解决了问题*/
			if(obj.style.marginLeft<0){
				obj.style.marginLeft==0
				}
			if(obj.style.marginTop<0){
				obj.style.marginTop==0
				}	
				
			obj.style.marginLeft=ev.pageX-disX+'px';
			obj.style.marginTop=ev.pageY-disY+'px';
			};
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
			};	

		}
		return false;
	}
	
	
	
	
	
	
	
	
	
	
	