//数据图标集
var ProfileFriendList= {
    m_curPageID:0,//当前页面ID 0- 我的好友 1- 追踪列表 2-陌生人
    m_friendListTable:null,//好友列表
    m_traceListTable:null,//追踪列表
    m_strangerLisTable:null,//陌生人列表
    m_arrFriendButton:[],//好友列表中的按钮数组
    m_bTouchEnabled:true,//是否可点击,默认可点击
    //获取好友列表
    slot_JINHUA_MGR_FRIEND_LIST:function(dataTable){
        ProfileFriendList.m_friendListTable= dataTable;
        FriendListLogic.createTableView();
    },
    //追踪列表
    slot_JINHUA_MGR_TRACE_LIST:function(dataTable){
        ProfileFriendList.m_traceListTable= dataTable;
    },
    //陌生人列表
    slot_JINHUA_MGR_STRANGER_LIST:function(dataTable){
        ProfileFriendList.m_strangerLisTable= dataTable;
    },
    //前往领取(slot_JINHUA_MGR_SIGN_FRIEND_REWARD)
    slot_JINHUA_MGR_SIGN_FRIEND_REWARD:function(dataTable){
        console.log(dataTable);
        if(dataTable["Result"]== 1){
            FriendListLogic.changeBtnState(dataTable["Flag"]- 1);
        }
    },
    //清空数据
    clearData:function(){
        this.m_curPageID= 0;
        this.m_friendListTable= null;
        this.m_traceListTable= null;
        this.m_strangerLisTable= null;
        this.m_arrFriendButton= [];
        this.m_bTouchEnabled= true;
    }
};
