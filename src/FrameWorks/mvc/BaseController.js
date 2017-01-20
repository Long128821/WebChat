var BaseController = cc.Class.extend({
    /*****************Base类(继承CC.Layer的原因，有时候需要监听该Layer)******************/
    m_ModuleLayer:Layer.Base_Layer,
    ctor: function() {
        this.init();
    },

    init:function(){
        //创建视图
        this.createView();
        this.addCallback();
        this.addSlot();
    },

    //添加监听事件
    addCallback:function(){},

    //移除监听事件
    removeCallback:function(){},

    //设置Module层级
    setModuleLayer:function(tag){
        this.m_ModuleLayer= ((tag==undefined)?Layer.Base_Layer:tag);
    },

    //设置Module层级
    getModuleLayer:function(){
        return this.m_ModuleLayer;
    },

    /***************以下方法，可以在派生类中，根据游戏逻辑自己重写****************************/

    //销毁数据
    destroy:function(){
        this.m_ModuleLayer= 0;
        this.removeCallback();
        this.removeSlot();
    },
    //添加信号
    addSlot:function(){},
    //移除信号
    removeSlot:function(){},

    //创建View
    createView:function(){}
});