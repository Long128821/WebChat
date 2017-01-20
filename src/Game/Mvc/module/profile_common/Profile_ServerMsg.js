/**
 * Created by Administrator on 2016/12/22.
 */
if(typeof ServerMsgType== "undefined"){
    var ServerMsgType= {
        SEVER_MSG_RECHARGE_POPUP : 1,//充值弹窗
        SEVER_MSG_FLY_WORDS : 2,//飘字
        SEVER_MSG_MATCH_MSG : 3,//比赛播报
        SEVER_MSG_SERVER_NOTICE : 4,//系统公告
        SEVER_MSG_EXIT : 5,//强制退出
        SEVER_MSG_FLY_TOAST : 6,//Toast
        SEVER_MSG_EMIGRATED_FLY_WORDS : 7,//冲榜飘字
        SEVER_MSG_POPUP : 8//普通弹框
    };
}
var Profile_ServerMsg= {
    ServerMsgTable:{},
    ServerTime:{},
    getServerMsgTable:function(){
        return this.ServerMsgTable;
    },
    getTimeDifference:function(){
        if(this.ServerTime== null){
            return 0;
        }else{
            return this.ServerTime["TimeDifference"];
        }
    },
    //接收服务器通知
    readGAMEID_SERVER_MSG:function(dataTable){
        // Type Byte 类型 1:充值弹窗 2:飘字 3:比赛播报 4.系统公告 5.强制退出 6.Toast,7.冲榜飘字,8.普通弹框
        // Msg text 比赛状态的客户端提示语
        // 充值是否成功（充值特有）1成功，0失败
        // Second	Int	Toast飘字秒数	仅toast读取
        Profile_ServerMsg.ServerMsgTable= dataTable;
        Profile_ServerMsg.showMsg();
    },
    //同步服务器时间
    readBASEID_TIMESTAMP_SYNC:function(dataTable){
        var serverTime = dataTable["TimeStamp"];
        Profile_ServerMsg.ServerTime["TimeDifference"] = parseInt(Profile_JinHuaSetting.getTimeStamp()) - parseInt(serverTime);
//        console.log("Todo:与服务器同步时间");
//        console.log(dataTable);
    },
    showMsg:function(){
        var serverMsgTable= this.ServerMsgTable;
        // Type Byte 类型 1:充值弹窗 2:飘字 3:比赛播报 4.系统公告 5.强制退出 6.Toast,7.冲榜飘字,8.普通弹框
        var type= serverMsgTable["Type"];
        // Msg text 比赛状态的客户端提示语
        var msg= serverMsgTable["Msg"];
        // Second	Int	Toast飘字秒数	仅toast读取
        var toastSecond = serverMsgTable["toastSecond"];
        switch (type){
            case ServerMsgType.SEVER_MSG_RECHARGE_POPUP://充值弹窗
            {
                break;
            }
            case ServerMsgType.SEVER_MSG_FLY_WORDS://飘字
            {
                break;
            }
            case ServerMsgType.SEVER_MSG_MATCH_MSG://比赛播报
            {
                break;
            }
            case ServerMsgType.SEVER_MSG_SERVER_NOTICE://系统公告
            {
                break;
            }
            case ServerMsgType.SEVER_MSG_EXIT://强制退出
            {
                MvcEngine.createModule(GUI_SYSTEMPROMPTDIALOG);
                Profile_SystemPromptDialog.setCurMsg(msg);
                break;
            }
            case ServerMsgType.SEVER_MSG_FLY_TOAST://Toast
            {
                if(Common.judgeValueIsEffect(toastSecond)){
                    Common.showToast(msg, toastSecond);
                }else{
                    Common.showToast(msg);
                }
                break;
            }
            case ServerMsgType.SEVER_MSG_EMIGRATED_FLY_WORDS://冲榜飘字
            {
                break;
            }
            case ServerMsgType.SEVER_MSG_POPUP://普通弹窗
            {
                break;
            }
        }
    }
};

//接收服务器通知
Frameworks.addSlot2Signal(GAMEID_SERVER_MSG, Profile_ServerMsg.readGAMEID_SERVER_MSG);
//同步服务器时间
Frameworks.addSlot2Signal(BASEID_TIMESTAMP_SYNC, Profile_ServerMsg.readBASEID_TIMESTAMP_SYNC);
