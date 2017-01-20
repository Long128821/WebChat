var Profile_JinHuaRevive= {
    JinHuaReviveInfoTable:null,//进入大厅，获取破产送金信息
    JinHuaReviveTable:null,
    hasRelive:false,//是否有破产礼包
    lastTime:0,//距离破产送金还有多少秒
    reviveCoin:0,//破产送金金额
    //进入大厅，获取破产送金信息
    getJinHuaReviveInfoTable:function(){
        return this.JinHuaReviveInfoTable;
    },
    //进入大厅，获取破产送金信息
    getJinHuaReviveTable:function(){
        return this.JinHuaReviveTable;
    },
    //是否有破产礼包
    getHasRelive:function(){
        return this.hasRelive;
    },
    //获取距离破产送金还有多少秒
    getLastTime:function(){
        return this.lastTime;
    },
    setLastTime:function(lastTime){
        return this.lastTime= lastTime== undefined?0:lastTime;
    },
    //获取破产金
    getReviveCoin:function(){
        return this.reviveCoin;
    },
    //获取破产送金信息
    slot_JINHUA_MGR_REVIVE_INFO:function(dataTable){
        if(Common.judgeValueIsEffect(dataTable)){
            Profile_JinHuaRevive.JinHuaReviveInfoTable= dataTable;
            Profile_JinHuaRevive.hasRelive= (dataTable["hasRelive"]== 1);
            //是否有破产礼包
            if(dataTable["hasRelive"]== 1){
                Profile_JinHuaRevive.lastTime= dataTable["Time"];
            }
        }
//        console.log("Todo:破产金");
//        console.log(dataTable);
    },
    //获取破产金
    slot_JINHUA_MGR_REVIVE:function(dataTable){
        if(Common.judgeValueIsEffect(dataTable)){
            Profile_JinHuaRevive.JinHuaReviveTable= dataTable;
            Profile_JinHuaRevive.reviveCoin= dataTable["Coin"];
            Profile_JinHuaRevive.hasRelive= false;
        }
    }
};

Frameworks.addSlot2Signal(JINHUA_MGR_REVIVE_INFO, Profile_JinHuaRevive.slot_JINHUA_MGR_REVIVE_INFO);
Frameworks.addSlot2Signal(JINHUA_MGR_REVIVE, Profile_JinHuaRevive.slot_JINHUA_MGR_REVIVE);
