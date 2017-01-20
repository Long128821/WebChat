var VipInfoController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        VipInfoLogic.view= null;
    },

    getLayer:function(){
        return VipInfoLogic.view;
    },

    createView:function(){
        VipInfoLogic.createView();
        //Frameworks.setOnKeypadEventListener(VipInfoLogic.view, VipInfoLogic.onKeypad);
    },
    
    requestMsg:function(){
    	VipInfoLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	VipInfoLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		VipInfoLogic.removeSlot();
	},
//添加监听
    addCallback:function(){
        Frameworks.bindEventCallback("VipInfoLogic#", CocoStudio.getComponent(VipInfoLogic.view,"Button_left"), VipInfoLogic.callback_Button_left, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("VipInfoLogic#", CocoStudio.getComponent(VipInfoLogic.view,"Button_right"), VipInfoLogic.callback_Button_right, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("VipInfoLogic#", CocoStudio.getComponent(VipInfoLogic.view,"Button_close"), VipInfoLogic.callback_Button_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("VipInfoLogic#", CocoStudio.getComponent(VipInfoLogic.view,"Button_recharge"), VipInfoLogic.callback_Button_recharge, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
        Frameworks.unbindEventCallback(CocoStudio.getComponent(VipInfoLogic.view,"VipInfoLogic#Button_left"), VipInfoLogic.callback_Button_left, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(VipInfoLogic.view,"VipInfoLogic#Button_right"), VipInfoLogic.callback_Button_right, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(VipInfoLogic.view,"VipInfoLogic#Button_close"), VipInfoLogic.callback_Button_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(VipInfoLogic.view,"VipInfoLogic#Button_recharge"), VipInfoLogic.callback_Button_recharge, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(VipInfoLogic.view);
		VipInfoLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(VipInfoLogic.view, VipInfoLogic.onKeypad);
        VipInfoLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(VipInfoLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(VipInfoLogic);
			VipInfoLogic.releaseData();
		}
	
		VipInfoLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
