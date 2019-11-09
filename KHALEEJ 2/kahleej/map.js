function loading(input,idbody,idloader,submit){new Effect.Opacity(idbody,{from:1,to:0.7});input.style.display='none';window.document.getElementById(idloader).style.display='inline';if(submit)
window.document.forms[0].submit();return true;};var ie6=false;var ie=false;var moz=false;function browser(){var ua=navigator.userAgent.toLowerCase();moz=(ua.indexOf('gecko')!=-1&&ua.indexOf('safari')==-1);ie=(ua.indexOf('msie')!=-1);if(ie){if(ua.toUpperCase().indexOf('MSIE 6')!=-1||ua.toUpperCase().indexOf('MSIE 5.5')!=-1||ua.toUpperCase().indexOf('MSIE 7.0')!=-1)
ie6=true;}}
browser();function addEvent(obj,type,fn)
{if(obj.addEventListener)
{obj.addEventListener(type,fn,false);}
else if(obj.attachEvent)
{obj["e"+type+fn]=fn;obj[type+fn]=function(){obj["e"+type+fn](window.event);}
obj.attachEvent("on"+type,obj[type+fn]);}}
addEvent(document,'keydown',OnKeyFxxDown);function KillEvent(oEvent)
{if(oEvent.preventDefault)oEvent.preventDefault();if(oEvent.stopPropagation)oEvent.stopPropagation();oEvent.cancelBubble=true;oEvent.returnValue=false;}