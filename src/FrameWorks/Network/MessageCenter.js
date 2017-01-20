//消息的接收、发送类型
var MessageControlType= {
    Response:0,//接受
    Send:1//发送
};
/**
 * Func:在消息队列中，接收和发送消息，统一管理
 */
var MessageCenter= {
    m_isWebSocketPause:true,//当前WebSocket是否暂停
    arrPauseMessage:[],
    getIsWebSocketPause:function(){
        return this.m_isWebSocketPause;
    },
    setIsWebSocketPause:function(isPause){
        this.m_isWebSocketPause= ((isPause== undefined)?false:isPause);
    },
    //WebSocket连接成功
    connectSuccess:function(){
        //先关闭网络监测，再开启网络监测
        NetworkMonitor.closeNetworkMonitor();
        NetworkMonitor.startNetworkMonitor();

        this.updateSign();

        //不可以接收、发送消息
        this.setIsWebSocketPause(false);

        //清空
        this.arrPauseMessage= [];
    },
    //更新登陆界面的状态
    updateSign:function(){
        if(typeof  LoginLogic!= "undefined"){//此时登录对象是否已经定义
            LoginLogic.setIPLabel();
        }
    },
    //WebSocket连接断开
    unConnect:function(){
        //拒绝接受和转发消息
        this.setIsWebSocketPause(true);
        //断开了连接，更新文本
        this.updateSign();
        //断线重连
        //this.reConnect();
    },
    //WebSocket断线重连
    reConnect:function(){
        //先关闭，再执行重连操作
        Network.getInstance().closeWebSocket();
        //因为关闭和重连是同步的,所以，需要等到关闭之后，再进行连接
        //而且仅执行一次，所有使用标志位，标记一下
        var bReconnect= false;
        var closeTimer= setInterval(function(){
            if(!bReconnect&&!Network.getWebSocketConnecting()){
                Network.getInstance().initNetwork();
                bReconnect= false;
                clearInterval(closeTimer);
            }
        },100);
    },
    /*********消息缓存***************/
    /**
     * 说明:不管缓冲池中是否有该消息，都添加到缓冲池中，先进先出
     * @param controlType 是接收，还是发送
     * @param baseMessage 消息缓冲
     */
    addBaseMessage:function(controlType,baseMessage){
        var messageDictionary= FrameWorkDataPool.getInstance();//获取消息缓存列表
        //缓冲池中，已经存在，在缓冲池的最后，追加元素
        messageDictionary.setObject(controlType, baseMessage);
    },
    /**
     * Func:读取缓冲池中的第一个消息,读取之后，移除
     * @param controlType 消息的接收、发送类型
     * @returns 消息(NMBaseMessage类型)
     */
    getBaseMessage:function(controlType){
        var messageDictionary= FrameWorkDataPool.getInstance();//获取消息缓存列表
        var nmBaseMessage= messageDictionary.getFirstMessage(controlType);//获取缓冲池中的第一个消息
        //从缓冲池中，
        this.removeBaseMessage(controlType,nmBaseMessage.getMsgType());

        return nmBaseMessage;
    },
    /**
     * Func:移除指定的消息ID缓存
     * @param controlType
     * @param msgID 要移除的消息ID
     */
    removeBaseMessage:function(controlType,msgID){
        var messageDictionary= FrameWorkDataPool.getInstance();//获取消息缓存列表
        messageDictionary.removeObjectForKey(controlType,msgID);
    },
    /**
     * Func:移除所有的消息缓存(读、写消息队列)
     */
    removeAllBaseMessage:function(){
        var messageDictionary= FrameWorkDataPool.getInstance();//获取消息缓存列表
        messageDictionary.removeAllObjects();
    },
    /**
     * Func:
     *      1、接受下行消息
     *      2、重置最后一次心跳时间
     *      3、将二进制数组buffer，转换为NMBaseMessage数据类型,添加到消息缓存队列中
     * @param buffer 网络中的二进制数组buffer
     */
    acceptMessage:function(buffer){
        if(!MessageCenter.getIsWebSocketPause()){//可否接受信息
            //重置最后一次心跳时间
            NetworkMonitor.initLastRecvTime();
            //存储基本消息
            var nmBaseMessage= new NMBaseMessage(buffer);
            //添加到消息缓冲池中
            MessageCenter.addBaseMessage(MessageControlType.Response, nmBaseMessage);
        }
    },
    /**
     * Func:读取消息队列中的消息，分发给对应的界面
     */
    emitMessage:function(){
        //是否暂停
        if(!this.getIsWebSocketPause()) {
            var messageDictionary = FrameWorkDataPool.getInstance();//获取消息缓存列表
            var controlType= MessageControlType.Response;
            //读取缓冲池是否为空
            if (!messageDictionary.isEmpty(controlType)) {//读取缓冲池中的消息，分发给对应的界面
                //分发消息
                MessageRouting.messageDistribute(this.getBaseMessage(controlType));
            }
        }
    },
    /**
     * Func:读取消息队列中的消息，发送给服务器
     */
    sendMessage:function(){
        //是否暂停
        if(!this.getIsWebSocketPause()) {
            var messageDictionary = FrameWorkDataPool.getInstance();//获取消息缓存列表
            var controlType= MessageControlType.Send;
            //读取缓冲池是否为空
            if (!messageDictionary.isEmpty(controlType)) {//读取缓冲池中的消息，分发给对应的界面
                //分发消息
                MessageRouting.sendMessage(this.getBaseMessage(controlType));
            }
        }
    },
    //暂停分发某个消息
    pauseMessage:function(msgID){
        var id= this.getMessageIndex();
        if(id== -1){
            this.arrPauseMessage.push(msgID);
        }else{
            this.arrPauseMessage[msgID]= msgID;
        }
        this.setIsWebSocketPause(true);
    },
    //恢复分发某个消息
    resumeMessage:function(msgID){
        var id= this.getMessageIndex(msgID);
        if(id!= -1){
            delete this.arrPauseMessage[id];
        }
        this.setIsWebSocketPause(false);
    },
    //数组中是否包含某个消息ID,返回下标
    getMessageIndex:function(msgID){
        for(var i=0; i< this.arrPauseMessage.length; ++i){
            if(this.arrPauseMessage[i]== msgID){
                return i;
            }
        }
        return -1;
    },
    //获取消息暂停数组
    getPauseMessage:function(){
        return this.arrPauseMessage;
    }
};
//Todo:同一个按钮，可以发送多个消息