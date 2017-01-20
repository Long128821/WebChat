var RenWuController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        RenWuLogic.view= null;
    },

    getLayer:function(){
        return RenWuLogic.view;
    },

    createView:function(){
        RenWuLogic.createView();
        //Frameworks.setOnKeypadEventListener(RenWuLogic.view, RenWuLogic.onKeypad);
    },
    
    requestMsg:function(){
    	RenWuLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	RenWuLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		RenWuLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
        Frameworks.bindEventCallback("RenWuLogic#", CocoStudio.getComponent(RenWuLogic.view,"Image_AchievementTask"), RenWuLogic.callback_Image_AchievementTask, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("RenWuLogic#", CocoStudio.getComponent(RenWuLogic.view,"Image_EverDayTask"), RenWuLogic.callback_Image_EverDayTask, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("RenWuLogic#", CocoStudio.getComponent(RenWuLogic.view,"btn_Close"), RenWuLogic.callback_btn_Close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
        Frameworks.unbindEventCallback(CocoStudio.getComponent(RenWuLogic.view,"RenWuLogic#Image_AchievementTask"), RenWuLogic.callback_Image_AchievementTask, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(RenWuLogic.view,"RenWuLogic#Image_EverDayTask"), RenWuLogic.callback_Image_EverDayTask, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(RenWuLogic.view,"RenWuLogic#btn_Close"), RenWuLogic.callback_btn_Close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(RenWuLogic.view);
		RenWuLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(RenWuLogic.view, RenWuLogic.onKeypad);
        RenWuLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(RenWuLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(RenWuLogic);
			RenWuLogic.releaseData();
		}
	
		RenWuLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
