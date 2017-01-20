var MessageListLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	btn_back:null,
	Image_bg:null,
	Image_youxiang:null,
	Panel_list:null,
	Button_leftArrow:null,
	Button_rightArrow:null,
	Label_fanye:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["MessageList"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.btn_back = CocoStudio.getComponent(this.view, "btn_back");//Button
		this.Image_bg = CocoStudio.getComponent(this.view, "Image_bg");//Panel
		this.Image_youxiang = CocoStudio.getComponent(this.view, "Image_youxiang");//ImageView
		this.Panel_list = CocoStudio.getComponent(this.view, "Panel_list");//Panel
		this.Button_leftArrow = CocoStudio.getComponent(this.view, "Button_leftArrow");//Button
		this.Button_rightArrow = CocoStudio.getComponent(this.view, "Button_rightArrow");//Button
		this.Label_fanye = CocoStudio.getComponent(this.view, "Label_fanye");//Label
	},

    initLayer:function(){
		var gui = GUI_MESSAGELIST;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/MessageList.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/MessageList.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/MessageList.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},
    
	callback_btn_back:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_MESSAGELIST);
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
    //安卓手机的返回键的监听事件
    onKeypad:function(event){
    	if(event == "backClicked"){//返回键
    		
    	}else if(event == "menuClicked"){//菜单键
    	
    	}
    },
    //添加信号
    addSlot:function(){
    	Frameworks.addSlot2Signal(MAIL_SYSTEM_MESSGE_LIST, ProfileMessageList.slot_MAIL_SYSTEM_MESSGE_LIST);
    	Frameworks.addSlot2Signal(MAIL_SYSTEM_MESSAGE_READ, ProfileMessageList.slot_MAIL_SYSTEM_MESSAGE_READ);
    },
    //移除信号
    removeSlot:function(){
    	Frameworks.removeSlotFromSignal(MAIL_SYSTEM_MESSGE_LIST, ProfileMessageList.slot_MAIL_SYSTEM_MESSGE_LIST);
    	Frameworks.removeSlotFromSignal(MAIL_SYSTEM_MESSAGE_READ, ProfileMessageList.slot_MAIL_SYSTEM_MESSAGE_READ);
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    },
    //初始化界面
    initData:function(){
        //起始消息ID和消息数量
        sendMAIL_SYSTEM_MESSGE_LIST(0, 100);
    },
    //设置邮箱列表
    setMailLists:function(){
        //避免打开之后，重新添加一些相同的元素
        if(this.m_tableView!= null){
            this.m_tableView.removeFromParent(true);
        }
        var self= this;
        var tableSize= self.Panel_list.getContentSize();
        var tableViewPos= self.Panel_list.getPosition();
        //左下角位置
        var leftBottomPos= cc.p(tableViewPos.x- tableSize.width* 0.5, tableViewPos.y- tableSize.height*0.5);
        //预加载资源
        var arrPath= [
            Common.getJinHuaResourcePath("ui_xinxiaoxidi.png"),
            Common.getJinHuaResourcePath("ic_email_gift_yidu.png"),
            Common.getJinHuaResourcePath("ic_email_gift.png"),
            Common.getJinHuaResourcePath("ui_xinyoujiantubiao.png"),
            Common.getJinHuaResourcePath("read.png"),
            Common.getJinHuaResourcePath("ui_new.png")
        ];
        //代码先执行，但是精灵尺寸为空,不能正确显示
        Load.LoadJsonOrPic(arrPath,function(){
            //加载成功的回调函数
            var tableView = new cc.TableView(self, self.Panel_list.getContentSize());
            tableView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);//竖直滑动
            tableView.setDelegate(self);
            tableView.setTouchEnabled(true);
            tableView.setPosition(leftBottomPos);

            self.m_tableView= tableView;
            //在view中，添加节点，zOrder为2
            self.view.addChild(self.m_tableView, 2);
        });
    },
    //重写TableView的tableCellSizeForIndex函数
    tableCellSizeForIndex:function (table, idx) {
        return cc.size(1003, 95);
    },
    //重写TableView的tableCellAtIndex函数
    tableCellAtIndex:function (table, idx) {
        var cell = table.dequeueCell();
        cell = new cc.TableViewCell();
        return this.createItem(cell, idx);
    },
    //创建某一个右邮件项
    createItem:function(cell, idx){
        var MessageListTable= Profile_Message.getMessageListTable();
        //背景
        var sprite= GamePub.createPointNineSpriteForPlist(Common.getJinHuaResourcePath("ui_xinxiaoxidi.png"), 25, 25, this.Panel_list.getContentSize().width- 20, 95- 6);
        sprite.setAnchorPoint(0,0);
        sprite.setPosition(cc.p(10,0));
        cell.addChild(sprite);
        //点九图的尺寸
        var spriteSize= sprite.getContentSize();
        //标题
        var labelTitle = cc.LabelTTF.create(MessageListTable[idx]["MessageTitle"], "Arial", 30);
        labelTitle.setAnchorPoint(0.5, 0.5);
        labelTitle.setPosition(cc.p(spriteSize.width* 0.5, spriteSize.height* 0.75));
        sprite.addChild(labelTitle);
        //时间
        var labelTime = cc.LabelTTF.create(MessageListTable[idx]["CreateTime"], "Arial", 24);
        labelTime.setAnchorPoint(cc.p(1, 0.5));

        labelTime.setPosition(cc.p(spriteSize.width* 0.95, spriteSize.height* 0.55));
        sprite.addChild(labelTime);
        var strContent= MessageListTable[idx]["MessageContent"];
        if(strContent.length> 20){
            strContent= strContent.substring(0, 20)+"......";
        }

        //内容
        var LabelContent = cc.LabelTTF.create(strContent, "Arial", 20);
        LabelContent.setPosition(cc.p(spriteSize.width* 0.5, spriteSize.height* 0.25));
        sprite.addChild(LabelContent);

        var avatorurl = null;
        var sMessageType= MessageListTable[idx]["MessageType"];
        var sMessageFlag= MessageListTable[idx]["MessageFlag"];
        if(sMessageType== 1|| sMessageType== 3){
            if(sMessageFlag!= 0){
                avatorurl = "ic_email_gift_yidu.png"
            }else{
                avatorurl = "ic_email_gift.png"
            }
        }else{
            if(sMessageFlag== 0){
                avatorurl = "ui_xinyoujiantubiao.png"
            }else{
                avatorurl = "read.png";
            }
        }
        //头像
        var avator= cc.Sprite.create(Common.getJinHuaResourcePath(avatorurl));
        avator.setPosition(cc.p(spriteSize.width* 0.05, spriteSize.height* 0.5));
        sprite.addChild(avator);

        if(sMessageFlag== 0){
            labelTitle.setColor(cc.color(255,255,255));
            labelTime.setColor(cc.color(0xe4,0xb6,0x47));
            LabelContent.setColor(cc.color(0xac,0x77,0xa5));

            var imageNew = cc.Sprite.create(Common.getJinHuaResourcePath("ui_new.png"));
            imageNew.setAnchorPoint(cc.p(0, 0));
            imageNew.setPosition(cc.p(spriteSize.width* 0.08, spriteSize.height* 0.5));
            sprite.addChild(imageNew);
        }else{
            labelTitle.setColor(cc.color(0x7b,0x4b,0x85));
            labelTime.setColor(cc.color(0x7b,0x4b,0x85));
            LabelContent.setColor(cc.color(0x7b,0x4b,0x85));
        }

        return cell;
    },
    //单元数量-重写TableView的tableCellAtIndex函数
    numberOfCellsInTableView:function (table) {
        return Profile_Message.getMessageCnt();
    },
    //触摸结束-重写TableView的tableCellAtIndex函数
    tableCellTouched:function (table, cell) {
        //触摸结束
        ProfileMessageList.m_curMsgID= cell.getIdx();
        var messageListTable= Profile_Message.getMessageListTable();
        var messageID= messageListTable[cell.getIdx()]["MessageId"];
        var messageFlag= messageListTable[cell.getIdx()]["MessageFlag"];
        console.log(messageFlag);
        if(messageFlag== 0){
            sendMAIL_SYSTEM_MESSAGE_READ(messageID);
        }
        MvcEngine.createModule(GUI_MESSAGESERVER);
    }
};
