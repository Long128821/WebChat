var GameHelpLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_14:null,
	Panel_1:null,
	Image_Help:null,
	Panel_Help:null,
	btn_close:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["GameHelp"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_14 = CocoStudio.getComponent(this.view, "Panel_14");//Panel
		this.Panel_1 = CocoStudio.getComponent(this.view, "Panel_1");//Panel
		this.Image_Help = CocoStudio.getComponent(this.view, "Image_Help");//ImageView
		this.Panel_Help = CocoStudio.getComponent(this.view, "Panel_Help");//Panel
		this.btn_close = CocoStudio.getComponent(this.view, "btn_close1");//Button
	},

    initLayer:function(){
		var gui = GUI_GAMEHELP;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/GameHelp.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/GameHelp.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/GameHelp.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
//			//适配方案 960x640
//			this.view = CocoStudio.createView("res/GameHelp_960_640.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}
	},
    
	callback_btn_close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_GAMEHELP);
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
        this.showWebView();
    },
    //显示WebView
    showWebView:function(){
        var webView = new ccui.WebView(GameConfig.URL_TABLE_CUSTOMSERVICE_HELP);
        var size= this.Panel_1.getContentSize();
        webView.setContentSize(size);
        webView.setPosition(cc.p(cc.winSize.width* 0.5, cc.winSize.height* 0.5));
        //移除原有的webView
        //获取bgColor(this.Panel_webview._color)
        //设置背景色
        webView._renderCmd._div.style["background"]= "rgb(56, 0, 38)";

        this.view.addChild(webView);
    }
};

//Todo:控件名一致时，最新按钮界面按钮被屏蔽
