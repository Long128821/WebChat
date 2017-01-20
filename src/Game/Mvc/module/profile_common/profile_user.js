var profile_user= {
    UserTable:{},//账户列表,存储一些基本数据
    mnRemainCount:-1,//当天剩余破产送金次数
    //UserID
    getMNRemainCount:function(){
        return this.mnRemainCount;
    },
    setMNRemainCount:function(remainCount){
        this.mnRemainCount= remainCount== "undefined"?-1:remainCount;
    },
    //UserID
    getSelfUserID:function(){
        var value= this.UserTable["SelfInfo"].UserID;
        return (value== "undefined"?0:value);
    },
    setSelfUserID:function(userID){
        this.UserTable["SelfInfo"].UserID= userID;
    },

    //昵称
    getSelfNickName:function(){
        var value= this.UserTable["SelfInfo"].NickName;
        return (value== "undefined"?0:value);
    },
    setSelfNickName:function(nickName){
        this.UserTable["SelfInfo"].NickName= nickName;
    },

    //密码
    getSelfPassword:function(){
        var value= this.UserTable["SelfInfo"].Password;
        return (value== "undefined"?0:value);
    },
    setSelfPassword:function(password){
        this.UserTable["SelfInfo"].Password= password;
    },

    //头像
    getSelfPhotoUrl:function(){
        var value= this.UserTable["SelfInfo"].PhotoUrl;
        return (value== "undefined"?0:value);
    },
    setSelfPhotoUrl:function(photoUrl){
        this.UserTable["SelfInfo"].PhotoUrl= photoUrl;
    },

    //金币数
    getSelfCoin:function(){
        var value= this.UserTable["SelfInfo"].Coin;
        return (value== "undefined"?0:value);
    },
    setSelfCoin:function(coin){
        this.UserTable["SelfInfo"].Coin= coin;
    },

    //玩家等级
    getSelfLevel:function(){
        var value= this.UserTable["SelfInfo"].Level;
        return (value== "undefined"?0:value);
    },
    setSelfLevel:function(level){
        this.UserTable["SelfInfo"].Level= level;
    },

    //玩家性别
    getSelfSex:function(){
        var value= this.UserTable["SelfInfo"].Sex;
        return (value== "undefined"?0:value);
    },
    setSelfSex:function(sex){
        this.UserTable["SelfInfo"].Sex= sex;
    },


    //Vip等级
    getSelfVipLevel:function(){
        var value= this.UserTable["SelfInfo"].VipLevel;
        return (value== "undefined"?0:value);
    },
    setSelfVipLevel:function(vipLevel){
        this.UserTable["SelfInfo"].VipLevel= vipLevel;
    },

    //元宝数
    getSelfYuanBao:function(){
        var value= this.UserTable["SelfInfo"].YuanBao;
        return (value== "undefined"?0:value);
    },
    setSelfYuanBao:function(yuanBao){
        this.UserTable["SelfInfo"].YuanBao= yuanBao;
    },

    //称号
    getSelfHonor:function(){
        var value= this.UserTable["SelfInfo"].Honor;
        return (value== "undefined"?0:value);
    },
    setSelfHonor:function(honor){
        this.UserTable["SelfInfo"].Honor= honor;
    },

    //魅力值
    getSelfCharm:function(){
        var value= this.UserTable["SelfInfo"].Charm;
        return (value== "undefined"?0:value);
    },
    setSelfCharm:function(charm){
        this.UserTable["SelfInfo"].Charm= charm;
    },
    //魅力值
    getSelfCharmLevel:function(){
        var value= this.UserTable["SelfInfo"].CharmLevel;
        return (value== "undefined"?0:value);
    },
    setSelfCharmLevel:function(level){
        this.UserTable["SelfInfo"].CharmLevel= level;
    },
    //局数
    getSelfInnings:function(){
        var value= this.UserTable["SelfInfo"].Innings;
        return (value== "undefined"?0:value);
    },
    setSelfInnings:function(innings){
        this.UserTable["SelfInfo"].Innings= innings;
    },
    //局数
    getSelfWinPer:function(){
        var value= this.UserTable["SelfInfo"].WinPer;
        return (value== "undefined"?0:value);
    },
    setSelfWinPer:function(winPer){
        this.UserTable["SelfInfo"].WinPer= winPer;
    },
    //玩家当前等级所拥有的经验值
    getSelfLevelExp:function(){
        var value= this.UserTable["SelfInfo"].LevelExp;
        return (value== "undefined"?0:value);
    },
    setSelfLevelExp:function(levelExp){
        this.UserTable["SelfInfo"].LevelExp= levelExp;
    },
    //玩家当前等级最大经验值
    getSelfLevelExpMax:function(){
        var value= this.UserTable["SelfInfo"].LevelExpMax;
        return (value== "undefined"?0:value);
    },
    setSelfLevelExpMax:function(levelExpMax){
        this.UserTable["SelfInfo"].LevelExpMax= levelExpMax;
    },
    //获取用户充值金额
    getSelfEnchargeAmount:function(){
        var value= this.UserTable["SelfInfo"].EnchargeAmount;
        return (value== "undefined"?0:value);
    },
    setSelfEnchargeAmount:function(enchargeAmount){
        this.UserTable["SelfInfo"].EnchargeAmount= enchargeAmount;
    },

    //初始化账户数据，登录或者注册时，切换账户
    initUserInfo:function(userID){
        if(userID!= this.getSelfUserID()){
            this.UserTable["SelfInfo"]= {};
            this.UserTable["OtherInfo"]= {};
        }
    },
    //读取用户消息
    readJINHUA_MGR_USER_INFO:function(dataTable){
        this.setSelfNickName(dataTable["nickName"]);
        this.setSelfCoin(dataTable["Coin"]);
        this.setSelfLevel(dataTable["Level"]);
        this.setSelfSex(dataTable["Sex"]);
        this.setSelfCharm(dataTable["Charm"]);
        this.setSelfCharmLevel(dataTable["CharmLv"]);
        this.setSelfInnings(dataTable["Innings"]);
        this.setSelfWinPer(dataTable["winPer"]);
        this.setSelfLevelExpMax(dataTable["LevelExpMax"]);
        this.setSelfLevelExp(dataTable["LevelExp"]);
    },
    //登录成功
    readBASEID_LOGIN:function(dataTable){
        this.setSelfUserID(dataTable["UserID"]);
        this.setSelfNickName(dataTable["NickName"]);
        this.setSelfCoin(dataTable["Coin"]);
        this.setSelfYuanBao(dataTable["yuanbao"]);
        this.setSelfPhotoUrl(dataTable["PhotoUrl"]);
        this.setSelfVipLevel(dataTable["VipLevel"]);
    },
    //注册成功
    readBASEID_REGISTER:function(dataTable){
        this.setSelfUserID(dataTable["UserID"]);
        this.setSelfNickName(dataTable["NickName"]);
        this.setSelfPassword(dataTable["Password"]);
        this.setSelfCoin(dataTable["Coin"]);
        this.setSelfYuanBao(dataTable["YuanBao"]);
        this.setSelfHonor(dataTable["honor"]);
    },
    //进入大厅
    //注册成功
    readBASEID_GET_BASEINFO:function(dataTable){
        this.setSelfUserID(dataTable["UserID"]);
        this.setSelfNickName(dataTable["NickName"]);
        this.setSelfPhotoUrl(dataTable["PhotoUrl"]);
        this.setSelfCoin(dataTable["Coin"]);
        this.setSelfLevel(dataTable["VipLevel"]);
        this.setSelfSex(dataTable["Sex"]);
        this.setSelfYuanBao(dataTable["yuanbao"]);
        this.setSelfHonor(dataTable["Honor"]);
//        //Age	byte	年龄
//        dataTable["Age"]= nmBaseMessage.readByte();
//        //City	text	城市	如 :北京-海淀
//        dataTable["City"]= nmBaseMessage.readUTF16();
//        //PhotoUrl UTF16 头像URL
//        dataTable["PhotoUrl"]= nmBaseMessage.readUTF16();
//        //sign	text	个性签名
//        dataTable["Sign"]= nmBaseMessage.readUTF16();
//        //DuiJiangQuan  兑奖券
//        dataTable["DuiJiangQuan"]= nmBaseMessage.readInt();
//        //commendationCnt  奖状数
//        dataTable["commendationCnt"]= nmBaseMessage.readInt();
//        //djqPieces  兑奖券碎片
//        dataTable["djqPieces"]= nmBaseMessage.readInt();
    },
    //获取用户充值信息(GIFTBAGID_USER_ENCHARGE_INFO)
    slot_GIFTBAGID_USER_ENCHARGE_INFO:function(dataTable){
        profile_user.UserTable["SelfInfo"].EnchargeAmount = dataTable["EnchargeAmount"];
    },
    //更新用户状态
    readDBID_USER_INFO:function(dataTable){
        if(dataTable["UserID"] == this.UserTable["SelfInfo"].UserID) {
            //接收自己的信息
            this.UserTable["SelfInfo"].UserID = dataTable["UserID"];
            // NickName text 昵称
            this.UserTable["SelfInfo"].NickName = dataTable["NickName"];
            // Sex byte 性别 1男 2女
            this.UserTable["SelfInfo"].Sex = dataTable["Sex"];
            // Age byte 年龄
            this.UserTable["SelfInfo"].Age = dataTable["age"];
            // City text 城市 如 :北京-海淀
            this.UserTable["SelfInfo"].City = dataTable["city"];
            // PhotoUrl text 头像URL
            this.UserTable["SelfInfo"].PhotoUrl = dataTable["photourl"];
            // Sign text 个性签名
            this.UserTable["SelfInfo"].sign = dataTable["sign"];
            // Coin long 金币
            this.UserTable["SelfInfo"].Coin = dataTable["coin"];
            // YuanBao int 元宝
            this.UserTable["SelfInfo"].yuanBao = dataTable["yuanbao"];
            // TaoJin int 荣誉值
            this.UserTable["SelfInfo"].Honor = dataTable["honor"];
            // DuiJiangQuan int 兑奖券 MsgVer >= 1时发送
            this.UserTable["SelfInfo"].DuiJiangQuan = dataTable["duijiang"];
            // commendationCnt int 奖状数 MsgVer >= 1时发送
            this.UserTable["SelfInfo"].commendationCnt = dataTable["commendationCnt"];
            //VipLevel int VIP等级
            this.UserTable["SelfInfo"].VipLevel = dataTable["mnVipLevel"];
            //LawLimitRemind text 法律风险相关提示语 亲，您今天已经累计输掉3000万金币了，达到单日上限，无法继续游戏了。
            this.UserTable["SelfInfo"].lawLimitRemind = dataTable["lawLimitRemind"];
            //DjqPieces int 兑奖券碎片数量
            this.UserTable["SelfInfo"].djqPieces = dataTable["djqPieces"];
            //HistoryMaxCoin long 历史最高金币数
            this.UserTable["SelfInfo"].historyMaxCoin = dataTable["historyMaxCoin"];
            //游戏相关
            this.UserTable["SelfInfo"].WinGameNum = dataTable["WinGameNum"];
            this.UserTable["SelfInfo"].LoseGameNum = dataTable["LoseGameNum"];
            this.UserTable["SelfInfo"].MaxShoupai = dataTable["MaxShoupai"];
            this.UserTable["SelfInfo"].luckyIcon = dataTable["luckyIcon"];
        }else {
            // NickName text 昵称
            this.UserTable["OtherInfo"].UserID = dataTable["UserID"];
            // NickName text 昵称
            this.UserTable["OtherInfo"].NickName = dataTable["NickName"];
            // Sex byte 性别 1男 2女
            this.UserTable["OtherInfo"].Sex = dataTable["Sex"];
            // Age byte 年龄
            this.UserTable["OtherInfo"].Age = dataTable["age"];
            // City text 城市 如 :北京-海淀
            this.UserTable["OtherInfo"].City = dataTable["city"];
            // PhotoUrl text 头像URL
            this.UserTable["OtherInfo"].PhotoUrl = dataTable["photourl"];
            // Sign text 个性签名
            this.UserTable["OtherInfo"].sign = dataTable["sign"];
            // Coin long 金币
            this.UserTable["OtherInfo"].Coin = dataTable["coin"];
            // YuanBao int 元宝
            this.UserTable["OtherInfo"].yuanBao = dataTable["yuanbao"];
            // TaoJin int 荣誉值
            this.UserTable["OtherInfo"].Honor = dataTable["honor"];
            // DuiJiangQuan int 兑奖券 MsgVer >= 1时发送
            this.UserTable["OtherInfo"].DuiJiangQuan = dataTable["duijiang"];
            // commendationCnt int 奖状数 MsgVer >= 1时发送
            this.UserTable["OtherInfo"].commendationCnt = dataTable["commendationCnt"];
            //VipLevel int VIP等级
            this.UserTable["OtherInfo"].VipLevel = dataTable["mnVipLevel"];
            //LawLimitRemind text 法律风险相关提示语 亲，您今天已经累计输掉3000万金币了，达到单日上限，无法继续游戏了。
            this.UserTable["OtherInfo"].lawLimitRemind = dataTable["lawLimitRemind"];
            //DjqPieces int 兑奖券碎片数量
            this.UserTable["OtherInfo"].djqPieces = dataTable["djqPieces"];
            //HistoryMaxCoin long 历史最高金币数
            this.UserTable["OtherInfo"].historyMaxCoin = dataTable["historyMaxCoin"];

            //游戏相关
            this.UserTable["OtherInfo"].WinGameNum = dataTable["WinGameNum"];
            this.UserTable["OtherInfo"].LoseGameNum = dataTable["LoseGameNum"];
            this.UserTable["OtherInfo"].MaxShoupai = dataTable["MaxShoupai"];
        }
    }
//    //第三方平台ID
//    setUserThirdPartPlatId:function(thirdPartPlatId){
//        this.UserTable["SelfInfo"].ThirdPartPlatId= thirdPartPlatId;
//    },
//    getUserThirdPartPlatId:function(){
//        var value= this.UserTable["SelfInfo"].ThirdPartPlatId;
//        return (value== undefined?0:value);
//    }
};

profile_user.UserTable["SelfInfo"]= {};
profile_user.UserTable["OtherInfo"]= {};
//请求个人充值信息
Frameworks.addSlot2Signal(GIFTBAGID_USER_ENCHARGE_INFO, profile_user.slot_GIFTBAGID_USER_ENCHARGE_INFO);

//Todo:退出游戏时，清空数据