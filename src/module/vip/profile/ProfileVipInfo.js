//数据图标集
var ProfileVipInfo= {
    VipsDataTable:null,//JINHUA_MGR_VIP_INFO消息回调-Table
    VipsInfoTable:null,//JINHUA_MGR_VIP_INFO消息回调-Vip列表
    curPageID:0,//当前页
    maxPage:0,//最大页数
    setVipsDataTable:function(dataTable){
        this.VipsDataTable= dataTable;
        this.setVipsInfoTable(dataTable["VipsInfo"]);
    },
    getVipsDataTable:function(){
        return this.VipsDataTable;
    },
    setVipsInfoTable:function(dataTable){
        this.VipsInfoTable= dataTable;
    },
    getVipsInfoTable:function(){
        return this.VipsInfoTable;
    }
};