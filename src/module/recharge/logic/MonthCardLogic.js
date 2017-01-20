var MonthCardLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_127:null,
	Button_weixin:null,
	Image_yueka:null,
	Button_guanbi:null,
	Button_goumai:null,
	Image_goumai:null,
	Panel_afterbuy:null,
	Image_julidaoqi:null,
	AtlasLabel_leftday:null,
	AtlasLabel_getCoin:null,
	AtlasLabel_getAllCoin:null,
	Label_limitCoin1:null,
	Label_limitCoin2:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["MonthCard"]["Layer"]);
        
        this.initView();
    },
    
	initView:function(){
		this.Panel_127 = CocoStudio.getComponent(this.view, "Panel_127");//Panel
		this.Button_weixin = CocoStudio.getComponent(this.view, "Button_weixin");//Button
		this.Image_yueka = CocoStudio.getComponent(this.view, "Image_yueka");//ImageView
		this.Button_guanbi = CocoStudio.getComponent(this.view, "Button_guanbi");//Button
		this.Button_goumai = CocoStudio.getComponent(this.view, "Button_goumai");//Button
		this.Image_goumai = CocoStudio.getComponent(this.view, "Image_goumai");//ImageView
		this.Panel_afterbuy = CocoStudio.getComponent(this.view, "Panel_afterbuy");//Panel
		this.Image_julidaoqi = CocoStudio.getComponent(this.view, "Image_julidaoqi");//ImageView
		this.AtlasLabel_leftday = CocoStudio.getComponent(this.view, "AtlasLabel_leftday");//LabelAtlas
		this.AtlasLabel_getCoin = CocoStudio.getComponent(this.view, "AtlasLabel_getCoin");//LabelAtlas
		this.AtlasLabel_getAllCoin = CocoStudio.getComponent(this.view, "AtlasLabel_getAllCoin");//LabelAtlas
		this.Label_limitCoin1 = CocoStudio.getComponent(this.view, "Label_limitCoin1");//Label
		this.Label_limitCoin2 = CocoStudio.getComponent(this.view, "Label_limitCoin2");//Label
	},

    initLayer:function(){
		var gui = GUI_MONTHCARD;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/MonthCard.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/MonthCard.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/MonthCard.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},
    
	callback_Button_weixin:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_guanbi:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_MONTHCARD);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_goumai:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_MONTHCARD);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_afterbuy:function(pSender, event){
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
    
    }
};
