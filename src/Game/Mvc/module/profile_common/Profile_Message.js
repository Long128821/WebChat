var Profile_Message= {
    systemMessageLisTable:null,//系统站内信消息列表
    systemMessageReadTable:null,//读取消息回调
    getSystemMessageLisTable:function(){
        return this.systemMessageLisTable;
    },
    setSystemMessageLisTable:function(dataTable){
        this.systemMessageLisTable= dataTable== undefined?null:dataTable;
    },
    setSystemMessageReadTable:function(dataTable){
        this.systemMessageReadTable= dataTable== undefined?null:dataTable;
    },
    //获取站内消息数量
    getMessageCnt:function(){
        return this.systemMessageLisTable["messageList_Count"];
    },
    //获取消息列表
    getMessageListTable:function(){
        return this.systemMessageLisTable["MessageListTable"];
    },
    //检测是否还有未读系统邮件  来确定小红点的显示
    getSystemMessageIsShowRedPoint:function(){
        if(this.systemMessageLisTable== null|| this.systemMessageLisTable["MessageListTable"]== null||this.systemMessageLisTable["messageList_Count"]== 0){
            return false;
        }
        var messageListTable= this.systemMessageLisTable["MessageListTable"];
        for(var i=0; i< this.systemMessageLisTable["messageList_Count"]; ++i){
            if(messageListTable[i].MessageFlag == 0){
                return true;
            }
        }
        return false;
    }
};
