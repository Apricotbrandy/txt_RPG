/* 
RPG(v0.1.0)

[v0.1.0 update]
- monster class
- character class
- monster parameter
- character parameter

 */
function monster(name,hp,attack){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.info = function(){
        hr();
        document.write("[Name: "+name+"][HP:" +hp+"][atk: "+ attack +"]")
        hr();
    }
}
function character(name,hp,attack){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.info = function(){
        hr();
        document.write("[Name: "+name+"][HP:" +hp+"][atk: "+ attack +"]")
        hr();
    }
}
var orc = new monster("orc warrior",100,10);
var human = new character("userName",100,10);

orc.info();
human.info();
