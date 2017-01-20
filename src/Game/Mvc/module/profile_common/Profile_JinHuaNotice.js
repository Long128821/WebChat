var Profile_JinHuaNotice= {
    NoticeTable:null,//公告列表
    TimeStamp:0,//获取大厅公告时间戳
    m_curID:0,//当前的公告ID
    getTimeStamp:function(){
        return this.TimeStamp;
    },
    getNoticeTable:function(){
        return this.NoticeTable;
    },
    //获取一条公告
    getOneNotice:function(){
        var notice= "";
        var tableSize= Common.getTableSize(this.NoticeTable["RecordList"]);
        if(this.NoticeTable["RecordList"]!= null&& tableSize> 0){
            //获取Table中的第一个Key值
            var curID= this.getFirstIndex();
            notice= this.NoticeTable["RecordList"][curID];
            delete this.NoticeTable["RecordList"][curID];
        }else{
            notice= "";
            sendJINHUA_MGR_NOTICE(this.TimeStamp);
        }
        return notice;
    },
    //获取Table中的第一个数值
    getFirstIndex:function(){
        if(this.NoticeTable["RecordList"]== null) return -1;
        var tableSize= Common.getTableSize(this.NoticeTable["RecordList"]);
        if(tableSize> 0){
            for(var key in this.NoticeTable["RecordList"]){
                return key;
            }
        }
    },
    //读取公告
    readJINHUA_MGR_NOTICE:function(dataTable){
        if(dataTable== undefined||dataTable== null) return;
        this.NoticeTable= dataTable;
        this.TimeStamp= dataTable["NoticeTable"];
        if(dataTable["RecordList"]== null||dataTable["RecordList"]<= 0) return;
    }
};
