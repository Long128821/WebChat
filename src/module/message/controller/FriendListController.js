var FriendListController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        FriendListLogic.view= null;
    },

    getLayer:function(){
        return FriendListLogic.view;
    },

    createView:function(){
        ProfileFriendList.clearData();
        FriendListLogic.createView();
        //Frameworks.setOnKeypadEventListener(FriendListLogic.view, FriendListLogic.onKeypad);
    },
    
    requestMsg:function(){
    	FriendListLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	FriendListLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		FriendListLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
        Frameworks.bindEventCallback("FriendListLogic#", CocoStudio.getComponent(FriendListLogic.view,"Button_haoyoushangxian"), FriendListLogic.callback_Button_haoyoushangxian, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("FriendListLogic#", CocoStudio.getComponent(FriendListLogic.view,"Button_yiwen1"), FriendListLogic.callback_Button_yiwen1, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("FriendListLogic#", CocoStudio.getComponent(FriendListLogic.view,"Button_wodehaoyou"), FriendListLogic.callback_Button_wodehaoyou, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("FriendListLogic#", CocoStudio.getComponent(FriendListLogic.view,"Button_zhuizongliebiao"), FriendListLogic.callback_Button_zhuizongliebiao, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("FriendListLogic#", CocoStudio.getComponent(FriendListLogic.view,"Button_linshihaoyou"), FriendListLogic.callback_Button_linshihaoyou, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("FriendListLogic#", CocoStudio.getComponent(FriendListLogic.view,"Button_close"), FriendListLogic.callback_Button_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("FriendListLogic#", CocoStudio.getComponent(FriendListLogic.view,"Button_shuaxin"), FriendListLogic.callback_Button_shuaxin, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("FriendListLogic#", CocoStudio.getComponent(FriendListLogic.view,"Button_leftArrow"), FriendListLogic.callback_Button_leftArrow, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
        Frameworks.bindEventCallback("FriendListLogic#", CocoStudio.getComponent(FriendListLogic.view,"Button_rightArrow"), FriendListLogic.callback_Button_rightArrow, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
        Frameworks.bindEventCallback("FriendListLogic#", CocoStudio.getComponent(FriendListLogic.view,"Panel_haoyoushangxian"), FriendListLogic.callback_Panel_haoyoushangxian, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("FriendListLogic#", CocoStudio.getComponent(FriendListLogic.view,"Panel_155"), FriendListLogic.callback_Panel_155, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("FriendListLogic#", CocoStudio.getComponent(FriendListLogic.view,"Button_closeShangxian"), FriendListLogic.callback_Button_closeShangxian, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
        Frameworks.unbindEventCallback(CocoStudio.getComponent(FriendListLogic.view,"FriendListLogic#Button_haoyoushangxian"), FriendListLogic.callback_Button_haoyoushangxian, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(FriendListLogic.view,"FriendListLogic#Button_yiwen1"), FriendListLogic.callback_Button_yiwen1, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(FriendListLogic.view,"FriendListLogic#Button_wodehaoyou"), FriendListLogic.callback_Button_wodehaoyou, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(FriendListLogic.view,"FriendListLogic#Button_zhuizongliebiao"), FriendListLogic.callback_Button_zhuizongliebiao, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(FriendListLogic.view,"FriendListLogic#Button_linshihaoyou"), FriendListLogic.callback_Button_linshihaoyou, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(FriendListLogic.view,"FriendListLogic#Button_close"), FriendListLogic.callback_Button_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(FriendListLogic.view,"FriendListLogic#Button_shuaxin"), FriendListLogic.callback_Button_shuaxin, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(FriendListLogic.view,"FriendListLogic#Button_leftArrow"), FriendListLogic.callback_Button_leftArrow, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(FriendListLogic.view,"FriendListLogic#Button_rightArrow"), FriendListLogic.callback_Button_rightArrow, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(FriendListLogic.view,"FriendListLogic#Panel_haoyoushangxian"), FriendListLogic.callback_Panel_haoyoushangxian, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(FriendListLogic.view,"FriendListLogic#Panel_155"), FriendListLogic.callback_Panel_155, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(FriendListLogic.view,"FriendListLogic#Button_closeShangxian"), FriendListLogic.callback_Button_closeShangxian, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(FriendListLogic.view);
		FriendListLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(FriendListLogic.view, FriendListLogic.onKeypad);
        FriendListLogic.view.setTouchEnabled(true);
        this.addCallback();
        if(FriendListLogic.m_tableView!= null&& FriendListLogic.m_tableView!= undefined){
            FriendListLogic.m_tableView.setVisible(true);
        }
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(FriendListLogic.view);
		this.destroy();
        ProfileFriendList.clearData();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(FriendListLogic);
			FriendListLogic.releaseData();
		}
	
		FriendListLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
