var JinHuaTableCheckButton= {
    checkButtonBgSprite:null,//滑动条背景
    checkButtonPointSprite:null,//滑动条眼睛
    checkButtonBgEleTable:{},//背景上元素table
    startTouchPosX:0,//起始触摸点
    listener:null,//监听机制
    bVisible:false,//是否显示
    eyeInitPos:cc.p(538, 226),//眼睛的初始位置
    hideEleID:0,//当前要隐藏的元素ID
    clear:function(){
        Common.judgeValueIsEffect(this.checkButtonBgSprite)&&this.checkButtonBgSprite.removeFromParent(true);
        this.checkButtonBgSprite= null;

        Common.judgeValueIsEffect(this.checkButtonPointSprite)&&this.checkButtonPointSprite.removeFromParent(true);
        this.checkButtonPointSprite= null;

        for(var key in this.checkButtonBgEleTable){
            if(!Common.judgeValueIsEffect(this.checkButtonBgEleTable[key])) continue;
            this.checkButtonBgEleTable[key].removeFromParent(true);
        }
        this.checkButtonBgEleTable= {};

        this.startTouchPosX= 0;

        Common.judgeValueIsEffect(this.listener)&&cc.eventManager.removeListener(this.listener);
        this.listener= null;

        this.bVisible= false;
    },
    //创建看牌按钮
    createCheckButton:function(){
        this.clear();

        //看牌滑动条背景
        this.checkButtonBgSprite =  cc.Sprite.create("#ui_kanpaidi.png");
        this.checkButtonBgSprite.setPosition(609, 226);
        this.checkButtonBgSprite.setZOrder(22);
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(this.checkButtonBgSprite);

        var bgSize= this.checkButtonBgSprite.getContentSize();
        /***************看牌提示上的元素**********************/
        //三个箭头
        for(var i=0; i< 3; ++i){
            var arrowSprite = cc.Sprite.create("#ui_jiantou.png");
            arrowSprite.setPosition(-16 + bgSize.width/2+ i* 16, bgSize.height/2);
            this.checkButtonBgSprite.addChild(arrowSprite);
            this.checkButtonBgEleTable[i]= arrowSprite;
        }

        var lookCardSprite = cc.Sprite.create("#ui_kanpaizi.png");
        lookCardSprite.setPosition(55 + bgSize.width/2, bgSize.height/2);
        this.checkButtonBgSprite.addChild(lookCardSprite);
        this.checkButtonBgEleTable[3]= lookCardSprite;

        //看牌滑动眼睛
        this.checkButtonPointSprite = cc.Sprite.create("#ui_yanjing.png");
        this.checkButtonPointSprite.setPosition(this.eyeInitPos);
        this.checkButtonPointSprite.setZOrder(23);
        JinHuaTablePlayer.getJinHuaTablePlayerLayer().addChild(this.checkButtonPointSprite);

        //添加监听机制
        this.addTouchListener();
        //默认不显示
        this.setCheckVisible(false);
    },
    //添加触摸监听机制(点击、滑动)
    addTouchListener:function(){
        var self= this;
        self.listener= cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,//点对点触摸
            swallowTouches:true,//是否吞噬其他监听事件
            onTouchBegan:self.onTouchBegan,
            onTouchMoved:self.onTouchMoved,
            onTouchEnded:self.onTouchEnded
        });
    },
    //开始触摸
    onTouchBegan:function(touch, event){
        //获取对象
        var target= event.getCurrentTarget();
        var size= target.getContentSize();
        var locationPos= touch.getLocation();
        var rect= cc.rect(target.getPositionX()- size.width* 0.5, target.getPositionY()- size.height* 0.5, size.width, size.height);
        //判断是否在对象的范围点击
        if(cc.rectContainsPoint(rect, locationPos)){
            JinHuaTableCheckButton.startTouchPosX= locationPos.x;
            return true;
        }
        return false;
    },
    //滑动
    onTouchMoved:function(touch, event){
        var curPos= touch.getLocation();
        var step= curPos.x- JinHuaTableCheckButton.startTouchPosX;
        JinHuaTableCheckButton.eyeMoving(touch.getDelta().x);
        if(step> 50){//滑动超过50个像素，可以开牌
            JinHuaTableCheckButton.onLookCard();
        }
    },
    //结束监听
    onTouchEnded:function(touch, event){
        JinHuaTableCheckButton.onLookCard();
    },
    //可以开牌
    onLookCard:function(){
        ((this.bVisible)&&(this.setCheckVisible(false)));
        //向后台发送<看牌>请求
        sendJHID_LOOK_CARDS();
    },
    //设置是否显示看牌提示
    setCheckVisible:function(bVisible){
        this.bVisible= ((bVisible== undefined)?false:bVisible);
        this.checkButtonBgSprite.setVisible(this.bVisible);
        this.checkButtonPointSprite.setVisible(this.bVisible);
        if(this.bVisible){
            //还原眼睛位置
            this.checkButtonPointSprite.setPosition(this.eyeInitPos);
            this.startEyeAnimation();
            cc.eventManager.addListener(this.listener, this.checkButtonBgSprite);
        }else{
            cc.eventManager.removeListener(this.listener);
        }
    },
    //显示所有元素
    hideAllEye:function(){
        this.checkButtonBgSprite.stopAllActions();
        for(var key in this.checkButtonBgEleTable){
            if(!Common.judgeValueIsEffect(this.checkButtonBgEleTable[key])) continue;
            this.checkButtonBgEleTable[key].setVisible(false);
        }
    },
    //隐藏某个元素之后所有元素 做动画用
    showOneEle:function(){
        JinHuaTableCheckButton.checkButtonBgEleTable[JinHuaTableCheckButton.hideEleID].setVisible(true);
        JinHuaTableCheckButton.hideEleID++;
        if(JinHuaTableCheckButton.hideEleID>= 4){//动画元素全部隐藏完毕
            JinHuaTableCheckButton.hideEleID= 0;
            var seq= cc.sequence(cc.delayTime(5), cc.callFunc(JinHuaTableCheckButton.startEyeAnimation));
            JinHuaTableCheckButton.checkButtonBgSprite.runAction(seq);
        }
    },
    //开始眼睛动画
    startEyeAnimation:function(){
        JinHuaTableCheckButton.hideAllEye();
        JinHuaTableCheckButton.checkButtonBgSprite.stopAllActions();
        var seq= cc.sequence(cc.delayTime(0.1), cc.callFunc(JinHuaTableCheckButton.showOneEle));
        JinHuaTableCheckButton.checkButtonBgSprite.runAction(seq.repeatForever());
    },
    //眼睛移动
    eyeMoving:function(xStep){
        this.hideAllEye();
        var posX= this.checkButtonPointSprite.getPositionX();
        this.checkButtonPointSprite.setPositionX(posX+ xStep);
    }
};