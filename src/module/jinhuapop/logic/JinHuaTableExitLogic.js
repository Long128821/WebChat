var JinHuaTableExitLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	Panel_56:null,
	Image_bg:null,
	btn_close:null,
	Button_Confirm:null,
	Image_left:null,
	Button_Download:null,
	Image_right:null,
	
    createView:function(){
        cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("co_desk.plist"), Common.getJinHuaResourcePath("co_desk.png"));
    	this.initLayer();
        
        this.view.setTag(ModuleTable["JinHuaTableExit"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.Panel_56 = CocoStudio.getComponent(this.view, "Panel_56");//Panel
		this.Image_bg = CocoStudio.getComponent(this.view, "Image_bg");//ImageView
		this.btn_close = CocoStudio.getComponent(this.view, "btn_close");//Button
		this.Button_Confirm = CocoStudio.getComponent(this.view, "Button_Confirm");//Button
		this.Image_left = CocoStudio.getComponent(this.view, "Image_left");//ImageView
		this.Button_Download = CocoStudio.getComponent(this.view, "Button_Download");//Button
		this.Image_right = CocoStudio.getComponent(this.view, "Image_right");//ImageView
	},

    initLayer:function(){
		var gui = GUI_JINHUATABLEEXIT;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/JinHuaTableExit.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/JinHuaTableExit.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/JinHuaTableExit.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
//			//适配方案 960x640
//			this.view = CocoStudio.createView("res/JinHuaTableExit_960_640.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}
	},
    
	callback_btn_close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_Confirm:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_Download:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

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

    }
};
