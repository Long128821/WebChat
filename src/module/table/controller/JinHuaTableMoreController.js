var JinHuaTableMoreController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        JinHuaTableMoreLogic.view= null;
    },

    getLayer:function(){
        return JinHuaTableMoreLogic.view;
    },

    createView:function(){
        JinHuaTableMoreLogic.createView();
        //Frameworks.setOnKeypadEventListener(JinHuaTableMoreLogic.view, JinHuaTableMoreLogic.onKeypad);
    },
    
    requestMsg:function(){
    	JinHuaTableMoreLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	JinHuaTableMoreLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		JinHuaTableMoreLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("JinHuaTableMoreLogic#", CocoStudio.getComponent(JinHuaTableMoreLogic.view,"Panel_94"), JinHuaTableMoreLogic.callback_Panel_94, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaTableMoreLogic#", CocoStudio.getComponent(JinHuaTableMoreLogic.view,"Button_cardType"), JinHuaTableMoreLogic.callback_Button_cardType, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableMoreLogic#", CocoStudio.getComponent(JinHuaTableMoreLogic.view,"Button_setting"), JinHuaTableMoreLogic.callback_Button_setting, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableMoreLogic#", CocoStudio.getComponent(JinHuaTableMoreLogic.view,"Button_changeTable"), JinHuaTableMoreLogic.callback_Button_changeTable, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableMoreLogic#", CocoStudio.getComponent(JinHuaTableMoreLogic.view,"Button_lookOn"), JinHuaTableMoreLogic.callback_Button_lookOn, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableMoreLogic#", CocoStudio.getComponent(JinHuaTableMoreLogic.view,"Button_lookOnNextGame"), JinHuaTableMoreLogic.callback_Button_lookOnNextGame, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableMoreLogic#", CocoStudio.getComponent(JinHuaTableMoreLogic.view,"Button_exit"), JinHuaTableMoreLogic.callback_Button_exit, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableMoreLogic.view,"JinHuaTableMoreLogic#Panel_94"), JinHuaTableMoreLogic.callback_Panel_94, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableMoreLogic.view,"JinHuaTableMoreLogic#Button_cardType"), JinHuaTableMoreLogic.callback_Button_cardType, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableMoreLogic.view,"JinHuaTableMoreLogic#Button_setting"), JinHuaTableMoreLogic.callback_Button_setting, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableMoreLogic.view,"JinHuaTableMoreLogic#Button_changeTable"), JinHuaTableMoreLogic.callback_Button_changeTable, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableMoreLogic.view,"JinHuaTableMoreLogic#Button_lookOn"), JinHuaTableMoreLogic.callback_Button_lookOn, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableMoreLogic.view,"JinHuaTableMoreLogic#Button_lookOnNextGame"), JinHuaTableMoreLogic.callback_Button_lookOnNextGame, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableMoreLogic.view,"JinHuaTableMoreLogic#Button_exit"), JinHuaTableMoreLogic.callback_Button_exit, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(JinHuaTableMoreLogic.view);
		JinHuaTableMoreLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(JinHuaTableMoreLogic.view, JinHuaTableMoreLogic.onKeypad);
        JinHuaTableMoreLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(JinHuaTableMoreLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(JinHuaTableMoreLogic);
			JinHuaTableMoreLogic.releaseData();
		}
	
		JinHuaTableMoreLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
