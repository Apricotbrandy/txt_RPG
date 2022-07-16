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
        currentMode = "대기"//현재 턴 타입을 대기 상태로 전환
        tvGameObjectClear();//게임 오브젝트 화면을 지움
    }else{
        tvClear();
        tv("LOSE...\n")
        tv(human.name+ "는 체력을 다했다.\n");
        tv("REPLAY?\n");
        currentMode = "대기"
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
    
    //비전투 상황 시의 턴 처리
    tv("특별한 것은 보이지 않는다.\n");
    tvGameObjectClear();
}

//메세지 textarea의 글이 길어질 경우 스크롤이 자동으로 아래로 내려가도록 처리
function screenMessageBoxScrollToBot(){
    // textarea.scrollTop = textarea.scrollHeight;
    screenMessageBox.scrollTop = screenMessageBox.scrollHeight;
}

//이동함수 추가
function east(){
    tv("동쪽으로 이동했다.\n")
    turn();
}
function west(){
    tv("서쪽으로 이동했다.\n")
    turn();
}
function south(){
    tv("남쪽으로 이동했다.\n")
    turn();
}
function north(){
    tv("북쪽으로 이동했다.\n")
    turn();
}

//현재 방 id를 가직 방 배열에서 방 객체를 리턴하는 함수
function getCurrentRoomObject(){
    for(var i=0; i<roomArray.length; i++){
        if(roomArray[i].id == currentRoomId){
            return roomArray[i];
        }
    }
}

//현재 id를 기준으로 출력하도록 처리함
function displayRoomInfo(){
    getCurrentRoomObject().displayRoomInfo();
}