var OtherUserInfoController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        OtherUserInfoLogic.view= null;
    },

    getLayer:function(){
        return OtherUserInfoLogic.view;
    },

    createView:function(){
        OtherUserInfoLogic.createView();
        //Frameworks.setOnKeypadEventListener(OtherUserInfoLogic.view, OtherUserInfoLogic.onKeypad);
    },
    
    requestMsg:function(){
    	OtherUserInfoLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	OtherUserInfoLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		OtherUserInfoLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Panel_shang"), OtherUserInfoLogic.callback_Panel_shang, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Panel_111"), OtherUserInfoLogic.callback_Panel_111, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Image_touxiangkuang"), OtherUserInfoLogic.callback_Image_touxiangkuang, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Image_biaoqian"), OtherUserInfoLogic.callback_Image_biaoqian, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Image_sex_bg"), OtherUserInfoLogic.callback_Image_sex_bg, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Label_name"), OtherUserInfoLogic.callback_Label_name, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Image_zhong"), OtherUserInfoLogic.callback_Image_zhong, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Button_wenhao99"), OtherUserInfoLogic.callback_Button_wenhao99, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Button_item"), OtherUserInfoLogic.callback_Button_item, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Button_safe"), OtherUserInfoLogic.callback_Button_safe, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Image_save"), OtherUserInfoLogic.callback_Image_save, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Image_draw"), OtherUserInfoLogic.callback_Image_draw, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Button_comfirm"), OtherUserInfoLogic.callback_Button_comfirm, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Button_add1000w"), OtherUserInfoLogic.callback_Button_add1000w, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Button_addMax"), OtherUserInfoLogic.callback_Button_addMax, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Button_add5000w"), OtherUserInfoLogic.callback_Button_add5000w, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Button_close"), OtherUserInfoLogic.callback_Button_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.bindEventCallback("OtherUserInfoLogic#", CocoStudio.getComponent(OtherUserInfoLogic.view,"Button_closeweb"), OtherUserInfoLogic.callback_Button_closeweb, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Panel_shang"), OtherUserInfoLogic.callback_Panel_shang, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Panel_111"), OtherUserInfoLogic.callback_Panel_111, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Image_touxiangkuang"), OtherUserInfoLogic.callback_Image_touxiangkuang, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Image_biaoqian"), OtherUserInfoLogic.callback_Image_biaoqian, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Image_sex_bg"), OtherUserInfoLogic.callback_Image_sex_bg, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Label_name"), OtherUserInfoLogic.callback_Label_name, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Image_zhong"), OtherUserInfoLogic.callback_Image_zhong, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Button_wenhao99"), OtherUserInfoLogic.callback_Button_wenhao99, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Button_item"), OtherUserInfoLogic.callback_Button_item, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Button_safe"), OtherUserInfoLogic.callback_Button_safe, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Image_save"), OtherUserInfoLogic.callback_Image_save, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Image_draw"), OtherUserInfoLogic.callback_Image_draw, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Button_comfirm"), OtherUserInfoLogic.callback_Button_comfirm, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Button_add1000w"), OtherUserInfoLogic.callback_Button_add1000w, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Button_addMax"), OtherUserInfoLogic.callback_Button_addMax, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Button_add5000w"), OtherUserInfoLogic.callback_Button_add5000w, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Button_close"), OtherUserInfoLogic.callback_Button_close, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
        Frameworks.unbindEventCallback(CocoStudio.getComponent(OtherUserInfoLogic.view,"OtherUserInfoLogic#Button_closeweb"), OtherUserInfoLogic.callback_Button_closeweb, BUTTON_CLICK, BUTTON_SOUND_BACK + BUTTON_ANIMATION_ZOOM_OUT);
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
		//Frameworks.releaseOnKeypadEventListener(OtherUserInfoLogic.view);
		OtherUserInfoLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(OtherUserInfoLogic.view, OtherUserInfoLogic.onKeypad);
        OtherUserInfoLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(OtherUserInfoLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(OtherUserInfoLogic);
			OtherUserInfoLogic.releaseData();
		}
	
		OtherUserInfoLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
