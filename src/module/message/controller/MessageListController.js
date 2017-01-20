var MessageListController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        MessageListLogic.view= null;
    },

    getLayer:function(){
        return MessageListLogic.view;
    },

    createView:function(){
        MessageListLogic.createView();
        //Frameworks.setOnKeypadEventListener(MessageListLogic.view, MessageListLogic.onKeypad);
    },
    
    requestMsg:function(){
    	MessageListLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	MessageListLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		MessageListLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
        Frameworks.bindEventCallback("MessageListLogic#", CocoStudio.getComponent(MessageListLogic.view,"btn_back"), MessageListLogic.callback_btn_back, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("MessageListLogic#", CocoStudio.getComponent(MessageListLogic.view,"Button_leftArrow"), MessageListLogic.callback_Button_leftArrow, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
        Frameworks.bindEventCallback("MessageListLogic#", CocoStudio.getComponent(MessageListLogic.view,"Button_rightArrow"), MessageListLogic.callback_Button_rightArrow, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
    },
    //移除监听
    removeCallback:function(){
        Frameworks.unbindEventCallback(CocoStudio.getComponent(MessageListLogic.view,"MessageListLogic#btn_back"), MessageListLogic.callback_btn_back, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(MessageListLogic.view,"MessageListLogic#Button_leftArrow"), MessageListLogic.callback_Button_leftArrow, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(MessageListLogic.view,"MessageListLogic#Button_rightArrow"), MessageListLogic.callback_Button_rightArrow, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
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
		//Frameworks.releaseOnKeypadEventListener(MessageListLogic.view);
		MessageListLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(MessageListLogic.view, MessageListLogic.onKeypad);
        MessageListLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(MessageListLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(MessageListLogic);
			MessageListLogic.releaseData();
		}
	
		MessageListLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
