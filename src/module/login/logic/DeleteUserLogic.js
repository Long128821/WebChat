var DeleteUserLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	panel:null,
	lab_text:null,
	btn_close:null,
	btn_go:null,
	img_ok:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["DeleteUser"]["Layer"]);
        
        this.initView();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.panel = CocoStudio.getComponent(this.view, "panel");//Panel
		this.lab_text = CocoStudio.getComponent(this.view, "lab_text");//Label
		this.btn_close = CocoStudio.getComponent(this.view, "btn_close");//Button
		this.btn_go = CocoStudio.getComponent(this.view, "btn_go");//Button
		this.img_ok = CocoStudio.getComponent(this.view, "img_ok");//ImageView
	},

    initLayer:function(){
		var gui = GUI_DELETEUSER; 
		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 1136x640  
			this.view = CocoStudio.createView("res/DeleteUser.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT); 
		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
			//适配方案 Pad加黑边  
			this.view = CocoStudio.createView("res/DeleteUser.json"); 
			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL); 
		}
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

	callback_btn_go:function(pSender, event){
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
