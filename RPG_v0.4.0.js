/**********************************************************************
rpg (v0.4.0)
***********************************************************************
[기존 기능]
- 몬스터 클래스 생성
- 플레이어 클래스 생성
- 몬스터 객체 생성(orc)
- 플레이어 객체 생성(elf)
- 전투 시작 메세지 출력
- 전투 처리 ( 한 턴 <한차례의 서로간의 공격> )
- 공격력을 해당 공격력 수치와 0사이의 값이 랜덤으로 나오도록 수정하였습니다.
- 공격 메세지 출력 추가( ex. 오크전사가 엠피스에게 데미지를 10 입혔습니다. )
[v0.4.0 업데이트 내용]
- 체력 표시를 [현재체력/최대체력] 식으로 변경하였습니다.
- 캐릭터 정보 표시를 수정하였습니다. ex. [엠피스(70/100)]
- 캐릭터 정보 표시에서 공격력 수치를 제거하였습니다.
**********************************************************************/
function monster(name,hp,attack){
    this.name = name;
    this.currentHp = hp; //현재 체력
    this.maxHp = hp; // 최대 체력
    this.attack = attack;
   
    this.info = function(){
        hr();
        document.write("["+this.name+"]["+this.currentHp+" / " +this.maxHp+"]")
        hr();
    }
}
function character(name,hp,attack){
    this.name = name;
    this.currentHp = hp; //현재 체력
    this.maxHp = hp; // 최대 체력
    this.attack = attack;
    this.info = function(){
        hr();
        document.write("[Name: "+this.name+"]["+this.currentHp+" / " +this.maxHp+"]")
        hr();
    }
}
var orc = new monster("orc warrior",100,10);
var human = new character("userName",200,30);

orc.info();
human.info();

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


orc.info();
human.info();

function getRandomAttackValue(attack){
    attack = attack + 1;
    var random = Math.floor(Math.random()*attack);
    return random;
}