/**
 * Func.服务器//>客户端的消息
 */
//心跳消息
function read80000000(nmBaseMessage){
    var dataTable= {};
    //存放消息类型和消息名
    dataTable["messageType"]= MSG_IDLE;
    dataTable["messageName"]= "MSG_IDLE";

    return dataTable;
}

//读取微信注册(ACK+ BASEID_RESGISTER)
function read80010001(nmBaseMessage){
    var dataTable= {};
    //存放消息类型和消息名
    dataTable["messageType"]= ACK + BASEID_REGISTER;
    dataTable["messageName"]= "BASEID_REGISTER";

    //Result byte 注册结果
    dataTable["Result"]= nmBaseMessage.readByte();
    //ResultTxt UTF16 提示语内容
    dataTable["ResultTxt"]= nmBaseMessage.readString();
    //UserID  Int 用户ID
    dataTable["UserID"]= nmBaseMessage.readInt();
    //NickName  昵称
    dataTable["NickName"]= nmBaseMessage.readString();
    //Password  密码
    dataTable["Password"]= nmBaseMessage.readString();
    //yuanbao Int 元宝
    dataTable["Yuanbao"]= nmBaseMessage.readInt();
    //Coin Long 金币数
    dataTable["Coin"]= nmBaseMessage.readLong();
    //honor  荣誉值
    dataTable["honor"]= nmBaseMessage.readInt();
    //PhotoUrl UTF16 头像URL
    dataTable["PhotoUrl"]= nmBaseMessage.readString();
    //SessionID Long 当前Socket连接的SessionID
    dataTable["SessionID"]= nmBaseMessage.readLong();
    return dataTable;
}

//读取微信登录(ACK+ BASEID_LOGIN)
function read80010002(nmBaseMessage){
    var dataTable= {};
    //存放消息类型和消息名
    dataTable["messageType"]= ACK + BASEID_LOGIN;
    dataTable["messageName"]= "BASEID_LOGIN";

    //UserID  Int 用户ID
    dataTable["UserID"]= nmBaseMessage.readInt();
//    console.log(dataTable.get("UserID"));
    //result Byte 是否成功
    dataTable["result"]= nmBaseMessage.readByte();
    //ResultTxt UTF16 提示语内容
    dataTable["ResultTxt"]= nmBaseMessage.readString();
    //InitLoginInfoChanged Byte 是否修改过原始登录消息
    dataTable["InitLoginInfoChanged"]= nmBaseMessage.readByte();
    //NickName UTF16 昵称
    dataTable["NickName"]= nmBaseMessage.readString();
    //PhotoUrl UTF16 头像URL
    dataTable["PhotoUrl"]= nmBaseMessage.readString();
    //Coin Long 金币数
    dataTable["Coin"]= nmBaseMessage.readLong();
    //UnreadMsgCnt  Int 未读消息数量
    dataTable["UnreadMsgCnt"]= nmBaseMessage.readInt();
    //SessionID Long 当前Socket连接的SessionID
    dataTable["SessionID"]= nmBaseMessage.readLong();
    //VipLevel Int VIP等级
    dataTable["VipLevel"]= nmBaseMessage.readInt();
    //yuanbao Int 元宝
    dataTable["yuanbao"]= nmBaseMessage.readInt();
    return dataTable;
}

//读取基本信息(BASEID_GET_BASEINFO)
function read80010003(nmBaseMessage){
    var dataTable= {};
    //存放消息类型和消息名
    dataTable["messageType"]= ACK + BASEID_GET_BASEINFO;
    dataTable["messageName"]= "BASEID_GET_BASEINFO";

    //UserID  Int 用户ID
    dataTable["UserID"]= nmBaseMessage.readInt();
    //NickName UTF16 昵称
    dataTable["NickName"]= nmBaseMessage.readString();
    //Sex	byte	性别	1男   2女
    dataTable["Sex"]= nmBaseMessage.readByte();
    //Age	byte	年龄
    dataTable["Age"]= nmBaseMessage.readByte();
    //City	text	城市	如 .北京-海淀
    dataTable["City"]= nmBaseMessage.readString();
    //PhotoUrl UTF16 头像URL
    dataTable["PhotoUrl"]= nmBaseMessage.readString();
    //sign	text	个性签名
    dataTable["Sign"]= nmBaseMessage.readString();
    //Coin Long 金币数
    dataTable["Coin"]= nmBaseMessage.readLong();
    //yuanbao Int 元宝
    dataTable["yuanbao"]= nmBaseMessage.readInt();
    //Honor  荣誉值
    dataTable["Honor"]= nmBaseMessage.readInt();
    //DuiJiangQuan  兑奖券
    dataTable["DuiJiangQuan"]= nmBaseMessage.readInt();
    //commendationCnt  奖状数
    dataTable["commendationCnt"]= nmBaseMessage.readInt();
    //VipLevel  VIP等级
    dataTable["VipLevel"]= nmBaseMessage.readInt();
    //djqPieces  兑奖券碎片
    dataTable["djqPieces"]= nmBaseMessage.readInt();
    return dataTable;
}

//读取用户属性变更(ACK+ GAMEID_USER_ATTR)
function read80040006(nmBaseMessage){
    var dataTable= {};
    //存放消息类型和消息名
    dataTable["messageType"]= ACK + GAMEID_USER_ATTR;
    dataTable["messageName"]= "GAMEID_USER_ATTR";

    /**********Loop循环-[用户属性变化列表]*****************/
    //长度
    var UserAttrCN =  nmBaseMessage.readByte();
    dataTable["UserAttrCN"]= UserAttrCN;

    dataTable["UserAttrLoop"]= {};
    for(var i=0; i< UserAttrCN; ++i){
        dataTable["UserAttrLoop"][i]= {};
        nmBaseMessage.startReadLoop();
        //name Text 属性名
        //金币：coin元宝：yuanbao荣誉值：honor兑奖券：duijiang VIP等级：viplevel
        dataTable["UserAttrLoop"][i]["name"] = nmBaseMessage.readString();
        //value Text 属性值
        dataTable["UserAttrLoop"][i]["value"] = nmBaseMessage.readString();
    }
    return dataTable;
}

//请求送金DBID_V2_REQUEST_COIN
function read8006002d(nmBaseMessage){
    var dataTable= {};
    //存放消息类型和消息名
    dataTable["messageType"]= ACK + DBID_V2_REQUEST_COIN;
    dataTable["messageName"]= "BASEID_REGISTER";

    dataTable["Coin"]= nmBaseMessage.readInt();//金币数
    dataTable["ResultMsg"]= nmBaseMessage.readString();//提示语
    dataTable["PopupWindowsNum"]= nmBaseMessage.readByte();//弹出框编号
    return dataTable
}

//获取站内信
function read80670006(nmBaseMessage){
    var dataTable= {};
    //存放消息类型和消息名
    dataTable["messageType"]= ACK + MAIL_UNREAD_SEND;
    dataTable["messageName"]= "MAIL_UNREAD_SEND";

    //未读消息类型.1系统消息，2个人消息
    dataTable["Type"]= nmBaseMessage.readByte();
    return dataTable;
}

//获取当前手机用户登录列表信息
function read8007009d(nmBaseMessage){
    var dataTable= {};
    //存放消息类型和消息名
    dataTable["messageType"]= ACK + MANAGERID_USERLIST_FROM_IMIE;
    dataTable["messageName"]= "MANAGERID_USERLIST_FROM_IMIE";

    //NickCnt	int	昵称数量	loop
    var nickCnt= nmBaseMessage.readInt();
    dataTable["nickCnt"]= nickCnt;
    for(var i=0; i< nickCnt; ++i){
        dataTable["NickNameLoop"][i]= {};
        //开始读取Loop类型的头部
        nmBaseMessage.startReadLoop();
        //NickName	text	登陆过此手机的昵称
        dataTable["NickNameLoop"][i]["NickName"]= nmBaseMessage.readString();
        //IsBindWeChat	byte	此账号是否绑定微信	0：没有；1：有
        dataTable["NickNameLoop"][i]["IsBindWeChat"]= nmBaseMessage.readByte();
    }
    //isHint	byte	是否需要提示用户绑定微信
    dataTable["isHint"]= nmBaseMessage.readByte();
    console.log(dataTable);
    return dataTable;
}

//获取用户绑定微信信息(MANAGERID_HINT_BIND_WECHAT)
function read8007009e(nmBaseMessage){
    var dataTable= {};
    //存放消息类型和消息名
    dataTable["messageType"]= ACK + MANAGERID_HINT_BIND_WECHAT;
    dataTable["messageName"]= "MANAGERID_HINT_BIND_WECHAT";

    //isHint	byte	是否需要提示用户绑定微信
    dataTable["isHint"]= nmBaseMessage.readByte();
    //AwardCoin	text	绑定微信提示信息
    dataTable["AwardCoin"]= nmBaseMessage.readString();
    return dataTable;
}

//找回密码(DBID_FIND_PASSWORD)
function read8006000c(nmBaseMessage){
    var dataTable= {};

    dataTable["messageType"]= ACK + DBID_FIND_PASSWORD;
    dataTable["messageName"]= "DBID_FIND_PASSWORD";

    //Result	Byte	是否成功	0 否 1 是
    dataTable["Result"]= nmBaseMessage.readByte();
    //ResultTxt	Text	结果提示语
    dataTable["ResultTxt"]= nmBaseMessage.readString();
    //NewPassword	Text	新密码
    dataTable["NewPassword"]= nmBaseMessage.readString();
    return dataTable;
}

//游戏公告(BASEID_GET_NOTICE)
function read8001000a(nmBaseMessage){
    var dataTable= {};

    dataTable["messageType"]= ACK + BASEID_GET_NOTICE;
    dataTable["messageName"]= "BASEID_GET_NOTICE";

    //NoticeCnt	Byte	公告数量
    dataTable["Result"]= nmBaseMessage.readByte();
    return dataTable;
}
//解析修改基本信息
function read80010004(nmBaseMessage){
    var dataTable= {};
    dataTable["messageType"]= ACK + BASEID_EDIT_BASEINFO;
    dataTable["messageName"]= "BASEID_EDIT_BASEINFO";

    //Result  修改结果
    dataTable["Result"]= nmBaseMessage.readByte();
    //ResultTxt 修改提示
    dataTable["ResultTxt"] = nmBaseMessage.readString();
    return dataTable;
}

//解析站内信消息列表
function read80670001(nmBaseMessage){
    var dataTable= {};
    //存放消息类型和消息名
    dataTable["messageType"]= ACK + MAIL_SYSTEM_MESSGE_LIST;
    dataTable["messageName"]= "MAIL_SYSTEM_MESSGE_LIST";

    //NickCnt	int	昵称数量	loop
    var messageList_Count= nmBaseMessage.readInt();
    dataTable["messageList_Count"]= messageList_Count;
    dataTable["MessageListTable"]= {};
    if(messageList_Count> 0){
        for(var i=0; i< messageList_Count; ++i){
            //开始读取Loop类型的头部
            nmBaseMessage.startReadLoop();
            dataTable["MessageListTable"][i]= {};
            //消息id
            dataTable["MessageListTable"][i]["MessageId"]= nmBaseMessage.readInt();
            //消息标题
            dataTable["MessageListTable"][i]["MessageTitle"]= nmBaseMessage.readString();
            //消息内容  Html
            dataTable["MessageListTable"][i]["MessageContent"]= nmBaseMessage.readString();
            //消息类型  0 普通消息  1 领奖消息  2 执行Action
            dataTable["MessageListTable"][i]["MessageType"]= nmBaseMessage.readByte();
            //消息状态 0 未读 ，1 已读 ， 2 已领奖
            dataTable["MessageListTable"][i]["MessageFlag"]= nmBaseMessage.readByte();
            //Action类型
            dataTable["MessageListTable"][i]["Action"]= nmBaseMessage.readInt();
            //Action参数
            dataTable["MessageListTable"][i]["ActionParam"]= nmBaseMessage.readString();
            //CreateTime时间
            dataTable["MessageListTable"][i]["CreateTime"]= nmBaseMessage.readString();
        }
    }
    return dataTable;
}

//站内信消息阅读
function read80670003(nmBaseMessage){
    var dataTable= {};
    dataTable["messageType"]= ACK + MAIL_SYSTEM_MESSAGE_READ;
    dataTable["messageName"]= "MAIL_SYSTEM_MESSAGE_READ";

    //消息id Int
    dataTable["MessageId"]= nmBaseMessage.readInt();
    //领奖是否成功
    dataTable["Success"] = nmBaseMessage.readByte();
    return dataTable;
}

//聊天室发言(IMID_CHAT_ROOM_SPEAK)
function read80050003(nmBaseMessage){
    var dataTable= {};
    dataTable["messageType"]= ACK + IMID_CHAT_ROOM_SPEAK;
    dataTable["messageName"]= "IMID_CHAT_ROOM_SPEAK";

    //SpeakerUserID  发言者用户ID
    dataTable["SpeakerUserID"]= nmBaseMessage.readInt();
    //SpeakerNickName  发言者昵称
    dataTable["SpeakerNickName"] = nmBaseMessage.readString();
    //SpeechText  发言内容
    dataTable["SpeakerNickName"] = nmBaseMessage.readString();
    //Color  ARGB方式存储。可用4个getByte()分别读取
    dataTable["ARGB0"] = nmBaseMessage.readByte();
    dataTable["ARGB1"] = nmBaseMessage.readByte();
    dataTable["ARGB2"] = nmBaseMessage.readByte();
    dataTable["ARGB3"] = nmBaseMessage.readByte();
    //TextSize  字体大小
    dataTable["TextSize"] = nmBaseMessage.readInt();
    //vip等级
    dataTable["VipLevel"] = nmBaseMessage.readInt();
    //ActionInT
    dataTable["ActionId"] = nmBaseMessage.readInt();
    //ActionString
    dataTable["ActionParam"] = nmBaseMessage.readInt();
    return dataTable;
}

//每日任务(COMMONS_DAILYTASK)
function read80650020(nmBaseMessage){
    var dataTable= {};
    dataTable["messageType"]= ACK + COMMONS_DAILYTASK;
    dataTable["messageName"]= "COMMONS_DAILYTASK";
    //任务数量
    dataTable["taskNum"] = nmBaseMessage.readInt();
    dataTable["TaskListLoop"] = {};
    for(var i=0; i< dataTable["taskNum"]; ++i){
        dataTable["TaskListLoop"][i] = {};
        //开始读取Loop头
        nmBaseMessage.startReadLoop();
        //任务ID
        dataTable["TaskListLoop"][i]["ID"] = nmBaseMessage.readInt();
        //任务名称
        dataTable["TaskListLoop"][i]["Name"] = nmBaseMessage.readString();
        //任务描述
        dataTable["TaskListLoop"][i]["Desc"] = nmBaseMessage.readString();
        //任务进度
        dataTable["TaskListLoop"][i]["Process"] = nmBaseMessage.readString();
        //奖励名称
        dataTable["TaskListLoop"][i]["PrizeName"] = nmBaseMessage.readString();
        //ActionID
        dataTable["TaskListLoop"][i]["ActionId"] = nmBaseMessage.readInt();
        //按钮状态
        dataTable["TaskListLoop"][i]["Status"] = nmBaseMessage.readByte();
        //Progress 进度
        dataTable["TaskListLoop"][i]["Progress"] = nmBaseMessage.readByte();
    }
    return dataTable;
}


//成就任务列表（COMMONS_LIFETIME_TASKLIST）
function read8065001e(nmBaseMessage){
    var dataTable= {};
    dataTable["messageType"]= ACK + COMMONS_LIFETIME_TASKLIST;
    dataTable["messageName"]= "COMMONS_LIFETIME_TASKLIST";
    //任务数量
    dataTable["taskNum"] = nmBaseMessage.readInt();
    dataTable["TaskListLoop"] = {};
    for(var i=0; i< dataTable["taskNum"]; ++i){
        dataTable["TaskListLoop"][i] = {};
        //开始读取Loop头
        nmBaseMessage.startReadLoop();
        //任务ID
        dataTable["TaskListLoop"][i]["ID"] = nmBaseMessage.readInt();
        //任务名称
        dataTable["TaskListLoop"][i]["Name"] = nmBaseMessage.readString();
        //任务描述
        dataTable["TaskListLoop"][i]["Desc"] = nmBaseMessage.readString();
        //任务进度
        dataTable["TaskListLoop"][i]["Process"] = nmBaseMessage.readString();
        //奖励名称
        dataTable["TaskListLoop"][i]["PrizeName"] = nmBaseMessage.readString();
        //ActionID
        dataTable["TaskListLoop"][i]["ActionId"] = nmBaseMessage.readInt();
        //按钮状态
        dataTable["TaskListLoop"][i]["Status"] = nmBaseMessage.readByte();
        //Progress 进度
        dataTable["TaskListLoop"][i]["Progress"] = nmBaseMessage.readByte();
    }
    return dataTable;
}

//领取任务奖励（COMMONS_GET_DAILYTASK_PRIZE）
function read80650021(nmBaseMessage){
    var dataTable= {};
    dataTable["messageType"]= ACK + COMMONS_GET_DAILYTASK_PRIZE;
    dataTable["messageName"]= "COMMONS_GET_DAILYTASK_PRIZE";
    //是否成功
    dataTable["IsSuccess"] = nmBaseMessage.readByte();
    //提示语
    dataTable["Msg"] = nmBaseMessage.readString();
    //奖品数量
    dataTable["LoopNum"] = nmBaseMessage.readInt();
    dataTable["PrizesLoop"] = {};
    for(var i=0; i< dataTable["LoopNum"]; ++i){
        dataTable["PrizesLoop"][i] = {};
        //开始读取Loop头
        nmBaseMessage.startReadLoop();
        //任务描述
        dataTable["PrizesLoop"][i]["PicUrl"] = nmBaseMessage.readString();
        //任务进度
        dataTable["PrizesLoop"][i]["PrizeMsg"] = nmBaseMessage.readString();

    }
    return dataTable;
}

//解析服务器通知（GAMEID_SERVER_MSG）
function read00040002(nmBaseMessage){
    var dataTable= {};
    dataTable["messageType"]= REQ + GAMEID_SERVER_MSG;
    dataTable["messageName"]= "GAMEID_SERVER_MSG";
    //Type Byte 类型 1.充值弹窗 2.飘字 3.比赛播报 4.系统公告 5.强制退出 6.Toast,7.冲榜飘字,8.普通弹框
    dataTable["Type"] = nmBaseMessage.readByte();
    //Msg text 比赛状态的客户端提示语
    dataTable["Msg"] = nmBaseMessage.readString();
    if(dataTable["Type"]!= null&& dataTable["Type"]!= undefined){
        if(dataTable["Type"]== 1){
            //充值是否成功（充值特有）1成功，0失败
            dataTable["isSucceed"] = nmBaseMessage.readByte();
        }else if(dataTable["Type"]== 6){
            //Second	Int	Toast飘字秒数	仅toast读取
            dataTable["toastSecond"] = nmBaseMessage.readInt();
        }
    }
    return dataTable;
}

//解析双核推送礼包(GIFTBAGID_PUSH_DUAL_GIFTBAG)
//ACK 不需要交互，直接由服务器推送过来
//REQ 由客户端请求，服务器推送过来。
function read80510005(nmBaseMessage){
    var dataTable= {};
    dataTable["messageType"]= ACK + GIFTBAGID_PUSH_DUAL_GIFTBAG;
    dataTable["messageName"]= "GIFTBAGID_PUSH_DUAL_GIFTBAG";

    // GiftBagType int 礼 包 类 别 ID
    dataTable["mGiftBagType"] = nmBaseMessage.readInt();
    // BannerUrl Text banner 图 片 地 址
    dataTable["BannerUrl"] = nmBaseMessage.readString();
    // TitleText Text 标 题 文 本
    dataTable["TitleText"] = nmBaseMessage.readString();


    dataTable["GiftBagData"] = {};

    // GiftAwardNum Byte 礼 包 中 物 品 个 数
    var mnGiftAwardNum = nmBaseMessage.readInt();
    dataTable["GiftAwardNum"] = mnGiftAwardNum;
    dataTable["GiftBagData"] = {};
    for(var i=0; i< dataTable["GiftAwardNum"]; ++i){
        dataTable["GiftBagData"][i] = {};
        //开始读取Loop头
        nmBaseMessage.startReadLoop();
        // … GiftBagType int 礼 包 类 别 ID
        dataTable["GiftBagData"][i].mnGiftBagType = dataTable["mGiftBagType"];
        // … GiftID int 礼 包 ID
        dataTable["GiftBagData"][i].mnGiftID = nmBaseMessage.readInt();
        // … GiftName Text 礼 包 名 称
        dataTable["GiftBagData"][i].msGiftName = nmBaseMessage.readString();

        // … GiftPrice int 礼 包 价 格 ( 元)
        dataTable["GiftBagData"][i].mnGiftPriceRMB = nmBaseMessage.readInt();
        // … GiftPrice int 礼 包 价 格 ( 元)
        dataTable["GiftBagData"][i].mnGiftPriceYuanBao = nmBaseMessage.readInt();
        // … GiftImageUrl Text 礼 包 banner 图 片 地 址
        dataTable["GiftBagData"][i].msGiftImageUrl = nmBaseMessage.readString();
        // … ButtonText Text 按 钮 文 本
        dataTable["GiftBagData"][i].msTitleMsg = nmBaseMessage.readString();
        // … BuyCount int 购 买 次 数
        dataTable["GiftBagData"][i].mnBuyCount = nmBaseMessage.readInt();
    }

    // AllowTableShow byte 是 否 允 许 在 牌 桌 弹 出 1 .允 许 ， 0 .不 允 许
    dataTable["mnAllowTableShow"] = nmBaseMessage.readByte();
    // PaymentType byte 支 付 类 型 1 .RMB ， 0 .元 宝
    dataTable["mnPaymentType"] = nmBaseMessage.readByte();
    // RechargeMode	Byte	支付方式	0双按钮 1短代
    dataTable["RechargeMode"] = nmBaseMessage.readByte();

    //限时礼包剩余时间，如果不是限时礼包则为0
    dataTable["RemainTime"] = nmBaseMessage.readLong();

    return dataTable;
}
//解析获取用户充值信息
function read80510001(nMBaseMessage){
    var dataTable= {};
    dataTable["messageType"]= ACK + GIFTBAGID_USER_ENCHARGE_INFO;
    dataTable["messageName"]= "GIFTBAGID_USER_ENCHARGE_INFO";

    //EnchargeAmount int 充值总金额
    dataTable["EnchargeAmount"] = nMBaseMessage.readInt();

    return dataTable;
}

//解析进入聊天室
function read80050001(nMBaseMessage){
    var dataTable= {};
    dataTable["messageType"]= ACK + IMID_ENTER_CHAT_ROOM;
    dataTable["messageName"]= "IMID_ENTER_CHAT_ROOM";

    //ResultID   结果。 0成功 1失败
    dataTable["ResultID"] = nMBaseMessage.readByte();
    //ResultText  结果文本内容
    dataTable["ResultText"] = nMBaseMessage.readString();

    return dataTable;
}

//解析用户礼包状态
function read80510008(nMBaseMessage){
    var dataTable= {};
    dataTable["messageType"]= ACK + GIFTBAGID_GET_GIFTBAG_MSG;
    dataTable["messageName"]= "GIFTBAGID_GET_GIFTBAG_MSG";

    //GiftBagCnt  礼包数量
    dataTable["GiftBagData"] = {};
    var GiftBagCnt = nMBaseMessage.readInt();
    dataTable["GiftBagCnt"]= GiftBagCnt;
    for(var i=0; i< GiftBagCnt; ++i){
        dataTable["GiftBagData"][i] = {};
        nMBaseMessage.startReadLoop();

        //…GiftBagType  礼包类别ID
        dataTable["GiftBagData"][i].GiftBagType = nMBaseMessage.readInt();
        //…IsPayGift  是否可以购买此类礼包
        dataTable["GiftBagData"][i].IsPayGift = nMBaseMessage.readInt();
    }

    //RemainCount  当天剩余破产送金次数
    dataTable["RemainCount"] = nMBaseMessage.readByte();

    return dataTable;
}

//用户可购买礼包列表(精简)
function read80510010(nMBaseMessage){
    var dataTable= {};
    dataTable["messageType"]= ACK + GIFTBAGID_GIFTBAG_LIST_SIMPLE;
    dataTable["messageName"]= "GIFTBAGID_GIFTBAG_LIST_SIMPLE";

    //GiftBagCnt  礼包数量
    dataTable["GiftBagData"] = {};
    var GiftBagCnt = nMBaseMessage.readInt();
    dataTable["GiftBagCnt"]= GiftBagCnt;
    for(var i=0; i< GiftBagCnt; ++i){
        dataTable["GiftBagData"][i] = {};
        nMBaseMessage.startReadLoop();

        //…GiftBagType  礼包类别ID
        dataTable["GiftBagData"][i].GiftBagType = nMBaseMessage.readInt();
    }

    //礼包列表中第一个礼包的结束时间OverTime
    dataTable["OverTime"] = parseInt(nMBaseMessage.readLong());

    return dataTable;
}

//解析同步客户端时间
function read8001000d(nMBaseMessage){
    var dataTable= {};
    dataTable["messageType"]= ACK + BASEID_TIMESTAMP_SYNC;
    dataTable["messageName"]= "BASEID_TIMESTAMP_SYNC";

    //TimeStamp  服务器当前时间戳
    dataTable["TimeStamp"] = parseInt(nMBaseMessage.readLong());

    return dataTable;
}

//获取小游戏推广 (MANAGERID_GET_MINIGAME_PROMOTION)
function read8007009c(nMBaseMessage){
    var dataTable= {};
    dataTable["messageType"]= ACK + MANAGERID_GET_MINIGAME_PROMOTION;
    dataTable["messageName"]= "MANAGERID_GET_MINIGAME_PROMOTION";

    //MiniGameID	Int	小游戏ID
    dataTable["MiniGameID"] = nMBaseMessage.readInt();
    //Url	String	小游戏图标	本地没有的时候使用
    dataTable["Url"] = nMBaseMessage.readString();

    return dataTable;
}

//解析自己或他人的详细信息
function read80060002(nMBaseMessage){
    var dataTable= {};
    dataTable["messageType"]= ACK + DBID_USER_INFO;
    dataTable["messageName"]= "DBID_USER_INFO";

    // UserID Int 用户ID
    dataTable["UserID"] = nMBaseMessage.readInt();
    // NickName text 昵称
    dataTable["NickName"] = nMBaseMessage.readString();
    // Sex byte 性别 1男 2女
    dataTable["Sex"] = nMBaseMessage.readByte();
    // Age byte 年龄
    dataTable["age"] = nMBaseMessage.readByte();
    // City text 城市 如 .北京-海淀
    dataTable["city"] = nMBaseMessage.readString();
    // PhotoUrl text 头像URL
    dataTable["photourl"] = nMBaseMessage.readString();
    // Sign text 个性签名
    dataTable["sign"] = nMBaseMessage.readString();
    // Coin long 金币
    dataTable["coin"] = parseInt(nMBaseMessage.readLong());
    // YuanBao int 元宝
    dataTable["yuanbao"] = nMBaseMessage.readInt();
    // TaoJin int 荣誉值
    dataTable["honor"] = nMBaseMessage.readInt();
    // GameID byte 游戏ID
    dataTable["gameid"] = nMBaseMessage.readByte();
    // DuiJiangQuan int 兑奖券 MsgVer >= 1时发送
    dataTable["duijiang"] = nMBaseMessage.readInt();
    // commendationCnt int 奖状数 MsgVer >= 1时发送
    dataTable["commendationCnt"] = nMBaseMessage.readInt();
    /****************此处采用Loop的方式传递数据，但是数量固定为1*****************************/
    nMBaseMessage.startReadLoop();
    dataTable["WinGameNum"] = nMBaseMessage.readInt();
    dataTable["LoseGameNum"]= nMBaseMessage.readInt();
    dataTable["MaxShoupai"] = nMBaseMessage.readString();
    dataTable["luckyIcon"] = nMBaseMessage.readByte();

    //VipLevel int VIP等级
    dataTable["mnVipLevel"] = nMBaseMessage.readInt();
    //Common.log("DBID_USER_INFO mnVipLevel " .. dataTable["mnVipLevel"])
    //LawLimitRemind text 法律风险相关提示语 亲，您今天已经累计输掉3000万金币了，达到单日上限，无法继续游戏了。
	dataTable["lawLimitRemind"] = nMBaseMessage.readString();
    //DjqPieces int 兑奖券碎片数量
    dataTable["djqPieces"] = nMBaseMessage.readInt();
    //HistoryMaxCoin long 历史最高金币数
    dataTable["historyMaxCoin"] = parseInt(nMBaseMessage.readLong());

    return dataTable;
}

//获取初始化图片
function read8007001c(nMBaseMessage)
{
    var dataTable= {};
    dataTable["messageType"]= ACK + MANAGERID_GET_INIT_PIC;
    dataTable["messageName"]= "MANAGERID_GET_INIT_PIC";

    //TimeStamp	Long	时间戳
    dataTable["TimeStamp"] = parseInt(nMBaseMessage.readLong());

    //picList	Int	图片列表	Loop
    //GiftBagCnt  礼包数量
    dataTable["picList"] = {};
    var picListCnt = nMBaseMessage.readInt();
    dataTable["picListCnt"]= picListCnt;
    for(var i=0; i< picListCnt; ++i){
        dataTable["picList"][i] = {};
        nMBaseMessage.startReadLoop();

        //…picUrl	Text	图片url
        dataTable["picList"][i].picUrl = nMBaseMessage.readString();
    }

    //礼包列表中第一个礼包的结束时间OverTime
    dataTable["OverTime"] = parseInt(nMBaseMessage.readLong());

    return dataTable;
}

//扎金花主页活动 (JINHUA_MGR_INDEX_ACTIVITY）
function read82680030(nMBaseMessage)
{
    var dataTable= {};
    dataTable["messageType"]= ACK + JINHUA_MGR_INDEX_ACTIVITY;
    dataTable["messageName"]= "JINHUA_MGR_INDEX_ACTIVITY";

    //TimeStamp	Long	时间戳
    dataTable["TimeStamp"] = parseInt(nMBaseMessage.readLong());

    //ShopList	LoopMsg
    //GiftBagCnt  礼包数量
    dataTable["ActivityList"] = {};
    var ActivityListCnt = nMBaseMessage.readInt();
    dataTable["ActivityListCnt"]= ActivityListCnt;
    for(var i=0; i< ActivityListCnt; ++i){
        dataTable["picList"][i] = {};
        nMBaseMessage.startReadLoop();

        // ...type	Byte	类型	1活动，2礼包
        dataTable["ActivityList"][i].type = nMBaseMessage.readByte();
        // ...activityId	Int	活动ID或者礼包ID	跟上面类型相关
        dataTable["ActivityList"][i].activityId = nMBaseMessage.readInt();
        // ...imgURL	Text	图片
        dataTable["ActivityList"][i].imgURL = nMBaseMessage.readString();
    }

    return dataTable;
}

//图文Toast
function read80040008(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + GAMEID_IMAGE_TOAST;
    dataTable["messageName"] = "GAMEID_IMAGE_TOAST";
    //toastMsg	Text	提示文字
    dataTable["ToastMsg"] = nMBaseMessage.readString();
    //imageUrl	Text	图片地址
    dataTable["ImageUrl"] = nMBaseMessage.readString();
    return dataTable;
}

//Todo:领取工资之后，GAMEID_IMAGE_TOAST