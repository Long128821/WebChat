var JinHuaTableExitController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        JinHuaTableExitLogic.view= null;
    },

    getLayer:function(){
        return JinHuaTableExitLogic.view;
    },

    createView:function(){
        JinHuaTableExitLogic.createView();
        //Frameworks.setOnKeypadEventListener(JinHuaTableExitLogic.view, JinHuaTableExitLogic.onKeypad);
    },
    
    requestMsg:function(){
    	JinHuaTableExitLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	JinHuaTableExitLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		JinHuaTableExitLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("JinHuaTableExitLogic#", CocoStudio.getComponent(JinHuaTableExitLogic.view,"btn_close"), JinHuaTableExitLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableExitLogic#", CocoStudio.getComponent(JinHuaTableExitLogic.view,"Button_Confirm"), JinHuaTableExitLogic.callback_Button_Confirm, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableExitLogic#", CocoStudio.getComponent(JinHuaTableExitLogic.view,"Button_Download"), JinHuaTableExitLogic.callback_Button_Download, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableExitLogic.view,"JinHuaTableExitLogic#btn_close"), JinHuaTableExitLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableExitLogic.view,"JinHuaTableExitLogic#Button_Confirm"), JinHuaTableExitLogic.callback_Button_Confirm, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableExitLogic.view,"JinHuaTableExitLogic#Button_Download"), JinHuaTableExitLogic.callback_Button_Download, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(JinHuaTableExitLogic.view);
		JinHuaTableExitLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(JinHuaTableExitLogic.view, JinHuaTableExitLogic.onKeypad);
        JinHuaTableExitLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(JinHuaTableExitLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(JinHuaTableExitLogic);
			JinHuaTableExitLogic.releaseData();
		}
	
		JinHuaTableExitLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
