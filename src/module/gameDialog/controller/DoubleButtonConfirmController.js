var DoubleButtonConfirmController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        DoubleButtonConfirmLogic.view= null;
    },

    getLayer:function(){
        return DoubleButtonConfirmLogic.view;
    },

    createView:function(){
        DoubleButtonConfirmLogic.createView();
        //Frameworks.setOnKeypadEventListener(DoubleButtonConfirmLogic.view, DoubleButtonConfirmLogic.onKeypad);
    },
    
    requestMsg:function(){
    	DoubleButtonConfirmLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	DoubleButtonConfirmLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		DoubleButtonConfirmLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
        Frameworks.bindEventCallback("DoubleButtonConfirmLogic#", CocoStudio.getComponent(DoubleButtonConfirmLogic.view,"Panel_127"), DoubleButtonConfirmLogic.callback_Panel_127, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("DoubleButtonConfirmLogic#", CocoStudio.getComponent(DoubleButtonConfirmLogic.view,"Button_quxiao"), DoubleButtonConfirmLogic.callback_Button_quxiao, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("DoubleButtonConfirmLogic#", CocoStudio.getComponent(DoubleButtonConfirmLogic.view,"Button_queding"), DoubleButtonConfirmLogic.callback_Button_queding, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
        Frameworks.unbindEventCallback(CocoStudio.getComponent(DoubleButtonConfirmLogic.view,"DoubleButtonConfirmLogic#Panel_127"), DoubleButtonConfirmLogic.callback_Panel_127, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(DoubleButtonConfirmLogic.view,"DoubleButtonConfirmLogic#Button_quxiao"), DoubleButtonConfirmLogic.callback_Button_quxiao, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(DoubleButtonConfirmLogic.view,"DoubleButtonConfirmLogic#Button_queding"), DoubleButtonConfirmLogic.callback_Button_queding, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(DoubleButtonConfirmLogic.view);
		DoubleButtonConfirmLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(DoubleButtonConfirmLogic.view, DoubleButtonConfirmLogic.onKeypad);
        DoubleButtonConfirmLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(DoubleButtonConfirmLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(DoubleButtonConfirmLogic);
			DoubleButtonConfirmLogic.releaseData();
		}
	
		DoubleButtonConfirmLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
