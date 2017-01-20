var LoginController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        LoginLogic.view= null;
    },

    getLayer:function(){
        return LoginLogic.view;
    },

    createView:function(){
        LoginLogic.createView();
        //Frameworks.setOnKeypadEventListener(LoginLogic.view, LoginLogic.onKeypad);
    },
    
    requestMsg:function(){
    	LoginLogic.requestMsg();
    },
    
    addSlot:function(){
    	LoginLogic.addSlot();
    },

	removeSlot:function(){
		LoginLogic.removeSlot();
	},

//添加监听
    addCallback:function(){
        Frameworks.bindEventCallback("LoginLogic#", CocoStudio.getComponent(LoginLogic.view,"btn_weixin_login"), LoginLogic.callback_btn_weixin_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("LoginLogic#", CocoStudio.getComponent(LoginLogic.view,"btn_olduser_login"), LoginLogic.callback_btn_olduser_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("LoginLogic#", CocoStudio.getComponent(LoginLogic.view,"btn_reg"), LoginLogic.callback_btn_reg, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("LoginLogic#", CocoStudio.getComponent(LoginLogic.view,"text_login"), LoginLogic.callback_text_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("LoginLogic#", CocoStudio.getComponent(LoginLogic.view,"btn_setIp"), LoginLogic.callback_btn_setIp, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("LoginLogic#", CocoStudio.getComponent(LoginLogic.view,"btn_showLog"), LoginLogic.callback_btn_showLog, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("LoginLogic#", CocoStudio.getComponent(LoginLogic.view,"text_resetpass"), LoginLogic.callback_text_resetpass, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("LoginLogic#", CocoStudio.getComponent(LoginLogic.view,"btn_more"), LoginLogic.callback_btn_more, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("LoginLogic#", CocoStudio.getComponent(LoginLogic.view,"btn_login"), LoginLogic.callback_btn_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("LoginLogic#", CocoStudio.getComponent(LoginLogic.view,"Button_login_close"), LoginLogic.callback_Button_login_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
        Frameworks.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"LoginLogic#btn_weixin_login"), LoginLogic.callback_btn_weixin_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"LoginLogic#btn_olduser_login"), LoginLogic.callback_btn_olduser_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"LoginLogic#btn_reg"), LoginLogic.callback_btn_reg, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"LoginLogic#text_login"), LoginLogic.callback_text_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"LoginLogic#btn_setIp"), LoginLogic.callback_btn_setIp, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"LoginLogic#btn_showLog"), LoginLogic.callback_btn_showLog, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"LoginLogic#text_resetpass"), LoginLogic.callback_text_resetpass, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"LoginLogic#btn_more"), LoginLogic.callback_btn_more, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"LoginLogic#btn_login"), LoginLogic.callback_btn_login, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(LoginLogic.view,"LoginLogic#Button_login_close"), LoginLogic.callback_Button_login_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},

	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    
    sleepModule:function(){
		//Frameworks.releaseOnKeypadEventListener(LoginLogic.view);
		LoginLogic.view.setTouchEnabled(false);
        LoginLogic.setEditorVisible(false, 0);
        this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },

    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(LoginLogic.view, LoginLogic.onKeypad);
        LoginLogic.view.setTouchEnabled(true);
        LoginLogic.setEditorVisible(true, 1);
        this.addCallback();
    },

    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(LoginLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(LoginLogic);
			LoginLogic.releaseData();
		}
	
		LoginLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
