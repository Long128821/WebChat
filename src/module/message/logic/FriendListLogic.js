var FriendListLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	Panel_MyFriend:null,
	Image_Server:null,
	Button_haoyoushangxian:null,
	Image_limit:null,
	Button_yiwen1:null,
	Label_haoyoushangxian:null,
	Button_wodehaoyou:null,
	Button_zhuizongliebiao:null,
	Button_linshihaoyou:null,
	Button_close:null,
	Button_shuaxin:null,
	Button_leftArrow:null,
	Button_rightArrow:null,
	Label_fanye:null,
	Panel_haoyoushangxian:null,
	Panel_155:null,
	Label_haoyoushangxian:null,
	Button_closeShangxian:null,
	Panel_TableView:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["FriendList"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.Panel_MyFriend = CocoStudio.getComponent(this.view, "Panel_MyFriend");//Panel
		this.Image_Server = CocoStudio.getComponent(this.view, "Image_Server");//Panel
		this.Button_haoyoushangxian = CocoStudio.getComponent(this.view, "Button_haoyoushangxian");//Button
		this.Image_limit = CocoStudio.getComponent(this.view, "Image_limit");//ImageView
		this.Button_yiwen1 = CocoStudio.getComponent(this.view, "Button_yiwen1");//Button
		this.Label_haoyoushangxian = CocoStudio.getComponent(this.view, "Label_haoyoushangxian");//Label
		this.Button_wodehaoyou = CocoStudio.getComponent(this.view, "Button_wodehaoyou");//Button
		this.Button_zhuizongliebiao = CocoStudio.getComponent(this.view, "Button_zhuizongliebiao");//Button
		this.Button_linshihaoyou = CocoStudio.getComponent(this.view, "Button_linshihaoyou");//Button
		this.Button_close = CocoStudio.getComponent(this.view, "Button_close");//Button
		this.Button_shuaxin = CocoStudio.getComponent(this.view, "Button_shuaxin");//Button
		this.Button_leftArrow = CocoStudio.getComponent(this.view, "Button_leftArrow");//Button
		this.Button_rightArrow = CocoStudio.getComponent(this.view, "Button_rightArrow");//Button
		this.Label_fanye = CocoStudio.getComponent(this.view, "Label_fanye");//Label
		this.Panel_haoyoushangxian = CocoStudio.getComponent(this.view, "Panel_haoyoushangxian");//Panel
		this.Panel_155 = CocoStudio.getComponent(this.view, "Panel_155");//Panel
		this.Label_haoyoushangxian = CocoStudio.getComponent(this.view, "Label_haoyoushangxian");//Label
		this.Button_closeShangxian = CocoStudio.getComponent(this.view, "Button_closeShangxian");//Button
		this.Panel_TableView = CocoStudio.getComponent(this.view, "Panel_TableView");//Panel
	},

    initLayer:function(){
		var gui = GUI_FRIENDLIST;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/FriendList.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/FriendList.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/FriendList.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
//			//适配方案 960x640
//			this.view = CocoStudio.createView("res/FriendList_960_640.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}
	},
    
	callback_Button_haoyoushangxian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            FriendListLogic.showShangxianView(true);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_yiwen1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},
    //我的好友
	callback_Button_wodehaoyou:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            ProfileFriendList.m_curPageID= 0;
            FriendListLogic.showPanel();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},
    //追踪列表
	callback_Button_zhuizongliebiao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            ProfileFriendList.m_curPageID= 1;
            FriendListLogic.showPanel();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_linshihaoyou:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            ProfileFriendList.m_curPageID= 2;
            FriendListLogic.showPanel();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_FRIENDLIST);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_shuaxin:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_leftArrow:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_rightArrow:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_haoyoushangxian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_155:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_closeShangxian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            FriendListLogic.showShangxianView(false);
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
    	Frameworks.addSlot2Signal(JINHUA_MGR_FRIEND_LIST, ProfileFriendList.slot_JINHUA_MGR_FRIEND_LIST);//好友列表
    	Frameworks.addSlot2Signal(JINHUA_MGR_STRANGER_LIST, ProfileFriendList.slot_JINHUA_MGR_STRANGER_LIST);//陌生人列表
    	Frameworks.addSlot2Signal(JINHUA_MGR_TRACE_LIST, ProfileFriendList.slot_JINHUA_MGR_TRACE_LIST);//追踪列表
    	Frameworks.addSlot2Signal(JINHUA_MGR_SIGN_FRIEND_REWARD, ProfileFriendList.slot_JINHUA_MGR_SIGN_FRIEND_REWARD);//领取金币
    },
    //移除信号
    removeSlot:function(){
    	Frameworks.removeSlotFromSignal(JINHUA_MGR_FRIEND_LIST, ProfileFriendList.slot_JINHUA_MGR_FRIEND_LIST);
    	Frameworks.removeSlotFromSignal(JINHUA_MGR_STRANGER_LIST, ProfileFriendList.slot_JINHUA_MGR_STRANGER_LIST);
    	Frameworks.removeSlotFromSignal(JINHUA_MGR_TRACE_LIST, ProfileFriendList.slot_JINHUA_MGR_TRACE_LIST);
    	Frameworks.removeSlotFromSignal(JINHUA_MGR_SIGN_FRIEND_REWARD, ProfileFriendList.slot_JINHUA_MGR_SIGN_FRIEND_REWARD);
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    },
    //初始化界面
    initData:function(){
        sendJINHUA_MGR_FRIEND_LIST();//好友列表
        sendJINHUA_MGR_STRANGER_LIST();//陌生人列表
        sendJINHUA_MGR_TRACE_LIST();//追踪列表
    },
    //创建视图
    createTableView:function(){
        //避免打开之后，重新添加一些相同的元素
        if(this.m_tableView!= null){
            this.m_tableView.removeFromParent(true);
        }
        var friendListTable= ProfileFriendList.m_friendListTable;
        this.Label_haoyoushangxian.setString(friendListTable["Maxfriendcnt"]);
        this.Button_shuaxin.setVisible(false);
        this.showPanel();

        var self= this;
        var tableSize= this.Panel_TableView.getContentSize();
        //左下角位置
        var leftBottomPos= this.Panel_TableView.getPosition();
        //预加载资源
        var arrPath= [
            Common.getJinHuaResourcePath("btn_xuanzhong_l.png"),
            Common.getJinHuaResourcePath("btn_weixuanzhong_l.png"),
            Common.getJinHuaResourcePath("btn_zhuizongliebiao_mweixuanzhong.png"),
            Common.getJinHuaResourcePath("btn_zhuizongliebiao_mxuanzhong.png"),
            Common.getJinHuaResourcePath("btn_xuanzhong_r.png"),
            Common.getJinHuaResourcePath("ui_xinxiaoxidi.png"),
            Common.getJinHuaResourcePath("ui_yiduxiaoxidi.png"),
            Common.getJinHuaResourcePath("btn_weixuanzhong_r.png"),
            Common.getJinHuaResourcePath("ui_vip_lvshuzi_gaoji.png"),
            Common.getJinHuaResourcePath("ui_vip_jiaobiaoshuzi.png"),
            Common.getJinHuaResourcePath("ic_vip_0.png"),
            Common.getJinHuaResourcePath("ic_vip_biaoqian_lv01.png"),
            Common.getJinHuaResourcePath("ic_vip_biaoqian_lv02.png"),
            Common.getJinHuaResourcePath("ic_vip_biaoqian_lv03.png"),
            Common.getJinHuaResourcePath("ic_vip_biaoqian_lv04.png"),
            Common.getJinHuaResourcePath("ic_vip_biaoqian_lv05.png"),
            Common.getJinHuaResourcePath("ic_vip_biaoqian_lv06.png"),
            Common.getJinHuaResourcePath("ic_vip_biaoqian_lv07.png"),
            Common.getJinHuaResourcePath("ic_vip_biaoqian_lv08.png"),
            Common.getJinHuaResourcePath("ic_vip_biaoqian_lv09.png"),
            Common.getJinHuaResourcePath("ic_vip_biaoqian_lv10.png"),
            Common.getJinHuaResourcePath("ui_haoyouzengsongjiajinbi.png"),
            Common.getJinHuaResourcePath("ic_tongqian.png"),
            Common.getJinHuaResourcePath("read.png"),
            Common.getJinHuaResourcePath("btn_lingqu_1.png"),
            Common.getJinHuaResourcePath("ui_lingqujinbi.png"),
            Common.getJinHuaResourcePath("btn_lingqu_1.png"),
            Common.getJinHuaResourcePath("ui_xinyoujiantubiao.png")
        ];

        //代码先执行，但是精灵尺寸为空,不能正确显示
        Load.LoadJsonOrPic(arrPath,function(){
            //加载成功的回调函数
            var tableView = new cc.TableView(self, tableSize);
            tableView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);//竖直滑动
            tableView.setTouchEnabled(true);
            tableView.setPosition(leftBottomPos);

            //重新加载数据
            tableView.reloadData();

            self.m_tableView= tableView;
            //在view中，添加节点，zOrder为2
            self.view.addChild(self.m_tableView, self.Panel_TableView.getLocalZOrder());
        });

    },
    //显示不同界面
    showPanel:function(){
        var pageID= ProfileFriendList.m_curPageID;
        if(pageID== 0){//好友列表
            this.Button_wodehaoyou.loadTextures(Common.getJinHuaResourcePath("btn_xuanzhong_l.png"),Common.getJinHuaResourcePath("btn_xuanzhong_l.png"),"");
            this.Button_zhuizongliebiao.loadTextures(Common.getJinHuaResourcePath("btn_zhuizongliebiao_mweixuanzhong.png"),Common.getJinHuaResourcePath("btn_zhuizongliebiao_mweixuanzhong.png"),"");
            this.Button_linshihaoyou.loadTextures(Common.getJinHuaResourcePath("btn_weixuanzhong_r.png"),Common.getJinHuaResourcePath("btn_weixuanzhong_r.png"),"");
        }else if(pageID== 1){//追踪列表
            this.Button_wodehaoyou.loadTextures(Common.getJinHuaResourcePath("btn_weixuanzhong_l.png"),Common.getJinHuaResourcePath("btn_weixuanzhong_l.png"),"")
            this.Button_zhuizongliebiao.loadTextures(Common.getJinHuaResourcePath("btn_zhuizongliebiao_mxuanzhong.png"),Common.getJinHuaResourcePath("btn_zhuizongliebiao_mxuanzhong.png"),"")
            this.Button_linshihaoyou.loadTextures(Common.getJinHuaResourcePath("btn_weixuanzhong_r.png"),Common.getJinHuaResourcePath("btn_weixuanzhong_r.png"),"")
        }else{//临时好友列表
            this.Button_wodehaoyou.loadTextures(Common.getJinHuaResourcePath("btn_weixuanzhong_l.png"),Common.getJinHuaResourcePath("btn_weixuanzhong_l.png"),"")
            this.Button_zhuizongliebiao.loadTextures(Common.getJinHuaResourcePath("btn_zhuizongliebiao_mweixuanzhong.png"),Common.getJinHuaResourcePath("btn_zhuizongliebiao_mweixuanzhong.png"),"")
            this.Button_linshihaoyou.loadTextures(Common.getJinHuaResourcePath("btn_xuanzhong_r.png"),Common.getJinHuaResourcePath("btn_xuanzhong_r.png"),"")
        }
    },
    //重写TableView的tableCellSizeForIndex函数
    tableCellSizeForIndex:function (table, idx) {
        return cc.size(990, 115);
    },
    //重写TableView的tableCellAtIndex函数
    tableCellAtIndex:function (table, idx) {
        var cell = table.dequeueCell();
        cell = new cc.TableViewCell();
        return this.createItem(cell, idx);
    },
    //创建某一个右邮件项
    createItem:function(cell, idx){
        var tableSize= this.Panel_TableView.getContentSize();
        var ListTable= ProfileFriendList.m_friendListTable;
        var TaskListLoop= ListTable["FriendList"];

        //未读的消息数量
        var unreadCnt = TaskListLoop[idx].unreadCnt;

        var itemParentNode= cc.Node.create();
        cell.addChild(itemParentNode);

        //背景
        var bgUrl= unreadCnt> 0?"ui_xinxiaoxidi.png":"ui_yiduxiaoxidi.png";
        var sprite= GamePub.createPointNineSpriteForPlist(Common.getJinHuaResourcePath(bgUrl), 25, 25, tableSize.width- 30,115- 6);
        //操作
        var menu = cc.Menu.create();
        menu.setPosition(cc.p(0,0));
        itemParentNode.addChild(menu);

        var button= cc.MenuItemSprite.create(
            sprite,
            null, this.onShow, this);
        button.setAnchorPoint(0,0);
        button.setTag(idx);
        menu.addChild(button);

        //点九图的尺寸
        var spriteSize= sprite.getContentSize();
        //等级
        var labelVip = cc.LabelTTF.create("Lv."+ TaskListLoop[idx]["level"], "Arial", 20);
        labelVip.setAnchorPoint(0, 0.5);
        labelVip.setPosition(cc.p(spriteSize.width* 0.15, spriteSize.height* 0.75));
        itemParentNode.addChild(labelVip);

        //玩家名
        var labelName = cc.LabelTTF.create(TaskListLoop[idx]["name"], "Arial", 18);
        labelName.setAnchorPoint(0, 0.5);
        labelName.setPosition(cc.p(spriteSize.width* 0.24, spriteSize.height* 0.75));
        itemParentNode.addChild(labelName);

        //玩家财富
        var labelMoney = cc.LabelTTF.create("财富:      "+TaskListLoop[idx]["coin"], "Arial", 18);
        labelMoney.setAnchorPoint(0, 0.5);
        labelMoney.setPosition(cc.p(spriteSize.width* 0.15, spriteSize.height* 0.25));
        itemParentNode.addChild(labelMoney);
        //图标
        var moneySp= cc.Sprite.create(Common.getJinHuaResourcePath("ic_tongqian.png"));
        moneySp.setPosition(spriteSize.width* 0.21, spriteSize.height* 0.22);
        itemParentNode.addChild(moneySp, 1);
        //描述背景
        var signAwardLabBg = cc.Sprite.create(Common.getJinHuaResourcePath("ui_haoyouzengsongjiajinbi.png"));
        signAwardLabBg.setPosition(spriteSize.width* 0.675, spriteSize.height* 0.5);
        itemParentNode.addChild(signAwardLabBg, 1);
        //描述文案
        var signAwardLab= cc.LabelTTF.create("好友赠送+"+ TaskListLoop[idx]["signAward"], "Arial", 24);
        signAwardLab.setAnchorPoint(cc.p(0.5,0.5));
        signAwardLab.setPosition(spriteSize.width* 0.675, spriteSize.height* 0.5);
        itemParentNode.addChild(signAwardLab, 1);
        var messagePath;
        //是否还有消息未读
        if(TaskListLoop[idx]["unreadCnt"]> 0){
            messagePath= "ui_xinyoujiantubiao.png";
            labelVip.setColor(cc.color(255, 255, 255));
            labelName.setColor(cc.color(0xf0, 0xd8, 0xff));
            labelMoney.setColor(cc.color(0xf0, 0xd8, 0xff));
            signAwardLab.setColor(cc.color(255, 255, 255));
        }else{
            messagePath= "read.png";
            labelVip.setColor(cc.color(0x8f,0x69,0x97));
            labelName.setColor(cc.color(0x8f,0x69,0x97));
            labelMoney.setColor(cc.color(0x8f,0x69,0x97));
            signAwardLab.setColor(cc.color(0x8f,0x69,0x97));
        }

        //消息图标
        var messageIcon = cc.Sprite.create(Common.getJinHuaResourcePath(messagePath));
        messageIcon.setPosition(spriteSize.width* 0.5, spriteSize.height* 0.5);
        itemParentNode.addChild(messageIcon, 1);

        //玩家头像
        Common.addSpriteByNet(TaskListLoop[idx]["photoUrl"], function(sprite){
            sprite.setPosition(spriteSize.width* 0.08, spriteSize.height* 0.5);
            sprite.setScale(0.85);
            itemParentNode.addChild(sprite);
        });
        //头像框
        var avatarSp= cc.Sprite.create(Common.getJinHuaResourcePath("ui_touxiangkuang.png"));
        avatarSp.setPosition(spriteSize.width* 0.08, spriteSize.height* 0.5);
        avatarSp.setScale(0.85);
        itemParentNode.addChild(avatarSp, 1);

        //[称谓-等级]
        var chengweiSp= cc.Sprite.create(Profile_JinHuaSetting.getUserTitlePath(TaskListLoop[idx]["coin"]));
        chengweiSp.setPosition(spriteSize.width* 0.08, spriteSize.height* 0.15);
        itemParentNode.addChild(chengweiSp, 1);
        chengweiSp.setScale(0.85);

        //Vip等级
        var userVipLevel = TaskListLoop[idx]["vipLevel"];

        var path = VipElementsUtils.getVipBgFromVipLevel(userVipLevel);
        var vipBgSprite;
        //Todo:资源重复，该部分资源在Plist中也存在
        if(path!= null){
            vipBgSprite= cc.Sprite.create(Common.getJinHuaResourcePath(path));
        }else{
            vipBgSprite= cc.Sprite.create(Common.getJinHuaResourcePath("ic_vip_0.png"));
        }
        itemParentNode.addChild(vipBgSprite, 1);
        var vipBgSize= vipBgSprite.getContentSize();

        var AtlasLabel_vip_level= cc.LabelAtlas.create("", Common.getJinHuaResourcePath("ui_vip_lvshuzi_gaoji.png"), 14, 20, "0");
        AtlasLabel_vip_level.setString(":"+userVipLevel);
        AtlasLabel_vip_level.setAnchorPoint(cc.p(0.5, 0.5));
        AtlasLabel_vip_level.setPosition(vipBgSize.width* 0.5, vipBgSize.height* 0.5);
        vipBgSprite.addChild(AtlasLabel_vip_level);

        if(userVipLevel> 0 &&userVipLevel< 10){
            var AtlasLabel_lowsign= cc.LabelAtlas.create("", Common.getJinHuaResourcePath("ui_vip_jiaobiaoshuzi.png"), 12, 14, "0");
            AtlasLabel_lowsign.setString(userVipLevel);
            AtlasLabel_lowsign.setAnchorPoint(cc.p(0.5, 0.5));
            AtlasLabel_lowsign.setPosition(vipBgSize.width, vipBgSprite.height);
            vipBgSprite.addChild(AtlasLabel_lowsign);

            var Image_vip_lowsignbg = cc.Sprite.create(Common.getJinHuaResourcePath("ic_vip_jiaobiao_shuzichendi.png"));
            Image_vip_lowsignbg.setAnchorPoint(cc.p(0.5, 0.5));
            Image_vip_lowsignbg.setPosition(vipBgSize.width,vipBgSize.height);
            vipBgSprite.addChild(Image_vip_lowsignbg);
        }else if(userVipLevel>= 10){
            var highSignTexture = VipElementsUtils.getVipHighSignFromVipLevel(userVipLevel);
            var Image_vip_highsign = null;
            if(highSignTexture != null){
                Image_vip_highsign = cc.Sprite.create(Common.getJinHuaResourcePath(highSignTexture));
                Image_vip_highsign.setAnchorPoint(cc.p(0.5, 0.5));
                Image_vip_highsign.setPosition(vipBgSize.width,vipBgSize.height);
                vipBgSprite.addChild(Image_vip_highsign);
            }
        }

        vipBgSprite.setScale(0.85);
        vipBgSprite.setAnchorPoint(cc.p(0, 0.5));
        vipBgSprite.setPosition(cc.p(spriteSize.width* 0.01, spriteSize.height* 0.85));

        var buttonName = "btn_lingqu_1.png";
        var buttonWord = "ui_lingqujinbi.png";

        if(TaskListLoop[idx]["visibility"]== 0){//按钮状态
            buttonWord = "ui_yilingqu.png";
        }
        var bgSprite= cc.Sprite.create(Common.getJinHuaResourcePath(buttonName));
        var button1= cc.MenuItemSprite.create(
            bgSprite,
            null, this.onClick, this);
        button1.setPosition(spriteSize.width* 0.9, spriteSize.height* 0.5);
        button1.setTag(idx);
        menu.addChild(button1);

        var wordSprite= cc.Sprite.create(Common.getJinHuaResourcePath(buttonWord));
        wordSprite.setPosition(bgSprite.getContentSize().width* 0.5, bgSprite.getContentSize().height* 0.6);
        button1.addChild(wordSprite);

        if(TaskListLoop[idx]["visibility"]== 0){//按钮状态
            button1.setOpacity(120);
        }
        ProfileFriendList.m_arrFriendButton[idx]= button1;

        return cell;
    },
    //单元数量-重写TableView的tableCellAtIndex函数
    numberOfCellsInTableView:function (table){
        return ProfileFriendList.m_friendListTable["FriendListCnt"];
    },
    //按钮的回调函数,利用Tag来区分是列表中的第几个
    onClick:function(pSender){
        var id= pSender.getTag();
        var userID= ProfileFriendList.m_friendListTable["FriendList"][id]["userID"];
        sendJINHUA_MGR_SIGN_FRIEND_REWARD(userID,id+ 1)
    },
    //显示头像
    onShow:function(pSender){
        //显示头像
        var id= pSender.getTag();
        var userID= ProfileFriendList.m_friendListTable["FriendList"][id]["userID"];
        if(userID== 1001){//同趣小妹
            //隐藏列表
            FriendListLogic.m_tableView.setVisible(false);
            MvcEngine.createModule(GUI_XIAOMEIINFO);
        }else{
            //其他玩家列表
            sendJINHUA_MGR_USER_INFO(userID);
        }
    },
    //切换按钮状态
    changeBtnState:function(index){
        var button= ProfileFriendList.m_arrFriendButton[index].getChildren()[1];
        button.setOpacity(120);
        button.setTexture(Common.getJinHuaResourcePath("ui_yilingqu.png"));
    },
    //添加上限
    onLimit:function(flag){
        if(ProfileFriendList.m_curPageID!= 1) {
            this.showShangxianView(flag);
        }
    },
    //显示上限
    showShangxianView:function(flag){
        if(flag!= undefined){
            this.Panel_haoyoushangxian.setVisible(flag);
            this.m_tableView.setVisible(!flag);
        }else{
            this.Panel_haoyoushangxian.setVisible(false);
        }
    }
};