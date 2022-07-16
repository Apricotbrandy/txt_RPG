//캐릭터 정보출력을 한꺼번에 출력되도록 하는 함수 정의
function displayCharactersInfo(){
    human.info();
    orc.info();
    tv("\n");
}

//보상 획득 처리
function getReward(){
    human.gold = human.gold + orc.gold;
    tv(orc.gold+"골드를 얻었습니다.\n");
}

//공격력을 해당 공격력 수치와 0 사의 값이 랜덤으로 나오도록하는 함수 정의
function getRandomAttackValue(attack){
    attack = attack + 1;
    var random = Math.floor(Math.random()*attack);
    return random;
}

//전투 종료 처리
function endBattle(){
    if(orc.currentHp<=0){
        tv("clear!\n");
        //경험치 처리
        human.exp = human.exp + orc.exp;
        tv("오크전사는 최선을 다했습니다. 나는 경험치 "+orc.exp+"을 얻었습니다.\n");
        getReward();
    }else{
        tv("LOSE...\n")
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


var screenMessageBox; //screen_message_box
var screenGameObject; //screen_game_object
var screenPlayerInfo; //screen_player_info
var orc = new Monster("오크 전사",100,30,100);
var human = new Character("나",200,30,0);

window.onload = function(){
    screenMessageBox = document.getElementById("screen_message_box");
    screenGameObject = document.getElementById("screen_game_object");
    screenPlayerInfo = document.getElementById("screen_player_info");

    //캐릭터 정보 출력 한꺼번에 출력되도록 하는 함수
    displayCharactersInfo();

    //battle start message
    tv("Battle Start!\n");

    //전투 무한루프 처리
    var loop = true;
    while(loop){
        loop = battleTurn();
    }
}