var OtherUserInfoLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_127:null,
	Panel_daoju:null,
	Panel_2:null,
	Image_beijing:null,
	Panel_shang:null,
	Image_jindutiao:null,
	Image_jindu:null,
	Label_exp:null,
	AtlasLabel_level:null,
	Panel_111:null,
	Image_toux:null,
	Image_vip_bg:null,
	AtlasLabel_vip_level:null,
	Image_vip_highsign:null,
	Image_vip_lowsignbg:null,
	AtlasLabel_lowsign:null,
	Image_touxiangkuang:null,
	Image_biaoqian:null,
	Image_lucky_icon:null,
	Image_sex_bg:null,
	Image_shouji_bind:null,
	Image_weixin_bind:null,
	Image_money_bg:null,
	AtlasLabel_arena_position:null,
	Image_money:null,
	AtlasLabel_jinbi:null,
	Image_chengwei:null,
	Label_arena_title:null,
	Label_arena_NoPosition:null,
	Image_name_bg:null,
	Label_name:null,
	Image_paiju_bg:null,
	Image_money:null,
	AtlasLabel_jushu:null,
	AtlasLabel_shenglvshu:null,
	Image_shenglv:null,
	Image_zhong:null,
	Image_xin1:null,
	Image_liang1:null,
	Image_xin2:null,
	Image_liang2:null,
	AtlasLabel_meilizhi:null,
	Label_meili_detail:null,
	Image_xin3:null,
	Image_liang3:null,
	Image_xin4:null,
	Image_liang4:null,
	Image_xin5:null,
	Image_liang5:null,
	Button_wenhao99:null,
	Button_item:null,
	Button_safe:null,
	Panel_baoxianxiang:null,
	Image_saveText:null,
	Image_save:null,
	Image_drawText:null,
	Image_draw:null,
	Label_haveMoney:null,
	Image_changeMoney:null,
	Label_changeMoney:null,
	Button_comfirm:null,
	Button_add1000w:null,
	Button_addMax:null,
	Button_add5000w:null,
	Button_close:null,
	Panel_60:null,
	Button_closeweb:null,
	Panel_dingwei:null,

    m_webView:null,//魅力值的WebView
	
    createView:function(){
        cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("co_desk.plist"),Common.getJinHuaResourcePath("co_desk.png"));
        cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("userinfo_mine.plist"),Common.getJinHuaResourcePath("userinfo_mine.png"));
        cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("table_elements.plist"),Common.getJinHuaResourcePath("table_elements.png"));
    	this.initLayer();
        
        this.view.setTag(ModuleTable["OtherUserInfo"]["Layer"]);
        
        this.initView();

        this.initData();
    },
    
	initView:function(){
		this.Panel_127 = CocoStudio.getComponent(this.view, "Panel_127");//Panel
		this.Panel_daoju = CocoStudio.getComponent(this.view, "Panel_daoju");//Panel
		this.Panel_2 = CocoStudio.getComponent(this.view, "Panel_2");//Panel
		this.Image_beijing = CocoStudio.getComponent(this.view, "Image_beijing");//ImageView
		this.Panel_shang = CocoStudio.getComponent(this.view, "Panel_shang");//Panel
		this.Image_jindutiao = CocoStudio.getComponent(this.view, "Image_jindutiao");//ImageView
		this.Image_jindu = CocoStudio.getComponent(this.view, "Image_jindu");//ImageView
		this.Label_exp = CocoStudio.getComponent(this.view, "Label_exp");//Label
		this.AtlasLabel_level = CocoStudio.getComponent(this.view, "AtlasLabel_level");//LabelAtlas
		this.Panel_111 = CocoStudio.getComponent(this.view, "Panel_111");//Panel
		this.Image_toux = CocoStudio.getComponent(this.view, "Image_toux");//ImageView
		this.Image_vip_bg = CocoStudio.getComponent(this.view, "Image_vip_bg");//ImageView
		this.AtlasLabel_vip_level = CocoStudio.getComponent(this.view, "AtlasLabel_vip_level");//LabelAtlas
		this.Image_vip_highsign = CocoStudio.getComponent(this.view, "Image_vip_highsign");//ImageView
		this.Image_vip_lowsignbg = CocoStudio.getComponent(this.view, "Image_vip_lowsignbg");//ImageView
		this.AtlasLabel_lowsign = CocoStudio.getComponent(this.view, "AtlasLabel_lowsign");//LabelAtlas
		this.Image_touxiangkuang = CocoStudio.getComponent(this.view, "Image_touxiangkuang");//ImageView
		this.Image_biaoqian = CocoStudio.getComponent(this.view, "Image_biaoqian");//ImageView
		this.Image_lucky_icon = CocoStudio.getComponent(this.view, "Image_lucky_icon");//ImageView
		this.Image_sex_bg = CocoStudio.getComponent(this.view, "Image_sex_bg");//ImageView
		this.Image_shouji_bind = CocoStudio.getComponent(this.view, "Image_shouji_bind");//ImageView
		this.Image_weixin_bind = CocoStudio.getComponent(this.view, "Image_weixin_bind");//ImageView
		this.Image_money_bg = CocoStudio.getComponent(this.view, "Image_money_bg");//ImageView
		this.AtlasLabel_arena_position = CocoStudio.getComponent(this.view, "AtlasLabel_arena_position");//LabelAtlas
		this.Image_money = CocoStudio.getComponent(this.view, "Image_money");//ImageView
		this.AtlasLabel_jinbi = CocoStudio.getComponent(this.view, "AtlasLabel_jinbi");//LabelAtlas
		this.Image_chengwei = CocoStudio.getComponent(this.view, "Image_chengwei");//ImageView
		this.Label_arena_title = CocoStudio.getComponent(this.view, "Label_arena_title");//Label
		this.Label_arena_NoPosition = CocoStudio.getComponent(this.view, "Label_arena_NoPosition");//Label
		this.Image_name_bg = CocoStudio.getComponent(this.view, "Image_name_bg");//ImageView
		this.Label_name = CocoStudio.getComponent(this.view, "Label_name");//Label
		this.Image_paiju_bg = CocoStudio.getComponent(this.view, "Image_paiju_bg");//ImageView
		this.Image_money = CocoStudio.getComponent(this.view, "Image_money");//ImageView
		this.AtlasLabel_jushu = CocoStudio.getComponent(this.view, "AtlasLabel_jushu");//LabelAtlas
		this.AtlasLabel_shenglvshu = CocoStudio.getComponent(this.view, "AtlasLabel_shenglvshu");//LabelAtlas
		this.Image_shenglv = CocoStudio.getComponent(this.view, "Image_shenglv");//ImageView
		this.Image_zhong = CocoStudio.getComponent(this.view, "Image_zhong");//ImageView
		this.Image_xin1 = CocoStudio.getComponent(this.view, "Image_xin1");//ImageView
		this.Image_liang1 = CocoStudio.getComponent(this.view, "Image_liang1");//ImageView
		this.Image_xin2 = CocoStudio.getComponent(this.view, "Image_xin2");//ImageView
		this.Image_liang2 = CocoStudio.getComponent(this.view, "Image_liang2");//ImageView
		this.AtlasLabel_meilizhi = CocoStudio.getComponent(this.view, "AtlasLabel_meilizhi");//LabelAtlas
		this.Label_meili_detail = CocoStudio.getComponent(this.view, "Label_meili_detail");//Label
		this.Image_xin3 = CocoStudio.getComponent(this.view, "Image_xin3");//ImageView
		this.Image_liang3 = CocoStudio.getComponent(this.view, "Image_liang3");//ImageView
		this.Image_xin4 = CocoStudio.getComponent(this.view, "Image_xin4");//ImageView
		this.Image_liang4 = CocoStudio.getComponent(this.view, "Image_liang4");//ImageView
		this.Image_xin5 = CocoStudio.getComponent(this.view, "Image_xin5");//ImageView
		this.Image_liang5 = CocoStudio.getComponent(this.view, "Image_liang5");//ImageView
		this.Button_wenhao99 = CocoStudio.getComponent(this.view, "Button_wenhao99");//Button
		this.Button_item = CocoStudio.getComponent(this.view, "Button_item");//Button
		this.Button_safe = CocoStudio.getComponent(this.view, "Button_safe");//Button
		this.Panel_baoxianxiang = CocoStudio.getComponent(this.view, "Panel_baoxianxiang");//Panel
		this.Image_saveText = CocoStudio.getComponent(this.view, "Image_saveText");//ImageView
		this.Image_save = CocoStudio.getComponent(this.view, "Image_save");//ImageView
		this.Image_drawText = CocoStudio.getComponent(this.view, "Image_drawText");//ImageView
		this.Image_draw = CocoStudio.getComponent(this.view, "Image_draw");//ImageView
		this.Label_haveMoney = CocoStudio.getComponent(this.view, "Label_haveMoney");//Label
		this.Image_changeMoney = CocoStudio.getComponent(this.view, "Image_changeMoney");//ImageView
		this.Label_changeMoney = CocoStudio.getComponent(this.view, "Label_changeMoney");//Label
		this.Button_comfirm = CocoStudio.getComponent(this.view, "Button_comfirm");//Button
		this.Button_add1000w = CocoStudio.getComponent(this.view, "Button_add1000w");//Button
		this.Button_addMax = CocoStudio.getComponent(this.view, "Button_addMax");//Button
		this.Button_add5000w = CocoStudio.getComponent(this.view, "Button_add5000w");//Button
		this.Button_close = CocoStudio.getComponent(this.view, "Button_close");//Button
		this.Panel_60 = CocoStudio.getComponent(this.view, "Panel_60");//Panel
		this.Button_closeweb = CocoStudio.getComponent(this.view, "Button_closeweb");//Button
		this.Panel_dingwei = CocoStudio.getComponent(this.view, "Panel_dingwei");//Panel
	},

    initLayer:function(){
		var gui = GUI_OTHERUSERINFO;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/OtherUserInfo.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/OtherUserInfo.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/OtherUserInfo.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
//			//适配方案 960x640
//			this.view = CocoStudio.createView("res/OtherUserInfo_960_640.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}
	},
    
	callback_Panel_shang:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_111:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_touxiangkuang:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_biaoqian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_sex_bg:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Label_name:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_CHANGEINFOPOP);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_zhong:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_wenhao99:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
            OtherUserInfoLogic.setWebView(true);
            OtherUserInfoLogic.showWebView();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},
    setWebView:function(bShow){
        //抬起
        this.Panel_60.setVisible(bShow);
        this.Panel_60.setTouchEnabled(bShow);
        this.Button_closeweb.setTouchEnabled(bShow);
        if(ProfileOtherUserInfo.curButtonTag== ProfileOtherUserInfo.ButtonTag.Tag_Item){
            BackpackLists.setBackpackListsVisible(!bShow);
        }
        if(!bShow){
            this.m_webView.removeFromParent(true);
        }
    },

	callback_Button_item:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            OtherUserInfoLogic.setItemOrSave(ProfileOtherUserInfo.ButtonTag.Tag_Item);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_safe:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            OtherUserInfoLogic.setItemOrSave(ProfileOtherUserInfo.ButtonTag.Tag_Save);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_save:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_draw:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_comfirm:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_DOUBLEBUTTONCONFIRM);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_add1000w:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_addMax:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_add5000w:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_OTHERUSERINFO);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_closeweb:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            OtherUserInfoLogic.setWebView(false);
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
    	Frameworks.addSlot2Signal(JINHUA_MGR_BACKPACK_ITEMS_V2, ProfileOtherUserInfo.slot_JINHUA_MGR_BACKPACK_ITEMS_V2);
    	Frameworks.addSlot2Signal(JHID_STRONG_BOX_INFO, ProfileOtherUserInfo.slot_JHID_STRONG_BOX_INFO);
    },
    //移除信号
    removeSlot:function(){
        Frameworks.removeSlotFromSignal(JINHUA_MGR_BACKPACK_ITEMS_V2, ProfileOtherUserInfo.slot_JINHUA_MGR_BACKPACK_ITEMS_V2);
        Frameworks.removeSlotFromSignal(JHID_STRONG_BOX_INFO, ProfileOtherUserInfo.slot_JHID_STRONG_BOX_INFO);
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    },
    initData:function(){
        var userInfoTable= Profile_JinHuaOtherUserInfo.getUserInfoTable();
        if(Common.getTableSize(userInfoTable)== 0){
            MvcEngine.destroyModule(GUI_OTHERUSERINFO);
            return;
        }

        //设置头像
        this.Label_name.setString(userInfoTable["nickName"]);
        //Todo：可以删除称谓
        //[称谓-等级]
        Profile_JinHuaSetting.setUserTitleOnImageView(userInfoTable["Coin"], this.Image_chengwei);

        //加载网络头像
        Common.setTextureByNet(profile_user.getSelfPhotoUrl(), this.Image_toux);
        this.Image_toux.setScale(1.2);

        //金币数
        this.AtlasLabel_jinbi.setStringValue(profile_user.getSelfCoin());
        //等级
        this.AtlasLabel_level.setStringValue(":"+ userInfoTable["Level"]);
        //魅力值
        this.AtlasLabel_meilizhi.setString(profile_user.getSelfCharm());

        //从plist中加载性别图片
        switch(userInfoTable["Sex"]){
            case 0://保密
                this.Image_sex_bg.loadTexture("ic_weizhixingbie.png", 1);
                break;
            case 1://男
                this.Image_sex_bg.loadTexture("ic_sex_boy.png", 1);
                break;
            case 2://女
                this.Image_sex_bg.loadTexture("ic_sex_gril.png", 1);
                break;
        }
        //设置魅力值等级
        var userCharmLevel= userInfoTable["CharmLv"];
        if(userCharmLevel>= 5){
            userCharmLevel= 5
        }else if(userCharmLevel< 0){
            userCharmLevel= 0;
        }
        //显示魅力值等级
        for(var i=0; i< userCharmLevel; ++i){
            var image= CocoStudio.getComponent(this.view, "Image_liang"+ (i+ 1));
            image.setVisible(true);
        }
        //局数
        this.AtlasLabel_jushu.setStringValue(userInfoTable["Innings"]);
        //胜率
        this.AtlasLabel_shenglvshu.setStringValue(userInfoTable["winPer"]);
        //当前经验
        this.Label_exp.setString(userInfoTable["LevelExp"] + "/" + userInfoTable["LevelExpMax"]);
        //当前进度
        if(userInfoTable["LevelExp"]== 0||userInfoTable["LevelExpMax"]){
            this.Image_jindu.setScaleX(0);
        }else{
            this.Image_jindu.setScaleX(userInfoTable["LevelExp"]/userInfoTable["LevelExpMax"]);
        }
        //是否绑定手机
        if(Common.judgeValueIsEffect(userInfoTable["isBindTel"])&&(userInfoTable["isBindTel"]== 1)){
            this.Image_shouji_bind.loadTexture("ic_gerenxinxi_shoujibangding.png",1);
        }else{
            this.Image_shouji_bind.loadTexture("ic_gerenxinxi_shoujiweibangding.png",1);
        }
        //是否绑定手机
        if(Common.judgeValueIsEffect(userInfoTable["isBindWeiXin"])&&(userInfoTable["isBindWeiXin"]== 1)){
            this.Image_weixin_bind.loadTexture("ic_gerenxinxi_weixinbangding.png",1);
        }else{
            this.Image_weixin_bind.loadTexture("ic_gerenxinxi_weixinweibangding.png",1);
        }
        //是否真人认证
        if(Common.judgeValueIsEffect(userInfoTable["isCert"])&&(userInfoTable["isCert"]== 1)){
            if(userInfoTable["Sex"]== Profile_JinHuaGameData.MALE){//男
                this.Image_biaoqian.loadTexture("pic_rznan.png",1);
            }else if(userInfoTable["Sex"]== Profile_JinHuaGameData.FEMALE){//女
                this.Image_biaoqian.loadTexture("pic_renvdi.png",1);
            }else{
                this.Image_biaoqian.loadTexture("pic_rengzhengdi.png",1)
            }
        }else{
            this.Image_biaoqian.setVisible(false);
            this.Image_biaoqian.setTouchEnabled(false);
        }

        if(userInfoTable["luckyIcon"]== 1){
            this.Image_lucky_icon.setVisible(true);
        }
        //Vip等级
        var userVipLevel = userInfoTable["VipLevel"];
        if(userVipLevel >= 0){
            var texture = VipElementsUtils.getVipBgFromVipLevel(userVipLevel);
            if(texture != null){
                this.Image_vip_bg.loadTexture(texture,1)
            }else{
                this.Image_vip_bg.loadTexture("ic_vip_0.png",1)
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
                this.AtlasLabel_vip_level.setStringValue(":"+userVipLevel);
                this.AtlasLabel_lowsign.setStringValue(userVipLevel);
            }else if(userVipLevel >= 10){
                this.AtlasLabel_vip_level.setVisible(true);
                this.Image_vip_highsign.setVisible(true);
                this.Image_vip_lowsignbg.setVisible(false);
                this.AtlasLabel_lowsign.setVisible(false);
                this.AtlasLabel_vip_level.setStringValue(":"+userVipLevel);
                var signTexture = VipElementsUtils.getVipHighSignFromVipLevel(userVipLevel);
                if(signTexture == null){
                    this.Image_vip_highsign.setVisible(false);
                }else{
                    this.Image_vip_highsign.loadTexture(signTexture,1);
                }
            }
        }
        //默认显示道具
        ProfileOtherUserInfo.setCurButtonTag(ProfileOtherUserInfo.ButtonTag.Tag_Item);
        this.setItemOrSave(ProfileOtherUserInfo.getCurButtonTag());
    },
    //设置显示保险项还是小组件
    setItemOrSave:function(tag){
        ProfileOtherUserInfo.setCurButtonTag(tag);
        //小组件
        if(ProfileOtherUserInfo.ButtonTag.Tag_Item== ProfileOtherUserInfo.getCurButtonTag()){
            this.showSave(false);
            this.Button_safe.loadTextures("btn_weixuanzhong_r.png","btn_weixuanzhong_r.png","",1);
            this.Button_item.loadTextures("btn_xuanzhong_l.png","btn_xuanzhong_l.png","",1);
            sendJINHUA_MGR_BACKPACK_ITEMS_V2();
        }else{//保险箱
            this.showSave(true);
            this.Button_safe.loadTextures("btn_xuanzhong_r.png","btn_xuanzhong_r.png","",1);
            this.Button_item.loadTextures("btn_weixuanzhong_l.png","btn_weixuanzhong_l.png","",1);
            //删除背包组件
            BackpackLists.setBackpackListsVisible(false);

            sendJHID_STRONG_BOX_INFO();
        }
    },
    //显示保险箱
    showSave:function(bSave){
        this.Panel_baoxianxiang.setVisible(bSave);
        this.Image_save.setTouchEnabled(bSave);
        this.Image_draw.setTouchEnabled(bSave);
        this.Button_comfirm.setTouchEnabled(bSave);
        this.Button_add1000w.setTouchEnabled(bSave);
        this.Button_addMax.setTouchEnabled(bSave);
        this.Button_add5000w.setTouchEnabled(bSave);
    },
    //初始化背包消息
    initBackpack:function(){
        var BackpackListTable = ProfileOtherUserInfo.getBackpackTable();
        var backpackCnt= ProfileOtherUserInfo.getBackpackListCnt();
        BackpackLists.setCellSize(backpackCnt);
        //最少显示两行,空的地方也要显示方框背景图
        var showRowSize= Math.floor(backpackCnt/ 6);
        if(showRowSize< 2){
            showRowSize= 2;
        }else if(showRowSize%6> 0){
            showRowSize++;
        }
        //设置单元数量
        BackpackLists.setRowSize(showRowSize);

        for(var i=0; i< showRowSize* 6; ++i){
            if(!Common.judgeValueIsEffect(BackpackListTable[i])){
                BackpackListTable[i]= {};
            }
        }

        if(Common.judgeValueIsEffect(backpackCnt)&&(backpackCnt!= 0)&&(ProfileOtherUserInfo.getCurButtonTag()== ProfileOtherUserInfo.ButtonTag.Tag_Item)){
            this.initBackpackList();
        }
    },
    //初始化背包列表
    initBackpackList:function(){
        //初始化单元格
        BackpackLists.init(this.view);
    },
    //显示WebView
    showWebView:function(){
        var userCharm= Profile_JinHuaOtherUserInfo.getUserInfoTable()["Charm"];
        var webViewUrl= "http://f.99sai.com/jinhua/charm/jhCharm.html?meili="+ userCharm;
        this.m_webView= Common.showWebView(webViewUrl, this.Panel_dingwei.getPosition(), this.Panel_dingwei.getContentSize(), this.view);
    }
};


//Todo：竞技场排名(拿不到GameLoadModuleConfig.getArenaExists()的数据、同时不知道消息协议)
//Todo:联调-初始化保险箱JHID_STRONG_BOX_INFO