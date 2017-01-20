var GameHelpController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        GameHelpLogic.view= null;
    },

    getLayer:function(){
        return GameHelpLogic.view;
    },

    createView:function(){
        GameHelpLogic.createView();
        //Frameworks.setOnKeypadEventListener(GameHelpLogic.view, GameHelpLogic.onKeypad);
    },
    
    requestMsg:function(){
    	GameHelpLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	GameHelpLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		GameHelpLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
        Frameworks.bindEventCallback("GameHelpLogic#", CocoStudio.getComponent(GameHelpLogic.view,"btn_close1"), GameHelpLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
        Frameworks.unbindEventCallback(CocoStudio.getComponent(GameHelpLogic.view,"GameHelpLogic#btn_close1"), GameHelpLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
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
        console.log("休眠");
		//Frameworks.releaseOnKeypadEventListener(GameHelpLogic.view);
		GameHelpLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
        console.log("唤醒");
    	//Frameworks.setOnKeypadEventListener(GameHelpLogic.view, GameHelpLogic.onKeypad);
        GameHelpLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(GameHelpLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(GameHelpLogic);
			GameHelpLogic.releaseData();
		}
	
		GameHelpLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
