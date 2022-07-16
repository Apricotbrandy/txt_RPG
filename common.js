//textarea에 텍스트 입력 처리
function tv(str){
    var screenString = screenMessageBox.value;
    screenString = screenString + str;
    screenMessageBox.value = screenString;
    screenMessageBoxScrollToBot();
}
function tvPlayerInfo(str){
    var screenString = screenPlayerInfo.value;
    screenPlayerInfo.value = str;
}
function tvMonsterInfo(str){
    var screenString = screenGameObject.value;
    screenGameObject.value = str;
}
//textarea 텍스트 지우기
function tvClear(){
    screenMessageBox.value = "";
}
function tvPlayerInfoClear(){
    screenPlayerInfo.value = "";
}
function tvGameObjectClear(){
    screenGameObject.value = "";
}



function dw(str){
    document.write(str);
}
function br(){		
	document.write("<br>");	
}	
function hr(){
    document.write("<hr>");	
}	
		