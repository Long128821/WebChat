var MessageServerLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	panel_Notice:null,
	Panel_Content:null,
	label_content:null,
	btn_action:null,
	ImageView_LingQu:null,
	btn_lingqu:null,
	ImageView_LingQu:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["MessageServer"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.panel_Notice = CocoStudio.getComponent(this.view, "panel_Notice");//Panel
		this.Panel_Content = CocoStudio.getComponent(this.view, "Panel_Content");//Panel
		this.label_content = CocoStudio.getComponent(this.view, "label_content");//Label
		this.btn_action = CocoStudio.getComponent(this.view, "btn_action");//Button
		this.ImageView_LingQu = CocoStudio.getComponent(this.view, "ImageView_LingQu");//ImageView
		this.btn_lingqu = CocoStudio.getComponent(this.view, "btn_lingqu");//Button
		this.ImageView_LingQu = CocoStudio.getComponent(this.view, "ImageView_LingQu");//ImageView
	},

    initLayer:function(){
		var gui = GUI_MESSAGESERVER;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/MessageServer.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/MessageServer.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/MessageServer.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},

	callback_Panel_Content:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_action:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_MESSAGESERVER);
            sendMAIL_SYSTEM_MESSGE_LIST(0, 100);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_lingqu:function(pSender, event){
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
        //提示消息
        this.label_content.setString(Profile_Message.getMessageListTable()[ProfileMessageList.getCurMsgID()]["MessageContent"]);
    }
};
