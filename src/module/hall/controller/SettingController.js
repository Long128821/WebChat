var SettingController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        SettingLogic.view= null;
    },

    getLayer:function(){
        return SettingLogic.view;
    },

    createView:function(){
        SettingLogic.createView();
        //Frameworks.setOnKeypadEventListener(SettingLogic.view, SettingLogic.onKeypad);
    },
    
    requestMsg:function(){
    	SettingLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	SettingLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		SettingLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
        Frameworks.bindEventCallback("SettingLogic#", CocoStudio.getComponent(SettingLogic.view,"btn_close"), SettingLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("SettingLogic#", CocoStudio.getComponent(SettingLogic.view,"Image_xiugaimima"), SettingLogic.callback_Image_xiugaimima, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("SettingLogic#", CocoStudio.getComponent(SettingLogic.view,"btn_music"), SettingLogic.callback_btn_music, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("SettingLogic#", CocoStudio.getComponent(SettingLogic.view,"btn_yinxiao"), SettingLogic.callback_btn_yinxiao, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("SettingLogic#", CocoStudio.getComponent(SettingLogic.view,"btn_help"), SettingLogic.callback_btn_help, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("SettingLogic#", CocoStudio.getComponent(SettingLogic.view,"btn_kefu"), SettingLogic.callback_btn_kefu, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("SettingLogic#", CocoStudio.getComponent(SettingLogic.view,"btn_logout"), SettingLogic.callback_btn_logout, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("SettingLogic#", CocoStudio.getComponent(SettingLogic.view,"btn_version"), SettingLogic.callback_btn_version, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("SettingLogic#", CocoStudio.getComponent(SettingLogic.view,"Button_gaimi"), SettingLogic.callback_Button_gaimi, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
        Frameworks.unbindEventCallback(CocoStudio.getComponent(SettingLogic.view,"SettingLogic#btn_close"), SettingLogic.callback_btn_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(SettingLogic.view,"SettingLogic#Image_xiugaimima"), SettingLogic.callback_Image_xiugaimima, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(SettingLogic.view,"SettingLogic#btn_music"), SettingLogic.callback_btn_music, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(SettingLogic.view,"SettingLogic#btn_yinxiao"), SettingLogic.callback_btn_yinxiao, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(SettingLogic.view,"SettingLogic#btn_help"), SettingLogic.callback_btn_help, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(SettingLogic.view,"SettingLogic#btn_kefu"), SettingLogic.callback_btn_kefu, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(SettingLogic.view,"SettingLogic#btn_logout"), SettingLogic.callback_btn_logout, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(SettingLogic.view,"SettingLogic#btn_version"), SettingLogic.callback_btn_version, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(SettingLogic.view,"SettingLogic#Button_gaimi"), SettingLogic.callback_Button_gaimi, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(SettingLogic.view);
		SettingLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
        console.log("唤醒");
    	//Frameworks.setOnKeypadEventListener(SettingLogic.view, SettingLogic.onKeypad);
        SettingLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(SettingLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(SettingLogic);
			SettingLogic.releaseData();
		}
	
		SettingLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
