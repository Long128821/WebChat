//数据图标集
var ProfileRenWu= {
    m_curPageID:0,//当前页面ID 0-每日任务 1-成就任务
    dailyTaskListTable:null,//每日任务列表
    lifeTimeTaskListTable:null,//成就任务列表
    //每日任务列表
    slot_COMMONS_DAILYTASK:function(dataTable){
        ProfileRenWu.dailyTaskListTable= dataTable;
        //创建TableView列表
        RenWuLogic.createTableView();
    },
    //获取每日任务列表
    getDailyTaskListTable:function(){
        return this.dailyTaskListTable;
    },
    //成就任务列表
    slot_COMMONS_LIFETIME_TASKLIST:function(dataTable){
        ProfileRenWu.lifeTimeTaskListTable= dataTable;
        //创建TableView列表
        RenWuLogic.createTableView();
    },
    //获取成就任务列表
    getLifeTimeTaskListTable:function(){
        return this.lifeTimeTaskListTable;
    },
    //任务奖励
    slot_COMMONS_GET_DAILYTASK_PRIZE:function(dataTable){
        console.log(dataTable);
        console.log(dataTable["IsSuccess"]);
        console.log(dataTable["Msg"]);
        //刷新列表
        sendCOMMONS_DAILYTASK();
    },
    //获取当前活动的任务列表
    getActiveTaskListTable:function(){
        return this.m_curPageID== 0?this.dailyTaskListTable:this.lifeTimeTaskListTable;
    }
};