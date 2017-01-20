var DailySalaryLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_127:null,
	Image_beijing:null,
	Panel_left:null,
	AtlasLabel_maxReward:null,
	AtlasLabel_countDay:null,
	AtlasLabel_tomorrowReward:null,
	Image_head:null,
	AtlasLabel_maxDay:null,
	Image_chengwei:null,
	Panel_right:null,
	Label_levelReward:null,
	Label_vipReward:null,
	Label_baseReward:null,
	AtlasLabel_totalReward:null,
	Button_VipLevelUp:null,
	AtlasLabel_level:null,
	Image_vip_bg:null,
	AtlasLabel_vip_level:null,
	Image_vip_highsign:null,
	Image_vip_lowsignbg:null,
	AtlasLabel_lowsign:null,
	Button_lingjiang:null,
	Image_lingqu:null,
	Button_quxiao:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["DailySalary"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_127 = CocoStudio.getComponent(this.view, "Panel_127");//Panel
		this.Image_beijing = CocoStudio.getComponent(this.view, "Image_beijing");//ImageView
		this.Panel_left = CocoStudio.getComponent(this.view, "Panel_left");//Panel
		this.AtlasLabel_maxReward = CocoStudio.getComponent(this.view, "AtlasLabel_maxReward");//LabelAtlas
		this.AtlasLabel_countDay = CocoStudio.getComponent(this.view, "AtlasLabel_countDay");//LabelAtlas
		this.AtlasLabel_tomorrowReward = CocoStudio.getComponent(this.view, "AtlasLabel_tomorrowReward");//LabelAtlas
		this.Image_head = CocoStudio.getComponent(this.view, "Image_head");//ImageView
		this.AtlasLabel_maxDay = CocoStudio.getComponent(this.view, "AtlasLabel_maxDay");//LabelAtlas
		this.Image_chengwei = CocoStudio.getComponent(this.view, "Image_chengwei");//ImageView
		this.Panel_right = CocoStudio.getComponent(this.view, "Panel_right");//Panel
		this.Label_levelReward = CocoStudio.getComponent(this.view, "Label_levelReward");//Label
		this.Label_vipReward = CocoStudio.getComponent(this.view, "Label_vipReward");//Label
		this.Label_baseReward = CocoStudio.getComponent(this.view, "Label_baseReward");//Label
		this.AtlasLabel_totalReward = CocoStudio.getComponent(this.view, "AtlasLabel_totalReward");//LabelAtlas
		this.Button_VipLevelUp = CocoStudio.getComponent(this.view, "Button_VipLevelUp");//Button
		this.AtlasLabel_level = CocoStudio.getComponent(this.view, "AtlasLabel_level");//LabelAtlas
		this.Image_vip_bg = CocoStudio.getComponent(this.view, "Image_vip_bg");//ImageView
		this.AtlasLabel_vip_level = CocoStudio.getComponent(this.view, "AtlasLabel_vip_level");//LabelAtlas
		this.Image_vip_highsign = CocoStudio.getComponent(this.view, "Image_vip_highsign");//ImageView
		this.Image_vip_lowsignbg = CocoStudio.getComponent(this.view, "Image_vip_lowsignbg");//ImageView
		this.AtlasLabel_lowsign = CocoStudio.getComponent(this.view, "AtlasLabel_lowsign");//LabelAtlas
		this.Button_lingjiang = CocoStudio.getComponent(this.view, "Button_lingjiang");//Button
		this.Image_lingqu = CocoStudio.getComponent(this.view, "Image_lingqu");//ImageView
		this.Button_quxiao = CocoStudio.getComponent(this.view, "Button_quxiao");//Button
	},

    initLayer:function(){
		var gui = GUI_DAILYSALARY;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/DailySalary.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/DailySalary.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/DailySalary.json");
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

	callback_Panel_left:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_right:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_VipLevelUp:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_lingjiang:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJINHUA_MGR_GET_SALARY();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_quxiao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_DAILYSALARY);
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
    	Frameworks.addSlot2Signal(JINHUA_MGR_GET_SALARY, ProfileDailySalary.slot_JINHUA_MGR_GET_SALARY);
    },
    //移除信号
    removeSlot:function(){
    	Frameworks.removeSlotFromSignal(JINHUA_MGR_GET_SALARY, ProfileDailySalary.slot_JINHUA_MGR_GET_SALARY);
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    },
    //初始化界面
    initData:function(){
        var dailySalaryInfoTable= Profile_DailySalary.getDailySalaryInfoTable();
        if(dailySalaryInfoTable==null){
            console.log("工资信息错误,请稍后重试.");
            MvcEngine.destroyModule(GUI_DAILYSALARY);
            return;
        }
        //称谓
        Profile_JinHuaSetting.setUserTitleOnImageView(dailySalaryInfoTable["Coin"], this.Image_chengwei);
        //最大天数
        this.AtlasLabel_maxDay.setStringValue(dailySalaryInfoTable["MaxDay"]);
        //当前连续天数
        this.AtlasLabel_countDay.setStringValue(dailySalaryInfoTable["CountDay"]);
        //明天登录可领工资
        this.AtlasLabel_tomorrowReward.setStringValue(dailySalaryInfoTable["TomorrowReward"]);
        //最大天数连续登录可领工资
        this.AtlasLabel_maxReward.setStringValue(dailySalaryInfoTable["MaxReward"]);
        //基础奖励
        this.Label_baseReward.setText(dailySalaryInfoTable["BaseReward"]);
        //等级奖励
        this.Label_levelReward.setText(dailySalaryInfoTable["LevelReward"]);
        //VIP等级奖励
        this.Label_vipReward.setText(dailySalaryInfoTable["VipReward"]);
        //设置等级
        this.AtlasLabel_level.setStringValue(dailySalaryInfoTable["Level"]);
        //设置今日奖励总数
        this.AtlasLabel_totalReward.setStringValue(dailySalaryInfoTable["BaseReward"] + dailySalaryInfoTable["LevelReward"] + dailySalaryInfoTable["VipReward"]);
        //加载网络头像
        Common.setTextureByNet(dailySalaryInfoTable["PhotoUrl"], this.Image_head);
        this.Image_head.setScale(1.1);

        //Vip等级
        var userVipLevel = dailySalaryInfoTable["VipLevel"];
        if(userVipLevel >= 0){
            var texture = VipElementsUtils.getVipBgFromVipLevel(userVipLevel);
            if(texture != null){
                this.Image_vip_bg.loadTexture(Common.getJinHuaResourcePath(texture))
            }else{
                this.Image_vip_bg.loadTexture(Common.getJinHuaResourcePath("ic_vip_0.png"))
            }

            if(userVipLevel == 0){
                this.AtlasLabel_vip_level.setVisible(false);
                this.Image_vip_highsign.setVisible(false);
                this.Image_vip_lowsignbg.setVisible(false);
                this.AtlasLabel_lowsign.setVisible(false);
            }else if(userVipLevel > 0 && userVipLevel < 10){
                this.AtlasLabel_vip_level.setVisible(true);
                this.Image_vip_highsign.setVisible(false);
                this.Image_vip_lowsignbg.setVisible(true);
                this.AtlasLabel_lowsign.setVisible(true);
                this.AtlasLabel_vip_level.setStringValue(userVipLevel);
                this.AtlasLabel_lowsign.setStringValue(userVipLevel);
            }else if(userVipLevel >= 10){
                this.AtlasLabel_vip_level.setVisible(true);
                this.Image_vip_highsign.setVisible(true);
                this.Image_vip_lowsignbg.setVisible(false);
                this.AtlasLabel_lowsign.setVisible(false);
                this.AtlasLabel_vip_level.setStringValue(userVipLevel);
                var signTexture = VipElementsUtils.getVipHighSignFromVipLevel(userVipLevel);
                if(signTexture == null){
                    this.Image_vip_highsign.setVisible(false);
                }else{
                    this.Image_vip_highsign.loadTexture(Common.getJinHuaResourcePath(signTexture));
                }
            }
        }
    },
    //获取游戏结果
    acceptResult:function(){
        //每日工资领取结果
        var getDailySalaryTable= Profile_DailySalary.getGetDailySalaryTable();
        if(getDailySalaryTable== null){
            console.log("领取奖励失败,请重试!");
        }
        if(getDailySalaryTable.Success== 1){
            //领取成功
            MvcEngine.destroyModule(GUI_DAILYSALARY);
        }else{
            console.log(getDailySalaryTable.Msg);
        }
    }
};
