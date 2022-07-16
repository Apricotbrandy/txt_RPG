var orc = new monster("orc warrior",100,10);
var human = new character("userName",200,30);

//캐릭터 정보 출력 한꺼번에 출력되도록 하는 함수
displayCharactersInfo();

//battle start message
hr();
document.write("Battle Start!")
hr();

//attack message
var monsterDamage = getRandomAttackValue(orc.attack);
var playerDamage = getRandomAttackValue(human.attack);

//공격 후 남은 체력 계산
orc.currentHp = orc.currentHp - playerDamage;
document.write(human.name+ "가" + orc.name + "에게 데미지를 " + playerDamage + "입혔습니다.")
human.currentHp = human.currentHp - monsterDamage;
document.write(orc.name+ "가" + human.name + "에게 데미지를 " + monsterDamage + "입혔습니다.")


displayCharactersInfo();

//공격력을 해당 공격력 수치와 0 사의 값이 랜덤으로 나오도록하는 함수 정의
function getRandomAttackValue(attack){
    attack = attack + 1;
    var random = Math.floor(Math.random()*attack);
    return random;
}

//캐릭터 정보출력을 한꺼번에 출력되도록 하는 함수 정의
function displayCharactersInfo(){
    hr();
    human.info();
    orc.info();
    hr();
}