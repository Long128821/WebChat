var LoginLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_20:null,
	btn_weixin_login:null,
	btn_olduser_login:null,
	btn_reg:null,
	text_login:null,
	check_agree:null,
	img_bg:null,
	ImageView_ip:null,
	btn_setIp:null,
	lable_ip_text:null,
	Label_imei:null,
	btn_showLog:null,
	Image_logo:null,
	Panel_login:null,
	text_resetpass:null,
	btn_more:null,
	ImageView_username:null,
	ImageView_password:null,
	btn_login:null,
	Button_login_close:null,

	m_bLoginVisible:false,//登陆框是否显示
    createView:function(){
//        if(Network.getWebSocketConnecting()){
//            sendMANAGERID_USERLIST_FROM_IMIE();
//        }
    	this.initLayer();
        
        this.view.setTag(ModuleTable["Login"]["Layer"]);

        this.initView();

        GameConfig.setCurBaseLayer(GUI_LOGIN);

        //显示连接状态
        this.initTextLabel();

        //创建输入框
        this.createUsernameEditor();

        //是否为Debug模式
        this.showDebugState();
    },
    
	initView:function(){
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.btn_weixin_login = CocoStudio.getComponent(this.view, "btn_weixin_login");//Button
		this.btn_olduser_login = CocoStudio.getComponent(this.view, "btn_olduser_login");//Button
		this.btn_reg = CocoStudio.getComponent(this.view, "btn_reg");//Button
		this.text_login = CocoStudio.getComponent(this.view, "text_login");//ImageView
		this.check_agree = CocoStudio.getComponent(this.view, "check_agree");//CheckBox
		this.img_bg = CocoStudio.getComponent(this.view, "img_bg");//ImageView
		this.ImageView_ip = CocoStudio.getComponent(this.view, "ImageView_ip");//ImageView
		this.btn_setIp = CocoStudio.getComponent(this.view, "btn_setIp");//Button
		this.lable_ip_text = CocoStudio.getComponent(this.view, "lable_ip_text");//Label
		this.Label_imei = CocoStudio.getComponent(this.view, "Label_imei");//Label
		this.btn_showLog = CocoStudio.getComponent(this.view, "btn_showLog");//Button
		this.Image_logo = CocoStudio.getComponent(this.view, "Image_logo");//ImageView
		this.Panel_login = CocoStudio.getComponent(this.view, "Panel_login");//Panel
		this.text_resetpass = CocoStudio.getComponent(this.view, "text_resetpass");//ImageView
		this.btn_more = CocoStudio.getComponent(this.view, "btn_more");//ImageView
		this.ImageView_username = CocoStudio.getComponent(this.view, "ImageView_username");//ImageView
		this.ImageView_password = CocoStudio.getComponent(this.view, "ImageView_password");//ImageView
		this.btn_login = CocoStudio.getComponent(this.view, "btn_login");//Button
		this.Button_login_close = CocoStudio.getComponent(this.view, "Button_login_close");//Button
	},

    initLayer:function(){
		var gui = GUI_LOGIN;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/Login.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
        //安卓手机高清显示
        cc.view.enableRetina(true);
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        cc.view.setDesignResolutionSize(width,height,cc.ResolutionPolicy.SHOW_ALL);
        this.view.setScale(height/1136,width/640);
        this.view.setRotation(90);
        this.view.setAnchorPoint(0,0);
        this.view.setPosition(0, cc.winSize.height);
//		if(GameConfig.RealProportion >= GameConfig.SCREEN_PROPORTION_GREAT){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/Login.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/Login.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}else if((GameConfig.RealProportion < GameConfig.SCREEN_PROPORTION_GREAT) && (GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL)){
//			//适配方案 960x640
//			this.view = CocoStudio.createView("res/Login_960_640.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 960, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}
	},
    
	callback_btn_weixin_login:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            //MvcEngine.createModule(GUI_USERAGREEMENT);
            console.log(ProfileLogin.getLoginUserName()+" "+ ProfileLogin.getLoginPassword());
            sendBASEID_LOGIN(ProfileLogin.getLoginUserName(), ProfileLogin.getLoginPassword());
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_olduser_login:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            LoginLogic.setLoginChooseVisible(false);
            LoginLogic.setPanelLoginVisible(true);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_reg:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendBASEID_RESGISTER("357523056663693");
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_text_login:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
            LoginLogic.edit_username.setVisible(false);
            LoginLogic.edit_password.setVisible(false);
			//抬起
            MvcEngine.createModule(GUI_USERAGREEMENT);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_setIp:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            LoginLogic.onSetIp();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_showLog:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_text_resetpass:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_RESETPASSWORD);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_more:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendMANAGERID_USERLIST_FROM_IMIE();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_login:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            LoginLogic.onLogin();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_login_close:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
            LoginLogic.setPanelLoginVisible(false);
            LoginLogic.setLoginChooseVisible(true);
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
    	Frameworks.addSlot2Signal(BASEID_LOGIN, ProfileLogin.loginManage);
    	Frameworks.addSlot2Signal(BASEID_REGISTER, ProfileLogin.registerManage);
        Frameworks.addSlot2Signal(MANAGERID_USERLIST_FROM_IMIE, ProfileLogin.IMEIUserListManage);
    },
    //移除信号
    removeSlot:function(){
    	Frameworks.removeSlotFromSignal(BASEID_LOGIN, ProfileLogin.loginManage);
    	Frameworks.removeSlotFromSignal(BASEID_REGISTER, ProfileLogin.registerManage);
    	Frameworks.removeSlotFromSignal(MANAGERID_USERLIST_FROM_IMIE, ProfileLogin.IMEIUserListManage);
    },
    
    //释放界面的私有数据
    releaseData:function(){

    },
    
    requestMsg:function(){
    
    },

    //初始化Text Label
    initTextLabel:function(){
        if(Common.isDebugState()){
            this.setIPLabel();
        }
    },

    //设置IP
    onSetIp:function(){
        if(!this.edit_ip.isVisible()) return;
        var ip= this.edit_ip.getString();
        ip= Common.deleteAllSpace(ip);
        var temp= ip;
        var length= 0;
        while(temp.indexOf(".")!= -1){
            length++;
            var str= temp.substring(0, temp.indexOf("."));
            if(str.length== 0) return 0;
            temp= temp.substring(temp.indexOf(".")+ 1, temp.length);
        }
        //IP地址为4端，3个"."(10.10.0.119)
        if(3== length){
            NetworkConfig.setCurIP(ip);
        }
        console.log(NetworkConfig.getCurIP());
        MessageCenter.reConnect();
    },
    //获取某个字符串的数量
    getCharCnt:function(){

    },
    //设置显示IP
    setIPLabel:function(){
        var ip= "";
        if(this.lable_ip_text){
            if(Network.getInstance().getWebSocketConnecting()){
                this.lable_ip_text.setString("连接:"+ NetworkConfig.getCurURL());
            }else{
                this.lable_ip_text.setString("无连接");
            }
        }
    },

    //创建玩家名输入框
    createUsernameEditor:function(){
        var editBoxSize = cc.size(356, 53);
        /*****************账户名************************/
        this.edit_username= cc.EditBox.create(editBoxSize, cc.Scale9Sprite.create("#ui_opacity_1-1.png"));
        var panelLoginSize= this.Panel_login.getContentSize();
        this.edit_username.setAnchorPoint(cc.p(0, 0.5));
        this.edit_username.setPosition(panelLoginSize.width* 0.2, panelLoginSize.height* 0.63);

        this.edit_username.setPlaceHolder("输入账户");
        this.edit_username.setPlaceholderFont("微软雅黑", 40);

        this.edit_username.setFont("微软雅黑", 40);
        this.edit_username.setFontColor(cc.color(0, 0, 0));
        this.edit_username.setMaxLength(32);//设置输入框长度32
        this.edit_username.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);//
        this.edit_username.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);//用户可输入除换行符外的任何文本

        this.Panel_login.addChild(this.edit_username);

        this.edit_username.setVisible(false);

        /*****************密码************************/
        this.edit_password= cc.EditBox.create(editBoxSize, cc.Scale9Sprite.create("#ui_opacity_1-1.png"));
        this.edit_password.setAnchorPoint(cc.p(0, 0.5));
        this.edit_password.setPosition(panelLoginSize.width* 0.2, panelLoginSize.height* 0.42);

        this.edit_password.setPlaceHolder("输入密码");
        this.edit_password.setPlaceholderFont("微软雅黑", 40);

        this.edit_password.setFont("微软雅黑", 40);
        this.edit_password.setFontColor(cc.color(0, 0, 0));
        this.edit_password.setMaxLength(32);//设置输入框长度32
        this.edit_password.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);//
        this.edit_password.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);//用户可输入除换行符外的任何文本

        this.Panel_login.addChild(this.edit_password);

        this.edit_password.setVisible(false);


        /*********************IP**********************/
        this.edit_ip= cc.EditBox.create(editBoxSize, cc.Scale9Sprite.create("#ui_opacity_1-1.png"));
        this.edit_ip.setAnchorPoint(cc.p(0, 0));
        this.edit_ip.setPosition(cc.p(editBoxSize.width* 0.1, 0));

        //设置输入框
        this.edit_ip.setString(NetworkConfig.getCurIP());
        this.edit_ip.setFont("微软雅黑", 40);
        this.edit_ip.setFontColor(cc.color(0xB3, 0x9C, 0x77));
        this.edit_ip.setMaxLength(32);//设置输入框长度32
        this.edit_ip.setReturnType(cc.KEYBOARD_RETURNTYPE_DONE);
        this.edit_ip.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE);//用户可输入除换行符外的任何文本

        this.ImageView_ip.addChild(this.edit_ip);

        this.edit_ip.setVisible(true);

        //设置不能已有账户登录
        this.edit_username.setString(ProfileLogin.getLoginUserName());
        this.edit_password.setString(ProfileLogin.getLoginPassword());
    },
    //休眠时输入框不可使用
    setEditorVisible:function(bEnabled, type) {
        this.edit_ip.setVisible(bEnabled);
        if(type== 0){//休眠
            this.edit_username.setVisible(false);
            this.edit_password.setVisible(false);
        }else{
            this.edit_username.setVisible(this.m_bLoginVisible);
            this.edit_password.setVisible(this.m_bLoginVisible);
        }
    },
    //显示或者隐藏Debug模式
    showDebugState:function(){
        var isVisible= Common.isDebugState();
        this.btn_showLog.setVisible(isVisible);
        this.btn_setIp.setVisible(isVisible);
        this.ImageView_ip.setVisible(isVisible);
    },
    //控制《登录》界面的显示或者隐藏
    setPanelLoginVisible:function(isVisible){
        this.Panel_login.setVisible(isVisible);
        this.edit_username.setVisible(isVisible);
        this.edit_password.setVisible(isVisible);
        this.Button_login_close.setVisible(isVisible);
        this.m_bLoginVisible= isVisible;
    },
    //控制《已有账户》界面的显示或者隐藏
    setLoginChooseVisible:function(isVisible){
        this.btn_olduser_login.setVisible(isVisible);
        this.btn_weixin_login.setVisible(isVisible);
        this.btn_reg.setVisible(isVisible);
        this.btn_showLog.setVisible(isVisible);
        this.btn_setIp.setVisible(isVisible);
        this.ImageView_ip.setVisible(isVisible);
        this.lable_ip_text.setVisible(isVisible);
    },
    //登录
    onLogin:function(){
        ProfileLogin.setLoginUserName(Common.deleteAllSpace(this.edit_username.getString()));
        ProfileLogin.setLoginPassword(Common.deleteAllSpace(this.edit_password.getString()));

        if(this.check_agree.getSelectedState()){
            //粗鲁检测一下是否为空
            if(ProfileLogin.getLoginUserName().length!= 0&&ProfileLogin.getLoginPassword().length!= 0){
                console.log(ProfileLogin.getLoginUserName());
                console.log(ProfileLogin.getLoginPassword());
                sendBASEID_LOGIN(ProfileLogin.getLoginUserName(), ProfileLogin.getLoginPassword());
            }else{
                Common.showToast("用户名和密码不能为空！");
            }
        }else{
            Common.showToast("请先同意同趣游戏用户协议！");
        }
    }
};

//Todo:删除用户数据(没有用户列表)
//Todo:使用加载Loading页面
//Todo:同意用户协议(时间不知道需要多长时间)
//Todo:设置IP(不知道有哪些IP地址和端口号)
//Todo:更多用户下拉列表(没有IMEI,获取不到对应的用户列表)

//Todo:联调——心跳
//Todo:联调——重置密码
//Todo:问题——获取用户列表
//Todo:联调——获取用户基本信息