var HallLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	panel_bg:null,
	img_bgleft:null,
	panel_down:null,
	Button_lijiyouxi:null,
	btn_setting:null,
	Image_hongdian7:null,
	btn_message:null,
	Image_hongdian3:null,
	btn_rankinglist:null,
	Image_hongdian4:null,
    btn_shop:null,
	Image_hongdian5:null,
	btn_friend:null,
	Image_hongdian6:null,
	Button_task:null,
	Panel_chat:null,
	btn_show_chat:null,
	Image_hongdian2:null,
	hall_black_cover:null,
	Panel_16_0:null,
	Label_NickName:null,
	Panel_jinbi:null,
	Label_Coin:null,
	Button_Coin:null,
	Panel_yuanbao:null,
	Label_YuanBao:null,
	Button_YuanBao:null,
	btn_vip:null,
	AtlasLabel_vip_level:null,
	Image_vip_highsign:null,
	Image_vip_lowsignbg:null,
	AtlasLabel_lowsign:null,
	Image_Portrait:null,
	Image_touxiangkuang:null,
	Image_chengwei:null,
	Image_lucky_icon:null,
	Image_touxiang_default:null,
	Panel_top:null,
	Button_yaoqianshu:null,
	Button_arena:null,
	btn_yueka:null,
	Panel_leftday:null,
	AtlasLabel_leftday:null,
	Image_tian:null,
	btn_chongzhi:null,
	Image_hongdian1:null,
	btn_libao:null,
	btn_huodong:null,
	Button_Return:null,
	ImageView_Notice:null,
	panel_chat:null,
	panel_centernew:null,
	panel_hall_center:null,
	Button_match:null,
	Button_jingdian:null,
	Button_qianwang:null,
	Panel_hall_center_down:null,
	Image_minigame_bg:null,
	Image_vipInfo:null,
	Label_online:null,
	Panel_MiniGame:null,
	Panel_Commend:null,
	Image_light:null,
	Panel_miniChat:null,

    /**************自定义私有成员********************/
    friendRedMark:null,//好友按钮右上角的小红点
    emailRedMark:null,//邮件按钮右上角的小红点
	
    createView:function(){
        cc.spriteFrameCache.addSpriteFrames("res/co_desk.plist","res/co_desk.png");
        cc.spriteFrameCache.addSpriteFrames("res/userinfo_mine.plist","res/userinfo_mine.png");
        cc.spriteFrameCache.addSpriteFrames("res/table_elements.plist","res/table_elements.png");

    	this.initLayer();
        
        this.view.setTag(ModuleTable["Hall"]["Layer"]);
        
        this.initView();
        //初始化大厅数据
        this.initTable();
        //发送公共消息
        this.sendGameCommonMessage();
        //小游戏列表
        this.initMiniGameList();
        //活动列表
        this.initActivityLists();

        //新手引导
        if(0){

        }else{
            //每日工资
            sendJINHUA_MGR_DAILY_SALARY();
            //是否显示大厅好友按钮的小红点
            sendJINHUA_MGR_FRIEND_HAVE_REDP();
            //获取站内信列表  主要需要数据来检测是否需要显示小红点
            sendMAIL_SYSTEM_MESSGE_LIST(0,100);
        }
        //获取房间列表
        sendJINHUA_ROOMID_ROOM_LIST(0);
        //初始化比赛时钟

    },
    
	initView:function(){
		this.panel_bg = CocoStudio.getComponent(this.view, "panel_bg");//Panel
		this.img_bgleft = CocoStudio.getComponent(this.view, "img_bgleft");//ImageView
		this.panel_down = CocoStudio.getComponent(this.view, "panel_down");//Panel
		this.Button_lijiyouxi = CocoStudio.getComponent(this.view, "Button_lijiyouxi");//Button
		this.btn_setting = CocoStudio.getComponent(this.view, "btn_setting");//Button
		this.Image_hongdian7 = CocoStudio.getComponent(this.view, "Image_hongdian7");//ImageView
		this.btn_message = CocoStudio.getComponent(this.view, "btn_message");//Button
		this.Image_hongdian3 = CocoStudio.getComponent(this.view, "Image_hongdian3");//ImageView
		this.btn_rankinglist = CocoStudio.getComponent(this.view, "btn_rankinglist");//Button
		this.Image_hongdian4 = CocoStudio.getComponent(this.view, "Image_hongdian4");//ImageView
		this.btn_shop = CocoStudio.getComponent(this.view, "btn_shop");//Button
		this.Image_hongdian5 = CocoStudio.getComponent(this.view, "Image_hongdian5");//ImageView
		this.btn_friend = CocoStudio.getComponent(this.view, "btn_friend");//Button
		this.Image_hongdian6 = CocoStudio.getComponent(this.view, "Image_hongdian6");//ImageView
		this.Button_task = CocoStudio.getComponent(this.view, "Button_task");//Button
		this.Panel_chat = CocoStudio.getComponent(this.view, "Panel_chat");//Panel
		this.btn_show_chat = CocoStudio.getComponent(this.view, "btn_show_chat");//Button
		this.Image_hongdian2 = CocoStudio.getComponent(this.view, "Image_hongdian2");//ImageView
		this.hall_black_cover = CocoStudio.getComponent(this.view, "hall_black_cover");//ImageView
		this.Panel_16_0 = CocoStudio.getComponent(this.view, "Panel_16_0");//Panel
		this.Label_NickName = CocoStudio.getComponent(this.view, "Label_NickName");//Label
		this.Panel_jinbi = CocoStudio.getComponent(this.view, "Panel_jinbi");//Panel
		this.Label_Coin = CocoStudio.getComponent(this.view, "Label_Coin");//Label
		this.Button_Coin = CocoStudio.getComponent(this.view, "Button_Coin");//Button
		this.Panel_yuanbao = CocoStudio.getComponent(this.view, "Panel_yuanbao");//Panel
		this.Label_YuanBao = CocoStudio.getComponent(this.view, "Label_YuanBao");//Label
		this.Button_YuanBao = CocoStudio.getComponent(this.view, "Button_YuanBao");//Button
		this.btn_vip = CocoStudio.getComponent(this.view, "btn_vip");//Button
		this.AtlasLabel_vip_level = CocoStudio.getComponent(this.view, "AtlasLabel_vip_level");//LabelAtlas
		this.Image_vip_highsign = CocoStudio.getComponent(this.view, "Image_vip_highsign");//ImageView
		this.Image_vip_lowsignbg = CocoStudio.getComponent(this.view, "Image_vip_lowsignbg");//ImageView
		this.AtlasLabel_lowsign = CocoStudio.getComponent(this.view, "AtlasLabel_lowsign");//LabelAtlas
		this.Image_Portrait = CocoStudio.getComponent(this.view, "Image_Portrait");//ImageView
		this.Image_touxiangkuang = CocoStudio.getComponent(this.view, "Image_touxiangkuang");//ImageView
		this.Image_chengwei = CocoStudio.getComponent(this.view, "Image_chengwei");//ImageView
		this.Image_lucky_icon = CocoStudio.getComponent(this.view, "Image_lucky_icon");//ImageView
		this.Image_touxiang_default = CocoStudio.getComponent(this.view, "Image_touxiang_default");//ImageView
		this.Panel_top = CocoStudio.getComponent(this.view, "Panel_top");//Panel
		this.Button_yaoqianshu = CocoStudio.getComponent(this.view, "Button_yaoqianshu");//Button
		this.Button_arena = CocoStudio.getComponent(this.view, "Button_arena");//Button
		this.btn_yueka = CocoStudio.getComponent(this.view, "btn_yueka");//Button
		this.Panel_leftday = CocoStudio.getComponent(this.view, "Panel_leftday");//Panel
		this.AtlasLabel_leftday = CocoStudio.getComponent(this.view, "AtlasLabel_leftday");//LabelAtlas
		this.Image_tian = CocoStudio.getComponent(this.view, "Image_tian");//ImageView
		this.btn_chongzhi = CocoStudio.getComponent(this.view, "btn_chongzhi");//Button
		this.Image_hongdian1 = CocoStudio.getComponent(this.view, "Image_hongdian1");//ImageView
		this.btn_libao = CocoStudio.getComponent(this.view, "btn_libao");//Button
		this.btn_huodong = CocoStudio.getComponent(this.view, "btn_huodong");//Button
		this.Button_Return = CocoStudio.getComponent(this.view, "Button_Return");//Button
		this.ImageView_Notice = CocoStudio.getComponent(this.view, "ImageView_Notice");//ImageView
		this.panel_chat = CocoStudio.getComponent(this.view, "panel_chat");//Panel
		this.panel_centernew = CocoStudio.getComponent(this.view, "panel_centernew");//Panel
		this.panel_hall_center = CocoStudio.getComponent(this.view, "panel_hall_center");//Panel
		this.Button_match = CocoStudio.getComponent(this.view, "Button_match");//Button
		this.Button_jingdian = CocoStudio.getComponent(this.view, "Button_jingdian");//Button
		this.Button_qianwang = CocoStudio.getComponent(this.view, "Button_qianwang");//Button
		this.Panel_hall_center_down = CocoStudio.getComponent(this.view, "Panel_hall_center_down");//Panel
		this.Image_minigame_bg = CocoStudio.getComponent(this.view, "Image_minigame_bg");//ImageView
		this.Image_vipInfo = CocoStudio.getComponent(this.view, "Image_vipInfo");//ImageView
		this.Label_online = CocoStudio.getComponent(this.view, "Label_online");//Label
		this.Panel_MiniGame = CocoStudio.getComponent(this.view, "Panel_MiniGame");//Panel
		this.Panel_Commend = CocoStudio.getComponent(this.view, "Panel_Commend");//Panel
		this.Image_light = CocoStudio.getComponent(this.view, "Image_light");//ImageView
		this.Panel_miniChat = CocoStudio.getComponent(this.view, "Panel_miniChat");//Panel
        /*********初始操作*************/
        this.Panel_leftday.setVisible(false);
//        this.Button_match.setVisible(false);
//        this.Button_yaoqianshu.setVisible(false);
        //隐藏掉《摇钱树》和《比赛场》按钮，根据后台传送的数据 判断是否显示

        //APP的非评审阶段
        this.Button_arena.setVisible(true);
        this.Button_arena.setTouchEnabled(true);
        this.btn_yueka.setVisible(true);
        this.btn_yueka.setTouchEnabled(true);
        this.Button_task.setVisible(true);
        this.Button_task.setTouchEnabled(true);
        this.btn_message.setVisible(true);
        this.btn_message.setTouchEnabled(true);
        this.btn_rankinglist.setVisible(true);
        this.btn_rankinglist.setEnabled(true);
	},

    initLayer:function(){
		var gui = GUI_HALL;
        this.view = CocoStudio.createView("res/Hall.json");
		GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/Hall.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/Hall.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
//			//适配方案 960x640
//			this.view = CocoStudio.createView("res/Hall_960_640.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}
	},
    
	callback_Button_lijiyouxi:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_QUICK_START();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_setting:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_SETTING);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_message:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_MESSAGELIST);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_rankinglist:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_shop:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_friend:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_FRIENDLIST);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_task:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_RENWU);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_show_chat:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_Coin:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_YuanBao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_vip:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_VIPINFO);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_Portrait:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJINHUA_MGR_USER_INFO(profile_user.getSelfUserID());
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_yaoqianshu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            console.log("摇钱树！");
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_arena:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_yueka:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_MONTHCARD);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_chongzhi:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_libao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_huodong:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_Return:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_match:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_jingdian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            Profile_JinHuaRoomData.setCurRoomType(Profile_JinHuaRoomData.TYPE_JINGDIAN);
            MvcEngine.createModule(GUI_ROOMLIST);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_qianwang:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            Profile_JinHuaRoomData.setCurRoomType(Profile_JinHuaRoomData.TYPE_QIANWANG);
            MvcEngine.createModule(GUI_ROOMLIST);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_vipInfo:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_VIPINFO);
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
    	Frameworks.addSlot2Signal(BASEID_GET_BASEINFO, ProfileHall.slot_BASEID_GET_BASEINFO);//大厅初始化-获取用户数据
    	Frameworks.addSlot2Signal(JINHUA_MGR_USER_INFO, ProfileHall.slot_JINHUA_MGR_USER_INFO);//添加头像-获取用户数据
    	Frameworks.addSlot2Signal(DBID_USER_INFO, ProfileHall.slot_DBID_USER_INFO);//更新用户数据
        Frameworks.addSlot2Signal(JINHUA_MGR_SETTING, ProfileHall.slot_JINHUA_MGR_SETTING);//在线人数
        Frameworks.addSlot2Signal(JINHUA_MGR_NOTICE, ProfileHall.slot_JINHUA_MGR_NOTICE);//游戏公告
        Frameworks.addSlot2Signal(JINHUA_MGR_DAILY_SALARY, ProfileHall.slot_JINHUA_MGR_DAILY_SALARY);//每日工资面板
        Frameworks.addSlot2Signal(MANAGERID_GET_INIT_PIC, ProfileHall.slot_MANAGERID_GET_INIT_PIC);//初始化图片列表
        Frameworks.addSlot2Signal(JINHUA_MGR_JH_ACTIVITY, ProfileHall.slot_JINHUA_MGR_JH_ACTIVITY);//金花玩家登录请求领节日礼物
        Frameworks.addSlot2Signal(MANAGERID_GET_MINIGAME_PROMOTION, ProfileHall.slot_MANAGERID_GET_MINIGAME_PROMOTION);//金花玩家登录请求领节日礼物
        Frameworks.addSlot2Signal(IMID_ENTER_CHAT_ROOM, ProfileHall.slot_IMID_ENTER_CHAT_ROOM);//进入聊天室
        Frameworks.addSlot2Signal(IMID_CHAT_ROOM_SPEAK, ProfileHall.slot_IMID_CHAT_ROOM_SPEAK);//聊天室发言
        Frameworks.addSlot2Signal(JINHUA_MGR_INDEX_ACTIVITY, ProfileHall.slot_JINHUA_MGR_INDEX_ACTIVITY);//扎金花主页活动
        Frameworks.addSlot2Signal(JINHUA_MGR_FRIEND_HAVE_REDP, ProfileHall.slot_JINHUA_MGR_FRIEND_HAVE_REDP);//扎金花好友是否有红点
        Frameworks.addSlot2Signal(MAIL_SYSTEM_MESSGE_LIST, ProfileHall.slot_MAIL_SYSTEM_MESSGE_LIST);//扎金花好友是否有红点
        Frameworks.addSlot2Signal(MANAGERID_HINT_BIND_WECHAT, ProfileHall.slot_MANAGERID_HINT_BIND_WECHAT);//获取微信绑定
        Frameworks.addSlot2Signal(JINHUA_MGR_RECHARGE_REBATE_INFO, ProfileHall.slot_JINHUA_MGR_RECHARGE_REBATE_INFO);//首充翻倍
    },
    //移除信号
    removeSlot:function(){
        //Todo:推荐系统(JINHUA_MGR_SHARING_INFO)
        Frameworks.removeSlotFromSignal(BASEID_GET_BASEINFO, ProfileHall.slot_BASEID_GET_BASEINFO);
        Frameworks.removeSlotFromSignal(JINHUA_MGR_USER_INFO, ProfileHall.slot_JINHUA_MGR_USER_INFO);
        Frameworks.removeSlotFromSignal(DBID_USER_INFO, ProfileHall.slot_DBID_USER_INFO);
        Frameworks.removeSlotFromSignal(JINHUA_MGR_SETTING, ProfileHall.slot_JINHUA_MGR_SETTING);
        Frameworks.removeSlotFromSignal(JINHUA_MGR_NOTICE, ProfileHall.slot_JINHUA_MGR_NOTICE);
        Frameworks.removeSlotFromSignal(JINHUA_MGR_DAILY_SALARY, ProfileHall.slot_JINHUA_MGR_DAILY_SALARY);
        Frameworks.removeSlotFromSignal(MANAGERID_GET_INIT_PIC, ProfileHall.slot_MANAGERID_GET_INIT_PIC);//初始化图片列表
        Frameworks.removeSlotFromSignal(JINHUA_MGR_JH_ACTIVITY, ProfileHall.slot_JINHUA_MGR_JH_ACTIVITY);//金花玩家登录请求领节日礼物
        Frameworks.removeSlotFromSignal(MANAGERID_GET_MINIGAME_PROMOTION, ProfileHall.slot_MANAGERID_GET_MINIGAME_PROMOTION);//金花玩家登录请求领节日礼物
        Frameworks.removeSlotFromSignal(IMID_ENTER_CHAT_ROOM, ProfileHall.slot_IMID_ENTER_CHAT_ROOM);//进入聊天室
        Frameworks.removeSlotFromSignal(IMID_CHAT_ROOM_SPEAK, ProfileHall.slot_IMID_CHAT_ROOM_SPEAK);//聊天室发言
        Frameworks.removeSlotFromSignal(JINHUA_MGR_INDEX_ACTIVITY, ProfileHall.slot_JINHUA_MGR_INDEX_ACTIVITY);//扎金花主页活动
        Frameworks.removeSlotFromSignal(JINHUA_MGR_FRIEND_HAVE_REDP, ProfileHall.slot_JINHUA_MGR_FRIEND_HAVE_REDP);//扎金花好友是否有红点
        Frameworks.removeSlotFromSignal(MAIL_SYSTEM_MESSGE_LIST, ProfileHall.slot_MAIL_SYSTEM_MESSGE_LIST);//扎金花好友是否有红点
        Frameworks.removeSlotFromSignal(MANAGERID_HINT_BIND_WECHAT, ProfileHall.slot_MANAGERID_HINT_BIND_WECHAT);//扎金花好友是否有红点
        Frameworks.removeSlotFromSignal(JINHUA_MGR_RECHARGE_REBATE_INFO, ProfileHall.slot_JINHUA_MGR_RECHARGE_REBATE_INFO);//首充翻倍
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    },
    //发送全局消息
    sendGameCommonMessage:function(){
        if(profile_user.getSelfUserID()!= 0){
            //获取当前玩家的资料
            sendDBID_USER_INFO(profile_user.getSelfUserID());
            //当前在线人数
            sendJINHUA_MGR_SETTING(Profile_JinHuaSetting.getTimeStamp());
            //金花请求破产送金信息(JINHUA_MGR_REVIVE_INFO)
            sendJINHUA_MGR_REVIVE_INFO();
            //公告
            sendJINHUA_MGR_NOTICE(0);
            //用户可购买礼包列表(精简)
            sendGIFTBAGID_GIFTBAG_LIST_SIMPLE();
            //Todo:获取小游戏推广列表,版本号和渠道号存在Json中，不知道其值具体设定
            sendMANAGERID_GET_MINIGAME_PROMOTION();
            //请求进入聊天室
            //Todo:没有找到返回消息
            this.sendEnterChatRoom();
            //Todo:摇钱树,找不到消息ID
            //sendOPERID_MONEY_SHAKE_TIME_CD();
        }
        //在大厅界面是否发送公共消息请求
        if(!GameConfig.getMNHallInitSendMsg()){
            GameConfig.setMNHallInitSendMsg(true);
            //Todo:需要从本地数据中，读取初始化图片
            //sendMANAGERID_GET_INIT_PIC(profileCommon.InitImageList.getInitImageListTimestamp());
            sendJINHUA_MGR_JH_ACTIVITY();//活动奖励
            //sendDBID_GET_SMS_NUMBER();//短信通知
        }

        //获取微信绑定信息
        sendMANAGERID_HINT_BIND_WECHAT();
    },
    //初始化界面(昵称、头像、Vip、称号、元宝数、金币数、按钮)
    initTable:function(){
        GameConfig.setCurBaseLayer(GUI_HALL);

        sendJINHUA_MGR_RECHARGE_REBATE_INFO();

        //按钮的各种动画
        this.showAnimation();
        //分割线的动画
        this.showLightLineAnimate();

        //添加小红点
        this.addRedMark();
    },
    initHallBaseData:function(){
        this.Label_NickName.setString(profile_user.getSelfNickName());//昵称
        //判断金币数，金币数
        var myCoin= GamePub.convertCoin(profile_user.getSelfCoin());
        this.Label_Coin.setString(myCoin);

        //当前玩家的称谓等级
        Profile_JinHuaSetting.setUserTitleOnImageView(profile_user.getSelfCoin(), this.Image_chengwei);

        //Vip等级
        this.setUserTitle();

        //元宝
        var myYuanBao = GamePub.convertCoin(profile_user.getSelfYuanBao());
        this.Label_YuanBao.setString(myYuanBao);//元宝数
    },
    //可以舍弃BASEID_GET_BASEINFO，设置基本数据，只需要一次即可，因为DBID_USER_INFO消息，已经全部获取了
    //更新头像，用户信息
    updateHallData:function(){
        this.initHallBaseData();

        if(profile_user.getSelfPhotoUrl()!= null){
            //加载网络头像
            //Todo:圆形头像(裁切节点)
            Common.setTextureByNet(profile_user.getSelfPhotoUrl(), this.Image_touxiang_default);
        }
    },
    //添加小红点
    addRedMark:function(){
        this.friendRedMark= ccui.ImageView.create();
        this.friendRedMark.loadTexture(Common.getJinHuaResourcePath("gift_tan_hao.png"));
        var parentSize= this.btn_friend.getContentSize();
        this.friendRedMark.setPosition(cc.p(20+ parentSize.width* 0.5, 23+ parentSize.height*0.5));
        this.btn_friend.addChild(this.friendRedMark);

        //系统邮件小红点
        this.emailRedMark= ccui.ImageView.create();
        this.emailRedMark.loadTexture(Common.getJinHuaResourcePath("gift_tan_hao.png"));
        parentSize= this.btn_message.getContentSize();
        this.emailRedMark.setPosition(cc.p(20+ parentSize.width* 0.5, 23+ parentSize.height*0.5));
        this.btn_message.addChild(this.emailRedMark);

        //默认将其隐藏，在slot_JINHUA_MGR_FRIEND_HAVE_REDP和slot_MAIL_SYSTEM_MESSGE_LIST消息中，根据后台数据显示或者隐藏
        this.friendRedMark.setVisible(false);
        this.emailRedMark.setVisible(false);
    },
    //执行动画
    showAnimation:function(){
        var self= this;
        //红色按钮标识区域，不显示
        self.Button_yaoqianshu.setOpacity(0);
        self.Button_lijiyouxi.setOpacity(0);

        //礼包按钮的晃动操作
        GamePub.showShakeAnimate(self.btn_libao);

        //摇钱树动画
        Common.createArmature(
            "res/Animation/Yaoqianshu_Action_Enter_Animation.ExportJson",//动画Json路径
            "Yaoqianshu_Action_Enter_Animation",//要执行的动画名
            function(armature){
                armature.getAnimation().playWithIndex(0, 0.1, true);//循环播放
                /*************按钮的锚点为(0,0),摇钱树(0.5, 0.5)在按钮的居中位置*******************/
                var size= self.Button_yaoqianshu.getContentSize();
                armature.setPosition(cc.p(size.width* 0.5, size.height* 0.5- 5));

                self.Button_yaoqianshu.addChild(armature);
            });

        //快速开始动画
        Common.createArmature(
            "res/Animation/Animation_Hall_Quick.ExportJson",//动画Json路径
            "Animation_Hall_Quick",//要执行的动画名
            function(armature){
                armature.getAnimation().playWithIndex(0, 0.1, true);//循环播放
                /*************按钮的锚点为(0,0),摇钱树(0.5, 0.5)在按钮的居中位置*******************/
                var size= self.Button_lijiyouxi.getContentSize();
                armature.setPosition(cc.p(size.width* 0.5, size.height* 0.5));
                self.Button_lijiyouxi.addChild(armature);
            });

        //经典场动画
        Common.createArmature(
            "res/Animation/Animation_Newhall_ClassicRoom.ExportJson",//动画Json路径
            "Animation_Newhall_ClassicRoom",//要执行的动画名
            function(armature){
                armature.getAnimation().playWithIndex(0, 0.1, true);//循环播放
                armature.setAnchorPoint(cc.p(0,0));
                armature.setPosition(0, 10);
                self.Button_jingdian.addChild(armature);
            });

        //千王场动画
        Common.createArmature(
            "res/Animation/Animation_Newhall_CheatKingRoom.ExportJson",//动画Json路径
            "Animation_Newhall_CheatKingRoom",//要执行的动画名
            function(armature){
                armature.getAnimation().playWithIndex(0, 0.1, true);//循环播放
                armature.setAnchorPoint(cc.p(0,0));
                armature.setPosition(0, 10);
                self.Button_qianwang.addChild(armature);
            });

        //比赛场动画
        Common.createArmature(
            "res/Animation/Animation_Newhall_TounamentRoom.ExportJson",//动画Json路径
            "Animation_Newhall_TounamentRoom",//要执行的动画名
            function(armature){
                armature.getAnimation().playWithIndex(0, 0.1, true);//循环播放
                armature.setAnchorPoint(cc.p(0,0));
                armature.setPosition(-16, 10);
                self.Button_match.addChild(armature);
            });
    },
    //设置活动列表和小游戏列表可否使用
    setListenerEnabled:function(bEnabled){
        MiniGameLists.setTouchEnabled(bEnabled);
        ActivityLists.setTouchEnabled(bEnabled);
    },
    //分割线动画
    showLightLineAnimate:function(){
        var self= this;
        self.Image_light.setPosition(cc.p(-76, 259));
        var moveTo= cc.moveTo(1.5, cc.p(1136+ 76, 259));
        var delayTime= cc.delayTime(Math.random()* 10+ 10);
        var seq= cc.sequence(moveTo, delayTime, cc.callFunc(function(pSender){
            self.showLightLineAnimate();
        }));
        self.Image_light.runAction(seq);
    },
    //小游戏列表
    initMiniGameList:function(){
        MiniGameLists.init(this.view, cc.pAdd(cc.p(0, cc.winSize.height* 0.025), this.Panel_MiniGame.getPosition()));
    },
    //活动列表
    initActivityLists:function(){
       ActivityLists.init(this.view, this.Panel_Commend.getPosition());
    },
    //设置当前在线人数
    setOnlinePlayerNumber:function(){
        this.Label_online.setColor(cc.color(255,0,0));
        this.Label_online.setText("当前在线:"+Profile_JinHuaSetting.getOnlinePlayerNumber()+"人");
    },
    //更新Vip等级
    setUserTitle:function(){
        //Todo:因为Vip等级，如果是在UI工程里做的话，可以写成通用的
        //Vip等级
        var userVipLevel = profile_user.getSelfVipLevel();
        if(userVipLevel >= 0) {
            var texture = VipElementsUtils.getVipBgFromVipLevel(userVipLevel);
            if (texture != null) {
                this.btn_vip.loadTextures(Common.getJinHuaResourcePath(texture), Common.getJinHuaResourcePath(texture),"");
            }else{
                this.btn_vip.loadTexture(Common.getJinHuaResourcePath("ic_vip_0.png"),Common.getJinHuaResourcePath("ic_vip_0.png"),"");
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
    },
    //切换首充翻倍动画
    setShouChongFanBei:function(){
        var self= this;

        if(!Profile_JinHuaSetting.getIsRecharged()){
            //首充翻倍
            self.btn_chongzhi.setOpacity(0);
            //首充翻倍
            Common.createArmature(
                "res/Animation/ShouchonganniuAnimation.ExportJson",//动画Json路径
                "ShouchonganniuAnimation",//要执行的动画名
                function(armature){
                    armature.getAnimation().playWithIndex(0, 0.1, true);//循环播放
                    /*************按钮的锚点为(0,0),摇钱树(0.5, 0.5)在按钮的居中位置*******************/
                    var size= self.btn_chongzhi.getContentSize();
                    armature.setAnchorPoint(cc.p(0,0));
                    armature.setPosition(cc.p(0,0));
                    //armature.setPosition(cc.p(size.width* 0.5, size.height* 0.5));

                    self.btn_chongzhi.addChild(armature);
                });
        }
    },
    //系统公告文本
    createSystemNoticeLabel:function(systemNotice,color){
        var chatPanelSize= this.panel_chat.getContentSize();
        var chatPanelPoint= this.panel_chat.getPosition();
        var ImageNoticeSize= this.ImageView_Notice.getContentSize();

        var labelNotice= cc.LabelTTF.create(systemNotice.toString(), "微软雅黑", 20);
        labelNotice.setAnchorPoint(cc.p(0, 0));
        labelNotice.setPosition(cc.p(chatPanelSize.width + chatPanelPoint.x + ImageNoticeSize.width / 2,0));
        labelNotice.setColor(color);
        this.panel_chat.addChild(labelNotice);

        var moveBy =  cc.MoveBy.create(GameConfig.NOTICE_MOVE_TIME*(labelNotice.width + chatPanelSize.width), cc.p(-chatPanelPoint.x -labelNotice.width -chatPanelSize.width,0));
        var seq = cc.Sequence.create(moveBy);
        labelNotice.runAction(cc.RepeatForever.create(seq));
    },
    //发送进入聊天室
    sendEnterChatRoom:function(){
        var dataTable = {};
        dataTable["NickName"] = profile_user.getSelfNickName();
        dataTable["IsFirstEnter"] = 1;
        dataTable["ChatRoomName"] = "";
        sendIMID_ENTER_CHAT_ROOM(dataTable);
    },
    //唤醒大厅，主要是这期间如果有了新的好友和消息
    refreshHall:function(){
        //是否显示大厅好友按钮的小红点
        sendJINHUA_MGR_FRIEND_HAVE_REDP();
        //获取站内信列表  主要需要数据来检测是否需要显示小红点
        sendMAIL_SYSTEM_MESSGE_LIST(0,100);
    }
};

//Todo:公告
//Todo:没有做礼包数据的原因是:没有应用版本号和版本名
//Todo:没有做活动的原因是:GameLoadModuleConfig.getTaskGameConfigList()活动文件列表不知道
//Todo:在Logic中，添加各种setBaseLayer
//Todo:小红点
//Todo:Toast
//Todo:新手引导
//Todo:动画
//Todo:领取金币toast(图片)

//Todo:MINI_COMMON_WINNING_RECORD 小游戏公告 不知道读写数据内容
//Todo:MANAGERID_GET_JINHUA_USER_GUIDE_PRIZE
//Todo:MANAGERID_GET_JINHUA_USER_GUIDE_INFO
//Todo:MANAGERID_GET_SERVER_CONFIG_V2
//Todo:JINHUA_MGR_SHARING_INPUT_CDKEY
//Todo:OPERID_SEND_ALL_BUGLE
//Todo:JINHUA_MGR_BUY_VIP
//Todo:MANAGERID_GET_MINIGAME_PROMOTION
//Todo:MANAGERID_MINIGAME_LIST_TYPE_V3
//Todo:OPERID_MONEY_SHAKE_TIME_CD
//Todo:MANAGERID_HINT_BIND_WECHAT
//Todo:预加载Toast所需要的资源