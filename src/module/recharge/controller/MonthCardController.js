var MonthCardController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        MonthCardLogic.view= null;
    },

    getLayer:function(){
        return MonthCardLogic.view;
    },

    createView:function(){
        MonthCardLogic.createView();
        //Frameworks.setOnKeypadEventListener(MonthCardLogic.view, MonthCardLogic.onKeypad);
    },
    
    requestMsg:function(){
    	MonthCardLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	MonthCardLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		MonthCardLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
        Frameworks.bindEventCallback("MonthCardLogic#", CocoStudio.getComponent(MonthCardLogic.view,"Button_weixin"), MonthCardLogic.callback_Button_weixin, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("MonthCardLogic#", CocoStudio.getComponent(MonthCardLogic.view,"Button_guanbi"), MonthCardLogic.callback_Button_guanbi, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("MonthCardLogic#", CocoStudio.getComponent(MonthCardLogic.view,"Button_goumai"), MonthCardLogic.callback_Button_goumai, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("MonthCardLogic#", CocoStudio.getComponent(MonthCardLogic.view,"Panel_afterbuy"), MonthCardLogic.callback_Panel_afterbuy, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
    },
    //移除监听
    removeCallback:function(){
        Frameworks.unbindEventCallback(CocoStudio.getComponent(MonthCardLogic.view,"MonthCardLogic#Button_weixin"), MonthCardLogic.callback_Button_weixin, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(MonthCardLogic.view,"MonthCardLogic#Button_guanbi"), MonthCardLogic.callback_Button_guanbi, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(MonthCardLogic.view,"MonthCardLogic#Button_goumai"), MonthCardLogic.callback_Button_goumai, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(MonthCardLogic.view,"MonthCardLogic#Panel_afterbuy"), MonthCardLogic.callback_Panel_afterbuy, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
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
		//Frameworks.releaseOnKeypadEventListener(MonthCardLogic.view);
		MonthCardLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(MonthCardLogic.view, MonthCardLogic.onKeypad);
        MonthCardLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(MonthCardLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(MonthCardLogic);
			MonthCardLogic.releaseData();
		}
	
		MonthCardLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
