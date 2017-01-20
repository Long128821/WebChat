var DailySalaryController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        DailySalaryLogic.view= null;
    },

    getLayer:function(){
        return DailySalaryLogic.view;
    },

    createView:function(){
        DailySalaryLogic.createView();
        //Frameworks.setOnKeypadEventListener(DailySalaryLogic.view, DailySalaryLogic.onKeypad);
    },
    
    requestMsg:function(){
    	DailySalaryLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	DailySalaryLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		DailySalaryLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
        Frameworks.bindEventCallback("DailySalaryLogic#", CocoStudio.getComponent(DailySalaryLogic.view,"Panel_127"), DailySalaryLogic.callback_Panel_127, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("DailySalaryLogic#", CocoStudio.getComponent(DailySalaryLogic.view,"Panel_left"), DailySalaryLogic.callback_Panel_left, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("DailySalaryLogic#", CocoStudio.getComponent(DailySalaryLogic.view,"Panel_right"), DailySalaryLogic.callback_Panel_right, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("DailySalaryLogic#", CocoStudio.getComponent(DailySalaryLogic.view,"Button_VipLevelUp"), DailySalaryLogic.callback_Button_VipLevelUp, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("DailySalaryLogic#", CocoStudio.getComponent(DailySalaryLogic.view,"Button_lingjiang"), DailySalaryLogic.callback_Button_lingjiang, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("DailySalaryLogic#", CocoStudio.getComponent(DailySalaryLogic.view,"Button_quxiao"), DailySalaryLogic.callback_Button_quxiao, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
        Frameworks.unbindEventCallback(CocoStudio.getComponent(DailySalaryLogic.view,"DailySalaryLogic#Panel_127"), DailySalaryLogic.callback_Panel_127, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(DailySalaryLogic.view,"DailySalaryLogic#Panel_left"), DailySalaryLogic.callback_Panel_left, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(DailySalaryLogic.view,"DailySalaryLogic#Panel_right"), DailySalaryLogic.callback_Panel_right, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(DailySalaryLogic.view,"DailySalaryLogic#Button_VipLevelUp"), DailySalaryLogic.callback_Button_VipLevelUp, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(DailySalaryLogic.view,"DailySalaryLogic#Button_lingjiang"), DailySalaryLogic.callback_Button_lingjiang, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(DailySalaryLogic.view,"DailySalaryLogic#Button_quxiao"), DailySalaryLogic.callback_Button_quxiao, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(DailySalaryLogic.view);
		DailySalaryLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(DailySalaryLogic.view, DailySalaryLogic.onKeypad);
        DailySalaryLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(DailySalaryLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(DailySalaryLogic);
			DailySalaryLogic.releaseData();
		}
	
		DailySalaryLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
