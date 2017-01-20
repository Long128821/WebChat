var JinHuaTableLogic= {
    view:null,//视图
    
	/******工具导出的控件名******/
	Panel_94:null,
	Panel_20:null,
	Panel_PrivateRoom:null,
	Label_CountDownTime:null,
	Panel_roominfo:null,
	Label_RoomNumber:null,
	Label_RoomRule:null,
	Label_MinCoinTxt:null,
	Label_MinCoin:null,
	Label_Holder:null,
	Label_HolderName:null,
	Panel_bg:null,
	Image_bg_left:null,
	Image_bg_right:null,
	Image_title_left:null,
	Image_title_right:null,
	Label_time:null,
	Image_dianchi:null,
	ProgressBar_battery:null,
	Panel_zongxiazhu:null,
	Panel_lunshu:null,
	Label_round:null,
	Label_allRound:null,
	Image_lunshu:null,
	Panel_danzhu:null,
	Label_baseCoin:null,
	Image_danzhu:null,
	Panel_zongxiazhu:null,
	Image_heidi:null,
	Label_sumCoin:null,
	Panel_quickchat:null,
	Image_dibutiao:null,
	Panel_waiting:null,
	Button_geweihao:null,
	Label_geweihao:null,
	Button_wolaishouqian:null,
	Label_wolaishouqian:null,
	Button_guarenlaile:null,
	Label_guarenlaile:null,
	Button_waiting_emo1:null,
	Button_waiting_emo2:null,
	Panel_afterfold:null,
	Button_ptcl:null,
	Label_ptcl:null,
	Button_snh:null,
	Label_snh:null,
	Button_xfnym:null,
	Label_xfnym:null,
	Button_afterfold_emo1:null,
	Button_afterfold_emo2:null,
	Panel_win:null,
	Button_xiexie:null,
	Label_xiexie:null,
	Button_zhunixiaju:null,
	Label_zhunixiaju:null,
	Button_laozi:null,
	Label_laozi:null,
	Button_win_emo1:null,
	Button_win_emo2:null,
	Panel_lose:null,
	Button_yunqicha:null,
	Label_yunqicha:null,
	Button_dadebucuo:null,
	Label_dadebucuo:null,
	Button_nizabushangtian:null,
	Label_nizabushangtian:null,
	Button_lose_emo1:null,
	Button_lose_emo2:null,
	Panel_EXP:null,
	Label_level:null,
	Label_exp:null,
	Image_exp_bg:null,
	ProgressBar_exp:null,
	Image_exp_bar1:null,
	Image_exp_bar2:null,
	Image_exp_bar3:null,
	Panel_dibu:null,
	Image_dibutiao:null,
	Button_tableChat:null,
	Panel_wait:null,
	Button_wait_fold:null,
	Image_qipaizi:null,
	Button_wait_pk:null,
	Image_bipaizi:null,
	Button_wait_raise:null,
	Image_jiazhuzi:null,
	Button_wait_alwaysbet:null,
	Image_genzhuzi:null,
	Panel_otherturn:null,
	Button_otherturn_fold:null,
	Image_qipaizi:null,
	Button_otherturn_pk:null,
	Image_bipaizi:null,
	Button_otherturn_raise:null,
	Image_jiazhuzi:null,
	Button_otherturn_alwaysbet:null,
	Image_genzhuzi:null,
	Image_xia1:null,
	Image_alwaysbet:null,
	Panel_myturn:null,
	Button_mine_fold:null,
	Image_qipaizi:null,
	Button_mine_pk:null,
	Image_bipaizi:null,
	Button_mine_raise:null,
	Image_mine_raise:null,
	Button_mine_call:null,
	Image_genzhuzi:null,
	Panel_canpk:null,
	Button_canpk_fold:null,
	Image_qipaizi:null,
	Button_canpk_pk:null,
	Image_bipaizi:null,
	Button_canpk_raise:null,
	Image_canpk_raise:null,
	Button_canpk_call:null,
	Image_genzhuzi:null,
	Panel_raise:null,
	Button_raise_one:null,
	AtlasLabel_jiner1:null,
	Button_raise_two:null,
	AtlasLabel_jiner2:null,
	Button_raise_three:null,
	AtlasLabel_jiner3:null,
	Button_raise_cancel:null,
	Image_qipaizi:null,
	Panel_allin:null,
	Button_allin_fold:null,
	Image_qipaizi:null,
	Button_allin_pk:null,
	Image_bipaizi:null,
	Button_allin_allin:null,
	Image_jiazhuzi:null,
	Button_allin_call:null,
	Image_genzhuzi:null,
	Panel_onlyraise:null,
	Button_onlyraise_fold:null,
	Image_qipaizi:null,
	Button_onlyraise_pk:null,
	Image_bipaizi:null,
	Button_onlyraise_raise:null,
	Image_jiazhuzi:null,
	Button_onlyraise_call:null,
	Image_genzhuzi:null,
	Panel_onlycall:null,
	Button_onlycall_fold:null,
	Image_qipaizi:null,
	Button_onlycall_pk:null,
	Image_bipaizi:null,
	Button_onlycall_raise:null,
	Image_jiazhuzi:null,
	Button_onlycall_call:null,
	Image_genzhuzi:null,
	Panel_onlypk:null,
	Button_onlypk_fold:null,
	Image_qipaizi:null,
	Button_onlypk_pk:null,
	Image_bipaizi:null,
	Button_onlypk_raise:null,
	Image_jiazhuzi:null,
	Button_onlypk_call:null,
	Image_genzhuzi:null,
	Panel_buttonGroup_right:null,
	Button_tequan:null,
	Image_tequan:null,
	Button_gift:null,
	Image_libaotu:null,
	Button_changeCard:null,
	Image_huanpai:null,
	Image_huanpaikahongdian:null,
	Label_changeCardNum:null,
	Button_noCompare:null,
	Image_jinbitu:null,
	Image_huanpaikahongdian:null,
	Label_noCompareNum:null,
	btn_libao:null,
	btn_renwu:null,
	btn_onlinebonus:null,
	Image_onlinebonus:null,
	Image_daojishi_bg:null,
	Image_onlinebonus_lingqu:null,
	Label_onlinebonus_daojishi:null,
	Image_onlinebonus_shine:null,
	Panel_buttonGroup_left:null,
	Panel_btnList_Left:null,
	Button_more:null,
	ImageView_Notice:null,
	panel_chat:null,
	Panel_matchBegin:null,
	Label_matchBeginTitle:null,
	Button_goMatch:null,
	AtlasLabel_matchTimer:null,
	Button_stayTable:null,
	Image_matchBegin:null,
	Panel_match:null,
	Button_barrage:null,
	Image_barragelock:null,
	Panel_AwardBar:null,
	Label_FirstAward:null,
	Label_FirstAwardNum:null,
	Label_AllAward:null,
	Label_AllAwardNum:null,
	Label_SecondAward:null,
	Label_SecondAwardNum:null,
	Panel_233:null,
	Label_matchBaseCoin:null,
	Label_matchBaseNum:null,
	Label_matchRound:null,
	Label_matchPkRound:null,
	Label_waiting:null,
	Label_match_name:null,
	Panel_234:null,
	Button_quickMatch:null,
	Button_matchRank:null,
	AtlasLabel_myMatchRank:null,

    /********自定义**********/
    labelNotice:null,//公告
    updateTimer:null,//更新系统时间-定时器
    sitButtonGroup:{},//坐下按钮table
    pkButtonGroup:{},//pk按钮table
    remainingTime:0,//房间剩余时间
    onlineRewardTime:0,//在线奖励
    lastStatus:null,//最新状态
    CanRaise:true,//是否可以加注
    canGetOnlinebonus:null,//可否获取在线奖励
    IncrBaoheRound:null,//宝盒奖励,几轮以后算一局
    changeCardRemainTime:0,
    showCard:false,//是否已经看牌
    isAlwaysBetCoin:false,//跟到底
    betData:null,//我的下注数据
    vibrateId:null,//震动定时ID(最后几秒)
    GameData:null,//牌桌数据
    clear:function(){
        this.labelNotice&&this.labelNotice.removeFromParent(true);
        this.updateTimer&&clearInterval(this.updateTimer);
    },
    createView:function(){
        //在内存中，添加图片集
        cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("chat_popup.plist"),Common.getJinHuaResourcePath("chat_popup.png"));
        cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("desk.plist"),Common.getJinHuaResourcePath("desk.png"));
        cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("table_elements.plist"),Common.getJinHuaResourcePath("table_elements.png"));
        cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("poker_cards.plist"), Common.getJinHuaResourcePath("poker_cards.png"));
        cc.spriteFrameCache.addSpriteFrames(Common.getJinHuaResourcePath("table_chips.plist"), Common.getJinHuaResourcePath("table_chips.png"));

        this.initLayer();
        //设置标记
        this.view.setTag(ModuleTable["JinHuaTable"]["Layer"]);
        
        this.initView();
        //初始化牌桌上的数据
        this.initTableData();

        //设置基层
        GameConfig.setCurBaseLayer(GUI_JINHUATABLE);
    },
    
	initView:function(){
		this.Panel_94 = CocoStudio.getComponent(this.view, "Panel_94");//Panel
		this.Panel_20 = CocoStudio.getComponent(this.view, "Panel_20");//Panel
		this.Panel_PrivateRoom = CocoStudio.getComponent(this.view, "Panel_PrivateRoom");//Panel
		this.Label_CountDownTime = CocoStudio.getComponent(this.view, "Label_CountDownTime");//Label
		this.Panel_roominfo = CocoStudio.getComponent(this.view, "Panel_roominfo");//Panel
		this.Label_RoomNumber = CocoStudio.getComponent(this.view, "Label_RoomNumber");//Label
		this.Label_RoomRule = CocoStudio.getComponent(this.view, "Label_RoomRule");//Label
		this.Label_MinCoinTxt = CocoStudio.getComponent(this.view, "Label_MinCoinTxt");//Label
		this.Label_MinCoin = CocoStudio.getComponent(this.view, "Label_MinCoin");//Label
		this.Label_Holder = CocoStudio.getComponent(this.view, "Label_Holder");//Label
		this.Label_HolderName = CocoStudio.getComponent(this.view, "Label_HolderName");//Label
		this.Panel_bg = CocoStudio.getComponent(this.view, "Panel_bg");//Panel
		this.Image_bg_left = CocoStudio.getComponent(this.view, "Image_bg_left");//ImageView
		this.Image_bg_right = CocoStudio.getComponent(this.view, "Image_bg_right");//ImageView
		this.Image_title_left = CocoStudio.getComponent(this.view, "Image_title_left");//ImageView
		this.Image_title_right = CocoStudio.getComponent(this.view, "Image_title_right");//ImageView
		this.Label_time = CocoStudio.getComponent(this.view, "Label_time");//Label
		this.Image_dianchi = CocoStudio.getComponent(this.view, "Image_dianchi");//ImageView
		this.ProgressBar_battery = CocoStudio.getComponent(this.view, "ProgressBar_battery");//LoadingBar
		this.Panel_zongxiazhu = CocoStudio.getComponent(this.view, "Panel_zongxiazhu");//Panel
		this.Panel_lunshu = CocoStudio.getComponent(this.view, "Panel_lunshu");//Panel
		this.Label_round = CocoStudio.getComponent(this.view, "Label_round");//Label
		this.Label_allRound = CocoStudio.getComponent(this.view, "Label_allRound");//Label
		this.Image_lunshu = CocoStudio.getComponent(this.view, "Image_lunshu");//ImageView
		this.Panel_danzhu = CocoStudio.getComponent(this.view, "Panel_danzhu");//Panel
		this.Label_baseCoin = CocoStudio.getComponent(this.view, "Label_baseCoin");//Label
		this.Image_danzhu = CocoStudio.getComponent(this.view, "Image_danzhu");//ImageView
		this.Panel_zongxiazhu = CocoStudio.getComponent(this.view, "Panel_zongxiazhu");//Panel
		this.Image_heidi = CocoStudio.getComponent(this.view, "Image_heidi");//ImageView
		this.Label_sumCoin = CocoStudio.getComponent(this.view, "Label_sumCoin");//Label
		this.Panel_quickchat = CocoStudio.getComponent(this.view, "Panel_quickchat");//Panel
		this.Image_dibutiao = CocoStudio.getComponent(this.view, "Image_dibutiao");//ImageView
		this.Panel_waiting = CocoStudio.getComponent(this.view, "Panel_waiting");//Panel
		this.Button_geweihao = CocoStudio.getComponent(this.view, "Button_geweihao");//Button
		this.Label_geweihao = CocoStudio.getComponent(this.view, "Label_geweihao");//Label
		this.Button_wolaishouqian = CocoStudio.getComponent(this.view, "Button_wolaishouqian");//Button
		this.Label_wolaishouqian = CocoStudio.getComponent(this.view, "Label_wolaishouqian");//Label
		this.Button_guarenlaile = CocoStudio.getComponent(this.view, "Button_guarenlaile");//Button
		this.Label_guarenlaile = CocoStudio.getComponent(this.view, "Label_guarenlaile");//Label
		this.Button_waiting_emo1 = CocoStudio.getComponent(this.view, "Button_waiting_emo1");//Button
		this.Button_waiting_emo2 = CocoStudio.getComponent(this.view, "Button_waiting_emo2");//Button
		this.Panel_afterfold = CocoStudio.getComponent(this.view, "Panel_afterfold");//Panel
		this.Button_ptcl = CocoStudio.getComponent(this.view, "Button_ptcl");//Button
		this.Label_ptcl = CocoStudio.getComponent(this.view, "Label_ptcl");//Label
		this.Button_snh = CocoStudio.getComponent(this.view, "Button_snh");//Button
		this.Label_snh = CocoStudio.getComponent(this.view, "Label_snh");//Label
		this.Button_xfnym = CocoStudio.getComponent(this.view, "Button_xfnym");//Button
		this.Label_xfnym = CocoStudio.getComponent(this.view, "Label_xfnym");//Label
		this.Button_afterfold_emo1 = CocoStudio.getComponent(this.view, "Button_afterfold_emo1");//Button
		this.Button_afterfold_emo2 = CocoStudio.getComponent(this.view, "Button_afterfold_emo2");//Button
		this.Panel_win = CocoStudio.getComponent(this.view, "Panel_win");//Panel
		this.Button_xiexie = CocoStudio.getComponent(this.view, "Button_xiexie");//Button
		this.Label_xiexie = CocoStudio.getComponent(this.view, "Label_xiexie");//Label
		this.Button_zhunixiaju = CocoStudio.getComponent(this.view, "Button_zhunixiaju");//Button
		this.Label_zhunixiaju = CocoStudio.getComponent(this.view, "Label_zhunixiaju");//Label
		this.Button_laozi = CocoStudio.getComponent(this.view, "Button_laozi");//Button
		this.Label_laozi = CocoStudio.getComponent(this.view, "Label_laozi");//Label
		this.Button_win_emo1 = CocoStudio.getComponent(this.view, "Button_win_emo1");//Button
		this.Button_win_emo2 = CocoStudio.getComponent(this.view, "Button_win_emo2");//Button
		this.Panel_lose = CocoStudio.getComponent(this.view, "Panel_lose");//Panel
		this.Button_yunqicha = CocoStudio.getComponent(this.view, "Button_yunqicha");//Button
		this.Label_yunqicha = CocoStudio.getComponent(this.view, "Label_yunqicha");//Label
		this.Button_dadebucuo = CocoStudio.getComponent(this.view, "Button_dadebucuo");//Button
		this.Label_dadebucuo = CocoStudio.getComponent(this.view, "Label_dadebucuo");//Label
		this.Button_nizabushangtian = CocoStudio.getComponent(this.view, "Button_nizabushangtian");//Button
		this.Label_nizabushangtian = CocoStudio.getComponent(this.view, "Label_nizabushangtian");//Label
		this.Button_lose_emo1 = CocoStudio.getComponent(this.view, "Button_lose_emo1");//Button
		this.Button_lose_emo2 = CocoStudio.getComponent(this.view, "Button_lose_emo2");//Button
		this.Panel_EXP = CocoStudio.getComponent(this.view, "Panel_EXP");//Panel
		this.Label_level = CocoStudio.getComponent(this.view, "Label_level");//Label
		this.Label_exp = CocoStudio.getComponent(this.view, "Label_exp");//Label
		this.Image_exp_bg = CocoStudio.getComponent(this.view, "Image_exp_bg");//ImageView
		this.ProgressBar_exp = CocoStudio.getComponent(this.view, "ProgressBar_exp");//LoadingBar
		this.Image_exp_bar1 = CocoStudio.getComponent(this.view, "Image_exp_bar1");//ImageView
		this.Image_exp_bar2 = CocoStudio.getComponent(this.view, "Image_exp_bar2");//ImageView
		this.Image_exp_bar3 = CocoStudio.getComponent(this.view, "Image_exp_bar3");//ImageView
		this.Panel_dibu = CocoStudio.getComponent(this.view, "Panel_dibu");//Panel
		this.Image_dibutiao = CocoStudio.getComponent(this.view, "Image_dibutiao");//ImageView
		this.Button_tableChat = CocoStudio.getComponent(this.view, "Button_tableChat");//Button
		this.Panel_wait = CocoStudio.getComponent(this.view, "Panel_wait");//Panel
		this.Button_wait_fold = CocoStudio.getComponent(this.view, "Button_wait_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_wait_pk = CocoStudio.getComponent(this.view, "Button_wait_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_wait_raise = CocoStudio.getComponent(this.view, "Button_wait_raise");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_wait_alwaysbet = CocoStudio.getComponent(this.view, "Button_wait_alwaysbet");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_otherturn = CocoStudio.getComponent(this.view, "Panel_otherturn");//Panel
		this.Button_otherturn_fold = CocoStudio.getComponent(this.view, "Button_otherturn_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_otherturn_pk = CocoStudio.getComponent(this.view, "Button_otherturn_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_otherturn_raise = CocoStudio.getComponent(this.view, "Button_otherturn_raise");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_otherturn_alwaysbet = CocoStudio.getComponent(this.view, "Button_otherturn_alwaysbet");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Image_xia1 = CocoStudio.getComponent(this.view, "Image_xia1");//ImageView
		this.Image_alwaysbet = CocoStudio.getComponent(this.view, "Image_alwaysbet");//ImageView
		this.Panel_myturn = CocoStudio.getComponent(this.view, "Panel_myturn");//Panel
		this.Button_mine_fold = CocoStudio.getComponent(this.view, "Button_mine_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_mine_pk = CocoStudio.getComponent(this.view, "Button_mine_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_mine_raise = CocoStudio.getComponent(this.view, "Button_mine_raise");//Button
		this.Image_mine_raise = CocoStudio.getComponent(this.view, "Image_mine_raise");//ImageView
		this.Button_mine_call = CocoStudio.getComponent(this.view, "Button_mine_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_canpk = CocoStudio.getComponent(this.view, "Panel_canpk");//Panel
		this.Button_canpk_fold = CocoStudio.getComponent(this.view, "Button_canpk_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_canpk_pk = CocoStudio.getComponent(this.view, "Button_canpk_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_canpk_raise = CocoStudio.getComponent(this.view, "Button_canpk_raise");//Button
		this.Image_canpk_raise = CocoStudio.getComponent(this.view, "Image_canpk_raise");//ImageView
		this.Button_canpk_call = CocoStudio.getComponent(this.view, "Button_canpk_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_raise = CocoStudio.getComponent(this.view, "Panel_raise");//Panel
		this.Button_raise_one = CocoStudio.getComponent(this.view, "Button_raise_one");//Button
		this.AtlasLabel_jiner1 = CocoStudio.getComponent(this.view, "AtlasLabel_jiner1");//LabelAtlas
		this.Button_raise_two = CocoStudio.getComponent(this.view, "Button_raise_two");//Button
		this.AtlasLabel_jiner2 = CocoStudio.getComponent(this.view, "AtlasLabel_jiner2");//LabelAtlas
		this.Button_raise_three = CocoStudio.getComponent(this.view, "Button_raise_three");//Button
		this.AtlasLabel_jiner3 = CocoStudio.getComponent(this.view, "AtlasLabel_jiner3");//LabelAtlas
		this.Button_raise_cancel = CocoStudio.getComponent(this.view, "Button_raise_cancel");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Panel_allin = CocoStudio.getComponent(this.view, "Panel_allin");//Panel
		this.Button_allin_fold = CocoStudio.getComponent(this.view, "Button_allin_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_allin_pk = CocoStudio.getComponent(this.view, "Button_allin_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_allin_allin = CocoStudio.getComponent(this.view, "Button_allin_allin");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_allin_call = CocoStudio.getComponent(this.view, "Button_allin_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_onlyraise = CocoStudio.getComponent(this.view, "Panel_onlyraise");//Panel
		this.Button_onlyraise_fold = CocoStudio.getComponent(this.view, "Button_onlyraise_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_onlyraise_pk = CocoStudio.getComponent(this.view, "Button_onlyraise_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_onlyraise_raise = CocoStudio.getComponent(this.view, "Button_onlyraise_raise");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_onlyraise_call = CocoStudio.getComponent(this.view, "Button_onlyraise_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_onlycall = CocoStudio.getComponent(this.view, "Panel_onlycall");//Panel
		this.Button_onlycall_fold = CocoStudio.getComponent(this.view, "Button_onlycall_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_onlycall_pk = CocoStudio.getComponent(this.view, "Button_onlycall_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_onlycall_raise = CocoStudio.getComponent(this.view, "Button_onlycall_raise");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_onlycall_call = CocoStudio.getComponent(this.view, "Button_onlycall_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_onlypk = CocoStudio.getComponent(this.view, "Panel_onlypk");//Panel
		this.Button_onlypk_fold = CocoStudio.getComponent(this.view, "Button_onlypk_fold");//Button
		this.Image_qipaizi = CocoStudio.getComponent(this.view, "Image_qipaizi");//ImageView
		this.Button_onlypk_pk = CocoStudio.getComponent(this.view, "Button_onlypk_pk");//Button
		this.Image_bipaizi = CocoStudio.getComponent(this.view, "Image_bipaizi");//ImageView
		this.Button_onlypk_raise = CocoStudio.getComponent(this.view, "Button_onlypk_raise");//Button
		this.Image_jiazhuzi = CocoStudio.getComponent(this.view, "Image_jiazhuzi");//ImageView
		this.Button_onlypk_call = CocoStudio.getComponent(this.view, "Button_onlypk_call");//Button
		this.Image_genzhuzi = CocoStudio.getComponent(this.view, "Image_genzhuzi");//ImageView
		this.Panel_buttonGroup_right = CocoStudio.getComponent(this.view, "Panel_buttonGroup_right");//Panel
		this.Button_tequan = CocoStudio.getComponent(this.view, "Button_tequan");//Button
		this.Image_tequan = CocoStudio.getComponent(this.view, "Image_tequan");//ImageView
		this.Button_gift = CocoStudio.getComponent(this.view, "Button_gift");//Button
		this.Image_libaotu = CocoStudio.getComponent(this.view, "Image_libaotu");//ImageView
		this.Button_changeCard = CocoStudio.getComponent(this.view, "Button_changeCard");//Button
		this.Image_huanpai = CocoStudio.getComponent(this.view, "Image_huanpai");//ImageView
		this.Image_huanpaikahongdian = CocoStudio.getComponent(this.view, "Image_huanpaikahongdian");//ImageView
		this.Label_changeCardNum = CocoStudio.getComponent(this.view, "Label_changeCardNum");//Label
		this.Button_noCompare = CocoStudio.getComponent(this.view, "Button_noCompare");//Button
		this.Image_jinbitu = CocoStudio.getComponent(this.view, "Image_jinbitu");//ImageView
		this.Image_huanpaikahongdian = CocoStudio.getComponent(this.view, "Image_huanpaikahongdian");//ImageView
		this.Label_noCompareNum = CocoStudio.getComponent(this.view, "Label_noCompareNum");//Label
		this.btn_libao = CocoStudio.getComponent(this.view, "btn_libao");//Button
		this.btn_renwu = CocoStudio.getComponent(this.view, "btn_renwu");//Button
		this.btn_onlinebonus = CocoStudio.getComponent(this.view, "btn_onlinebonus");//Button
		this.Image_onlinebonus = CocoStudio.getComponent(this.view, "Image_onlinebonus");//ImageView
		this.Image_daojishi_bg = CocoStudio.getComponent(this.view, "Image_daojishi_bg");//ImageView
		this.Image_onlinebonus_lingqu = CocoStudio.getComponent(this.view, "Image_onlinebonus_lingqu");//ImageView
		this.Label_onlinebonus_daojishi = CocoStudio.getComponent(this.view, "Label_onlinebonus_daojishi");//Label
		this.Image_onlinebonus_shine = CocoStudio.getComponent(this.view, "Image_onlinebonus_shine");//ImageView
		this.Panel_buttonGroup_left = CocoStudio.getComponent(this.view, "Panel_buttonGroup_left");//Panel
		this.Panel_btnList_Left = CocoStudio.getComponent(this.view, "Panel_btnList_Left");//Panel
		this.Button_more = CocoStudio.getComponent(this.view, "Button_more");//Button
		this.ImageView_Notice = CocoStudio.getComponent(this.view, "ImageView_Notice");//ImageView
		this.panel_chat = CocoStudio.getComponent(this.view, "panel_chat");//Panel
		this.Panel_matchBegin = CocoStudio.getComponent(this.view, "Panel_matchBegin");//Panel
		this.Label_matchBeginTitle = CocoStudio.getComponent(this.view, "Label_matchBeginTitle");//Label
		this.Button_goMatch = CocoStudio.getComponent(this.view, "Button_goMatch");//Button
		this.AtlasLabel_matchTimer = CocoStudio.getComponent(this.view, "AtlasLabel_matchTimer");//LabelAtlas
		this.Button_stayTable = CocoStudio.getComponent(this.view, "Button_stayTable");//Button
		this.Image_matchBegin = CocoStudio.getComponent(this.view, "Image_matchBegin");//ImageView
		this.Panel_match = CocoStudio.getComponent(this.view, "Panel_match");//Panel
		this.Button_barrage = CocoStudio.getComponent(this.view, "Button_barrage");//Button
		this.Image_barragelock = CocoStudio.getComponent(this.view, "Image_barragelock");//ImageView
		this.Panel_AwardBar = CocoStudio.getComponent(this.view, "Panel_AwardBar");//Panel
		this.Label_FirstAward = CocoStudio.getComponent(this.view, "Label_FirstAward");//Label
		this.Label_FirstAwardNum = CocoStudio.getComponent(this.view, "Label_FirstAwardNum");//Label
		this.Label_AllAward = CocoStudio.getComponent(this.view, "Label_AllAward");//Label
		this.Label_AllAwardNum = CocoStudio.getComponent(this.view, "Label_AllAwardNum");//Label
		this.Label_SecondAward = CocoStudio.getComponent(this.view, "Label_SecondAward");//Label
		this.Label_SecondAwardNum = CocoStudio.getComponent(this.view, "Label_SecondAwardNum");//Label
		this.Panel_233 = CocoStudio.getComponent(this.view, "Panel_233");//Panel
		this.Label_matchBaseCoin = CocoStudio.getComponent(this.view, "Label_matchBaseCoin");//Label
		this.Label_matchBaseNum = CocoStudio.getComponent(this.view, "Label_matchBaseNum");//Label
		this.Label_matchRound = CocoStudio.getComponent(this.view, "Label_matchRound");//Label
		this.Label_matchPkRound = CocoStudio.getComponent(this.view, "Label_matchPkRound");//Label
		this.Label_waiting = CocoStudio.getComponent(this.view, "Label_waiting");//Label
		this.Label_match_name = CocoStudio.getComponent(this.view, "Label_match_name");//Label
		this.Panel_234 = CocoStudio.getComponent(this.view, "Panel_234");//Panel
		this.Button_quickMatch = CocoStudio.getComponent(this.view, "Button_quickMatch");//Button
		this.Button_matchRank = CocoStudio.getComponent(this.view, "Button_matchRank");//Button
		this.AtlasLabel_myMatchRank = CocoStudio.getComponent(this.view, "AtlasLabel_myMatchRank");//LabelAtlas
	},

    initLayer:function(){
		var gui = GUI_JINHUATABLE;
        //适配方案 Pad加黑边
        this.view = CocoStudio.createView("res/JinHuaTable.json");
        GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		if(GameConfig.RealProportion > GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 1136x640
//			this.view = CocoStudio.createView("res/JinHuaTable.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.EXACT_FIT);
//		}else if(GameConfig.RealProportion <= GameConfig.SCREEN_PROPORTION_SMALL){
//			//适配方案 Pad加黑边
//			this.view = CocoStudio.createView("res/JinHuaTable.json");
//			GameConfig.setCurrentScreenResolution(this.view, gui, 1136, 640, cc.ResolutionPolicy.SHOW_ALL);
//		}
	},

	callback_Panel_PrivateRoom:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            console.log("callback_Panel_PrivateRoom");
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_roominfo:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            console.log("callback_Panel_roominfo");
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_lunshu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            console.log("callback_Panel_lunshu");
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_danzhu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            console.log("callback_Panel_danzhu");
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Panel_zongxiazhu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            console.log("callback_Panel_zongxiazhu");
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_geweihao:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_geweihao.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_wolaishouqian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_wolaishouqian.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_guarenlaile:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_guarenlaile.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_waiting_emo1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,3);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_waiting_emo2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,4);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_ptcl:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_ptcl.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_snh:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_snh.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_xfnym:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_xfnym.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_afterfold_emo1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,2);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_afterfold_emo2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,14);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_xiexie:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_xiexie.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_zhunixiaju:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_zhunixiaju.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_laozi:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_laozi.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_win_emo1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,10);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_win_emo2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,3);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_yunqicha:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_yunqicha.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_dadebucuo:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_dadebucuo.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_nizabushangtian:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_TEXT,JinHuaTableLogic.Label_nizabushangtian.getStringValue());
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_lose_emo1:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,8);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_lose_emo2:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            sendJHID_CHAT_REQ(TYPE_CHAT_COMMON_V2,6);
            JinHuaTableLogic.hideAllQuickChatButton();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_tableChat:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_otherturn_fold:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onFold();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_otherturn_alwaysbet:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onAlwaysBetCoin();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_mine_fold:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onFold();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_mine_raise:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onRaise();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_mine_call:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onCall();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_canpk_fold:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onFold();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_canpk_pk:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onPK();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_canpk_raise:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onRaise();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_canpk_call:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onCall();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_raise_one:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onRaise_1();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_raise_two:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onRaise_2();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_raise_three:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onRaise_3();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_raise_cancel:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onRaise_Cancel();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_allin_fold:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            for(var i in Profile_JinHuaGameData.getPlayers()){
                console.log(Profile_JinHuaGameData.getPlayers()[i]);
            }
            JinHuaTableLogic.onFold();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_allin_pk:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onPK();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_allin_allin:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_allin_call:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_onlyraise_raise:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onRaise();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_onlycall_call:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_onlypk_pk:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onPK();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_tequan:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_gift:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_changeCard:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_noCompare:function(pSender, event){
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

	callback_btn_renwu:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            console.log("任务列表");
            MvcEngine.createModule(GUI_RENWU);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_btn_onlinebonus:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            JinHuaTableLogic.onLineBonus();
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_more:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起
            MvcEngine.createModule(GUI_JINHUATABLEMORE);
		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_goMatch:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_stayTable:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_barrage:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Image_barragelock:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_quickMatch:function(pSender, event){
		if(event == ccui.Widget.TOUCH_BEGAN){
			//按下

		}else if(event == ccui.Widget.TOUCH_ENDED){
			//抬起

		}else if(event == ccui.Widget.TOUCH_CANCELED){
			//取消

		}
	},

	callback_Button_matchRank:function(pSender, event){
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
    	Frameworks.addSlot2Signal(DBID_BACKPACK_GOODS_COUNT, ProfileJinHuaTable.slot_DBID_BACKPACK_GOODS_COUNT);//更新背包数量
    	Frameworks.addSlot2Signal(JHID_QUIT_TABLE, ProfileJinHuaTable.slot_JHID_QUIT_TABLE);//退出牌桌
    	Frameworks.addSlot2Signal(JINHUA_MGR_NOTICE, ProfileJinHuaTable.slot_JINHUA_MGR_NOTICE);//更新公告信息
    	Frameworks.addSlot2Signal(JHID_STAND_UP, ProfileJinHuaTable.slot_JHID_STAND_UP);//站起
    	Frameworks.addSlot2Signal(JHID_SIT_DOWN, ProfileJinHuaTable.slot_JHID_SIT_DOWN);//坐下
    	Frameworks.addSlot2Signal(JHID_READY, ProfileJinHuaTable.slot_JHID_READY);//准备
    	Frameworks.addSlot2Signal(JHID_GET_BAOHE_STEP_INFO, ProfileJinHuaTable.slot_JHID_GET_BAOHE_STEP_INFO);//获取在线奖励
    	Frameworks.addSlot2Signal(JHID_GET_ONLINE_REWARD, ProfileJinHuaTable.slot_JHID_GET_ONLINE_REWARD);//获取在线奖励
    	Frameworks.addSlot2Signal(JHID_BET, ProfileJinHuaTable.slot_JHID_BET);//下注押注
    	Frameworks.addSlot2Signal(JHID_CHAT, ProfileJinHuaTable.slot_JHID_CHAT);//聊天
        Frameworks.addSlot2Signal(JINHUA_MGR_SETTING, ProfileJinHuaTable.slot_JINHUA_MGR_SETTING);//金花游戏数据
        Frameworks.addSlot2Signal(DBID_USER_INFO, ProfileJinHuaTable.slot_DBID_USER_INFO);//更新用户数据（自己或者玩家）
        Frameworks.addSlot2Signal(JHID_INIT_CARDS, ProfileJinHuaTable.slot_JHID_INIT_CARDS);//发牌
        Frameworks.addSlot2Signal(JHID_DISCARD, ProfileJinHuaTable.slot_JHID_DISCARD);//弃牌
        Frameworks.addSlot2Signal(JHID_GAME_RESULT, ProfileJinHuaTable.slot_JHID_GAME_RESULT);//本局结算
        Frameworks.addSlot2Signal(JHID_PK, ProfileJinHuaTable.slot_JHID_PK);//比牌
        Frameworks.addSlot2Signal(JHID_LOOK_CARDS, ProfileJinHuaTable.slot_JHID_LOOK_CARDS);//看牌
        Frameworks.addSlot2Signal(JHID_SHOW_CARDS, ProfileJinHuaTable.slot_JHID_SHOW_CARDS);//展示牌
},
    //移除信号
    removeSlot:function(){
    	Frameworks.removeSlotFromSignal(DBID_BACKPACK_GOODS_COUNT, ProfileJinHuaTable.slot_DBID_BACKPACK_GOODS_COUNT);
    	Frameworks.removeSlotFromSignal(JHID_QUIT_TABLE, ProfileJinHuaTable.slot_JHID_QUIT_TABLE);
    	Frameworks.removeSlotFromSignal(JINHUA_MGR_NOTICE, ProfileJinHuaTable.slot_JINHUA_MGR_NOTICE);
    	Frameworks.removeSlotFromSignal(JHID_STAND_UP, ProfileJinHuaTable.slot_JHID_STAND_UP);
    	Frameworks.removeSlotFromSignal(JHID_SIT_DOWN, ProfileJinHuaTable.slot_JHID_SIT_DOWN);
    	Frameworks.removeSlotFromSignal(JHID_READY, ProfileJinHuaTable.slot_JHID_READY);
    	Frameworks.removeSlotFromSignal(JHID_GET_BAOHE_STEP_INFO, ProfileJinHuaTable.slot_JHID_GET_BAOHE_STEP_INFO);
    	Frameworks.removeSlotFromSignal(JHID_GET_ONLINE_REWARD, ProfileJinHuaTable.slot_JHID_GET_ONLINE_REWARD);
    	Frameworks.removeSlotFromSignal(JHID_BET, ProfileJinHuaTable.slot_JHID_BET);
    	Frameworks.removeSlotFromSignal(JHID_CHAT, ProfileJinHuaTable.slot_JHID_CHAT);
    	Frameworks.removeSlotFromSignal(JINHUA_MGR_SETTING, ProfileJinHuaTable.slot_JINHUA_MGR_SETTING);
    	Frameworks.removeSlotFromSignal(DBID_USER_INFO, ProfileJinHuaTable.slot_DBID_USER_INFO);
    	Frameworks.removeSlotFromSignal(JHID_INIT_CARDS, ProfileJinHuaTable.slot_JHID_INIT_CARDS);
    	Frameworks.removeSlotFromSignal(JHID_DISCARD, ProfileJinHuaTable.slot_JHID_DISCARD);
    	Frameworks.removeSlotFromSignal(JHID_GAME_RESULT, ProfileJinHuaTable.slot_JHID_GAME_RESULT);
    	Frameworks.removeSlotFromSignal(JHID_PK, ProfileJinHuaTable.slot_JHID_PK);
    	Frameworks.removeSlotFromSignal(JHID_LOOK_CARDS, ProfileJinHuaTable.slot_JHID_LOOK_CARDS);
    	Frameworks.removeSlotFromSignal(JHID_SHOW_CARDS, ProfileJinHuaTable.slot_JHID_SHOW_CARDS);
    },
    
    //释放界面的私有数据
    releaseData:function(){
        cc.spriteFrameCache.removeSpriteFramesFromFile(Common.getJinHuaResourcePath("chat_popup.plist"));
        cc.spriteFrameCache.removeSpriteFramesFromFile(Common.getJinHuaResourcePath("desk.plist"));
        cc.spriteFrameCache.removeSpriteFramesFromFile(Common.getJinHuaResourcePath("table_elements.plist"));
        cc.spriteFrameCache.removeSpriteFramesFromFile(Common.getJinHuaResourcePath("poker_cards.plist"));
        cc.spriteFrameCache.removeSpriteFramesFromFile(Common.getJinHuaResourcePath("table_chips.plist"));
        //关闭更新系统时间-定时器
        clearInterval(this.updateTimer);
        delete this.updateTimer;
        if(this.labelNotice!= null){
            this.labelNotice.stopAllActions();
            delete this.labelNotice;
        }
    },
    
    requestMsg:function(){
    
    },
    //清理数据
    clear:function(){

    },
    //更新背包道具数量
    updateBACKPACK_GOODS_COUNT:function(){
        sendDBID_BACKPACK_GOODS_COUNT(GameConfig.GOODS_ID_SUPERIORFACE);
        sendDBID_BACKPACK_GOODS_COUNT(GameConfig.GOODS_ID_CHANGECARD);
        sendDBID_BACKPACK_GOODS_COUNT(GameConfig.GOODS_ID_NO_PK);
    },
    //更新背包(禁比、换牌、高级表情)
    updateDBID_BACKPACK_GOODS_COUNT:function(){
        var backPackGoodsCountData= Profile_JinHuaGameData.getBackPackGoodsCountData();
        if(backPackGoodsCountData.ItemID== GameConfig.GOODS_ID_CHANGECARD){//换牌
            var GameData= Profile_JinHuaGameData.getGameData();
            var roomInfo= Profile_JinHuaRoomData.getRoomByID(GameData.roomId);

            //是否为千王场(换牌卡)
            if(((roomInfo&&roomInfo.roomType== Profile_JinHuaRoomData.TYPE_QIANWANG)
                ||(GameData.BUILDRoomType!=null&&GameData.BUILDRoomType== Profile_JinHuaRoomData.TYPE_QIANWANG))){
                //更新换牌卡个数
                this.updateChangeCardCountText();
                //更新换牌卡数量
                this.updateChangeCardCount(Profile_JinHuaGameData.getIsMatch());
            }else{
                //更新换牌卡个数
                this.updateChangeCardCountText();
                //更新换牌卡数量
                this.updateChangeCardCount(Profile_JinHuaGameData.getIsMatch());
                //不可点击状态
                this.Button_changeCard.setOpacity(80);
                this.Image_huanpai.setOpacity(80);
                this.Image_huanpaikahongdian.setOpacity(80);
                this.Label_changeCardNum.setOpacity(80);
            }
        }else if(backPackGoodsCountData.ItemID== GameConfig.GOODS_ID_NO_PK){//禁比
            this.updateNoPkCountText();
        }
    },
    //当前宝盒进度
    updateJHID_GET_BAOHE_STEP_INFO:function(){
        var BaoheStepInfoTable = Profile_JinHuaOnlineReward.getBaoheStepInfoTable();
        var GameData= Profile_JinHuaGameData.getGameData();
        //解决Bug:玩家自身超时站起,不显示在线时长奖励
        if(BaoheStepInfoTable["nowNumberMax"]== null
            ||BaoheStepInfoTable["nowNumberMax"]== undefined
            ||GameData.mySSID== null
            ||GameData.mySSID== undefined){
            this.btn_onlinebonus.setVisible(false);
            this.btn_onlinebonus.setTouchEnabled(false);
            return;
        }
        this.btn_onlinebonus.setVisible(true);
        this.btn_onlinebonus.setTouchEnabled(true);
        this.Label_onlinebonus_daojishi.setText(BaoheStepInfoTable["nowNumber"]+ "/" +BaoheStepInfoTable["nowNumberMax"]);
        if(BaoheStepInfoTable["nowNumber"] >= BaoheStepInfoTable["nowNumberMax"]){
            this.canGetOnlinebonus = 0;
            this.Label_onlinebonus_daojishi.setVisible(false);
            this.Image_onlinebonus_lingqu.setVisible(true);
            this.Image_onlinebonus_shine.setVisible(true);
            this.btn_onlinebonus.setRotation(0);
            this.btn_onlinebonus.stopAllActions();
            GamePub.showShakeAnimate(this.btn_onlinebonus);
        }else{
            this.canGetOnlinebonus = BaoheStepInfoTable["nowNumberMax"] - BaoheStepInfoTable["nowNumber"]
        }
        this.IncrBaoheRound = BaoheStepInfoTable["IncrBaoheRound"]
    },
    //牌桌领取在线时长奖励
    updateJHID_GET_ONLINE_REWARD:function(){
        var JinGetOnlineRewardTable = Profile_JinHuaOnlineReward.getGetOnlineRewardTable();
        if(JinGetOnlineRewardTable== null|| JinGetOnlineRewardTable["result"]== null){
            Common.showToast("领取奖励出错",2);
            return;
        }

        if(JinGetOnlineRewardTable["result"] == 1){
            //领取在线时长奖励成功
            this.btn_onlinebonus.stopAllActions();
            this.btn_onlinebonus.setRotation(0);
            this.Label_onlinebonus_daojishi.setVisible(true);
            this.Image_onlinebonus_shine.setVisible(false);
            this.Image_onlinebonus_lingqu.setVisible(false);
            Common.showToast(JinGetOnlineRewardTable["message"],3);
            if(JinGetOnlineRewardTable["nowNumberMax"]!= null&&JinGetOnlineRewardTable["nowNumberMax"]!= undefined){
                this.canGetOnlinebonus = JinGetOnlineRewardTable["nowNumberMax"] - JinGetOnlineRewardTable["nowNumber"]
                this.btn_onlinebonus.setVisible(true);
                this.btn_onlinebonus.setTouchEnabled(true);
                this.Label_onlinebonus_daojishi.setText(JinGetOnlineRewardTable["nowNumber"] + "/" +JinGetOnlineRewardTable["nowNumberMax"]);
            }else{
                this.btn_onlinebonus.setVisible(false);
                this.btn_onlinebonus.setTouchEnabled(false);
            }
            //设置我当前的金币
            var playerTable = Profile_JinHuaGameData.getPlayers();
            var GameData= Profile_JinHuaGameData.getGameData();
            for(var key in playerTable){
                if(playerTable[key]!= null
                    &&playerTable[key].userId!= null
                    &&playerTable[key].userId == GameData["players"][key].userId == profile_user.getSelfUserID()
                    &&GameData.mySSID!= null){
                    playerTable[key].changeCoinNumOnView(JinGetOnlineRewardTable["nowCoin"]);
                }
            }
        }else {
            //领取在线时长奖励失败
            Common.showToast(JinGetOnlineRewardTable["message"], 3)
        }
    },
    /**
     * Func:下注应答
     */
    updateJHID_BET:function(){
        JinHuaTablePlayer.updateTableAfterBetCoinByServer();
    },
    //聊天
    updateJHID_CHAT:function(){
        var chatMsg= Profile_JinHuaGameData.getChatMsg();
        JinHuaTablePlayer.updateTableAfterPlayerChatServerBack(chatMsg);
    },
    //站起
    updateJHID_STAND_UP:function(){
        JinHuaTablePlayer.updateTableAfterStandUpByServer();
    },
    //坐下
    updateJHID_SIT_DOWN:function(){
        JinHuaTablePlayer.updateTableSitDownByServer();
    },
    //准备
    updateJHID_READY:function(){
        JinHuaTablePlayer.updateTableAfterPlayerReadyServerBack();
    },
    //发牌
    updateJHID_INIT_CARDS:function(){
        JinHuaTableCard.updateTableAfterSendCardByServer();
    },
    //弃牌
    updateJHID_DISCARD:function(){
        //隐藏看牌提示
        JinHuaTableCheckButton.setCheckVisible(false);

        JinHuaTablePlayer.updateTableAfterFoldCardByServer();
    },
    //本局结算
    updateJHID_GAME_RESULT:function(){
        //清空所有的定时器
        JinHuaTablePlayer.clearAllTimer();
        //本局结算后，操作一些数据
        this.initGameDataAfterGameResult();
        //显示结果
        JinHuaTableCard.startResultShow();
        //本局结算,不可操作
        this.disableAllTableOperationButtons();
        //隐藏看牌提示
        JinHuaTableCheckButton.setCheckVisible(false);
        //获取在线时长
        if(this.GameData.roomId!= null){
            sendJHID_GET_BAOHE_STEP_INFO(this.GameData.roomId);
        }
        //显示本局经验加成
        this.showAddExpAnimation();
    },
    //更新比牌动画
    updateJHID_PK:function(){
        //暂停游戏结束
        MessageCenter.pauseMessage(JHID_GAME_RESULT);

        var PKData= Profile_JinHuaGameData.getPKData();
        if(PKData.result== 0){//比牌失败
            Common.showToast(PKData["message"], 1);
            return;
        }
        JinHuaPKAnim.startPK(PKData);
        //更新牌桌上的牌桌信息
        this.updateTableTitle();
        this.updateIsCanChangeCardState()
    },
    //看牌
    updateJHID_LOOK_CARDS:function(){
        var checkCardData= Profile_JinHuaGameData.getCheckCardData();
        //看牌失败
        if(checkCardData.Result== null||checkCardData.Result== undefined||checkCardData.Result== 2){
            JinHuaTableCard.setCheckVisible(true);
        }
        JinHuaTablePlayer.updateTableAfterLookCardByServer(checkCardData);
    },
    //展示牌
    updateJHID_SHOW_CARDS:function(){
        var showCardData= Profile_JinHuaGameData.getShowCardData();
        showCardData.CSID = Profile_JinHuaGameData.getUserCSID(showCardData.seatID);
        JinHuaTableCoin.createAllInBetCoins(showCardData.CSID, showCardData.thisTimeBetCoins);

        //设置下一个玩家
        JinHuaTablePlayer.refreshCurrentPlayer(showCardData.nextPlayer);
        //更新牌桌上的数据
        this.updateTableTitle();
        //更新是否可换牌提示
        this.updateIsCanChangeCardState();
    },
    //初始化界面
    initTableData:function(){
        //Todo:清理数据
        this.clear();
        JinHuaTableCard.clearCards();
        JinHuaTableCoin.clear();//玩空牌桌上的金币
        JinHuaTablePlayer.clear();//
        JinHuaTableTips.clear();
        JinHuaPKAnim.clear();

        //更新背包道具数量
        this.updateBACKPACK_GOODS_COUNT();
        //初始化牌桌(玩家、筹码)
        Profile_JinHuaTableConfig.initTableElmentsCoordinate();

        this.GameData= Profile_JinHuaGameData.getGameData();
        //请求在线奖励信息
        if(this.GameData.roomId != null){
            sendJHID_GET_BAOHE_STEP_INFO(this.GameData.roomId);
        }
        //初始化牌桌背景
        this.initBg();

        this.Panel_buttonGroup_right.setVisible(true);
        this.btn_renwu.setVisible(true);
        this.btn_renwu.setTouchEnabled(true);
    },
    //根据是否为比赛，更新换牌卡的数量
    updateChangeCardCount:function(isMatch){
        if(isMatch){
            this.Button_changeCard.setVisible(true);
            this.Button_changeCard.setTouchEnabled(true);
        }
    },
    //更新换牌卡个数
    updateChangeCardCountText:function(){
        //获取位数
        var digitCount= Profile_JinHuaTableConfig.remainChangeCardCnt.toString().length;

        if(digitCount> 2){
            JinHuaTableLogic.Label_changeCardNum.setString("99+");
        }else{
            JinHuaTableLogic.Label_changeCardNum.setString(Profile_JinHuaTableConfig.remainChangeCardCnt);
        }
    },
    //更新禁比卡的数量
    updateNoPkCountText:function(){
        //获取位数
        var digitCount= Profile_JinHuaTableConfig.remainNoPKCnt.toString().length;
        if(digitCount> 2){
            JinHuaTableLogic.Label_noCompareNum.setString("99+");
        }else{
            JinHuaTableLogic.Label_noCompareNum.setString(Profile_JinHuaTableConfig.remainNoPKCnt);
        }
    },
    //初始化背景
    initBg:function(){
        //初始化<坐下>按钮
        this.initSitBtn();
        //初始化<Pk>按钮
        this.initPkBtn();
        //创建<看牌>提示
        this.initCheckButton();
        //牌桌标题
        this.initTableTitle();
        //牌桌类型
        this.initTableType();
        //桌面上的玩家(自身玩家重新坐下)
        if(ProfileJinHuaTable.JinHuaTablePlayer){
            ProfileJinHuaTable.JinHuaTablePlayer.removeFromParent(true);
        }
        //筹码
        this.view.addChild(JinHuaTableCoin.getJinHuaTableCoinLayer());
        //坐下提示模块
        this.view.addChild(JinHuaTableTips.getTableTipsLayer());

        ProfileJinHuaTable.JinHuaTablePlayer= JinHuaTablePlayer.create();
        this.view.addChild(ProfileJinHuaTable.JinHuaTablePlayer, 100);
        //比赛动画
        this.view.addChild(JinHuaPKAnim.create(), 101);

        //设置牌桌数据
        this.createLayerFarm();
        //进入牌桌提示
        this.enterTablePrompt();
    },
    //初始化坐下按钮
    initSitBtn:function(){
        if(this.sitButtonGroup== null||this.sitButtonGroup== undefined) this.sitButtonGroup= {};
        for(var i=0; i< Profile_JinHuaTableConfig.playerCnt; ++i){
            this.sitButtonGroup[i] = cc.MenuItemImage.create(Common.getJinHuaResourcePath("ui_weizuoren.png"),Common.getJinHuaResourcePath("ui_weizuoren.png"),this.onSitDown, this);
            this.sitButtonGroup[i].setAnchorPoint(cc.p(0, 0));
            var menu = cc.Menu.create(this.sitButtonGroup[i]);
            menu.setPosition(Profile_JinHuaTableConfig.spritePlayers[i].locX,Profile_JinHuaTableConfig.spritePlayers[i].locY);
            JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(menu);
            this.sitButtonGroup[i].setVisible(false);
            this.sitButtonGroup[i].setZOrder(3);
            this.sitButtonGroup[i].setTag(i);
        }
    },
    //响应事件- 坐下
    onSitDown:function(pSender){
        //其中pSender.getTag()就是服务器端的座位号(CSID)
        JinHuaTablePlayer.sitDownMe(pSender.getTag());
    },
    //按钮：PK
    initPkBtn:function(){
        for(var i=1; i<=4; ++i){
            this.pkButtonGroup[i] = cc.MenuItemImage.create(Common.getJinHuaResourcePath("table_pk_collimation.png"),Common.getJinHuaResourcePath("table_pk_collimation.png"),this.onClick_btnPK, this);
            var menu1 = cc.Menu.create(this.pkButtonGroup[i]);
            menu1.setPosition(Profile_JinHuaTableConfig.spritePlayers[i].pkX,Profile_JinHuaTableConfig.spritePlayers[i].pkY);
            menu1.setZOrder(12);
            JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(menu1);

            this.pkButtonGroup[i].setVisible(false);
            this.pkButtonGroup[i].setTag(i);
            this.blinkPK(this.pkButtonGroup[i]);
        }
    },
    onClick_btnPK:function(pSender){
        console.log("PK:"+ pSender.getTag());
    },
    //放大缩小PK按钮
    blinkPK:function(button){
        var seq= cc.sequence(cc.scaleTo(0.5, 0.8),cc.scaleTo(0.5, 1));
        button.runAction(seq.repeatForever());
    },
    //显示隐藏Pk按钮
    showPkButton:function(id){
        this.pkButtonGroup[id].setVisible(true);
        this.pkButtonGroup[id].setEnabled(true);
    },
    //显示隐藏Pk按钮
    hidePkButton:function(){
        //除了玩家本身 全部隐藏
        for(var i=1; i< Profile_JinHuaTableConfig.playerCnt; ++i){
            this.pkButtonGroup[i].setVisible(false);
            this.pkButtonGroup[i].setEnabled(false);
        }
    },
    //显示某个下标的坐下按钮
    showSitButton:function(CSID){
        if(this.sitButtonGroup[CSID]){
            this.sitButtonGroup[CSID].setVisible(true);
            this.sitButtonGroup[CSID].setEnabled(true);
        }
    },
    //隐藏某个下标的坐下按钮
    hideSitButton:function(CSID){
        if(this.sitButtonGroup[CSID]){
            this.sitButtonGroup[CSID].setVisible(false);
            this.sitButtonGroup[CSID].setEnabled(false);
        }
    },
    //隐藏所有的坐下按钮
    hideAllSitButton:function(){
        for(var i=0; i< Profile_JinHuaTableConfig.playerCnt; ++i){
            if(this.sitButtonGroup[i]){
                this.sitButtonGroup[i].setVisible(false);
                this.sitButtonGroup[i].setEnabled(false);
            }
        }
    },
    //初始化牌桌名
    initTableTitle:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        switch (GameData.roomId){
            case Profile_JinHuaRoomData.ROOMID_BASIC_LOW:
                this.Image_title_left.loadTexture("ui_jingdianchang.png",1);
                this.Image_title_right.loadTexture("ui_chujichang.png",1);
                break;
            case Profile_JinHuaRoomData.ROOMID_BASIC_MID:
                this.Image_title_left.loadTexture("ui_jingdianchang.png",1);
                this.Image_title_right.loadTexture("ui_zhongjichang.png",1);
                break;
            case Profile_JinHuaRoomData.ROOMID_BASIC_HIGH:
                this.Image_title_left.loadTexture("ui_jingdianchang.png",1);
                this.Image_title_right.loadTexture("ui_gaojichang.png",1);
                break;
            case Profile_JinHuaRoomData.ROOMID_SHARK_LOW:
                this.Image_title_left.loadTexture("ui_qianchangwang.png",1);
                this.Image_title_right.loadTexture("ui_zhongjichang.png",1);
                break;
            case Profile_JinHuaRoomData.ROOMID_SHARK_MID:
                this.Image_title_left.loadTexture("ui_qianchangwang.png",1);
                this.Image_title_right.loadTexture("ui_gaojichang.png",1);
                break;
            case Profile_JinHuaRoomData.ROOMID_SHARK_HIGH:
                this.Image_title_left.loadTexture("ui_qianchangwang.png",1);
                this.Image_title_right.loadTexture("ui_fuhaochang.png",1);
                break;
        }
    },
    //初始化牌桌类型(有可能是房间,比赛以及自建牌桌)
    initTableType:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        
        if(Profile_JinHuaGameData.getIsMatch()){
            //如果是比赛牌桌
            this.Panel_EXP.setVisible(false);
            this.Panel_match.setVisible(true);
            this.Button_matchRank.setTouchEnabled(true);
            this.Button_gift.setVisible(false);
            this.Button_gift.setTouchEnabled(false);
            this.btn_libao.setVisible(false);
            this.btn_libao.setTouchEnabled(false);
            this.Button_tequan.setVisible(false);
            this.Button_tequan.setTouchEnabled(false);
            this.Button_changeCard.setVisible(false);
            this.Button_changeCard.setTouchEnabled(false);
            this.btn_renwu.setVisible(false);
            this.btn_renwu.setTouchEnabled(false);
            this.Button_noCompare.setVisible(false);
            this.Button_noCompare.setTouchEnabled(false);
            this.Image_title_left.setVisible(false);
            this.Image_title_right.setVisible(false);
            this.Panel_PrivateRoom.setVisible(false);

            if(GameData.mySSID!= null){
                this.Button_barrage.setTouchEnabled(false);
                this.Button_barrage.setVisible(false);
                this.Button_tableChat.setTouchEnabled(false);
                this.Button_tableChat.setVisible(false);
                this.Image_barragelock.setTouchEnabled(true);
                this.Image_barragelock.setVisible(true);
            }else{
                this.Button_barrage.setTouchEnabled(true);
                this.Button_barrage.setVisible(true);
                this.Image_barragelock.setTouchEnabled(false);
                this.Image_barragelock.setVisible(false)
            }
            if(GameData["tableId"] == 0){
                this.Label_waiting.setVisible(true);
            }
        }else{
            //非比赛场
            this.Panel_buttonGroup_right.setVisible(true);
            this.Panel_EXP.setVisible(true);
            this.Panel_match.setVisible(false);
            this.Button_matchRank.setTouchEnabled(false);
            this.Button_barrage.setTouchEnabled(false);
            this.Image_barragelock.setTouchEnabled(false);
            this.Button_gift.setVisible(true);
            this.Button_gift.setTouchEnabled(true);
            this.btn_libao.setVisible(true);
            this.btn_libao.setTouchEnabled(true);
            this.Button_tequan.setVisible(true);
            this.Button_tequan.setTouchEnabled(true);
            this.Button_changeCard.setVisible(true);
            this.Button_changeCard.setTouchEnabled(true);
            this.Button_tableChat.setTouchEnabled(true);
            this.Button_tableChat.setVisible(true);
            this.btn_renwu.setVisible(GameConfig.GAME_ID!= GameConfig.JINHUA_GAME_ID);
            this.btn_renwu.setTouchEnabled(GameConfig.GAME_ID!= GameConfig.JINHUA_GAME_ID);
            this.Button_noCompare.setVisible(true);
            this.Button_noCompare.setTouchEnabled(true);
            this.Image_title_left.setVisible(true);
            this.Image_title_right.setVisible(true);
            this.Panel_PrivateRoom.setVisible(false);

            if(GameData.BUILDTableId!= null&&GameData.BUILDTableId!= 0){
                //如果是自建房间
                this.Image_title_left.setVisible(false);
                this.Image_title_right.setVisible(false);
                this.Panel_PrivateRoom.setVisible(true);
                this.Label_RoomNumber.setString("自建房间("+ GameData.BUILDTableId+"):");
                if(GameData.BUILDRoomType== Profile_JinHuaTableConfig.TYPE_JINGDIAN){
                    this.Label_RoomNumber.setString("经典场");
                }else if(GameData.BUILDRoomType== Profile_JinHuaTableConfig.TYPE_QIANWANG){
                    this.Label_RoomNumber.setString("千王场");
                }
                this.Label_MinCoin.setString(GameData.BUILDMinCoin+"金币");
                this.Label_HolderName.setString(GameData.BUILDPlayerName);
                //初始化房间剩余时间
                this.initBuildTableRemainingTime();
            }
        }
    },
    //初始化房间剩余时间
    initBuildTableRemainingTime:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        this.remainingTime= parseInt(GameData.BUILDOverTime);
        var self= this;
        if(this.remainingTime!= null&& this.remainingTime>0){
            var seq= cc.sequence(cc.delayTime(1), cc.callFunc(function(pSender){
                self.setBuildTableRemainingTime();
            }));
            this.Label_CountDownTime.runAction(seq.repeatForever());
        }
    },
    //设置房间剩余时间
    setBuildTableRemainingTime:function(){
        if(this.remainingTime> 0){
            this.remainingTime--;
            //剩余小时
            var timeHour= Math.floor(this.remainingTime/ 3600);
            //剩余分钟
            var timeMin= Math.floor((this.remainingTime/ 60)% 60);
            //剩余秒数
            var timeSec= Math.floor(this.remainingTime% 60);

            timeHour= timeHour<10?"0"+timeHour:timeHour;
            timeMin= timeMin<10?"0"+timeMin:timeMin;
            timeSec= timeSec<10?"0"+timeSec:timeSec;
            //剩余时间
            var time= timeHour+":"+timeMin+":"+timeSec;
            this.Label_CountDownTime.setString(time);
        }else{
            this.Label_CountDownTime.stopAllActions();
        }
    },
    //显示系统公告
    showNotice:function(){
        //利用文本是否为空，判断是否进行中
        if(this.labelNotice!= null) return;

        //获取系统公告
        var noticeTable= Profile_JinHuaNotice.getOneNotice();
        if(noticeTable== null||noticeTable== undefined||noticeTable==""){
            //重新获取公告
            return;
        }

        var ImageNoticeSize= this.ImageView_Notice.getContentSize();
        var chatPanelSize= this.panel_chat.getContentSize();
        var chatPanelPoint= this.panel_chat.getPosition();

        var textNotice = noticeTable.content;
        //创建系统公告文本
        this.createSystemNoticeLabel(textNotice, cc.color(noticeTable.colorR, noticeTable.colorG, noticeTable.colorB));

        if(this.labelNotice== null) return;
        //设置初始位置
        this.labelNotice.setPosition(cc.p(chatPanelSize.width + chatPanelPoint.x + ImageNoticeSize.width / 2,0));
        //播放系统公告
        var moveBy =  cc.MoveBy.create(GameConfig.NOTICE_MOVE_TIME*(this.labelNotice.width + chatPanelSize.width), cc.p(-chatPanelPoint.x -this.labelNotice.width -chatPanelSize.width*2,0));
        var self= this;
        var seq = cc.Sequence.create(moveBy,cc.callFunc(function(){
            self.hideNotice();
        }));
        this.labelNotice.runAction(cc.RepeatForever.create(seq));
    },
    //隐藏系统公告
    hideNotice:function(){
        if(this.labelNotice!= null&&this.panel_chat!= null){
            this.labelNotice.stopAllActions();
            this.labelNotice.removeFromParent(true);
            this.labelNotice= null;
        }
        this.showNotice();
    },
    //系统公告文本
    createSystemNoticeLabel:function(systemNotice,color) {
        var chatPanelSize = this.panel_chat.getContentSize();
        var chatPanelPoint = this.panel_chat.getPosition();
        var ImageNoticeSize = this.ImageView_Notice.getContentSize();

        this.labelNotice = cc.LabelTTF.create(systemNotice.toString(), "微软雅黑", 20);
        this.labelNotice.setAnchorPoint(cc.p(0, 0));
        this.labelNotice.setPosition(cc.p(chatPanelSize.width + chatPanelPoint.x + ImageNoticeSize.width / 2, 0));
        this.labelNotice.setColor(color);
        this.panel_chat.addChild(this.labelNotice);
    },
    //启动计时器
    startUpdateTimeAndBatteryScheduler:function(){
        //初始时，更新一次，系统时间
        this.updateTime();
        //不能及时更新系统时间,60s更新一次
        this.updateTimer= setInterval(this.updateTime, 60000);
    },
    //更新系统时间
    updateTime:function(){
        var date= new Date();
        var hour= date.getHours()<10?"0"+ date.getHours():date.getHours();
        var minute= date.getMinutes()<10?"0"+ date.getMinutes():date.getMinutes();
        JinHuaTableLogic.Label_time.setString(hour + ":"+ minute);
    },
    //设置底部面板是否可见
    setBotPanelVisible:function(visible){
        this.Panel_dibu.setVisible(visible);
        this.Panel_dibu.setTouchEnabled(visible);
        this.Button_tableChat.setTouchEnabled(visible);
    },
    //设置在线时长礼包是否可领取
    setOnLineBonusVisible:function(visible){
        this.Label_onlinebonus_daojishi.setVisible(visible);
        this.btn_onlinebonus.setVisible(visible);
        this.btn_onlinebonus.setTouchEnabled(visible);
    },
    //隐藏所有快捷聊天按钮极其点击效果
    hideAllQuickChatButton:function(){
        this.Panel_quickchat.setVisible(false);
        this.Panel_waiting.setVisible(false);
        this.Panel_afterfold.setVisible(false);
        this.Panel_win.setVisible(false);
        this.Panel_lose.setVisible(false);

        this.Button_geweihao.setVisible(false);
        this.Button_geweihao.setTouchEnabled(false);
        this.Button_wolaishouqian.setVisible(false);
        this.Button_wolaishouqian.setTouchEnabled(false);
        this.Button_guarenlaile.setVisible(false);
        this.Button_guarenlaile.setTouchEnabled(false);
        this.Button_waiting_emo1.setVisible(false);
        this.Button_waiting_emo1.setTouchEnabled(false);
        this.Button_waiting_emo2.setVisible(false);
        this.Button_waiting_emo2.setTouchEnabled(false);

        this.Button_ptcl.setVisible(false);
        this.Button_ptcl.setTouchEnabled(false);
        this.Button_snh.setVisible(false);
        this.Button_snh.setTouchEnabled(false);
        this.Button_xfnym.setVisible(false);
        this.Button_xfnym.setTouchEnabled(false);
        this.Button_afterfold_emo1.setVisible(false);
        this.Button_afterfold_emo1.setTouchEnabled(false);
        this.Button_afterfold_emo2.setVisible(false);
        this.Button_afterfold_emo2.setTouchEnabled(false);

        this.Button_xiexie.setVisible(false);
        this.Button_xiexie.setTouchEnabled(false);
        this.Button_zhunixiaju.setVisible(false);
        this.Button_zhunixiaju.setTouchEnabled(false);
        this.Button_laozi.setVisible(false);
        this.Button_laozi.setTouchEnabled(false);
        this.Button_win_emo1.setVisible(false);
        this.Button_win_emo1.setTouchEnabled(false);
        this.Button_win_emo2.setVisible(false);
        this.Button_win_emo2.setTouchEnabled(false);

        this.Button_yunqicha.setVisible(false);
        this.Button_yunqicha.setTouchEnabled(false);
        this.Button_dadebucuo.setVisible(false);
        this.Button_dadebucuo.setTouchEnabled(false);
        this.Button_nizabushangtian.setVisible(false);
        this.Button_nizabushangtian.setTouchEnabled(false);
        this.Button_lose_emo1.setVisible(false);
        this.Button_lose_emo1.setTouchEnabled(false);
        this.Button_lose_emo2.setVisible(false);
        this.Button_lose_emo2.setTouchEnabled(false);
    },
    //显示相对类型的快捷聊天按钮
    showQuickChatButton:function(type){
        //比赛
        if(Profile_JinHuaGameData.getIsMatch()) return;
        //首先隐藏所有的
        this.hideAllQuickChatButton();

        //Todo:金花新手引导
        if(type == STATUS_QUICK_CHAT_WAITING){
            this.Panel_waiting.setVisible(true);
            this.Button_geweihao.setVisible(true);
            this.Button_geweihao.setTouchEnabled(true);
            this.Button_wolaishouqian.setVisible(true);
            this.Button_wolaishouqian.setTouchEnabled(true);
            this.Button_guarenlaile.setVisible(true);
            this.Button_guarenlaile.setTouchEnabled(true);
            this.Button_waiting_emo1.setVisible(true);
            this.Button_waiting_emo1.setTouchEnabled(true);
            this.Button_waiting_emo2.setVisible(true);
            this.Button_waiting_emo2.setTouchEnabled(true);
        }else if(type == STATUS_QUICK_CHAT_FOLD) {
            this.Panel_afterfold.setVisible(true);
            this.Button_ptcl.setVisible(true);
            this.Button_ptcl.setTouchEnabled(true);
            this.Button_snh.setVisible(true);
            this.Button_snh.setTouchEnabled(true);
            this.Button_xfnym.setVisible(true);
            this.Button_xfnym.setTouchEnabled(true);
            this.Button_afterfold_emo1.setVisible(true);
            this.Button_afterfold_emo1.setTouchEnabled(true);
            this.Button_afterfold_emo2.setVisible(true);
            this.Button_afterfold_emo2.setTouchEnabled(true);
        }else if(type == STATUS_QUICK_CHAT_WIN) {
            this.Panel_win.setVisible(true);
            this.Button_xiexie.setVisible(true);
            this.Button_xiexie.setTouchEnabled(true);
            this.Button_zhunixiaju.setVisible(true);
            this.Button_zhunixiaju.setTouchEnabled(true);
            this.Button_laozi.setVisible(true);
            this.Button_laozi.setTouchEnabled(true);
            this.Button_win_emo1.setVisible(true);
            this.Button_win_emo1.setTouchEnabled(true);
            this.Button_win_emo2.setVisible(true);
            this.Button_win_emo2.setTouchEnabled(true);
        }else if(type == STATUS_QUICK_CHAT_LOSE){
            this.Panel_lose.setVisible(true);
            this.Button_yunqicha.setVisible(true);
            this.Button_yunqicha.setTouchEnabled(true);
            this.Button_dadebucuo.setVisible(true);
            this.Button_dadebucuo.setTouchEnabled(true);
            this.Button_nizabushangtian.setVisible(true);
            this.Button_nizabushangtian.setTouchEnabled(true);
            this.Button_lose_emo1.setVisible(true);
            this.Button_lose_emo1.setTouchEnabled(true);
            this.Button_lose_emo2.setVisible(true);
            this.Button_lose_emo2.setTouchEnabled(true);
        }
        this.Panel_quickchat.setVisible(true);
    },
    //初始化牌桌数据
    createLayerFarm:function(){
        //开启定时器，更新系统时间
        this.startUpdateTimeAndBatteryScheduler();

        var GameData= Profile_JinHuaGameData.getGameData();

        if(Profile_JinHuaGameData.getIsMatch()){
            //更新比赛底注
            this.Label_matchBaseCoin.setString(GameData.singleCoin);
            this.Label_match_name.setVisible(true);
            this.Label_match_name.setString(GameData.matchTitle);
        }
        //解决Bug:断线重连&&玩家在牌桌上,显示金币堆模块
        JinHuaTableCoin.createTableCoins(GameData.chips);
        //更新牌桌基本信息显示
        this.updateTableTitle();
        //设置总轮数
        this.initAllRound();
        //设置经验
        this.initExpProgressBar();
        //设置特权特权按钮是否显示
        this.initRule();
    },
    //更新牌桌基本信息显示
    updateTableTitle:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        if(Profile_JinHuaGameData.getIsMatch()){
            //更新比赛基本信息
            this.Label_matchBaseNum.setString(GameData.baseChips);
            this.Label_matchRound.setString(GameData.round +"/"+ GameData.allRound);
            this.Label_matchPkRound.setString(GameData.CompareRound);
            this.Label_sumCoin.setString(GameData.totalPoolCoin);
        }else{
            //更新牌桌基本信息
            this.Label_baseCoin.setString(GameData.singleCoin);
            this.Label_sumCoin.setString(GameData.totalPoolCoin);
            this.Label_round.setString(GameData.round);
        }
    },
    //设置总轮数
    initAllRound:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        if(GameData["allRound"]!= null){
            this.Label_allRound.setString(GameData["allRound"]);
        }
    },
    //设置经验条
    initExpProgressBar:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        if(GameData["Exp"]!= null&&GameData["levelUpExp"]!= null&&GameData["level"]!= null){
            //初始化锁定牌桌按钮
            this.Panel_EXP.setVisible(true);
            this.Label_level.setString("Lv."+ GameData["level"]);
            this.Label_exp.setString("经验:"+ GameData["Exp"] + "/" + GameData["levelUpExp"]);
            //Todo:App和H5的差别
            this.ProgressBar_exp.setPercent(GameData["Exp"]/GameData["levelUpExp"]* 100);
            this.Label_level.setColor(cc.color(255, 255, 255));
            this.Label_exp.setColor(cc.color(255, 255, 255));
        }else{
            this.Panel_EXP.setVisible(false);
        }
    },
    //设置特权
    initRule:function(){
        if(!Profile_JinHuaGameData.getIsMatch()){
            this.Button_tequan.setVisible(true);
            this.Button_tequan.setTouchEnabled(true);
        }
    },
    //进入牌桌提示
    enterTablePrompt:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        if(GameData.status!=  STATUS_TABLE_WAITTING&&GameData.status!= STATUS_TABLE_READY){
            //没有在打牌
            if(!Profile_JinHuaGameData.isMePlayingThisRound()){
                this.showBotButton(STATUS_BUTTON_WAIT);
            }
        }else{
            this.showBotButton(STATUS_BUTTON_WAIT);
            this.onReady();
        }

        //如果断线重连 看牌按钮是否显示
        var playerTable = GameData["players"];
        if(playerTable== null) return;
        for(var i=0; i< GameData["playersCnt"];++i){
            if(playerTable[i]!= null && playerTable[i].userId== profile_user.getSelfUserID){
                //是否显示看牌提示
                JinHuaTableCheckButton.setCheckVisible(playerTable[i]["cardCnt"]== 0);
            }
        }
    },
    //显示相对类型的下排操作按钮
    showBotButton:function(type){
        //隐藏所有下排操作按钮极其点击效果
        this.hideAllBotButton();
        this.lastStatus= type;
        //console.log("下排操作按钮类型:"+ type);
        switch (type){
            case STATUS_BUTTON_WAIT://等待
                //Todo:JinHuaTableCheckButton.setSpriteVisible(false)
                this.buttonCheckIsShow= false;
                this.Panel_wait.setVisible(true);

                this.Button_wait_fold.setVisible(true);
                this.Button_wait_fold.setTouchEnabled(true);
                this.Button_wait_pk.setVisible(true);
                this.Button_wait_pk.setTouchEnabled(true);
                this.Button_wait_raise.setVisible(true);
                this.Button_wait_raise.setTouchEnabled(true);
                this.Button_wait_alwaysbet.setVisible(true);
                this.Button_wait_alwaysbet.setTouchEnabled(true);
                break;
            case STATUS_BUTTON_OTHERTURN://别人
                this.Panel_otherturn.setVisible(true);

                this.Button_otherturn_fold.setVisible(true);
                this.Button_otherturn_fold.setTouchEnabled(true);
                this.Button_otherturn_pk.setVisible(true);
                this.Button_otherturn_pk.setTouchEnabled(true);
                this.Button_otherturn_raise.setVisible(true);
                this.Button_otherturn_raise.setTouchEnabled(true);
                this.Button_otherturn_alwaysbet.setVisible(true);
                this.Button_otherturn_alwaysbet.setTouchEnabled(true);
                break;
            case STATUS_BUTTON_MYTURN://轮到自己
                this.Panel_myturn.setVisible(true);

                this.Button_mine_fold.setVisible(true);
                this.Button_mine_fold.setTouchEnabled(true);
                this.Button_mine_pk.setVisible(true);
                this.Button_mine_pk.setTouchEnabled(true);
                this.Button_mine_raise.setVisible(true);
                this.Button_mine_raise.setTouchEnabled(true);
                this.Button_mine_call.setVisible(true);
                this.Button_mine_call.setTouchEnabled(true);
                if(!this.CanRaise){//不能加注
                    this.Button_mine_raise.setTouchEnabled(false);
                    this.Button_mine_raise.setOpacity(ALPHA_CAN_NOT_TOUCH);
                    this.Image_mine_raise.setOpacity(ALPHA_CAN_NOT_TOUCH);
                }else{
                    this.Button_mine_raise.setOpacity(ALPHA_CAN_TOUCH);
                    this.Image_mine_raise.setOpacity(ALPHA_CAN_TOUCH);
                }
                break;
            case STATUS_BUTTON_RAISE://等待
                this.Panel_raise.setVisible(true);

                this.Button_raise_one.setVisible(true);
                this.Button_raise_one.setTouchEnabled(true)
                this.Button_raise_two.setVisible(true);
                this.Button_raise_two.setTouchEnabled(true);
                this.Button_raise_three.setVisible(true);
                this.Button_raise_three.setTouchEnabled(true);
                this.Button_raise_cancel.setVisible(true);
                this.Button_raise_cancel.setTouchEnabled(true);
                break;
            case STATUS_BUTTON_ALLIN:
                this.Panel_allin.setVisible(true);

                this.Button_allin_fold.setVisible(true);
                this.Button_allin_fold.setTouchEnabled(true);
                this.Button_allin_pk.setVisible(true);
                this.Button_allin_pk.setTouchEnabled(true);
                this.Button_allin_allin.setVisible(true);
                this.Button_allin_allin.setTouchEnabled(true);
                this.Button_allin_call.setVisible(true);
                this.Button_allin_call.setTouchEnabled(true);
                break;
            case STATUS_BUTTON_CANPK://可以比牌
                this.Panel_canpk.setVisible(true);

                this.Button_canpk_fold.setVisible(true);
                this.Button_canpk_fold.setTouchEnabled(true);
                this.Button_canpk_pk.setVisible(true);
                this.Button_canpk_pk.setTouchEnabled(true);
                this.Button_canpk_raise.setVisible(true);
                this.Button_canpk_raise.setTouchEnabled(true);
                this.Button_canpk_call.setVisible(true);
                this.Button_canpk_call.setTouchEnabled(true);
                if(!this.CanRaise){//不能加注
                    this.Button_canpk_raise.setTouchEnabled(false);
                    this.Button_canpk_raise.setOpacity(ALPHA_CAN_NOT_TOUCH);
                    this.Image_canpk_raise.setOpacity(ALPHA_CAN_NOT_TOUCH);
                }else{
                    this.Button_canpk_raise.setOpacity(ALPHA_CAN_TOUCH);
                    this.Image_canpk_raise.setOpacity(ALPHA_CAN_TOUCH);
                }
                break;
            case STATUS_BUTTON_GUIDE_ONLY_CHECK:
                this.Panel_wait.setVisible(true);

                this.Button_wait_fold.setVisible(true);
                this.Button_wait_fold.setTouchEnabled(true);
                this.Button_wait_pk.setVisible(true);
                this.Button_wait_pk.setTouchEnabled(true);
                this.Button_wait_raise.setVisible(true);
                this.Button_wait_raise.setTouchEnabled(true);
                this.Button_wait_alwaysbet.setVisible(true);
                this.Button_wait_alwaysbet.setTouchEnabled(true);
                break;
            case STATUS_BUTTON_GUIDE_ONLY_RAISE:
                this.Panel_onlyraise.setVisible(true);
                this.Button_onlyraise_raise.setTouchEnabled(true);
                break;
            case STATUS_BUTTON_GUIDE_ONLY_CALL:
                this.Panel_onlycall.setVisible(true);
                this.Button_onlycall_call.setTouchEnabled(true);
                break;
            case STATUS_BUTTON_GUIDE_ONLY_PK:
                this.Panel_onlypk.setVisible(true);
                this.Button_onlypk_pk.setTouchEnabled(true);
                break;
        }
    },
    //隐藏所有下排操作按钮极其点击效果
    hideAllBotButton:function(){
        this.Panel_wait.setVisible(false);
        this.Panel_otherturn.setVisible(false);
        this.Panel_myturn.setVisible(false);
        this.Panel_raise.setVisible(false);
        this.Panel_allin.setVisible(false);
        this.Panel_onlyraise.setVisible(false);
        this.Panel_onlycall.setVisible(false);
        this.Panel_onlypk.setVisible(false);
        this.Panel_canpk.setVisible(false);

        this.Button_wait_fold.setVisible(false);
        this.Button_wait_fold.setTouchEnabled(false);
        this.Button_wait_pk.setVisible(false);
        this.Button_wait_pk.setTouchEnabled(false);
        this.Button_wait_raise.setVisible(false);
        this.Button_wait_raise.setTouchEnabled(false);
        this.Button_wait_alwaysbet.setVisible(false);
        this.Button_wait_alwaysbet.setTouchEnabled(false);

        this.Button_otherturn_fold.setVisible(false);
        this.Button_otherturn_fold.setTouchEnabled(false);
        this.Button_otherturn_pk.setVisible(false);
        this.Button_otherturn_pk.setTouchEnabled(false);
        this.Button_otherturn_raise.setVisible(false);
        this.Button_otherturn_raise.setTouchEnabled(false);
        this.Button_otherturn_alwaysbet.setVisible(false);
        this.Button_otherturn_alwaysbet.setTouchEnabled(false);

        this.Button_mine_fold.setVisible(false);
        this.Button_mine_fold.setTouchEnabled(false);
        this.Button_mine_pk.setVisible(false);
        this.Button_mine_pk.setTouchEnabled(false);
        this.Button_mine_raise.setVisible(false);
        this.Button_mine_raise.setTouchEnabled(false);
        this.Button_mine_call.setVisible(false);
        this.Button_mine_call.setTouchEnabled(false);

        this.Button_raise_one.setVisible(false);
        this.Button_raise_one.setTouchEnabled(false);
        this.Button_raise_two.setVisible(false);
        this.Button_raise_two.setTouchEnabled(false);
        this.Button_raise_three.setVisible(false);
        this.Button_raise_three.setTouchEnabled(false);
        this.Button_raise_cancel.setVisible(false);
        this.Button_raise_cancel.setTouchEnabled(false);

        this.Button_allin_fold.setVisible(false);
        this.Button_allin_fold.setTouchEnabled(false);
        this.Button_allin_pk.setVisible(false);
        this.Button_allin_pk.setTouchEnabled(false);
        this.Button_allin_allin.setVisible(false);
        this.Button_allin_allin.setTouchEnabled(false);
        this.Button_allin_call.setVisible(false);
        this.Button_allin_call.setTouchEnabled(false);

        this.Button_onlyraise_raise.setTouchEnabled(false)
        this.Button_onlycall_call.setTouchEnabled(false);
        this.Button_onlypk_pk.setTouchEnabled(false);

        this.Button_canpk_fold.setVisible(false);
        this.Button_canpk_fold.setTouchEnabled(false);
        this.Button_canpk_pk.setVisible(false);
        this.Button_canpk_pk.setTouchEnabled(false);
        this.Button_canpk_raise.setVisible(false);
        this.Button_canpk_raise.setTouchEnabled(false);
        this.Button_canpk_call.setVisible(false);
        this.Button_canpk_call.setTouchEnabled(false);
    },
    //准备
    onReady:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        if(GameData.status== STATUS_TABLE_READY||GameData.status== STATUS_TABLE_WAITTING){
            //发送准备请求
            sendJHID_READY();
        }
    },
    //在线礼包
    onLineBonus:function(){
        if(this.canGetOnlinebonus== 0){
            sendJHID_GET_ONLINE_REWARD();
        }else{
            if(this.IncrBaoheRound== null||this.IncrBaoheRound== 0){
                Common.showToast("亲，再打" + this.canGetOnlinebonus + "盘才能打开金币福袋哦！",3);
            }else{
                Common.showToast("亲，再打" + this.canGetOnlinebonus + "盘才能打开金币福袋哦！(" + this.IncrBaoheRound + "轮以上算一局)",3)
            }
        }
    },
    //设置坐下按钮是否可用
    setSitButtonEnabled:function(enabled){
        for(var key in this.sitButtonGroup){
            this.sitButtonGroup[key].setEnabled(enabled==undefined?false:enabled);
        }
    },
    //隐藏座位
    hideSit:function(CSID){
        var GameData= Profile_JinHuaGameData.getGameData();
        if(!GameData.mySSID){
            this.hideSitButton(CSID);
            JinHuaTableTips.disableSitTip(CSID);
        }
    },
    //发牌
    updateDataSendCard:function(){
        this.changeCardRemainTime = 3;
        this.showCard = false;
    },

    //更新是否可以换牌提示
    updateIsCanChangeCardState:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        //轮数变更
    },
    //设置轮到我操作
    //return  如果要开启计时器返回true
    setMyTurnToOperate_ReturnIfNeedMyTimer:function(player){
        //是否<跟到底>
        if(this.isAlwaysBetCoin){
            if(this.betData&&this.betData.callCoin< 0){//All In
                this.onRaiseAll();
            }else{//跟注
                this.onCall();
            }
        }else if(player.player.status!= STATUS_PLAYER_DISCARD){//没有弃牌
            //console.log("更新自己的按钮");
            if(Profile_JinHuaGameData.getGameData().round>= Profile_JinHuaTableConfig.CAN_PK_ROUND){
                //是否已经超出一定的轮数，可以比牌
                this.showBotButton(STATUS_BUTTON_CANPK);
            }else{
                this.showBotButton(STATUS_BUTTON_MYTURN);
            }

            if(!this.vibrateId){
                //10s之后，震动提醒
                this.vibrateId= setTimeout(this.callback_vibrate, 10000);
            }
        }else{
            this.showBotButton(STATUS_BUTTON_WAIT);
        }
    },
    //All In
    onRaiseAll:function(){

    },
    //下注、跟注
    onCall:function(){
        if(this.betData== null||this.betData== undefined) return;
        if(this.betData.callCoin<= 0){//如果跟注按钮小于0，则All In
            this.onAllIn();
            return;
        }
        //向服务器端发起下注请求
        //新手引导时，可以不发起
        sendJHID_BET(this.betData.callCoin,TYPE_BET_CALL);
        //更新按钮
        this.showBotButton(STATUS_BUTTON_OTHERTURN);
        //下注列表
        JinHuaTablePlayer.selfClickToBetCoin(TYPE_BET_CALL,this.betData.callCoin);
    },
    //震动提醒
    callback_vibrate:function(){
        //console.log("震动提醒");
    },
    //更新我的操作按钮
    updateMyOperationBtns:function(currentPlayer){
        //下注数据
        this.betData= currentPlayer;
        this.updateMyPKAndShowCardBtns();
    },
    // 更新我的pk和开牌按钮
    //比牌按钮  0 不能操作，1 比牌 2 开牌
    updateMyPKAndShowCardBtns:function(){
        if(!this.betData) return;
        if(this.betData.compareCard == 2){//比牌
            this.showCard = true;
            //显示开牌提示
            JinHuaTableTips.showOpenCardTips();
        }
    },
    //轮到别人下注，更新我的可操作按钮
    updateMyBetBtnsOnOthersTurn:function(){
        if(Profile_JinHuaGameData.isMePlayingThisRound()){//在打牌中
            this.showBotButton(STATUS_BUTTON_OTHERTURN);
        }
    },
    //超时2s后,弃牌
    overTimeGiveUpCard:function(){

    },
    //All In
    onAllIn:function(){

    },
    //所以操作按钮不可点
    disableAllTableOperationButtons:function(){
        this.showBotButton(STATUS_BUTTON_WAIT);
        this.isAlwaysBetCoin = false;
        this.Image_alwaysbet.setVisible(false);
    },
    //弃牌
    onFold:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        //第6轮点击换桌会弹出提示框
        if(GameData.round> 5){
            MvcEngine.createModule(GUI_JINHUATABLECONFIRMPOP, function(){
                ProfileJinHuaTableConfirmPop.setMsg(TableConfirmPopTag.TAG_FOLD_TIPS);
            })
        }else{
            this.afterOnClickBtnFold();
        }
    },
    //点击弃牌后做的事
    afterOnClickBtnFold:function(){
        //Todo:关闭-超时弃牌线程
        sendJHID_DISCARD(0);
        JinHuaTablePlayer.updateTableAfterSelfFoldCard();
        JinHuaTablePlayer.closeMyTimer();
    },
    //在游戏结果后初始化一些数据
    initGameDataAfterGameResult:function(){
        this.GameData.status = STATUS_TABLE_READY;
        //清空All In金币
        this.setAllInValue();
        JinHuaTablePlayer.resetCurrentCSID();
        JinHuaTableTips.initTipsData();
//        var playerTable= Profile_JinHuaGameData.getPlayers();
//
//        //Todo:移除所有的坐下提示
    },
    //设置全压的金币数
    setAllInValue:function(value){
        this.allInValue = value==undefined?null:value;
    },
    //更新加注按钮列表
    updateMyRaiseCoinBtns:function(){
        //没有下注数据 || 加注数据不是有效值
        if(this.betData== null||(this.betData!= null &&(this.betData.raiseCoin== null||this.betData.raiseCoin== undefined))){
            return;
        }

        //加注列表，如果数组数量不为0，则只能显示押满按钮或加注列表
        var  canRaiseCnt = 0;

        //加注列表
        for(var i in this.betData.raiseCoin){
            var canRaise = false;
            var raiseCoin = this.betData.raiseCoin[i];
            if(!raiseCoin) break;
            if(i== 0){
                if(raiseCoin.raiseStatus == 1){
                    canRaiseCnt++;
                }
            }else if(i== 2){
                var coinNumber = "";
                var valueLen= raiseCoin.raiseValue.length;
                if(valueLen> 9){//亿
                    var beforeDel = Math.floor(raiseCoin.raiseValue / 100000000);
                    var afterDel = raiseCoin.raiseValue % 100000000;
                    if(afterDel> 0){
                        if(afterDel % 10000000 == 0) {
                            afterDel = afterDel / 10000000;
                        }else if(afterDel % 1000000 == 0) {
                            afterDel = afterDel / 1000000;
                        }else if(afterDel % 100000 == 0) {
                            afterDel = afterDel / 100000;
                        }else {
                            afterDel = afterDel / 100000;
                        }
                        coinNumber = beforeDel + "<" + afterDel + ";"
                    }else{
                        coinNumber= beforeDel+";";
                    }
                }else if(valueLen> 5) {//万
                    var beforeDel = Math.floor(raiseCoin.raiseValue / 10000);
                    var afterDel = raiseCoin.raiseValue % 10000;
                    if (afterDel > 0) {
                        if (afterDel % 1000 == 0) {
                            afterDel = afterDel / 1000;
                        }else{
                            afterDel = afterDel / 100;
                        }
                        coinNumber = beforeDel + "<" + afterDel + ":"
                    } else {
                        coinNumber = beforeDel + ":";
                    }
                }else{
                    coinNumber = raiseCoin.raiseValue;
                }
                this.AtlasLabel_jiner1.setStringValue(coinNumber);
                if(raiseCoin.raiseStatus== 1){
                    canRaise = true;
                    this.Button_raise_one.setOpacity(ALPHA_CAN_TOUCH);
                    this.AtlasLabel_jiner1.setOpacity(ALPHA_CAN_TOUCH);
                }else{
                    this.Button_raise_one.setTouchEnabled(false);
                    this.Button_raise_one.setOpacity(ALPHA_CAN_NOT_TOUCH);
                    this.AtlasLabel_jiner1.setOpacity(ALPHA_CAN_NOT_TOUCH);
                }
            }else if(i==3){
                var coinNumber = "";
                var valueLen= raiseCoin.raiseValue.length;
                if(valueLen> 9){//亿
                    var beforeDel = Math.floor(raiseCoin.raiseValue / 100000000);
                    var afterDel = raiseCoin.raiseValue % 100000000;
                    if(afterDel> 0){
                        if(afterDel % 10000000 == 0) {
                            afterDel = afterDel / 10000000;
                        }else if(afterDel % 1000000 == 0) {
                            afterDel = afterDel / 1000000;
                        }else if(afterDel % 100000 == 0) {
                            afterDel = afterDel / 100000;
                        }else {
                            afterDel = afterDel / 100000;
                        }
                        coinNumber = beforeDel + "<" + afterDel + ";"
                    }else{
                        coinNumber= beforeDel+";";
                    }
                }else if(valueLen> 5) {//万
                    var beforeDel = Math.floor(raiseCoin.raiseValue / 10000);
                    var afterDel = raiseCoin.raiseValue % 10000;
                    if (afterDel > 0) {
                        if (afterDel % 1000 == 0) {
                            afterDel = afterDel / 1000;
                        }else{
                            afterDel = afterDel / 100;
                        }
                        coinNumber = beforeDel + "<" + afterDel + ":"
                    } else {
                        coinNumber = beforeDel + ":";
                    }
                }else{
                    coinNumber = raiseCoin.raiseValue;
                }
                this.AtlasLabel_jiner2.setStringValue(coinNumber);
                if(raiseCoin.raiseStatus== 1){
                    canRaise = true;
                    this.Button_raise_two.setOpacity(ALPHA_CAN_TOUCH);
                    this.AtlasLabel_jiner2.setOpacity(ALPHA_CAN_TOUCH);
                }else{
                    this.Button_raise_two.setTouchEnabled(false);
                    this.Button_raise_two.setOpacity(ALPHA_CAN_NOT_TOUCH);
                    this.AtlasLabel_jiner2.setOpacity(ALPHA_CAN_NOT_TOUCH);
                }
            }else if(i== 4){
                var coinNumber = "";
                var valueLen= raiseCoin.raiseValue.length;
                if(valueLen> 9){//亿
                    var beforeDel = Math.floor(raiseCoin.raiseValue / 100000000);
                    var afterDel = raiseCoin.raiseValue % 100000000;
                    if(afterDel> 0){
                        if(afterDel % 10000000 == 0) {
                            afterDel = afterDel / 10000000;
                        }else if(afterDel % 1000000 == 0) {
                            afterDel = afterDel / 1000000;
                        }else if(afterDel % 100000 == 0) {
                            afterDel = afterDel / 100000;
                        }else {
                            afterDel = afterDel / 100000;
                        }
                        coinNumber = beforeDel + "<" + afterDel + ";"
                    }else{
                        coinNumber= beforeDel+";";
                    }
                }else if(valueLen> 5) {//万
                    var beforeDel = Math.floor(raiseCoin.raiseValue / 10000);
                    var afterDel = raiseCoin.raiseValue % 10000;
                    if (afterDel > 0) {
                        if (afterDel % 1000 == 0) {
                            afterDel = afterDel / 1000;
                        }else{
                            afterDel = afterDel / 100;
                        }
                        coinNumber = beforeDel + "<" + afterDel + ":"
                    } else {
                        coinNumber = beforeDel + ":";
                    }
                }else{
                    coinNumber = raiseCoin.raiseValue;
                }
                this.AtlasLabel_jiner3.setStringValue(coinNumber);
                if(raiseCoin.raiseStatus== 1){
                    canRaise = true;
                    this.Button_raise_three.setOpacity(ALPHA_CAN_TOUCH);
                    this.AtlasLabel_jiner3.setOpacity(ALPHA_CAN_TOUCH);
                }else{
                    this.Button_raise_three.setTouchEnabled(false);
                    this.Button_raise_three.setOpacity(ALPHA_CAN_NOT_TOUCH);
                    this.AtlasLabel_jiner3.setOpacity(ALPHA_CAN_NOT_TOUCH);
                }
            }else{
                if(raiseCoin.raiseStatus== 1){
                    canRaiseCnt++;
                }
            }

            this.CanRaise= canRaise;
        }
    },
    //加注
    onRaise:function(){
        //加注
        JinHuaTableLogic.updateMyRaiseCoinBtns();
        JinHuaTableLogic.showBotButton(STATUS_BUTTON_RAISE);
    },
    //加注按钮列表-1
    onRaise_1:function(){
        JinHuaTableLogic.clickRaiseBtnFunc(2);
    },
    //加注按钮列表-2
    onRaise_2:function(){
        JinHuaTableLogic.clickRaiseBtnFunc(3);
    },
    //加注按钮列表-3
    onRaise_3:function(){
        JinHuaTableLogic.clickRaiseBtnFunc(4);
    },
    //点击加注按钮执行
    //index 加注码位置
    clickRaiseBtnFunc:function(index){
        //如果当前下注人并不是我,我的加注列表不需要更新
        if(this.betData== null||(this.betData!= null &&this.betData.raiseCoin== null&&this.betData.raiseCoin== undefined)){
            return;
        }
        //向服务器发送下注请求
        sendJHID_BET(this.betData.raiseCoin[index].raiseValue,TYPE_BET_RAISE);
        JinHuaTablePlayer.selfClickToBetCoin(TYPE_BET_RAISE,this.betData.raiseCoin[index].raiseValue);
    },
    //加注取消
    onRaise_Cancel:function(){
        if(this.GameData.round >= Profile_JinHuaTableConfig.CAN_PK_ROUND) {
            this.showBotButton(STATUS_BUTTON_CANPK);
        }else{
            this.showBotButton(STATUS_BUTTON_MYTURN);
        }
    },
    //清空数据[下注数，单注，总注，轮数数值重置]
    resetData:function(){
        JinHuaTablePlayer.resetPlayerBetCoin();
        this.GameData.singleCoin = 0;
        this.GameData.totalPoolCoin = 0;
        this.GameData.round = 0;
        this.updateTableTitle();
        JinHuaTableLogic.updateIsCanChangeCardState()
    },
    //本局结束后操作
    gameResultOperation:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        var players= JinHuaTablePlayer.getPlayers();
        if(this.isNextRoundStandUp){//是否下局旁观
            JinHuaTablePlayer.selfStandUp();//发起站起请求
            this.cancelStandUpNextRound();
        }else{
            if(!Common.judgeValueIsEffect(GameData.mySSID)) return;
            if(!Common.judgeValueIsEffect(players)) return;
            if(!Common.judgeValueIsEffect(players[0])) return;
            if(players[0].player.status!= STATUS_PLAYER_READY){
                //如果我还在牌桌上,则准备
                this.onReady();
            }
        }
        for(var key in players){
            if(!Common.judgeValueIsEffect(players[key])) continue;
            if(key!= 0&&players[key].player.status== STATUS_PLAYER_DISCARD){//别的玩家站起
                JinHuaTablePlayer.updateTableAfterStandUpOther(key);
            //}else if(key==0&&players[key].player.status== STATUS_PLAYER_PLAYING){//自己玩家
            }else if(key==0&&players[key].player.status== STATUS_PLAYER_WATCH){//自己玩家
                JinHuaTablePlayer.updateTableAfterStandUpMe(0);
            }
        }
    },
    //取消下局旁观
    cancelStandUpNextRound:function(){
        this.isNextRoundStandUp= false;
    },
    //跟到底
    onAlwaysBetCoin:function(){
        this.isAlwaysBetCoin= !this.isAlwaysBetCoin;
        this.Image_alwaysbet.setVisible(this.isAlwaysBetCoin);
    },
    //初始化看牌按钮
    initCheckButton:function(){
        JinHuaTableCheckButton.createCheckButton();
    },
    //比牌
    onPK:function(){
        if(this.showCard){//是否已经看牌
            sendJHID_SHOW_CARDS();
            this.showCard= false;
        }
        this.showPlayerPKBtns();
    },
    //显示用户比牌按钮
    showPlayerPKBtns:function(){
        var pkCnt = 0;
        var pkId;
        var players = JinHuaTablePlayer.getPlayers();
        for(var key in players){
            if(players[key]&&((players[key].player.status == STATUS_PLAYER_PLAYING || players[key].player.status == STATUS_PLAYER_LOOKCARD))){
                if(key>0){
                    JinHuaTableLogic.showPkButton(key);
                    pkCnt++;
                    pkId = key;
                }
            }
        }
        if(pkCnt== 1){
            if(pkId){
                this.onPK_ID(pkId);
            }
        }
    },

    onPK_ID:function(CSID){
        this.clickPkBtnFunc(CSID);
    },
    //点击pk执行操作
    clickPkBtnFunc:function(playerCSID){
        var  players = JinHuaTablePlayer.getPlayers();
        if(players[playerCSID]){
            //修改Bug:noPK是player的属性。
            if(players[playerCSID].player.noPK){
                Common.showToast("他使用了【禁比】，你不能和他比牌", 2);
            }
            this.hidePkButton();
            //修改Bug:玩家本身发起比牌时，比牌双方都是玩家自己(SSID是player的属性)。
            sendJHID_PK(players[playerCSID].player.SSID);
        }
    },
    //每局结束后的经验加成动画并设置经验条
    showAddExpAnimation:function(){
        var expText = Profile_JinHuaGameData.getMyExpText();
        var labelExp = cc.LabelTTF.create(expText, "Arial", 36);
        var bgSize = JinHuaTablePlayer.getJinHuaTablePlayerLayer().getContentSize();
        labelExp.setPosition(cc.p(bgSize.width / 2,bgSize.height / 2));
        labelExp.setZOrder(10);
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(labelExp);
        var array = [];
        array.push(cc.spawn(cc.fadeOut(1.50), cc.moveTo(1.50,cc.p(labelExp. getPositionX(),labelExp. getPositionY() + 100))));
        array.push(cc.removeSelf(true));
        labelExp. runAction(cc.sequence(array));

        //下边的经验加成(设置自己经验条数据)
        var GameData= Profile_JinHuaGameData.getGameData();
        if(Common.judgeValueIsEffect(GameData["Exp"])
            &&Common.judgeValueIsEffect(GameData["levelUpExp"])
            &&Common.judgeValueIsEffect(GameData["level"])){
            //初始化锁定牌桌按钮
            this.Panel_EXP.setVisible(true);
            this.Label_level.setText("Lv." + GameData["level"]);
            this.Label_exp.setText("经验:" + GameData["Exp"] + "/" + GameData["levelUpExp"]);
            this.ProgressBar_exp.setPercent(GameData["Exp"]/GameData["levelUpExp"]* 100);
        }
    }
};

//Todo:大喇叭
//Todo:游戏结果