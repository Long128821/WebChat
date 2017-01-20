var JinHuaTableConfirmPopController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        JinHuaTableConfirmPopLogic.view= null;
    },

    getLayer:function(){
        return JinHuaTableConfirmPopLogic.view;
    },

    createView:function(){
        JinHuaTableConfirmPopLogic.createView();
        //Frameworks.setOnKeypadEventListener(JinHuaTableConfirmPopLogic.view, JinHuaTableConfirmPopLogic.onKeypad);
    },
    
    requestMsg:function(){
    	JinHuaTableConfirmPopLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	JinHuaTableConfirmPopLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		JinHuaTableConfirmPopLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("JinHuaTableConfirmPopLogic#", CocoStudio.getComponent(JinHuaTableConfirmPopLogic.view,"btn_confirm"), JinHuaTableConfirmPopLogic.callback_btn_confirm, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaTableConfirmPopLogic#", CocoStudio.getComponent(JinHuaTableConfirmPopLogic.view,"btn_cancel"), JinHuaTableConfirmPopLogic.callback_btn_cancel, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableConfirmPopLogic.view,"JinHuaTableConfirmPopLogic#btn_confirm"), JinHuaTableConfirmPopLogic.callback_btn_confirm, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableConfirmPopLogic.view,"JinHuaTableConfirmPopLogic#btn_cancel"), JinHuaTableConfirmPopLogic.callback_btn_cancel, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
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
		//Frameworks.releaseOnKeypadEventListener(JinHuaTableConfirmPopLogic.view);
		JinHuaTableConfirmPopLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(JinHuaTableConfirmPopLogic.view, JinHuaTableConfirmPopLogic.onKeypad);
        JinHuaTableConfirmPopLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(JinHuaTableConfirmPopLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(JinHuaTableConfirmPopLogic);
			JinHuaTableConfirmPopLogic.releaseData();
		}
	
		JinHuaTableConfirmPopLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
