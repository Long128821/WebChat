var VipInfoLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_127:null,
	Image_yueka:null,
	Button_left:null,
	Button_right:null,
	Image_tou:null,
	Label_suoming:null,
	Button_close:null,
	Panel_jindutiao:null,
	ProgressBar_vip:null,
	Label_prograss:null,
	Image_now_vip:null,
	AtlasLabel_now_vip_level:null,
	Image_now_vip_highsign:null,
	Image_now_vip_lowsign:null,
	AtlasLabel_now_lowsign:null,
	Image_next_vip:null,
	AtlasLabel_next_vip_level:null,
	Image_next_vip_highsign:null,
	Image_next_vip_lowsign:null,
	AtlasLabel_next_lowsign:null,
	Label_needRecharge:null,
	Button_recharge:null,
	Image_page:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["VipInfo"]["Layer"]);
        
        this.initView();

        this.initData();
    },
    
	initView:function(){
		this.Panel_127 = CocoStudio.getComponent(this.view, "Panel_127");//Panel
		this.Image_yueka = CocoStudio.getComponent(this.view, "Image_yueka");//ImageView
		this.Button_left = CocoStudio.getComponent(this.view, "Button_left");//Button
		this.Button_right = CocoStudio.getComponent(this.view, "Button_right");//Button
		this.Image_tou = CocoStudio.getComponent(this.view, "Image_tou");//ImageView
		this.Label_suoming = CocoStudio.getComponent(this.view, "Label_suoming");//Label
		this.Button_close = CocoStudio.getComponent(this.view, "Button_close");//Button
		this.Panel_jindutiao = CocoStudio.getComponent(this.view, "Panel_jindutiao");//Panel
		this.ProgressBar_vip = CocoStudio.getComponent(this.view, "ProgressBar_vip");//LoadingBar
		this.Label_prograss = CocoStudio.getComponent(this.view, "Label_prograss");//Label
		this.Image_now_vip = CocoStudio.getComponent(this.view, "Image_now_vip");//ImageView
		this.AtlasLabel_now_vip_level = CocoStudio.getComponent(this.view, "AtlasLabel_now_vip_level");//LabelAtlas
		this.Image_now_vip_highsign = CocoStudio.getComponent(this.view, "Image_now_vip_highsign");//ImageView
		this.Image_now_vip_lowsign = CocoStudio.getComponent(this.view, "Image_now_vip_lowsign");//ImageView
		this.AtlasLabel_now_lowsign = CocoStudio.getComponent(this.view, "AtlasLabel_now_lowsign");//LabelAtlas
		this.Image_next_vip = CocoStudio.getComponent(this.view, "Image_next_vip");//ImageView
		this.AtlasLabel_next_vip_level = CocoStudio.getComponent(this.view, "AtlasLabel_next_vip_level");//LabelAtlas
		this.Image_next_vip_highsign = CocoStudio.getComponent(this.view, "Image_next_vip_highsign");//ImageView
		this.Image_next_vip_lowsign = CocoStudio.getComponent(this.view, "Image_next_vip_lowsign");//ImageView
		this.AtlasLabel_next_lowsign = CocoStudio.getComponent(this.view, "AtlasLabel_next_lowsign");//LabelAtlas
		this.Label_needRecharge = CocoStudio.getComponent(this.view, "Label_needRecharge");//Label
		this.Button_recharge = CocoStudio.getComponent(this.view, "Button_recharge");//Button
		this.Image_page = CocoStudio.getComponent(this.view, "Image_page");//ImageView
	},

    initLayer:function(){
		var gui = GUI_VIPINFO;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/VipInfo.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/VipInfo.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/VipInfo.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},
    
	callback_Button_left:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            ProfileVipInfo.curPageID--;
            VipInfoLogic.showPage();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_right:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            ProfileVipInfo.curPageID++;
            VipInfoLogic.showPage();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_VIPINFO);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_recharge:function(pSender, event){
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
    	Frameworks.addSlot2Signal(JINHUA_MGR_VIP_INFO, VipInfoLogic.slotJINHUA_MGR_VIP_INFO);
    },
    //移除信号
    removeSlot:function(){
    	Frameworks.removeSlotFromSignal(JINHUA_MGR_VIP_INFO, VipInfoLogic.slotJINHUA_MGR_VIP_INFO);
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    },
    //初始化数据
    initData:function(){
        //获取Vip数据
        sendJINHUA_MGR_VIP_INFO();
    },
    //获取Vip消息
    slotJINHUA_MGR_VIP_INFO:function(dataTable){
        ProfileVipInfo.setVipsDataTable(dataTable);
        VipInfoLogic.showVipInfo();
    },
    //显示Vip信息
    showVipInfo:function(){
        var VipsDataTable= ProfileVipInfo.getVipsDataTable();
        if(Common.getTableSize(VipsDataTable)== 0){
            console.log("VIP信息出错,请重试");
            MvcEngine.destroyModule(GUI_VIPINFO);
            return;
        }
        var VipLevel= VipsDataTable["VipLevel"];
        //设置当前Vip等级
        this.AtlasLabel_now_vip_level.setStringValue(VipLevel);
        if(VipLevel>= 0){
            var picPath= VipElementsUtils.getVipBgFromVipLevel(VipLevel);
            //当前等级VIP显示
            if(picPath != null){
                this.Image_now_vip.loadTexture(Common.getJinHuaResourcePath(picPath))
            }else{
                this.Image_now_vip.loadTexture(Common.getJinHuaResourcePath("ic_vip_0.png"));
            }
            if(VipLevel== 0){
                this.AtlasLabel_now_vip_level.setVisible(false);
                this.Image_now_vip_highsign.setVisible(false);
                this.Image_now_vip_lowsign.setVisible(false);
                this.AtlasLabel_now_lowsign.setVisible(false);
            }else if(VipLevel> 0 && VipLevel< 10){
                this.AtlasLabel_now_vip_level.setVisible(true);
                this.Image_now_vip_highsign.setVisible(true);
                this.Image_now_vip_lowsign.setVisible(true);
                this.AtlasLabel_now_lowsign.setStringValue(VipLevel);
            }else if(VipLevel>= 10){
                this.AtlasLabel_now_vip_level.setVisible(true);
                var signPicPath= VipElementsUtils.getVipHighSignFromVipLevel(VipLevel);
                if(signPicPath!= null){
                    this.Image_now_vip_highsign.setVisible(false);
                }else{
                    this.Image_now_vip_highsign.loadTexture(signPicPath);
                    this.Image_now_vip_highsign.setVisible(true);
                }
            }
        }

        var nextVipLevel= VipsDataTable["nextVipLevel"];
        //设置当前Vip等级
        this.AtlasLabel_next_vip_level.setStringValue(nextVipLevel);
        if(nextVipLevel>= 0){
            var picPath= VipElementsUtils.getVipBgFromVipLevel(nextVipLevel);
            //当前等级VIP显示
            if(picPath != null){
                this.Image_next_vip.loadTexture(Common.getJinHuaResourcePath(picPath))
            }else{
                this.Image_next_vip.loadTexture(Common.getJinHuaResourcePath("ic_vip_0.png"));
            }
            if(nextVipLevel== 0){
                this.AtlasLabel_next_vip_level.setVisible(false);
                this.Image_next_vip_highsign.setVisible(false);
                this.Image_next_vip_lowsign.setVisible(false);
                this.AtlasLabel_next_lowsign.setVisible(false);
            }else if(nextVipLevel> 0 && nextVipLevel< 10){
                this.AtlasLabel_next_vip_level.setVisible(true);
                this.Image_next_vip_highsign.setVisible(true);
                this.Image_next_vip_lowsign.setVisible(true);
                this.AtlasLabel_next_lowsign.setStringValue(nextVipLevel);
            }else if(nextVipLevel>= 10){
                this.AtlasLabel_next_vip_level.setVisible(true);
                var signPicPath= VipElementsUtils.getVipHighSignFromVipLevel(nextVipLevel);
                if(signPicPath!= null){
                    this.Image_next_vip_highsign.setVisible(false);
                }else{
                    this.Image_next_vip_highsign.loadTexture(signPicPath);
                    this.Image_next_vip_highsign.setVisible(true);
                }
            }
        }

        var RechargeAmount = VipsDataTable["Recharge"];
        var VipNeedCoin = VipsDataTable["BuyCoin"];
        var NeedRecharge = VipsDataTable["nextRecharge"];
        this.ProgressBar_vip.setPercent(RechargeAmount/NeedRecharge* 100);
        this.Label_needRecharge.setText((NeedRecharge- RechargeAmount)+"元】");
        this.Label_prograss.setText(RechargeAmount+"/"+NeedRecharge);

        ProfileVipInfo.curPageID= VipsDataTable["vipInfoIndex"]- 1;//当前等级(Lua的下标从1开始，JS从0开始)
        ProfileVipInfo.maxPage= VipsDataTable["vipInfoCnt"]- 1;//当前等级等级

        //显示界面
        this.showPage();
    },
    //展示vip等级详情
    showPage:function(){
        if(ProfileVipInfo.curPageID> ProfileVipInfo.maxPage){
            console.log("已经是最高Vip等级了哟");
            ProfileVipInfo.curPageID= ProfileVipInfo.maxPage;
        }
        if(ProfileVipInfo.curPageID< 0){
            console.log("已经是最低Vip等级了哟");
            ProfileVipInfo.curPageID= 0;
        }
        var VipsInfoTable= ProfileVipInfo.getVipsInfoTable();

        //Table值不为空，且包含vipInfoURL变量
        if(Common.judgeValueIsEffect(VipsInfoTable[ProfileVipInfo.curPageID])&&VipsInfoTable[ProfileVipInfo.curPageID].hasOwnProperty("vipInfoURL")){
            this.Image_page.loadTexture(VipsInfoTable[ProfileVipInfo.curPageID].vipInfoURL);
        }
    }
};

//Todo：充值按钮
