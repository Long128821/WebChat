var JinHuaTableConfirmPopLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	panel_parent:null,
	panel:null,
	btn_confirm:null,
	tv_content:null,
	btn_cancel:null,
	label_title:null,
	
    createView:function(){
        cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("co_desk.plist"), Common.getJinHuaResourcePath("co_desk.png"));

    	this.initLayer();
        
        this.view.setTag(ModuleTable["JinHuaTableConfirmPop"]["Layer"]);
        
        this.initView();
        
        this.initData();
    },
    
	initView:function(){
		this.panel_parent = CocoStudio.getComponent(this.view, "panel_parent");//Panel
		this.panel = CocoStudio.getComponent(this.view, "panel");//Panel
		this.btn_confirm = CocoStudio.getComponent(this.view, "btn_confirm");//Button
		this.tv_content = CocoStudio.getComponent(this.view, "tv_content");//Label
		this.btn_cancel = CocoStudio.getComponent(this.view, "btn_cancel");//Button
		this.label_title = CocoStudio.getComponent(this.view, "label_title");//Label
	},

    initLayer:function(){
		var gui = GUI_JINHUATABLECONFIRMPOP;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/JinHuaTableConfirmPop.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/JinHuaTableConfirmPop.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/JinHuaTableConfirmPop.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},
    
	callback_btn_confirm:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableConfirmPopLogic.onConfirm();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_cancel:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.destroyModule(GUI_JINHUATABLECONFIRMPOP);
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
        cc.spriteFrameCache.removeSpriteFrameByName(Common.getJinHuaResourcePath("co_desk.plist"));
    },
    
    requestMsg:function(){
    
    },

    onConfirm:function(){
        MvcEngine.destroyModule(GUI_JINHUATABLECONFIRMPOP);
        var GameData= Profile_JinHuaGameData.getGameData();
        switch(ProfileJinHuaTableConfirmPop.tag){
            case TableConfirmPopTag.TAG_QUIT:
                sendJHID_QUIT_TABLE(GameData.roomId,GameData.tableId);
                break;
            case TableConfirmPopTag.TAG_STANDUP://自己站起
                JinHuaTablePlayer.selfStandUp();
                break;
            case TableConfirmPopTag.TAG_NOPK:

                break;
            case TableConfirmPopTag.TAG_FOLD_TIPS://弃牌
                JinHuaTableLogic.afterOnClickBtnFold();
                break;
            case TableConfirmPopTag.TAG_CHANGE_TABLE_TIPS:

                break;
        }
    },
    //初始化界面
    initData:function(){
        this.tv_content.setString(ProfileJinHuaTableConfirmPop.msg);
    }
};
