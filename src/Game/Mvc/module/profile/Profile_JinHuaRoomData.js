var Profile_JinHuaRoomData= {
    ROOMID_BASIC_LOW : 1, //经典场普通场
    ROOMID_BASIC_MID : 2, //经典场高级场
    ROOMID_BASIC_HIGH : 3, //经典场富豪场

    ROOMID_SHARK_LOW : 4, //千王场普通场
    ROOMID_SHARK_MID : 5, //千王场高级场
    ROOMID_SHARK_HIGH : 6, //千王场富豪场

    TYPE_JINGDIAN : 1, //显示经典场模式
    TYPE_QIANWANG : 2,//显示千王场模式
    m_curRoomType:0,
    JinHuaRoomListTable:null,//房间列表(JINHUA_ROOMID_ROOM_LIST)
    JingDianRoomList:null,//经典场列表
    QianWangRoomList:null,//千王场列表
    getCurRoomType:function(){
        return this.m_curRoomType;
    },
    setCurRoomType:function(type){
        this.m_curRoomType= type==undefined?0:type;
    },
    //获取经典场列表
    getJingDianRoomList:function(){
        return this.JingDianRoomList;
    },
    //获取经典场列表
    getQianWangRoomList:function(){
        return this.QianWangRoomList;
    },
    //获取当前房间列表
    getCurActiveRoomList:function(){
        if(this.m_curRoomType== 0){
            return null;
        }else if(this.TYPE_JINGDIAN== this.m_curRoomType){
            return this.JingDianRoomList;
        }else{
            return this.QianWangRoomList;
        }
    },
    //根据当前ID获取房间
    getRoomByID:function(roomID){
        if(this.JinHuaRoomListTable== null) return null;
        if(!this.JinHuaRoomListTable["Rooms"].hasOwnProperty(roomID)) return null;
        //遍历房间
        for(var key in this.JinHuaRoomListTable["Rooms"]){
            var room= this.JinHuaRoomListTable["Rooms"][key];
            if(room.roomID== roomID){
                return room;
            }
        }
        return null;
    },
    //获取房间列表(JINHUA_ROOMID_ROOM_LIST)
    readJINHUA_ROOMID_ROOM_LIST:function(dataTable){
        this.JinHuaRoomListTable= dataTable;
        this.JingDianRoomList = {};
        this.QianWangRoomList = {};

        for(var i=0;i< dataTable["RoomsCnt"]; ++i){
            var roomType= dataTable["Rooms"][i].roomType;
            if(roomType== this.TYPE_JINGDIAN){//经典场
                this.JingDianRoomList[i]= dataTable["Rooms"][i];
            }else if(roomType== this.TYPE_QIANWANG){//千王场
                this.QianWangRoomList[i]= dataTable["Rooms"][i];
            }
        }
    },
    //获取金花房间Data
    getJinHuaRoomData:function(){
        return ((this.JinHuaRoomListTable["Rooms"]== undefined||this.JinHuaRoomListTable["Rooms"]== null)?null:this.JinHuaRoomListTable["Rooms"]);
    }
};