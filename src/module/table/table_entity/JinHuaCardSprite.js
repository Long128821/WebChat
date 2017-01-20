/**
 * Func:纸牌精灵
 *      牌值:
 *          [1-13]:方块
 *          [14-26]:梅花
 *          [27-39]:红桃
 *          [40-52]:黑桃
 *
 *          2,3,4,5,6,7,8,9,10,J,Q,K,A === 1,2,3,4,
 *     将CardSprite存放在JinHuaTablePlayer层中，显示出来
 *
 *     遮蔽层(弃牌标记)
 */
//构造函数
function CardSprite(){
    //清理数据
    this.clear();
    //调用初始化函数
    this.init();
}
/**
 * Func:清理数据
 */
CardSprite.prototype.clear= function(){
    (Common.judgeValueIsEffect(this.cardSprite))&&this.cardSprite.removeFromParent(true);
    this.cardSprite= null;//精灵本身
    (Common.judgeValueIsEffect(this.front))&&this.front.removeFromParent(true);
    this.front= null;//正面背景(白板)
    (Common.judgeValueIsEffect(this.back))&&this.back.removeFromParent(true);
    this.back= null;//反面背景(默认显示反面,因为纸牌一般都是默认扣上)
    (Common.judgeValueIsEffect(this.valueSprite))&&this.valueSprite.removeFromParent(true);
    this.valueSprite= null;//左上角的牌值
    (Common.judgeValueIsEffect(this.cardTypeBigSprite))&&this.cardTypeBigSprite.removeFromParent(true);
    this.cardTypeBigSprite= null;//大牌花
    (Common.judgeValueIsEffect(this.cardTypeSmallSprite))&&this.cardTypeSmallSprite.removeFromParent(true);
    this.cardTypeSmallSprite= null;//小牌花

    this.needCover= false;//是否显示遮蔽层

    this.value= null;
};
/**
 * Func:初始化函数,相当于构造函数
 * @returns 纸牌精灵(cc.Sprite)
 */
CardSprite.prototype.init= function(){
    //创建纸牌反面背景精灵
    this.cardSprite= cc.Sprite.create("#desk_cardbg.png");
    this.cardSprite.setZOrder(2);
    //设置纸牌的高度和宽度尺寸
    this.cardSprite.setContentSize(cc.size(Profile_JinHuaTableConfig.cardWidth, Profile_JinHuaTableConfig.cardHeight));

    //反面背景(默认显示反面,因为纸牌一般都是默认扣上)
    this.back= cc.Sprite.create("#desk_pokerback.png");
    var backSize= this.back.getContentSize();
    this.back.setPosition(backSize.width* 0.5, backSize.height* 0.5);
    this.cardSprite.addChild(this.back);

    //正面背景(白板)
    this.front= cc.Sprite.create("#desk_cardbg.png");
    var frontSize= this.front.getContentSize();
    this.front.setPosition(frontSize.width* 0.5, frontSize.height* 0.5);
    this.front.setVisible(false);
    this.cardSprite.addChild(this.front);
};
/**
 * Func:设置牌值
 * @param value 牌值(1-52 方块 梅花 红桃 黑桃)
 */
CardSprite.prototype.setCardValue= function(value){
    if(!Common.judgeValueIsEffect(value)) return;
    if(!Common.judgeValueIsEffect(this.front)) return;

    this.front.removeAllChildrenWithCleanup(true);//移除所有子节点
    this.cardSprite.value= value;//设置牌值(属性)
    //typeIndex == 1(方块)-2(梅花)-3(红桃)-4(黑桃)
    var typeIndex= Math.floor(value/ 13)+ 1;
    //valueIndex == 在数组{2,3,4,5,6,7,8,9,10,J,Q,K,A}中取
    var valueIndex= value % 13;

    //方块或者红桃 一致
    var valuePath= (typeIndex== 1||typeIndex== 3)?"#desk_card_redvalue_"+valueIndex+".png":"#desk_card_blackvalue_"+valueIndex+".png";
    //牌值(左上角)
    this.valueSprite= cc.Sprite.create(valuePath);
    this.valueSprite.setAnchorPoint(cc.p(0, 1));
    this.valueSprite.setPosition(2, this.front.getContentSize().height- 3);

    //大花色(整个牌面)
    this.cardTypeBigSprite= cc.Sprite.create("#desk_card_type"+ typeIndex+".png");
    this.cardTypeBigSprite.setAnchorPoint(cc.p(1,0));
    this.cardTypeBigSprite.setPosition(this.front.getContentSize().width- 10, 5);

    //小花色(左上角)
    this.cardTypeSmallSprite= cc.Sprite.create("#desk_card_type"+ typeIndex+".png");
    this.cardTypeSmallSprite.setAnchorPoint(cc.p(0, 1));
    this.cardTypeSmallSprite.setScale(0.4);
    this.cardTypeSmallSprite.setPosition(10, this.front.getContentSize().height- 35);

    this.front.addChild(this.valueSprite);//牌值
    this.front.addChild(this.cardTypeBigSprite);//大花色
    this.front.addChild(this.cardTypeSmallSprite);//小花色
};

//获取牌值
CardSprite.prototype.getCardValue= function(){
    return this.cardSprite.value;
};

//获取纸牌精灵
CardSprite.prototype.getCardSprite= function(){
    return this.cardSprite;
};

/**
 * Func:显示的背面的同时,隐藏正面
 */
CardSprite.prototype.showBack= function(){
    if(!Common.judgeValueIsEffect(this.back)) return;
    if(!Common.judgeValueIsEffect(this.front)) return;
    this.back.setVisible(true);
    this.front.setVisible(false);
};
/**
 * Func:显示正面的同时,隐藏背面
 */
CardSprite.prototype.showFront= function(){
    if(!Common.judgeValueIsEffect(this.back)) return;
    if(!Common.judgeValueIsEffect(this.front)) return;

    this.front.setVisible(true);
    this.back.setVisible(false);
    //是否需要遮蔽
    if(this.needCover== true){
        this.showCover();//显示遮蔽层
    }
};
/**
 * Func:显示遮蔽层
 */
CardSprite.prototype.showCover= function(){
    (Common.judgeValueIsEffect(this.front))&&(this.front.setColor(cc.color(125, 125, 125)));
    (Common.judgeValueIsEffect(this.back))&&(this.back.setColor(cc.color(125, 125, 125)));
    (Common.judgeValueIsEffect(this.cardTypeBigSprite))&&(this.cardTypeBigSprite.setColor(cc.color(125, 125, 125)));
    (Common.judgeValueIsEffect(this.cardTypeSmallSprite))&&(this.cardTypeSmallSprite.setColor(cc.color(125, 125, 125)));
    (Common.judgeValueIsEffect(this.valueSprite))&&(this.valueSprite.setColor(cc.color(125, 125, 125)));
    this.needCover= false;
};
/**
 * Func:设置是否显示遮蔽层
 * @param isNeed 是否显示
 */
CardSprite.prototype.setNeedCover= function(isNeed){
    this.needCover= isNeed== undefined?false:isNeed;
};
