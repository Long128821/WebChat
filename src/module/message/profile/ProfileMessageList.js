//数据图标集
var ProfileMessageList= {
    m_curMsgID:0,//被选中的消息ID
    slot_MAIL_SYSTEM_MESSGE_LIST:function(dataTable){
        Profile_Message.setSystemMessageLisTable(dataTable);
        MessageListLogic.setMailLists();
    },
    slot_MAIL_SYSTEM_MESSAGE_READ:function(dataTable){
        Profile_Message.setSystemMessageReadTable(dataTable);
    },
    getCurMsgID:function(){
        return this.m_curMsgID;
    }
};
