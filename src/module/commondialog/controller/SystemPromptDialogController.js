var SystemPromptDialogController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        SystemPromptDialogLogic.view= null;
    },

    getLayer:function(){
        return SystemPromptDialogLogic.view;
    },

    createView:function(){
        SystemPromptDialogLogic.createView();
        //Frameworks.setOnKeypadEventListener(SystemPromptDialogLogic.view, SystemPromptDialogLogic.onKeypad);
    },
    
    requestMsg:function(){
    	SystemPromptDialogLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	SystemPromptDialogLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		SystemPromptDialogLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("SystemPromptDialogLogic#", CocoStudio.getComponent(SystemPromptDialogLogic.view,"btn_logout"), SystemPromptDialogLogic.callback_btn_logout, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(SystemPromptDialogLogic.view,"SystemPromptDialogLogic#btn_logout"), SystemPromptDialogLogic.callback_btn_logout, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(SystemPromptDialogLogic.view);
		SystemPromptDialogLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(SystemPromptDialogLogic.view, SystemPromptDialogLogic.onKeypad);
        SystemPromptDialogLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(SystemPromptDialogLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(SystemPromptDialogLogic);
			SystemPromptDialogLogic.releaseData();
		}
	
		SystemPromptDialogLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
