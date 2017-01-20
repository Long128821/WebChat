/**
 * Func:按钮的响应事件和界面的创建销毁信号
 */
var Frameworks= {
    m_curButton:null,//当前
    m_signalSlotTable:{},//存放信号
    m_callbackEventTable:{},//存放点击事件
    m_callBackOnKeypadEventTable:{},//存放返回键事件(android特有)
    //清空除了function以外的所有数据
    //同时view也不清空
    moduleCleanUp:function(moduleTable){
        //console.log("moduleCleanUp");
        for(var key in moduleTable){
            if(typeof moduleTable[key]== "object"&&key!= "view"){
                moduleTable[key]= null;
            }
        }
    },
    //释放
    releaseClick:function(){
        //console.log("releaseClick");
        this.m_curButton= null;
    },
    //点击事件的回调
    callbackHandle:function(component, event){
        //console.log("callbackHandle");
        var self= Frameworks;
        if(event== ccui.Widget.TOUCH_BEGAN){
            //当前有按钮进行操作，没有释放
            if(self.m_curButton!= null) return true;
            //当前活动按钮
            self.m_curButton= component;
        }

        //当前没有按钮 或者 当前按钮与要操作的按钮不匹配，则返回
        if(self.m_curButton== null||self.m_curButton!= component) return false;

        if(event== ccui.Widget.TOUCH_ENDED|| event== ccui.Widget.TOUCH_CANCELED){
            Frameworks.releaseClick();
        }

        //遍历Map
        //首先判断Map是否存在
        if(self.m_callbackEventTable.hasOwnProperty(component._name)){
            var contain= self.m_callbackEventTable[component._name];
            if(Common.judgeValueIsEffect(contain)){
                if(contain.hasOwnProperty(event)&&Common.judgeValueIsEffect(contain[event])){//判断控件是否一致
                    //是否有会有回调方法
                    contain[event](component, event);
                }
            }
        }
    },
    /**
     * Func:绑定点击事件
     * @param logicName 控件所处的logic名
     * @param component 要绑定的控件(cc.widget)
     * @param callback 回调函数
     * @param event 绑定事件(按钮响应类型)
     * @param btnEffectEvent 特效(点击时，是否有特效，是否音效)
     * 多添加一个logic名的原因是:
     * Lua全局变量，覆盖
     * js私有成员变量，如果仅仅在table中按照key访问，不确切
     */
    bindEventCallback:function(logicName,component, callback, event, btnEffectEvent){
        if(component== null) return;
        var map= {};
        component._name= logicName+ component._name;
        if(!this.m_callbackEventTable.hasOwnProperty(component._name)||this.m_callbackEventTable[component._name]== null){
            this.m_callbackEventTable[component._name]= map;
        }

        //Todo:其他事件的监听
        map[event]= callback;//单击事件
        map["btnEffectEvent"]= btnEffectEvent;

        component.addTouchEventListener(this.callbackHandle);
    },
    /**
     * Func:解绑点击事件
     * @param component 要解绑的控件(cc.widget)[控件所处的logic名+ 控件名]
     * @param callback 回调函数
     * @param event 绑定事件(按钮响应类型)
     * @param btnEffectEvent 特效(点击时，是否有特效，是否音效)
     */
    unbindEventCallback:function(component, callback, event, btnEffectEvent){
        if(component== null) return;
        var self= Frameworks;
        if(self.m_callbackEventTable.hasOwnProperty(component._name)) {
            var contain = self.m_callbackEventTable[component._name];
            if(!Common.judgeValueIsEffect(contain)) return;
        }
        //遍历Map
        if(contain[event]!= null){
            if(event== BUTTON_CLICK){
                contain[event]= null;
            }
        }

        //其他事件引用次数
        var count= 0;
        for(var i in contain){
            if(contain[i]!= null){
                count++;
            }
        }
        //原因是:Map中，除了监听事件之外，还有两个对象btnEffectEvent、name
        if(count== 1){
            this.m_callbackEventTable[component._name]= null;
            //还原控件名
            var name= component._name;
            component._name= name.substring(name.indexOf("#")+ 1, name.length);
            //console.log("事件解绑成功！");
        }
    },
    /**
     * Func:注册消息信号
     * @param signal
     * @param callbackFunction
     */
    addSlot2Signal:function(signal, callbackFunction){
        //判断是否已经有该存在该信号
        if(!this.m_signalSlotTable.hasOwnProperty(signal)){
            this.m_signalSlotTable[signal]=  callbackFunction;
        }else{
            //如果已经存在,判断信号的回调是否一致
            var contain = this.m_signalSlotTable[signal];
            if(contain!= callbackFunction){
                this.m_signalSlotTable[signal]=  callbackFunction;
            }
        }
    },
    /**
     * Func:发送消息信号
     * @param signal 信号
     * @param dataTable 回调数据(一般为null)
     */
    emit:function(signal, dataTable){
        if(!this.isContainsSignal(signal)) return;
        if(!Common.judgeValueIsEffect(this.m_signalSlotTable[signal])) return;
        //发送信号，执行回调函数
        this.m_signalSlotTable[signal](dataTable);
    },
    /**
     *Func:是否包含某一个信号
     */
    isContainsSignal:function(signal){
        if(!this.m_signalSlotTable.hasOwnProperty(signal)) return false;
        return true;
    },
    /**
     * Func:删除消息信号
     * @param signal
     * @param callbackFunction
     */
    removeSlotFromSignal:function(signal, callbackFunction){
        if(!this.m_signalSlotTable.hasOwnProperty(signal)) return;
        if(!Common.judgeValueIsEffect(this.m_signalSlotTable[signal])) return;

        //监听信号的回调函数 是否匹配
        if(this.m_signalSlotTable[signal]== callbackFunction){
            this.m_signalSlotTable[signal]= null;//从监听中移除
        }
    }
};

//Frameworks.addSlot2Signal(MSG_IDLE);