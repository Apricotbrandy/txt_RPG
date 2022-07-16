function displayCharactersInfo(){
    human.info();
    orc.info();
    tv("\n");
}

//보상 획득 처리
function getReward(){
    human.gold = human.gold + orc.gold;
    tv(orc.gold + "골드를 얻었다!\n");
}

function getRandomAttackValue(attack){
    attack = attack + 1;
    var random = Math.floor(Math.random()*attack);
    return random;
}

//전투 종료 처리 (종료메세지 출력, 경험치 획득)
function endBattle(){
    if(orc.currentHp<=0){
        tv("clear!\n");
        //경험치 처리
        human.exp = human.exp + orc.exp;
        tv(orc.name+ "는 체력을 다했다."+human.name +"는 경험치 "+orc.exp+"을 얻었다.\n");
        getReward();
        currentMode = "비전투"
        tvGameObjectClear();
    }else{
        tv("LOSE...\n")
        tv(human.name+ "는 체력을 다했다.\n");
        currentMode = "비전투"
    }
}

function battleTurn(){
    //attack message
    var monsterDamage = getRandomAttackValue(orc.attack);
    var playerDamage = getRandomAttackValue(human.attack);
    
    //공격 후 남은 체력 계산
    orc.currentHp = orc.currentHp - playerDamage;
    tv(human.name+ "가 " + orc.name + "에게 데미지를 " + playerDamage + "입혔습니다. \n")
    human.currentHp = human.currentHp - monsterDamage;
    tv(orc.name+ "가 " + human.name + "에게 데미지를 " + monsterDamage + "입혔습니다. \n")
    
    //hp검사하기
    if(orc.currentHp<=0 || human.currentHp<=0){
        endBattle(); //전투 종료 처리
        displayCharactersInfo();
        return false;
    }else{
        displayCharactersInfo();
        return true;
    }
}

function turn(){
    if(currentMode == "전투"){
        battleTurn();
    }else{
        normalTurn();
    }
    turnCount++;
    itTurn.value = turnCount;
    console.log("현재 턴은? : "+turnCount);
}

function normalTurn(){
    tvClear(); //메세지 창을 지움
    //비전투 상황 시의 턴 처리
    tv("한동안은 잠잠하겠군...\n");
    tvGameObjectClear();
}

var screenMessageBox; //screen_message_box
var screenGameObject; //screen_game_object
var screenPlayerInfo; //screen_player_info
var orc = new Monster("오크 전사",100,30,100);
var human = new Character("나",200,30,0);
var turnCount = 0;
var itTurn; //현재 턴 수를 표시하는 input text변수
var currentMode = "전투"; //현재 플레이 상태를 표시하는 변수(전투, 비전투)


window.onload = function(){
    screenMessageBox = document.getElementById("screen_message_box");
    screenGameObject = document.getElementById("screen_game_object");
    screenPlayerInfo = document.getElementById("screen_player_info");
    itTurn = document.getElementById("input_txt_turn");

    //캐릭터 정보 출력 한꺼번에 출력되도록 하는 함수
    displayCharactersInfo();

    //battle start message
    tv("Battle Start!\n");

    /* //전투 무한루프 처리
    var loop = true;
    while(loop){
        loop = battleTurn();
    } */
}