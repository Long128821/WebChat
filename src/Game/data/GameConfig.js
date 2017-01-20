JINHUA_GAME_ID = 4;//炸金花gameID
var GameConfig= {
    GAME_ID:4,
    JINHUA_GAME_ID:4,//金花游戏ID
    //如果当前屏幕的比例是大于1.6,则使用1136x640的UI工程(1136 / 640 = 1.7)
    //如果当前屏幕的比例是大于1.4小于1.6,则使用960x640的UI工程(960 / 640 = 1.5)
    //如果当前屏幕的比例是小于1.4,则使用的UI工程(待定)
    SCREEN_PROPORTION_GREAT:1.6,//大的屏幕比例
    SCREEN_PROPORTION_SMALL:1.4,//小的屏幕比例
    RealProportion:1.775,//真实的屏幕比例(默认是1.775)
    ScaleAbscissa:1,//横坐标的缩放
    ScaleOrdinate:1,//纵坐标的缩放
    ScreenWidth:1136,//屏幕宽度（分辨率）
    ScreenHeight:640,//屏幕高度（分辨率）
    isPlayMusic:false,//是否播放背景音乐
    isPlayEffect:false,//是否播放音效
    NOTICE_MOVE_TIME:0.013,//滚动时间
    URL_TABLE_CUSTOMSERVICE_HELP:"http://f.99sai.com/jinhua/html/comm_help.html",//设置--帮助
    m_curBaseLayer:null,//当前底层界面
    mnHallInitSendMsg:false,//在大厅界面是否发送公共消息请求
    GOODS_ID_SUPERIORFACE:12,//高级表情包物品ID
    GOODS_ID_CHANGECARD:24,//换牌道具物品ID
    GOODS_ID_NO_PK:25,//禁比道具物品ID
    remainSuperiorFaceTime:0,//高级表情使用剩余时间

    getMNHallInitSendMsg:function(){
        return this.mnHallInitSendMsg;
    },
    setMNHallInitSendMsg:function(mnHallInitSendMsg){
        this.mnHallInitSendMsg= mnHallInitSendMsg== undefined?false:mnHallInitSendMsg;
    },

    //初始化游戏公共数据
    initGameCommonData:function(){
        this.mnHallInitSendMsg= false;
        this.remainSuperiorFaceTime= 0;
    },

    getGameMusicOff:function(){
        return this.isPlayMusic;
    },
    setGameMusicOff:function(isPlayMusic){
        this.isPlayMusic= isPlayMusic== undefined?false:isPlayMusic;
    },

    getGameSoundOff:function(){
        return this.isPlayEffect;
    },
    setGameSoundOff:function(isPlayEffect){
        this.isPlayEffect= isPlayEffect== undefined?false:isPlayEffect;
    },

    /**
     * 设置当前屏幕的分辨率
     * 一级界面设置显示屏幕比例(本期3.06pad版留黑边)
     * 二三级界面使用当前一级界面屏幕比例进行缩放(对应屏幕比例的UI不存在)
     * @param UIView    进行适配的view
     * @param gui   当前界面的GUI
     * @param UIDesignWidth UI工程的宽
     * @param UIDesignHeight UI工程的高
     * @param kResolution 适配的方式 kResolutionExactFit(拉伸)、kResolutionShowAll(留黑边)
     */
    setCurrentScreenResolution:function(UIView, gui, UIDesignWidth, UIDesignHeight, kResolution){
        //Todo:适配方案
        //如果是一级界面,设置游戏分辨率
        this.ScreenWidth = UIDesignWidth;
        this.ScreenHeight = UIDesignHeight;
        cc.view.setDesignResolutionSize(this.ScreenWidth, this.ScreenHeight, kResolution);
    },
    //获取当前底层界面
    getCurBaseLayer:function(){
        return this.m_curBaseLayer;
    },
    //设置当前底层界面
    setCurBaseLayer:function(curBaseLayer){
        if(!Common.judgeValueIsEffect(curBaseLayer)) return;
        this.m_curBaseLayer= curBaseLayer;
        //每次跳转界面要做的逻辑处理
        if(this.m_curBaseLayer!= GUI_LOADING && this.m_curBaseLayer!= GUI_LOGIN){
            sendGIFTBAGID_USER_ENCHARGE_INFO();//请求个人充值金额
            sendGIFTBAGID_GET_GIFTBAG_MSG();//请求礼包状态
            sendBASEID_TIMESTAMP_SYNC();
        }
    }
};

GameConfig.initGameCommonData();

