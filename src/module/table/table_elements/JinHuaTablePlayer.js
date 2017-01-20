var JinHuaTablePlayer= {
    //玩家状态Icon类型
    TYPE_ICON_FOLD : 1,
    TYPE_ICON_CHECK : 2,
    TYPE_ICON_FAILED : 3,
    TYPE_ICON_WIN : 4,
    JinHuaTablePlayerLayer:null,//玩家Layer
    iconArray:{},//桌上玩家状态icon
    tablePlayerEntitys:{},//实体玩家
    dealer:null,//庄家
    myTimerBg:null,//倒计时数字背景
    otherTimerBg:null,
    myTimer:null,//主视角倒计时框
    myTimer2:null,
    otherTimer:null,//其他玩家押注倒计时框
    otherTimer2:null,
    lookCardTimer:null,// 看牌计时器
    reqUserId:null,//请求个人信息UserId
    isHeadTouchBegin:false,//是否是点中了玩家头像
    currentCSID:-10,//当前出牌用户座位号
    changeCardWhenNotSee:false,// 看牌前换牌
    iconTable:{},//牌桌上的金币列表
    CardBatchNode:null,//存放牌桌上展示的牌
    clear:function(){
        //Todo:从父节点中移除
        this.JinHuaTablePlayerLayer= null;
        this.clearAllTimer();
        this.otherTimer= null;
        //清空看牌标记
        this.clearPlayerStateIcons();
        this.tablePlayerEntitys= {};
        this.dealer= null;
        this.myTimer= null;
        this.myTimer2= null;
        this.otherTimer= null;
        this.otherTimer2= null;
        this.lookCardTimer= null;
        this.reqUserId= null;
        this.isHeadTouchBegin= false;
        this.currentCSID= -10;
        this.changeCardWhenNotSee= false;
        this.iconTable= {};
        this.CardBatchNode= null;
    },
    //设置玩家状态icon
    addPlayerStateIcon:function(iconType, pos){
        var iconPath= "";
        switch (iconType){
            case this.TYPE_ICON_CHECK:
                iconPath = "desk_icon_check.png";
                break;
            case this.TYPE_ICON_FAILED:
                iconPath = "desk_icon_failed.png";
                break;
            case this.TYPE_ICON_FOLD:
                iconPath= "desk_icon_fold.png";
                break;
            case this.TYPE_ICON_WIN:
                iconPath = "desk_icon_win.png";
                break;
        }

        if(this.iconTable[pos]!= null){
            this.JinHuaTablePlayerLayer.removeChild(this.iconTable[pos], true);
        }
        var iconSprite= cc.Sprite.create("#"+ iconPath);
        this.iconTable[pos]= iconSprite;

        if(this.tablePlayerEntitys[pos]!= null&&!this.tablePlayerEntitys[pos].isMe()){
            iconSprite.setPosition(Profile_JinHuaTableConfig.getSpritePlayers()[pos].iconX,Profile_JinHuaTableConfig.getSpritePlayers()[pos].iconY);
        }else{
            iconSprite.setPosition(412, 110);
            iconSprite.setVisible(false);
        }

        iconSprite.setZOrder(10);
        this.JinHuaTablePlayerLayer.addChild(this.iconTable[pos]);
        this.iconArray[Common.getTableSize(iconSprite)]= iconSprite;
    },
    //牌桌玩家
    create:function(){
        this.JinHuaTablePlayerLayer= this.getJinHuaTablePlayerLayer();
        //纸牌BatchNode
        if(this.CardBatchNode== null){
            this.CardBatchNode= cc.SpriteBatchNode.create(Common.getJinHuaResourcePath("poker_cards.png"));
            this.CardBatchNode.setZOrder(1);
            this.CardBatchNode.setVisible(false);
            this.JinHuaTablePlayerLayer.addChild(this.CardBatchNode);
        }

        //初始化牌桌上的玩家，没有数据的话，以默认显示
        this.initPlayerSprites(true);

        //如果我在牌桌上并且有牌，更新我的操作按钮
        if(Profile_JinHuaGameData.isMePlayingThisRound()){
            JinHuaTableLogic.updateMyOperationBtns(this.tablePlayerEntitys[0]);
            //断线重连:玩家在牌桌上，移除所有的坐下标记
            JinHuaTableTips.removeAllSitTips();
        }

        //添加定时器
        this.addTimerSprite();

        //添加庄家图标
        this.initDealer();

        var GameData= Profile_JinHuaGameData.getGameData();
        //断线重连-玩家在游戏中，更新玩家的可操作按钮
        if(GameData.status== STATUS_TABLE_PLAYING && GameData.currentPlayer){
            //更新当前玩家
            this.refreshCurrentPlayer(GameData.currentPlayer);
        }
        return this.JinHuaTablePlayerLayer;
    },
    //初始化用户信息显示界面
    initPlayerSprites:function(isShowAnim){
        var GameData= Profile_JinHuaGameData.getGameData();
        //获取牌桌上的所有玩家
        var tablePlayersData= Profile_JinHuaGameData.getPlayers();
        //隐藏UI工程的底部面板
        JinHuaTableLogic.setBotPanelVisible(false);
        //绘制人物
        this.tablePlayerEntitys = {};
        if(tablePlayersData== null) return;

        //是否为玩家自身
        var isMe= false;
        for(var i=0; i< Profile_JinHuaTableConfig.playerCnt; ++i){
            //该座位是否有玩家
            var bHasPlayer= tablePlayersData.hasOwnProperty(i) && tablePlayersData[i]!= null;
            //创建实体玩家
            if(bHasPlayer){
                //将头像添加到玩家层
                var tablePlayerEntity = new JinHuaTablePlayerEntity(tablePlayersData[i]);
                tablePlayerEntity.addPlayerElementToLayer(this.JinHuaTablePlayerLayer);
                //进入房间 显示头像
                if(GameData.enterRoomEffectMinVipLevel!= null
                    &&tablePlayerEntity.vipLevel>= GameData.enterRoomEffectMinVipLevel
                    &&isShowAnim== true){
                    tablePlayerEntity.mPlayerSprite.setVisible(false);
                    //Todo:显示VIP用户坐下前动画
                    //JinHuaInteractionAnim.showVipPlayerSitDownBefore(i,tablePlayerEntity)
                }
                //显示玩家状态
                this.showPlayerStatus(tablePlayerEntity);
                //初始化三张牌
                tablePlayerEntity.createCard();
                //显示禁比动画
                tablePlayerEntity.showJinbiAnim();
                //显示玩家金币数
                tablePlayerEntity.setCoin();
                //设置玩家的头像
                this.setPlayerPhoto(tablePlayerEntity);

                //判断是否为玩家自身
                if(tablePlayerEntity.isMe()== true){
                    isMe= true;
                }

                this.tablePlayerEntitys[i]= {};
                this.tablePlayerEntitys[i]= tablePlayerEntity;
            }else{//等待玩家坐下
                if(!Profile_JinHuaGameData.getIsMatch()){
                    JinHuaTableLogic.showSitButton(i);
                    JinHuaTableTips.createSitTips(i);
                }
            }
        }
        if(isMe== true && Profile_JinHuaGameData.isMePlayingThisRound()){
            //在座位上並且并且在打牌
            JinHuaTableLogic.setBotPanelVisible(true);
            JinHuaTableLogic.hideAllQuickChatButton();
        }else if(isMe== true &&(!Profile_JinHuaGameData.isMePlayingThisRound())){
            //在座位上並且并且在打牌
            JinHuaTableLogic.setBotPanelVisible(true);
            JinHuaTableLogic.showQuickChatButton(STATUS_QUICK_CHAT_WAITING);
        }else{
            JinHuaTableLogic.setBotPanelVisible(false);
            JinHuaTableLogic.hideAllQuickChatButton();
        }
    },
    //玩家层
    getJinHuaTablePlayerLayer:function(){
        if(this.JinHuaTablePlayerLayer== null){
            this.JinHuaTablePlayerLayer= cc.Layer.create();
            this.JinHuaTablePlayerLayer.setZOrder(3);
        }
        return this.JinHuaTablePlayerLayer;
    },
    //绘制玩家状态
    showPlayerStatus:function(tablePlayerEntity){
        if(tablePlayerEntity&&tablePlayerEntity.player.status){
            switch (tablePlayerEntity.player.status){
                case STATUS_PLAYER_READY://准备
                    tablePlayerEntity.showReadyIcon();//显示准备按钮
                    break;
                case STATUS_PLAYER_PK_FAILURE://比牌
                    this.addPlayerStateIcon(this.TYPE_ICON_FAILED, tablePlayerEntity.player.CSID);
                    tablePlayerEntity.setPlayerDarkCoverVisible();
                    break;
                case STATUS_PLAYER_DISCARD://弃牌
                    this.addPlayerStateIcon(this.TYPE_ICON_FOLD, tablePlayerEntity.player.CSID);
                    tablePlayerEntity.setPlayerDarkCoverVisible();
                    break;
                case STATUS_PLAYER_PLAYING://游戏中
                    break;
                case STATUS_PLAYER_LOOKCARD://看牌
                    this.addPlayerStateIcon(this.TYPE_ICON_CHECK, tablePlayerEntity.player.CSID);
                    break;
                default :
                    tablePlayerEntity.setPlayerDarkCoverVisible();
            }
        }
    },
    //设置玩家头像
    setPlayerPhoto:function(tablePlayerEntity){
        if(tablePlayerEntity!=null
            &&tablePlayerEntity.player.photoUrl!= ""
            &&tablePlayerEntity.player.photoUrl){
            //更新头像
            tablePlayerEntity.setPortrait(tablePlayerEntity.player.photoUrl);
        }else{
            tablePlayerEntity.setPortrait();
        }
    },
    //倒计时[文案、遮蔽层]
    addTimerSprite:function(){
        //圆形遮蔽层
        var mySpriteTimer = cc.Sprite.create("#desk_player_cover_mine.png");
        this.myTimerBg = cc.ProgressTimer.create(mySpriteTimer);
        this.myTimerBg.setType(cc.ProgressTimer.TYPE_RADIAL);
        //遮蔽层尺寸(173* 172),玩家自己的头像框缩小0.9
        this.myTimerBg.setPosition(cc.pAdd(Profile_JinHuaTableConfig.getMySelfLocPos(), cc.p(173* 0.5* 0.9, 172* 0.5*  0.9)));
        this.myTimerBg.setScale(0.9);
        this.myTimerBg.setZOrder(12);
        this.JinHuaTablePlayerLayer.addChild(this.myTimerBg);
        //圆形遮蔽层
        var otherSpriteTimer = cc.Sprite.create("#desk_player_cover.png");
        this.otherTimerBg = cc.ProgressTimer.create(otherSpriteTimer);
        this.otherTimerBg.setType(cc.ProgressTimer.TYPE_RADIAL);
        this.otherTimerBg.setZOrder(12);
        this.JinHuaTablePlayerLayer.addChild(this.otherTimerBg);
        /**
         * 修改Bug:倒计时不显示出来(使用cc.LabelAtlas时,宽度可以或多或少，但是高度，一定不能超过，否则显示不出来。但是可以小于，仅仅是显示不完整而已);
         */
        this.myTimer = cc.LabelAtlas.create("12", Common.getJinHuaResourcePath("ui_daojishi0-9.png"), 20, 26, "0");
        this.myTimer.setPosition(403, 150);
        this.myTimer.setZOrder(2);
        this.myTimer.setVisible(false);
        this.JinHuaTablePlayerLayer.addChild(this.myTimer);

        this.myTimer2 = cc.LabelAtlas.create("0", Common.getJinHuaResourcePath("ui_daojishi0-3.png"), 25, 40, "0");
        this.myTimer2.setPosition(403, 150);
        this.myTimer2.setZOrder(2);
        this.myTimer2.setVisible(false);
        this.JinHuaTablePlayerLayer.addChild(this.myTimer2);

        this.otherTimer = cc.LabelAtlas.create("0", Common.getJinHuaResourcePath("ui_daojishi0-9.png"), 20, 26, "0");
        this.otherTimer.setZOrder(2);
        this.otherTimer.setVisible(false);
        this.JinHuaTablePlayerLayer.addChild(this.otherTimer);

        this.otherTimer2 = cc.LabelAtlas.create("0", Common.getJinHuaResourcePath("ui_daojishi0-3.png"), 25, 40, "0");
        this.otherTimer2.setZOrder(2);
        this.otherTimer2.setVisible(false);
        this.JinHuaTablePlayerLayer.addChild(this.otherTimer2);
    },
    initDealer:function(){
        this.dealer= cc.Sprite.create("#desk_icon_dealer.png");
        this.JinHuaTablePlayerLayer.addChild(this.dealer);
        this.dealer.setVisible(false);
        this.dealer.setZOrder(30);
    },
    //设置庄家图标
    showDealerIcon:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        var CSID= GameData.dealerCSID;
        if(this.dealer== null){
            this.initDealer();
        }
        if(Common.judgeValueIsEffect(this.tablePlayerEntitys[CSID])
            &&this.tablePlayerEntitys[CSID].mPlayerSprite!= null){
            var players= Profile_JinHuaTableConfig.spritePlayers;
            this.dealer.setPosition(players[CSID].locX + this.tablePlayerEntitys[CSID].mPlayerSprite.getContentSize().width / 15, players[CSID].locY + this.tablePlayerEntitys[CSID].mPlayerSprite.getContentSize().height * 6 / 8);
            this.dealer.setVisible(true);
        }else{
            this.dealer.setVisible(false);
        }
    },
    //更新当前可操作玩家
    refreshCurrentPlayer:function(currentPlayer){
        //说明已经结束 清除计时器
        if(!Common.judgeValueIsEffect(currentPlayer)){
            //关闭所有定时器
            this.clearAllTimer();
            return;
        }
        currentPlayer.CSID= Profile_JinHuaGameData.getUserCSID(currentPlayer.SSID);
        //还是当前用户，返回
        if(this.currentCSID== currentPlayer.CSID) return;
        this.currentCSID= currentPlayer.CSID;

        //可能乱牌桌，此处没人 保底方案
        if(!Common.judgeValueIsEffect(this.tablePlayerEntitys[currentPlayer.CSID])) return;
        //更新玩家的按钮并启动计时
        this.updateMyOperationBtnsAndStartTimer(currentPlayer);
    },
    //关闭-我的定时器
    closeMyTimer:function(){
        if(this.myTimerBg){
            this.myTimerBg.stopAllActions();
            this.myTimerBg.setPercentage(0);
        }
        if(this.myTimer){
            this.myTimer.stopAllActions();
            this.myTimer.setString("0");
            this.myTimer.setVisible(false);
        }
        if(this.myTimer2){
            this.myTimer2.stopAllActions();
            this.myTimer2.setString("0");
            this.myTimer2.setVisible(false);
        }
    },
    //关闭-别的玩家的定时器
    closeOtherTimer:function(){
        if(this.otherTimerBg){
            this.otherTimerBg.stopAllActions();
            this.otherTimerBg.setPercentage(0);
        }
        if(this.otherTimer){
            this.otherTimer.stopAllActions();
            this.otherTimer.setString("0");
            this.otherTimer.setVisible(false);
        }
        if(this.otherTimer2){
            this.otherTimer2.stopAllActions();
            this.otherTimer2.setString("0");
            this.otherTimer2.setVisible(false);
        }
    },
    //清除所有计时器
    clearAllTimer:function(){
        this.closeMyTimer();
        this.closeOtherTimer();
        this.currentCSID= -10;
    },
    //坐下或者站起时，清空牌桌
    clearTableAfterSitAndStand:function(){
        //清理玩家状态图标
        this.clearPlayerStateIcons();
        //清空BatchNode
        for(var key in this.tablePlayerEntitys){
            if(this.tablePlayerEntitys[key]&&this.tablePlayerEntitys[key].cardSprites!= null&&this.tablePlayerEntitys[key].cardSprites[0]){
                this.getCardBatchNode().removeFromParent(true);
            }
        }
        //移除玩家元素
        for(var key in this.tablePlayerEntitys){
            if(this.tablePlayerEntitys[key]&&this.tablePlayerEntitys[key].mPlayerSprite!= null){
                //移除
                this.tablePlayerEntitys[key].removePlayerElementFromLayer();
                //移除禁比图标
                this.tablePlayerEntitys[key].dismissJinBiIcon();
                //隐藏牌型
                JinHuaTableCard.hideCardType(this.tablePlayerEntitys[key]);
            }
        }
        //清空手牌
        JinHuaTableCard.clearCards();
        //隐藏看牌提示
        JinHuaTableCheckButton.setCheckVisible(false);
        //隐藏庄家图标
        this.dealer.setVisible(false);
    },
    //隐藏庄家图标
    hideDealerIcon:function(){
        //隐藏庄家图标
        this.dealer.setVisible(false);
    },
    //清理玩家状态图标
    clearPlayerStateIcons:function(){
        for(var key in this.iconArray){
            if(this.iconArray[key]== null||this.iconArray[key]== undefined) continue;
            this.iconArray[key].removeFromParent(true);
        }
        this.iconArray = {};
    },
    //自己站起
    selfStandUp:function(){
        //发起站起
        sendJHID_STAND_UP();
    },
    //重新加入层中，以便于能显示在上面
    reAddToLayer:function(node){
        node.retain();
        this.getJinHuaTablePlayerLayer().removeChild(node, false);
        this.getJinHuaTablePlayerLayer().addChild(node);
    },
    //自己坐下
    sitDownMe:function(CSID){
        var GameData= Profile_JinHuaGameData.getGameData();
        sendJHID_SIT_DOWN(GameData.roomId, GameData.tableId, CSID);
    },
    //坐下失败
    sitDownFail:function(sitDownData){
        var GameData= Profile_JinHuaGameData.getGameData();
        //玩家本身
        if(GameData.mySSID){
            this.updateTableAfterStandUpMe();
            var mySelf= Profile_JinHuaGameData.getMySelf();
            mySelf.SSID= null;
        }
        //显示toast
        Common.showToast(sitDownData.message, 2);
        //获取对应房间信息
        var roomInfo= Profile_JinHuaRoomData.getRoomByID(GameData.roomId);
        //剩余金币数
        var self_coinnum= parseInt(Profile_JinHuaGameData.getMySelf().remainCoins);
        if(roomInfo&&roomInfo.minCoin> self_coinnum){
            //还缺少多少钱
            var coinCnt= roomInfo.minCoin- self_coinnum;
            //Todo:充值引导
        }
    },
    //自己坐下-服务器应答处理
    selfSitDownByServer:function(){
        if(this.tablePlayerEntitys[0]){//1号位有人
            this.tablePlayerEntitys[0].setCoin();
            JinHuaTableTips.showEnterTableTips()
        }
    },
    //其他人坐下
    sitDownOther:function(sitDownData){
        var GameData= Profile_JinHuaGameData.getGameData();
        var CSID= sitDownData.playerInfo.CSID;
        //隐藏等待坐下图标
        JinHuaTableLogic.hideSit(CSID);
        //他人坐下-创建实例(头像)
        //Todo:创建实例-封装为同一个函数
        this.tablePlayerEntitys[CSID] = new JinHuaTablePlayerEntity(sitDownData.playerInfo);
        this.showPlayerStatus(this.tablePlayerEntitys[CSID]);
        this.setPlayerPhoto(this.tablePlayerEntitys[CSID]);
        this.tablePlayerEntitys[CSID].createCard();
        this.tablePlayerEntitys[CSID].addPlayerElementToLayer(this.getJinHuaTablePlayerLayer());
        this.tablePlayerEntitys[CSID].setCoin();

        if(GameData.enterRoomEffectMinVipLevel!= null&& this.tablePlayerEntitys[CSID].vipLevel >= GameData.enterRoomEffectMinVipLevel){
            this.tablePlayerEntitys[CSID].mPlayerSprite.setVisible(false);
            //头像坐下动画JinHuaInteractionAnim.showVipPlayerSitDownBefore(CSID,tablePlayerEntitys[CSID]);
        }

        this.reAddToLayer(this.myTimerBg);
        this.reAddToLayer(this.myTimer);
        this.reAddToLayer(this.myTimer2);
        this.reAddToLayer(this.otherTimerBg);
        this.reAddToLayer(this.otherTimer);
        this.reAddToLayer(this.otherTimer2);

        //隐藏该作为标记
        JinHuaTableLogic.hideSit(CSID);
    },
    //获取玩家table
    getPlayers:function(){
        return this.tablePlayerEntitys;
    },
    getCardBatchNode:function(){
        return this.CardBatchNode;
    },
    //下注-自己点击
    selfClickToBetCoin:function(bet_type, bet_coin){
        this.closeMyTimer();
        var  betChipData = {};
        betChipData.CSID = 0;
        betChipData.type = bet_type;
        betChipData.thisTimeBetCoins = bet_coin;
        JinHuaTableCoin.betCoinAnim(betChipData, true);
    },
    resetCurrentCSID:function(){
        this.currentCSID = -10;
    },
    //获取赢家位置
    getWinPlayerPos:function(){
        var GameResultData= Profile_JinHuaGameData.getGameResultData();
        if(GameResultData){
            return Profile_JinHuaGameData.getUserCSID(GameResultData.winnerSeat);
        }
        return 0;
    },
    //重置用户下金币
    resetPlayerBetCoin:function(){
        for(var key in this.tablePlayerEntitys){
            if(this.tablePlayerEntitys[key]== null||this.tablePlayerEntitys[key]==undefined) continue;
            //修改Bug:游戏结束时,玩家已下注金额数没有清空，进而没有隐藏(betCoins是player的成员)
            this.tablePlayerEntitys[key].player.betCoins = 0;
        }
    },
    //玩家<准备>消息回来后更新界面
    updateTableAfterPlayerReadyServerBack:function(){
        var GameData= Profile_JinHuaGameData.getGameData();
        var readyData= Profile_JinHuaGameData.getReadyData();
        //本人准备失败之后再发一次准备
        if(readyData.CSID== 0
            && GameData.mySSID
            &&this.tablePlayerEntitys[0]
            &&this.tablePlayerEntitys[0].player.status!= STATUS_PLAYER_READY
            &&readyData.status!= 0){
            var seq= cc.sequence(cc.delayTime(2.0), cc.callFunc(function(pSender){
                JinHuaTableLogic.onReady();
            }));
            this.JinHuaTablePlayerLayer.runAction(seq);
        }

        for(var key in this.tablePlayerEntitys){
            if(this.tablePlayerEntitys[key]
                &&this.tablePlayerEntitys[key].player.status
                &&this.tablePlayerEntitys[key].player.status== STATUS_PLAYER_READY){
                //显示准备图标
                this.tablePlayerEntitys[key].showReadyIcon();
                //取消遮蔽
                this.tablePlayerEntitys[key].setPlayerDarkCoveredDone();

                if(this.tablePlayerEntitys[key].isMe()){
                    //如果是玩家本身,此时已经坐下,移除所有的坐下Tips
                    JinHuaTableTips.removeAllSitTips();
                    //设置不可点击(不可换桌)
                    JinHuaTableLogic.setSitButtonEnabled(false);
                }
            }
        }
    },
    //玩家<聊天>消息返回后更新界面
    updateTableAfterPlayerChatServerBack:function(chatMsg){
        if(chatMsg.result == 0){
            Common.showToast(chatMsg.message, 2);
            return;
        }
        if(this.tablePlayerEntitys[chatMsg.CSID]){
            this.tablePlayerEntitys[chatMsg.CSID].remainCoins = chatMsg.remainCoins;
            this.tablePlayerEntitys[chatMsg.CSID].setCoin();
        }
        //Todo:JinHuaTableChat
        switch (chatMsg.type){
            case TYPE_CHAT_TEXT:
                console.log(chatMsg.msg);
//                JinHuaTableChat.checkAndPlayerChatSound(chatMsg.CSID, chatMsg.msg)
//                JinHuaTableChat.showChatText(chatMsg.CSID, chatMsg.msg)
                break;
            case TYPE_CHAT_COMMON_V2:
                console.log(chatMsg.msg);
//                JinHuaTableChat.playChatCommonEmotion(chatMsg.CSID, chatMsg.msg)
//                JinHuaTableChat.checkAndPlayCommonSound(chatMsg.msg)
                break;
        }
    },
    //自己站起后，更新当前人(如果之前可操作玩家是 自己)
    updateCurrentPlayerAfterStandUpMe:function(){

    },
    //别人站起
    updateTableAfterStandUpOther:function(CSID){
        var player= this.tablePlayerEntitys[CSID];
        //清除牌桌站起玩家
        if(player){
            //隐藏禁比图标
            this.tablePlayerEntitys[CSID].dismissJinBiIcon();
            //移除
            this.tablePlayerEntitys[CSID].removePlayerElementFromLayer();
            //清除手牌
            if(this.tablePlayerEntitys[CSID].cardSprites[0]){
                this.tablePlayerEntitys[CSID].removeCard();
            }
            //从牌桌上移除数据
            Profile_JinHuaGameData.removePlayerFromGameData(this.tablePlayerEntitys[CSID].player.userId);
            this.tablePlayerEntitys[CSID]= null;
        }
        var GameData= Profile_JinHuaGameData.getGameData();
        //显示坐下按钮
        if(!GameData.mySSID){
            JinHuaTableLogic.showSitButton(CSID);
            JinHuaTableTips.createSitTips(CSID);
        }
    },
    //收到服务器传来的<坐下>消息
    updateTableSitDownByServer:function(){
        var sitDownData= Profile_JinHuaGameData.getSitDownData();
        //坐下失败
        if(sitDownData.result== 0){
            this.sitDownFail(sitDownData);
            return;
        }
        //坐下成功
        if(sitDownData.playerInfo&&sitDownData.playerInfo.userId){
            if(sitDownData.playerInfo.userId== profile_user.getSelfUserID()){//玩家本身
                this.selfSitDownByServer();
            }else{//别人坐下
                this.sitDownOther(sitDownData);
            }
        }
    },
    //服务器返回的<下注>应答
    updateTableAfterBetCoinByServer:function(){
        var betChipData= Profile_JinHuaGameData.getBetChipData();
        //下注失败
        if(betChipData.result== 0) return;
        //下注- 玩家本身 且 不是下底注 且 不是比牌
        if(this.tablePlayerEntitys[betChipData.CSID]
            &&this.tablePlayerEntitys[betChipData.CSID].isMe()//玩家本身
            &&betChipData.type!=TYPE_BET_ANTE//不是下底注
            &&betChipData.type!=TYPE_BET_PK ){//不是比牌
            //更新当前可操作玩家
            this.refreshCurrentPlayer(betChipData["currentPlayer"]);
            //设置玩家的已押注金额
            this.tablePlayerEntitys[betChipData.CSID].setCoin();
            //更新(轮数、总押注金额、单注)
            JinHuaTableLogic.updateTableTitle();
        }else if(this.tablePlayerEntitys[betChipData.CSID]&&
            this.tablePlayerEntitys[betChipData.CSID].mPlayerSprite){//别人下注或下底注或比牌操作
            //清空其他玩家的定时器
            JinHuaTableCoin.betCoinAnim(betChipData, false)
        }
    },
    //更新玩家的按钮并启动计时
    updateMyOperationBtnsAndStartTimer:function(currentPlayer){
        var time= Profile_JinHuaTableConfig.ROUND_TIME;
        var progressBar= cc.progressTo(time+ 1, 100);

        this.clearAllTimer();

        if(this.tablePlayerEntitys[currentPlayer.CSID]== null) return;
        if(this.tablePlayerEntitys[currentPlayer.CSID].isMe()){
            var self= this;
            function timeStep(){
                if(time<= 3){
                    self.myTimer.setVisible(false);
                    self.myTimer2.setVisible(true);
                    self.myTimer2.setString(time);
                }else{
                    self.myTimer.setString(time);
                }
                time--;
            }
            var arr= [];

            for(var i=0; i< Profile_JinHuaTableConfig.ROUND_TIME; ++i){
                arr.push(cc.callFunc(timeStep));
                arr.push(cc.delayTime(1.0));
            }
            //更新我的可操作按钮
            JinHuaTableLogic.updateMyOperationBtns(currentPlayer);
            //是否需要启动我的计时器(超时放弃)
            var bNeedStartTimer= JinHuaTableLogic.setMyTurnToOperate_ReturnIfNeedMyTimer(this.tablePlayerEntitys[currentPlayer.CSID]);
            this.myTimer.stopAllActions();
            this.myTimer2.stopAllActions();

            var seq= cc.sequence(arr, cc.callFunc(function(pSender){
                console.log("超时弃牌");
            }));
            this.myTimerBg.runAction(progressBar);
            this.myTimer.setVisible(true);
            this.myTimer.runAction(seq);
        }else{
            this.otherTimer.stopAllActions();
            this.otherTimer2.stopAllActions();
            var self= this;

            function timeStep(){
                if(time<= 3){
                    self.otherTimer.setVisible(false);
                    self.otherTimer2.setVisible(true);
                    self.otherTimer2.setString(time);
                }else{
                    self.otherTimer.setString(time);
                }
                time--;
            }
            var arr= [];

            for(var i=0; i< Profile_JinHuaTableConfig.ROUND_TIME; ++i){
                arr.push(cc.callFunc(timeStep));
                arr.push(cc.delayTime(1.0));
            }
            var player= Profile_JinHuaTableConfig.getSpritePlayers()[currentPlayer.CSID];
            //更新玩家本身的可操作按钮
            JinHuaTableLogic.updateMyBetBtnsOnOthersTurn();

            this.otherTimerBg.setPosition(cc.pAdd(cc.p(player.locX,player.locY),cc.p(173* 0.5,172* 0.5)));
            this.otherTimer.setPosition(player.timerX,player.timerY);
            this.otherTimer2.setPosition(player.timerX,player.timerY);

            this.otherTimerBg.runAction(progressBar);
            this.otherTimer.setVisible(true);
            this.otherTimer.runAction(cc.sequence(arr));
        }
    },
    //用户<弃牌>后收到服务器返回更新界面
    updateTableAfterFoldCardByServer:function(){
        var foldCardData= Profile_JinHuaGameData.getFoldCardData();
        //别人弃牌的服务器返回
        if(this.tablePlayerEntitys[foldCardData.CSID]&&!(this.tablePlayerEntitys[foldCardData.CSID].isMe()&&this.tablePlayerEntitys[foldCardData.CSID].player.status == STATUS_PLAYER_DISCARD)){
            this.updatePlayerStateAfterFoldCard(foldCardData.CSID);
        }
        this.updateNextPlayerAfterFoldCard(foldCardData);
    },
    //弃牌后，更新下一个玩家
    updateNextPlayerAfterFoldCard:function(foldCardData){
        if(foldCardData.nextPlayer){
            this.refreshCurrentPlayer(foldCardData.nextPlayer);
            JinHuaTableLogic.updateTableTitle();
        }
    },
    //弃牌后更新玩家状态
    updatePlayerStateAfterFoldCard:function(CSID){
        if(this.tablePlayerEntitys[CSID]){
            this.tablePlayerEntitys[CSID].player.status = STATUS_PLAYER_DISCARD;
            this.addPlayerStateIcon(this.TYPE_ICON_FOLD, CSID);
            JinHuaTableBubble.showJinHuaTableBubble(CSID, BUBBLE_TYPE_DISCARD);
            this.tablePlayerEntitys[CSID].setPlayerDarkCoverVisible();
            //移除牌
            JinHuaTableCard.startFoldCardAnim(this.tablePlayerEntitys[CSID]);
            if(this.tablePlayerEntitys[CSID].isMe()){
                JinHuaTableLogic.disableAllTableOperationButtons();
            }
        }
    },
    //自己弃牌后更新
    updateTableAfterSelfFoldCard:function(){
        if(!Common.judgeValueIsEffect(this.tablePlayerEntitys[0])) return;
        //自己弃牌的座位号0，而不是1
        this.updatePlayerStateAfterFoldCard(0);
        JinHuaTableLogic.showQuickChatButton(STATUS_QUICK_CHAT_FOLD);
    },
    //更新所有的人等级
    updateAllPlayersLevel:function(){
        for(var i in this.tablePlayerEntitys){
            if(!Common.judgeValueIsEffect(this.tablePlayerEntitys[i])) continue;
            this.tablePlayerEntitys[i].updatePlayerTips();
        }
    },
    //收到服务器站起
    updateTableAfterStandUpByServer:function(){
        var standUpData= Profile_JinHuaGameData.getStandUpData();
        var  mySelf = Profile_JinHuaGameData.getMySelf();
        //修改Bug:别人站起时,玩家的看牌不显示。
        //Todo:可能存在的问题:牌局没散
        JinHuaTableCheckButton.setCheckVisible(false);
        var player= this.tablePlayerEntitys[standUpData.CSID];

        if(standUpData.result == 1){//成功站起
            if(mySelf.SSID!= null&& mySelf.SSID == standUpData.SSID){//自己站起
                if(mySelf.userId!= null&&mySelf.userId!= undefined){
                    //更新自身的属性
                    sendDBID_USER_INFO(mySelf.userId);
                }
                mySelf.SSID= null;
                player.player.status= STATUS_PLAYER_WATCH;
                if(!Common.judgeValueIsEffect(player)) return;
                if(Common.getTableSize(player.cardSprites)> 0) return;
                this.updateTableAfterStandUpMe(standUpData.CSID);
            }else{//别人站起
                if(standUpData.CSID!= null){
                    if(!Common.judgeValueIsEffect(player)) return;
                    if(Common.getTableSize(player.cardSprites)> 0) return;
                    this.updateTableAfterStandUpOther(standUpData.CSID);
                }
            }
        }
    },
    //自己站起
    updateTableAfterStandUpMe:function(CSID){
        //清空发牌
        this.clearTableAfterSitAndStand();
        //自己站起后，更新当前人(如果之前可操作玩家是 自己)
        this.updateCurrentPlayerAfterStandUpMe();

        JinHuaTableLogic.disableAllTableOperationButtons();
        //隐藏底部控件
        JinHuaTableLogic.setBotPanelVisible(false);
        //隐藏在线奖励
        JinHuaTableLogic.setOnLineBonusVisible(false);
        if(this.tablePlayerEntitys[CSID]!= undefined){
            if(this.tablePlayerEntitys[CSID].mPlayerSprite!= null&&this.tablePlayerEntitys[CSID].mPlayerSprite!= undefined){
                //隐藏玩家头像框
                this.tablePlayerEntitys[CSID].mPlayerSprite.setVisible(false);
            }
            if(this.tablePlayerEntitys[CSID].readyIcon!= null&&this.tablePlayerEntitys[CSID].readyIcon!= undefined){
                //移除准备Icon
                this.tablePlayerEntitys[CSID].readyIcon.setVisible(false);
            }
        }

        //更新数据-庄家、剩余玩家的位置
        Profile_JinHuaGameData.updatePlayerInfo_SelfStand();

        if(CSID!= null&&CSID!= undefined&&this.tablePlayerEntitys[CSID]!= null){
            this.tablePlayerEntitys[CSID].clear();
            this.tablePlayerEntitys[CSID]= null;
        }
        //视图更新-庄家
        this.showDealerIcon();
        //视图更新-重新初始化玩家
        this.initPlayerSprites(false);
//创建坐下提示
//        this.createTableTips();
        //Todo:自己站起，轮到别的玩家操作，更新定时器
        this.reAddToLayer(this.myTimerBg);
        this.reAddToLayer(this.myTimer);
        this.reAddToLayer(this.myTimer2);
        this.reAddToLayer(this.otherTimerBg);
        this.reAddToLayer(this.otherTimer);
        this.reAddToLayer(this.otherTimer2);
    },
//    //创建牌桌上的坐下提示
//    createTableTips:function(){
//        for(var CSID=0; CSID< 5;++CSID){
//            if(Profile_JinHuaGameData.hasPlayer(CSID)) continue;
//            JinHuaTableTips.createSitTips(CSID);
//        }
//    },
    //收到服务器<看牌>消息更新
    updateTableAfterLookCardByServer:function(checkCardData){
        if(this.tablePlayerEntitys[checkCardData.CSID]== null||this.tablePlayerEntitys[checkCardData.CSID]== undefined) return;
        //看牌
        this.tablePlayerEntitys[checkCardData.CSID].status= STATUS_PLAYER_LOOKCARD;
        //看牌图标
        this.addPlayerStateIcon(this.TYPE_ICON_CHECK, checkCardData.CSID);
        //显示气泡
        JinHuaTableBubble.showJinHuaTableBubble(checkCardData.CSID, BUBBLE_TYPE_LOOKCARD);

        //看牌动画
        JinHuaTableCard.lookCardAnim(this.tablePlayerEntitys, checkCardData);
    },
    //根据某个座位号,获取玩家数据
    setPlayerInfoByUserID:function(info,userID){
        if(!Common.judgeValueIsEffect(this.tablePlayerEntitys)) return null;
        for(var key in this.tablePlayerEntitys){
            var playerEntitys= this.tablePlayerEntitys[key];
            if((!Common.judgeValueIsEffect(playerEntitys))||(!Common.judgeValueIsEffect(playerEntitys.player))) continue;
            if(playerEntitys.player.userId== userID){
                playerEntitys.player.betCoins = info.betCoins;
                playerEntitys.player.remainCoins = info.remainCoins;
                playerEntitys.player.shtatus = info.status;
                playerEntitys.player.cardValues = info.cardValues;
                playerEntitys.player.cardType = info.cardType;
                playerEntitys.player.exp = info.exp;
                playerEntitys.player.level = info.level;
                playerEntitys.player.expText = info.expText;
                playerEntitys.player.isCert = info.isCert;
            }
        }
    }
};