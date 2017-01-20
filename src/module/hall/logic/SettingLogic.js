var SettingLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	img_music:null,
	img_yinxiao:null,
	panel:null,
	btn_close:null,
	Image_banbenhaoditu:null,
	Image_gaimimaditu:null,
	Image_xiugaimima:null,
	lab_text2:null,
	panel_hall_setting:null,
	btn_music:null,
	ImageView_music:null,
	btn_yinxiao:null,
	ImageView_yinxiao:null,
	btn_help:null,
	btn_kefu:null,
	btn_logout:null,
	Image_Switching:null,
	btn_version:null,
	Image_Version:null,
	Button_gaimi:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["Setting"]["Layer"]);
        
        this.initView();

        GameConfig.setCurBaseLayer(GUI_HALL);

        this.initBaseData();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.img_music = CocoStudio.getComponent(this.view, "img_music");//ImageView
		this.img_yinxiao = CocoStudio.getComponent(this.view, "img_yinxiao");//ImageView
		this.panel = CocoStudio.getComponent(this.view, "panel");//Panel
		this.btn_close = CocoStudio.getComponent(this.view, "btn_close");//Button
		this.Image_banbenhaoditu = CocoStudio.getComponent(this.view, "Image_banbenhaoditu");//ImageView
		this.Image_gaimimaditu = CocoStudio.getComponent(this.view, "Image_gaimimaditu");//ImageView
		this.Image_xiugaimima = CocoStudio.getComponent(this.view, "Image_xiugaimima");//ImageView
		this.lab_text2 = CocoStudio.getComponent(this.view, "lab_text2");//Label
		this.panel_hall_setting = CocoStudio.getComponent(this.view, "panel_hall_setting");//Panel
		this.btn_music = CocoStudio.getComponent(this.view, "btn_music");//Button
		this.ImageView_music = CocoStudio.getComponent(this.view, "ImageView_music");//ImageView
		this.btn_yinxiao = CocoStudio.getComponent(this.view, "btn_yinxiao");//Button
		this.ImageView_yinxiao = CocoStudio.getComponent(this.view, "ImageView_yinxiao");//ImageView
		this.btn_help = CocoStudio.getComponent(this.view, "btn_help");//Button
		this.btn_kefu = CocoStudio.getComponent(this.view, "btn_kefu");//Button
		this.btn_logout = CocoStudio.getComponent(this.view, "btn_logout");//Button
		this.Image_Switching = CocoStudio.getComponent(this.view, "Image_Switching");//ImageView
		this.btn_version = CocoStudio.getComponent(this.view, "btn_version");//Button
		this.Image_Version = CocoStudio.getComponent(this.view, "Image_Version");//ImageView
		this.Button_gaimi = CocoStudio.getComponent(this.view, "Button_gaimi");//Button
	},

    initLayer:function(){
		var gui = GUI_SETTING;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/Setting.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/Setting.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/Setting.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},
    
	callback_btn_close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_SETTING);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_xiugaimima:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_music:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
            console.log("音乐！");
			//抬起
            SettingLogic.switchState(0);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_yinxiao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
            console.log("音效！");
			//抬起
            SettingLogic.switchState(1);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_help:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_GAMEHELP);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_kefu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_logout:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_LOGIN);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_version:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_gaimi:function(pSender, event){
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
    /**
     * Func:切换按钮的状态
     * @param type 0:音乐 1:音效
     */
    switchState:function(type){
        if(type== 0){
            GameConfig.setGameMusicOff(!GameConfig.getGameMusicOff());
            this.img_music.setVisible(!GameConfig.getGameMusicOff());
        }else{
            GameConfig.setGameSoundOff(!GameConfig.getGameSoundOff());
            this.img_yinxiao.setVisible(!GameConfig.getGameSoundOff());
        }
    },
    //初始化界面数据
    initBaseData:function(){
        this.img_music.setVisible(!GameConfig.getGameMusicOff());
        this.img_yinxiao.setVisible(!GameConfig.getGameSoundOff());
        //版本号ID
        this.lab_text2.setText("游戏版本号:"+ Common.getVersion()+"."+Common.getChannelID()+"     ID:"+ profile_user.getSelfUserID());

        this.Button_gaimi.setVisible(false);
    }
};

//Todo:没有将游戏版本 改为4.15的原因是:不知道其规则