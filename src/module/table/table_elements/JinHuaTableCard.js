/**
 *Func:纸牌
 */
var JinHuaTableCard= {
    sendCardSprite:null,//Todo:删除-叠加牌(发牌时，纸牌初始位置)
    CardTypeName:["235", "散牌", "对子", "顺子", "金花", "同花顺", "豹子"],//手牌类型
    OpenCardAnimTime:0.6,//翻牌时间
    /**
     * Func:发牌动画结束
     * @param pSender 一般为别人的第三张手牌
     * 注意:在回调函数中,不能使用this,使用JinHuaTableCard替换
     */
    sendCardAnimEnd:function(pSender){
        //牌桌上的玩家
        var players = JinHuaTablePlayer.getPlayers();
        //显示看牌动画
        JinHuaTableCheckButton.setCheckVisible(true);
        //隐藏叠加牌
        JinHuaTableCard.sendCardSprite.setVisible(false);
        //获取发牌数据
        var initCardData= Profile_JinHuaGameData.getInitCardData();
        //金花游戏
        if(GameConfig.GAME_ID== GameConfig.JINHUA_GAME_ID){
            //Todo:?显示下排列表(隐藏) 作用
            if(players[0]&&players[0].isMe()&&players[0].status== STATUS_PLAYER_PLAYING){
                JinHuaTableLogic.showBotButton(STATUS_BUTTON_OTHERTURN);
            }
        }
        //发牌结束，更新出牌人
        JinHuaTablePlayer.refreshCurrentPlayer(initCardData.currentPlayer);
    },
    /**
     * Func:服务器<发牌>消息后,更新界面
     */
    updateTableAfterSendCardByServer:function(){
        //获取游戏数据
        var GameData= Profile_JinHuaGameData.getGameData();
        //牌桌上的玩家层(view)
        var parentLayer= JinHuaTablePlayer.getJinHuaTablePlayerLayer();
        //牌桌上的玩家
        var players= JinHuaTablePlayer.getPlayers();
        //更新发牌数据
        JinHuaTableLogic.updateDataSendCard();
        //游戏中
        GameData.status = STATUS_TABLE_PLAYING;
        //遍历牌桌上的玩家，隐藏<准备>按钮，创建三张手牌(默认隐藏)
        for(var key in players){
            if(players[key]&&players[key].player.status== STATUS_PLAYER_READY){
                players[key].player.status = STATUS_PLAYER_PLAYING;
                players[key].cardValues = {};
                players[key].hideReadyIcon();
                players[key].createCard();
            }
        }
        //发牌动画(手牌添加到玩家层)
        this.sendCardAnim(parentLayer, players);
        //更新是否可以换牌提示
        JinHuaTableLogic.updateIsCanChangeCardState();
        //初始化牌桌数据(底注、单注)
        JinHuaTableLogic.updateTableTitle();
    },
    //发牌动画
    sendCardAnim:function(parentLayer, players){
        //发牌结束以后，隐藏所有的快速聊天按钮列表(进入牌桌、失败、等待、弃牌后、赢了)
        JinHuaTableLogic.hideAllQuickChatButton();
        //Todo:可以删除
        if(this.sendCardSprite== null){
            this.sendCardSprite = cc.Sprite.create("#desk_pokerback.png");
            this.sendCardSprite.setAnchorPoint(cc.p(0.5,1));
            this.sendCardSprite.setPosition(Profile_JinHuaTableConfig.sendCardsSpritePositionX, Profile_JinHuaTableConfig.sendCardsSpritePositionY)
            this.sendCardSprite.setScale(Profile_JinHuaTableConfig.cardScale);
            //添加到子节点中
            JinHuaTablePlayer.getCardBatchNode().addChild(this.sendCardSprite);
            //显示batchNode
            //JinHuaTablePlayer.getCardBatchNode().setVisible(true);
        }
        //遍历牌桌上的所有玩家，并且有了手牌数据,创建三张纸牌，实现发牌动画
        for(var key in players){
            if(!Common.judgeValueIsEffect(players[key])) continue;//此玩家无效,遍历下一个Table
            if(Common.getTableSize(players[key].cardSprites)== 0) continue;//没有手牌
            if(!Common.judgeValueIsEffect(players[key].cardSprites[0])) continue;//第一张牌无效

            var bMySelf= players[key].isMe();
            for(var i=0; i< 3; ++i){
                //获取每张手牌的最终位置，移动过去
                var spriteCard = players[key].cardSprites[i].getCardSprite();
                var endPos= spriteCard.getPosition();

                //发牌的时候初始化牌 的缩放，旋转角度，位置
                this.sendCardInitCardState(spriteCard);

                var move = cc.moveTo(0.5, endPos);
                var arr= [];
                arr.push(cc.delayTime(0.5* i));
                arr.push(move);
                if(bMySelf){//自己
                    arr.push(cc.callFunc(this.sendMyCardEnd));
                }else if(i== 2){//别的玩家,切最后一张牌
                    arr.push(cc.callFunc(this.sendCardAnimEnd));
                }
                spriteCard.runAction(cc.sequence(arr));
            }
        }
    },
    //发牌的时候初始化牌 的缩放，旋转角度，位置(叠加牌的效果)
    sendCardInitCardState:function(cardSprite){
        if(!Common.judgeValueIsEffect(cardSprite)) return;
        //屏幕中间、偏高位置(发牌)
        cardSprite.setPosition(Profile_JinHuaTableConfig.cardsSpriteStartPositionX, Profile_JinHuaTableConfig.cardsSpriteStartPositionY);
        //初始大小
        cardSprite.setScale(Profile_JinHuaTableConfig.cardScale);
        //不旋转
        cardSprite.setRotation(0);
    },
    //我的手牌
    sendMyCardEnd:function(sender){
        sender.setScale(1.5);
        var rotation= 0;
        switch(sender.getTag()){
            case 0:
                rotation= Profile_JinHuaTableConfig.myCard1Rotation;
                break;
            case 1:
                rotation= Profile_JinHuaTableConfig.myCard2Rotation;
                break;
            case 2:
                rotation= Profile_JinHuaTableConfig.myCard3Rotation;
                break;
        }
        sender.setRotation(rotation);
    },
    //弃牌动画-手牌丢弃之后,显示遮蔽层
    startFoldCardAnim:function(player){
        if(!Common.judgeValueIsEffect(player)) return;
        if(!Common.judgeValueIsEffect(player.cardSprites[0])) return;

        for(var key in player.cardSprites){
            var cardSprite= player.cardSprites[key];
            if(!Common.judgeValueIsEffect(cardSprite)) continue;
            cardSprite.showCover();//显示遮蔽层
            cardSprite.setNeedCover(true);//更新标记
        }
    },
    /**
     * Func:显示牌桌结果
     *      倒计时，1s后，如果需要，则亮牌
     */
    startResultShow:function(){
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().runAction(cc.sequence(cc.delayTime(1.0), cc.callFunc(this.showHandCard)));
    },
    //亮牌
    showHandCard:function(){
        JinHuaTablePlayer.clearPlayerStateIcons();
        var  players = JinHuaTablePlayer.getPlayers();

        //是否需要翻牌
        var  turnCard = false;
        for(var i in players){
            if(!Common.judgeValueIsEffect(players[i])) continue;
            if(JinHuaTableCard.isNeedShowHandCard(i)){
                turnCard = true;
                JinHuaTableCard.setCardScaleAndRotation(i);
                JinHuaTableCard.setCardPositionAndOpenCard(i);
                //显示牌型
                JinHuaTableCard.showCardType(players[i], players[i].player.cardType);
            }
        }
        //如果要翻牌，则延时0.3秒播胜利动画
        if(turnCard){
            //修改Bug:弃牌后,立刻执行播放胜利动画
            JinHuaTablePlayer.getJinHuaTablePlayerLayer().runAction(cc.sequence(cc.delayTime(0.3), cc.callFunc(JinHuaTableCard.startWinAnim)));
        }else{
            JinHuaTableCard.startWinAnim();
        }
    },
    //设置牌的大小和翻转角度
    setCardScaleAndRotation:function(index){
        var players = JinHuaTablePlayer.getPlayers();
        for(var key in players[index].cardSprites){
            var cardSprite= players[index].cardSprites[key];
            if(!Common.judgeValueIsEffect(cardSprite)) continue;
            cardSprite.setCardValue(players[index].player.cardValues[key]);
            if(!players[index].isMe()){
                cardSprite.getCardSprite().setRotation(0);
                cardSprite.getCardSprite().setScale(0.8);
            }
        }
        if(players[index].isMe()){
            for(var key in players[index].cardSprites){
                var cardSprite= players[index].cardSprites[key];
                if(!Common.judgeValueIsEffect(cardSprite)) continue;
                //if(!Common.judgeValueIsEffect(cardSprite.getCardSprite())) continue;
                this.sendMyCardEnd(cardSprite.getCardSprite());
            }
        }
    },
    //设置牌的位置，并翻开牌
    setCardPositionAndOpenCard:function(index){
        var GameData= Profile_JinHuaGameData.getGameData();
        var players = JinHuaTablePlayer.getPlayers();
        var player= players[index];
        var CSID= player.player.CSID;
        for(var key in players[index].cardSprites){
            var cardSprite= players[index].cardSprites[key];
            var spritePlayers= Profile_JinHuaTableConfig.getSpritePlayers();
            var spritePlayer= spritePlayers[CSID];
            if(index> 2){
                cardSprite.getCardSprite().setPosition(spritePlayer.cards[2].locX- Profile_JinHuaTableConfig.cardWidth+(key-1)*Profile_JinHuaTableConfig.cardWidth/2, spritePlayer.cards[key].locY);
            }else if(index> 0){
                cardSprite.getCardSprite().setPosition(spritePlayer.cards[0].locX- Profile_JinHuaTableConfig.cardWidth+(key-1)*Profile_JinHuaTableConfig.cardWidth/2, spritePlayer.cards[key].locY);
            }else if(index== 0){
                if(Common.judgeValueIsEffect(GameData.mySSID)){
                    cardSprite.getCardSprite().setPosition(580 + 26 * key, 125);
                }
            }
            //开牌动画
            this.openCard(players[index].cardSprites[key]);
        }
    },
    //胜利动画
    //飞金币之后,删除移除所有的下注筹码、牌数据
    startWinAnim:function(){
        var gameResultData = Profile_JinHuaGameData.getGameResultData();
        if(JinHuaTablePlayer.getPlayers()[gameResultData.CSID]){
            if(gameResultData.CSID == 0&& Profile_JinHuaGameData.getGameData().mySSID== 0){//如果是否玩家本身
                //显示<赢了>快速聊天按钮列表
                JinHuaTableLogic.showQuickChatButton(STATUS_QUICK_CHAT_WIN);
            }
            JinHuaPKAnim.startScatterFlower(JinHuaTablePlayer.getPlayers()[gameResultData.CSID].getCenterPos());
            JinHuaTablePlayer.getJinHuaTablePlayerLayer().runAction(cc.sequence(cc.delayTime(2.0), cc.callFunc(JinHuaTableCoin.flyCoinsAnim)));
        }else{
            //赢家飞金币
            JinHuaTableCoin.flyCoinsAnim();
        }
    },
    //清空所有玩家的手牌
    clearCards:function(){
        for(var key in JinHuaTablePlayer.getPlayers()){
            var player= JinHuaTablePlayer.getPlayers()[key];
            if(!Common.judgeValueIsEffect(player)) continue;
            for(var i in player.cardSprites){
                var cardSprite= player.cardSprites[i];
                if(!Common.judgeValueIsEffect(cardSprite)) continue;
                cardSprite.clear();
            }
            //是否为玩家本身,隐藏牌型提示
            if(player.isMe()){
                JinHuaTableCard.hideCardType(player);
            }
        }
    },
    //看牌动画
    lookCardAnim:function(players, checkCardData){
        //要看牌的人手上没有牌...
        var player= players[checkCardData.CSID];
        if(!Common.judgeValueIsEffect(player.cardSprites[0])) return;
        //玩家自己看牌
        if(player.isMe()){
            //设置牌值，开牌
            for(var key in player.cardSprites){
                player.cardSprites[key].setCardValue(parseInt(checkCardData["cardValues"][key]));
                this.openCard(player.cardSprites[key]);
            }
            //显示牌型
            this.showCardType(player, checkCardData["cardType"]);
            //更新我的按钮
            JinHuaTableLogic.updateMyOperationBtns(checkCardData.currentPlayer);
        }else{//别人看牌
            var player= Profile_JinHuaTableConfig.spritePlayers[checkCardData.CSID];
            this.rotateCard(player.cards[1].locX,player.cards[1].locY,players[checkCardData.CSID].cardSprites[0].getCardSprite(),-32);
            this.rotateCard(player.cards[1].locX,player.cards[1].locY,players[checkCardData.CSID].cardSprites[1].getCardSprite(),0);
            this.rotateCard(player.cards[1].locX,player.cards[1].locY,players[checkCardData.CSID].cardSprites[2].getCardSprite(),23);
        }
    },
    //翻开牌
    openCard:function(cardSprite){
        var bgCardSprite= cardSprite.getCardSprite();
        var seq= cc.sequence(
            cc.scaleTo(this.OpenCardAnimTime/2,0,bgCardSprite.getScaleY()),
            cc.callFunc(function(pSender){cardSprite.showFront();}),
            cc.scaleTo(this.OpenCardAnimTime/2,bgCardSprite.getScaleX(),bgCardSprite.getScaleY())
        );
        bgCardSprite.runAction(seq);
    },
    //看牌旋转牌
    rotateCard:function(endX,endY,cardSprite,angle){
        if(!Common.judgeValueIsEffect(cardSprite)) return;
        cardSprite.runAction(cc.sequence(cc.moveTo(0.3, cc.p(endX, endY)), cc.rotateTo(0.5, angle)));
    },
    /**
     * Func:显示牌型
     * @param player 玩家
     * @param cardType 牌型
     */
    showCardType:function(player, cardType){
        if(!Common.judgeValueIsEffect(cardType)) return;
        if(!Common.judgeValueIsEffect(player.cardTypeSprite)) return;
        if(!Common.judgeValueIsEffect(player.cardTypeLabel)) return;
        player.cardTypeSprite.setVisible(true);
        player.cardTypeLabel.setString(this.CardTypeName[parseInt(cardType)- 1]);
    },
    /**
     * Func:隐藏牌型
     */
    hideCardType:function(player){
        if(!Common.judgeValueIsEffect(player)) return;
        if(!Common.judgeValueIsEffect(player.cardTypeSprite)) return;
        player.cardTypeSprite.setVisible(false);
    },
    //是否需要显示手牌【座位上有人&&服务器传了牌值】
    isNeedShowHandCard:function(CSID){
        var players = JinHuaTablePlayer.getPlayers();
        var player= players[CSID];
        if(!Common.judgeValueIsEffect(player)) return false;
        return Common.judgeValueIsEffect(player.player.cardValues)&&(Common.getTableSize(player.player.cardValues)== 3);
    }
};