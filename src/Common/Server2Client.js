/**
 * Func.服务器//>客户端的消息
 */
//获取用户列表(JINHUA_MGR_USER_INFO)
function read8268000a(nmBaseMessage){
    var dataTable= {};
    //存放消息类型和消息名
    dataTable["messageType"]=ACK + JINHUA_MGR_USER_INFO;
    dataTable["messageName"]="JINHUA_MGR_USER_INFO";

    //isFriend	Byte	是否是好友	1是，0不是
    dataTable["isFriend"]=nmBaseMessage.readByte();
    //nickName	String	昵称
    dataTable["nickName"]=nmBaseMessage.readString();
    //Coin	Long	玩家金币
    dataTable["Coin"]=nmBaseMessage.readLong();
    //Level	Int	玩家等级
    dataTable["Level"]=nmBaseMessage.readInt();
    //Sex	Byte	性别
    dataTable["Sex"]=nmBaseMessage.readByte();
    //PhotoUrl	String	头像
    dataTable["PhotoUrl"]=nmBaseMessage.readString();
    //SignAward	Int	加好友签到金币加成
    dataTable["SignAward"]=nmBaseMessage.readInt();
    //Area	String	地区
    dataTable["Area"]=nmBaseMessage.readString();
    //Innings	Int	局数
    dataTable["Innings"]=nmBaseMessage.readInt();
    //winPer	Int	胜率
    dataTable["winPer"]=nmBaseMessage.readInt();
    //Sign	String	签名
    dataTable["Sign"]=nmBaseMessage.readString();
    //GiftCoin	Long	收到的礼物总价值
    dataTable["GiftCoin"]=nmBaseMessage.readLong();

    var giftCnt= nmBaseMessage.readInt();
    dataTable["giftCnt"]= giftCnt;
    /************Loop类型*******************/
    dataTable["Gifts"]= {};
    if(giftCnt> 0){
        for(var i=0; i< giftCnt; ++i){
            nmBaseMessage.startReadLoop();
            dataTable["Gifts"][i]= {};
            //name	String	礼物名称
            dataTable["Gifts"][i].name = nmBaseMessage.readString();
            //cnt	Int	收到的礼物数量
            dataTable["Gifts"][i].cnt = nmBaseMessage.readInt();
        }
    }
    //LevelExpMax	Int	玩家当前等级最大经验值
    dataTable["LevelExpMax"]=nmBaseMessage.readInt();
    //LevelExp	Int 	玩家当前等级所拥有的经验值
    dataTable["LevelExp"]=nmBaseMessage.readInt();
    //Charm	Int	魅力值
    dataTable["Charm"]=nmBaseMessage.readInt();
    //CharmLv	Int	魅力等级	决定客户端显示爱心样子
    dataTable["CharmLv"]=nmBaseMessage.readInt();
    //VipLevel	Int	VIP等级
    dataTable["VipLevel"]=nmBaseMessage.readInt();
    //isCert	Byte	是否真人认证	1已认证0未认证
    dataTable["isCert"]=nmBaseMessage.readByte();
    //winMaxCoins	Long	单局最多赢金币数
    dataTable["winMaxCoins"]=nmBaseMessage.readLong();
    //winInnings	Int	    胜场数
    dataTable["winInnings"]=nmBaseMessage.readInt();
    //winningStreak	 Int	连胜
    dataTable["winningStreak"]=nmBaseMessage.readInt();
    //targetUserId	 Int
    dataTable["targetUserId"]=nmBaseMessage.readInt();
    //isTrack	byte	是否追踪了该用户	1.已追踪 0.未追踪
    dataTable["isTrack"]=nmBaseMessage.readByte();
    //luckyIcon	Byte	是否有分享称谓	1有0无
    dataTable["luckyIcon"]=nmBaseMessage.readByte();
    //isBindTel	Byte	是否绑定手机号	1绑定0未绑定
    dataTable["isBindTel"]=nmBaseMessage.readByte();
    //isBindWeiXin	Byte	是否绑定微信	1绑定0未绑定
    dataTable["isBindWeiXin"]=nmBaseMessage.readByte();

    return dataTable;
}
//3.12金花VIP等级信息 (JINHUA_MGR_VIP_INFO）
function read8068000c(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_VIP_INFO;
    dataTable["messageName"] = "JINHUA_MGR_VIP_INFO";
    //VipLevel	Int	当前vip等级
    dataTable["VipLevel"] = nmBaseMessage.readInt();
    //Recharge amount	Int	当前充值金额
    dataTable["Recharge"] = nmBaseMessage.readInt();
    //VipLoop		Loop
    dataTable["Vips"] = {};
    var VipsCnt = nmBaseMessage.readInt();
    dataTable["VipsCnt"]= VipsCnt;
    for(var i=0; i< VipsCnt; ++i){
        dataTable["Vips"][i] = {};
        nmBaseMessage.startReadLoop();
        //…Level	Int	级别
        dataTable["Vips"][i].Level = nmBaseMessage.readInt();
        //…fri} limit	Int	好友数量
        dataTable["Vips"][i].Friend = nmBaseMessage.readInt();
        //…exp	Int	经验加成
        dataTable["Vips"][i].Exp = nmBaseMessage.readInt();
        //…lock room	Byte	是否锁定房间	1 是 0 否
        dataTable["Vips"][i].Lock = nmBaseMessage.readByte();
        //…recharge	Int	需要充值金额
        dataTable["Vips"][i].NeedRecharge = nmBaseMessage.readInt();
    }
    //BuyCoin	Int	购买VIP1需要金币数
    dataTable["BuyCoin"] = nmBaseMessage.readInt();
    //nextVipLevel	Int	下一级VIP等级
    dataTable["nextVipLevel"] = nmBaseMessage.readInt();
    //nextRecharge	Int	下一级充值金额
    dataTable["nextRecharge"] = nmBaseMessage.readInt();
    //vipInfoLoop		Loop
    var vipInfoCnt = nmBaseMessage.readInt();
    dataTable["vipInfoCnt"]= vipInfoCnt;
    dataTable["VipsInfo"] = {};
    for(var i = 0; i< vipInfoCnt;++i){
        dataTable["VipsInfo"][i] = {};
        nmBaseMessage.startReadLoop();
        //...vipInfoURL	Text	Vip详情路径
        dataTable["VipsInfo"][i].vipInfoURL = nmBaseMessage.readString();
    }
    //vipInfoIndex	Int	当前显示的VIP详情路径
    dataTable["vipInfoIndex"] = nmBaseMessage.readInt();
    return dataTable;
}
//3.05扎金花相关配置请求(JINHUA_MGR_SETTING）
function read82680005(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_SETTING;
    dataTable["messageName"] = "JINHUA_MGR_SETTING";

    //Timestamp	Long	时间
    dataTable["Timestamp"] = nmBaseMessage.readLong();
    //IsRecharged	Byte	是否充值过	1充值过，0未充值
    dataTable["IsRecharged"] = nmBaseMessage.readByte();
    //hasMonthCard	Byte	是否是月卡用户	1是，0否
    dataTable["hasMonthCard"] = nmBaseMessage.readByte();
    //TitleList	LoopMsg		称谓配置
    dataTable["TitleList"] = {};
    var TitleListCnt = nmBaseMessage.readInt();
    dataTable["TitleListCnt"]= TitleListCnt;
    for(var i = 0;i< TitleListCnt; ++i){
        dataTable["TitleList"][i] = {};
        nmBaseMessage.startReadLoop();
        //…mincoin	Int
        dataTable["TitleList"][i].mincoin = nmBaseMessage.readLong();
        //…maxcoin	Int
        dataTable["TitleList"][i].maxcoin = nmBaseMessage.readLong();
        //…name	String	称谓名称
        dataTable["TitleList"][i].name = nmBaseMessage.readString();
    }
    //IosDownUrl	Text	苹果下载地址
    dataTable["IosDownUrl"] = nmBaseMessage.readString();
    //AndroidDownUrl	Text	安卓下载地址
    dataTable["AndroidDownUrl"] = nmBaseMessage.readString();
    //shareToFri}Url	Text	好友分享下载链接
    dataTable["shareToFri}Url"] = nmBaseMessage.readString();
    //MonthCardRemaining	Text	金花月卡剩余时间
    dataTable["MonthCardRemaining"] = nmBaseMessage.readString();
    //enterRoomEffectMinVipLevel	Int	进场特效最低VIP等级
    dataTable["enterRoomEffectMinVipLevel"] = nmBaseMessage.readInt();
    //monthDay	Int	月卡剩余时间	天数，没有月卡返回0
    dataTable["monthDay"] = nmBaseMessage.readInt();
    //onLineCnt	Int	当前在线人数
    dataTable["onLineCnt"] = nmBaseMessage.readInt();
    //MonthCardPrice	Int	月卡金额	元
    dataTable["MonthCardPrice"] = nmBaseMessage.readInt();
    //MonthCardGetCoinNow	Long	购买月卡立即获得金币数
    dataTable["MonthCardGetCoinNow"] = nmBaseMessage.readLong();
    //MonthCardGetAllCoin	Long	购买月卡一共将会获得金币数
    dataTable["MonthCardGetAllCoin"] = nmBaseMessage.readLong();
    //MonthCardUnderCoin	Long	月卡用户触发奖励金币的金币条件
    dataTable["MonthCardUnderCoin"] = nmBaseMessage.readLong();
    //MonthCardUnderGetCoin	Long	月卡用户出发奖励获得金币数
    dataTable["MonthCardUnderGetCoin"] = nmBaseMessage.readLong();
    //InteractionList	Loop	互动表情数据loop
    dataTable["InteractionList"] = {};
    var InteractionListCnt = nmBaseMessage.readInt();
    dataTable["InteractionListCnt"]= InteractionListCnt;
    for(var i = 0;i< InteractionListCnt;i++) {
        dataTable["InteractionList"][i] = {};
        nmBaseMessage.startReadLoop();
        //…type	Int	互动表情类型	1.鲜花2.西红柿3.嘴唇4.炸弹5.大便6.机枪
        dataTable["InteractionList"][i].type = nmBaseMessage.readInt();
        //…coin	Long	花费金币	发送表情消耗金币数
        dataTable["InteractionList"][i].coin = nmBaseMessage.readLong();
        //…meili	Long	对方的魅力值变化	有正有负
        dataTable["InteractionList"][i].meili = nmBaseMessage.readLong();
    }
    return dataTable;
}

//扎金花公告记录 (JINHUA_MGR_NOTICE)
function read80680003(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_NOTICE;
    dataTable["messageName"] = "JINHUA_MGR_NOTICE";

    //Timestamp	Long	时间
    dataTable["Timestamp"] = nmBaseMessage.readLong();
    //TitleList	LoopMsg		称谓配置
    dataTable["RecordList"] = {};
    var RecordListCnt = nmBaseMessage.readInt();
    dataTable["RecordListCnt"]= RecordListCnt;
    for(var i = 0;i< RecordListCnt; ++i){
        dataTable["RecordList"][i] = {};
        nmBaseMessage.startReadLoop();
        //…content	Text	提示
        dataTable["RecordList"][i].content = nmBaseMessage.readString();
        //…actionId	Int	actionId（小游戏id）	如果为0，则是普通公告
        dataTable["RecordList"][i].actionId = nmBaseMessage.readInt();
        //…status	Int	小游戏状态	1能进去，2加锁，3是金币不足
        dataTable["RecordList"][i].status = nmBaseMessage.readInt();
        //…colorR	Int	字体色值R
        dataTable["RecordList"][i].colorR = nmBaseMessage.readInt();
        //…colorG	Int	字体色值G
        dataTable["RecordList"][i].colorG = nmBaseMessage.readInt();
        //…colorB	Int	字体色值B
        dataTable["RecordList"][i].colorB = nmBaseMessage.readInt();
    }
    return dataTable;
}

//3.46金花背包V2(JINHUA_MGR_BACKPACK_ITEMS_V2）
function read8068002e(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_BACKPACK_ITEMS_V2;
    dataTable["messageName"] = "JINHUA_MGR_BACKPACK_ITEMS_V2";

    //backpackList	LoopMsg	背包列表
    dataTable["BackpackList"] = {};
    var BackpackListCnt = nmBaseMessage.readInt();
    dataTable["BackpackListCnt"]= BackpackListCnt;
    for(var i=0; i< BackpackListCnt; ++i){
        nmBaseMessage.startReadLoop();
        dataTable["BackpackList"][i] = {};
        //…itemId	Int	Id
        dataTable["BackpackList"][i].itemId = nmBaseMessage.readInt();
        //…title	Text	标题
        dataTable["BackpackList"][i].title = nmBaseMessage.readString();
        //…picUrl	Text	图片路径
        dataTable["BackpackList"][i].picUrl = nmBaseMessage.readString();
        //…desc	Text	描述文字
        dataTable["BackpackList"][i].desc = nmBaseMessage.readString();
        //…count	Int	用户拥有数量
        dataTable["BackpackList"][i].count = nmBaseMessage.readInt();
        //...isuse	Byte	是否可以使用	0不可使用1可以使用
        dataTable["BackpackList"][i].isuse = nmBaseMessage.readByte();
    }
    return dataTable;
}

//保险箱(JHID_STRONG_BOX_INFO）
function read8020002d(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JHID_STRONG_BOX_INFO;
    dataTable["messageName"] = "JHID_STRONG_BOX_INFO";
    //strongBoxCoin	Long	保险箱中的金币
    dataTable["strongBoxCoin"] = nmBaseMessage.readLong();
    //charmRate	int	存钱扣魅力的千分比	存钱扣魅力费率，向下取整
    dataTable["charmRate"] = nmBaseMessage.readInt();
    return dataTable;
}

//扎金花每日领工资面板信息 (JINHUA_MGR_DAILY_SALARY）
function read8268001a(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_DAILY_SALARY;
    dataTable["messageName"] = "JINHUA_MGR_DAILY_SALARY";

    //CanReceive	Byte	是否可以领取奖励	1.可领取 0不可领取
    dataTable["CanReceive"] = nmBaseMessage.readByte();
    //Coin	Int	用户金币数
    dataTable["Coin"] = nmBaseMessage.readLong();
    //MaxDay	Int	最大连续天数
    dataTable["MaxDay"] = nmBaseMessage.readInt();
    //CountDay	Int	当前连续天数
    dataTable["CountDay"] = nmBaseMessage.readInt();
    //TomorrowReward	Int	明日登陆可领工资数
    dataTable["TomorrowReward"] = nmBaseMessage.readInt();
    //MaxReward	Int	达到最大连续天数可领工资数
    dataTable["MaxReward"] = nmBaseMessage.readInt();
    //BaseReward	Int	基础奖励
    dataTable["BaseReward"] = nmBaseMessage.readInt();
    //LevelReward	Int	等级奖励
    dataTable["LevelReward"] = nmBaseMessage.readInt();
    //VipReward	Int	VIP等级奖励
    dataTable["VipReward"] = nmBaseMessage.readInt();
    //VipLevel	Int	用户VIP等级
    dataTable["VipLevel"] = nmBaseMessage.readInt();
    //Level	Int	用户等级
    dataTable["Level"] = nmBaseMessage.readInt();
    //PhotoUrl	String	头像地址
    dataTable["PhotoUrl"] = nmBaseMessage.readString();
    return dataTable;
}

//扎金花每日领工资面板信息 (JINHUA_MGR_DAILY_SALARY）
function read8068001b(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_GET_SALARY;
    dataTable["messageName"] = "JINHUA_MGR_GET_SALARY";

    //Success	Byte	是否领取成功	1.成功 0不成功
    dataTable["Success"] = nmBaseMessage.readByte();
    //Msg	String	提示信息
    dataTable["Msg"] = nmBaseMessage.readString();
    return dataTable;
}

//3.46扎金花好友列表 (JINHUA_MGR_FRIEND_LIST）
function read82680008(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_FRIEND_LIST;
    dataTable["messageName"] = "JINHUA_MGR_FRIEND_LIST";

    //FriendList	LoopMsg		游戏内加好友列表
    dataTable["FriendList"] = {};
    var FriendListCnt = nmBaseMessage.readInt();
    dataTable["FriendListCnt"]= FriendListCnt;
    for(var i=0; i< FriendListCnt; ++i){
        nmBaseMessage.startReadLoop();
        dataTable["FriendList"][i] = {};
        //…userID	Int
        dataTable["FriendList"][i].userID = nmBaseMessage.readInt();
        //…name	String	昵称
        dataTable["FriendList"][i].name = nmBaseMessage.readString();
        //…coin	Int	用户金币
        dataTable["FriendList"][i].coin = nmBaseMessage.readLong();
        //…level	Int	好友等级
        dataTable["FriendList"][i].level = nmBaseMessage.readInt();
        //…signAward	Int	签到加成
        dataTable["FriendList"][i].signAward = nmBaseMessage.readInt();
        //…photoUrl	String	头像
        dataTable["FriendList"][i].photoUrl = nmBaseMessage.readString();
        //vipLevel 用户vip等级
        dataTable["FriendList"][i].vipLevel = nmBaseMessage.readInt();
        //visibility 是否可领取签到奖励
        dataTable["FriendList"][i].visibility = nmBaseMessage.readByte();
        //conversationID int 会话ID
        dataTable["FriendList"][i].conversationID = nmBaseMessage.readInt();
        //unreadCnt int 会话中未读邮件数量
        dataTable["FriendList"][i].unreadCnt = nmBaseMessage.readInt();
    }

    //邀请的好友列表
    //InvintFriendList	LoopMsg		游戏内加好友列表
    dataTable["InvintFriendList"] = {};
    var InvintFriendListCnt = nmBaseMessage.readInt();
    dataTable["InvintFriendListCnt"]= InvintFriendListCnt;
    for(var i=0; i< InvintFriendListCnt; ++i){
        nmBaseMessage.startReadLoop();
        dataTable["InvintFriendList"][i] = {};
        //…userID	Int
        dataTable["InvintFriendList"][i].userID = nmBaseMessage.readInt();
        //…name	String	昵称
        dataTable["InvintFriendList"][i].name = nmBaseMessage.readString();
        //…coin	Int	用户金币
        dataTable["InvintFriendList"][i].coin = parseInt(nmBaseMessage.readLong());
        //…level	Int	好友等级
        dataTable["InvintFriendList"][i].level = nmBaseMessage.readInt();
        //…signAward	Int	签到加成
        dataTable["InvintFriendList"][i].signAward = nmBaseMessage.readInt();
        //…photoUrl	String	头像
        dataTable["InvintFriendList"][i].photoUrl = nmBaseMessage.readString();
        //…lastDays	Int	多久没有登陆过
        dataTable["InvintFriendList"][i].lastDays = nmBaseMessage.readInt();
        //vipLevel 用户vip等级
        dataTable["InvintFriendList"][i].vipLevel = nmBaseMessage.readInt();
        //visibility 是否可领取签到奖励
        dataTable["InvintFriendList"][i].visibility = nmBaseMessage.readByte();
        //conversationID int 会话ID
        dataTable["InvintFriendList"][i].conversationID = nmBaseMessage.readInt();
        //unreadCnt int 会话中未读邮件数量
        dataTable["InvintFriendList"][i].unreadCnt = nmBaseMessage.readInt();
    }
    //Maxfriendcnt	Int	好友上限数
    dataTable["Maxfriendcnt"] = nmBaseMessage.readInt();
    //SignAward	Int	签到总奖励
    dataTable["SignAward"] = nmBaseMessage.readInt();
    return dataTable;
}

//3.46扎金花陌生人列表 (JINHUA_MGR_STRANGER_LIST）
function read82680019(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_STRANGER_LIST;
    dataTable["messageName"] = "JINHUA_MGR_STRANGER_LIST";

    //FriendList	LoopMsg		游戏内加好友列表
    dataTable["FriendList"] = {};
    var BackpackListCnt = nmBaseMessage.readInt();
    dataTable["FriendListCnt"]= BackpackListCnt;
    for(var i=0; i< BackpackListCnt; ++i){
        nmBaseMessage.startReadLoop();
        dataTable["FriendList"][i] = {};
        //…userID Int
        dataTable["FriendList"][i].userID = nmBaseMessage.readInt();
        //…name String  昵称
        dataTable["FriendList"][i].name = nmBaseMessage.readString();
        //…coin Int 用户金币
        dataTable["FriendList"][i].coin = nmBaseMessage.readLong();
        //…level  Int 好友等级
        dataTable["FriendList"][i].level = nmBaseMessage.readInt();
        //…photoUrl String  头像
        dataTable["FriendList"][i].photoUrl = nmBaseMessage.readString();
        //vipLevel 用户vip等级
        dataTable["FriendList"][i].vipLevel = nmBaseMessage.readInt();
        //conversationID int 会话ID
        dataTable["FriendList"][i].conversationID = nmBaseMessage.readInt();
        //unreadCnt int 会话中未读邮件数量
        dataTable["FriendList"][i].unreadCnt = nmBaseMessage.readInt();
    }
    return dataTable;
}


//3.46扎金花追踪列表 (JINHUA_MGR_TRACE_LIST）
function read82680020(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_TRACE_LIST;
    dataTable["messageName"] = "JINHUA_MGR_TRACE_LIST";

    //FriendList	LoopMsg		游戏内加好友列表
    dataTable["TraceList"] = {};
    var BackpackListCnt = nmBaseMessage.readInt();
    dataTable["TraceListCnt"]= BackpackListCnt;
    for(var i=0; i< BackpackListCnt; ++i){
        nmBaseMessage.startReadLoop();
        dataTable["TraceList"][i] = {};
        //…userID	Int
        dataTable["TraceList"][i].userID = nmBaseMessage.readInt();
        //…name	Text	昵称
        dataTable["TraceList"][i].name = nmBaseMessage.readString();
        //…coin	Int	用户金币
        dataTable["TraceList"][i].coin = parseInt(nmBaseMessage.readLong());
        //…level	Int	好友等级
        dataTable["TraceList"][i].level = nmBaseMessage.readInt();
        //…photoUrl	Text	头像
        dataTable["TraceList"][i].photoUrl = nmBaseMessage.readString();
        //...vipLevel	Int	用户VIP等级
        dataTable["TraceList"][i].vipLevel = nmBaseMessage.readInt();
        //...loginState	Text	登录状态	在线，离线N小时，离线N天等
        dataTable["TraceList"][i].loginState = nmBaseMessage.readString();
        //...stateColor	Text	颜色	RGB字符串
        dataTable["TraceList"][i].stateColor = nmBaseMessage.readString();
        //...location	Text	位置，如果在线，显示在哪个场次
        dataTable["TraceList"][i].location = nmBaseMessage.readString();
        //...isTrace	Byte	是否可以追踪	1可以0不可以
        dataTable["TraceList"][i].isTrace = nmBaseMessage.readByte();
    }
    //TraceMax	Int	追踪列表上限
    dataTable["TraceMax"] = nmBaseMessage.readInt();
    return dataTable;
}

//3.46金花领取好友签到奖励 (JINHUA_MGR_SIGN_FRIEND_REWARD
function read80680013(nmBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_SIGN_FRIEND_REWARD;
    dataTable["messageName"] = "JINHUA_MGR_SIGN_FRIEND_REWARD";
    //Result	Byte	结果	1成功2不成功
    dataTable["Result"] = nmBaseMessage.readByte();
    //Flag 好友列表中的ID
    dataTable["Flag"] = nmBaseMessage.readInt();
    
    return dataTable;
}

//金花请求破产送金信息(JINHUA_MGR_REVIVE_INFO)
function read80680001(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_REVIVE_INFO;
    dataTable["messageName"] = "JINHUA_MGR_REVIVE_INFO";

    //hasRelive	Byte	是否有破产礼包
    dataTable["hasRelive"] = nMBaseMessage.readByte();
    //Time	Long	礼包领取剩余时间	如果为0则可以马上领取
    dataTable["Time"] = parseInt(nMBaseMessage.readLong());
    return dataTable
}

//金花请求破产送金信息(JINHUA_MGR_REVIVE)
function read80680002(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_REVIVE;
    dataTable["messageName"] = "JINHUA_MGR_REVIVE";

    //Coin	int	破产金
    dataTable["Coin"] = nMBaseMessage.readInt();
    return dataTable
}

//金花玩家登录请求领节日礼物 (JINHUA_MGR_JH_ACTIVITY)
function read80680011(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_JH_ACTIVITY;
    dataTable["messageName"] = "JINHUA_MGR_JH_ACTIVITY";

    //Result	Byte	结果	1有奖2没奖励
    dataTable["Result"] = nMBaseMessage.readByte();
    //Title	Text	标题
    dataTable["Title"] = nMBaseMessage.readString();
    //Content	Text	内容
    dataTable["Content"] = nMBaseMessage.readString();
    //Toast	Text	提示文本
    dataTable["Toast"] = nMBaseMessage.readString();
    return dataTable
}

//扎金花好友是否有红点 (JINHUA_MGR_FRIEND_HAVE_REDP）
function read80680021(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_FRIEND_HAVE_REDP;
    dataTable["messageName"] = "JINHUA_MGR_FRIEND_HAVE_REDP";

    //Result	Byte	1有红点0没有红点
    dataTable["Result"] = nMBaseMessage.readByte();
    return dataTable
}

//扎金花充值返利相关信息 (JINHUA_MGR_RECHARGE_REBATE_INFO）
function read8068001c(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_RECHARGE_REBATE_INFO;
    dataTable["messageName"] = "JINHUA_MGR_RECHARGE_REBATE_INFO";

    //IsFirstRecharge	Byte	是否为首充翻倍	1.是 0不是
    dataTable["IsFirstRecharge"] = nMBaseMessage.readByte();
    //VipAddingPercent	int	玩家当前VIP的加送百分比
    dataTable["VipAddingPercent"] = nMBaseMessage.readInt();
    return dataTable
}

//快速开始
function read80210007(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JHID_QUICK_START;
    dataTable["messageName"] = "JHID_QUICK_START";

    //Result  byte  是否成功  1成功 0失败
    dataTable["Result"] = nMBaseMessage.readByte();
    //ResultTxt text  提示语内容
    dataTable["ResultTxt"] = nMBaseMessage.readString();
    return dataTable;
}

function read82200001(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JHID_TABLE_SYNC;
    dataTable["messageName"] = "JHID_TABLE_SYNC";
    //  房间ID
    dataTable["roomId"] = nMBaseMessage.readInt();
    //  牌桌ID
    dataTable["tableId"] = nMBaseMessage.readInt();
    //  牌桌状态
    dataTable["status"] = nMBaseMessage.readByte();
    //   庄家位置
    dataTable["dealerSSID"] = nMBaseMessage.readInt();
    //  单注金额
    dataTable["singleCoin"] = parseInt(nMBaseMessage.readLong());
    //  总注
    dataTable["totalPoolCoin"] = parseInt(nMBaseMessage.readLong());
    //  轮数
    dataTable["round"] = nMBaseMessage.readInt();
    //下一个玩家, 这里是游戏开始的第一个玩家
    var nextPlayerCnt = nMBaseMessage.readInt();
    dataTable["nextPlayerCnt"]= nextPlayerCnt;
    if(nextPlayerCnt!=0) {
        dataTable["currentPlayer"] = {};
        nMBaseMessage.startReadLoop();
        //下一个玩家位置
        dataTable["currentPlayer"]["SSID"] = nMBaseMessage.readInt();
        //跟注金额，如果为-1则按钮不可用
        dataTable["currentPlayer"]["callCoin"] = parseInt(nMBaseMessage.readLong());
        // 加注列表
        dataTable["currentPlayer"]["raiseCoin"] = {};

        var currentPlayerCnt = nMBaseMessage.readInt();
        dataTable["currentPlayerCnt"]= currentPlayerCnt;
        for(var i=0; i< currentPlayerCnt; ++i){
            dataTable["currentPlayer"]["raiseCoin"][i] = {};

            nMBaseMessage.startReadLoop();

            //加注列表的加注的金额
            dataTable["currentPlayer"]["raiseCoin"][i].raiseValue = parseInt(nMBaseMessage.readLong());
            //加注列表中加注金额的状态 0 此金额不可加注 1 此金额可加注
            dataTable["currentPlayer"]["raiseCoin"][i].raiseStatus = nMBaseMessage.readByte();
        }
        //0 不能操作，1 比牌 2 开牌
        dataTable["currentPlayer"]["compareCard"] = nMBaseMessage.readInt();
        //0不能看牌， 1可以看牌
        dataTable["currentPlayer"]["lookCard"] = nMBaseMessage.readInt();
    }
    //牌桌总座位数
    dataTable["seatCnt"] = nMBaseMessage.readInt();
    //玩家信息
    dataTable["players"] = {};
    //玩家数量
    var playersCnt = nMBaseMessage.readInt();
    dataTable["playersCnt"]= playersCnt;

    for(var i=0;i< playersCnt; ++i){
        dataTable["players"][i] = {};

        nMBaseMessage.startReadLoop();
        //玩家ID
        dataTable["players"][i].userId = nMBaseMessage.readInt();
        //昵称
        dataTable["players"][i].nickName = nMBaseMessage.readString();
        //照片URL
        dataTable["players"][i].photoUrl = nMBaseMessage.readString();
        //服务端座位号
        dataTable["players"][i].SSID = nMBaseMessage.readInt();
        //已下注金额
        dataTable["players"][i].betCoins = parseInt(nMBaseMessage.readLong());
        //剩余金币
        dataTable["players"][i].remainCoins = parseInt(nMBaseMessage.readLong());
        //状态
        dataTable["players"][i].status = nMBaseMessage.readByte();
        //Vip等级
        dataTable["players"][i].vipLevel = nMBaseMessage.readInt();
        //性别
        dataTable["players"][i].sex = nMBaseMessage.readByte();

        //禁比状态
        dataTable["players"][i].noPK= (nMBaseMessage.readByte()== 1);

        //牌数
        var cardCnt = nMBaseMessage.readInt();
        dataTable["players"][i]["cardCnt"] = cardCnt;

        dataTable["players"][i]["cardValues"] = {};
        for(var j=0; j< cardCnt; ++j){
            dataTable["players"][i]["cardValues"][j] = {};
            nMBaseMessage.startReadLoop();
            //牌值
            dataTable["players"][i]["cardValues"][j] = nMBaseMessage.readInt();
        }
        // 牌型
        dataTable["players"][i].cardType = nMBaseMessage.readByte();
        // ...level	Int	用户等级
        dataTable["players"][i].level = nMBaseMessage.readInt();
        // ...exp	Int	经验
        dataTable["players"][i].exp = nMBaseMessage.readInt();
        // ...expText	Text	经验Text	暂不使用的无效字段
        dataTable["players"][i].expText = nMBaseMessage.readString();
        // ...isCert	Byte	是否真人认证	1已认证0未认证
        dataTable["players"][i].isCert = nMBaseMessage.readByte();
        //...Clover	Byte	幸运草成就图标	1有0无
        dataTable["players"][i].Clover = nMBaseMessage.readByte();
    }

    //下注明细列表数
    var chipCnt = nMBaseMessage.readInt();
    dataTable["chipCnt"] = chipCnt;
    dataTable["chips"] = {};
    for(var i=0;i< chipCnt; ++i){
        nMBaseMessage.startReadLoop();

        dataTable["chips"][i] = {};
        //是否看牌 0否， 1看牌
        dataTable["chips"][i].lookCard = nMBaseMessage.readByte();
        //是否押满 0 否， 1押满
        dataTable["chips"][i].allIn = nMBaseMessage.readByte();
        //押注金币
        dataTable["chips"][i].coins = parseInt(nMBaseMessage.readLong());
    }

    // isShowlockedTableBtn	Byte	1显示锁定按钮，0不显示锁定按钮
    dataTable["isShowlockedTableBtn"] = nMBaseMessage.readByte();
    //enterRoomEffectMinVipLevel	Int	进场特效最低VIP等级
    dataTable["enterRoomEffectMinVipLevel"] = nMBaseMessage.readInt();
    //Exp	Int	当前经验
    dataTable["Exp"] = nMBaseMessage.readInt();
    //levelUpExp	Int	升级需要的总经验
    dataTable["levelUpExp"] = nMBaseMessage.readInt();
    //level	Int	当前等级
    dataTable["level"] = nMBaseMessage.readInt();
    //allRound	Int	每局游戏的总轮数
    dataTable["allRound"] = nMBaseMessage.readInt();

    //看牌条件列表
    dataTable["lookCardCondition"] = {};
    var lookCardConditionCnt= nMBaseMessage.readInt();
    dataTable["lookCardConditionCnt"]= lookCardConditionCnt;

    for(var i=0;i< lookCardConditionCnt; ++i){
        nMBaseMessage.startReadLoop();
        dataTable["lookCardCondition"][i]= {};

        //...coinCondition	Int	可以看牌金币数	本房间可以设置的下注N金币后才可以看牌。这个字段是每一个可以设置的N
        dataTable["lookCardCondition"][i].coinCondition = parseInt(nMBaseMessage.readLong());
    }
    //currentLockCoin	Int	当前看牌要求金币
    dataTable["currentLockCoin"] = parseInt(nMBaseMessage.readLong());
    //islockedTable	Byte	锁定状态	1加锁，0解锁
    dataTable["islockedTable"] = nMBaseMessage.readByte();
    //lockCoinVipLevel	Int	使用看牌底注vip等级限制
    dataTable["lockCoinVipLevel"] = nMBaseMessage.readInt();
    //matchInstanceId	text	比赛实例ID	比赛专用
    dataTable["matchInstanceId"] = nMBaseMessage.readString();
    //CompareRound	int	可比手数	多少轮之后可以比牌
    dataTable["CompareRound"] = nMBaseMessage.readInt();
    //baseChips	int	筹码基数	比赛用到
    dataTable["baseChips"] = nMBaseMessage.readInt();
    // luckyPoint	Int	幸运点	牌桌用到
    dataTable["luckyPoint"] = parseInt(nMBaseMessage.readLong());
    // Clover	Byte	幸运草成就图标	1有2无
    dataTable["Clover"] = nMBaseMessage.readByte();
    // BUILDTableId	Int 	自建房间ID	如果不是自建房间，返回0
    dataTable["BUILDTableId"] = nMBaseMessage.readInt();
    // BUILDRoomType	Int	房间类型1经典2千王
    dataTable["BUILDRoomType"] = nMBaseMessage.readInt();
    // BUILDPlayerName	Text	房主昵称
    dataTable["BUILDPlayerName"] = nMBaseMessage.readString();
    // BUILDMinCoin	Long	最少携带金币数
    dataTable["BUILDMinCoin"] = parseInt(nMBaseMessage.readLong());
    // BUILDOverTime	Long	创建房间距离关闭时间
    dataTable["BUILDOverTime"] = parseInt(nMBaseMessage.readLong());
    //matchTitle	Text	比赛是哪个场	比赛专用
    dataTable["matchTitle"] = nMBaseMessage.readString();
    return dataTable;
}

//解析房间列表
function read82210001(nMBaseMessage){
    var  dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_ROOMID_ROOM_LIST;
    dataTable["messageName"] = "JINHUA_ROOMID_ROOM_LIST";

    //解析List<房间列表>
    dataTable["Rooms"] = {};
    var  RoomsCnt = nMBaseMessage.readInt();
    dataTable["RoomsCnt"]= RoomsCnt;
    for(var i=0;i< RoomsCnt; ++i){
        dataTable["Rooms"][i] = {};

        nMBaseMessage.startReadLoop();

        //…roomID	int	房间ID
        dataTable["Rooms"][i].roomID = nMBaseMessage.readInt();
        //…title	Text	房间标题	String
        dataTable["Rooms"][i].title = nMBaseMessage.readString();
        //…roomPic	Text	房间图片	String
        dataTable["Rooms"][i].roomPic = nMBaseMessage.readString();
        //…tableFee	int	桌费
        dataTable["Rooms"][i].tableFee = nMBaseMessage.readInt();
        //…minCoin	Long	房间携带最小金币
        dataTable["Rooms"][i].minCoin = parseInt(nMBaseMessage.readLong());
        //…maxCoin	Long	房间携带最大金币
        dataTable["Rooms"][i].maxCoin = parseInt(nMBaseMessage.readLong());
        //…betMinCoin	Long	单注最小金币
        dataTable["Rooms"][i].betMinCoin = parseInt(nMBaseMessage.readLong());
        //…betMaxCoin	Long	单注最大金币
        dataTable["Rooms"][i].betMaxCoin = parseInt(nMBaseMessage.readLong());

        //解析加注列表
        var jzCnt = nMBaseMessage.readInt();
        dataTable["Rooms"][i]["jzCnt"]= jzCnt;
        for(var j=0;j< jzCnt; ++j){
            nMBaseMessage.startReadLoop();

            dataTable["Rooms"][i]["jizhanTable"] = {};
            dataTable["Rooms"][i]["jizhanTable"][j] = {};
            dataTable["Rooms"][i]["jizhanTable"][j].jzNum = parseInt(nMBaseMessage.readLong());
        }

        //解析 最大局数
        dataTable["Rooms"][i].maxRound = nMBaseMessage.readInt();
        //解析 是否可换牌
        dataTable["Rooms"][i].changeCards = nMBaseMessage.readByte();
        //解析 是否可亮牌
        dataTable["Rooms"][i].showCards = nMBaseMessage.readByte();
        //解析 房间类型， 1经典场 2千王场
        dataTable["Rooms"][i].roomType = nMBaseMessage.readInt();
        //房间金币图片
        dataTable["Rooms"][i].roomCoinImg = nMBaseMessage.readString();
        //...lastStartTime	Long	还剩N秒开放	0表示开放中
        dataTable["Rooms"][i].lastStartTime = parseInt(nMBaseMessage.readLong());
        //…isTiming	byte	是否是限时场	0不是限时场1是限时场
        dataTable["Rooms"][i].isTiming = nMBaseMessage.readByte();
    }
    //解析 时间戳
    dataTable["timestamp"] = parseInt(nMBaseMessage.readLong());

    return dataTable;
}

//Todo:解析UTF16
//解析EnterRoomRespBean
function read80210002(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JHID_ENTER_ROOM;
    dataTable["messageName"] = "EnterRoomRespBean";

    //解析 是否成功 0 失败，1 成功
    dataTable["result"] = nMBaseMessage.readByte();
    //解析 回复消息
    dataTable["message"] = nMBaseMessage.readString();

    return dataTable;
}

//3.43扎金花自建房间信息(JINHUA_MGR_BUILD_TABLE_INFO）
function read8068002b(nMBaseMessage){
    var  dataTable = {};
    dataTable["messageType"] = ACK + JINHUA_MGR_BUILD_TABLE_INFO;
    dataTable["messageName"] = "JINHUA_MGR_BUILD_TABLE_INFO";
    dataTable["RoomTypeList"] = {};
    //roomTypeloop	Loop
    var RoomTypeCnt = nMBaseMessage.readInt();
    dataTable["RoomTypeCnt"]= RoomTypeCnt;
    for(var i=0; i<RoomTypeCnt; ++i){
        dataTable["RoomTypeList"][i] = {};
        nMBaseMessage.startReadLoop();

        //...roomType	Byte	1经典房间2千王房间
        dataTable["RoomTypeList"][i].roomType = nMBaseMessage.readByte();
        //...minCoinLoop	Loop	自建房间loop
        dataTable["RoomTypeList"][i]["MinCoinList"] = {};

        var MinCoinCnt = nMBaseMessage.readInt();
        dataTable["RoomTypeList"][i]["MinCoinCnt"]= MinCoinCnt;
        for(var j=0; j< MinCoinCnt; ++j){
            nMBaseMessage.startReadLoop();
            dataTable["RoomTypeList"][i]["MinCoinList"][j] = {};
            //......minCoin	Long	最小携带金币数
            dataTable["RoomTypeList"][i]["MinCoinList"][j].minCoin = parseInt(nMBaseMessage.readLong());
            //......antecoin	Int	底注金币
            dataTable["RoomTypeList"][i]["MinCoinList"][j].antecoin = nMBaseMessage.readInt();
            //......charm	Int	对应消耗魅力数
            dataTable["RoomTypeList"][i]["MinCoinList"][j].charm = nMBaseMessage.readInt();
        }
    }

    dataTable["OpenTableTimeList"] = {};
    //openTableTimeLoop	Loop	开发时间列表
    var OpenTableTimeCnt = nMBaseMessage.readInt();

    for(var i=0; i<RoomTypeCnt; ++i) {
        dataTable["OpenTableTimeList"][i] = {};
        nMBaseMessage.startReadLoop();

        //...hour	Int	连续几小时
        dataTable["OpenTableTimeList"][i].hour = nMBaseMessage.readInt();
        //...charm	Int	对应消耗魅力数
        dataTable["OpenTableTimeList"][i].charm = nMBaseMessage.readInt();
    }

    //playerCharm	Int	玩家总魅力值
    dataTable["playerCharm"] = nMBaseMessage.readInt();

    return dataTable;
}

//解析背包商品数量
function read80060049(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + DBID_BACKPACK_GOODS_COUNT;
    dataTable["messageName"] = "DBID_BACKPACK_GOODS_COUNT";

    //Type  0时效型 1数量型
    dataTable["Type"] = nMBaseMessage.readByte();
    //Num  时效型单位（秒）,数量型单位（个）
	dataTable["Num"] = parseInt(nMBaseMessage.readLong());
    //ItemID  商品类型ID
    dataTable["ItemID"] = nMBaseMessage.readInt();

    return dataTable
}

//退出牌桌
function read80210005(nMBaseMessage){
    var  dataTable = {};
    dataTable["messageType"] = ACK + JHID_QUIT_TABLE;
    dataTable["messageName"] = "JHID_QUIT_TABLE";

    //解析 请求结果，0 失败 1成功
    dataTable["result"] = nMBaseMessage.readByte();
    //解析 返回消息
    dataTable["message"] = nMBaseMessage.readString();
    return dataTable
}

//坐下
function read82210003(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JHID_SIT_DOWN;
    dataTable["messageName"] = "JHID_SIT_DOWN";
    //解析 结果 0 失败 1 成功
    dataTable["result"] = nMBaseMessage.readByte();
    //解析 返回结果
    dataTable["message"] = nMBaseMessage.readString();
    if(dataTable["result"] == 0){
        return dataTable;
    }
    //解析Bean 玩家信息，广播时候发
    dataTable["playerInfo"] = {};
    //解析坐下的玩家
    var sitCnt = nMBaseMessage.readInt();
    dataTable["sitCnt"]= sitCnt;
    /*******Loop*********/
    if(sitCnt!= 0){
        nMBaseMessage.startReadLoop();
        //解析 UserID
        dataTable["playerInfo"].userId = nMBaseMessage.readInt();
        //解析 昵称
        dataTable["playerInfo"].nickName = nMBaseMessage.readString();
        //解析 照片URL
        dataTable["playerInfo"].photoUrl = nMBaseMessage.readString();
        //解析 座位号
        dataTable["playerInfo"].SSID = nMBaseMessage.readInt();
        //解析 已下注金额
        dataTable["playerInfo"].betCoins = parseInt(nMBaseMessage.readLong());
        //解析 剩余金币
        dataTable["playerInfo"].remainCoins = parseInt(nMBaseMessage.readLong());
        //解析 状态
        dataTable["playerInfo"].status = nMBaseMessage.readByte();
        //解析 Vip等级
        dataTable["playerInfo"].vipLevel = nMBaseMessage.readInt();
        //性别
        dataTable["playerInfo"].sex = nMBaseMessage.readByte();
        //禁比
        dataTable["playerInfo"].noPK= nMBaseMessage.readByte()== 1;

        //牌数
        var cardCnt = nMBaseMessage.readInt();
        dataTable["playerInfo"].cardCnt= cardCnt;
        dataTable["playerInfo"]["cardValues"] = {};
        //牌值
        for(var i=0; i< cardCnt; ++i){
            nMBaseMessage.startReadLoop();

            dataTable["playerInfo"]["cardValues"][i]= nMBaseMessage.readInt();
        }
        // 牌型
        dataTable["playerInfo"].cardType = nMBaseMessage.readByte();
        //…level	Int	用户等级
        dataTable["playerInfo"].level = nMBaseMessage.readInt();
        //…exp	Int	经验
        dataTable["playerInfo"].exp = nMBaseMessage.readInt();
        //...expText	Text	经验Text	暂不使用的无效字段
        dataTable["playerInfo"].expText = nMBaseMessage.readString();
        //...isCert	Byte	是否真人认证	1已认证0未认证
        dataTable["playerInfo"].isCert = nMBaseMessage.readByte();
        // ...Clover	Byte	幸运草成就图标	1有2无
        dataTable["playerInfo"].Clover = nMBaseMessage.readByte();
    }
    return dataTable;
}

//站起
function read80210004(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JHID_STAND_UP;
    dataTable["messageName"] = "JHID_STAND_UP";
    //解析 座位号
    dataTable["SSID"] = nMBaseMessage.readInt();
    //解析 结果 0失败 1成功
    dataTable["result"] = nMBaseMessage.readByte();
    //解析 结果信息
    //Todo:使用readUtf
    dataTable["message"] = nMBaseMessage.readString();
    return dataTable
}

//准备
function read80200002(nMBaseMessage){
    var  dataTable = {};
    dataTable["messageType"] = ACK + JHID_READY;
    dataTable["messageName"] = "JHID_READY";
    //服务端座位号
    dataTable["SSID"] = nMBaseMessage.readInt();
    //Result  byte  准备是否成功  1成功 0失败
    dataTable["result"] = nMBaseMessage.readByte();

    //ResultTxt text  提示语内容
    dataTable["message"] = nMBaseMessage.readString();
    return dataTable;
}

//金花房间消息—查看宝盒进度信息
function read80200028(nMBaseMessage){
    var  dataTable = {};
    dataTable["messageType"] = ACK + JHID_GET_BAOHE_STEP_INFO;
    dataTable["messageName"] = "JHID_GET_BAOHE_STEP_INFO";

    //nowNumber	Int	当前进度
    dataTable["nowNumber"] = nMBaseMessage.readInt();
    //nowNumberMax	Int	进度上限
    dataTable["nowNumberMax"] = nMBaseMessage.readInt();
    //IncrBaoheRound	Int	增加进度轮数条件
    dataTable["IncrBaoheRound"] = nMBaseMessage.readInt();
    return dataTable
}

//2.39金花牌桌消息—领取在线时长奖励(JHID_GET_ONLINE_REWARD)
function read82200027(nMBaseMessage){
    var  dataTable = {};
    dataTable["messageType"] = ACK + JHID_GET_ONLINE_REWARD;
    dataTable["messageName"] = "JHID_GET_ONLINE_REWARD";
    //result	Byte	是否成功	0失败1成功
    dataTable["result"] = nMBaseMessage.readByte();
    //message	Utf	回复消息	String
    dataTable["message"] = nMBaseMessage.readString();
    //nowNumber	Int	当前进度
    dataTable["nowNumber"] = nMBaseMessage.readInt();
    //nowNumberMax	Int	进度上限
    dataTable["nowNumberMax"] = nMBaseMessage.readInt();
    //nowCoin	Long	玩家身上当前金币数	如果第一个字段是失败，则此字段是无效信息
    dataTable["nowCoin"] = parseInt(nMBaseMessage.readLong());
    return dataTable
}

//弃牌
function read82200005(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JHID_DISCARD;
    dataTable["messageName"] = "JHID_DISCARD";

    //解析 弃牌玩家座位
    dataTable["seatID"] = nMBaseMessage.readInt();
    //解析 轮数
    dataTable["round"] = nMBaseMessage.readInt();
    //解析Bean 下一个玩家位置
    var nextPlayerCnt = nMBaseMessage.readInt();
    dataTable["nextPlayerCnt"]= nextPlayerCnt;
    if(nextPlayerCnt== 0){
        dataTable["nextPlayer"] = {};
        nMBaseMessage.startReadLoop();
        //解析 下一个玩家位置
        dataTable["nextPlayer"].SSID = nMBaseMessage.readInt();
        //解析 跟注金额，如果为-1则按钮不可用
        dataTable["nextPlayer"].callCoin = parseInt(nMBaseMessage.readLong());
        //加注列表
        dataTable["nextPlayer"]["raiseCoin"] = {};
        var raiseCoinCnt = nMBaseMessage.readInt();
        dataTable["nextPlayer"]["raiseCoinCnt"]= raiseCoinCnt;
        for(var i=0;i< raiseCoinCnt; ++i){
            dataTable["nextPlayer"]["raiseCoin"][i] = {};
            nMBaseMessage.startReadLoop();

            //加注列表的加注的金额
            dataTable["nextPlayer"]["raiseCoin"][i].raiseValue = parseInt(nMBaseMessage.readLong());
            //加注列表中加注金额的状态 0 此金额不可加注 1 此金额可加注
            dataTable["nextPlayer"]["raiseCoin"][i].raiseStatus = nMBaseMessage.readByte();
        }
    }
    //解析 0 不能操作，1 比牌 2 开牌
    dataTable["nextPlayer"].compareCard = nMBaseMessage.readInt();
    //解析 0不能看牌， 1可以看牌
    dataTable["nextPlayer"].lookCard = nMBaseMessage.readInt();
    return dataTable;
}


//下注加注
function read82200006(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JHID_BET;
    dataTable["messageName"] = "JHID_BET";
    //座位号
    dataTable["SSID"] = nMBaseMessage.readInt();
    //下注类型 0(NONE 无任何操作)  1 (ANTE 下底注) 2(CALL 跟注) 3(RAISE 加注) 4 (ALLIN 全压) 5(PK 比牌)
    dataTable["type"] = nMBaseMessage.readByte();
    //下注金额
    dataTable["thisTimeBetCoins"] = nMBaseMessage.readLong();
    //玩家下注总金币
    dataTable["betCoins"] = nMBaseMessage.readLong();
    //玩家剩余金币
    dataTable["remainCoins"] = nMBaseMessage.readLong();
    //轮数
    dataTable["round"] = nMBaseMessage.readInt();
    //单注
    dataTable["singleCoin"] = nMBaseMessage.readLong();
    //锅底
    dataTable["totalPoolCoin"] = nMBaseMessage.readLong();
    var nextPlayerCnt = nMBaseMessage.readInt();
    dataTable["nextPlayerCnt"]= nextPlayerCnt;
    if(nextPlayerCnt!= 0){
        dataTable["currentPlayer"] = {};
        nMBaseMessage.startReadLoop();
        //下一个玩家位置
        dataTable["currentPlayer"]["SSID"] = nMBaseMessage.readInt();
        dataTable["currentPlayer"]["callCoin"] = nMBaseMessage.readLong();
        // 加注列表
        dataTable["currentPlayer"]["raiseCoin"] = {};
        var  raiseCoinCnt = nMBaseMessage.readInt();
        dataTable["currentPlayer"]["raiseCoinCnt"] = raiseCoinCnt;

        for(var i=0;i< raiseCoinCnt; ++i){
            nMBaseMessage.startReadLoop();
            dataTable["currentPlayer"]["raiseCoin"][i] = {};
            //加注列表的加注的金额
            dataTable["currentPlayer"]["raiseCoin"][i].raiseValue = nMBaseMessage.readLong();
            //加注列表中加注金额的状态 0 此金额不可加注 1 此金额可加注
            dataTable["currentPlayer"]["raiseCoin"][i].raiseStatus = nMBaseMessage.readByte();
        }
        //0 不能操作，1 比牌 2 开牌
        dataTable["currentPlayer"]["compareCard"] = nMBaseMessage.readInt();
        //0不能看牌， 1可以看牌
        dataTable["currentPlayer"]["lookCard"] = nMBaseMessage.readInt();
    }
    dataTable["result"] = nMBaseMessage.readByte();
    dataTable["message"] = nMBaseMessage.readString();
    dataTable["dealerSSID"] = nMBaseMessage.readInt();
    return dataTable;
}

//聊天
function read8220000b(nMBaseMessage){
    var  dataTable = {};
    dataTable["messageType"] = ACK + JHID_CHAT;
    dataTable["messageName"] = "JHID_CHAT";

    dataTable["SSID"] = nMBaseMessage.readInt();
    //type  byte 聊天类型
    dataTable["type"] = nMBaseMessage.readByte();
    //msg text  发言内容
    dataTable["msg"] = nMBaseMessage.readString();
    //result 发送结果
    dataTable["result"] = nMBaseMessage.readByte();
    //剩余金币数
    dataTable["remainCoins"] = parseInt(nMBaseMessage.readLong());

    //message 发送结果提示
    dataTable["message"] = nMBaseMessage.readString();
    return dataTable;
}

//发牌
function read82200003(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JHID_INIT_CARDS;
    dataTable["messageName"] = "JHID_INIT_CARDS";

    //解析 庄家位置
    dataTable["dealerSeatID"] = nMBaseMessage.readInt();
    //解析 发牌数量
    dataTable["cardCnt"] = nMBaseMessage.readInt();
    //解析 轮数
    dataTable["round"] = nMBaseMessage.readInt();
    //解析 下一玩家 length是保底方案，数据传输出错时length = 0;
    var nextPlayerCnt = nMBaseMessage.readInt();

    dataTable["nextPlayerCnt"]= nextPlayerCnt;
    if(nextPlayerCnt!= 0){
        dataTable["currentPlayer"] = {};
        nMBaseMessage.startReadLoop();
        //下一个玩家位置
        dataTable["currentPlayer"]["SSID"] = nMBaseMessage.readInt();
        //跟注金额，如果为-1则按钮不可用
        dataTable["currentPlayer"]["callCoin"] = nMBaseMessage.readLong();
        //加注列表
        dataTable["currentPlayer"]["raiseCoin"] = {};

        //牌桌上的玩家数量
        var currentPlayerCnt= nMBaseMessage.readInt();
        dataTable["currentPlayerCnt"]= currentPlayerCnt;
        for(var i=0; i<currentPlayerCnt; ++i){
            //读取Loop头
            nMBaseMessage.startReadLoop();

            dataTable["currentPlayer"]["raiseCoin"][i] = {};
            //加注列表的加注的金额
            dataTable["currentPlayer"]["raiseCoin"][i].raiseValue = nMBaseMessage.readLong();
            //加注列表中加注金额的状态 0 此金额不可加注 1 此金额可加注
            dataTable["currentPlayer"]["raiseCoin"][i].raiseStatus = nMBaseMessage.readByte();
        }
        //0 不能操作，1 比牌 2 开牌
        dataTable["currentPlayer"]["compareCard"] = nMBaseMessage.readInt();
        //0不能看牌， 1可以看牌
        dataTable["currentPlayer"]["lookCard"] = nMBaseMessage.readInt();
    }
    //currentLockCoin	Int	当前看牌要求金币
    dataTable["currentLockCoin"] = nMBaseMessage.readLong();
    return dataTable;
}

//结算
function read82200009(nMBaseMessage){
    var  dataTable = {};
    dataTable["messageType"] = ACK + JHID_GAME_RESULT;
    dataTable["messageName"] = "JHID_GAME_RESULT";

    //解析 房间ID
    dataTable["roomID"] = nMBaseMessage.readInt();
    //解析 牌桌ID
    dataTable["tableID"] = nMBaseMessage.readInt();
    //解析 锅底金币数
    dataTable["potCoin"] = nMBaseMessage.readLong();
    //解析 赢的座位数
    dataTable["winnerSeat"] = nMBaseMessage.readInt();
    //玩家
    dataTable["users"] = {};
    //玩家数
    var usersCnt = nMBaseMessage.readInt();
    dataTable["usersCnt"]= usersCnt;

    for(var i=0; i< usersCnt; ++i){
        dataTable["users"][i] = {};
        nMBaseMessage.startReadLoop();

        //解析 UserID
        dataTable["users"][i].userID = nMBaseMessage.readInt();
        //解析 昵称
        dataTable["users"][i].nickName = nMBaseMessage.readString();
        //解析 照片URL
        dataTable["users"][i].photoUrl = nMBaseMessage.readString();
        //解析 座位号
        dataTable["users"][i].seatID = nMBaseMessage.readInt();

        //解析 已下注金额
        dataTable["users"][i].betCoins = nMBaseMessage.readLong();
        //解析 剩余金币
        dataTable["users"][i].remainCoins = nMBaseMessage.readLong();
        //解析 状态
        dataTable["users"][i].status = nMBaseMessage.readByte();
        //解析 Vip等级
        dataTable["users"][i].vipLevel = nMBaseMessage.readInt();
        dataTable["users"][i].sex = nMBaseMessage.readByte();

        dataTable["users"][i].noPK = (nMBaseMessage.readByte() == 1);
        //解析 牌值
        dataTable["users"][i]["cardValues"] = {};
        var cardCnt = nMBaseMessage.readInt();
       dataTable["users"][i]["cardCnt"]= cardCnt;
        for(var j= 0; j< cardCnt; ++j){
            nMBaseMessage.startReadLoop();
            dataTable["users"][i]["cardValues"][j] = nMBaseMessage.readInt();
        }
        // 牌型
        dataTable["users"][i].cardType = nMBaseMessage.readByte();
        //level	Int	用户等级
        dataTable["users"][i].level = nMBaseMessage.readInt();
        //exp	Int	经验
        dataTable["users"][i].exp = nMBaseMessage.readInt();
        // ...expText	Text	经验Text	暂不使用的无效字段
        dataTable["users"][i].expText = nMBaseMessage.readString();
        // ...isCert	Byte	是否真人认证	1已认证0未认证
        dataTable["users"][i].isCert = nMBaseMessage.readByte();
        // ...Clover	Byte	是否显示幸运草图标
        dataTable["users"][i].Clover = nMBaseMessage.readByte();
    }

    //Exp	Int	当前经验
    dataTable["Exp"] = nMBaseMessage.readInt();
    //levelUpExp	Int	升级需要的总经验
    dataTable["levelUpExp"] = nMBaseMessage.readInt();
    //level	Int	当前等级
    dataTable["level"] = nMBaseMessage.readInt();
    // luckyPoint	Int	幸运点
    dataTable["luckyPoint"] = nMBaseMessage.readLong();

    return dataTable;
}

//比牌
function read82200007(nMBaseMessage){
    var  dataTable = {};
    dataTable["messageType"] = ACK + JHID_PK;
    dataTable["messageName"] = "JHID_PK";

    //解析
    dataTable["result"] = nMBaseMessage.readByte();
    //解析
    dataTable["message"] = nMBaseMessage.readString();
    if(dataTable["result"] == 0) return dataTable;

    //解析 要求比牌的人
    dataTable["launchSeatID"] = nMBaseMessage.readInt();
    //解析 被比牌的人
    dataTable["aimSeatID"] = nMBaseMessage.readInt();
    //解析 赢家座位号
    dataTable["winnerSeatID"] = nMBaseMessage.readInt();
    //解析 要求比牌人下注金额 thisTimeBetCoins
    dataTable["thisTimeBetCoins"] = nMBaseMessage.readLong();
    //解析 要求比牌的玩家下注总金币 betCoins
    dataTable["betCoins"] = nMBaseMessage.readLong();
    //解析  要求比牌的玩家剩余金币
    dataTable["remainCoins"] = nMBaseMessage.readLong();
    //解析 轮数
    dataTable["round"] = nMBaseMessage.readInt();
    //解析 总注总数
    dataTable["totalPoolCoin"] = nMBaseMessage.readLong();

    //解析Bean 下一个玩家
    var nextPlayerCnt = nMBaseMessage.readInt();
    if(nextPlayerCnt!= 0){
        dataTable["nextPlayer"] = {};
        nMBaseMessage.startReadLoop();
        //解析 下一个玩家位置
        dataTable["nextPlayer"].SSID = nMBaseMessage.readInt();
        //解析 跟注金额，如果为-1则按钮不可用
        dataTable["nextPlayer"].callCoin = nMBaseMessage.readLong();
        //加注列表
        dataTable["nextPlayer"]["raiseCoin"] = {};
        var cnt = nMBaseMessage.readInt();
        for(var j=0; j< cnt; ++j){
            nMBaseMessage.startReadLoop();
            dataTable["nextPlayer"]["raiseCoin"][j] = {};
            //加注列表的加注的金额
            dataTable["nextPlayer"]["raiseCoin"][j].raiseValue = nMBaseMessage.readLong();
            //加注列表中加注金额的状态 0 此金额不可加注 1 此金额可加注
            dataTable["nextPlayer"]["raiseCoin"][j].raiseStatus = nMBaseMessage.readByte();
        }
        //解析 0 不能操作，1 比牌 2 开牌
        dataTable["nextPlayer"].compareCard = nMBaseMessage.readInt();
        //解析 0不能看牌， 1可以看牌
        dataTable["nextPlayer"].lookCard = nMBaseMessage.readInt();
    }
    return dataTable;
}
//看牌
function read82200004(nMBaseMessage){
    var  dataTable = {};
    dataTable["messageType"] = ACK + JHID_LOOK_CARDS;
    dataTable["messageName"] = "JHID_LOOK_CARDS";

    //解析 座位号
    dataTable["seatID"] = nMBaseMessage.readInt();
    //解析 牌值
    dataTable["cardValues"] = {};
    var cardCnt = nMBaseMessage.readInt();
    for(var i=0; i< cardCnt; ++i){
        nMBaseMessage.startReadLoop();
        dataTable["cardValues"][i] = nMBaseMessage.readInt();
    }
    //解析 如果为当前玩家看牌，则重新发送筹码信息
    //因为看牌玩家跟注筹码是不看牌玩家的2倍
    //解析 下一玩家
    var nextPlayerCnt = nMBaseMessage.readInt();
    if(nextPlayerCnt!= 0){
        dataTable["currentPlayer"] = {};
        nMBaseMessage.startReadLoop();

        //下一个玩家位置
        dataTable["currentPlayer"]["SSID"] = nMBaseMessage.readInt();
        //跟注金额，如果为-1则按钮不可用
        dataTable["currentPlayer"]["callCoin"] = nMBaseMessage.readLong();
        //加注列表
        dataTable["currentPlayer"]["raiseCoin"] = {};
        var cnt = nMBaseMessage.readInt();

        for(var i=0; i< cnt; ++i){
            nMBaseMessage.startReadLoop();
            dataTable["currentPlayer"]["raiseCoin"][i] = {};
            //加注列表的加注的金额
            dataTable["currentPlayer"]["raiseCoin"][i].raiseValue = nMBaseMessage.readLong();
            //加注列表中加注金额的状态 0 此金额不可加注 1 此金额可加注
            dataTable["currentPlayer"]["raiseCoin"][i].raiseStatus = nMBaseMessage.readByte()
        }

        //0 不能操作，1 比牌 2 开牌
        dataTable["currentPlayer"]["compareCard"] = nMBaseMessage.readInt();
        //0不能看牌， 1可以看牌
        dataTable["currentPlayer"]["lookCard"] = nMBaseMessage.readInt();
    }
    //牌型
    dataTable["cardType"] = nMBaseMessage.readByte();
    //Result	Byte	看牌是否成功	1成功2失败
    dataTable["Result"] = nMBaseMessage.readByte();
    return dataTable;
}

//显示牌
function read82200008(nMBaseMessage){
    var dataTable = {};
    dataTable["messageType"] = ACK + JHID_SHOW_CARDS;
    dataTable["messageName"] = "JHID_SHOW_CARDS";

    //解析 座位
    dataTable["seatID"] = nMBaseMessage.readInt();
    //解析 结果
    dataTable["result"] = nMBaseMessage.readByte();
    //解析 信息
    dataTable["message"] = nMBaseMessage.readString();
    //解析 押注
    dataTable["thisTimeBetCoins"] = nMBaseMessage.readLong();
    //解析 总押注
    dataTable["betCoins"] = nMBaseMessage.readLong();
    //解析 剩余金币
    dataTable["remainCoins"] = nMBaseMessage.readLong();
    //解析 锅底 总注
    dataTable["totalPotCoin"] = nMBaseMessage.readLong();
    //解析Bean 亮牌
    var nextPlayerCnt = nMBaseMessage.readInt();
    if(nextPlayerCnt> 0){
        dataTable["nextPlayer"] = {};
        nMBaseMessage.startReadLoop();
        //解析 下一个玩家位置
        dataTable["nextPlayer"].SSID = nMBaseMessage.readInt();
        //解析 跟注金额，如果为-1则按钮不可用
        dataTable["nextPlayer"].callCoin = nMBaseMessage.readLong();
        //加注列表
        dataTable["nextPlayer"]["raiseCoin"] = {};
        var cnt = nMBaseMessage.readInt();
        for(var i=0; i< cnt; ++i){
            nMBaseMessage.startReadLoop();
            dataTable["nextPlayer"]["raiseCoin"][i] = {};
            //加注列表的加注的金额
            dataTable["nextPlayer"]["raiseCoin"][i].raiseValue = nMBaseMessage.readLong();
            //加注列表中加注金额的状态 0 此金额不可加注 1 此金额可加注
            dataTable["nextPlayer"]["raiseCoin"][i].raiseStatus = nMBaseMessage.readByte();
        }
        //解析 0 不能操作，1 比牌 2 开牌
        dataTable["nextPlayer"].compareCard = nMBaseMessage.readInt();
        //解析 0不能看牌， 1可以看牌
        dataTable["nextPlayer"].lookCard = nMBaseMessage.readInt();
    }
    return dataTable;
}
//需要联调的消息有readUTF(JHID_STAND_UP、JHID_READY、JHID_BET)