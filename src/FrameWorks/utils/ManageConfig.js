var ManageConfig= {
    slot_JHID_TABLE_SYNC:function(dataTable){
        Profile_JinHuaGameData.updateJHID_TABLE_SYNC(dataTable);
        ManageConfig.openTable();
    },
    //获取房间列表
    slot_JINHUA_ROOMID_ROOM_LIST:function(dataTable){
        Profile_JinHuaRoomData.readJINHUA_ROOMID_ROOM_LIST(dataTable);
    },
    //进入牌桌
    openTable:function(){
        GameConfig.setCurBaseLayer(GUI_HALL);
        MvcEngine.createModule(GUI_JINHUATABLE);
    }
};
