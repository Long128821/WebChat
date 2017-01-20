/**
 * Func:根据消息缓存队列中的数据，发送给服务器或者发送给对应的界面中
 */
var MessageRouting= {
    /**
     * Func:消息分发，发给对应的界面
     * @param buffer 二进制流(ArrayBuffer)
     */
    messageDistribute:function(nmBaseMessage){
        if(!Common.judgeValueIsEffect(nmBaseMessage)) return;

//        console.log("下行消息ID:0x"+ nmBaseMessage.getMsgType());
        //读取消息
        var funcName= "read"+ nmBaseMessage.getMsgType();
        //将字符串80010002-->16进制表示-->10进制表示
        var value= parseInt(nmBaseMessage.getMsgType(), 16);
        var msgID= value> ACK?parseInt(nmBaseMessage.getMsgType(), 16)- ACK:value;
        //已注册消息中，是否包含该消息ID
        if(Frameworks.isContainsSignal(msgID)){
            var dataTable= eval(funcName)(nmBaseMessage);
            if(!Common.judgeValueIsEffect(Frameworks.m_signalSlotTable[msgID])) return;
            //分发消息
            Frameworks.emit(msgID, dataTable);
        }else{
            console.warn("\nMessageRouting.js-function is not define!MsgType:0x"+ nmBaseMessage.getMsgType());
        }

        //清除数据
        nmBaseMessage.clear();
    },
    /**
     *Func:将消息缓存队列中的消息,上行发送给服务器
     */
    sendMessage:function(nmBaseMessage){
        Network.getInstance().send(nmBaseMessage.getArrayBuffer());
    }
};
