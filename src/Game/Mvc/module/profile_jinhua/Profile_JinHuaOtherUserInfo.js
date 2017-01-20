//JINHUA_MGR_SETTING消息
var Profile_JinHuaOtherUserInfo= {
    JinHuaOtherUserInfoTable:null,//金花settingsTable
    //读取消息体
    readJINHUA_MGR_USER_INFO:function(dataTable){
        this.JinHuaOtherUserInfoTable= dataTable== undefined?{}:dataTable;
    },
    //获取table
    getUserInfoTable:function(){
        return this.JinHuaOtherUserInfoTable;
    }
};