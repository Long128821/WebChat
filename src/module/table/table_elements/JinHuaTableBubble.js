//气泡类型
BUBBLE_TYPE_LOOKCARD = 0;//看牌
BUBBLE_TYPE_CALL = 1;//跟注
BUBBLE_TYPE_RAISE = 2;//加注
BUBBLE_TYPE_ALLIN = 3;//押满
BUBBLE_TYPE_DISCARD = 4;//弃牌
BUBBLE_TYPE_CHANGECARD = 5;//换牌
BUBBLE_TYPE_NO_PK = 6;//禁比
/**
 * Func:头像上的气泡(玩家操作类型)
 *      在PlayerLayer层上面添加元素。
 */
var JinHuaTableBubble= {
    bubblePicTable:[//对应气泡纹理
        "desk_action_msg_view.png",//看牌
        "desk_action_msg_follow.png",//跟注
        "desk_action_msg_raise.png",//加注
        "desk_action_msg_follow.png",//押满(All In)
        "desk_action_msg_giveup.png",//弃牌
        "desk_action_msg_changecard.png",//换牌
        "desk_action_msg_jinbi.png"//禁比
    ],
    //显示气泡
    showJinHuaTableBubble:function(CSID, bubbleType){
        //非有效气泡类型
        if(!Common.judgeValueIsEffect(this.bubblePicTable[bubbleType])) return;
        //在图片集缓存(在JinHuaTableLogic.js加载)中,创建精灵
        var bubbleSprite= cc.Sprite.create("#"+ this.bubblePicTable[bubbleType]);
        //获取牌桌上的所有玩家信息
        var players= JinHuaTablePlayer.getPlayers();
        //牌桌上有玩家 && 在牌桌上,有对应ID的玩家 && 玩家头像不为空
        if(!Common.judgeValueIsEffect(players)
            ||!Common.judgeValueIsEffect(players[CSID])
            ||!Common.judgeValueIsEffect(players[CSID].getPhotoFrame())) return;

        //获取玩家头像的中心点
        bubbleSprite.setPosition(players[CSID].getCenterPos());
        bubbleSprite.setZOrder(31);
        //移动气泡,暂停2s后,移除
        var seq= cc.sequence(
            cc.moveBy(0.5, cc.p(0, Profile_JinHuaTableConfig.bubbleSpriteMoveDistance)),
            cc.delayTime(2.0),
            cc.removeSelf(true)
        );
        bubbleSprite.runAction(seq);
        //向PlayerLayer添加气泡元素
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(bubbleSprite);
    }
};