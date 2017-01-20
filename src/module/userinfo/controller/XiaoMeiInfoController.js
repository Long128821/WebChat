var XiaoMeiInfoController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        XiaoMeiInfoLogic.view= null;
    },

    getLayer:function(){
        return XiaoMeiInfoLogic.view;
    },

    createView:function(){
        XiaoMeiInfoLogic.createView();
        //Frameworks.setOnKeypadEventListener(XiaoMeiInfoLogic.view, XiaoMeiInfoLogic.onKeypad);
    },
    
    requestMsg:function(){
    	XiaoMeiInfoLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	XiaoMeiInfoLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		XiaoMeiInfoLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
        Frameworks.bindEventCallback("XiaoMeiInfoLogic#", CocoStudio.getComponent(XiaoMeiInfoLogic.view,"Button_xiaoxi"), XiaoMeiInfoLogic.callback_Button_xiaoxi, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("XiaoMeiInfoLogic#", CocoStudio.getComponent(XiaoMeiInfoLogic.view,"Button_close"), XiaoMeiInfoLogic.callback_Button_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
        Frameworks.unbindEventCallback(CocoStudio.getComponent(XiaoMeiInfoLogic.view,"XiaoMeiInfoLogic#Button_xiaoxi"), XiaoMeiInfoLogic.callback_Button_xiaoxi, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(XiaoMeiInfoLogic.view,"XiaoMeiInfoLogic#Button_close"), XiaoMeiInfoLogic.callback_Button_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},
	//层级
	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    //休眠
    sleepModule:function(){
		//Frameworks.releaseOnKeypadEventListener(XiaoMeiInfoLogic.view);
		XiaoMeiInfoLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(XiaoMeiInfoLogic.view, XiaoMeiInfoLogic.onKeypad);
        XiaoMeiInfoLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(XiaoMeiInfoLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(XiaoMeiInfoLogic);
			XiaoMeiInfoLogic.releaseData();
		}
	
		XiaoMeiInfoLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
