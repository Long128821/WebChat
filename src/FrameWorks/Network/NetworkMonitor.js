//开启定时器，进行网络监测、心跳机制、断线重连
var NetworkMonitor= {
    monitorTime:100,//监测时间
    IDLE_INTERVAL:4000,//心跳的时间间隔为4s,超过两倍的时间心跳，超时重新连接
    mnLastRecvTime:0,//上一次收到消息的时间戳
    m_heartTimerID:null,//心跳定时器
    m_monitorTimerID:null,//判断定时器
    /**
     * Func:监听当前网络状况
     * 1、分发下行消息;
     * 2、发送上行消息;
     * 3、检测是否心跳超时，是否需要重连
     */
    logicNetwork:function(){
        var self= NetworkMonitor;
        //只有连接着，我们才去检测是否需要分发消息
        //问题:为什么在此处不需要检测WebSocket是否暂停？
        if(Network.getInstance().getWebSocketConnecting()&&(!MessageCenter.getIsWebSocketPause())){
            //接受消息
            MessageCenter.emitMessage();
            //发送消息
            MessageCenter.sendMessage();

            //已经建立连接
            var curTime= new Date().getTime();
            if(self.mnLastRecvTime== 0){
                //初始化时
                self.initLastRecvTime();
            }
            //心跳是否超时
            if((curTime- self.mnLastRecvTime)> self.IDLE_INTERVAL* 2){
                console.log("两次心跳超时！");
                //虽然此时
                self.initLastRecvTime();
                //断线重连
                //Network.getInstance().initNetwork();
            }
        }
    },

    //设置上一次设置心跳的时间
    initLastRecvTime:function(){
        this.mnLastRecvTime= new Date().getTime();
    },

    /**
     * Func:
     *      1、开启网络监测
     *      2、开启心跳定时器
     */
    startNetworkMonitor:function(){
        var self= this;
        this.initLastRecvTime();
        if(self.m_monitorTimerID== null){
            self.m_monitorTimerID= setInterval(self.logicNetwork, self.monitorTime);
        }

        if(self.m_heartTimerID== null){
            self.m_heartTimerID= setInterval(self.keepAlive, self.IDLE_INTERVAL);
        }
    },
    /**
     * Func:发送心跳上行消息
     */
    keepAlive:function(){
        //console.log("发送心跳！");
        sendIdleMsg();
    },

    /**
     * Func:关闭网络监测
     */
    closeNetworkMonitor:function(){
        var self= this;
        if(self.m_monitorTimerID!= null){
            clearInterval(self.m_monitorTimerID);
            self.m_monitorTimerID= null;
        }
        if(self.m_heartTimerID!= null){
            clearInterval(self.m_heartTimerID);
            self.m_heartTimerID= null;
        }
        this.mnLastRecvTime= 0;
    }
};
