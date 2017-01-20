var LoadingController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        LoadingLogic.view= null;
    },

    getLayer:function(){
        return LoadingLogic.view;
    },

    createView:function(){
        LoadingLogic.createView();
        //Frameworks.setOnKeypadEventListener(LoadingLogic.view, LoadingLogic.onKeypad);
    },
    
    requestMsg:function(){
    	LoadingLogic.requestMsg();
    },
    
    addSlot:function(){
    	LoadingLogic.addSlot();
    },

	removeSlot:function(){
		LoadingLogic.removeSlot();
	},
    
    addCallback:function(){

    },
    
    removeCallback:function(){

    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},

	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    
    sleepModule:function(){
		//Frameworks.releaseOnKeypadEventListener(LoadingLogic.view);
		LoadingLogic.view.setTouchEnabled(false);
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },

    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(LoadingLogic.view, LoadingLogic.onKeypad);
        LoadingLogic.view.setTouchEnabled(true);
        this.addCallback();
    },

    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(LoadingLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(LoadingLogic);
			LoadingLogic.releaseData();
		}
	
		LoadingLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
