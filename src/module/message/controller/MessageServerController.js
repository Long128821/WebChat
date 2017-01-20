var MessageServerController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        MessageServerLogic.view= null;
    },

    getLayer:function(){
        return MessageServerLogic.view;
    },

    createView:function(){
        MessageServerLogic.createView();
        //Frameworks.setOnKeypadEventListener(MessageServerLogic.view, MessageServerLogic.onKeypad);
    },
    
    requestMsg:function(){
    	MessageServerLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	MessageServerLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		MessageServerLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
        Frameworks.bindEventCallback("MessageServerLogic#", CocoStudio.getComponent(MessageServerLogic.view,"Panel_Content"), MessageServerLogic.callback_Panel_Content, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("MessageServerLogic#", CocoStudio.getComponent(MessageServerLogic.view,"btn_action"), MessageServerLogic.callback_btn_action, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("MessageServerLogic#", CocoStudio.getComponent(MessageServerLogic.view,"btn_lingqu"), MessageServerLogic.callback_btn_lingqu, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
        Frameworks.unbindEventCallback(CocoStudio.getComponent(MessageServerLogic.view,"MessageServerLogic#Panel_Content"), MessageServerLogic.callback_Panel_Content, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(MessageServerLogic.view,"MessageServerLogic#btn_action"), MessageServerLogic.callback_btn_action, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(MessageServerLogic.view,"MessageServerLogic#btn_lingqu"), MessageServerLogic.callback_btn_lingqu, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(MessageServerLogic.view);
		MessageServerLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(MessageServerLogic.view, MessageServerLogic.onKeypad);
        MessageServerLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(MessageServerLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(MessageServerLogic);
			MessageServerLogic.releaseData();
		}
	
		MessageServerLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
