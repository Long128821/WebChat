var ChangeInfoPopController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        ChangeInfoPopLogic.view= null;
    },

    getLayer:function(){
        return ChangeInfoPopLogic.view;
    },

    createView:function(){
        ChangeInfoPopLogic.createView();
        //Frameworks.setOnKeypadEventListener(ChangeInfoPopLogic.view, ChangeInfoPopLogic.onKeypad);
    },
    
    requestMsg:function(){
    	ChangeInfoPopLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	ChangeInfoPopLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		ChangeInfoPopLogic.removeSlot();
	},
//添加监听
    addCallback:function(){
        Frameworks.bindEventCallback("ChangeInfoPopLogic#", CocoStudio.getComponent(ChangeInfoPopLogic.view,"Panel_127"), ChangeInfoPopLogic.callback_Panel_127, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("ChangeInfoPopLogic#", CocoStudio.getComponent(ChangeInfoPopLogic.view,"Image_female"), ChangeInfoPopLogic.callback_Image_female, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("ChangeInfoPopLogic#", CocoStudio.getComponent(ChangeInfoPopLogic.view,"Image_male"), ChangeInfoPopLogic.callback_Image_male, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("ChangeInfoPopLogic#", CocoStudio.getComponent(ChangeInfoPopLogic.view,"Image_secrecy"), ChangeInfoPopLogic.callback_Image_secrecy, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("ChangeInfoPopLogic#", CocoStudio.getComponent(ChangeInfoPopLogic.view,"Button_quxiao"), ChangeInfoPopLogic.callback_Button_quxiao, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("ChangeInfoPopLogic#", CocoStudio.getComponent(ChangeInfoPopLogic.view,"Button_queding"), ChangeInfoPopLogic.callback_Button_queding, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("ChangeInfoPopLogic#", CocoStudio.getComponent(ChangeInfoPopLogic.view,"Button_shouji_bind"), ChangeInfoPopLogic.callback_Button_shouji_bind, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("ChangeInfoPopLogic#", CocoStudio.getComponent(ChangeInfoPopLogic.view,"Button_shouji_unbind"), ChangeInfoPopLogic.callback_Button_shouji_unbind, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("ChangeInfoPopLogic#", CocoStudio.getComponent(ChangeInfoPopLogic.view,"Button_weixin_bind"), ChangeInfoPopLogic.callback_Button_weixin_bind, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("ChangeInfoPopLogic#", CocoStudio.getComponent(ChangeInfoPopLogic.view,"Button_weixin_binded"), ChangeInfoPopLogic.callback_Button_weixin_binded, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
        Frameworks.unbindEventCallback(CocoStudio.getComponent(ChangeInfoPopLogic.view,"ChangeInfoPopLogic#Panel_127"), ChangeInfoPopLogic.callback_Panel_127, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(ChangeInfoPopLogic.view,"ChangeInfoPopLogic#Image_female"), ChangeInfoPopLogic.callback_Image_female, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(ChangeInfoPopLogic.view,"ChangeInfoPopLogic#Image_male"), ChangeInfoPopLogic.callback_Image_male, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(ChangeInfoPopLogic.view,"ChangeInfoPopLogic#Image_secrecy"), ChangeInfoPopLogic.callback_Image_secrecy, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(ChangeInfoPopLogic.view,"ChangeInfoPopLogic#Button_quxiao"), ChangeInfoPopLogic.callback_Button_quxiao, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(ChangeInfoPopLogic.view,"ChangeInfoPopLogic#Button_queding"), ChangeInfoPopLogic.callback_Button_queding, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(ChangeInfoPopLogic.view,"ChangeInfoPopLogic#Button_shouji_bind"), ChangeInfoPopLogic.callback_Button_shouji_bind, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(ChangeInfoPopLogic.view,"ChangeInfoPopLogic#Button_shouji_unbind"), ChangeInfoPopLogic.callback_Button_shouji_unbind, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(ChangeInfoPopLogic.view,"ChangeInfoPopLogic#Button_weixin_bind"), ChangeInfoPopLogic.callback_Button_weixin_bind, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(ChangeInfoPopLogic.view,"ChangeInfoPopLogic#Button_weixin_binded"), ChangeInfoPopLogic.callback_Button_weixin_binded, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(ChangeInfoPopLogic.view);
		ChangeInfoPopLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(ChangeInfoPopLogic.view, ChangeInfoPopLogic.onKeypad);
        ChangeInfoPopLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(ChangeInfoPopLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(ChangeInfoPopLogic);
			ChangeInfoPopLogic.releaseData();
		}
	
		ChangeInfoPopLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
