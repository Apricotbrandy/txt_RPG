/* 
RPG(v0.1.0)

[v0.1.0 update]
- monster class
- character class
- monster parameter
- character parameter

[v0.2.0 update]
- battle start message

 */
function monster(name,hp,attack){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
   
    this.info = function(){
        hr();
        document.write("[Name: "+this.name+"][HP:" +this.hp+"][atk: "+ this.attack +"]")
        hr();
    }
}
function character(name,hp,attack){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.info = function(){
        hr();
        document.write("[Name: "+this.name+"][HP:" +this.hp+"][atk: "+ this.attack +"]")
        hr();
    }
}
var orc = new monster("orc warrior",100,10);
var human = new character("userName",100,10);

orc.info();
human.info();

//battle start message
hr();
document.write("Battle Start!")
hr();

orc.hp = orc.hp - human.attack;
human.hp = human.hp - orc.attack;
orc.info();
human.info();
