//数据图标集
var ProfileRoomList= {
    //发送扎金花房间列表消息
    slot_JINHUA_ROOMID_ROOM_LIST:function(dataTable){
        Profile_JinHuaRoomData.readJINHUA_ROOMID_ROOM_LIST(dataTable);
        RoomListLogic.initRoomListView();
    },
    //进入房间
    slot_JHID_ENTER_ROOM:function(dataTable){
        console.log(dataTable);
    },
    //创建房间
    slot_JINHUA_MGR_BUILD_TABLE_INFO:function(dataTable){
        console.log(dataTable);
    }
};
