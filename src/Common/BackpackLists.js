//小游戏图片尺寸
var backpackCellSize= cc.size(100, 136);
//TableView
var tableViewSize= cc.size(605, 210);
var tableViewPos= cc.p(277, 69);//居中位置
const columnSize= 6;//一共多少列(行、列中有一个数为常量,需要计算的数初始化为0)

var BackpackLists= {
    m_parent:null,//视图
    m_tableView:null,//TableView视图
    m_tableViewPos:cc.p(0,0),//视图列表位置
    m_rowSize:0,//行数
    m_cellSize:0,//单元数量
    m_arrCell:[],//单元数组
    //设置单元的数量
    setCellSize:function(cnt){
        this.m_cellSize= cnt;
    },
    //设置行数
    setRowSize:function(cnt){
        this.m_rowSize= cnt;
    },
    init:function(parent){
        this.m_arrCell= [];
        this.m_parent= parent;
        this.m_tableViewPos= cc.p(tableViewPos.x, tableViewPos.y);
        this.preLoad();
    },
    //预加载资源
    preLoad:function(){
        var self= this;
        cc.loader.load(["res/btn_gerenxinxi_tubiaokuang.png"], function(){}, function(){
            //加载完成
            self.initBackpack();
            self.showItems(ProfileOtherUserInfo.getBackpackTable());
        });
    },
    initBackpack:function(){
        var tableView = new cc.TableView(this, tableViewSize);
        tableView.setDirection(cc.SCROLLVIEW_DIRECTION_VERTICAL);//水平滑动
        tableView.setDelegate(this);//设置回调函数的路径(this.tableCellTouched)
        tableView.setPosition(this.m_tableViewPos);
        this.m_parent.addChild(tableView, 2);
        //重新加载数据
        tableView.reloadData();

        var cell;
        cell = new cc.TableViewCell();
        for(var i=0; i< this.m_rowSize; ++i){
            for(var j= 0;j< columnSize; ++j){
                var sprite = new cc.Sprite(Common.getJinHuaResourcePath("btn_gerenxinxi_tubiaokuang.png"));
                sprite.setAnchorPoint(0,0.5);
                sprite.setPosition(backpackCellSize.width* j+ 10, (this.m_rowSize- i- 0.275)* backpackCellSize.height);
                cell.addChild(sprite);
                this.m_arrCell[i* columnSize+ j]= sprite;
            }
        }
        tableView.addChild(cell);

        this.m_tableView= tableView;
    },
    //重写TableView的tableCellSizeForIndex函数
    tableCellSizeForIndex:function (table, idx) {
        return cc.size(backpackCellSize.width* columnSize, backpackCellSize.height);
    },
    //重写TableView的tableCellAtIndex函数
    tableCellAtIndex:function (table, idx) {
        var strValue = idx.toFixed(0);
        var cell = table.dequeueCell();
        cell = new cc.TableViewCell();
        return cell;
    },
    //单元数量-重写TableView的tableCellAtIndex函数
    numberOfCellsInTableView:function (table) {
        return this.m_rowSize;
    },
    //触摸结束-重写TableView的tableCellAtIndex函数
    tableCellTouched:function (table, cell) {
        console.log("cell touched at index: " + cell.getIdx());
    },
    //设置TouchEnabled可否使用
    setTouchEnabled:function(bEnabled){
        this.m_tableView.setDelegate(bEnabled?this:null);
        //设置TableView不可滑动
        this.m_tableView.setTouchEnabled(bEnabled?false:bEnabled);
    },
    showItems:function(dataTable){
        var self= this;
        self.showItem(dataTable, 0);
    },
    //因为使用异步加载的缘故，++i不准确
    showItem:function(dataTable,i){
        var self= BackpackLists;
        if(i>= self.m_cellSize) return;
        if((i>= self.m_arrCell.length)&&(self.m_arrCell.length!= 0)) return;
        var cellSize= self.m_arrCell[i].getContentSize();
        Common.addSpriteByNet(dataTable[i].picUrl, function(sprite){
            sprite.setPosition(cellSize.width* 0.5,cellSize.height* 0.5);
            sprite.setScale(0.75);
            self.m_arrCell[i].addChild(sprite, 1);


            var num= cc.LabelTTF.create(dataTable[i].count, "微软雅黑",10);
            num.setPosition(cc.p(cellSize.width* 0.8,cellSize.height* 0.88));
            self.m_arrCell[i].addChild(num, 1);

            //递归调用
            self.showItem(dataTable, ++i);
        });
    },
    setBackpackListsVisible:function(bVisible){
        this.m_tableView.setVisible(bVisible);
    }
};