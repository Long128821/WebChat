/**
 * Func:网络连接(单例模式)
 * 以二进制流的传递方式，传输数据
 */
var Network= {
    webSocket:null,//WebSocket连接单例
    getInstance:function(){
        return this;
    },
    //初始化网络配置
    initNetwork:function(){
        this.clearData();

        console.log('network initSocket...');
        //判断浏览器是否支持WebSocket
        if(window.WebSocket){
            this.initWebSocket();//初始化WebSocket
        }else{
            alert("该浏览器不支持WebSocket!");
        }
    },
    //初始化WebSocket
    initWebSocket:function(){
        var self= Network;
        var host= "ws://"+ NetworkConfig.getCurURL();//默认为列表中的第一个
        self.webSocket = new WebSocket(host);//创建目标WebSocket服务器
        self.webSocket.binaryType="arraybuffer";//以二进制传递方式传输数据
        /**
         * 说明:
         *  在函数体内使用self，而不使用this的原因是:
         *  在函数体内,this的值为(this.webSocket)
         */
        //连接成功之后，会自动打开onopen方法
        self.webSocket.onopen = function(evt){
            console.log('network onOpen...');
            //通知消息中心(MessageCenter)连接成功
            MessageCenter.connectSuccess();
        };

        //连接成功之后，前台获取后台的信息
        self.webSocket.onmessage = function(evt){
            //console.log("接受");
            //WebSocket
            MessageCenter.acceptMessage(evt.data);
        };

        //Socket连接失败时，会自动调用该函数
        /**
         * 说明:
         * 断线重连机制， 没有在onerror中执行，仅仅只是在onclose中执行的原因是:
         * 发送onerror时，一定会执行oncolse
         */

        self.webSocket.onerror = function(evt){
            console.log('network onError...');
            self.clearData();//清空数据
            //拒绝接受和转发消息
            MessageCenter.unConnect();
        };

        //Socket关闭时，自动调用该函数
        self.webSocket.onclose = function(evt){
            console.log('network onClose...');
            self.clearData();//清空数据
            MessageCenter.unConnect();
        };
    },
    //清空数据，关闭心跳连接
    clearData:function(){
        var self= this;
        self.webSocket= null;
    },
    //关闭连接
    closeWebSocket:function(){
        (this.webSocket!=null)&&this.webSocket.close();
        this.clearData();
    },
    //获取webSocket状态
    getWebSocketConnecting:function(){
        return (this.webSocket&&(this.webSocket.readyState== WebSocket.OPEN));
    },
    /**
     * Func:发送信息，以二进制数组的方式传送
     * @param data 要发送的二进制数组(ArrayBuffer)
     */
    send:function(data){
        if (!this.getWebSocketConnecting()){
            console.log('network is not inited...');
        }else if(this.getWebSocketConnecting()){
            if(((Object.prototype.toString.call(data) == "[object ArrayBuffer]"))){
                this.webSocket.send(data);
            }else{//Text文本格式传输
                alert("Send失败:数据不是ArrayBuffer类型！");
            }
        }else{
            console.log('network WebSocket readState:'+this.webSocket.readyState);
        }
    },

    //发送消息
    sendMessage:function(nmBaseMessage){
        if(typeof nmBaseMessage!= "object") return;
        //将要发送的消息，添加到消息缓冲池中
        MessageCenter.addBaseMessage(MessageControlType.Send, nmBaseMessage);
    }
};