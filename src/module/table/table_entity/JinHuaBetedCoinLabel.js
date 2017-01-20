/**
 * Func:牌桌上的每个玩家头像旁边的下注金额
 *      背景
 *      金币图标
 *      金币数量
 * coinBg <-- coinIcon和coinLabel
 * 存放在coinBg中,并将coinBg添加到View，显示出来。
 */
/**
 * Func:构造函数(缺省)
 * @param pos 坐标X或者坐标cc.p
 * @param y 坐标Y
 */
function JinHuaBetedCoinLabel(pos, y){
    this.clear();//释放元素
    (y!= undefined)&&(pos= cc.p(pos, y));//缺省构造函数
     this.init(pos);//初始化函数
}
//释放
JinHuaBetedCoinLabel.prototype.clear= function(){
    (Common.judgeValueIsEffect(this.coinLabel))&&this.coinLabel.removeFromParent(true);
    this.coinIcon= null;

    (Common.judgeValueIsEffect(this.coinIcon))&&this.coinIcon.removeFromParent(true);
    this.coinLabel= null;

    (Common.judgeValueIsEffect(this.coinBg))&&this.coinBg.removeFromParent(true);
    this.coinBg= null;
};

/**
 * Func:初始化函数-加注金币模块(背景、金币图标、金币数量)
 * @param pos cc.Node的位置坐标
 */
JinHuaBetedCoinLabel.prototype.init= function(pos){
    //加注模块背景
    this.coinBg = cc.Sprite.create("#ui_paizhuo_gerenxiazhudi.png");
    this.coinBg.setPosition(cc.pAdd(pos, cc.p(35,20)));

    //背景尺寸
    var bgSize= this.coinBg.getContentSize();

    //金币图标
    this.coinIcon = cc.Sprite.create("#ic_gerenxiachoumatubiao.png");
    this.coinIcon.setPosition(bgSize.width / 10,bgSize.height / 2);
    this.coinBg.addChild(this.coinIcon);

    //金币数量
    this.coinLabel = cc.LabelTTF.create("", "Arial", 24);
    this.coinLabel.setColor(cc.color(255, 255, 255));//白色
    this.coinLabel.setPosition(bgSize.width * 6 / 10,bgSize.height / 2);
    this.coinBg.addChild(this.coinLabel);

    this.coinBg.setZOrder(30);
};

/**
 * Func:设置下注金额,如果参数不是有效的,隐藏该节点。
 * @param value 下注金额
 */
JinHuaBetedCoinLabel.prototype.setBetCoin= function(value){
    if(value== undefined||value== null||value<= 0){
        this.coinBg.setVisible(false);
    }else{
        this.coinLabel.setString(value);
        this.coinBg.setVisible(true);
    }
};

/**
 * Func:获取玩家已下注金币背景
 */
JinHuaBetedCoinLabel.prototype.getCoinBg= function(){
   return this.coinBg;
};
