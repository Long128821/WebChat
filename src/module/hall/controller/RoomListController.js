var RoomListController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        RoomListLogic.view= null;
    },

    getLayer:function(){
        return RoomListLogic.view;
    },

    createView:function(){
        RoomListLogic.createView();
        //Frameworks.setOnKeypadEventListener(RoomListLogic.view, RoomListLogic.onKeypad);
    },
    
    requestMsg:function(){
    	RoomListLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	RoomListLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		RoomListLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("RoomListLogic#", CocoStudio.getComponent(RoomListLogic.view,"Button_close"), RoomListLogic.callback_Button_close, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("RoomListLogic#", CocoStudio.getComponent(RoomListLogic.view,"Panel_createroom"), RoomListLogic.callback_Panel_createroom, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("RoomListLogic#", CocoStudio.getComponent(RoomListLogic.view,"Button_createdList"), RoomListLogic.callback_Button_createdList, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("RoomListLogic#", CocoStudio.getComponent(RoomListLogic.view,"Button_create"), RoomListLogic.callback_Button_create, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(RoomListLogic.view,"RoomListLogic#Button_close"), RoomListLogic.callback_Button_close, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(RoomListLogic.view,"RoomListLogic#Panel_createroom"), RoomListLogic.callback_Panel_createroom, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(RoomListLogic.view,"RoomListLogic#Button_createdList"), RoomListLogic.callback_Button_createdList, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(RoomListLogic.view,"RoomListLogic#Button_create"), RoomListLogic.callback_Button_create, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(RoomListLogic.view);
		RoomListLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(RoomListLogic.view, RoomListLogic.onKeypad);
        RoomListLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(RoomListLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(RoomListLogic);
			RoomListLogic.releaseData();
		}
	
		RoomListLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
