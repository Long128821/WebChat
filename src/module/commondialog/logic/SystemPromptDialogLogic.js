var SystemPromptDialogLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	panel:null,
	Label_text:null,
	btn_logout:null,
	Image_tit:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["SystemPromptDialog"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.panel = CocoStudio.getComponent(this.view, "panel");//Panel
		this.Label_text = CocoStudio.getComponent(this.view, "Label_text");//Label
		this.btn_logout = CocoStudio.getComponent(this.view, "btn_logout");//Button
		this.Image_tit = CocoStudio.getComponent(this.view, "Image_tit");//ImageView
	},

    initLayer:function(){
		var gui = GUI_SYSTEMPROMPTDIALOG;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/SystemPromptDialog.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/SystemPromptDialog.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/SystemPromptDialog.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},
    
	callback_btn_logout:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            window.close();
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
        if(Profile_SystemPromptDialog.getCurMsg()!= null){
            this.Label_text.setString(Profile_SystemPromptDialog.getCurMsg());
        }
    }
};
