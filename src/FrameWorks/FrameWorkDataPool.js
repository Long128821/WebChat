/**
 *
 * 每一个元素的值为：Signal, nmBaseMessage
 * 原则:
 *      追加消息时，不管消息缓存中是否有该消息，都存储进来，
 *      但是获取时，以先进先出的原则进行处理，有了消息之后，
 */
var FrameWorkDataPool= {
    readElements:[],
    writeElements:[],
    getInstance:function(){
        return this;
    },
    /**
     * Func:接受消息缓冲池是否为空
     * @param controlType
     */
    isEmpty:function(controlType){
        var element= ((controlType== MessageControlType.Response)?this.readElements:this.writeElements);
        return ((element.length== 0)?true:false);
    },
    /**
     * Func:获取消息缓冲池的第一个,获取之后立即删除
     * @returns {*}
     */
    getFirstMessage:function(controlType){
        var element= ((controlType== MessageControlType.Response)?this.readElements:this.writeElements);
        return element[0]["nmBaseMessage"];
    },
    /**
     * Func:追加消息
     * @param controlType
     * @param nmBaseMessage
     */
    setObject:function(controlType, nmBaseMessage){
        var element= this.writeElements;
        if(controlType== MessageControlType.Response){
            nmBaseMessage.readStart();//读取消息头
            element= this.readElements;
        }
        var map= {};

        //追加元素
        map["Signal"]= nmBaseMessage.getMsgType();
        map["nmBaseMessage"]= nmBaseMessage;

        element.push(map);
    },
    /**
     * Func:移除所有key相同的值
     * 说明:
     *      1、为什么不使用for(var i in this.readElements)?
     *      2、为什么移除成功之后，要执行i--;
     *      上述两个问题的原因都是因为:
     *      假如：删除下标为2的数值，此时的i为2,执行++i之后,i为3,
     *      将会跳过原来的下标为3的值
     */
    removeObjectForKey:function(controlType,key){
        var element= ((controlType== MessageControlType.Response)?this.readElements:this.writeElements);
        for(var i=0; i< element.length; ++i){
            var map= element[i];
            if(map["Signal"]== key){//判断key值是否相等
                element.splice(i, 1);
                break;
            }
        }
    },
    /**
     * Func:获取执行key的值
     */
    getObjectForKey:function(controlType,key){
        var element= ((controlType== MessageControlType.Response)?this.readElements:this.writeElements);
        for(var i in element){
            var map= element[i];
            if(map["Signal"]== key){
                return map["Signal"];
            }
        }
    },
    /**
     * Func:移除所有的map
     */
    removeAllObjects:function(){
        for(var i=0; i< this.readElements.length; ++i){
            this.readElements.splice(i, 1);
            i--;
        }
        this.readElements= [];


        for(var i=0; i< this.writeElements.length; ++i){
            this.writeElements.splice(i, 1);
            i--;
        }
        this.writeElements= [];
    }
};

//Todo:可否直接赋值为[]，是否发生内存泄露