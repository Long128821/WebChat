var JinHuaTableCoin= {
    chipFlashBgArray:{},//下注金币的闪烁动画
    coinArray:{},//桌上筹码
    flyOneCoinEndAddCoinNum:0,//飞完一个金币需要加的金币数
    currentPlayerBetChipCount:0,//当前玩家下注的数目
    isSelfBet:false,//是否是自己下注
    JinHuaTableCoinLayer:null,//金币layer
    CoinBatchNode:null,//存放牌桌上的筹码
    getJinHuaTableCoinLayer:function(){
        if(this.JinHuaTableCoinLayer== null||this.JinHuaTableCoinLayer== undefined){
            this.JinHuaTableCoinLayer= cc.Layer.create();
            this.JinHuaTableCoinLayer.setZOrder(2);
        }
        if(this.CoinBatchNode== null|| this.JinHuaTableCoinLayer== undefined){
            this.CoinBatchNode= cc.SpriteBatchNode.create(Common.getJinHuaResourcePath("table_chips.png"));
            this.CoinBatchNode.setZOrder(1);
            this.JinHuaTableCoinLayer.addChild(this.CoinBatchNode);
        }
        return this.JinHuaTableCoinLayer;
    },
    //移除动画
    hideAnim:function(sender){
        this.getJinHuaTableCoinLayer().removeChild(sender, true);
    },
    //清除上一局的金币动画
    removeAllChipFlashBgSprites:function(){
        for(var key in this.chipFlashBgArray){
            if(this.chipFlashBgArray[key]== null) continue;
            this.getJinHuaTableCoinLayer().removeChild(this.chipFlashBgArray[key], true);
        }
    },
    //押注回调
    betCoinEnd:function(sender){
        if(this.isSelfBet){
            this.isSelfBet= false;
        }
    },
    /**
     * Func:创建金币,并扔到牌桌上
     * @param pos 扔金币玩家位置
     * @param thisTimeBetCoins 下注金币数
     */
    createAllInBetCoins:function(pos, thisTimeBetCoins){
        var startX, startY, endX, endY;
        var players= JinHuaTablePlayer.getPlayers();
        if(players[pos]== null||players[pos]== undefined) return;//牌桌上没有玩家
        startX = players[pos].getPositionX() + players[pos].getContentSize().width / 2;
        startY = players[pos].getPositionY() + players[pos].getContentSize().height / 2;
        players[pos].setCoin();

        var coinTable = this.getAllInChipArray(thisTimeBetCoins);
        //读取table 绘制金币
        for(var i in coinTable){
            if(coinTable[i]== null ||coinTable[i]== undefined|| coinTable[i]== 0) continue;
            //牌桌上的筹码精灵
            var spriteChips = JinHuaTableChipEntity.createTableChipEntity(coinTable[i],parseInt(i));
            for(var j in spriteChips){
                if(spriteChips[j]== null ||spriteChips[j]== undefined||spriteChips[j]== 0) continue;
                //筹码随机区间
                var xStep= Profile_JinHuaTableConfig.rangRight- Profile_JinHuaTableConfig.rangLeft;
                var yStep= Profile_JinHuaTableConfig.rangTop- Profile_JinHuaTableConfig.rangBottom;
                //筹码的随机位置
                endX= Math.random()* xStep+ Profile_JinHuaTableConfig.rangLeft;
                endY= Math.random()* yStep+ Profile_JinHuaTableConfig.rangBottom;
                //设置初始位置
                spriteChips[j].setPosition(startX, startY);

                spriteChips[j].runAction(cc.moveTo(0.3, cc.p(endX, endY)));

                this.getJinHuaTableCoinLayer().addChild(spriteChips[j]);

                //添加到金币数组中
                this.coinArray[Common.getTableSize(this.coinArray)]= spriteChips[j];
            }
            this.betCoinEnd();
        }
    },
    createNormalBetCoins:function(pos,thisTimeBetCoins){
        var players= JinHuaTablePlayer.getPlayers();
        if(players[pos]== null||players[pos]== undefined) return;//牌桌上没有玩家
        players[pos].setCoin();

        var coinTable = this.getChipArray(thisTimeBetCoins);
        for(var i in coinTable){
            if(coinTable[i]== null ||coinTable[i]== undefined) continue;
            //牌桌上的筹码精灵
            var spriteChips = JinHuaTableChipEntity.createTableChipEntity(coinTable[i], parseInt(i));
            for(var j in spriteChips){
                if(spriteChips[j]== null ||spriteChips[j]== undefined) continue;
                if(spriteChips[j]._parent!= null) continue;

                var endPos= spriteChips[j].getPosition();
                //设置初始位置
                spriteChips[j].setPosition(players[pos].getCenterPos());
                spriteChips[j].runAction(cc.moveTo(0.3, endPos));

                this.getJinHuaTableCoinLayer().addChild(spriteChips[j]);

                //添加到金币数组中
                this.coinArray[Common.getTableSize(this.coinArray)]= spriteChips[j];
            }
            this.betCoinEnd();
        }
    },
    getCoinBatchNode:function(){
        return this.CoinBatchNode;
    },
    clear:function(){
        //修改Bug:内存泄露，销毁时，移除牌桌上的筹码。避免:第二局时,玩家头像下方,有一个不该出现的筹码。
        this.clearCoins();
        this.isSelfBet= false;
        this.CoinBatchNode&&this.CoinBatchNode.removeFromParent(true);
        this.CoinBatchNode= null;
        this.JinHuaTableCoinLayer&&this.JinHuaTableCoinLayer.removeFromParent(true);
        this.JinHuaTableCoinLayer= null;
    },
    /**
     * Func:绘制牌桌已有筹码(断线重连)
     * @param coinData 牌桌上的筹码table
     */
    createTableCoins:function(coinData){
        //修改Bug:内存泄露，销毁时，移除牌桌上的筹码。避免:第二局时,玩家头像下方,有一个不该出现的筹码。
        this.clearCoins();
        if(coinData){
            for(var key in coinData){
                var coins= this.getChipArray(coinData[key].coins);
                //创建筹码
                for(var i in coins){
                    var spriteChips= JinHuaTableChipEntity.createTableChipEntity(coins[i], parseInt(i));
                    for(var j in spriteChips){
                        if(spriteChips[j]== null||spriteChips[j]== undefined) continue;
                        if(spriteChips[j]._parent!= null) continue;
                        this.getJinHuaTableCoinLayer().addChild(spriteChips[j]);
                        this.coinArray[Common.getTableSize(this.coinArray)]= spriteChips[j];
                    }
                }
            }
        }
    },
    //通过飞金币增加赢家的金币数
    addWinPlayerCoinNumByFlyCoin:function(){
        //Todo:
        var playerPos= JinHuaTablePlayer.getWinPlayerPos();
        if(JinHuaTablePlayer.getPlayers()[playerPos]&&JinHuaTablePlayer.getPlayers()[playerPos]!= null){
            //JinHuaTablePlayer.getPlayers()[playerPos].addPlayerCoin(flyOneCoinEndAddCoinNum);
        }
    },
    //清除桌上金币
    clearCoins:function(){
        //清空牌桌上的筹码，从视图中删除
        JinHuaTableChipEntity.clear();
        this.coinArray= {};
    },
    //赢家飞金币结束回调
    coinsMoveEnd:function(sender){
        JinHuaTableCoin.CoinBatchNode.removeChild(sender, true);
        JinHuaTableCoin.addWinPlayerCoinNumByFlyCoin();
        JinHuaTableLogic.resetData();
    },
    /**
     * Func:收到服务器押注后，下注动画
     * betChipData 下注回应数据
     * isSelfClickToBet 自己跟注、加注、全压为true, Pk、下底注为false、别人下注等为false
     */
    betCoinAnim:function(betChipData, isSelfClickToBet){
        //下注类型
        switch(betChipData.type){
            case TYPE_BET_ANTE://下底注,有几个人执行几次
                JinHuaTablePlayer.showDealerIcon();
                break;
            case TYPE_BET_CALL://跟注
                JinHuaTableBubble.showJinHuaTableBubble(betChipData.CSID, BUBBLE_TYPE_CALL);
                break;
            case TYPE_BET_RAISE://加注
                JinHuaTableBubble.showJinHuaTableBubble(betChipData.CSID, BUBBLE_TYPE_RAISE);
                break;
            case TYPE_BET_ALLIN://All In
                console.log("玩家ID:"+ betChipData.CSID+ "All In!");
                break;
            case TYPE_BET_PK://比牌
                break;
        }

        if(betChipData.type== TYPE_BET_ALLIN){//All In
            this.createAllInBetCoins(betChipData.CSID,betChipData.thisTimeBetCoins)
        }else{
            this.createNormalBetCoins(betChipData.CSID,betChipData.thisTimeBetCoins)
        }
        if(!isSelfClickToBet){//Pk、下底注、别人下注
            //Todo:是否有用,此处数据为空。
            JinHuaTablePlayer.refreshCurrentPlayer(betChipData["currentPlayer"]);
            //更新牌桌基本信息
            JinHuaTableLogic.updateTableTitle();
        }else{
            this.isSelfBet= true;
        }
    },
    //获取All In下注数组
    getAllInChipArray:function(thisTimeBetCoins){
        return this.getChipArray(thisTimeBetCoins);
    },
    //获取筹码数组
    getChipArray:function(thisTimeBetCoins){
        var  coinTable = {};
        //500w
        coinTable[COIN_TYPE_500W] = Math.floor(thisTimeBetCoins / 5000000);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_500W] * 5000000;
        //200w
        coinTable[COIN_TYPE_200W] = Math.floor(thisTimeBetCoins / 2000000);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_200W] * 2000000;
        //100w
        coinTable[COIN_TYPE_100W] = Math.floor(thisTimeBetCoins / 1000000);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_100W] * 1000000;
        //50w
        coinTable[COIN_TYPE_50W] = Math.floor(thisTimeBetCoins / 500000);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_50W] * 500000;
        //20w
        coinTable[COIN_TYPE_20W] = Math.floor((thisTimeBetCoins) / 200000);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_20W] * 200000;
        //10w
        coinTable[COIN_TYPE_10W] = Math.floor((thisTimeBetCoins) / 100000);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_10W] * 100000;
        //5w
        coinTable[COIN_TYPE_5W] = Math.floor((thisTimeBetCoins) / 50000);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_5W] * 50000;
        //2w
        coinTable[COIN_TYPE_2W] = Math.floor((thisTimeBetCoins) / 20000);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_2W] * 20000;
        //1w
        coinTable[COIN_TYPE_1W] = Math.floor((thisTimeBetCoins) / 10000);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_1W] * 10000;
        //5k
        coinTable[COIN_TYPE_5K] = Math.floor((thisTimeBetCoins) / 5000);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_5K] * 5000;
        //2k
        coinTable[COIN_TYPE_2K] = Math.floor((thisTimeBetCoins) / 2000);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_2K] * 2000;
        //1k
        coinTable[COIN_TYPE_1K] = Math.floor((thisTimeBetCoins) / 1000);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_1K] * 1000;
        //500
        coinTable[COIN_TYPE_5H] = Math.floor((thisTimeBetCoins) / 500);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_5H] * 500;
        //200
        coinTable[COIN_TYPE_2H] = Math.floor((thisTimeBetCoins) / 200);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_2H] * 200;
        //100
        coinTable[COIN_TYPE_1H] = Math.floor((thisTimeBetCoins) / 100);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_1H] * 100;
        //50
        coinTable[COIN_TYPE_50] = Math.floor((thisTimeBetCoins) / 50);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_50] * 50;
        //20
        coinTable[COIN_TYPE_20] = Math.floor((thisTimeBetCoins) / 20);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_20] * 20;
        //10
        coinTable[COIN_TYPE_10] = Math.floor((thisTimeBetCoins) / 10);
        thisTimeBetCoins = thisTimeBetCoins - coinTable[COIN_TYPE_10] * 10;

        return coinTable;
    },
    //金币飞向赢家
    flyCoinsAnim:function(){
        //清除上一局的金币动画
        JinHuaTableCoin.removeAllChipFlashBgSprites();
        var pos= JinHuaTablePlayer.getWinPlayerPos();

        var playerSpritesPos= cc.p(0,0);
        var player= JinHuaTablePlayer.getPlayers()[pos];
        var spritePlayer= Profile_JinHuaTableConfig.getSpritePlayers()[pos];

        if(player){
            playerSpritesPos= player.getCenterPos();
        }else{
            playerSpritesPos.x = spritePlayer.locX + Profile_JinHuaTableConfig.playerWidth / 2;
            playerSpritesPos.y = spritePlayer.locY + Profile_JinHuaTableConfig.playerHeight / 2;
        }
        var chipSpriteSpeed = 800 * Profile_JinHuaTableConfig.TableScaleX; //速度(像素/秒);

        //筹码数量
        var chipCount= Common.getTableSize(this.coinArray);
        this.flyOneCoinEndAddCoinNum = Math.floor((player.remainCoins - player.getCurrentShowingCoinNum())/chipCount);

        for(var key in JinHuaTableCoin.coinArray){
           if(JinHuaTableCoin.coinArray[key]== null|| JinHuaTableCoin.coinArray[key]== undefined) continue;
            var chipSpritesX = JinHuaTableCoin.coinArray[key].getPositionX() + JinHuaTableCoin.coinArray[key].getContentSize().width / 2;
            var chipSpritesY = JinHuaTableCoin.coinArray[key].getPositionY() + JinHuaTableCoin.coinArray[key].getContentSize().height / 2;

            var distance = Math.sqrt(Math.pow(chipSpritesX - playerSpritesPos.x, 2) + Math.pow(chipSpritesY - playerSpritesPos.y, 2));
            var seq= cc.sequence(cc.moveTo(distance / chipSpriteSpeed, playerSpritesPos),cc.removeSelf(true),cc.callFunc(JinHuaTableCoin.coinsMoveEnd));
            JinHuaTableCoin.coinArray[key].runAction(seq);
        }
        JinHuaTableCoin.JinHuaTableCoinLayer.runAction(cc.sequence(cc.delayTime(1.0), cc.callFunc(JinHuaTableCoin.clearTableAfterFlyCoin)));
    },
    //飞完金币后清理牌桌
    clearTableAfterFlyCoin:function(){
        //清理牌桌上的金币
        JinHuaTableCoin.clearCoins();
        //清理牌桌上的纸牌
        JinHuaTableCard.clearCards();
        //清空庄家图标
        JinHuaTablePlayer.hideDealerIcon();

        var winnerPlayer= JinHuaTablePlayer.getPlayers()[JinHuaTablePlayer.getWinPlayerPos()];

        if(winnerPlayer){
            winnerPlayer.setCoin();
        }
        //展示游戏结果
        JinHuaTableLogic.gameResultOperation();
    }
};