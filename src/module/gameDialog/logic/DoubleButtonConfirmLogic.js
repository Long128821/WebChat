var DoubleButtonConfirmLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_127:null,
	Panel_2:null,
	Image_beijing:null,
	Label_shuoming:null,
	Button_quxiao:null,
	Image_quxiao:null,
	Button_queding:null,
	Image_queding:null,
	
    createView:function(){
        //加载Plist文件
        cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("co_desk.plist"),Common.getJinHuaResourcePath("co_desk.png"));

    	this.initLayer();
        
        this.view.setTag(ModuleTable["DoubleButtonConfirm"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_127 = CocoStudio.getComponent(this.view, "Panel_127");//Panel
		this.Panel_2 = CocoStudio.getComponent(this.view, "Panel_2");//Panel
		this.Image_beijing = CocoStudio.getComponent(this.view, "Image_beijing");//ImageView
		this.Label_shuoming = CocoStudio.getComponent(this.view, "Label_shuoming");//Label
		this.Button_quxiao = CocoStudio.getComponent(this.view, "Button_quxiao");//Button
		this.Image_quxiao = CocoStudio.getComponent(this.view, "Image_quxiao");//ImageView
		this.Button_queding = CocoStudio.getComponent(this.view, "Button_queding");//Button
		this.Image_queding = CocoStudio.getComponent(this.view, "Image_queding");//ImageView
	},

    initLayer:function(){
		var gui = GUI_DOUBLEBUTTONCONFIRM;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/DoubleButtonConfirm.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/DoubleButtonConfirm.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/DoubleButtonConfirm.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},
    
	callback_Panel_127:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},
    //确定
	callback_Button_quxiao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_DOUBLEBUTTONCONFIRM);
            sendJHID_SAVE_TAKE_STRONG_BOX_COIN(1000, 1);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},
    //取消
	callback_Button_queding:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_DOUBLEBUTTONCONFIRM);
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
    	Frameworks.addSlot2Signal(JHID_SAVE_TAKE_STRONG_BOX_COIN, ProfileDoubleButtonConfirm.slot_JHID_SAVE_TAKE_STRONG_BOX_COIN);
    },
    //移除信号
    removeSlot:function(){
    	Frameworks.removeSlotFromSignal(JHID_SAVE_TAKE_STRONG_BOX_COIN, ProfileDoubleButtonConfirm.slot_JHID_SAVE_TAKE_STRONG_BOX_COIN);
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    },
    //初始化界面
    initData:function(){
        var message= Profile_DoubleButtonConfirm.getMessage();
        //设置二次说明确认
        if(Common.judgeValueIsEffect(message)){
            this.Label_shuoming.setString(message);
        }
    }
};
