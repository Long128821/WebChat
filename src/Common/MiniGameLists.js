//小游戏图标列表
var arrMiniGame= [
    "res/btn_hall_xiaoyouxi_baijiale.png",
    "res/btn_hall_xiaoyouxi_bairenniuniu.png",
    "res/btn_hall_xiaoyouxi_dezhoupuke.png",
    "res/btn_hall_xiaoyouxi_heihongmeifang.png",
    "res/btn_hall_xiaoyouxi_jiejibuyu.png",
    "res/btn_hall_xiaoyouxi_jinhuangguan.png",
    "res/btn_hall_xiaoyouxi_shuiguoji.png",
    "res/btn_hall_xiaoyouxi_wanrenjinhua.png",
    "res/btn_hall_xiaoyouxi_wanrenshuiguopai.png",
    "res/btn_hall_xiaoyouxi_zhajinhua.png",
    "res/btn_hall_xiaoyouxirukou1.png"
];

//小游戏图片尺寸
var miniGameSize= cc.size(251, 141);

var MiniGameLists= {
    m_parent:null,//视图
    m_tableView:null,//TableView视图
    m_tableViewPos:cc.p(0,0),//视图列表位置
    init:function(parent, pos){
        this.m_parent= parent;
        this.m_tableViewPos= pos;
        this.preLoad();
    },
    //预加载资源
    preLoad:function(){
        var self= this;
        cc.loader.load(arrMiniGame, function(){}, function(){
            //加载完成
            self.initMiniGame();
        });
    },
    initMiniGame:function(){
        var tableView = new cc.TableView(this, cc.size(cc.winSize.width, miniGameSize.height));
        tableView.setDirection(cc.SCROLLVIEW_DIRECTION_HORIZONTAL);//水平滑动
        tableView.setDelegate(this);//设置回调函数的路径(this.tableCellTouched)
        tableView.setAnchorPoint(0, 0);
        tableView.setPosition(this.m_tableViewPos);
        this.m_parent.addChild(tableView, 2);
        //重新加载数据
        tableView.reloadData();

        this.m_tableView= tableView;
    },
    //重写TableView的tableCellSizeForIndex函数
    tableCellSizeForIndex:function (table, idx) {
        return miniGameSize;
    },
    //重写TableView的tableCellAtIndex函数
    tableCellAtIndex:function (table, idx) {
        var strValue = idx.toFixed(0);
        var cell = table.dequeueCell();
        cell = new cc.TableViewCell();
        var sprite = new cc.Sprite(arrMiniGame[parseInt(strValue)]);
        sprite.setAnchorPoint(0,0);
        sprite.setPosition(0,0);
        cell.addChild(sprite);

        return cell;
    },
    //单元数量-重写TableView的tableCellAtIndex函数
    numberOfCellsInTableView:function (table) {
        return arrMiniGame.length;
    },
    //触摸结束-重写TableView的tableCellAtIndex函数
    tableCellTouched:function (table, cell) {
        console.log("cell touched at index: " + cell.getIdx());
    },
    //设置TouchEnabled可否使用
    setTouchEnabled:function(bEnabled){
        this.m_tableView.setDelegate(bEnabled?this:null);
        //设置TableView不可滑动
        this.m_tableView.setTouchEnabled(bEnabled==undefined?false:bEnabled);
    }
};
