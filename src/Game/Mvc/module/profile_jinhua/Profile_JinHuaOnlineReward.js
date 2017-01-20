var Profile_JinHuaOnlineReward= {
    GetOnlineRewardTable:{},
    BaoheStepInfoTable:{},
    //领取在线奖励
    getGetOnlineRewardTable:function(){
        return this.GetOnlineRewardTable;
    },
    //获取在线时长奖励
    getBaoheStepInfoTable:function(){
        return this.BaoheStepInfoTable;
    },
    //领取在线奖励
    readJHID_GET_ONLINE_REWARD:function(dataTable){
        this.GetOnlineRewardTable= dataTable;
    },
    //获取在线时长奖励
    readJHID_GET_BAOHE_STEP_INFO:function(dataTable){
        this.BaoheStepInfoTable= dataTable;
    }
};
