//////////////////按钮状态////////////////
STATUS_BUTTON_WAIT = 0;//等待
STATUS_BUTTON_OTHERTURN = 1;
STATUS_BUTTON_MYTURN = 2;
STATUS_BUTTON_RAISE = 3;
STATUS_BUTTON_ALLIN = 4;
STATUS_BUTTON_CANPK = 5;
STATUS_BUTTON_GUIDE_ONLY_CHECK = 6;
STATUS_BUTTON_GUIDE_ONLY_RAISE = 7;
STATUS_BUTTON_GUIDE_ONLY_CALL = 8;
STATUS_BUTTON_GUIDE_ONLY_PK = 9;
//////////////////快捷聊天状态////////////////
STATUS_QUICK_CHAT_WAITING = 0;
STATUS_QUICK_CHAT_FOLD = 1;
STATUS_QUICK_CHAT_WIN = 2;
STATUS_QUICK_CHAT_LOSE = 3;
//////////////-用户状态////////////////////
STATUS_PLAYER_NONE = 0;//无任何操作
STATUS_PLAYER_WATCH = 1;//观看
STATUS_PLAYER_SITDOWN = 2;//坐下
STATUS_PLAYER_READY = 3;//准备
STATUS_PLAYER_PLAYING = 4;//游戏中
STATUS_PLAYER_LOOKCARD = 5;//看牌
STATUS_PLAYER_PK_FAILURE = 6;//比牌失败
STATUS_PLAYER_DISCARD = 7;//弃牌
STATUS_PLAYER_GAMERESULT = 8;//游戏结果
//////////////-下注类型////////////////////
TYPE_BET_ANTE = 1;//下底注
TYPE_BET_CALL = 2;//跟注
TYPE_BET_RAISE = 3;//加注
TYPE_BET_ALLIN = 4;//全押
TYPE_BET_PK = 5;//比牌押注
//////////////-牌桌状态////////////////////
STATUS_TABLE_WAITTING = 1;//牌桌等待状态
STATUS_TABLE_READY = 2;//牌桌准备状态
STATUS_TABLE_PLAYING = 3;//牌桌游戏进行中
STATUS_TABLE_RESULT = 4;//牌桌游戏进结果
//////////////聊天类型//////////////////////
TYPE_CHAT_COMMON = 1;//聊天类型：普通表情
TYPE_CHAT_SUPERIOR = 2;//聊天类型：高级表情
TYPE_CHAT_TEXT = 3;//聊天类型：文字
TYPE_CHAT_COMMON_V2 = 4;//聊天类型：V2新版表情

//////////////数据存储Key////////////////////
KEY_SET_EFFECT = "key_set_effect_play";//播放音效
KEY_SET_BGMUSIC = "key_set_bgmusic_play";//播放音乐
KEY_SET_VIBRATE = "key_set_vibrate_play";//播放震动

//按钮透明度
ALPHA_CAN_TOUCH = 255;
ALPHA_CAN_NOT_TOUCH = 102;

//////////////////////////////牌桌适配常量///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//[[//玩家图片参数//]]//
PLAYER_PIC_WIDTH = GameConfig.ScreenWidth /9 ;//玩家的宽度 (127.8\126.2     9/80)
PLAYER_PIC_HEIGHT = GameConfig.ScreenHeight / 4;// 玩家的高度(154.7\160    29/ 120)
FROM_THE_BUBBLE_MOVES = GameConfig.ScreenHeight / 20; //气泡移动的距离(  3/80)
//[[//发牌参数//]]//
CARDS_SPRITE_POSITION_X = GameConfig.ScreenWidth / 2; //牌堆位置X轴
CARDS_SPRITE_POSITION_Y = GameConfig.ScreenHeight * 5 / 6; //牌堆位置Y轴
//[[//按钮参数//]]//
BTN_X_AXIS_INTERVAL = GameConfig.ScreenWidth / 90 ; //放弃等按钮按钮在X轴的间隔(18.46\18.47  13/800)
FIRST_BTN_DISTANCE_LEFT_SIDE = GameConfig.ScreenWidth / 4.5 ; //第一个按钮(放弃按钮)距离左侧的距离(157.62\157.78  111 / 800)
CHAT_BTN_X_POSITION = GameConfig.ScreenWidth / 8; //聊天按钮x坐标所在位置
RECHARGE_BTN_X_POSITION = GameConfig.ScreenWidth / 25;//充值按钮x坐标所在位置
//[[//加注列表按钮参数//]]//
RAISE_BTN_LIST_IN_THE_INTERVAL_X_AXIS = GameConfig.ScreenWidth / 45; //加注列表按钮在X轴的间隔(25.56\25.59 18 / 800)
FIRST_BTN_RAISE_DISTANCE_LEFT_SIDE = GameConfig.ScreenWidth / 3; //第一个加注列表按钮距离左侧的距离(343.64\344.24  242 / 800)
//[[//客户端第一个玩家参数//]]//
TABLE_PLAYER_1_LOCATION_X = 464 ; //玩家1位置x轴(431.68\436.92 304 / 800)
TABLE_PLAYER_1_LOCATION_y = 77 ; //玩家1位置y轴( 100 /480)
SPRITE_PLAYER_1_LOC_X_DISTANCE_BET_COIN_X = 643;//玩家1坐标的Y轴距离已押金额label的X轴距离()
SPRITE_PLAYER_1_LOC_Y_DISTANCE_BET_COIN_Y = 103;//玩家1坐标的Y轴距离已押金额label的Y轴距离()
SPRITE_PLAYER_1_LOC_X_DISTANCE_ICOIN_X = 668 ; //庄、弃、败等iconX距离玩家位置X(137.74\137.7  97 / 800)
SPRITE_PLAYER_1_LOC_Y_DISTANCE_ICOIN_Y = 43; //庄、弃、败等iconY距离玩家位置y(126.67\126.73  95 / 480)
SPRITE_PLAYER_1_LOC_X_DISTANCE_CARD_LOC_X = 628; //玩家1的牌的x轴距离玩家X轴的距离(143.42\ 101 / 800)
SPRITE_PLAYER_1_LOC_Y_DISTANCE_CARD_LOC_Y = 45; //玩家1的牌的y轴距离玩家y轴的距离(44 33 / 480)
SPRITE_PLAYER_1_LOC_X_DISTANCE_REALFACE_X = 472;//玩家1真人认证图标位置 X轴
SPRITE_PLAYER_1_LOC_Y_DISTANCE_REALFACE_Y = 197; //玩家1真人认证图标位置 Y轴
SPRITE_PLAYER_1_LOC_X_DISTANCE_NAME_X = 570;//玩家1名字条图标位置 X轴
SPRITE_PLAYER_1_LOC_Y_DISTANCE_NAME_Y = 98; //玩家1名字条图标位置 Y轴
SPRITE_PLAYER_1_LOC_X_DISTANCE_COIN_X = 572; //玩家1金币条图标位置 X轴
SPRITE_PLAYER_1_LOC_Y_DISTANCE_COIN_Y = 70; //玩家1金币条图标位置 Y轴
SPRITE_PLAYER_1_LOC_X_DISTANCE_TIP_X = 470; //玩家1称号条图标位置 X轴
SPRITE_PLAYER_1_LOC_Y_DISTANCE_TIP_Y = 64; //玩家1称号条图标位置 Y轴
SPRITE_PLAYER_1_LOC_X_DISTANCE_TIMER_X = 639; //玩家1倒计时X轴
SPRITE_PLAYER_1_LOC_Y_DISTANCE_TIMER_Y = 133; //玩家1倒计时Y轴
//[[//客户端第二个玩家参数//]]//
TABLE_PLAYER_2_LOCATION_X = 98; //玩家2位置x轴(127.8  90 / 800)
TABLE_PLAYER_2_LOCATION_Y = 209; //玩家2位置y轴(169.33 127 / 480)
SPRITE_PLAYER_2_LOC_X_DISTANCE_BET_COIN_X = 300;//玩家2坐标的X轴距离已押金额label的X距离(4 / 800 )
SPRITE_PLAYER_2_LOC_Y_DISTANCE_BET_COIN_Y = 250;//玩家2坐标的Y轴距离已押金额label的Y距离(44 33 / 480)
SPRITE_PLAYER_2_LOC_Y_DISTANCE_ICOIN_X = 305; //庄、弃、败等iconX距离玩家位置x(54.67 41 / 480)
SPRITE_PLAYER_2_LOC_Y_DISTANCE_ICOIN_Y = 190; //庄、弃、败等iconY距离玩家位置y(54.67 41 / 480)
SPRITE_PLAYER_2_LOC_X_DISTANCE_CARD_LOC_X = 285; //玩家2牌的x轴距离玩家X轴的距离(144.84 102 / 800)
SPRITE_PLAYER_2_LOC_Y_DISTANCE_CARD_LOC_Y = 182; //玩家2牌的y轴距离玩家y轴的距离(72  54 / 480)
SPRITE_PLAYER_2_LOC_X_DISTANCE_REALFACE_X = 106; //玩家2真人认证图标位置 X轴
SPRITE_PLAYER_2_LOC_Y_DISTANCE_REALFACE_Y = 324; //玩家2真人认证图标位置 Y轴
SPRITE_PLAYER_2_LOC_X_DISTANCE_NAME_X = 261; //玩家2名字条图标位置 X轴
SPRITE_PLAYER_2_LOC_Y_DISTANCE_NAME_Y = 243; //玩家2名字条图标位置 Y轴
SPRITE_PLAYER_2_LOC_X_DISTANCE_COIN_X = 173; //玩家2金币条图标位置 X轴
SPRITE_PLAYER_2_LOC_Y_DISTANCE_COIN_Y = 228; //玩家2金币条图标位置 Y轴
SPRITE_PLAYER_2_LOC_X_DISTANCE_TIP_X = 133; //玩家2称号条图标位置 X轴
SPRITE_PLAYER_2_LOC_Y_DISTANCE_TIP_Y = 299; //玩家2称号条图标位置 Y轴
SPRITE_PLAYER_2_LOC_X_DISTANCE_PK_X = 175; //玩家2PK图标位置 X轴
SPRITE_PLAYER_2_LOC_Y_DISTANCE_PK_Y = 261; //玩家2PK图标位置 Y轴
SPRITE_PLAYER_2_LOC_X_DISTANCE_TIMER_X = 272; //玩家2倒计时X轴
SPRITE_PLAYER_2_LOC_Y_DISTANCE_TIMER_Y = 280; //玩家2倒计时X轴
//[[//客户端第三个玩家参数//]]//
TABLE_PLAYER_3_LOCATION_X = 190; //玩家3位置x轴(15.62 11 / 800)
TABLE_PLAYER_3_LOCATION_Y = 429; //玩家3位置y轴(396 297 / 480)
SPRITE_PLAYER_3_LOC_X_DISTANCE_BET_COIN_X = 392;//玩家3坐标的X轴距离已押金额label的X距离(9.94 7 / 800)
SPRITE_PLAYER_3_LOC_Y_DISTANCE_BET_COIN_Y = 470;//玩家3坐标的Y轴距离已押金额label的Y距离(352 264 / 480)
SPRITE_PLAYER_3_LOC_X_DISTANCE_ICOIN_X  = 395; //庄、弃、败等iconX距离玩家位置X(160.46  113 / 800)
SPRITE_PLAYER_3_LOC_Y_DISTANCE_ICOIN_Y = 410; //庄、弃、败等iconY距离玩家位置y(522.67 392 / 480)
SPRITE_PLAYER_3_LOC_X_DISTANCE_CARD_LOC_X = 377; //玩家3牌的x轴距离玩家X轴的距离(160.46 113 / 800)
SPRITE_PLAYER_3_LOC_Y_DISTANCE_CARD_LOC_Y = 402; //玩家3牌的y轴距离玩家y轴的距离(468 351 / 480)
SPRITE_PLAYER_3_LOC_X_DISTANCE_REALFACE_X = 198; //玩家3真人认证图标位置 X轴
SPRITE_PLAYER_3_LOC_Y_DISTANCE_REALFACE_Y = 539; //玩家3真人认证图标位置 Y轴
SPRITE_PLAYER_3_LOC_X_DISTANCE_NAME_X = 261; //玩家3名字条图标位置 X轴
SPRITE_PLAYER_3_LOC_Y_DISTANCE_NAME_Y = 484; //玩家3名字条图标位置 Y轴
SPRITE_PLAYER_3_LOC_X_DISTANCE_COIN_X = 261; //玩家3金币条图标位置 X轴
SPRITE_PLAYER_3_LOC_Y_DISTANCE_COIN_Y = 456; //玩家3金币条图标位置 Y轴
SPRITE_PLAYER_3_LOC_X_DISTANCE_TIP_X = 159; //玩家3称号条图标位置 X轴
SPRITE_PLAYER_3_LOC_Y_DISTANCE_TIP_Y = 449; //玩家3称号条图标位置 Y轴
SPRITE_PLAYER_3_LOC_X_DISTANCE_PK_X = 267; //玩家3PK图标位置 X轴
SPRITE_PLAYER_3_LOC_Y_DISTANCE_PK_Y = 481; //玩家3PK条图标位置 Y轴
SPRITE_PLAYER_3_LOC_X_DISTANCE_TIMER_X = 387; //玩家3倒计时X轴
SPRITE_PLAYER_3_LOC_Y_DISTANCE_TIMER_Y = 500; //玩家3倒计时X轴
//[[//客户端第四个玩家参数//]]//
TABLE_PLAYER_4_LOCATION_X = 809; //玩家4位置x轴( 698 / 800)
TABLE_PLAYER_4_LOCATION_Y = 429; //玩家4位置y轴(396 297 / 480)
SPRITE_PLAYER_4_LOC_X_DISTANCE_BET_COIN_X = 697;//玩家4坐标的X轴距离已押金额label的X距离(694 /800)
SPRITE_PLAYER_4_LOC_Y_DISTANCE_BET_COIN_Y = 470;//玩家4坐标的Y轴距离已押金额label的Y距离(352 264 / 480)
SPRITE_PLAYER_4_LOC_X_DISTANCE_ICOIN_X = 725; //庄、弃、败等iconX距离玩家位置X(655 / 800)
SPRITE_PLAYER_4_LOC_Y_DISTANCE_ICOIN_Y = 410; //庄、弃、败等iconY距离玩家位置y(522.67 392 / 480)
SPRITE_PLAYER_4_LOC_X_DISTANCE_CARD_LOC_X = 682; //玩家4牌的x轴距离玩家X轴的距离(627 / 800)
SPRITE_PLAYER_4_LOC_Y_DISTANCE_CARD_LOC_Y = 402; //玩家4牌的y轴距离玩家y轴的距离(468 351 / 480)
SPRITE_PLAYER_4_LOC_X_DISTANCE_REALFACE_X = 817; //玩家4真人认证图标位置 X轴
SPRITE_PLAYER_4_LOC_Y_DISTANCE_REALFACE_Y = 539; //玩家4真人认证图标位置 Y轴
SPRITE_PLAYER_4_LOC_X_DISTANCE_NAME_X = 947; //玩家4名字条图标位置 X轴
SPRITE_PLAYER_4_LOC_Y_DISTANCE_NAME_Y = 484; //玩家4名字条图标位置 Y轴
SPRITE_PLAYER_4_LOC_X_DISTANCE_COIN_X = 947; //玩家4金币条图标位置 X轴
SPRITE_PLAYER_4_LOC_Y_DISTANCE_COIN_Y = 456; //玩家4金币条图标位置 Y轴
SPRITE_PLAYER_4_LOC_X_DISTANCE_TIP_X = 838; //玩家4称号条图标位置 X轴
SPRITE_PLAYER_4_LOC_Y_DISTANCE_TIP_Y = 449; //玩家4称号条图标位置 Y轴
SPRITE_PLAYER_4_LOC_X_DISTANCE_PK_X = 886; //玩家4PK条图标位置 X轴
SPRITE_PLAYER_4_LOC_Y_DISTANCE_PK_Y = 481; //玩家4PK条图标位置 Y轴
SPRITE_PLAYER_4_LOC_X_DISTANCE_TIMER_X = 697; //玩家4倒计时X轴
SPRITE_PLAYER_4_LOC_Y_DISTANCE_TIMER_Y = 500; //玩家4倒计时X轴
//[[//客户端第五个玩家参数//]]//
TABLE_PLAYER_5_LOCATION_X = 868; //玩家位置x轴(619 / 800)
TABLE_PLAYER_5_LOCATION_Y = 209; //玩家位置y轴(169.33 127 / 480)
SPRITE_PLAYER_5_LOC_X_DISTANCE_BET_COIN_X = 757;//玩家5坐标的X轴距离已押金额label的X距离(4 / 800)
SPRITE_PLAYER_5_LOC_Y_DISTANCE_BET_COIN_Y = 250;//玩家5坐标的Y轴距离已押金额label的Y距离(44 33 / 480)
SPRITE_PLAYER_5_LOC_X_DISTANCE_ICOIN_X = 785; //庄、弃、败等iconX距离玩家位置X(43 / 480)
SPRITE_PLAYER_5_LOC_Y_DISTANCE_ICOIN_Y = 190; //庄、弃、败等iconY距离玩家位置y(95 / 480)
SPRITE_PLAYER_5_LOC_X_DISTANCE_CARD_LOC_X = 742; //玩家5牌的x轴距离玩家X轴的距离( 71 / 800)
SPRITE_PLAYER_5_LOC_Y_DISTANCE_CARD_LOC_Y = 182; //玩家5牌的y轴距离玩家y轴的距离(72  54 / 480)
SPRITE_PLAYER_5_LOC_X_DISTANCE_REALFACE_X = 876; //玩家5真人认证图标位置 X轴
SPRITE_PLAYER_5_LOC_Y_DISTANCE_REALFACE_Y = 324; //玩家5真人认证图标位置 Y轴
SPRITE_PLAYER_5_LOC_X_DISTANCE_NAME_X = 947; //玩家5名字条图标位置 X轴
SPRITE_PLAYER_5_LOC_Y_DISTANCE_NAME_Y = 243; //玩家5名字条图标位置 Y轴
SPRITE_PLAYER_5_LOC_X_DISTANCE_COIN_X = 947; //玩家5金币条图标位置 X轴
SPRITE_PLAYER_5_LOC_Y_DISTANCE_COIN_Y = 215; //玩家5金币条图标位置 Y轴
SPRITE_PLAYER_5_LOC_X_DISTANCE_TIP_X = 838; //玩家5称号条图标位置 X轴
SPRITE_PLAYER_5_LOC_Y_DISTANCE_TIP_Y = 225; //玩家5称号条图标位置 Y轴
SPRITE_PLAYER_5_LOC_X_DISTANCE_PK_X = 945; //玩家5PK图标位置 X轴
SPRITE_PLAYER_5_LOC_Y_DISTANCE_PK_Y = 261; //玩家5PK图标位置 Y轴
SPRITE_PLAYER_5_LOC_X_DISTANCE_TIMER_X = 757; //玩家5倒计时X轴
SPRITE_PLAYER_5_LOC_Y_DISTANCE_TIMER_Y = 280; //玩家5倒计时X轴
//[[//进入牌桌提示参数//]]//
ENTER_TABLE_TIPS_X = GameConfig.ScreenWidth * 3 / 80;
ENTER_TABLE_TIPS_Y = GameConfig.ScreenHeight / 24;

//金花牌桌数据
var Profile_JinHuaTableConfig= {
    remainChangeCardCnt:0,//换牌卡数量
    remainNoPKCnt:0,//禁比数量
    playerCnt:5,//人数
    fitX:0,//可视原点(屏幕适配X轴偏移)
    fitY:0,//可视原点(屏幕适配X轴偏移)
    bubbleSpriteMoveDistance:0,//气泡移动的距离
    TableScaleX:1,//牌桌缩放比例x
    TableScaleY:1,//牌桌缩放比例y
    playerWidth:0,//玩家的宽度
    playerHeight:0,//玩家的高度
    playerBGWidth:GameConfig.ScreenWidth * 70 / 1136,
    playerBGHeight:GameConfig.ScreenHeight * 70 / 640,
    sendCardsSpritePositionX:0,//牌堆位置 x轴
    sendCardsSpritePositionY:0,//牌堆位置 y轴
    cardsSpriteStartPositionX:0,//发牌的起始位置
    cardsSpriteStartPositionY:0,//发牌的起始位置
    btnsX:0,//按钮组x坐标
    btnGapWidth:0,//按钮组中按钮间距
    btnChatX:0,
    btnRechargeX:0,
    rangLeft:0,
    rangRight:0,
    rangBottom:0,
    rangTop:0,
    btnsRaiseX:0,
    btnRaiseGapWidth:0,
    spritePlayers:null,//桌面上的玩家
    cardWidth:70,
    cardHeight:90,
    cardScale:0.75,
    enterTablePromptX:0,
    enterTablePromptY:0,
    mySelfLocX:527,//自己坐下时X坐标
    mySelfLocY:25,//自己坐下时Y坐标
    myCard1Rotation:-15,//我的牌的旋转角度
    myCard2Rotation:0,//我的牌的旋转角度
    myCard3Rotation:15,//我的牌的旋转角度
    ROUND_TIME:14,//金花每回合时间
    CAN_PK_ROUND:3,//几回合后可以比牌
    clear:function(){

    },
    //换牌卡数量
    getRemainChangeCardCnt:function(){
        return this.remainChangeCardCnt;
    },
    setRemainChangeCardCnt:function(remainChangeCardCnt){
        this.remainChangeCardCnt= remainChangeCardCnt== undefined?0:remainChangeCardCnt;
    },
    //禁比卡数量
    getRemainNoPKCnt:function(){
        return this.remainNoPKCnt;
    },
    setRemainNoPKCnt:function(remainNoPKCnt){
        this.remainNoPKCnt= remainNoPKCnt== undefined?0:remainNoPKCnt;
    },
    //适配预处理，牌桌元素位置初始化
    initTableElmentsCoordinate:function(){
        //适配预处理
        this.preTableFitCoordinate();

        //气泡移动的距离
        this.bubbleSpriteMoveDistance= FROM_THE_BUBBLE_MOVES * this.TableScaleY;
        //玩家的框和高
        this.playerWidth = PLAYER_PIC_WIDTH * this.TableScaleX;
        this.playerHeight = PLAYER_PIC_HEIGHT * this.TableScaleY;
        //初始化发牌位置
        this.initSendCardPosition();
        //初始化下方按钮组左标
        this.initTableBottomBtnLocation();
        //初始化下注区
        this.initTableBetCoinRange();
        //初始化加注按钮组位置
        this.initTableRaiseBtnLocation();

        //初始化5个玩家的位置
        this.initTablePlayerLocation_1();
        this.initTablePlayerLocation_2();
        this.initTablePlayerLocation_3();
        this.initTablePlayerLocation_4();
        this.initTablePlayerLocation_5();

        //初始化其他玩家位置
        this.initOtherPosition();
    },
    //适配预处理
    preTableFitCoordinate:function(){
        this.fitX= 0;
        this.fitY= 0;
    },
    //初始化发牌位置
    initSendCardPosition:function(){
        this.sendCardsSpritePositionX = CARDS_SPRITE_POSITION_X * this.TableScaleX;
        this.sendCardsSpritePositionY = CARDS_SPRITE_POSITION_Y * this.TableScaleY + this.cardHeight*this.cardScale - this.fitY
        this.cardsSpriteStartPositionX = CARDS_SPRITE_POSITION_X * this.TableScaleX;
        this.cardsSpriteStartPositionY = CARDS_SPRITE_POSITION_Y * this.TableScaleY - this.fitY
    },
    //初始化下方按钮组左标
    initTableBottomBtnLocation:function(){
        //按钮组x坐标
        this.btnsX = FIRST_BTN_DISTANCE_LEFT_SIDE * this.TableScaleX;
        //按钮组中按钮间距
        this.btnGapWidth = BTN_X_AXIS_INTERVAL * this.TableScaleX;
        if(this.fitX> 0){
            //防止右边超出屏幕
            var dis = this.fitX/4;
            if(dis> this.btnGapWidth){
                this.btnsX = this.btnsX - (this.fitX - this.btnGapWidth*4);
                this.btnGapWidth = 0;
            }else{
                this.btnGapWidth = this.btnGapWidth-dis;
            }
        }
        this.btnChatX = CHAT_BTN_X_POSITION *  this.TableScaleX;
        this.btnRechargeX = RECHARGE_BTN_X_POSITION *  this.TableScaleX;
    },
    //初始化下注区
    initTableBetCoinRange:function(){
        this.rangLeft = GameConfig.ScreenWidth / 9 * 4;
        this.rangRight = GameConfig.ScreenWidth / 9 * 6;
        this.rangBottom = GameConfig.ScreenHeight / 5 * 2;
        this.rangTop = GameConfig.ScreenHeight / 5 * 3;
    },
    //初始化加注按钮组位置
    initTableRaiseBtnLocation:function(){
        //加注按钮组x坐标
        this.btnsRaiseX = FIRST_BTN_RAISE_DISTANCE_LEFT_SIDE * this.TableScaleX;
        //加注按钮组中按钮间距
        this.btnRaiseGapWidth = RAISE_BTN_LIST_IN_THE_INTERVAL_X_AXIS * this.TableScaleX;
        if(this.fitX> 0){
            var dis= this.fix/5;
            if(dis> this.btnRaiseGapWidth){
                this.btnsRaiseX = this.btnsRaiseX-(this.fitX-this.btnRaiseGapWidth*5);
                this.btnRaiseGapWidth = 0;
            }else{
                this.btnRaiseGapWidth = this.btnRaiseGapWidth-dis;
            }
        }
    },
    //一号位站起/坐下UI更新
    //@param #boolean isMe 是否是自己坐一号位
    initTablePlayerLocation_1:function(){
        if(this.spritePlayers== null){
            this.spritePlayers= {};
        }
        this.spritePlayers[0]= {};

        //玩家精灵位置
        this.spritePlayers[0].locX = TABLE_PLAYER_1_LOCATION_X * this.TableScaleX + this.fitX;
        this.spritePlayers[0].locY = TABLE_PLAYER_1_LOCATION_y * this.TableScaleY - this.fitY - 25;
        //已押金额总数的label位置
        this.spritePlayers[0].betCoinX = SPRITE_PLAYER_1_LOC_X_DISTANCE_BET_COIN_X;
        this.spritePlayers[0].betCoinY = SPRITE_PLAYER_1_LOC_Y_DISTANCE_BET_COIN_Y;
        //庄、弃、败等icon的位置
        this.spritePlayers[0].iconX = SPRITE_PLAYER_1_LOC_X_DISTANCE_ICOIN_X;
        this.spritePlayers[0].iconY = SPRITE_PLAYER_1_LOC_Y_DISTANCE_ICOIN_Y;

        //牌位置的X轴
        var cardLocX = SPRITE_PLAYER_1_LOC_X_DISTANCE_CARD_LOC_X * this.TableScaleX;
        //牌位置的Y轴
        var cardLocY = SPRITE_PLAYER_1_LOC_Y_DISTANCE_CARD_LOC_Y * this.TableScaleY;
        //牌的位置(对于我的牌在TablePlayerEntity中设置角度)
        this.spritePlayers[0].cards = {};
        this.spritePlayers[0].cards[0] = {};
        this.spritePlayers[0].cards[1] = {};
        this.spritePlayers[0].cards[2] = {};
        this.spritePlayers[0].cards[0].locX = cardLocX + this.cardWidth*this.cardScale/2;
        this.spritePlayers[0].cards[0].locY = cardLocY;
        this.spritePlayers[0].cards[1].locX = cardLocX + this.cardWidth*this.cardScale;
        this.spritePlayers[0].cards[1].locY = cardLocY;
        this.spritePlayers[0].cards[2].locX = cardLocX + this.cardWidth*this.cardScale*3/2;
        this.spritePlayers[0].cards[2].locY = cardLocY;
        //1号比牌按钮位置(比牌按钮在别人比牌的时候出现)
        this.spritePlayers[0].pkX = this.spritePlayers[0].cards[1].locX;
        this.spritePlayers[0].pkY = this.spritePlayers[0].cards[1].locY+this.cardHeight/4;

        //1号真人认证图标位置
        this.spritePlayers[0].realFaceX = SPRITE_PLAYER_1_LOC_X_DISTANCE_REALFACE_X;
        this.spritePlayers[0].realFaceY = SPRITE_PLAYER_1_LOC_Y_DISTANCE_REALFACE_Y;

        //1号倒计时位置
        this.spritePlayers[0].timerX = SPRITE_PLAYER_1_LOC_X_DISTANCE_TIMER_X;
        this.spritePlayers[0].timerY = SPRITE_PLAYER_1_LOC_Y_DISTANCE_TIMER_Y;
    },
    //二号位站起/坐下UI更新
    //@param #boolean isMe 是否是自己坐二号位
    initTablePlayerLocation_2:function(){
        this.spritePlayers[1]= {};

        //玩家精灵位置
        this.spritePlayers[1].locX = TABLE_PLAYER_2_LOCATION_X * this.TableScaleX+ this.fitX;
        this.spritePlayers[1].locY = TABLE_PLAYER_2_LOCATION_Y * this.TableScaleY - this.fitY - 30;
        //已押金额总数的label位置
        this.spritePlayers[1].betCoinX = SPRITE_PLAYER_2_LOC_X_DISTANCE_BET_COIN_X;
        this.spritePlayers[1].betCoinY = SPRITE_PLAYER_2_LOC_Y_DISTANCE_BET_COIN_Y;
        //牌位置的X轴
        var cardLocX = SPRITE_PLAYER_2_LOC_X_DISTANCE_CARD_LOC_X * this.TableScaleX;
        //牌位置的Y轴
        var cardLocY = SPRITE_PLAYER_2_LOC_Y_DISTANCE_CARD_LOC_Y * this.TableScaleY;
        //庄、弃、败等icon的位置
        this.spritePlayers[1].iconX = SPRITE_PLAYER_2_LOC_Y_DISTANCE_ICOIN_X;
        this.spritePlayers[1].iconY = SPRITE_PLAYER_2_LOC_Y_DISTANCE_ICOIN_Y;
        //牌的位置
        this.spritePlayers[1].cards = {};
        this.spritePlayers[1].cards[0] = {};
        this.spritePlayers[1].cards[1] = {};
        this.spritePlayers[1].cards[2] = {};
        this.spritePlayers[1].cards[0].locX = cardLocX + this.cardWidth* this.cardScale/2;
        this.spritePlayers[1].cards[0].locY = cardLocY;
        this.spritePlayers[1].cards[1].locX = cardLocX + this.cardWidth* this.cardScale;
        this.spritePlayers[1].cards[1].locY = cardLocY;
        this.spritePlayers[1].cards[2].locX = cardLocX + (this.cardWidth+ this.cardWidth/2)*this.cardScale;
        this.spritePlayers[1].cards[2].locY = cardLocY;
        //2号比牌按钮位置
        this.spritePlayers[1].pkX = SPRITE_PLAYER_2_LOC_X_DISTANCE_PK_X;
        this.spritePlayers[1].pkY = SPRITE_PLAYER_2_LOC_Y_DISTANCE_PK_Y;
        //2号真人认证图标位置
        this.spritePlayers[1].realFaceX = SPRITE_PLAYER_2_LOC_X_DISTANCE_REALFACE_X;
        this.spritePlayers[1].realFaceY = SPRITE_PLAYER_2_LOC_Y_DISTANCE_REALFACE_Y;
        //2号称号底图位置
        this.spritePlayers[1].tipX = SPRITE_PLAYER_2_LOC_X_DISTANCE_TIP_X;
        this.spritePlayers[1].tipY = SPRITE_PLAYER_2_LOC_Y_DISTANCE_TIP_Y;
        //2号倒计时位置
        this.spritePlayers[1].timerX = SPRITE_PLAYER_2_LOC_X_DISTANCE_TIMER_X;
        this.spritePlayers[1].timerY = SPRITE_PLAYER_2_LOC_Y_DISTANCE_TIMER_Y;
    },
    //三号位站起/坐下UI更新
    //@param #boolean isMe 是否是自己坐三号位
    initTablePlayerLocation_3:function(){
        this.spritePlayers[2] = {};
        //玩家精灵位置
        this.spritePlayers[2].locX = TABLE_PLAYER_3_LOCATION_X * this.TableScaleX+ this.fitX;
        this.spritePlayers[2].locY = TABLE_PLAYER_3_LOCATION_Y * this.TableScaleY - this.fitY - 35;
        //已押金额总数的label位置
        this.spritePlayers[2].betCoinX = SPRITE_PLAYER_3_LOC_X_DISTANCE_BET_COIN_X;
        this.spritePlayers[2].betCoinY = SPRITE_PLAYER_3_LOC_Y_DISTANCE_BET_COIN_Y;
        //庄、弃、败等icon的位置
        this.spritePlayers[2].iconX = SPRITE_PLAYER_3_LOC_X_DISTANCE_ICOIN_X;
        this.spritePlayers[2].iconY = SPRITE_PLAYER_3_LOC_Y_DISTANCE_ICOIN_Y;
        //牌的位置
        this.spritePlayers[2].cards = {};
        this.spritePlayers[2].cards[0] = {};
        this.spritePlayers[2].cards[1] = {};
        this.spritePlayers[2].cards[2] = {};
        this.spritePlayers[2].cards[0].locX = SPRITE_PLAYER_3_LOC_X_DISTANCE_CARD_LOC_X * this.TableScaleX+ this.cardWidth*this.cardScale/2+ this.fitX;
        this.spritePlayers[2].cards[0].locY = SPRITE_PLAYER_3_LOC_Y_DISTANCE_CARD_LOC_Y * this.TableScaleY - this.fitY;
        this.spritePlayers[2].cards[1].locX = SPRITE_PLAYER_3_LOC_X_DISTANCE_CARD_LOC_X * this.TableScaleX+ this.cardWidth*this.cardScale+ this.fitX;
        this.spritePlayers[2].cards[1].locY = SPRITE_PLAYER_3_LOC_Y_DISTANCE_CARD_LOC_Y * this.TableScaleY - this.fitY;
        this.spritePlayers[2].cards[2].locX = SPRITE_PLAYER_3_LOC_X_DISTANCE_CARD_LOC_X * this.TableScaleX+(this.cardWidth+ this.cardWidth/2)*this.cardScale+ this.fitX;
        this.spritePlayers[2].cards[2].locY = SPRITE_PLAYER_3_LOC_Y_DISTANCE_CARD_LOC_Y * this.TableScaleY - this.fitY;
        //3号比牌按钮位置
        this.spritePlayers[2].pkX = SPRITE_PLAYER_3_LOC_X_DISTANCE_PK_X;
        this.spritePlayers[2].pkY = SPRITE_PLAYER_3_LOC_Y_DISTANCE_PK_Y;
        //3号真人认证图标位置
        this.spritePlayers[2].realFaceX = SPRITE_PLAYER_3_LOC_X_DISTANCE_REALFACE_X;
        this.spritePlayers[2].realFaceY = SPRITE_PLAYER_3_LOC_Y_DISTANCE_REALFACE_Y;
        //3号称号底图位置
        this.spritePlayers[2].tipX = SPRITE_PLAYER_3_LOC_X_DISTANCE_TIP_X;
        this.spritePlayers[2].tipY = SPRITE_PLAYER_3_LOC_Y_DISTANCE_TIP_Y;
        //3号倒计时位置
        this.spritePlayers[2].timerX = SPRITE_PLAYER_3_LOC_X_DISTANCE_TIMER_X;
        this.spritePlayers[2].timerY = SPRITE_PLAYER_3_LOC_Y_DISTANCE_TIMER_Y
    },
    //四号位站起/坐下UI更新
    //@param #boolean isMe 是否是自己坐四号位
    initTablePlayerLocation_4:function(){
        this.spritePlayers[3] = {};
        //玩家精灵位置
        this.spritePlayers[3].locX = TABLE_PLAYER_4_LOCATION_X * this.TableScaleX- this.fitX;
        this.spritePlayers[3].locY = TABLE_PLAYER_4_LOCATION_Y * this.TableScaleY - this.fitY - 35;
        //已押金额总数的label位置
        this.spritePlayers[3].betCoinX = SPRITE_PLAYER_4_LOC_X_DISTANCE_BET_COIN_X;
        this.spritePlayers[3].betCoinY = SPRITE_PLAYER_4_LOC_Y_DISTANCE_BET_COIN_Y;
        //庄、弃、败等icon的位置
        this.spritePlayers[3].iconX = SPRITE_PLAYER_4_LOC_X_DISTANCE_ICOIN_X;
        this.spritePlayers[3].iconY = SPRITE_PLAYER_4_LOC_Y_DISTANCE_ICOIN_Y;
        //牌位置
        this.spritePlayers[3].cards = {};
        this.spritePlayers[3].cards[0] = {};
        this.spritePlayers[3].cards[1] = {};
        this.spritePlayers[3].cards[2] = {};
        this.spritePlayers[3].cards[0].locX = SPRITE_PLAYER_4_LOC_X_DISTANCE_CARD_LOC_X * this.TableScaleX+ this.cardWidth*this.cardScale/2- this.fitX;
        this.spritePlayers[3].cards[0].locY = SPRITE_PLAYER_4_LOC_Y_DISTANCE_CARD_LOC_Y * this.TableScaleY - this.fitY;
        this.spritePlayers[3].cards[1].locX = SPRITE_PLAYER_4_LOC_X_DISTANCE_CARD_LOC_X * this.TableScaleX+ this.cardWidth*this.cardScale- this.fitX;
        this.spritePlayers[3].cards[1].locY = SPRITE_PLAYER_4_LOC_Y_DISTANCE_CARD_LOC_Y * this.TableScaleY - this.fitY;
        this.spritePlayers[3].cards[2].locX = SPRITE_PLAYER_4_LOC_X_DISTANCE_CARD_LOC_X * this.TableScaleX+(this.cardWidth+ this.cardWidth/2)*this.cardScale- this.fitX;
        this.spritePlayers[3].cards[2].locY = SPRITE_PLAYER_4_LOC_Y_DISTANCE_CARD_LOC_Y * this.TableScaleY - this.fitY;
        //4号比牌按钮位置
        this.spritePlayers[3].pkX = SPRITE_PLAYER_4_LOC_X_DISTANCE_PK_X;
        this.spritePlayers[3].pkY = SPRITE_PLAYER_4_LOC_Y_DISTANCE_PK_Y;
        //4号真人认证图标位置
        this.spritePlayers[3].realFaceX = SPRITE_PLAYER_4_LOC_X_DISTANCE_REALFACE_X;
        this.spritePlayers[3].realFaceY = SPRITE_PLAYER_4_LOC_Y_DISTANCE_REALFACE_Y;
        //4号称号底图位置
        this.spritePlayers[3].tipX = SPRITE_PLAYER_4_LOC_X_DISTANCE_TIP_X;
        this.spritePlayers[3].tipY = SPRITE_PLAYER_4_LOC_Y_DISTANCE_TIP_Y;
        //4号倒计时位置
        this.spritePlayers[3].timerX = SPRITE_PLAYER_4_LOC_X_DISTANCE_TIMER_X;
        this.spritePlayers[3].timerY = SPRITE_PLAYER_4_LOC_Y_DISTANCE_TIMER_Y;
    },
    //初始化位置5的玩家左标
    initTablePlayerLocation_5:function(){
        this.spritePlayers[4] = {};
        //玩家精灵位置
        this.spritePlayers[4].locX = TABLE_PLAYER_5_LOCATION_X * this.TableScaleX - this.fitX;
        this.spritePlayers[4].locY = TABLE_PLAYER_5_LOCATION_Y * this.TableScaleY - this.fitY - 30;
        //已押金额总数的label位置
        this.spritePlayers[4].betCoinX = SPRITE_PLAYER_5_LOC_X_DISTANCE_BET_COIN_X;
        this.spritePlayers[4].betCoinY = SPRITE_PLAYER_5_LOC_Y_DISTANCE_BET_COIN_Y;
        //牌位置的X轴
        var cardLocX = SPRITE_PLAYER_5_LOC_X_DISTANCE_CARD_LOC_X * this.TableScaleX;
        //牌位置的Y轴
        var cardLocY = SPRITE_PLAYER_5_LOC_Y_DISTANCE_CARD_LOC_Y * this.TableScaleY;
        //庄、弃、败等icon的位置
        this.spritePlayers[4].iconX = SPRITE_PLAYER_5_LOC_X_DISTANCE_ICOIN_X;
        this.spritePlayers[4].iconY = SPRITE_PLAYER_5_LOC_Y_DISTANCE_ICOIN_Y;
        //牌位置
        this.spritePlayers[4].cards = {};
        this.spritePlayers[4].cards[0] = {};
        this.spritePlayers[4].cards[1] = {};
        this.spritePlayers[4].cards[2] = {};
        this.spritePlayers[4].cards[0].locX = cardLocX + this.cardWidth*this.cardScale/2;
        this.spritePlayers[4].cards[0].locY = cardLocY;
        this.spritePlayers[4].cards[1].locX = cardLocX + this.cardWidth*this.cardScale;
        this.spritePlayers[4].cards[1].locY = cardLocY;
        this.spritePlayers[4].cards[2].locX = cardLocX +(this.cardWidth+ this.cardWidth/2)*this.cardScale;
        this.spritePlayers[4].cards[2].locY = cardLocY;
        //5号比牌按钮位置
        this.spritePlayers[4].pkX = SPRITE_PLAYER_5_LOC_X_DISTANCE_PK_X;
        this.spritePlayers[4].pkY = SPRITE_PLAYER_5_LOC_Y_DISTANCE_PK_Y;
        //5号真人认证图标位置
        this.spritePlayers[4].realFaceX = SPRITE_PLAYER_5_LOC_X_DISTANCE_REALFACE_X;
        this.spritePlayers[4].realFaceY = SPRITE_PLAYER_5_LOC_Y_DISTANCE_REALFACE_Y;
        //5号称号底图位置
        this.spritePlayers[4].tipX = SPRITE_PLAYER_5_LOC_X_DISTANCE_TIP_X;
        this.spritePlayers[4].tipY = SPRITE_PLAYER_5_LOC_Y_DISTANCE_TIP_Y;
        //5号倒计时位置
        this.spritePlayers[4].timerX = SPRITE_PLAYER_5_LOC_X_DISTANCE_TIMER_X;
        this.spritePlayers[4].timerY = SPRITE_PLAYER_5_LOC_Y_DISTANCE_TIMER_Y
    },
    //初始化其他玩家位置
    initOtherPosition:function(){
        this.enterTablePromptX = this.spritePlayers[0].cards[0].locX;
        this.enterTablePromptY = this.spritePlayers[0].cards[0].locY;
    },
    //获取牌桌上的所有玩家精灵
    getSpritePlayers:function(){
        return this.spritePlayers;
    },
    //获取玩家本身的位置
    getMySelfLocPos:function(){
        return cc.p(this.mySelfLocX, this.mySelfLocY);
    }
};