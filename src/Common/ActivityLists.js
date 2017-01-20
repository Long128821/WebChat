var arrActivityLists= [
    /*****活动列表*****/
    "res/ui_hall_tuiguang_yibudaowei.png",
    "res/ui_hall_tuiguang_fuxinggaozhao.png",

    /**单选框按钮***/
    "res/ui_hall_tuiguangfenye_dangqianye.png",
    "res/ui_hall_tuiguangfenye_yemadi.png"
];

var activitySize= cc.size(454, 190);//每一个单元的尺寸
var offset= 20;//指示标识符的间隔
var radioSize= cc.size(12, 12);//单选框的背景尺寸
var delayTime= 3000;//3s切换一次

//大厅界面的活动列表
var ActivityLists= {
    m_parent:null,//视图
    m_pageViewPos:cc.p(0,0),//视图列表位置
    m_activityCnt:arrActivityLists.length-2,//当前活动数量
    m_arrRadioButton:[],//单选框按钮
    m_arrCellButton:[],//活动列表单元
    m_pageView:null,//PageView视图
    m_activityTimer:null,//切换定时器
    /**
     * Func:初始化
     * @param parent view界面
     * @param pos pageview的位置
     */
    init:function(parent, pos){
        this.m_parent= parent;
        this.m_pageViewPos= pos;
        this.preLoad();//预加载资源
    },
    //预加载资源
    preLoad:function(){
        var self= this;
        this.m_arrRadioButton= [];//指示数组
        this.m_arrCellButton= [];
        this.m_activityCnt= arrActivityLists.length-2;//活动列表= 去除两个按钮
        //预加载资源
        cc.loader.load(arrActivityLists, function(){}, function(){
            //加载完成
            self.initActivityLists();
            self.initRadioButton();
            self.autoChange();
        });
    },
    //初始化活动列表
    initActivityLists:function(){
        var pageView = new ccui.PageView();
        pageView.setPosition(this.m_pageViewPos);
        pageView.setTouchEnabled(true);
        pageView.setContentSize(activitySize);

        //为PageView添加Cell(ccui.Button类型)
        for (var i = 0; i < this.m_activityCnt; ++i) {
            var button = new ccui.Button(arrActivityLists[i]);
            button.x = activitySize.width / 2;
            button.y = activitySize.height / 2;

            //仅仅触发一次
            button.addClickEventListener(this.buttonEvent);
//            //触发多次
//            button.addTouchEventListener(this.buttonEvent, this);
            button.setTag(i);
            pageView.addPage(button, 2);

            this.m_arrCellButton[i]= button;
        }
        this.m_tableView= pageView;
        //在view中，添加节点，zOrder为2
        this.m_parent.addChild(this.m_tableView, 2);
        this.m_tableView.addEventListener(this.pageViewEvent, this);
    },
    //单选框
    initRadioButton:function(){
        //设置单选框的起始位置= 活动列表宽度的 - (对应数量- 1)* 间隔 - 单选框按钮的宽度 * 对应数量
        //单选框的锚点为(0, 0.5)
        var startPosX= (activitySize.width- (this.m_activityCnt- 1)* offset- radioSize.width* this.m_activityCnt)* 0.5;
        for(var i=0; i< this.m_activityCnt; ++i){
            var sprite= cc.Sprite.create("res/ui_hall_tuiguangfenye_yemadi.png");
            sprite.setAnchorPoint(0, 0.5);//设置锚点
            //对应下标的X位置(相对坐标)= 起始位置 + 下标* (偏移量+ 单选框的宽度)
            sprite.setPosition(cc.pAdd(cc.p(startPosX+ i* (offset+ radioSize.width), -15),this.m_pageViewPos));
            this.m_parent.addChild(sprite, 2);
            //存储
            this.m_arrRadioButton[i]= sprite;
        }

        //初始时，始终为0(选中标志)
        this.changeRadioButton(0);
    },
    //启动切换
    autoChange:function(){
        var self= this;
        //切换定时器
        this.m_activityTimer= setInterval(function(delta){
            self.autoChangeRadioButton();
        }, delayTime);
    },
    //自动切换
    autoChangeRadioButton:function(){
        var self= this;

        var nextActivityID= this.getNextActivityID();

        self.m_tableView.scrollToItem((nextActivityID)%(self.m_activityCnt));
    },
    /**
     * Func:切换标志
     * @param type 初始化时才可以为0
     */
    changeRadioButton:function(type){
        var self= this;
        //当前活动的ID
        var curActivityID= this.getCurActivityID();
        var preActivityID= ((type== undefined)?this.getPreActivityID():0);

        //移除选中标志
        self.m_arrRadioButton[preActivityID].removeAllChildren();
        //更新指示
        var sprite= cc.Sprite.create("res/ui_hall_tuiguangfenye_dangqianye.png");
        var backSpriteSize= self.m_arrRadioButton[curActivityID].getPosition();
        sprite.setAnchorPoint(0.5, 0.5);
        sprite.setPosition(backSpriteSize.width* 0.5, backSpriteSize.height* 0.5);
        self.m_arrRadioButton[curActivityID].addChild(sprite);
    },
    //获取当前的PageID
    getCurActivityID:function(){
        return this.m_tableView.getCurPageIndex();
    },
    //获取当前的PageID
    getPreActivityID:function(){
        var curActivityID= this.getCurActivityID()+ this.m_activityCnt;
        return (--curActivityID)%(this.m_activityCnt);
    },
    //获取需要转到的id
    getNextActivityID:function(){
        var curActivityID= this.getCurActivityID();
        return (++curActivityID)%(this.m_activityCnt);
    },
    /**
     * Func:根据Tag区分，按钮的类型
     * @param pSender ccui.Button
     * @param type 事件类型
     */
    buttonEvent: function (pSender, type) {
        console.log("Tag:"+ pSender.getTag());
    },
    /**
     * Func:PageView的响应事件
     * @param pageView ccui.PageView
     * @param cell 单元
     */
    pageViewEvent: function (pageView, cell) {
        ActivityLists.changeRadioButton();
    },
    //设置TouchEnabled可否使用
    setTouchEnabled:function(bEnabled){
        for (var i = 0; i < this.m_arrCellButton.length; ++i) {
            var button = this.m_arrCellButton[i];
            button.setTouchEnabled(bEnabled== undefined?false:bEnabled);
        }
        //设置PageView控件不可滑动
        this.m_tableView.setTouchEnabled(bEnabled== undefined?false:bEnabled);
    }
};

//Todo:关闭定时器
