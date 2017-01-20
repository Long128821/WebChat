var JinHuaTableCardTypePopController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        JinHuaTableCardTypePopLogic.view= null;
    },

    getLayer:function(){
        return JinHuaTableCardTypePopLogic.view;
    },

    createView:function(){
        JinHuaTableCardTypePopLogic.createView();
        //Frameworks.setOnKeypadEventListener(JinHuaTableCardTypePopLogic.view, JinHuaTableCardTypePopLogic.onKeypad);
    },
    
    requestMsg:function(){
    	JinHuaTableCardTypePopLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	JinHuaTableCardTypePopLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		JinHuaTableCardTypePopLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("JinHuaTableCardTypePopLogic#", CocoStudio.getComponent(JinHuaTableCardTypePopLogic.view,"Panel_20"), JinHuaTableCardTypePopLogic.callback_Panel_20, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableCardTypePopLogic.view,"JinHuaTableCardTypePopLogic#Panel_20"), JinHuaTableCardTypePopLogic.callback_Panel_20, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
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
		//Frameworks.releaseOnKeypadEventListener(JinHuaTableCardTypePopLogic.view);
		JinHuaTableCardTypePopLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(JinHuaTableCardTypePopLogic.view, JinHuaTableCardTypePopLogic.onKeypad);
        JinHuaTableCardTypePopLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(JinHuaTableCardTypePopLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(JinHuaTableCardTypePopLogic);
			JinHuaTableCardTypePopLogic.releaseData();
		}
	
		JinHuaTableCardTypePopLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
