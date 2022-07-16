/*
    roomName 방이름
    desc 방설명
    id 방 고유 id ex.1000 1001 ...
    e 동쪽 방의 고유 id (0이면 동쪽으로 연결이 안된 방, 특정id값이면 
        해당id방과 연결되었다는 뜻)
    w 서 //
    s 남 //
    n 북 //
   
*/
function Room(roomName,desc,id,e,w,s,n){
    this.roomName = roomName;
    this.desc = desc;
    this.id = id;
    this.east = e;
    this.west = w;
    this.south = s;
    this.north = n;
    

    this.displayRoomInfo = function(){
        tv("["+this.roomName+"]\n");
        tv(this.desc+"\n");
        tv(this.getRoomEnter()+"\n");
    }

    this.getRoomEnter = function(){
        var enters = "출구:[";
        if(e != 0){
            enters = enters + " 동";
        }
        if(w != 0){
            enters = enters + " 서";
        }
        if(s != 0){
            enters = enters + " 남";
        }
        if(n != 0){
            enters = enters + " 북";
        }
        enters = enters + " ]";
        return enters;
    }
}