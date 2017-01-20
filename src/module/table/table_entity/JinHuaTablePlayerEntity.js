/**
 * Func:玩家实例(每个人就是一个实例)
 *      仅存储玩家的数据
 *      构造函数
 * @param player 玩家数据(后台传递过来的)
 */
function JinHuaTablePlayerEntity(player){
    this.clear();//清空元素
    this.createMember(player);//创建对象
    this.init();//初始化
}

//清理数据
JinHuaTablePlayerEntity.prototype.clear= function(){
    this.player= null;

    (Common.judgeValueIsEffect(this.playerDarkCover))&&this.playerDarkCover.removeFromParent(true);
    this.playerDarkCover= null;

    (Common.judgeValueIsEffect(this.spritePic))&&this.spritePic.removeFromParent(true);
    this.spritePic= null;

    (Common.judgeValueIsEffect(this.labelName))&&this.labelName.removeFromParent(true);
    this.labelName= null;

    (Common.judgeValueIsEffect(this.labelNameBg))&&this.labelNameBg.removeFromParent(true);
    this.labelNameBg= null;

    (Common.judgeValueIsEffect(this.goldSprite))&&this.goldSprite.removeFromParent(true);
    this.goldSprite= null;

    (Common.judgeValueIsEffect(this.goldSpriteBg))&&this.goldSpriteBg.removeFromParent(true);
    this.goldSpriteBg=null;

    (Common.judgeValueIsEffect(this.labelCoin))&&this.labelCoin.removeFromParent(true);
    this.labelCoin= null;

    (Common.judgeValueIsEffect(this.mPlayerSprite))&&this.mPlayerSprite.removeFromParent(true);
    this.mPlayerSprite= null;

    (Common.judgeValueIsEffect(this.jinbiSprite))&&this.jinbiSprite.removeFromParent(true);
    this.jinbiSprite= null;

    (Common.judgeValueIsEffect(this.betedCoinLabel))&&this.betedCoinLabel.clear();
    this.betedCoinLabel= null;

    (Common.judgeValueIsEffect(this.readyIcon))&&this.readyIcon.removeFromParent(true);
    this.readyIcon= null;

    (Common.judgeValueIsEffect(this.cardTypeSprite))&&this.cardTypeSprite.removeFromParent(true);
    this.cardTypeSprite= null;

    (Common.judgeValueIsEffect(this.cardTypeLabel))&&this.cardTypeLabel.removeFromParent(true);
    this.cardTypeLabel= null;

    (Common.judgeValueIsEffect(this.goldSprite))&&this.goldSprite.removeFromParent(true);
    this.goldSprite= null;

    (Common.judgeValueIsEffect(this.goldSpriteBg))&&this.goldSpriteBg.removeFromParent(true);
    this.goldSpriteBg= null;

    (Common.judgeValueIsEffect(this.tips))&&this.tips.removeFromParent(true);
    this.tips= null;

    (Common.judgeValueIsEffect(this.luckyTip))&&this.luckyTip.removeFromParent(true);
    this.luckyTip= null;

    (Common.judgeValueIsEffect(this.vipLevelPic))&&this.vipLevelPic.removeFromParent(true);
    this.vipLevelPic= null;

    (Common.judgeValueIsEffect(this.luckyBg))&&this.luckyBg.removeFromParent(true);
    this.luckyBg= null;

    (Common.judgeValueIsEffect(this.LuckyIcon))&&this.LuckyIcon.removeFromParent(true);
    this.LuckyIcon= null;

    (Common.judgeValueIsEffect(this.luckyLable))&&this.luckyLable.removeFromParent(true);
    this.luckyLable= null;

    this.luckyValue= 0;
    this.clearCards();//清空手牌
};
//Todo:删除createMember，因为首先清空时，就已经为成员对象赋值了
//初始化数据
JinHuaTablePlayerEntity.prototype.createMember= function(player){
    this.player= player== undefined?null:player;//玩家属性数据(昵称、性别、头像url、客户端座位号、服务器端座位号)
    this.mPlayerSprite = null;//玩家头像框-精灵
    this.spritePic = null;//玩家头像
    this.labelNameBg = null;//昵称背景
    this.labelName = null;//玩家昵称
    this.labelCoin = null;//玩家所拥有的金币数
    this.playerDarkCover = null;//头像上的遮蔽层(蒙黑)
    this.jinbiSprite = null;//禁比精灵
    this.betedCoinLabel = null;//下的金币数
    this.readyIcon = null;//准备Icon
    this.cardTypeSprite = null;//玩家牌型背景
    this.cardTypeLabel = null;//玩家牌型label
    this.goldSpriteBg = null;//玩家金币背景
    this.goldSprite = null;//玩家金币Icon
    this.tips = null;//等级和称谓
    this.luckyTip = null;//幸运点成就图标
    this.vipLevelPic = null;//vip等级图片
    this.luckyBg = null;//幸运点低
    this.LuckyIcon = null;//幸运点图标
    this.luckyLable = null;//幸运点label
    this.luckyValue = null;//幸运点数  用来在牌桌结算时 计算转换幸运点的差值
    this.cardSprites = {};// 牌精灵

    //Todo:可以删除的内容
    this.levelPic = null;//等级图标
    this.atlasLevelNum = null;//等级数
    this.tipsBg = null;//称谓背景图
};

//玩家的等级和称谓
JinHuaTablePlayerEntity.prototype.createPlayerTips= function(){
    if(!Common.judgeValueIsEffect(this.mPlayerSprite)) return;

    this.tips = cc.Sprite.create(null);
    this.tips.setPosition(this.goldSpriteBg.getContentSize().width* (-0.1), this.goldSpriteBg.getPositionY() + this.goldSpriteBg.getContentSize().height / 10);
    this.mPlayerSprite.addChild(this.tips, 2);

    this.updatePlayerTips();//更新玩家等级和称谓
};

//移除牌
JinHuaTablePlayerEntity.prototype.removeCard= function(){
    //清空手牌
    this.clearCards();
    //清空牌型
    (Common.judgeValueIsEffect(this.cardTypeSprite))&&this.cardTypeSprite.removeFromParent(true);
    this.cardTypeSprite= null;
};

//是否为玩家本身
JinHuaTablePlayerEntity.prototype.isMe= function(){
    return (this.player&&this.player.userId== profile_user.getSelfUserID());
};

//是否为玩家头像框
JinHuaTablePlayerEntity.prototype.getPhotoFrame= function(){
    return this.mPlayerSprite;
};

//设置玩家头像
JinHuaTablePlayerEntity.prototype.setPortrait= function(path){
    if((!Common.judgeValueIsEffect(this.mPlayerSprite))||(!Common.judgeValueIsEffect((this.spritePic)))) return;

    if(!Common.judgeValueIsEffect(path)){//没有头像纹理路径
        //根据是否文玩家自身,获取纹理(cc.texture)
        this.spritePic.setTexture(cc.textureCache.addImage(this.getPortraitPathBySelf()));
    }else{//网络纹理
        this.setPortraitTexture(path);
    }
};

//加载头像(网络纹理)
JinHuaTablePlayerEntity.prototype.setPortraitTexture= function(path){
    var self= this;
    //头像可能会加载失败(头像删除)
    cc.loader.loadImg(path, function(){}, function(err){
        //err为空时,表示加载网络图片成功
        var portraitPath= err== null?path:self.getPortraitPathBySelf();
        self.spritePic.setTexture(cc.textureCache.addImage(portraitPath));
    });
};

//根据是否为玩家本身,获取默认的头像图片
JinHuaTablePlayerEntity.prototype.getPortraitPathBySelf= function(){
    var imagePath= this.isMe()?"desk_playerhead.png":"desk_playerhead_mine.png";
    return Common.getJinHuaResourcePath(imagePath);
};

//改变界面上的金币(玩家的金币数、已压金币数)
JinHuaTablePlayerEntity.prototype.changeCoinNumOnView= function(coinNum){
    if(!Common.judgeValueIsEffect(this.mPlayerSprite)) return;//头像框不能为空
    if(!Common.judgeValueIsEffect(coinNum)) return;//已下金币数 有效

    this.labelCoin.setString(coinNum);//设置玩家的金币数
    var bgPos= this.goldSpriteBg.getPosition();//背景的位置
    var goldSize= this.goldSprite.getContentSize();//金币图标的尺寸
    this.labelCoin.setPosition(bgPos.x + goldSize.width/2, bgPos.y - goldSize.height / 2);
    this.setBetCoin();//设置已压金币数
};
//创建玩家实例(头像框、头像、昵称、蒙黑遮蔽层、头像框背景、昵称、金币数、称谓、VIP等级)
JinHuaTablePlayerEntity.prototype.init= function(){
    this.createPhotoFrame();//创建-玩家头像框-精灵
    this.createPortrait();//创建头像,添加到头像框上
    this.createDarkCoverOnPortrait();//创建-头像上的蒙灰遮蔽层(默认不显示,进入牌桌时显示,准备后,移除)
    this.createNickName();//创建-玩家背景、昵称(截取)
    this.createCoin();//创建-自己拥有的金币数、背景、图标
    this.createPlayerVipPic();//Vip等级图
    if(Profile_JinHuaGameData.getIsMatch()== false){//如果是非比赛,则不创建屏幕下方的经验、等级
        this.createPlayerTips();
    }
    this.createJinBiIcon();//创建禁比图标
    this.createBetedCoinLabel();//已压金币数
    this.createReadyIcon();//创建准备图标
    this.createPlayerLuckyTips();//创建幸运点
    this.createPlayerLabelLucky();//创建幸运值
};
//更新玩家的称谓(小乞丐、富可敌国),在图集缓存中
JinHuaTablePlayerEntity.prototype.updatePlayerTips= function(){
    Profile_JinHuaSetting.setUserTitleOnSprite(this.player.remainCoins, this.tips);//玩家剩余金币
};

/**
 * Func:创建-玩家头像框-精灵
 *      根据CSID,设置玩家的头像框的位置
 */
JinHuaTablePlayerEntity.prototype.createPhotoFrame= function(){
    if(this.isMe()){//是否为玩家本身
        this.mPlayerSprite= cc.Sprite.create("#table_kuang.png");
        this.mPlayerSprite.setPosition(Profile_JinHuaTableConfig.getMySelfLocPos())
    }else{
        this.mPlayerSprite= cc.Sprite.create("#table_mine_kuang.png");
        //客户端中对应ID的玩家的位置
        var player= Profile_JinHuaTableConfig.getSpritePlayers()[this.player.CSID];
        this.mPlayerSprite.setPosition(player.locX, player.locY);
    }
    this.mPlayerSprite.setAnchorPoint(cc.p(0, 0));//左下角
    this.mPlayerSprite.setZOrder(11);
};

/**
 * Func:初始化头像,添加到头像框上(居中)
 * Todo：裁切节点-圆形
 */
JinHuaTablePlayerEntity.prototype.createPortrait= function(){
    //头像框不能为空
    if(!Common.judgeValueIsEffect(this.mPlayerSprite)) return;
    //获取头像框的尺寸
    var bgSize= this.mPlayerSprite.getContentSize();
    //初始化头像
    var self= this;
    Common.addSpriteByNet(self.player.photoUrl, function(sprite){
        self.spritePic= ((sprite== "ERROR")?cc.Sprite.create(self.getPortraitPathBySelf()):sprite);
        self.spritePic.setPosition(bgSize.width* 0.5, bgSize.height* 0.5);//居中
        self.mPlayerSprite.addChild(self.spritePic, 1);
        if(sprite!= "ERROR"){//网络图片放大
            self.spritePic.setScale(1.2);
    }
    });
};

/**
 * Func:创建-头像上的蒙灰遮蔽层(默认不显示,进入牌桌时显示,准备后,移除)
 *      头像框居中
 */
JinHuaTablePlayerEntity.prototype.createDarkCoverOnPortrait= function(){
    //头像框不能为空
    if(!Common.judgeValueIsEffect(this.mPlayerSprite)) return;
    //获取头像框的尺寸
    var bgSize= this.mPlayerSprite.getContentSize();
    //在plist中
    var darkCoverPath= this.isMe()?"#desk_player_cover_mine.png":"#desk_player_cover.png";
    //头像上的蒙灰遮蔽层
    this.playerDarkCover= cc.Sprite.create(darkCoverPath);
    this.playerDarkCover.setPosition(bgSize.width / 2, bgSize.height / 2);
    //this.playerDarkCover.setVisible(false);//默认不显示
    this.mPlayerSprite.addChild(this.playerDarkCover, 3);
    //设置玩家遮蔽层正好在圆中
    this.isMe()&&this.playerDarkCover.setScale(0.9);
};

/**
 * Func:创建-玩家背景、昵称(截取)
 */
JinHuaTablePlayerEntity.prototype.createNickName= function(){
    //头像框不能为空
    if(!Common.judgeValueIsEffect(this.mPlayerSprite)) return;
    //获取头像框的尺寸
    var sizeBg= this.mPlayerSprite.getContentSize();
    //玩家昵称
    var nickName= this.player.nickName;
    //昵称背景
    this.labelNameBg = cc.Sprite.create("#ui_paizhuo_xingmingkuang.png");
    this.labelNameBg.setPosition(sizeBg.width / 2,sizeBg.height);
    this.mPlayerSprite.addChild(this.labelNameBg, 2);

    //名字的最大长度（超出最大长度截取+..）
    this.labelName = cc.LabelTTF.create(nickName, "Arial", 17);
    this.labelName.setColor(cc.color(240, 229, 232));
    this.labelName.setPosition(sizeBg.width / 2 + this.labelNameBg.getContentSize().width / 10, sizeBg.height);
    this.mPlayerSprite.addChild(this.labelName, 2);

    //玩家自身 隐藏昵称、昵称背景
    if(this.isMe()){
        this.labelNameBg.setVisible(false);
        this.labelName.setVisible(false);
    }

    //玩家的昵称= 昵称背景*0.75的文本+ (超出部分使用'..'代替）
    var nameMaxWidth = this.labelNameBg.getContentSize().width * 3 / 4;
    //截取固定长度的字符串
    while (this.labelName.width> nameMaxWidth){
        nickName= nickName.substring(0, nickName.length- 2);
        this.labelName.setString(nickName+"..");
    }
};
/**
 * Func:创建-自己拥有的金币数、背景、图标
 */
JinHuaTablePlayerEntity.prototype.createCoin= function(){
    //头像框不能为空
    if(!Common.judgeValueIsEffect(this.mPlayerSprite)) return;
    //获取头像框的尺寸
    var sizeBg= this.mPlayerSprite.getContentSize();

    //金币条背景
    this.goldSpriteBg = cc.Sprite.create("#ui_paizhuo_yonghuxinxidikuang.png");
    var goldBgPos= this.isMe()?cc.p(sizeBg.width / 2, 33):cc.p(sizeBg.width / 2, 13);
    this.goldSpriteBg.setPosition(goldBgPos);
    this.mPlayerSprite.addChild(this.goldSpriteBg, 2);

    //金币图标
    var goldIconPath= Profile_JinHuaGameData.getIsMatch()?"#ic_jinbi_fenshu.png":"#desk_coin_logo.png";
    this.goldSprite = cc.Sprite.create(goldIconPath);
    var goldPos= this.isMe()?cc.p(sizeBg.width / 2 - 59, 19):cc.p(sizeBg.width / 2 - 59, 0);
    this.goldSprite.setPosition(goldPos);
    this.mPlayerSprite.addChild(this.goldSprite, 2);

    //金币背景的尺寸
    var goldBgSize= this.goldSpriteBg.getContentSize();
    //金币数
    this.labelCoin = cc.LabelAtlas.create("0", Common.getJinHuaResourcePath("pic_jinbishu.png"), 13, 20, "0");
    this.labelCoin.setPosition(goldBgPos.x + goldBgSize.width / 2, goldBgPos.y - goldBgSize.height / 5);
    this.labelCoin.setAnchorPoint(cc.p(0.5,0.5));
    this.mPlayerSprite.addChild(this.labelCoin, 2);
};

//vip等级图
JinHuaTablePlayerEntity.prototype.createPlayerVipPic= function(){
    if(!Common.judgeValueIsEffect(this.mPlayerSprite)) return;

    //vip等级图
    var vipLevel = this.player.vipLevel;
    //根据对应的vip等级,获取对应的vip等级背景图
    var vipBgTexture = VipElementsUtils.getVipBgFromVipLevel(parseInt(vipLevel));
    var self= this;
    if(vipBgTexture !=null){
        Common.addSpriteByNet(Common.getJinHuaResourcePath(vipBgTexture), function(sprite){
            self.vipLevelPic= sprite;
            self.setVipInfo(vipLevel);//显示对应Vip的小组件
        });
    }else {
        this.vipLevelPic = cc.Sprite.create("#ic_vip_0.png");
        this.setVipInfo(vipLevel);//显示对应Vip的小组件
    }
};

//设置VIP信息
JinHuaTablePlayerEntity.prototype.setVipInfo= function (vipLevel){
    if(!Common.judgeValueIsEffect(this.mPlayerSprite)) return;
    if(!Common.judgeValueIsEffect(vipLevel)) return;
    if(vipLevel< 1) return;

    var sizeBg = this.mPlayerSprite.getContentSize();
    var vipPicSize= this.vipLevelPic.getContentSize();

    //Vip等级
    var AtlasLabel_vip_level = cc.LabelAtlas.create("0", Common.getJinHuaResourcePath("ui_vip_lvshuzi_gaoji.png"), 14, 20, "0");
    AtlasLabel_vip_level.setString(":" + vipLevel);//":"表示图集中的v
    AtlasLabel_vip_level.setAnchorPoint(cc.p(0.5, 0.5));
    AtlasLabel_vip_level.setPosition(vipPicSize.width / 2, vipPicSize.height / 2);
    this.vipLevelPic.addChild(AtlasLabel_vip_level);

    if (vipLevel >=1 && vipLevel < 10) {
        var Image_vip_lowsignbg = cc.Sprite.create("#ic_vip_jiaobiao_shuzichendi.png");
        Image_vip_lowsignbg.setPosition(vipPicSize.width, vipPicSize.height);
        this.vipLevelPic.addChild(Image_vip_lowsignbg);

        var AtlasLabel_lowsign = cc.LabelAtlas.create("0", Common.getJinHuaResourcePath("ui_vip_jiaobiaoshuzi.png"), 12, 14, "0");
        AtlasLabel_lowsign.setString(vipLevel);
        AtlasLabel_lowsign.setPosition(vipPicSize.width, vipPicSize.height);
        this.vipLevelPic.addChild(AtlasLabel_lowsign);
    }else{
        var highSignTexture = VipElementsUtils.getVipHighSignFromVipLevel(vipLevel);
        if (highSignTexture != null) {
            var Image_vip_highsign = cc.Sprite.create("#" + highSignTexture);
            Image_vip_highsign.setPosition(vipPicSize.width, vipPicSize.height);
            this.vipLevelPic.addChild(Image_vip_highsign);
        }
    }

    //玩家本身,缩放Vip等级
    this.isMe()&&this.vipLevelPic.setScale(0.9);

    this.vipLevelPic.setPosition(sizeBg.width * 5/ 6, this.goldSpriteBg.getPositionY() + this.goldSpriteBg.getContentSize().height / 4);
    this.mPlayerSprite.addChild(this.vipLevelPic, 2);
};

//创建禁比图标
JinHuaTablePlayerEntity.prototype.createJinBiIcon= function(){
    if(!Common.judgeValueIsEffect(this.mPlayerSprite)) return;

    this.jinbiSprite = cc.Sprite.create("#jinbi_icon.png");
    this.jinbiSprite.setAnchorPoint(cc.p(0.5,0));
    var jinbiSize = this.jinbiSprite.getContentSize();

    var players= Profile_JinHuaTableConfig.getSpritePlayers();
    if(this.isMe()) {
        this.jinbiSprite.setPosition(players[this.player.CSID].cards[1].locX, players[this.player.CSID].cards[1].locY + 30)
    }else{
        this.jinbiSprite.setPosition(558 + 26 * 2, 130 + jinbiSize.height / 2);
    }

    this.jinbiSprite.setZOrder(12);
    this.jinbiSprite.setScale(0.5);
    JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(this.jinbiSprite);

    //隐藏禁比
    this.dismissJinBiIcon();
};
//隐藏禁比
JinHuaTablePlayerEntity.prototype.dismissJinBiIcon= function(){
    if(this.jinbiSprite.isVisible()){
        this.jinbiSprite.setVisible(false);
        this.jinbiSprite.setScale(0.5);
    }
};
//添加玩家实体元素到层
//玩家对应的元素(昵称、头像、Vip等级)-->头像框-->JinHuaPlayerLayer层中
//玩家已经加注的金币数(头像旁)-->JinHuaPlayerLayer层中
//玩家头像旁边的准备标记-->JinHuaPlayerLayer层中
JinHuaTablePlayerEntity.prototype.addPlayerElementToLayer= function (layer){
    layer.addChild(this.mPlayerSprite);//头像框
    layer.addChild(this.betedCoinLabel.getCoinBg());//添加已加注文本
    layer.addChild(this.readyIcon);//准备
};
//移除玩家实体元素
JinHuaTablePlayerEntity.prototype.removePlayerElementFromLayer= function (){
    (Common.judgeValueIsEffect(this.mPlayerSprite))&&this.mPlayerSprite.removeFromParent(true);
    this.mPlayerSprite= null;

    this.betedCoinLabel.clear();
    this.betedCoinLabel= null;

    (Common.judgeValueIsEffect(this.readyIcon))&&this.readyIcon.removeFromParent(true);
    this.readyIcon= null;
};
//创建已压金币数label, 没有加到mPlayerSprite,直接加到了layer上面
JinHuaTablePlayerEntity.prototype.createBetedCoinLabel= function(){
    if(!this.isMe()){
        var players= Profile_JinHuaTableConfig.getSpritePlayers();
        this.betedCoinLabel= new JinHuaBetedCoinLabel(players[this.player.CSID].betCoinX, players[this.player.CSID].betCoinY);
    }else{
        this.betedCoinLabel= new JinHuaBetedCoinLabel(392, 90);
    }
};

//创建<准备>图标(默认隐藏,准备之后,显示)
JinHuaTablePlayerEntity.prototype.createReadyIcon= function(){
    this.readyIcon = cc.Sprite.create("#desk_icon_ready.png");
    this.readyIcon.setZOrder(12);
    var players= Profile_JinHuaTableConfig.getSpritePlayers();
    var player= players[this.player.CSID];
    this.readyIcon.setPosition(player.pkX, player.pkY);

    this.readyIcon.setVisible(false);
};
//TODO:?幸运值等级
JinHuaTablePlayerEntity.prototype.createPlayerLuckyTips= function(){
    if(!Common.judgeValueIsEffect(this.mPlayerSprite)) return;

    var Clover= parseInt(this.player.Clover);
    if(Common.judgeValueIsEffect(Clover) && Clover==  1){
        var sizeBg= this.mPlayerSprite.getContentSize();
        this.luckyTip= cc.Sprite.create("#dianjizhe.png");
        this.luckyTip.setPosition(sizeBg.width / 5 * 4,sizeBg.height / 5 * 4);
        this.mPlayerSprite.addChild(this.luckyTip);
    }
};
//自己拥有的幸运点label
JinHuaTablePlayerEntity.prototype.createPlayerLabelLucky= function(){
    if(!this.isMe()) return;
    var GameData= Profile_JinHuaGameData.getGameData();
    this.luckyValue= parseInt(GameData["luckyPoint"]);//玩家的幸运点
    if(!Common.judgeValueIsEffect(this.luckyValue)||this.luckyValue<= 0) return;
    var matchInstanceId= GameData["matchInstanceId"];//比赛时，不显示幸运点
    if(!Common.judgeValueIsEffect(matchInstanceId)) return;

    var sizeBg = this.mPlayerSprite.getContentSize();
    this.luckyBg = cc.Sprite.create("#ui_paizhuo_gerenxiazhudi.png");//金币条背景
    this.luckyBg.setPosition(sizeBg.width + 135,sizeBg.height/2);
    var coinBgSize = this.luckyBg.getContentSize();
    //金币图标
    this.LuckyIcon = cc.Sprite.create("#luckyicon.png");
    this.LuckyIcon.setPosition(coinBgSize.width / 10,coinBgSize.height / 2);
    this.luckyBg.addChild(this.LuckyIcon);

    //金币数
    this.luckyLable = cc.LabelTTF.create(this.luckyValue , "Arial", 24);
    this.luckyLable.setAnchorPoint(cc.p(0,0.5));
    this.luckyLable.setPosition(coinBgSize.width / 10 + 15,coinBgSize.height / 2);
    this.luckyBg.addChild(this.luckyLable);

    this.mPlayerSprite.addChild(this.luckyBg);
};
//设置已压金币数
JinHuaTablePlayerEntity.prototype.setBetCoin= function(){
    this.betedCoinLabel.setBetCoin(parseInt(this.player.betCoins));
};
//显示准备Icon
JinHuaTablePlayerEntity.prototype.showReadyIcon= function(){
    this.readyIcon.setVisible(true);
};
JinHuaTablePlayerEntity.prototype.hideReadyIcon= function(){
    this.readyIcon.setVisible(false);
};
//遮盖头像
JinHuaTablePlayerEntity.prototype.setPlayerDarkCoverVisible= function(){
    this.playerDarkCover.setVisible(true);
};
//取消遮盖头像
JinHuaTablePlayerEntity.prototype.setPlayerDarkCoveredDone= function(){
    this.playerDarkCover.setVisible(false);
};
//生成三张牌并添加到层
JinHuaTablePlayerEntity.prototype.createCard= function(){
    if(this.player.status== STATUS_PLAYER_PLAYING||this.player.status== STATUS_PLAYER_LOOKCARD){//玩牌中
        //创建头像左上角的牌的类型提示和三张牌,默认三张牌显示在牌桌中央位置
        this.createNotBeLookedCard();
    }
};
//创建头像左上角的牌的类型提示和三张牌,默认三张牌显示在牌桌中央位置
JinHuaTablePlayerEntity.prototype.createNotBeLookedCard= function(){
    //一定要有，不然会去直接操作元表， 修改的都是同一数据
    this.cardSprites = {};

    //发的牌 初始无论是谁，都放在屏幕中间位置
    //设置纸牌终点的位置的原因是(发牌动画)
    //每个人的手牌,有3张
    for(var i= 0; i< 3; ++i){
        this.cardSprites[i]= new CardSprite();
        //获取纸牌精灵
        var cardSprite= this.cardSprites[i].getCardSprite();
        cardSprite.setAnchorPoint(cc.p(0.5, 0));
        cardSprite.setScale(Profile_JinHuaTableConfig.cardScale);
        cardSprite.setTag(i);
        if(!this.isMe()){//别的玩家
            var player= Profile_JinHuaTableConfig.getSpritePlayers()[this.player.CSID];
            cardSprite.setPosition(player.cards[i].locX, player.cards[i].locY);
        }else{
            cardSprite.setPosition(580 + 26 * i, 125);
            //自己的牌的话有角度和大小特殊显示
            JinHuaTableCard.sendMyCardEnd(cardSprite);
        }
        //将手牌显示出来(将纸牌添加到视图中)
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(cardSprite);
    }
    var cardTypePosX, cardTypePosY;
    if(this.isMe()){
        cardTypePosX = 730;
        cardTypePosY = 110;
    }else{
        var player= Profile_JinHuaTableConfig.getSpritePlayers()[this.player.CSID];
        if(player.CSID< 3){//屏幕右边
            cardTypePosX = player.cards[1].locX+this.cardSprites[0].getCardSprite().getContentSize().width/4;
        }else{
            cardTypePosX = player.cards[1].locX-this.cardSprites[0].getCardSprite().getContentSize().width/4;
        }
        cardTypePosY = player.cards[1].locY- 10* Profile_JinHuaTableConfig.TableScaleY;
    }

    //牌型背景
    this.cardTypeSprite = cc.Sprite.create("#bg_desk_paixing.png");
    this.cardTypeSprite.setAnchorPoint(cc.p(0.5, 0.5));
    this.cardTypeSprite.setPosition(cardTypePosX, cardTypePosY);
    this.cardTypeSprite.setVisible(false);
    //牌型(头像旁边)
    this.cardTypeLabel = cc.LabelTTF.create("散牌", "Arial", 24);
    this.cardTypeLabel.setColor(cc.color(255, 255, 255));
    this.cardTypeLabel.setAnchorPoint(cc.p(0.5, 0.5));
    this.cardTypeLabel.setPosition(this.cardTypeSprite.getContentSize().width/2, this.cardTypeSprite.getContentSize().height/2);
    this.cardTypeSprite.addChild(this.cardTypeLabel);
    //将牌型，添加到JinHuaTablePlayerLayer，但是先不显示
    this.cardTypeSprite.setZOrder(9);
    JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(this.cardTypeSprite);
};

//显示禁比动画
JinHuaTablePlayerEntity.prototype.showJinbiAnim= function(){
    if(!this.player.noPK) return;
    this.jinbiSprite.setVisible(true);
    this.jinbiSprite.runAction(cc.scaleTo(0.25, 0.5));
};
//金币变更 设置金币
JinHuaTablePlayerEntity.prototype.setCoin= function(){
    //更新玩家的金币数、已下注金币数
    this.changeCoinNumOnView(this.player.remainCoins)
};

//获取头像框的中心点坐标
JinHuaTablePlayerEntity.prototype.getCenterPos= function(){
    if(!Common.judgeValueIsEffect(this.mPlayerSprite)) return cc.p(0,0);
    var pos= this.mPlayerSprite.getPosition();
    var size= this.mPlayerSprite.getContentSize();
    return cc.pAdd(pos, cc.p(size.width* 0.5, size.height* 0.5));
};

//获取玩家当前显示的金币数
JinHuaTablePlayerEntity.prototype.getCurrentShowingCoinNum= function(){
    return parseInt(this.labelCoin.getString());
};

//移除牌桌上的纸牌元素
JinHuaTablePlayerEntity.prototype.clearCards= function(){
    for(var key in this.cardSprites){
        if(!Common.judgeValueIsEffect(this.cardSprites[key])) continue;
        if(!Common.judgeValueIsEffect(this.cardSprites[key].getCardSprite())) continue;
        this.cardSprites[key].getCardSprite().removeFromParent(true);
    }
    this.cardSprites= {};
};