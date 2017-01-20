var RenWuLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	Image_MianBan:null,
	Panel_35:null,
	Image_AchievementTask:null,
	Image_AchievementTask_word:null,
	Image_EverDayTask:null,
	Image_EverDayTask_word:null,
	Label_TaskName:null,
	Label_Content:null,
	Label_Award:null,
	Label_go:null,
	btn_Close:null,
	Label_FinishMark:null,

    /******自定义*********/
    m_tableView:null,//TableView列表
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["RenWu"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.Image_MianBan = CocoStudio.getComponent(this.view, "Image_MianBan");//ImageView
		this.Panel_35 = CocoStudio.getComponent(this.view, "Panel_35");//Panel
		this.Image_AchievementTask = CocoStudio.getComponent(this.view, "Image_AchievementTask");//ImageView
		this.Image_AchievementTask_word = CocoStudio.getComponent(this.view, "Image_AchievementTask_word");//ImageView
		this.Image_EverDayTask = CocoStudio.getComponent(this.view, "Image_EverDayTask");//ImageView
		this.Image_EverDayTask_word = CocoStudio.getComponent(this.view, "Image_EverDayTask_word");//ImageView
		this.Label_TaskName = CocoStudio.getComponent(this.view, "Label_TaskName");//Label
		this.Label_Content = CocoStudio.getComponent(this.view, "Label_Content");//Label
		this.Label_Award = CocoStudio.getComponent(this.view, "Label_Award");//Label
		this.Label_go = CocoStudio.getComponent(this.view, "Label_go");//Label
		this.btn_Close = CocoStudio.getComponent(this.view, "btn_Close");//Button
		this.Label_FinishMark = CocoStudio.getComponent(this.view, "Label_FinishMark");//Label
	},

    initLayer:function(){
		var gui = GUI_RENWU;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/RenWu.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/RenWu.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/RenWu.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
//			//适配方案 960x640
//			this.view = CocoStudio.createView("res/RenWu_960_640.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}
	},
    
	callback_Image_AchievementTask:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            RenWuLogic.changePage(1);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_EverDayTask:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            RenWuLogic.changePage(0);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_Close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_RENWU);
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
    	Frameworks.addSlot2Signal(COMMONS_DAILYTASK, ProfileRenWu.slot_COMMONS_DAILYTASK);//每日任务列表
    	Frameworks.addSlot2Signal(COMMONS_LIFETIME_TASKLIST, ProfileRenWu.slot_COMMONS_LIFETIME_TASKLIST);//成就任务
    	Frameworks.addSlot2Signal(COMMONS_GET_DAILYTASK_PRIZE, ProfileRenWu.slot_COMMONS_GET_DAILYTASK_PRIZE);//领取任务奖励
    },
    //移除信号
    removeSlot:function(){
    	Frameworks.removeSlotFromSignal(COMMONS_DAILYTASK, ProfileRenWu.slot_COMMONS_DAILYTASK);
    	Frameworks.removeSlotFromSignal(COMMONS_LIFETIME_TASKLIST, ProfileRenWu.slot_COMMONS_LIFETIME_TASKLIST);
    	Frameworks.removeSlotFromSignal(COMMONS_GET_DAILYTASK_PRIZE, ProfileRenWu.slot_COMMONS_GET_DAILYTASK_PRIZE);
    },
    
    //释放界面的私有数据
    releaseData:function(){
        if(this.m_tableView!= null){
            this.m_tableView.removeFromParent(true);
            delete  this.m_tableView;
        }
    },
    
    requestMsg:function(){
    
    },
    //初始化界面
    initData:function(){
        //默认显示为每日任务
        this.changePage(0);
    },
    //切换要显示的Table
    //Type: 0- 每日任务 1-成就任务
    changePage:function(Type){
        ProfileRenWu.m_curPageID= Type;
        //切换按钮背景图片
        this.changePic();
        if(ProfileRenWu.m_curPageID== 0){//每日任务
            sendCOMMONS_DAILYTASK();
        }else{//成就任务
            sendCOMMONS_LIFETIME_TASKLIST();
        }
    },
    //切换选中图片
    changePic:function(){
        if(ProfileRenWu.m_curPageID== 0){//每日任务
            this.Image_EverDayTask.loadTexture(Common.getJinHuaResourcePath("ui_renwuxuanzhong1.png"));
            this.Image_AchievementTask.loadTexture(Common.getJinHuaResourcePath("ui_renwuweixuanzhong2.png"));
        }else{//成就任务
            this.Image_EverDayTask.loadTexture(Common.getJinHuaResourcePath("ui_renwuweixuanzhong1.png"));
            this.Image_AchievementTask.loadTexture(Common.getJinHuaResourcePath("ui_renwuxuanzhong2.png"));
        }
    },
    createTableView:function(){
        this.Label_FinishMark.setVisible(false);
        //避免打开之后，重新添加一些相同的元素
        if(this.m_tableView!= null){
            this.m_tableView.removeFromParent(true);
        }
        var self= this;
        var tableSize= cc.size(716, 310);
        var tableViewPos= this.Image_MianBan.getPosition();
        //左下角位置
        var leftBottomPos= cc.p(tableViewPos.x- tableSize.width* 0.505, tableViewPos.y- tableSize.height*0.65);
        //预加载资源
        var arrPath= [
            Common.getJinHuaResourcePath("px1.png"),
            Common.getJinHuaResourcePath("ui_renwuqiansedi.png"),
            Common.getJinHuaResourcePath("ui_renwushengsedi.png"),
            Common.getJinHuaResourcePath("ui_renwujinduheidi.png"),
            Common.getJinHuaResourcePath("ui_renwujindutiao.png"),
            Common.getJinHuaResourcePath("ui_task_qianwang.png"),
            Common.getJinHuaResourcePath("btn_qianwang_lingjiang.png"),
            Common.getJinHuaResourcePath("ui_wancheng.png"),
            Common.getJinHuaResourcePath("btn_qianwang_wancheng.png")
        ];

        //代码先执行，但是精灵尺寸为空,不能正确显示
        Load.LoadJsonOrPic(arrPath,function(){
            //加载成功的回调函数
            var tableView = new cc.TableView(self, tableSize);
            tableView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);//竖直滑动
            tableView.setTouchEnabled(true);
            tableView.setPosition(leftBottomPos);

            self.m_tableView= tableView;
            //在view中，添加节点，zOrder为2
            self.view.addChild(self.m_tableView, 2);
        });
    },
    //重写TableView的tableCellSizeForIndex函数
    tableCellSizeForIndex:function (table, idx) {
        return cc.size(716, 95);
    },
    //重写TableView的tableCellAtIndex函数
    tableCellAtIndex:function (table, idx) {
        var cell = table.dequeueCell();
        cell = new cc.TableViewCell();
        //为了和App保持一致，
        var taskNum= ProfileRenWu.getActiveTaskListTable()["taskNum"]- 1;
        return this.createItem(cell, taskNum- idx);
    },
    //创建某一个右邮件项
    createItem:function(cell, idx){
        var DailyTaskListTable= ProfileRenWu.getActiveTaskListTable();
        var TaskListLoop= DailyTaskListTable["TaskListLoop"];
        //背景
        var bgUrl= idx%2?"ui_renwushengsedi.png":"ui_renwuqiansedi.png";
        var sprite= GamePub.createPointNineSpriteForPlist(Common.getJinHuaResourcePath(bgUrl), 25, 25, 716, 95);
        sprite.setAnchorPoint(0,0);
        cell.addChild(sprite);
        //点九图的尺寸
        var spriteSize= sprite.getContentSize();
        //任务名
        var labelTitle = cc.LabelTTF.create(TaskListLoop[idx]["Name"], "Arial", 30);
        labelTitle.setAnchorPoint(0.5, 0.5);
        labelTitle.setPosition(cc.p(spriteSize.width* 0.12, spriteSize.height* 0.7));
        sprite.addChild(labelTitle);

        var strContent= TaskListLoop[idx]["Desc"];
        if(strContent.length> 20){
            strContent= strContent.substring(0, 20)+"......";
        }

        //内容
        var LabelContent = cc.LabelTTF.create("("+ strContent+")", "Arial", 16);
        LabelContent.setPosition(cc.p(spriteSize.width* 0.12, spriteSize.height* 0.25));
        LabelContent.setColor(cc.color(0x6f,0x5e,0x6c));
        sprite.addChild(LabelContent);
        
        //任务进度
        var DB_progress = cc.Sprite.create(Common.getJinHuaResourcePath("ui_renwujinduheidi.png"));
        DB_progress.setPosition(spriteSize.width* 0.375, spriteSize.height* 0.5);
        sprite.addChild(DB_progress);

        var progress = cc.ProgressTimer.create(cc.Sprite.create(Common.getJinHuaResourcePath("ui_renwujindutiao.png")));
        progress.setBarChangeRate(cc.p(1,0));//设置进度条的长度和高度开始变化的大小
        progress.setType(cc.ProgressTimer.TYPE_BAR);
        progress.setMidpoint(cc.p(0,0));//设置中心点
        progress.setPosition(cc.p(DB_progress.getContentSize().width* 0.5, DB_progress.getContentSize().height* 0.5));
        progress.setPercentage(TaskListLoop[idx]["Progress"]);
        DB_progress.addChild(progress);

        //文本-任务进度
        var labelProgress = cc.LabelTTF.create(TaskListLoop[idx]["Process"], "Arial", 16);
        labelProgress.setPosition(cc.p(DB_progress.getContentSize().width* 0.5, DB_progress.getContentSize().height* 0.5));
        progress.addChild(labelProgress);

        //奖励
        var PrizeName = cc.LabelTTF.create(TaskListLoop[idx]["PrizeName"], "Arial", 20);
        PrizeName.setPosition(cc.p(spriteSize.width* 0.625, spriteSize.height* 0.5));
        sprite.addChild(PrizeName);

        //操作
        var menu = cc.Menu.create();
        menu.setPosition(cc.p(0,0));
        sprite.addChild(menu);

        var buttonName = "btn_qianwang_wancheng.png";
        var buttonWord = "ui_task_qianwang.png";

        if(TaskListLoop[idx]["Status"]!= 0){//按钮状态
            buttonName = "btn_qianwang_lingjiang.png";
            buttonWord = "ui_wancheng.png";
        }
        var bgSprite= cc.Sprite.create(Common.getJinHuaResourcePath(buttonName));
        var button= cc.MenuItemSprite.create(
            bgSprite,
            null, this.onClick, this);
        button.setPosition(spriteSize.width* 0.85, spriteSize.height* 0.5);
        button.setTag(idx);
        menu.addChild(button);

        var wordSprite= cc.Sprite.create(Common.getJinHuaResourcePath(buttonWord));
        wordSprite.setPosition(bgSprite.getContentSize().width* 0.5, bgSprite.getContentSize().height* 0.6);
        button.addChild(wordSprite);

        return cell;
    },
    //单元数量-重写TableView的tableCellAtIndex函数
    numberOfCellsInTableView:function(table) {
        return ProfileRenWu.getActiveTaskListTable()["taskNum"];
    },
    //按钮的回调哈数，利用Tag来区分是列表中的第几个
    onClick:function(pSender){
        var taskListTable= ProfileRenWu.getActiveTaskListTable()["TaskListLoop"];
        var taskID= taskListTable[pSender.getTag()]["ID"];
        sendCOMMONS_GET_DAILYTASK_PRIZE(taskID);
    }
};


//Todo:强制退出GAMEID_SERVER_MSG
//Todo:Cell的上下列表颠倒一下
//Todo:联调——领奖，显示已经领取过
