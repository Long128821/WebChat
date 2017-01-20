var JinHuaTableSetPopController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        JinHuaTableSetPopLogic.view= null;
    },

    getLayer:function(){
        return JinHuaTableSetPopLogic.view;
    },

    createView:function(){
        JinHuaTableSetPopLogic.createView();
        //Frameworks.setOnKeypadEventListener(JinHuaTableSetPopLogic.view, JinHuaTableSetPopLogic.onKeypad);
    },
    
    requestMsg:function(){
    	JinHuaTableSetPopLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	JinHuaTableSetPopLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		JinHuaTableSetPopLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("JinHuaTableSetPopLogic#", CocoStudio.getComponent(JinHuaTableSetPopLogic.view,"btn_close"), JinHuaTableSetPopLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableSetPopLogic.view,"JinHuaTableSetPopLogic#btn_close"), JinHuaTableSetPopLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(JinHuaTableSetPopLogic.view);
		JinHuaTableSetPopLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(JinHuaTableSetPopLogic.view, JinHuaTableSetPopLogic.onKeypad);
        JinHuaTableSetPopLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(JinHuaTableSetPopLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(JinHuaTableSetPopLogic);
			JinHuaTableSetPopLogic.releaseData();
		}
	
		JinHuaTableSetPopLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
