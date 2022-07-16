var screenMessageBox; //screen_message_box
var screenGameObject; //screen_game_object
var screenPlayerInfo; //screen_player_info
var orc = new Monster("오크 전사",100,30,100);
var human = new Character("나",200,30,0);
var turnCount = 1;
var itTurn; //현재 턴 수를 표시하는 input text변수
var currentMode = "대기"; //현재 플레이 상태를 표시하는 변수(전투, 비전투)


window.onload = function(){
    screenMessageBox = document.getElementById("screen_message_box");
    screenGameObject = document.getElementById("screen_game_object");
    screenPlayerInfo = document.getElementById("screen_player_info");
    itTurn = document.getElementById("input_txt_turn");

    
    //캐릭터 정보 출력 한꺼번에 출력되도록 하는 함수
    displayCharactersInfo();
    
}
