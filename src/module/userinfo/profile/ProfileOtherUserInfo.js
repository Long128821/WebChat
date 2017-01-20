//数据图标集
var ProfileOtherUserInfo= {
    BackpackTable:null,//JINHUA_MGR_BACKPACK_ITEMS_V2消息体
    ButtonTag:{
        Tag_Item:1,//小组件
        Tag_Save:2//保险箱
    },
    curButtonTag:1,//当前按钮ID
    //设置当前按钮的Tag
    setCurButtonTag:function(tag){
        this.curButtonTag= tag;
    },
    getCurButtonTag:function(){
        return this.curButtonTag;
    },
    initData:function(){

    },
    //JINHUA_MGR_BACKPACK_ITEMS_V2
    slot_JINHUA_MGR_BACKPACK_ITEMS_V2:function(dataTable){
        ProfileOtherUserInfo.BackpackTable= dataTable;
        OtherUserInfoLogic.initBackpack();
    },
    //JHID_STRONG_BOX_INFO
    slot_JHID_STRONG_BOX_INFO:function(dataTable){
        console.log("asdfasdf");
        console.log(dataTable);
    },
    //获取道具Table
    getBackpackTable:function(){
        return this.BackpackTable["BackpackList"];
    },
    //获取道具数量
    getBackpackListCnt:function(){
        return this.BackpackTable["BackpackListCnt"];
    }
};
