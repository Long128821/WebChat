var RoomListLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	panel_bg:null,
	Panel_roomTableView:null,
	panel_roomlist:null,
	panel_hall:null,
	Image_roomType:null,
	Button_close:null,
	Panel_createroom:null,
	Button_createdList:null,
	Button_create:null,

    /***********自定义实现****************/
    m_tableView:null,
	
    createView:function(){
    	this.initLayer();
        
        this.view.setTag(ModuleTable["RoomList"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.panel_bg = CocoStudio.getComponent(this.view, "panel_bg");//Panel
		this.Panel_roomTableView = CocoStudio.getComponent(this.view, "Panel_roomTableView");//Panel
		this.panel_roomlist = CocoStudio.getComponent(this.view, "panel_roomlist");//Panel
		this.panel_hall = CocoStudio.getComponent(this.view, "panel_hall");//Panel
		this.Image_roomType = CocoStudio.getComponent(this.view, "Image_roomType");//ImageView
		this.Button_close = CocoStudio.getComponent(this.view, "Button_close");//Button
		this.Panel_createroom = CocoStudio.getComponent(this.view, "Panel_createroom");//Panel
		this.Button_createdList = CocoStudio.getComponent(this.view, "Button_createdList");//Button
		this.Button_create = CocoStudio.getComponent(this.view, "Button_create");//Button
	},

    initLayer:function(){
		var gui = GUI_ROOMLIST;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/RoomList.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/RoomList.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/RoomList.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
//			//适配方案 960x640
//			this.view = CocoStudio.createView("res/RoomList_960_640.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}
	},
    
	callback_Button_close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_ROOMLIST);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_createroom:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_createdList:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_create:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJINHUA_MGR_BUILD_TABLE_INFO();
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
    	Frameworks.addSlot2Signal(JINHUA_ROOMID_ROOM_LIST, ProfileRoomList.slot_JINHUA_ROOMID_ROOM_LIST);
    	Frameworks.addSlot2Signal(JHID_ENTER_ROOM, ProfileRoomList.slot_JHID_ENTER_ROOM);
    	Frameworks.addSlot2Signal(JINHUA_MGR_BUILD_TABLE_INFO, ProfileRoomList.slot_JINHUA_MGR_BUILD_TABLE_INFO);
    },
    //移除信号
    removeSlot:function(){
    	Frameworks.removeSlotFromSignal(JINHUA_ROOMID_ROOM_LIST, ProfileRoomList.slot_JINHUA_ROOMID_ROOM_LIST);
    	Frameworks.removeSlotFromSignal(JHID_ENTER_ROOM, ProfileRoomList.slot_JHID_ENTER_ROOM);
    	Frameworks.removeSlotFromSignal(JINHUA_MGR_BUILD_TABLE_INFO, ProfileRoomList.slot_JINHUA_MGR_BUILD_TABLE_INFO);
    },
    
    //释放界面的私有数据
    releaseData:function(){
    
    },
    
    requestMsg:function(){
    
    },
    //初始化界面
    initData:function(){
        var roomType= Profile_JinHuaRoomData.getCurRoomType();
        if(Profile_JinHuaRoomData.TYPE_JINGDIAN== roomType){
            sendJINHUA_ROOMID_ROOM_LIST(0);//发送扎金花房间列表消息
            this.Image_roomType.loadTexture(Common.getJinHuaResourcePath("ic_jingdianchang.png"));
        }else if(Profile_JinHuaRoomData.TYPE_QIANWANG== roomType){
            sendJINHUA_ROOMID_ROOM_LIST(0);//发送扎金花房间列表消息
            this.Image_roomType.loadTexture(Common.getJinHuaResourcePath("ic_qianwangchang.png"));
        }else{
            MvcEngine.destroyModule(GUI_ROOMLIST);
        }
    },
    //初始化房间列表
    initRoomListView:function(){
        //获取当前活跃的房间列表
        var roomListTable= Profile_JinHuaRoomData.getCurActiveRoomList();
        if(roomListTable== null) return;
        //创建房间列表(TableView)
        this.createTableView();
    },
    //创建视图
    createTableView:function(){
        //避免打开之后，重新添加一些相同的元素
        if(this.m_tableView!= null){
            this.m_tableView.removeFromParent(true);
        }
        var self= this;
        var tableSize= this.Panel_roomTableView.getContentSize();
        //左下角位置
        var leftBottomPos= this.Panel_roomTableView.getPosition();
        //偏移量
        var offsetPos= cc.p(tableSize.width* 0.05, tableSize.height* 0.1);

        leftBottomPos= cc.pAdd(leftBottomPos, offsetPos);

        //加载成功的回调函数
        var tableView = new cc.TableView(self, tableSize);
        tableView.setDirection(cc.SCROLLVIEW_DIRECTION_HORIZONTAL);//水平滑动
        tableView.setTouchEnabled(true);
        tableView.setDelegate(self);
        tableView.setPosition(leftBottomPos);
        //重新加载数据，如果不添加该句，会出现各种各样的奇葩问题(例如:缺少cell)
        tableView.reloadData();

        self.m_tableView= tableView;
        //在view中，添加节点，zOrder为2
        self.view.addChild(self.m_tableView, self.Panel_roomTableView.getLocalZOrder());
    },
    //重写TableView的tableCellSizeForIndex函数
    tableCellSizeForIndex:function (table, idx) {
        return cc.size(253, 409);
    },
    //重写TableView的tableCellAtIndex函数
    tableCellAtIndex:function (table, idx) {
        var cell = table.dequeueCell();
        cell = new cc.TableViewCell();
        return this.createItem(cell, idx);
    },
    //创建某个房间图标
    createItem:function(cell, idx){
        var offset= ((Profile_JinHuaRoomData.TYPE_JINGDIAN== Profile_JinHuaRoomData.getCurRoomType())?0:Common.getTableSize(Profile_JinHuaRoomData.getJingDianRoomList()));
        var tableSize= this.Panel_roomTableView.getContentSize();
        var roomListTable= Profile_JinHuaRoomData.getCurActiveRoomList();

        var sprite= cc.Sprite.create();
        sprite.setAnchorPoint(0, 0);
        sprite.setPosition(cc.p(0,0));
        cell.addChild(sprite);
        var tag= idx+ offset;
        cell.setTag(tag);

        if((Profile_JinHuaRoomData.TYPE_QIANWANG== Profile_JinHuaRoomData.getCurRoomType())){
            sprite.setPositionY(tableSize.height* (0.1));
            //避免发生截取
            if(idx== 2){
                sprite.setPositionY(0);
            }
        }

        Load.LoadJsonOrPic(roomListTable[tag].roomPic, function(){
           sprite.setTexture(roomListTable[tag].roomPic);
        });

        return cell;
    },
    //单元数量-重写TableView的tableCellAtIndex函数
    numberOfCellsInTableView:function (table){
        return Common.getTableSize(Profile_JinHuaRoomData.getCurActiveRoomList());
    },
    //触摸结束-重写TableView的tableCellAtIndex函数
    tableCellTouched:function (table, cell){
//        console.log("进入房间"+ (cell.getTag()+ 1));
        sendJHID_ENTER_ROOM(cell.getTag()+ 1);
    }
};
