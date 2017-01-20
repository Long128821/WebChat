var JinHuaTableController = BaseController.extend({
	moduleLayer:null,
    reset:function(){
        JinHuaTableLogic.view= null;
    },

    getLayer:function(){
        return JinHuaTableLogic.view;
    },

    createView:function(){
        JinHuaTableLogic.createView();
        //Frameworks.setOnKeypadEventListener(JinHuaTableLogic.view, JinHuaTableLogic.onKeypad);
    },
    
    requestMsg:function(){
    	JinHuaTableLogic.requestMsg();
    },
    //添加信号
    addSlot:function(){
    	JinHuaTableLogic.addSlot();
    },
    //移除信号
	removeSlot:function(){
		JinHuaTableLogic.removeSlot();
	},
    //添加监听
    addCallback:function(){
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Panel_PrivateRoom"), JinHuaTableLogic.callback_Panel_PrivateRoom, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Panel_roominfo"), JinHuaTableLogic.callback_Panel_roominfo, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Panel_lunshu"), JinHuaTableLogic.callback_Panel_lunshu, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Panel_danzhu"), JinHuaTableLogic.callback_Panel_danzhu, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Panel_zongxiazhu"), JinHuaTableLogic.callback_Panel_zongxiazhu, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_geweihao"), JinHuaTableLogic.callback_Button_geweihao, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_wolaishouqian"), JinHuaTableLogic.callback_Button_wolaishouqian, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_guarenlaile"), JinHuaTableLogic.callback_Button_guarenlaile, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_waiting_emo1"), JinHuaTableLogic.callback_Button_waiting_emo1, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_waiting_emo2"), JinHuaTableLogic.callback_Button_waiting_emo2, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_ptcl"), JinHuaTableLogic.callback_Button_ptcl, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_snh"), JinHuaTableLogic.callback_Button_snh, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_xfnym"), JinHuaTableLogic.callback_Button_xfnym, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_afterfold_emo1"), JinHuaTableLogic.callback_Button_afterfold_emo1, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_afterfold_emo2"), JinHuaTableLogic.callback_Button_afterfold_emo2, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_xiexie"), JinHuaTableLogic.callback_Button_xiexie, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_zhunixiaju"), JinHuaTableLogic.callback_Button_zhunixiaju, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_laozi"), JinHuaTableLogic.callback_Button_laozi, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_win_emo1"), JinHuaTableLogic.callback_Button_win_emo1, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_win_emo2"), JinHuaTableLogic.callback_Button_win_emo2, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_yunqicha"), JinHuaTableLogic.callback_Button_yunqicha, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_dadebucuo"), JinHuaTableLogic.callback_Button_dadebucuo, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_nizabushangtian"), JinHuaTableLogic.callback_Button_nizabushangtian, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_lose_emo1"), JinHuaTableLogic.callback_Button_lose_emo1, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_lose_emo2"), JinHuaTableLogic.callback_Button_lose_emo2, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_tableChat"), JinHuaTableLogic.callback_Button_tableChat, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_otherturn_fold"), JinHuaTableLogic.callback_Button_otherturn_fold, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_otherturn_alwaysbet"), JinHuaTableLogic.callback_Button_otherturn_alwaysbet, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_mine_fold"), JinHuaTableLogic.callback_Button_mine_fold, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_mine_raise"), JinHuaTableLogic.callback_Button_mine_raise, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_mine_call"), JinHuaTableLogic.callback_Button_mine_call, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_canpk_fold"), JinHuaTableLogic.callback_Button_canpk_fold, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_canpk_pk"), JinHuaTableLogic.callback_Button_canpk_pk, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_canpk_raise"), JinHuaTableLogic.callback_Button_canpk_raise, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_canpk_call"), JinHuaTableLogic.callback_Button_canpk_call, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_raise_one"), JinHuaTableLogic.callback_Button_raise_one, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_raise_two"), JinHuaTableLogic.callback_Button_raise_two, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_raise_three"), JinHuaTableLogic.callback_Button_raise_three, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_raise_cancel"), JinHuaTableLogic.callback_Button_raise_cancel, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_allin_fold"), JinHuaTableLogic.callback_Button_allin_fold, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_allin_pk"), JinHuaTableLogic.callback_Button_allin_pk, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_allin_allin"), JinHuaTableLogic.callback_Button_allin_allin, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_allin_call"), JinHuaTableLogic.callback_Button_allin_call, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_onlyraise_raise"), JinHuaTableLogic.callback_Button_onlyraise_raise, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_onlycall_call"), JinHuaTableLogic.callback_Button_onlycall_call, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_onlypk_pk"), JinHuaTableLogic.callback_Button_onlypk_pk, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_tequan"), JinHuaTableLogic.callback_Button_tequan, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_gift"), JinHuaTableLogic.callback_Button_gift, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_changeCard"), JinHuaTableLogic.callback_Button_changeCard, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_noCompare"), JinHuaTableLogic.callback_Button_noCompare, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"btn_libao"), JinHuaTableLogic.callback_btn_libao, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"btn_renwu"), JinHuaTableLogic.callback_btn_renwu, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"btn_onlinebonus"), JinHuaTableLogic.callback_btn_onlinebonus, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_more"), JinHuaTableLogic.callback_Button_more, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_goMatch"), JinHuaTableLogic.callback_Button_goMatch, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_stayTable"), JinHuaTableLogic.callback_Button_stayTable, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_barrage"), JinHuaTableLogic.callback_Button_barrage, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Image_barragelock"), JinHuaTableLogic.callback_Image_barragelock, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_quickMatch"), JinHuaTableLogic.callback_Button_quickMatch, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.bindEventCallback("JinHuaTableLogic#", CocoStudio.getComponent(JinHuaTableLogic.view,"Button_matchRank"), JinHuaTableLogic.callback_Button_matchRank, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    //移除监听
    removeCallback:function(){
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Panel_PrivateRoom"), JinHuaTableLogic.callback_Panel_PrivateRoom, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Panel_roominfo"), JinHuaTableLogic.callback_Panel_roominfo, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Panel_lunshu"), JinHuaTableLogic.callback_Panel_lunshu, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Panel_danzhu"), JinHuaTableLogic.callback_Panel_danzhu, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Panel_zongxiazhu"), JinHuaTableLogic.callback_Panel_zongxiazhu, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_geweihao"), JinHuaTableLogic.callback_Button_geweihao, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_wolaishouqian"), JinHuaTableLogic.callback_Button_wolaishouqian, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_guarenlaile"), JinHuaTableLogic.callback_Button_guarenlaile, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_waiting_emo1"), JinHuaTableLogic.callback_Button_waiting_emo1, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_waiting_emo2"), JinHuaTableLogic.callback_Button_waiting_emo2, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_ptcl"), JinHuaTableLogic.callback_Button_ptcl, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_snh"), JinHuaTableLogic.callback_Button_snh, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_xfnym"), JinHuaTableLogic.callback_Button_xfnym, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_afterfold_emo1"), JinHuaTableLogic.callback_Button_afterfold_emo1, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_afterfold_emo2"), JinHuaTableLogic.callback_Button_afterfold_emo2, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_xiexie"), JinHuaTableLogic.callback_Button_xiexie, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_zhunixiaju"), JinHuaTableLogic.callback_Button_zhunixiaju, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_laozi"), JinHuaTableLogic.callback_Button_laozi, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_win_emo1"), JinHuaTableLogic.callback_Button_win_emo1, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_win_emo2"), JinHuaTableLogic.callback_Button_win_emo2, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_yunqicha"), JinHuaTableLogic.callback_Button_yunqicha, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_dadebucuo"), JinHuaTableLogic.callback_Button_dadebucuo, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_nizabushangtian"), JinHuaTableLogic.callback_Button_nizabushangtian, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_lose_emo1"), JinHuaTableLogic.callback_Button_lose_emo1, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_lose_emo2"), JinHuaTableLogic.callback_Button_lose_emo2, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_tableChat"), JinHuaTableLogic.callback_Button_tableChat, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_otherturn_fold"), JinHuaTableLogic.callback_Button_otherturn_fold, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_otherturn_alwaysbet"), JinHuaTableLogic.callback_Button_otherturn_alwaysbet, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_mine_fold"), JinHuaTableLogic.callback_Button_mine_fold, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_mine_raise"), JinHuaTableLogic.callback_Button_mine_raise, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_mine_call"), JinHuaTableLogic.callback_Button_mine_call, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_canpk_fold"), JinHuaTableLogic.callback_Button_canpk_fold, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_canpk_pk"), JinHuaTableLogic.callback_Button_canpk_pk, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_canpk_raise"), JinHuaTableLogic.callback_Button_canpk_raise, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_canpk_call"), JinHuaTableLogic.callback_Button_canpk_call, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_raise_one"), JinHuaTableLogic.callback_Button_raise_one, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_raise_two"), JinHuaTableLogic.callback_Button_raise_two, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_raise_three"), JinHuaTableLogic.callback_Button_raise_three, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_raise_cancel"), JinHuaTableLogic.callback_Button_raise_cancel, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_allin_fold"), JinHuaTableLogic.callback_Button_allin_fold, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_allin_pk"), JinHuaTableLogic.callback_Button_allin_pk, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_allin_allin"), JinHuaTableLogic.callback_Button_allin_allin, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_allin_call"), JinHuaTableLogic.callback_Button_allin_call, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_onlyraise_raise"), JinHuaTableLogic.callback_Button_onlyraise_raise, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_onlycall_call"), JinHuaTableLogic.callback_Button_onlycall_call, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_onlypk_pk"), JinHuaTableLogic.callback_Button_onlypk_pk, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_tequan"), JinHuaTableLogic.callback_Button_tequan, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_gift"), JinHuaTableLogic.callback_Button_gift, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_changeCard"), JinHuaTableLogic.callback_Button_changeCard, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_noCompare"), JinHuaTableLogic.callback_Button_noCompare, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#btn_libao"), JinHuaTableLogic.callback_btn_libao, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#btn_renwu"), JinHuaTableLogic.callback_btn_renwu, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#btn_onlinebonus"), JinHuaTableLogic.callback_btn_onlinebonus, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_more"), JinHuaTableLogic.callback_Button_more, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_goMatch"), JinHuaTableLogic.callback_Button_goMatch, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_stayTable"), JinHuaTableLogic.callback_Button_stayTable, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_barrage"), JinHuaTableLogic.callback_Button_barrage, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Image_barragelock"), JinHuaTableLogic.callback_Image_barragelock, BUTTON_CLICK, BUTTON_SOUND_NONE + BUTTON_ANIMATION_NONE);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_quickMatch"), JinHuaTableLogic.callback_Button_quickMatch, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
		Frameworks.unbindEventCallback(CocoStudio.getComponent(JinHuaTableLogic.view,"JinHuaTableLogic#Button_matchRank"), JinHuaTableLogic.callback_Button_matchRank, BUTTON_CLICK, BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_OUT);
    },
    
    setModuleLayer:function(moduleLayer){
    	this.moduleLayer = moduleLayer;
	},
	//层级
	getModuleLayer:function(moduleLayer){
		return this.moduleLayer;
	},
    //休眠
    sleepModule:function(){
		//Frameworks.releaseOnKeypadEventListener(JinHuaTableLogic.view);
		JinHuaTableLogic.view.setTouchEnabled(false);
		this.removeCallback();
		Frameworks.emit(SignalCommon.Signal_SleepModule_Done);
    },
    //唤醒
    wakeModule:function(){
    	//Frameworks.setOnKeypadEventListener(JinHuaTableLogic.view, JinHuaTableLogic.onKeypad);
        JinHuaTableLogic.view.setTouchEnabled(true);
        this.addCallback();
    },
    //销毁
    destroyModule:function(destroyType){
        //Frameworks.releaseOnKeypadEventListener(JinHuaTableLogic.view);
		this.destroy();

		if(destroyType == DESTROY_TYPE_EFFECT){
			//不销毁数据
		}else if(destroyType == DESTROY_TYPE_CLEAN){
			//销毁数据
			Frameworks.moduleCleanUp(JinHuaTableLogic);
			JinHuaTableLogic.releaseData();
		}
	
		JinHuaTableLogic.view.removeFromParent(true);
		this.reset();
	
		Frameworks.emit(SignalCommon.Signal_DestroyModule_Done);
    }
});
