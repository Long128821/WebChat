var JinHuaTableSetPopLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	Panel_56:null,
	img_shake:null,
	cb_shake:null,
	img_effect:null,
	cb_effect:null,
	btn_close:null,
	img_bgmusic:null,
	cb_bgmusic:null,
	Image_diban:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["JinHuaTableSetPop"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.Panel_56 = CocoStudio.getComponent(this.view, "Panel_56");//Panel
		this.img_shake = CocoStudio.getComponent(this.view, "img_shake");//ImageView
		this.cb_shake = CocoStudio.getComponent(this.view, "cb_shake");//CheckBox
		this.img_effect = CocoStudio.getComponent(this.view, "img_effect");//ImageView
		this.cb_effect = CocoStudio.getComponent(this.view, "cb_effect");//CheckBox
		this.btn_close = CocoStudio.getComponent(this.view, "btn_close");//Button
		this.img_bgmusic = CocoStudio.getComponent(this.view, "img_bgmusic");//ImageView
		this.cb_bgmusic = CocoStudio.getComponent(this.view, "cb_bgmusic");//CheckBox
		this.Image_diban = CocoStudio.getComponent(this.view, "Image_diban");//ImageView
	},

    initLayer:function(){
		var gui = GUI_JINHUATABLESETPOP;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/JinHuaTableSetPop.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/JinHuaTableSetPop.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/JinHuaTableSetPop.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},
    
	callback_btn_close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_JINHUATABLESETPOP);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},
    //安卓手机的返回键的监听事件
    onKeypad:function(event){
    	if(event == "backClicked"){//返回键
    		
    	}else if(event == "menuClicked"){//菜单键
    	
    	}
    },
    //添加信号
    addSlot:function(){
    	
    },
    //移除信号
    removeSlot:function(){
    	
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    },
    //初始化界面
    initData:function(){
        console.log(this.img_bgmusic);
        //this.img_effect.setSelectedState(GameConfig.getGameSoundOff());
        //this.img_bgmusic.setSelectedState(GameConfig.getGameMusicOff());
    }
};
