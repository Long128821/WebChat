//数据图标集
var ProfileHall= {
    //大厅初始化-获取玩家数据
    slot_BASEID_GET_BASEINFO:function(dataTable){
        profile_user.readBASEID_GET_BASEINFO(dataTable);
        //初始化大厅基本数据
        HallLogic.initHallBaseData();
    },
    //获取玩家本身数据
    slot_JINHUA_MGR_USER_INFO:function(dataTable){
        //获取玩家本身数据
        Profile_JinHuaOtherUserInfo.readJINHUA_MGR_USER_INFO(dataTable);
        profile_user.readJINHUA_MGR_USER_INFO(dataTable);

        MvcEngine.createModule(GUI_OTHERUSERINFO);
    },
    //更新玩家用户信息(DBID_USER_INFO)
    slot_DBID_USER_INFO:function(dataTable){
        profile_user.readDBID_USER_INFO(dataTable);
        //更新大厅数据
        HallLogic.updateHallData();
    },
    //在线时长
    slot_JINHUA_MGR_SETTING:function(dataTable){
        //设置金花数据
        Profile_JinHuaSetting.readJINHUA_MGR_SETTING(dataTable);
        //设置VIP等级
        HallLogic.setUserTitle();
        //设置同时在线人数
        HallLogic.setOnlinePlayerNumber();
        //Todo:首充翻倍 可以在JINHUA_MGR_SETTING中，也可以单独的获取(JINHUA_MGR_RECHARGE_REBATE_INFO)
        //显示首充翻倍
        HallLogic.setShouChongFanBei();
    },
    //游戏公告
    slot_JINHUA_MGR_NOTICE:function(dataTable){
        if(dataTable["RecordListCnt"]>0){
            HallLogic.createSystemNoticeLabel(dataTable["RecordList"][0].content, cc.color(dataTable["RecordList"][0].colorR, dataTable["RecordList"][0].colorG, dataTable["RecordList"][0].colorB));
        }
    },
    //金花每日工资
    slot_JINHUA_MGR_DAILY_SALARY:function(dataTable){
        if(!Common.judgeValueIsEffect(dataTable)) return;
        Profile_DailySalary.setDailySalaryInfoTable(dataTable);
        //可否领取今日工资
        if(dataTable["CanReceive"]== 1){
            MvcEngine.createModule(GUI_DAILYSALARY);
        }
    },
    //初始化图片列表
    slot_MANAGERID_GET_INIT_PIC:function(dataTable){

    },
    //金花玩家登录请求领节日礼物
    slot_JINHUA_MGR_JH_ACTIVITY:function(dataTable){
        //Todo:mvcEngine.logicModuleIsShow(GUI_DAILYSALARY)
        //mvcEngine.createModule(GUI_SYSTEMPROMPTDIALOG)
    },
    //请求进入聊天室
    slot_IMID_ENTER_CHAT_ROOM:function(dataTable){

    },
    //请求进入聊天室
    slot_MANAGERID_GET_MINIGAME_PROMOTION:function(dataTable){
//        GameArmature.hideHallBtnArmature()
//        showHallAnimation()
    },
    //聊天室发言
    slot_IMID_CHAT_ROOM_SPEAK:function(dataTable){
        //TQJinHuaForLua\cached_res\script\module\hall\logic
        //HallMiniChatLayer.addOneChat()
    },
    //扎金花主页活动
    slot_JINHUA_MGR_INDEX_ACTIVITY:function(dataTable){
//        local activityTable = profile.Activity.getJinHuaActivityTable()
//        if activityTable.ActivityList == nil or #activityTable.ActivityList == 0 then
//        --没数据
//        else
//        --有数据
//        HallActivityLayer.initData(activityTable.ActivityList)
//        end
    },
    //扎金花好友是否有红点 (JINHUA_MGR_FRIEND_HAVE_REDP）
    slot_JINHUA_MGR_FRIEND_HAVE_REDP:function(dataTable){
        if(dataTable== undefined) return;
        //toDo:添加Profile_HongDian
        if(HallLogic.friendRedMark){
            HallLogic.friendRedMark.setVisible(dataTable["Result"]== 1);
        }
    },
    //MAIL_SYSTEM_MESSGE_LIST
    slot_MAIL_SYSTEM_MESSGE_LIST:function(dataTable){
        if(dataTable== undefined) return;

        Profile_Message.setSystemMessageLisTable(dataTable);
        if(HallLogic.emailRedMark){
            HallLogic.emailRedMark.setVisible(Profile_Message.getSystemMessageIsShowRedPoint());
        }
    },
    //MANAGERID_HINT_BIND_WECHAT
    slot_MANAGERID_HINT_BIND_WECHAT:function(dataTable){
//        local isHint = profileCommon.BindWechat.isHintBindWeChat()
//        if isHint then
//        mvcEngine.createModule(GUI_BINDWECHAT);
//        end
    },
    //首充翻倍
    slot_JINHUA_MGR_RECHARGE_REBATE_INFO:function(dataTable){
        //Todo:profilePay.PayChannelData.IsRechargeRebate()
    }
};