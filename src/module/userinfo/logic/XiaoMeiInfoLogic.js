var XiaoMeiInfoLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_127:null,
	Panel_2:null,
	Image_beijing:null,
	Image_toux:null,
	Image_touxiangkuang:null,
	Image_chengwei:null,
	Button_xiaoxi:null,
	Image_xiaoxi1:null,
	Image_lv:null,
	Image_name:null,
	Image_dianhua:null,
	Button_close:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["XiaoMeiInfo"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_127 = CocoStudio.getComponent(this.view, "Panel_127");//Panel
		this.Panel_2 = CocoStudio.getComponent(this.view, "Panel_2");//Panel
		this.Image_beijing = CocoStudio.getComponent(this.view, "Image_beijing");//ImageView
		this.Image_toux = CocoStudio.getComponent(this.view, "Image_toux");//ImageView
		this.Image_touxiangkuang = CocoStudio.getComponent(this.view, "Image_touxiangkuang");//ImageView
		this.Image_chengwei = CocoStudio.getComponent(this.view, "Image_chengwei");//ImageView
		this.Button_xiaoxi = CocoStudio.getComponent(this.view, "Button_xiaoxi");//Button
		this.Image_xiaoxi1 = CocoStudio.getComponent(this.view, "Image_xiaoxi1");//ImageView
		this.Image_lv = CocoStudio.getComponent(this.view, "Image_lv");//ImageView
		this.Image_name = CocoStudio.getComponent(this.view, "Image_name");//ImageView
		this.Image_dianhua = CocoStudio.getComponent(this.view, "Image_dianhua");//ImageView
		this.Button_close = CocoStudio.getComponent(this.view, "Button_close");//Button
	},

    initLayer:function(){
		var gui = GUI_XIAOMEIINFO;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/XiaoMeiInfo.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/XiaoMeiInfo.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/XiaoMeiInfo.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},

	callback_Button_xiaoxi:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            console.log("adfasf");
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_XIAOMEIINFO);
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
