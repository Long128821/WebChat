var LoginLogic= cc.Scene.extend({
    onEnter:function(){
        this._super();
        this.addChild(new TestLayer());
    }
});

var TestLayer= cc.Layer.extend({
    ctor:function(){
        this._super();
        this.init();
    },
    init:function(){
        var Text= cc.Sprite.create("res/bg_1.png");
        Text.setPosition(cc.winSize.width* 0.5, cc.winSize.height* 0.5);
        this.addChild(Text);
    }
});